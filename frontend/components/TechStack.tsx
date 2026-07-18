"use client";

const techList = [
  {
    name: "HTML5",
    color: "bg-orange-500",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path fill="#E44D26" d="M19 10l10 95 40 13 40-13 10-95H19z" />
        <path fill="#F16529" d="M64 107V54.4l32-9.5 7-78H64v99z" />
        <path
          fill="#EBEBEB"
          d="M64 57.5H45l1 12.3H64v-12.3zm0-25V45H88l-1 10.8H64V77l17-4.4 1.2-13.5H64V32.5z"
        />
        <path
          fill="#FFF"
          d="M64 57.5V43H47l.7 8.8 1 12.3H64zm0 36.4l-16-4.5-1-11.5h13.7l.3 3.4 3.4.9.8-8.4H38.5l1.4 16.2 24.2 6.8.1-.1z"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "bg-sky-500",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path fill="#1572B6" d="M19 10l10 95 40 13 40-13 10-95H19z" />
        <path
          fill="#33A9DC"
          d="M64 107V54.4h25.5l1-11.5H64V32.5h38.5l-1 11.5h-1l-1 11.5-1 11.5-12.5 3.9-12.7 4-.3.1z"
        />
        <path
          fill="#FFF"
          d="M64 68h16l1-13.5H64V39.5h31L93 66.4 64 74.3v10.3l16-4.5 1-13.5H64V68z"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "bg-yellow-400",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <rect width="128" height="128" rx="24" fill="#F7DF1E" />
        <text
          x="64"
          y="86"
          textAnchor="middle"
          fontSize="72"
          fontWeight="700"
          fill="#000"
          fontFamily="Arial,Helvetica,sans-serif"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "bg-sky-600",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <rect width="128" height="128" rx="24" fill="#007ACC" />
        <path fill="#fff" d="M39 42h49v44H39z" opacity="0.15" />
        <text
          x="64"
          y="82"
          textAnchor="middle"
          fontSize="72"
          fontWeight="700"
          fill="#fff"
          fontFamily="Arial,Helvetica,sans-serif"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "React",
    color: "bg-cyan-500",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <circle cx="64" cy="64" r="12" fill="#fff" opacity="0.9" />
        <g stroke="#61DAFB" strokeWidth="8" fill="none">
          <ellipse rx="52" ry="16" transform="rotate(0 64 64)" />
          <ellipse rx="52" ry="16" transform="rotate(60 64 64)" />
          <ellipse rx="52" ry="16" transform="rotate(120 64 64)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Angular",
    color: "bg-red-600",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path fill="#DD0031" d="M64 8 18 24l8 76 38 20 38-20 8-76L64 8Z" />
        <path fill="#C3002F" d="M64 8v116l35-18 8-76L64 8Z" />
        <path fill="#FFF" d="M41 54h12l11 34 11-34h12l-16 46h-9L41 54Z" />
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    color: "bg-violet-600",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <rect width="128" height="128" rx="24" fill="#7952B3" />
        <path
          d="M80 36a20 20 0 0 1 0 40h-18v20H54V36h26Zm-18 26h18a10 10 0 0 0 0-20H62v20Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "bg-cyan-700",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path
          d="M18 54c16-20 34-28 54-28 18 0 36 8 46 22v30c-14-12-30-18-46-18-16 0-34 8-54 28V54Z"
          fill="#38B2AC"
        />
        <path
          d="M18 76c16-20 34-28 54-28 18 0 36 8 46 22v18c-14-12-30-18-46-18-16 0-34 8-54 28V76Z"
          fill="#0BC5EA"
          opacity="0.9"
        />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    color: "bg-orange-600",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#181717"
          d="M64 8C33 8 8 33 8 64c0 23 15 42 36 49 3 .5 4-.8 4-2v-7c-15 3-18-7-18-7-2-5-5-7-5-7-4-3 0-3 0-3 5 0 8 5 8 5 4 7 10 5 13 4 1-3 3-5 5-6-13-1-26-6-26-26 0-6 2-10 5-14 0-1-2-7 1-14 0 0 4-1 14 5 4-1 8-2 12-2 4 0 8 1 12 2 10-6 14-5 14-5 3 7 1 13 1 14 3 4 5 8 5 14 0 20-13 25-26 26 4 3 7 7 7 14v20c0 1 1 2 4 2 22-7 36-26 36-49 0-31-25-56-56-56Z"
        />
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "bg-sky-800",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#00758F"
          d="M64 12C35.9 12 12 31.7 12 56.7c0 18.1 16.8 30.3 30.3 29.3 5.8 16.1 10 32.6 13 42.8 0 0 21.2-6.9 37.4-17.2 0 0-1.8-23.5-5.1-33.6 0 0 15.5-10 15.5-28.3C110 31.7 86.1 12 64 12Z"
        />
        <path
          fill="#FFF"
          d="M43 49c11-8 21-8 32 0 4 3 7 7 7 11 0 4-4 6-9 4-3-2-2-5 1-6 4-2 6-5 6-8 0-3-2-5-5-7-10-6-21-6-31 0-3 2-4 4-4 7 0 4 2 6 6 8 3 1 4 4 1 6-5 2-9 0-9-4 0-4 3-8 7-11Z"
        />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="mt-16 rounded-[2rem] border border-border/80 bg-surface p-6 shadow-[0_20px_60px_rgba(79,70,229,0.08)] dark:border-border/40 dark:bg-surface dark:shadow-[0_20px_60px_rgba(99,102,241,0.18)] sm:p-8">
      <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-6">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.24em] text-primary/90">
            Tech stack
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Built with technologies I use every day.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-muted sm:text-right">
          A curated collection of the tools and languages that power my
          projects, from frontend frameworks to backend databases.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techList.map((tech) => (
          <div
            key={tech.name}
            className="flex items-start gap-4 rounded-3xl border border-border/70 bg-background/80 p-4 shadow-sm transition hover:border-primary/60 hover:bg-surface-muted dark:bg-surface dark:hover:bg-surface-muted"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-3xl ${tech.color} text-white shadow-md`}
            >
              {tech.icon}
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">
                {tech.name}
              </p>
              <p className="text-sm leading-6 text-muted">
                Professional experience and daily usage.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
