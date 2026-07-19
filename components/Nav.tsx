import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

export default function Nav({
  links,
  activePath,
  isMobile = false,
  onLinkClick,
}: {
  links: NavLink[];
  activePath: string | null;
  isMobile?: boolean;
  onLinkClick?: () => void;
}) {
  return (
    <nav className={isMobile ? "sm:hidden" : "hidden sm:block"}>
      <ul
        className={`${
          isMobile ? "flex flex-col gap-3" : "flex flex-wrap items-center justify-end gap-3 sm:gap-6"
        } text-sm font-medium`}
      >
        {links.map((link) => {
          const isActive = activePath === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={`block rounded-full px-3 py-2 text-left transition-colors duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/15"
                    : "text-muted hover:text-foreground hover:bg-surface-muted dark:hover:bg-surface"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
