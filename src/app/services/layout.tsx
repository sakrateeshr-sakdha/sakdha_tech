import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Core Services",
  description: "Explore our software engineering services: Custom Web Application Development (React/Next.js), QA & Automated Software Testing (Playwright/Selenium), UI/UX Design, Custom API Integration, and 24/7 Support.",
  alternates: {
    canonical: "https://sakdha.com/services",
  },
  openGraph: {
    title: "Our Core Services | SakDha",
    description: "Explore our custom web development, QA testing automation, UI/UX design, API integration, and website maintenance services.",
    url: "https://sakdha.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const provider = {
    "@type": "Organization",
    "name": "SakDha",
    "url": "https://sakdha.com"
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Web Application Development",
      "description": "We build scalable, low-latency web platforms, enterprise software, and custom business applications that support large traffic volumes and drive conversions.",
      "provider": provider
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "QA & Software Testing Services",
      "description": "Ensure your software is stable, bug-free, and secure. We offer comprehensive manual and automated end-to-end validation across browsers and mobile systems.",
      "provider": provider
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UI/UX & Interface Design",
      "description": "We craft modern, premium user interfaces that reduce interaction complexity, build trust, and reflect brand quality.",
      "provider": provider
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom API Integration",
      "description": "Connect your core system with popular payment gateways, inventory platforms, CRMs, and third-party accounting applications.",
      "provider": provider
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Website Maintenance & 24/7 Support",
      "description": "Periodic server optimizations, bug fixing, dependencies updates, and feature upgrades to ensure continuous project health.",
      "provider": provider
    }
  ];

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
        "name": "Services",
        "item": "https://sakdha.com/services"
      }
    ]
  };

  return (
    <>
      {services.map((svc, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(svc) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
