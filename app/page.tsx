import Image from "next/image";
import TechStack from "@/components/TechStack";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-300/80 via-slate-200/60 to-transparent opacity-90 dark:from-slate-700/60 dark:via-slate-800/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.2),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(203,213,225,0.18),transparent_22%),radial-gradient(circle_at_60%_80%,rgba(226,232,240,0.18),transparent_20%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-7 motion-rise-in">
            <span className="inline-flex rounded-full border border-slate-300/80 bg-white/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase shadow-[0_8px_22px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 motion-glow">
              Software Engineer
            </span>

            <div className="space-y-4">
              <h1 className="motion-rise-in motion-delay-1 max-w-xl text-4xl font-semibold tracking-[-0.08em] text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Muhammad Usman Ghani
              </h1>
              <p className="motion-rise-in motion-delay-2 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Building scalable, modern web applications with React,
                TypeScript, Angular, Next.js and Node.js — while exploring the
                future of AI-powered software.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 motion-rise-in motion-delay-3">
              <a
                href="/projects"
                className="interactive-lift inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(79,70,229,0.25)] transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                View Projects
              </a>
              <a
                href="/Muhammad-Usman-Ghani-resume.pdf"
                download
                className="interactive-lift inline-flex items-center justify-center rounded-full border-2 border-indigo-600 bg-white/70 px-6 py-3.5 text-sm font-semibold text-indigo-600 backdrop-blur-xl hover:bg-indigo-50 dark:border-indigo-400 dark:bg-slate-900/70 dark:text-indigo-300 dark:hover:bg-slate-800/80"
              >
                Download Resume
              </a>
              <a
                href="/contact"
                className="interactive-lift inline-flex items-center justify-center rounded-full border-2 border-slate-400 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-xl hover:bg-slate-100 dark:border-slate-500 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800/80"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-600 motion-rise-in motion-delay-4 dark:text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                3S Solutions Pvt Ltd
              </div>
              <div className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70">
                Lahore, Pakistan
              </div>
            </div>
          </div>

          <div className="motion-drift-in relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-slate-400/25 via-slate-200/20 to-slate-500/25 blur-3xl dark:from-slate-500/20 dark:via-slate-700/20 dark:to-slate-400/15" />
            <div className="relative h-[420px] w-full overflow-hidden rounded-[30px] border border-slate-300/15 bg-slate-950/80 shadow-[0_35px_80px_rgba(15,23,42,0.4)] backdrop-blur-sm">
              <Image
                src="/usman-ghani-image.png"
                alt="Muhammad Usman Ghani"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="interactive-lift rounded-[1.7rem] border border-slate-200/90 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/75">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
              Frontend
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              React, Next.js, TypeScript, Angular
            </p>
          </div>
          <div className="interactive-lift rounded-[1.7rem] border border-slate-200/90 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/75">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
              Backend
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              Node.js, Express.js, REST APIs
            </p>
          </div>
          <div className="interactive-lift rounded-[1.7rem] border border-slate-200/90 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/75">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
              AI & Emerging
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              RAG, LLM Applications, Vector Databases
            </p>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}
