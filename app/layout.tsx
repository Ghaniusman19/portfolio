import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Usman Ghani | Front-End Developer",
    template: "%s | Usman Ghani",
  },
  description:
    "Usman Ghani is a front-end developer building responsive business websites and education platforms with React, Next.js, Angular, and API integrations.",
  keywords: [
    "Usman Ghani",
    "front-end developer",
    "React developer",
    "Next.js developer",
    "Angular developer",
    "responsive web development",
  ],
  authors: [{ name: "Usman Ghani" }],
  creator: "Usman Ghani",
  openGraph: {
    type: "website",
    title: "Usman Ghani | Front-End Developer",
    description:
      "Responsive business websites and education platforms built with React, Next.js, Angular, and modern front-end practices.",
    siteName: "Usman Ghani Portfolio",
  },
  icons: {
    icon: "/favicon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
