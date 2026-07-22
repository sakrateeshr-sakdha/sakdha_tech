import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SakDha. Request a custom software scoping proposal, book a QA consultation, or ask for a demo of MyBoutiqueManager software. We reply in 24 hours.",
  alternates: {
    canonical: "https://sakdha.com/contact",
  },
  openGraph: {
    title: "Contact Us | SakDha",
    description: "Get in touch with SakDha for custom development projects, QA consultation, and MyBoutiqueManager inquiries.",
    url: "https://sakdha.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SakDha",
    "description": "Get in touch with SakDha for custom software development projects, QA consultation, and product demos.",
    "url": "https://sakdha.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "SakDha",
      "telephone": "+91-7539993876",
      "email": "contact@sakdha.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "282/9 Rasi Nagar CAK Road",
        "addressLocality": "Karur",
        "addressRegion": "Tamilnadu",
        "postalCode": "639001",
        "addressCountry": "India"
      }
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
        "name": "Contact Us",
        "item": "https://sakdha.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
