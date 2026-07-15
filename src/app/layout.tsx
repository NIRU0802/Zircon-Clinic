import type { Metadata, Viewport } from "next";
import {
  Inter,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ✅ Viewport config
export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ✅ Full SEO Metadata
export const metadata: Metadata = {
  // Basic
  title: {
    default:
      "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
    template: "%s | Zircon Dental Wakad, Pune",
  },
  description:
    "Zircon Dental & Implant Clinic in Wakad, Pune — Expert dental implants, smile design, root canal, orthodontics & oral surgery. 18+ years experience. 98.5% success rate. Free consultation. Call +91 75586 97707.",

  // Keywords
  keywords: [
    "dentist in wakad pune",
    "dental clinic wakad",
    "dental implants pune",
    "dental implants wakad",
    "best dentist pimpri chinchwad",
    "dental implants cost pune",
    "zircon dental",
    "zircon dental wakad",
    "smile design pune",
    "root canal wakad",
    "orthodontics pune",
    "teeth whitening wakad",
    "dental clinic near phoenix mall wakad",
    "all on 4 implants pune",
    "crowns bridges pune",
    "oral surgery pune",
    "implantologist pune",
    "dr akansha lakde",
    "best dental clinic pune 2025",
    "affordable dental implants pune",
    "same day teeth pune",
    "full mouth rehabilitation pune",
  ],

  // Authors & Creator
  authors: [
    {
      name: "Zircon Dental & Implant Clinic",
      url: "https://zircondentalpune.com",
    },
  ],
  creator: "Zircon Dental & Implant Clinic",
  publisher: "Zircon Dental & Implant Clinic",

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zircondentalpune.com",
    siteName: "Zircon Dental & Implant Clinic",
    title:
      "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
    description:
      "Expert dental implants, smile design & complete dental care at Wakad, Pune. 18+ years experience. 98.5% success rate. Free consultation available.",
    images: [
      {
        url: "https://zircondentalpune.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zircon Dental & Implant Clinic - Wakad, Pune",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title:
      "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
    description:
      "Expert dental implants & cosmetic dentistry in Wakad, Pune. Free consultation. Call +91 75586 97707.",
    images: ["https://zircondentalpune.com/og-image.jpg"],
    creator: "@zircondentalpune",
    site: "@zircondentalpune",
  },

  // Canonical
  alternates: {
    canonical: "https://zircondentalpune.com",
    languages: {
      "en-IN": "https://zircondentalpune.com",
    },
  },

  // App
  applicationName: "Zircon Dental & Implant Clinic",
  category: "Healthcare, Dental",

  // Verification (add your actual codes)
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // yandex: "your-yandex-code",
    // bing: "your-bing-code",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },

  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ✅ Local Business Schema - Most important for dental SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "@id": "https://zircondentalpune.com/#dentist",
              name: "Zircon Dental & Implant Clinic",
              alternateName: "Zircon Dental Wakad",
              description:
                "Premier dental implant clinic in Wakad, Pune offering dental implants, smile design, root canal, orthodontics and oral surgery.",
              url: "https://zircondentalpune.com",
              logo: "https://zircondentalpune.com/logo.png",
              image: "https://zircondentalpune.com/og-image.jpg",
              telephone: "+917558697707",
              email: "info@zircondentalpune.com",
              currenciesAccepted: "INR",
              paymentAccepted:
                "Cash, Credit Card, Debit Card, UPI, EMI",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop No. 72, WESTERN AVENU, Western High St, opp. Phoenix Mall Road, Shankar Kalat Nagar",
                addressLocality: "Wakad",
                addressRegion: "Maharashtra",
                postalCode: "411057",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "18.5989",
                longitude: "73.7638",
              },
              hasMap:
                "https://www.google.com/maps/place/Wakad,+Pune",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
                worstRating: "1",
              },
              medicalSpecialty: [
                "Dentistry",
                "Oral Surgery",
                "Orthodontics",
                "Implantology",
                "Cosmetic Dentistry",
              ],
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Dental Implants",
                  description:
                    "Permanent tooth replacement with titanium implants",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "All-on-4 Implants",
                  description:
                    "Full arch restoration with 4 implants, same-day teeth",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Root Canal Treatment",
                  description:
                    "Pain-free root canal with rotary endodontics",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Smile Design",
                  description:
                    "Digital smile makeover with veneers and cosmetic dentistry",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Teeth Whitening",
                  description:
                    "Professional LED teeth whitening, up to 8 shades brighter",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Orthodontics",
                  description:
                    "Braces and clear aligners for teeth straightening",
                },
              ],
              sameAs: [
                "https://instagram.com/zircondentalpune",
                "https://facebook.com/zircondentalpune",
                "https://youtube.com/@zircondentalpune",
              ],
            }),
          }}
        />

        {/* ✅ Doctor/Physician Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Akansha Lakde",
              jobTitle:
                "Chief Dental Surgeon & Implantologist",
              description:
                "Renowned oral and maxillofacial surgeon with 18+ years experience in dental implants and full mouth rehabilitation at Zircon Dental, Wakad, Pune.",
              worksFor: {
                "@type": "Dentist",
                name: "Zircon Dental & Implant Clinic",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Wakad, Pune",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
              },
              medicalSpecialty: "Dentistry",
              hasCredential: [
                "MDS - Oral & Maxillofacial Surgery",
                "Fellow - International Congress of Oral Implantologists (ICOI)",
                "Certified - Advanced Implantology, Germany",
              ],
            }),
          }}
        />

        {/* ✅ FAQ Schema for Home Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much do dental implants cost in Pune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dental implants at Zircon Dental, Wakad start from ₹25,000 per implant. All-on-4 implants start from ₹4,50,000 per arch. We offer 0% EMI options and free consultation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is consultation free at Zircon Dental Wakad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, your first consultation at Zircon Dental & Implant Clinic, Wakad, Pune is completely free. This includes examination, basic X-ray, treatment planning and cost estimate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the success rate of dental implants at Zircon Dental?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Zircon Dental maintains a 98.5% success rate for dental implants, which is among the highest in Pune. We use internationally certified titanium implant systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is Zircon Dental Clinic located in Pune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Zircon Dental & Implant Clinic is located at Shop No. 72, Western Avenue, opposite Phoenix Mall Road, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Pune - 411057.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer same-day dental implants in Pune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! With our All-on-4 immediate loading protocol, you can walk out with a complete set of fixed teeth on the same day as surgery at our Wakad clinic.",
                  },
                },
              ],
            }),
          }}
        />

        {/* ✅ BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://zircondentalpune.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Treatments",
                  item: "https://zircondentalpune.com/treatments",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Pricing",
                  item: "https://zircondentalpune.com/pricing",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}