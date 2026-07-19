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
              I help brands tell their story through clean interfaces and fast
              execution.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              With experience in modern web technologies, I craft polished
              digital experiences that feel comfortable on every device.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  What I build
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Interfaces, landing pages, and portfolio sites designed for
                  clarity, accessibility, and meaningful interaction.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-surface p-4 text-sm text-foreground dark:bg-surface-muted">
                  <p className="font-semibold">Web Design</p>
                  <p className="mt-2 text-muted">
                    Clear layouts, modern typography, and polished spacing.
                  </p>
                </div>
                <div className="rounded-3xl bg-surface p-4 text-sm text-foreground dark:bg-surface-muted">
                  <p className="font-semibold">Frontend Development</p>
                  <p className="mt-2 text-muted">
                    Fast sites using React, Next.js, and modern styling.
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
