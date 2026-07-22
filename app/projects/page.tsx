const projects = [
  {
    title: "FiveLumens",
    description:
      "A modern AI coaching platform built with Next.js. I focused on translating a complex product into a clear, responsive interface with polished interactions and a performance-minded foundation.",
    badge: "Next.js",
    link: "https://fivelumens.ai/",
    role: "Next.js / UI / Performance",
    image: "fivelumens_img.png",
  },
  {
    title: "Piqosity",
    description:
      "A personalized learning and test-prep platform built with Angular. The experience brings together adaptive lessons, intuitive navigation, and student progress tracking in a structured education product.",
    badge: "Angular",
    link: "https://www.piqosity.com/",
    role: "Angular / Education / UX",
    image: "piqosity_img.png",
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
            Two real-world projects showcasing clean design and scalable UI.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Explore live projects that demonstrate how I use Next.js and Angular
            to shape real products, connect user-facing experiences to
            application data, and turn complex requirements into polished,
            responsive interfaces.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-border/80 bg-surface p-6 shadow-[0_20px_60px_rgba(79,70,229,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(79,70,229,0.12)] dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
            >
              <div className="mb-5 overflow-hidden rounded-3xl bg-surface-muted">
                <img
                  src={`/projects/${project.image}`}
                  alt={project.title}
                  className="h-44 w-full object-cover"
                />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {project.badge}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-primary/90"
                >
                  Visit site
                </a>
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-border/80 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted dark:border-border/40 dark:bg-surface-muted">
                  {project.role}
                </span>
                <span className="text-xs text-muted">Live website</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
