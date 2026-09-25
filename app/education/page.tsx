import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Education background of Muhammad Usman Ghani.",
};

const education = [
  {
    degree: "Software Engineering",
    institution: "University of the Punjab",
    period: "2021 – 2025",
    location: "Lahore, Pakistan",
    description: "Bachelor's degree in Software Engineering with focus on web development, algorithms, and software engineering principles.",
  },
  {
    degree: "F.Sc (Pre-Engineering)",
    institution: "Superior College",
    period: "2019 – 2021",
    location: "Lahore, Pakistan",
    grade: "A+",
    description: "Intermediate education in Pre-Engineering with strong foundation in mathematics, physics, and chemistry.",
  },
  {
    degree: "Computer Science (Matriculation)",
    institution: "M.Q Foundation School",
    period: "2017 – 2019",
    location: "Lahore, Pakistan",
    grade: "A+",
    description: "Secondary education with focus on computer science fundamentals and general sciences.",
  },
];

export default function EducationPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Education
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Educational Background
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            My academic journey in software engineering and computer science.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <article
              key={`${edu.institution}-${edu.degree}`}
              className="interactive-lift rounded-4xl border border-border/80 bg-surface p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.14)] sm:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {edu.degree}
                  </h2>
                  <p className="mt-2 text-lg text-muted">{edu.institution}</p>
                </div>
                {edu.grade && (
                  <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    Grade: {edu.grade}
                  </span>
                )}
              </div>

              <div className="mb-4 flex flex-wrap gap-6 text-sm text-muted">
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
                  {edu.period}
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
                  {edu.location}
                </div>
              </div>

              <p className="text-sm leading-6 text-muted">{edu.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
