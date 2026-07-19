export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/90 py-6 text-muted backdrop-blur-sm transition-colors duration-300 dark:border-border/40 dark:bg-background/90 dark:text-muted">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm sm:px-6">
        © {new Date().getFullYear()} Usman Ghani — Crafted for modern web experiences.
      </div>
    </footer>
  );
}
