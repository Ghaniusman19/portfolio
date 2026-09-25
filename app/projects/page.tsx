import Image from "next/image";

const projects = [
  {
    title: "FiveLumens.ai",
    description:
      "A modern AI coaching platform built with Next.js. I focused on translating a complex product into a clear, responsive interface with polished interactions and a performance-minded foundation. The platform provides AI-powered coaching services with real-time feedback and personalized learning paths.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://fivelumens.ai/",
    role: "Software Engineer",
    image: "fivelumens_img.png",
    contribution:
      "Frontend development, UI implementation, API integration, performance optimization, and responsive design.",
  },
  {
    title: "Piqosity",
    description:
      "A personalized learning and test-prep platform built with Angular. The experience brings together adaptive lessons, intuitive navigation, and student progress tracking in a structured education product. Students can access practice tests, track their progress, and receive personalized recommendations.",
    technologies: ["Angular", "TypeScript", "RxJS", "SCSS"],
    link: "https://www.piqosity.com/",
    role: "Frontend Developer",
    image: "piqosity_img.png",
    contribution:
      "Angular component development, responsive UI implementation, state management, and feature integration.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Featured Projects
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Production-Level Applications
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Real-world projects demonstrating my work with Next.js, Angular,
            TypeScript, and modern web technologies. These are live applications
            used by actual users.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="interactive-lift group rounded-4xl border border-border/80 bg-surface overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.14)]"
            >
              <div className="relative overflow-hidden bg-surface-muted">
                <Image
                  src={`/projects/${project.image}`}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted dark:bg-surface-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-4 rounded-3xl border border-border/70 bg-surface-muted p-4 dark:bg-surface-muted">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    My Contribution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.contribution}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full border border-border/70 bg-surface-muted px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground dark:bg-surface-muted">
                    {project.role}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    <span>Visit Site</span>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
