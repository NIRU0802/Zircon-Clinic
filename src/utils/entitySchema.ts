import { getCanonicalUrl } from "@/utils/seo";

const BASE_URL = "https://zircondentalpune.com";
const DENTIST_ID = `${BASE_URL}/#dentist`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const ORG_ID = `${BASE_URL}/#organization`;
const DOCTOR_AKANSHA_ID = `${BASE_URL}/#dr-akansha-lakde`;
const DOCTOR_MANOJ_ID = `${BASE_URL}/#dr-manoj-anarase`;

/**
 * Core hardcoded Dentist/LocalBusiness entity for Zircon Dental.
 * This is the canonical, stable representation of the clinic entity.
 */
export function generateEntitySchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": DENTIST_ID,

    name: "Zircon Dental & Implant Clinic",
    alternateName: "Zircon Dental & Implant Studio",
    url: BASE_URL,
    telephone: "+917558697707",
    email: "info@zircondentalpune.com",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer, EMI",

    description:
      "Zircon Dental & Implant Clinic is a dental clinic in Wakad, Pune, Maharashtra, offering dental implants, immediate-load implants, root canal treatment, orthodontics, cosmetic dentistry, and child dentistry.",

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
      latitude: 18.602580182434046,
      longitude: 73.75416581077242,
    },

    hasMap: "https://maps.app.goo.gl/GDjxUeF31CDmJMYF9",

    areaServed: [
      { "@type": "Place", name: "Wakad" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Pimpri-Chinchwad" },
      { "@type": "Place", name: "Hinjewadi" },
      { "@type": "Place", name: "Baner" },
      { "@type": "Place", name: "Balewadi" },
      { "@type": "Place", name: "Aundh" },
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

    employee: [{ "@id": DOCTOR_AKANSHA_ID }, { "@id": DOCTOR_MANOJ_ID }],

    parentOrganization: { "@id": ORG_ID },

    sameAs: [
      "https://instagram.com/zircondentalpune",
      "https://facebook.com/zircondentalpune",
    ],
  };
}

export function generateOrganizationEntitySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Zircon Dental & Implant Clinic",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: [
      "https://instagram.com/zircondentalpune",
      "https://facebook.com/zircondentalpune",
    ],
  };
}

export function generateWebsiteEntitySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Zircon Dental & Implant Clinic",
    url: BASE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
    about: { "@id": DENTIST_ID },
  };
}

/**
 * Doctor entities, explicitly linked back to the clinic entity.
 */
export function generateDoctorEntitySchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": DOCTOR_AKANSHA_ID,
      name: "Dr. Akansha Lakde",
      jobTitle: "Chief Dental Surgeon & Implantologist",
      description:
        "Oral and maxillofacial surgeon specializing in dental implants and full mouth rehabilitation at Zircon Dental & Implant Clinic, Wakad, Pune.",
      medicalSpecialty: "Dentistry",
      worksFor: { "@id": DENTIST_ID },
      url: getCanonicalUrl("about"),
      hasCredential: [
        "MDS - Oral & Maxillofacial Surgery",
        "Fellow - International Congress of Oral Implantologists (ICOI)",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": DOCTOR_MANOJ_ID,
      name: "Dr. Manoj Kumar Anarase",
      jobTitle: "Chief Dental Surgeon & Head Dentist",
      description:
        "Dental surgeon specializing in full mouth rehabilitation, dental implants, and single-visit root canal treatment at Zircon Dental & Implant Clinic, Wakad, Pune.",
      medicalSpecialty: "Dentistry",
      worksFor: { "@id": DENTIST_ID },
      url: getCanonicalUrl("about"),
      hasCredential: ["Bachelor of Dental Surgery (BDS)"],
    },
  ];
}

/**
 * Service entity for a single treatment, linked to the clinic entity.
 * Call once per treatment page.
 */
export function generateServiceEntitySchema(
  name: string,
  description: string,
  slug: string,
  priceRange?: string
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${getCanonicalUrl(`treatments/${slug}`)}#service`,
    name,
    description,
    url: getCanonicalUrl(`treatments/${slug}`),
    provider: { "@id": DENTIST_ID },
    relevantSpecialty: { "@type": "MedicalSpecialty", name: "Dentistry" },
  };

  if (priceRange) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "INR",
      priceRange,
      availability: "https://schema.org/InStock",
      seller: { "@id": DENTIST_ID },
    };
  }

  return schema;
}