import type { Metadata } from "next";
import {
  siAngular,
  siBootstrap,
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  siExpress,
  type SimpleIcon,
} from "simple-icons";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and technologies Muhammad Usman Ghani works with.",
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: siReact,
        description: "Component-driven UI development",
      },
      {
        name: "Next.js",
        icon: siNextdotjs,
        description: "Production-ready React framework",
      },
      {
        name: "TypeScript",
        icon: siTypescript,
        description: "Type-safe JavaScript development",
      },
      {
        name: "JavaScript",
        icon: siJavascript,
        description: "Dynamic web interactions",
      },
      {
        name: "Angular",
        icon: siAngular,
        description: "Enterprise-scale applications",
      },
      { name: "HTML5", icon: siHtml5, description: "Semantic web structure" },
      { name: "CSS3", icon: siCss, description: "Styling and animations" },
      {
        name: "Tailwind CSS",
        icon: siTailwindcss,
        description: "Utility-first styling",
      },
      {
        name: "Bootstrap",
        icon: siBootstrap,
        description: "Responsive UI framework",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: siNodedotjs,
        description: "Server-side JavaScript",
      },
      {
        name: "Express.js",
        icon: siExpress,
        description: "Web application framework",
      },
      {
        name: "REST APIs",
        icon: null,
        description: "API design and integration",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: siMysql,
        description: "Relational database management",
      },
      {
        name: "MongoDB",
        icon: siMongodb,
        description: "NoSQL document database",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: siGit, description: "Version control" },
      { name: "GitHub", icon: siGithub, description: "Code collaboration" },
    ],
  },
  {
    title: "AI & Emerging",
    skills: [
      {
        name: "RAG",
        icon: null,
        description: "Retrieval-Augmented Generation",
      },
      {
        name: "LLM Applications",
        icon: null,
        description: "Large Language Model integration",
      },
      {
        name: "Embeddings",
        icon: null,
        description: "Vector embeddings for AI",
      },
      {
        name: "Vector Databases",
        icon: null,
        description: "AI-powered data storage",
      },
      { name: "AI Agents", icon: null, description: "Autonomous AI systems" },
      {
        name: "Generative AI",
        icon: null,
        description: "AI content generation",
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Skills & Technologies
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Technologies I work with
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            A comprehensive overview of the tools, frameworks, and technologies
            I use to build modern web applications and explore AI-powered
            solutions.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-4xl border border-border/80 bg-surface p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.14)] sm:p-8"
            >
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                {category.title}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="interactive-lift flex items-start gap-4 rounded-3xl border border-border/70 bg-surface-muted p-4 hover:border-border dark:bg-surface-muted"
                  >
                    {skill.icon && (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface p-2 shadow-sm dark:bg-surface">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-8 w-8"
                          aria-hidden="true"
                        >
                          <path
                            d={skill.icon.path}
                            fill={`#${skill.icon.hex}`}
                          />
                        </svg>
                      </div>
                    )}
                    {!skill.icon && (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface p-2 shadow-sm dark:bg-surface">
                        <span className="text-lg font-semibold text-muted">
                          AI
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {skill.name}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
