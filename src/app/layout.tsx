import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arya.dev | Portfolio Full-Stack Developer",
  description:
    "Portfolio profesional Arya — Full-Stack Developer yang fokus pada pengembangan aplikasi web performa tinggi, arsitektur frontend modern, dan sistem backend yang tangguh.",
  keywords: [
    "Arya",
    "Full-Stack Developer",
    "Web Developer Indonesia",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Arya", url: "https://arya.dev" }],
  creator: "Arya",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://arya.dev",
    title: "Arya.dev | Portfolio Full-Stack Developer",
    description:
      "Saya mengembangkan aplikasi web dengan memadukan antarmuka yang intuitif, sistem backend yang andal, dan rekayasa praktis.",
    siteName: "Arya.dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya.dev | Portfolio Full-Stack Developer",
    description:
      "Saya mengembangkan aplikasi web dengan memadukan antarmuka yang intuitif, sistem backend yang andal, dan rekayasa praktis.",
    creator: "@arya_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#102A21",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen font-sans bg-[#F3F5ED] text-[#111713] antialiased selection:bg-[#D4F52B] selection:text-[#111713]"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
