const projects = [
  {
    title: "Portfolio Redesign",
    description: "A responsive portfolio site with dark/light theming, animated cards, and a clean presentation.",
    badge: "UI / Next.js",
  },
  {
    title: "Landing Page Concept",
    description: "A modern landing page designed to convert visitors with bold visuals and clear calls to action.",
    badge: "Design / Branding",
  },
  {
    title: "Web App Dashboard",
    description: "A crisp dashboard layout with data visualizations, quick actions, and an accessible design system.",
    badge: "Product / React",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 space-y-3">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Featured Work
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Selected projects crafted for performance and polish.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Explore a few examples of the design systems, portfolio pages, and product interfaces I build.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-border/80 bg-surface p-6 shadow-[0_20px_60px_rgba(79,70,229,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(79,70,229,0.12)] dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
            >
              <div className="mb-4 inline-flex rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted dark:bg-surface dark:text-muted">
                {project.badge}
              </div>
              <h2 className="text-2xl font-semibold text-foreground">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
