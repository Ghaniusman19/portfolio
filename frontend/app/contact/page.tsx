export default function ContactPage() {
  return (
    <section className="bg-surface-muted py-16 dark:bg-background sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Let’s Talk
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Ready to build something memorable together?
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Send a message and I’ll respond quickly. Whether it’s a portfolio
              refresh or a new website, I’m happy to collaborate.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border/80 bg-surface p-8 shadow-[0_30px_80px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_30px_80px_rgba(99,102,241,0.18)]">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              muhammadusmang1921@gmail.com
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              I’m available for freelance projects, collaborations, and contract
              work. Let’s create a digital experience that stands out.
            </p>
            <div className="mt-8 space-y-4 text-sm text-foreground">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                muhammadusmang1921@gmail.com
              </p>
              <p>
                <span className="font-semibold">Location:</span> Remote /
                Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
