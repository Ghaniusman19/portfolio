import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/90 py-6 text-muted backdrop-blur-sm transition-colors duration-300 dark:border-border/40 dark:bg-background/90 dark:text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} Usman Ghani. Front-end development for
          modern web experiences.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            className="transition-colors hover:text-foreground"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="transition-colors hover:text-foreground"
            href="/about"
          >
            About
          </Link>
          <Link
            className="transition-colors hover:text-foreground"
            href="/contact"
          >
            Contact
          </Link>
          <a
            className="font-medium text-primary transition-colors hover:text-foreground"
            href="mailto:usmighani1921@gmail.com"
          >
            Email me
          </a>
        </div>
      </div>
    </footer>
  );
}
