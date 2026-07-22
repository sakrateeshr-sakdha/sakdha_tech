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
  metadataBase: new URL("https://sakdha.com"),
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
  alternates: {
    canonical: "https://sakdha.com",
  },
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
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SakDha",
    "url": "https://sakdha.com",
    "logo": "https://sakdha.com/favicon.ico",
    "description": "SakDha delivers custom software development, web applications, quality assurance, and scalable digital solutions that help businesses grow faster.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "282/9 Rasi Nagar CAK Road",
      "addressLocality": "Karur",
      "addressRegion": "Tamilnadu",
      "postalCode": "639001",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7539993876",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": "English"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Dharshini M"
      },
      {
        "@type": "Person",
        "name": "Sakrateesh R"
      },
      {
        "@type": "Person",
        "name": "Balaji N"
      }
    ]
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SakDha",
    "url": "https://sakdha.com"
  };

  const jsonLdProfessional = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SakDha Technologies",
    "image": "https://sakdha.com/opengraph-image.png",
    "url": "https://sakdha.com",
    "telephone": "+91-7539993876",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "282/9 Rasi Nagar CAK Road",
      "addressLocality": "Karur",
      "addressRegion": "Tamilnadu",
      "postalCode": "639001",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.9601",
      "longitude": "78.0766"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessional) }}
        />
      </head>
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
