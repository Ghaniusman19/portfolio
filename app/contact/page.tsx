"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      setStatus("Please enter both your name and your message.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: trimmedName, message: trimmedMessage }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setName("");
      setMessage("");
      setStatus("Thank you! Your message has been received.");
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Failed to send your message.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-surface-muted py-16 dark:bg-background sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Let’s Connect
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let’s create something modern, meaningful, and memorable.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Whether you need a polished portfolio, a fresh website, or a
              thoughtful redesign, I’d love to hear about your idea and help
              bring it to life.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Contact Form
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your project..."
                  maxLength={5000}
                  required
                  className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {status ? (
                <p
                  className="text-sm text-muted"
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </p>
              ) : null}
            </form>
            <div className="mt-8 border-t border-border/70 pt-6 text-sm text-foreground">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                usmighani1921@gmail.com
              </p>
              <p className="mt-2">
                <span className="font-semibold">Location:</span> Remote /
                Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
