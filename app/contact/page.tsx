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
            <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Let us Connect
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Lets build something meaningful.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I am interested in software development opportunities, product
              development, collaboration, freelance/client work, and engineering
              roles. Let us discuss how we can work together.
            </p>
          </div>
          <div className="rounded-4xl border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-950/60 dark:focus:border-slate-400 dark:focus:ring-slate-700/50"
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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-950/60 dark:focus:border-slate-400 dark:focus:ring-slate-700/50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
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
                <span className="font-semibold">Location:</span> Lahore, Punjab,
                Pakistan
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/ghaniusman19"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground transition hover:border-border hover:bg-surface dark:bg-surface-muted"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ghaniusman19"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground transition hover:border-border hover:bg-surface dark:bg-surface-muted"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
