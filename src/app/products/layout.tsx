import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique Management & Tailoring Software",
  description: "Simplify your fashion retail workflows with MyBoutiqueManager. Digitized client measurements, automatic GST billing, tailor orders tracking, and analytics in one secure cloud workspace.",
  alternates: {
    canonical: "https://sakdha.com/products",
  },
  openGraph: {
    title: "MyBoutiqueManager | Premium Boutique & Tailor Software",
    description: "Simplify inventory, stitch orders, GST billing, and client measurements tracking with MyBoutiqueManager.",
    url: "https://sakdha.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MyBoutiqueManager",
    "description": "An all-in-one boutique management software and tailor shop management system designed for boutique stores, custom tailors, fashion labels, and designers.",
    "brand": {
      "@type": "Brand",
      "name": "SakDha"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "0",
      "highPrice": "999",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "price": "0",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "0",
            "priceCurrency": "INR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON"
            }
          }
        },
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "399",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "399",
            "priceCurrency": "INR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON"
            }
          }
        },
        {
          "@type": "Offer",
          "name": "Growth Plan",
          "price": "699",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "699",
            "priceCurrency": "INR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON"
            }
          }
        },
        {
          "@type": "Offer",
          "name": "Business Plan",
          "price": "999",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "999",
            "priceCurrency": "INR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON"
            }
          }
        }
      ]
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is tailoring business management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tailoring business management software is a specialized cloud platform designed to digitize custom tailoring operations. It manages customer measurements, order statuses, tailor assignments, thermal billing, GST invoicing, and inventory from a single centralized dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Is it suitable for custom boutiques with multiple designers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! MyBoutiqueManager is specifically engineered for multi-designer ateliers and boutiques. You can assign specific garments or alteration tasks to individual tailors or cutting masters and track progress in real-time."
        }
      },
      {
        "@type": "Question",
        "name": "How does the system ensure data isolation for my boutique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our architecture utilizes strict Row-Level Security (RLS) policies and tenant-isolated databases. Your boutique's measurement sheets, client lists, and financial logs are completely segregated and encrypted."
        }
      },
      {
        "@type": "Question",
        "name": "Can I try the system before committing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer a 14-day free trial with no credit card required so you can experience the live atelier simulator and test all features firsthand."
        }
      }
    ]
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
        "name": "Products",
        "item": "https://sakdha.com/products"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
