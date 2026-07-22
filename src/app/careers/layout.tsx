import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Opportunity - Freelance Sales & Marketing",
  description: "Join SakDha as a Freelance Sales & Marketing Partner. Promote MyBoutiqueManager SaaS to fashion boutiques, tailors, and designers. Earn 50% commission per subscription.",
  alternates: {
    canonical: "https://sakdha.com/careers",
  },
  openGraph: {
    title: "Freelance Sales & Marketing Partner Opportunity | SakDha",
    description: "Earn 50% commission selling MyBoutiqueManager SaaS. Fully remote, flexible freelance partner program.",
    url: "https://sakdha.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdJob = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Freelance Sales & Marketing Partner",
    "description": "Promote our all-in-one cloud boutique management platform, MyBoutiqueManager. Identify boutique owners, demonstrate the software, convert leads, and earn a 50% commission on the customer's first subscription payment. This is a 100% remote, commission-based freelance opportunity with completely flexible hours.",
    "datePosted": "2026-07-18T00:00:00.000Z",
    "validThrough": "2027-07-18T00:00:00.000Z",
    "employmentType": "OTHER",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "SakDha",
      "sameAs": "https://sakdha.com",
      "logo": "https://sakdha.com/favicon.ico"
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": 50.0,
        "unitText": "PERCENT_COMMISSION"
      }
    },
    "experienceRequirements": "Prior experience in sales, digital marketing, SaaS outreach, or business development is preferred.",
    "skills": "Sales pitching, Lead generation, SaaS marketing, Communication, Negotiation"
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
        "name": "Careers",
        "item": "https://sakdha.com/careers"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdJob) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
