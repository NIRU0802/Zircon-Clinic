import type { Metadata } from "next";

export const SITE_URL = "https://www.zircondentalandimplantstudio.com";
export const BASE_URL = SITE_URL;

export const CLINIC_NAME = "Zircon Dental & Implant Clinic";

export const CLINIC = {
  name: CLINIC_NAME,
  shortName: "Zircon Dental",
  logo: `${SITE_URL}/logo.png`,
  telephone: "+917558697707",
  email: "Zircondental77@gmail.com",
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
  return normalizedSlug ? `${SITE_URL}/${normalizedSlug}` : SITE_URL;
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

  const mergedKeywords = Array.from(new Set([...keywords, ...DEFAULT_KEYWORDS]));

  return {
    title,
    description,
    keywords: mergedKeywords,

    robots: noIndex
      ? { index: false, follow: false }
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

  const priceText = price ? ` Starting from ${price}.` : "";

  return generatePageSEO({
    title: `${normalizedTreatment} in Pune | ${CLINIC.shortName}`,
    description: `${description}${priceText} Get expert ${normalizedTreatment.toLowerCase()} treatment at ${CLINIC_NAME}, Wakad, Pune. Book a dental consultation today.`,
    keywords: locationKeywords,
    slug: `treatments/${slug || treatmentSlug}`,
  });
}

export function generateDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,
    name: CLINIC_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    telephone: CLINIC.telephone,
    email: CLINIC.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 72, Western Avenue, Western High St, opposite Phoenix Mall Road, Shankar Kalat Nagar",
      addressLocality: "Wakad",
      addressRegion: "Maharashtra",
      postalCode: "411057",
      addressCountry: "IN",
    },
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
    medicalSpecialty: "Dentistry",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CLINIC_NAME,
    url: SITE_URL,
    logo: CLINIC.logo,
    description: DEFAULT_DESCRIPTION,
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
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

function generateDoctorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dr-akansha-lakde`,
    name: "Dr. Akansha Lakde",
    jobTitle: "Chief Dental Surgeon & Implantologist",
    worksFor: { "@id": `${SITE_URL}/#dentist` },
    url: `${SITE_URL}/about`,
    medicalSpecialty: "Dentistry",
  };
}

export function generateDoctorSchemas() {
  return [
    generateDoctorSchema(),
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": `${SITE_URL}/#dr-manoj-anarase`,
      name: "Dr. Manoj Kumar Anarase",
      jobTitle: "Chief Dental Surgeon & Head Dentist",
      worksFor: { "@id": `${SITE_URL}/#dentist` },
      url: `${SITE_URL}/about`,
      medicalSpecialty: "Dentistry",
    },
  ];
}

export function generateWebPageSchema(title: string, description: string, slug = "") {
  const url = getCanonicalUrl(slug);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#dentist` },
    inLanguage: "en-IN",
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : getCanonicalUrl(item.url),
    })),
  };
}

export function generateMedicalProcedureSchema(
  name: string,
  description: string,
  price?: string
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

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs.length) return null;

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
  reviews: Array<{ name: string; rating: number; review: string; date: string }>
) {
  if (!reviews.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,
    name: CLINIC_NAME,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
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