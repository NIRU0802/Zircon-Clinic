import type { Metadata } from "next";

const BASE_URL = "https://zircondentalpune.com";

export const CLINIC_NAME = "Zircon Dental & Implant Clinic";

export const CLINIC = {
  name: CLINIC_NAME,
  shortName: "Zircon Dental",
  url: BASE_URL,
  telephone: "+917558697707",
  email: "info@zircondentalpune.com",

  address: {
    street:
      "Shop No. 72, Western Avenue, Western High St, opposite Phoenix Mall Road, Shankar Kalat Nagar",
    locality: "Wakad",
    city: "Pimpri-Chinchwad",
    region: "Maharashtra",
    postalCode: "411057",
    country: "IN",
  },

  locationText:
    "Shop No. 72, Western Avenue, Western High St, opposite Phoenix Mall Road, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057",

  area: "Wakad, Pune",
  city: "Pune",
  region: "Maharashtra",

  logo: `${BASE_URL}/logo.png`,
  ogImage: `${BASE_URL}/og-image.jpg`,

  mapUrl: "https://www.google.com/maps/search/?api=1&query=Zircon+Dental+and+Implant+Clinic+Wakad+Pune",

  sameAs: [
    "https://instagram.com/zircondentalpune",
    "https://facebook.com/zircondentalpune",
    "https://youtube.com/@zircondentalpune",
  ],
} as const;

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  slug?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

function normalizeSlug(slug = "") {
  return slug.replace(/^\/+|\/+$/g, "");
}

export function getCanonicalUrl(slug = "") {
  const normalized = normalizeSlug(slug);

  return normalized
    ? `${BASE_URL}/${normalized}`
    : BASE_URL;
}

function absoluteImageUrl(image: string) {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${BASE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

export function generatePageSEO({
  title,
  description,
  keywords = [],
  slug = "",
  image = "/og-image.jpg",
  type = "website",
  noIndex = false,
}: PageSEOProps): Metadata {
  const canonical = getCanonicalUrl(slug);

  const uniqueKeywords = Array.from(
    new Set(
      keywords
        .map((keyword) => keyword.trim().toLowerCase())
        .filter(Boolean)
    )
  );

  return {
    title,

    description,

    keywords: uniqueKeywords,

    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },

    alternates: {
      canonical,
      languages: {
        "en-IN": canonical,
      },
    },

    openGraph: {
      type,
      locale: "en_IN",
      url: canonical,
      siteName: CLINIC_NAME,
      title,
      description,
      images: [
        {
          url: absoluteImageUrl(image),
          width: 1200,
          height: 630,
          alt: `${title} - ${CLINIC_NAME}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl(image)],
      creator: "@zircondentalpune",
      site: "@zircondentalpune",
    },

    authors: [
      {
        name: CLINIC_NAME,
        url: BASE_URL,
      },
    ],

    creator: CLINIC_NAME,
    publisher: CLINIC_NAME,
  };
}

/**
 * SEO metadata for individual treatment pages.
 *
 * Important:
 * We intentionally target both Pune and the actual
 * clinic location Wakad without making every title
 * identical.
 */
export function generateTreatmentSEO(
  treatmentName: string,
  description: string,
  slug: string,
  price: string,
  metaTitle?: string,
  metaDescription?: string,
  image?: string
): Metadata {
  const cleanTreatmentName = treatmentName.trim();

  const title =
    metaTitle?.trim() ||
    `${cleanTreatmentName} in Pune | Zircon Dental & Implant Clinic`;

  const priceText = price?.trim()
    ? ` Treatment options start from ${price.trim()}.`
    : "";

  const generatedDescription =
    `${description.trim()}${priceText} ` +
    `Get expert ${cleanTreatmentName.toLowerCase()} treatment at Zircon Dental & Implant Clinic in Wakad, Pune. ` +
    `Book a consultation.`;

  const finalDescription =
    metaDescription?.trim() || generatedDescription;

  const treatmentKeyword = cleanTreatmentName.toLowerCase();

  return generatePageSEO({
    title,
    description: finalDescription,
    slug: `treatments/${slug}`,
    image,
    keywords: [
      `${treatmentKeyword} pune`,
      `${treatmentKeyword} wakad`,
      `${treatmentKeyword} pimpri chinchwad`,
      `${treatmentKeyword} near me`,
      `${treatmentKeyword} cost pune`,
      `${treatmentKeyword} price pune`,
      `dentist for ${treatmentKeyword} pune`,
    ],
  });
}

/**
 * Main clinic entity schema.
 *
 * This should represent the actual clinic and location,
 * not individual treatment pages.
 */
export function generateDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${BASE_URL}/#dentist`,

    name: CLINIC_NAME,
    alternateName: "Zircon Dental Wakad",

    url: BASE_URL,
    logo: CLINIC.logo,
    image: CLINIC.ogImage,

    description:
      "Zircon Dental & Implant Clinic is a dental clinic in Wakad, Pune offering dental implants, cosmetic dentistry, root canal treatment, orthodontics, oral surgery and comprehensive dental care.",

    telephone: CLINIC.telephone,
    email: CLINIC.email,

    priceRange: "₹₹",

    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.locality,
      addressRegion: CLINIC.address.region,
      postalCode: CLINIC.address.postalCode,
      addressCountry: CLINIC.address.country,
    },

    areaServed: [
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "City",
        name: "Pimpri-Chinchwad",
      },
      {
        "@type": "Place",
        name: "Wakad",
      },
      {
        "@type": "Place",
        name: "Hinjewadi",
      },
      {
        "@type": "Place",
        name: "Baner",
      },
      {
        "@type": "Place",
        name: "Aundh",
      },
      {
        "@type": "Place",
        name: "Balewadi",
      },
    ],

    hasMap: CLINIC.mapUrl,

    medicalSpecialty: [
      "Dentistry",
      "Implantology",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Oral Surgery",
    ],

    sameAs: [...CLINIC.sameAs],
  };
}

/**
 * Individual doctor schema.
 */
export function generateDoctorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${BASE_URL}/#dr-akansha-lakde`,

    name: "Dr. Akansha Lakde",

    jobTitle: "Dental Surgeon & Implantologist",

    worksFor: {
      "@id": `${BASE_URL}/#dentist`,
    },

    url: `${BASE_URL}/about`,

    medicalSpecialty: "Dentistry",
  };
}

