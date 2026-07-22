import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover SakDha's mission, vision, core values, leadership team, and modern technology stack. Learn how we deliver premium custom software and automated QA solutions.",
  alternates: {
    canonical: "https://sakdha.com/about",
  },
  openGraph: {
    title: "About Us | SakDha",
    description: "Discover SakDha's mission, vision, core values, leadership team, and modern technology stack.",
    url: "https://sakdha.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdAbout = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SakDha",
    "description": "Learn about SakDha, our core values, journey, leadership team, and our technology stack for custom software development and quality assurance.",
    "publisher": {
      "@type": "Organization",
      "name": "SakDha",
      "url": "https://sakdha.com"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sakdha.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://sakdha.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
