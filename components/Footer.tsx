import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-8 text-slate-600 backdrop-blur-sm transition-colors duration-300 dark:border-slate-700/60 dark:bg-slate-950/70 dark:text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">
              Muhammad Usman Ghani
            </p>
            <p className="mt-1 text-sm">Software Engineer</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/muhammadusman-ghani/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ghaniusman19"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              className="font-medium text-slate-900 transition-colors hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300"
              href="mailto:usmighani1921@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-border/70 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Muhammad Usman Ghani. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              href="/about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              href="/experience"
            >
              Experience
            </Link>
            <Link
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              href="/skills"
            >
              Skills
            </Link>
            <Link
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
