import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Usman Ghani | Software Engineer",
    template: "%s | Muhammad Usman Ghani",
  },
  description:
    "Portfolio of Muhammad Usman Ghani, a Software Engineer specializing in React, Next.js, TypeScript, JavaScript, Angular, Node.js and modern web application development.",
  keywords: [
    "Muhammad Usman Ghani",
    "Software Engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Angular developer",
    "Node.js developer",
    "full-stack developer",
    "web development",
  ],
  authors: [{ name: "Muhammad Usman Ghani" }],
  creator: "Muhammad Usman Ghani",
  openGraph: {
    type: "website",
    title: "Muhammad Usman Ghani | Software Engineer",
    description:
      "Software Engineer building scalable web applications with React, Next.js, TypeScript, Angular, and Node.js.",
    siteName: "Muhammad Usman Ghani Portfolio",
  },
  icons: {
    icon: "/usman-ghani-image-favicon.png",
    apple: "/usman-ghani-image-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <ParticleBackground />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-slate-100 dark:focus:text-slate-900"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
