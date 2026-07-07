import { Metadata } from "next";

const BASE_URL = "https://zircondentalpune.com";
const CLINIC_NAME = "Zircon Dental & Implant Clinic";
const LOCATION = "Wakad, Pune";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  slug?: string;
  image?: string;
  type?: "website" | "article";
}
// ✅ Generate metadata for any page
export function generatePageSEO({
  title,
  description,
  keywords = [],
  slug = "",
  image = "/og-image.jpg",
  type = "website",
}: PageSEOProps): Metadata {
  const url = `${BASE_URL}/${slug}`;
  const fullTitle = `${title} | ${CLINIC_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "dentist wakad pune",
      "dental clinic pune",
      "zircon dental",
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: CLINIC_NAME,
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - ${CLINIC_NAME}`,
        },
      ],
      type,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${BASE_URL}${image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

// ✅ Treatment page SEO generator
export function generateTreatmentSEO(
  treatmentName: string,
  description: string,
  slug: string,
  price: string
): Metadata {
  return generatePageSEO({
    title: `${treatmentName} in Wakad, Pune`,
    description: `${description} Starting from ${price}. Expert ${treatmentName.toLowerCase()} at Zircon Dental, Wakad, Pune. Free consultation available.`,
    keywords: [
      `${treatmentName.toLowerCase()} pune`,
      `${treatmentName.toLowerCase()} wakad`,
      `${treatmentName.toLowerCase()} pimpri chinchwad`,
      `best ${treatmentName.toLowerCase()} pune`,
      `affordable ${treatmentName.toLowerCase()} pune`,
    ],
    slug: `treatments/${slug}`,
  });
}

// ✅ JSON-LD Schema generators
export function generateMedicalProcedureSchema(
  name: string,
  description: string,
  price: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    procedureType: "https://schema.org/TherapeuticProcedure",
    followup: "Regular dental checkups recommended",
    preparation: "Initial consultation and examination required",
    howPerformed: `Performed at ${CLINIC_NAME}, ${LOCATION}`,
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Dentistry",
    },
    study: {
      "@type": "MedicalStudy",
      healthCondition: {
        "@type": "MedicalCondition",
        name: "Dental Health",
      },
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Dentist",
        name: CLINIC_NAME,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Wakad, Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
    },
  };
}

// ✅ Review schema generator
export function generateReviewSchema(reviews: {
  name: string;
  rating: number;
  review: string;
  date: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: CLINIC_NAME,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.review,
      datePublished: r.date,
    })),
  };
}