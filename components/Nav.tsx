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
          isMobile
            ? "flex flex-col gap-3"
            : "flex flex-wrap items-center justify-end gap-3 sm:gap-6"
        } text-sm font-medium`}
      >
        {links.map((link) => {
          const isActive = activePath === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={`block rounded-full px-3 py-2 text-left transition-all duration-200 ${
                  isActive
                    ? "bg-white text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.12)] dark:bg-slate-200 dark:text-slate-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/80"
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
