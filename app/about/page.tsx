import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-surface-muted py-16 dark:bg-background sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.75fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              About Me
            </span>
            <div className="flex items-center gap-6">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-3xl border-2 border-border/80 shadow-[0_20px_40px_rgba(15,23,42,0.15)] dark:border-border/40 dark:shadow-[0_20px_40px_rgba(99,102,241,0.25)]">
                <Image
                  src="/usman-ghani-image.png"
                  alt="Muhammad Usman Ghani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Muhammad Usman Ghani
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Software Engineering graduate and Full Stack Developer passionate
              about building modern, scalable, and user-focused web
              applications.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I specialize in React.js, Next.js, TypeScript, JavaScript,
              Angular, and Node.js, with strong expertise in HTML, CSS, and
              responsive UI development.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Currently, I work on production-level applications at 3S Solutions
              Pvt Ltd, implementing new features, integrating APIs, resolving
              complex issues, improving application performance, and enhancing
              user experiences.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I enjoy transforming ideas into high-quality software by writing
              clean, maintainable, and scalable code.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I believe in continuous learning and staying aligned with modern
              development practices. My goal is to grow into a highly skilled
              Software Engineer and AI Engineer, contribute to innovative
              products, and build technology that creates real-world impact.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Current Role
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Software Engineer at 3S Solutions Pvt Ltd Pakistan
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Lahore, Punjab, Pakistan | On-site
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">React & Next.js</p>
                  <p className="mt-2 text-muted">
                    Component-driven interfaces with responsive layouts,
                    routing, and production-ready rendering.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">Angular Development</p>
                  <p className="mt-2 text-muted">
                    Structured front-end applications designed for clear
                    navigation and scalable user experiences.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">TypeScript & Node.js</p>
                  <p className="mt-2 text-muted">
                    Type-safe, maintainable code with backend API development
                    and RESTful services.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-surface p-4 text-sm text-foreground dark:border-border/70 dark:bg-surface-muted">
                  <p className="font-semibold">AI Engineering</p>
                  <p className="mt-2 text-muted">
                    Exploring RAG, LLM applications, embeddings, vector
                    databases, and AI-powered solutions.
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
