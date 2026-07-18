import TechStack from "@/components/TechStack";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/20 to-transparent opacity-80" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Design + Development
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Elegant portfolio experiences with thoughtful UI and fast
              performance.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I build responsive websites and applications that look great on
              every screen, with a polished light/dark theme and strong visual
              hierarchy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-indigo-600"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:border-border hover:bg-surface-muted dark:border-border dark:bg-surface dark:hover:bg-surface-muted"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-primary/5 p-5 text-sm text-primary dark:bg-primary/10">
                <span className="font-semibold">Primary focus</span>
                <span>UI design, portfolio sites, product pages</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/70 bg-surface p-5 text-sm shadow-sm dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold text-foreground">
                    Responsive layouts
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Content that adapts beautifully across mobile, tablet, and
                    desktop.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-surface p-5 text-sm shadow-sm dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold text-foreground">
                    Dark & light mode
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    A polished theme toggle for fast mood switching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}
