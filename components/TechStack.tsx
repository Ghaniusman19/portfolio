"use client";

import {
  siAngular,
  siBootstrap,
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

const techList: { name: string; description: string; icons: SimpleIcon[] }[] = [
  {
    name: "HTML5",
    description: "Semantic structure for accessible web pages.",
    icons: [siHtml5],
  },
  {
    name: "CSS3",
    description: "Responsive layouts, animations, and visual polish.",
    icons: [siCss],
  },
  {
    name: "JavaScript",
    description: "Interactive behavior and dynamic web experiences.",
    icons: [siJavascript],
  },
  {
    name: "TypeScript",
    description: "Typed, maintainable code for reliable applications.",
    icons: [siTypescript],
  },
  {
    name: "React",
    description: "Reusable components for fast, interactive interfaces.",
    icons: [siReact],
  },
  {
    name: "Next.js",
    description: "Production-ready React apps with routing and rendering.",
    icons: [siNextdotjs],
  },
  {
    name: "Angular",
    description: "Structured framework for scalable web applications.",
    icons: [siAngular],
  },
  {
    name: "Bootstrap",
    description: "Responsive UI foundations and ready-to-use components.",
    icons: [siBootstrap],
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling for precise custom interfaces.",
    icons: [siTailwindcss],
  },
  {
    name: "Git & GitHub",
    description: "Version control, collaboration, and project workflows.",
    icons: [siGit, siGithub],
  },
  {
    name: "MySQL",
    description: "Relational data modeling and dependable persistence.",
    icons: [siMysql],
  },
];

export default function TechStack() {
  return (
    <section className="motion-rise-in motion-delay-4 mt-16 rounded-[2rem] border border-slate-200/80 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/75 dark:shadow-[0_20px_60px_rgba(15,23,42,0.28)] sm:p-8">
      <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-6">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300">
            Tech stack
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Built with technologies I use every day.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-right">
          The tools I use to turn product ideas into dependable interfaces, from
          semantic foundations and component systems to application frameworks,
          API-connected experiences, and data-backed products.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techList.map((tech, index) => (
          <div
            key={tech.name}
            className={`interactive-lift motion-rise-in motion-delay-${(index % 4) + 1} flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-950/50 dark:hover:border-slate-500 dark:hover:bg-slate-900`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center gap-0.5 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-100">
              {tech.icons.map((icon) => (
                <svg
                  key={icon.slug}
                  viewBox="0 0 24 24"
                  className="h-9 w-9"
                  aria-hidden="true"
                >
                  <path d={icon.path} fill={`#${icon.hex}`} />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                {tech.name}
              </p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
