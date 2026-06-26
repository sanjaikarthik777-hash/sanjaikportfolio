import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjai K | Full Stack Developer Portfolio",
  description: "Explore the premium personal portfolio of Sanjai K, a Full Stack Developer specializing in React, Node.js, Next.js, databases, and custom high-end digital experiences.",
  keywords: ["Sanjai K", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js Portfolio", "Web Developer Portfolio", "B.E. Computer Science"],
  authors: [{ name: "Sanjai K" }],
  openGraph: {
    title: "Sanjai K | Full Stack Developer Portfolio",
    description: "Sanjai K's personal developer journey, education, skills, services, and featured projects.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="bg-bg-solid text-text-white min-h-full font-sans antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
