import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFRATEK.AI — Vibe Engineering for Construction",
  description:
    "The platform where AEC professionals build custom AI tools. The Replit of the construction industry.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "INFRATEK.AI — Vibe Engineering for Construction",
    description:
      "Build your own engineering tools with AI. No code required.",
    url: "https://infratek.ai",
    siteName: "INFRATEK.AI",
    type: "website",
    images: [{ url: "/infratek-logo-full.png", width: 852, height: 812 }],
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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
