import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactMessage = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const messagesFilePath = path.join(
  process.cwd(),
  "data",
  "contact-messages.json",
);

async function readMessages(): Promise<ContactMessage[]> {
  try {
    const file = await fs.readFile(messagesFilePath, "utf8");
    return JSON.parse(file) as ContactMessage[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function writeMessages(messages: ContactMessage[]) {
  await fs.mkdir(path.dirname(messagesFilePath), { recursive: true });
  await fs.writeFile(
    messagesFilePath,
    JSON.stringify(messages, null, 2),
    "utf8",
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const trimmedName = typeof body?.name === "string" ? body.name.trim() : "";
    const trimmedMessage =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!trimmedName || !trimmedMessage) {
      return NextResponse.json(
        { success: false, error: "Name and message are required." },
        { status: 400 },
      );
    }

    const messages = await readMessages();
    const entry: ContactMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: trimmedName,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    messages.push(entry);
    await writeMessages(messages);

    if (!resend || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        {
          success: true,
          message: "Message saved locally. Add Resend env vars to send email.",
        },
        { status: 201 },
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: ["usman.ghani@jjtestsite.us"],
      subject: `New portfolio message from ${trimmedName}`,
      html: `<p><strong>Name:</strong> ${trimmedName}</p><p><strong>Message:</strong><br />${trimmedMessage.replace(/\n/g, "<br />")}</p>`,
    });

    return NextResponse.json(
      { success: true, message: "Message saved and email sent." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to save message." },
      { status: 500 },
    );
  }
}

export async function GET() {
  const messages = await readMessages();
  return NextResponse.json(messages);
}
