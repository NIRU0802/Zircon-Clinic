import type { Metadata } from "next";

export const SITE_URL = "https://zircondentalpune.com";

export const CLINIC_NAME = "Zircon Dental & Implant Clinic";

export const CLINIC_SHORT_NAME = "Zircon Dental";

export const LOCATION = {
  city: "Pune",
  locality: "Wakad",
  district: "Pimpri-Chinchwad",
  state: "Maharashtra",
  postalCode: "411057",
  country: "India",
  countryCode: "IN",
  address:
    "Shop No. 72, Western Avenue, Western High St, opposite Phoenix Mall Road, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057, India",
  // ✅ Verified accurate coordinates (matches SITE_CONFIG.coordinates in utils/constants.ts)
  latitude: 18.602580182434046,
  longitude: 73.75416581077242,
  mapUrl: "https://maps.app.goo.gl/GDjxUeF31CDmJMYF9",
};

export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const DEFAULT_DESCRIPTION =
  "Zircon Dental & Implant Clinic is a modern dental clinic in Wakad, Pune, offering dental implants, root canal treatment, braces, aligners, crowns, veneers, teeth whitening and comprehensive dental care.";

export const DEFAULT_KEYWORDS = [
  "dentist in pune",
  "dental clinic in pune",
  "dentist in wakad",
  "dental clinic in wakad",
  "dentist wakad pune",
  "dental clinic wakad pune",
  "dentist in pimpri chinchwad",
  "dental clinic in pimpri chinchwad",
  "dentist near phoenix mall pune",
  "dental clinic near phoenix mall pune",
  "zircon dental",
  "zircon dental pune",
];

// ✅ Hardcoded doctor roster — single source of truth for Physician schema.
// Keep in sync with src/data/doctors.ts (display copy) if that file changes.
export const DOCTORS = [
  {
    id: "dr-akansha-lakde",
    name: "Dr. Akansha Lakde",
    jobTitle: "Chief Dental Surgeon & Implantologist",
    description:
      "Oral and maxillofacial surgeon specializing in dental implants and full mouth rehabilitation at Zircon Dental & Implant Clinic, Wakad, Pune.",
    credentials: [
      "MDS - Oral & Maxillofacial Surgery",
      "Fellow - International Congress of Oral Implantologists (ICOI)",
    ],
  },
  {
    id: "dr-manoj-anarase",
    name: "Dr. Manoj Kumar Anarase",
    jobTitle: "Chief Dental Surgeon & Head Dentist",
    description:
      "Dental surgeon specializing in full mouth rehabilitation, dental implants, and single-visit root canal treatment at Zircon Dental & Implant Clinic, Wakad, Pune.",
    credentials: ["Bachelor of Dental Surgery (BDS)"],
  },
] as const;

export interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  slug?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

function normalizeSlug(slug = ""): string {
  return slug.replace(/^\/+|\/+$/g, "");
}

export function getCanonicalUrl(slug = ""): string {
  const normalizedSlug = normalizeSlug(slug);

  return normalizedSlug
    ? `${SITE_URL}/${normalizedSlug}`
    : SITE_URL;
}

