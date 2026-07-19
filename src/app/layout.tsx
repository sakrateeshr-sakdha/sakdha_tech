import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingCTA } from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SakDha | Premium Custom Software & QA Services",
    template: "%s | SakDha",
  },
  description: "SakDha delivers custom software development, web applications, quality assurance, and scalable digital solutions that help businesses grow faster.",
  keywords: [
    "Software Development",
    "QA Testing Services",
    "Automation Testing",
    "UI/UX Design",
    "API Integration",
    "MyBoutiqueManager",
    "SakDha"
  ],
  authors: [{ name: "SakDha" }],
  openGraph: {
    title: "SakDha | Premium Custom Software & QA Services",
    description: "SakDha delivers custom software development, web applications, quality assurance, and scalable digital solutions that help businesses grow faster.",
    type: "website",
    locale: "en_US",
    url: "https://sakdha.com",
    siteName: "SakDha",
  },
  twitter: {
    card: "summary_large_image",
    title: "SakDha | Premium Custom Software & QA Services",
    description: "SakDha delivers custom software development, web applications, quality assurance, and scalable digital solutions that help businesses grow faster.",
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <MouseGlow />
          <Navbar />
          <main className="flex-grow pt-[76px] relative">{children}</main>
          <Footer />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
