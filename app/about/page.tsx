export default function AboutPage() {
  return (
    <section className="bg-surface-muted py-16 dark:bg-background sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.75fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              About Me
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              I create web experiences that feel refined, purposeful, and truly
              personal.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I’m a front-end developer who enjoys turning ideas into elegant
              interfaces with strong visual direction, clean code, and a focus
              on user experience.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  What I bring to a project
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  With 1–2 years of front-end experience, I build polished
                  business websites and education platforms that combine
                  thoughtful design, reliable functionality, and modern
                  development practices.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">React & Next.js</p>
                  <p className="mt-2 text-muted">
                    Component-driven interfaces with responsive layouts,
                    routing, and production-ready rendering.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">Angular Development</p>
                  <p className="mt-2 text-muted">
                    Structured front-end applications designed for clear
                    navigation and scalable user experiences.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">API Integration</p>
                  <p className="mt-2 text-muted">
                    Connecting interfaces to useful data and services with
                    dependable loading, error, and response states.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">Responsive Product Thinking</p>
                  <p className="mt-2 text-muted">
                    Translating real business and learning goals into clear,
                    accessible experiences across every screen size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