export function getAbsoluteImageUrl(image = DEFAULT_OG_IMAGE): string {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

export function generatePageSEO({
  title,
  description,
  keywords = [],
  slug = "",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
}: PageSEOProps): Metadata {
  const canonicalUrl = getCanonicalUrl(slug);
  const imageUrl = getAbsoluteImageUrl(image);

  const mergedKeywords = Array.from(
    new Set([
      ...keywords,
      ...DEFAULT_KEYWORDS,
    ])
  );

  return {
    title,
    description,
    keywords: mergedKeywords,

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type,
      locale: "en_IN",
      url: canonicalUrl,
      siteName: CLINIC_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${CLINIC_NAME}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function generateTreatmentSEO(
  treatmentName: string,
  description: string,
  slug: string,
  price?: string
): Metadata {
  const normalizedTreatment = treatmentName.trim();

  const treatmentSlug = normalizedTreatment
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const locationKeywords = [
    `${normalizedTreatment.toLowerCase()} pune`,
    `${normalizedTreatment.toLowerCase()} wakad`,
    `${normalizedTreatment.toLowerCase()} pimpri chinchwad`,
    `${normalizedTreatment.toLowerCase()} maharashtra`,
    `best ${normalizedTreatment.toLowerCase()} pune`,
    `best ${normalizedTreatment.toLowerCase()} wakad`,
  ];

  const priceText = price
    ? ` Starting from ${price}.`
    : "";

  return generatePageSEO({
    title: `${normalizedTreatment} in Pune | ${CLINIC_SHORT_NAME}`,
    description:
      `${description}${priceText} Get expert ${normalizedTreatment.toLowerCase()} treatment at ${CLINIC_NAME}, Wakad, Pune. Book a dental consultation today.`,
    keywords: locationKeywords,
    slug: `treatments/${slug || treatmentSlug}`,
  });
}

/**
 * Main clinic entity (Dentist/LocalBusiness).
 * This is the canonical, stable representation of the clinic entity.
 * Render once, site-wide, in the root layout.
 */
export function generateDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": `${SITE_URL}/#dentist`,
    name: CLINIC_NAME,
    alternateName: "Zircon Dental & Implant Studio",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description: DEFAULT_DESCRIPTION,
    telephone: "+917558697707",
    email: "info@zircondentalpune.com",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer, EMI",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 72, Western Avenue, Western High St, opposite Phoenix Mall Road, Shankar Kalat Nagar",
      addressLocality: "Wakad",
      addressRegion: "Maharashtra",
      postalCode: "411057",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCATION.latitude,
      longitude: LOCATION.longitude,
    },

    hasMap: LOCATION.mapUrl,

    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Pimpri-Chinchwad" },
      { "@type": "Place", name: "Wakad" },
      { "@type": "Place", name: "Hinjewadi" },
      { "@type": "Place", name: "Baner" },
      { "@type": "Place", name: "Balewadi" },
      { "@type": "Place", name: "Tathawade" },
      { "@type": "Place", name: "Pimple Saudagar" },
      { "@type": "Place", name: "Pimple Nilakh" },
      { "@type": "Place", name: "Kothrud" },
      { "@type": "Place", name: "Aundh" },
      { "@type": "Place", name: "Kharadi" },
      { "@type": "Place", name: "Hadapsar" },
      { "@type": "Place", name: "Kalyani Nagar" },
      { "@type": "Place", name: "Viman Nagar" },
      { "@type": "Place", name: "Koregaon Park" },
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],

    medicalSpecialty: [
      "Dentistry",
      "Implantology",
      "Orthodontics",
      "Oral Surgery",
      "Cosmetic Dentistry",
      "Pediatric Dentistry",
    ],

    employee: DOCTORS.map((doc) => ({ "@id": `${SITE_URL}/#${doc.id}` })),

    parentOrganization: { "@id": `${SITE_URL}/#organization` },

    sameAs: [
      "https://instagram.com/zircondentalpune",
      "https://facebook.com/zircondentalpune",
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CLINIC_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    sameAs: [
      "https://instagram.com/zircondentalpune",
      "https://facebook.com/zircondentalpune",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: CLINIC_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    about: {
      "@id": `${SITE_URL}/#dentist`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Doctor entities (Physician schema), each explicitly linked back to the
 * clinic entity via `worksFor`. Rendered once, site-wide, in the root layout.
 */
export function generateDoctorSchemas() {
  return DOCTORS.map((doc) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#${doc.id}`,
    name: doc.name,
    jobTitle: doc.jobTitle,
    description: doc.description,
    medicalSpecialty: "Dentistry",
    worksFor: { "@id": `${SITE_URL}/#dentist` },
    url: getCanonicalUrl("about"),
    hasCredential: [...doc.credentials],
  }));
}

export function generateWebPageSchema(
  title: string,
  description: string,
  slug = ""
) {
  const url = getCanonicalUrl(slug);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#dentist`,
    },
    inLanguage: "en-IN",
  };
}

export function generateBreadcrumbSchema(
  items: Array<{
    name: string;
    url: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : getCanonicalUrl(item.url),
    })),
  };
}

export function generateMedicalProcedureSchema(
  name: string,
  description: string,
  price?: string,
  slug?: string
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    procedureType: {
      "@type": "MedicalProcedureType",
      name: "Therapeutic Procedure",
    },
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Dentistry",
    },
    provider: {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#dentist`,
      name: CLINIC_NAME,
    },
  };

  if (slug) {
    schema["@id"] = `${getCanonicalUrl(`treatments/${slug}`)}#service`;
    schema.url = getCanonicalUrl(`treatments/${slug}`);
  }

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Dentist",
        "@id": `${SITE_URL}/#dentist`,
        name: CLINIC_NAME,
      },
    };
  }

  return schema;
}

export function generateFAQSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>
) {
  if (!faqs.length) {
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

export function generateReviewSchema(
  reviews: Array<{
    name: string;
    rating: number;
    review: string;
    date: string;
  }>
) {
  if (!reviews.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,
    name: CLINIC_NAME,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.review,
      datePublished: review.date,
    })),
  };
}