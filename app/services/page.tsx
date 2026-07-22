import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Front-end development, UI design, API integration, and ongoing website support from Usman Ghani.",
};

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Clear, responsive websites that give your business a credible digital presence and guide visitors toward meaningful action.",
    deliverables: [
      "Responsive page structure",
      "Reusable UI components",
      "Contact and inquiry flows",
    ],
  },
  {
    number: "02",
    title: "React & Next.js Development",
    description:
      "Component-driven interfaces built with React and Next.js for fast navigation, maintainable code, and polished user experiences.",
    deliverables: [
      "Next.js pages and routing",
      "Interactive interface states",
      "Performance-minded rendering",
    ],
  },
  {
    number: "03",
    title: "Angular Applications",
    description:
      "Structured Angular experiences for products that need clear navigation, reusable patterns, and dependable application behavior.",
    deliverables: [
      "Scalable application screens",
      "Organized component systems",
      "Data-focused user flows",
    ],
  },
  {
    number: "04",
    title: "UI Design & Redesigns",
    description:
      "Thoughtful visual systems that improve hierarchy, usability, and consistency while giving an existing product a more modern direction.",
    deliverables: [
      "Layout and visual direction",
      "Typography and spacing refinement",
      "Responsive design implementation",
    ],
  },
  {
    number: "05",
    title: "API Integration",
    description:
      "Front-end experiences connected to useful data and services with clear loading, error, empty, and success states.",
    deliverables: [
      "Data-driven interface sections",
      "Form submission workflows",
      "Reliable response handling",
    ],
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "Ongoing improvements that keep a website useful, responsive, and aligned with changing content, product, and business needs.",
    deliverables: [
      "Content and UI updates",
      "Responsive issue fixes",
      "Feature and experience refinements",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We clarify your goals, audience, content, and the problem the experience needs to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I shape the page structure, key user flows, technology direction, and the most useful first version.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I turn the direction into responsive, accessible interfaces with reusable components and thoughtful states.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We review the result, improve the details, and prepare the experience for a confident launch or next iteration.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/15 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-6 motion-rise-in">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How I can help
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Available for new projects
            </span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Thoughtful front-end work for products people can trust.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I help businesses and product teams turn ideas into responsive,
            useful web experiences through front-end development, UI design, API
            integration, and ongoing support.
          </p>
          <Link
            href="/contact"
            className="interactive-lift inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-indigo-600"
          >
            Discuss your idea
          </Link>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`interactive-lift motion-rise-in motion-delay-${(index % 4) + 1} flex h-full flex-col rounded-[2rem] border border-border/80 bg-surface p-6 shadow-[0_20px_60px_rgba(79,70,229,0.06)] dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.14)]`}
            >
              <span className="font-mono text-sm font-semibold text-primary">
                {service.number}
              </span>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-border/70 pt-5 text-sm text-muted">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              My process
            </span>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              A clear path from idea to interface.
            </h2>
            <p className="max-w-md text-sm leading-7 text-muted">
              Good work starts with shared context. Each step keeps the project
              focused, understandable, and connected to the people who will use
              it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border/70 bg-surface p-5 shadow-sm dark:bg-surface-muted"
              >
                <span className="font-mono text-sm font-semibold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-primary/20 bg-primary/5 p-8 text-center dark:bg-primary/10 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Have a project in mind?
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-foreground sm:text-4xl">
            Bring the rough idea. We can shape the next step together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Whether you need a new website, a product interface, or improvements
            to something already live, I am ready to hear what you are building.
          </p>
          <Link
            href="/contact"
            className="interactive-lift mt-7 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-indigo-600"
          >
            Discuss your idea
          </Link>
        </div>
      </div>
    </section>
  );
}
