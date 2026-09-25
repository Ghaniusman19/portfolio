import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience of Muhammad Usman Ghani, Software Engineer.",
};

const experiences = [
  {
    company: "3S Solutions Pvt Ltd Pakistan",
    role: "Software Engineer",
    type: "Full-time",
    period: "Mar 2025 – Present",
    location: "Lahore District, Punjab, Pakistan",
    workMode: "On-site",
    projects: ["FiveLumens.ai", "Piqosity.com"],
    responsibilities: [
      "Building and maintaining production-level web applications",
      "Developing frontend features with React.js and TypeScript",
      "Angular development for enterprise applications",
      "API integration and data flow implementation",
      "Debugging and resolving complex technical issues",
      "Performance optimization and application improvements",
      "Responsive UI development across devices",
      "Working with existing production codebases",
      "Collaborating with development teams",
      "Implementing new functionality and features",
      "Improving user experience and interface quality",
    ],
  },
  {
    company: "3S Solutions",
    role: "Frontend Developer",
    type: "Full-time",
    period: "Oct 2024 – Present",
    location: "Lahore, Pakistan",
    workMode: "On-site",
    responsibilities: [
      "Frontend development with React and Angular",
      "Building responsive user interfaces",
      "Component development and maintenance",
      "API integration and data handling",
      "Collaborating with design and backend teams",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Experience
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Professional Experience
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            My journey building production-level applications and working with modern web technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="interactive-lift rounded-4xl border border-border/80 bg-surface p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.14)] sm:p-8"
            >
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {experience.company}
                  </h2>
                  <p className="mt-2 text-lg text-muted">{experience.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border/70 bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted dark:bg-surface-muted">
                    {experience.type}
                  </span>
                  <span className="rounded-full border border-border/70 bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted dark:bg-surface-muted">
                    {experience.workMode}
                  </span>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {experience.period}
                </div>
                <div className="flex items-center gap-2">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {experience.location}
                </div>
              </div>

              {experience.projects && experience.projects.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                    Projects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.projects.map((project) => (
                      <span
                        key={project}
                        className="rounded-full border border-border/70 bg-surface-muted px-3 py-1.5 text-sm font-medium text-foreground dark:bg-surface-muted"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Responsibilities
                </h3>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
                        aria-hidden="true"
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
