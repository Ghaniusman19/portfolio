import TechStack from "@/components/TechStack";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/20 to-transparent opacity-80" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 motion-rise-in">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary motion-glow">
              Front-End Developer
            </span>
            <h1 className="motion-rise-in motion-delay-1 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              I build modern web experiences that are clean, fast, and made to
              leave a lasting impression.
            </h1>
            <p className="motion-rise-in motion-delay-2 max-w-2xl text-lg leading-8 text-muted">
              I’m Usman Ghani, a front-end developer with 1–2 years of
              experience building polished digital experiences with React,
              Next.js, and Angular. I turn business ideas and education products
              into responsive interfaces that feel clear, capable, and easy to
              use.
            </p>
            <div className="flex flex-wrap gap-4 motion-rise-in motion-delay-3">
              <a
                href="/projects"
                className="interactive-lift inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-indigo-600"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="interactive-lift inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground hover:border-border hover:bg-surface-muted dark:border-border dark:bg-surface dark:hover:bg-surface-muted"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="motion-drift-in rounded-[2rem] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <div className="space-y-6">
              <div className="interactive-lift rounded-3xl border border-primary/20 bg-primary/5 p-5 text-sm text-primary shadow-sm dark:border-primary/20 dark:bg-primary/10">
                <p className="font-semibold">Primary focus</p>
                <p className="mt-2 leading-7 text-primary/80">
                  Building business websites and education platforms with
                  thoughtful interfaces, reliable API integrations, and a strong
                  focus on clarity and performance.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="interactive-lift rounded-3xl border border-border/70 bg-surface p-5 text-sm shadow-sm dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold text-foreground">
                    User-first design
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Clean layouts, intuitive navigation, and visual storytelling
                    that guide the visitor naturally.
                  </p>
                </div>
                <div className="interactive-lift rounded-3xl border border-border/70 bg-surface p-5 text-sm shadow-sm dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold text-foreground">
                    Performance-driven builds
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Responsive, fast-loading experiences designed to perform
                    beautifully on every device.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-border/70 bg-surface p-5 text-sm shadow-sm dark:border-border/70 dark:bg-surface-muted">
                <p className="font-semibold text-foreground">What I deliver</p>
                <p className="mt-2 leading-7 text-muted">
                  Responsive interfaces, reusable component systems, API-driven
                  workflows, and thoughtful details that help products feel
                  dependable from the first interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}
