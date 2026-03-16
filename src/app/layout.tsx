import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFRATEK.AI — Vibe Engineering for Construction",
  description:
    "The platform where AEC professionals build custom AI tools. The Replit of the construction industry.",
  openGraph: {
    title: "INFRATEK.AI — Vibe Engineering for Construction",
    description:
      "Build your own engineering tools with AI. No code required.",
    url: "https://infratek.ai",
    siteName: "INFRATEK.AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
