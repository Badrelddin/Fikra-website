import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fikra Technology — Software that works. Partners who stay.",
    template: "%s — Fikra Technology",
  },
  description:
    "Premium software house based in Abu Dhabi, UAE. Custom software, mobile & web applications, and market intelligence. 40+ projects delivered.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Fikra Technology",
    description: "Software that works. Partners who stay.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "Fikra Technology",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-[#07080F] ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased bg-[#07080F] text-white" style={{ position: "relative" }}>
        <ParticlesBackground />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col" style={{ position: "relative", zIndex: 1 }}>
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