/**
 * Medical procedure schema for treatment pages.
 */
export function generateMedicalProcedureSchema(
  name: string,
  description: string,
  price: string,
  slug?: string,
  image?: string
) {
  const procedureUrl = slug
    ? getCanonicalUrl(`treatments/${slug}`)
    : undefined;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",

    name,
    description,

    ...(procedureUrl
      ? {
          url: procedureUrl,
        }
      : {}),

    ...(image
      ? {
          image: absoluteImageUrl(image),
        }
      : {}),

    procedureType:
      "https://schema.org/TherapeuticProcedure",

    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Dentistry",
    },

    provider: {
      "@id": `${BASE_URL}/#dentist`,
    },
  };

  if (price?.trim()) {
    schema.offers = {
      "@type": "Offer",
      price: extractNumericPrice(price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",

      seller: {
        "@id": `${BASE_URL}/#dentist`,
      },
    };
  }

  return schema;
}

/**
 * Extracts a numeric starting price from strings such as:
 * ₹25,000
 * ₹4,50,000
 * 25000
 */
function extractNumericPrice(price: string): string {
  const normalized = price
    .replace(/₹/g, "")
    .replace(/,/g, "")
    .replace(/[^\d.]/g, "");

  return normalized || price;
}

/**
 * Breadcrumb schema.
 */
export function generateBreadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQPage schema.
 *
 * Only use this with FAQs that are actually visible
 * on the corresponding page.
 */
export function generateFAQSchema(
  faqs: {
    question: string;
    answer: string;
  }[]
) {
  if (!faqs?.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Collection schema for the treatments directory.
 */
export function generateTreatmentCollectionSchema(
  treatments: {
    title: string;
    slug: string;
    description: string;
    image?: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id": `${BASE_URL}/treatments#collection`,

    name: "Dental Treatments in Pune",

    description:
      "Explore dental treatments available at Zircon Dental & Implant Clinic in Wakad, Pune, including dental implants, root canal treatment, smile design, orthodontics, teeth whitening and oral surgery.",

    url: `${BASE_URL}/treatments`,

    mainEntity: {
      "@type": "ItemList",

      numberOfItems: treatments.length,

      itemListElement: treatments.map((treatment, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: treatment.title,

        url: getCanonicalUrl(`treatments/${treatment.slug}`),

        ...(treatment.image
          ? {
              image: absoluteImageUrl(treatment.image),
            }
          : {}),
      })),
    },
  };
}

/**
 * Safely creates JSON-LD HTML.
 */
export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}