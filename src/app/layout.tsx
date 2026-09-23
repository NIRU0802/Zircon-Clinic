import type { Metadata, Viewport } from "next";
import {
  Inter,
  Playfair_Display,
  Cormorant_Garamond, Geist } from "next/font/google";
import "@/styles/globals.css";
import { ImageKitProvider } from "@imagekit/next";
import {
  generateDentistSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateDoctorSchemas,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/utils/seo";
import JsonLd from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

const SITE_URL = "https://www.zircondentalandimplantstudio.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/Logo.png`;

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
    template: "%s | Zircon Dental Wakad, Pune",
  },
  description:
    "Zircon Dental & Implant Clinic in Wakad, Pune — Expert dental implants, smile design, root canal, orthodontics & oral surgery. 18+ years experience. 98.5% success rate. Free consultation. Call +91 75586 97707.",
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
  authors: [
    {
      name: "Zircon Dental & Implant Clinic",
      url: SITE_URL,
    },
  ],
  creator: "Zircon Dental & Implant Clinic",
  publisher: "Zircon Dental & Implant Clinic",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Zircon Dental & Implant Clinic",
    title: "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
    description:
      "Expert dental implants, smile design & complete dental care at Wakad, Pune. 18+ years experience. 98.5% success rate. Free consultation available.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Zircon Dental & Implant Clinic - Wakad, Pune",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
    description:
      "Expert dental implants & cosmetic dentistry in Wakad, Pune. Free consultation. Call +91 75586 97707.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@zircondentalpune",
    site: "@zircondentalpune",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },
  applicationName: "Zircon Dental & Implant Clinic",
  category: "Healthcare, Dental",
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
  manifest: "/manifest.json",
};

const HOME_FAQS = [
  {
    question: "How much do dental implants cost in Pune?",
    answer:
      "Dental implants at Zircon Dental, Wakad start from ₹25,000 per implant. All-on-4 implants start from ₹4,50,000 per arch. We offer 0% EMI options and free consultation.",
  },
  {
    question: "Is consultation free at Zircon Dental Wakad?",
    answer:
      "Yes, your first consultation at Zircon Dental & Implant Clinic, Wakad, Pune is completely free. This includes examination, basic X-ray, treatment planning and cost estimate.",
  },
  {
    question: "What is the success rate of dental implants at Zircon Dental?",
    answer:
      "Zircon Dental maintains a 98.5% success rate for dental implants, which is among the highest in Pune. We use internationally certified titanium implant systems.",
  },
  {
    question: "Where is Zircon Dental Clinic located in Pune?",
    answer:
      "Zircon Dental & Implant Clinic is located at Shop No. 72, Western Avenue, opposite Phoenix Mall Road, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Pune - 411057.",
  },
  {
    question: "Do you offer same-day dental implants in Pune?",
    answer:
      "Yes! With our All-on-4 immediate loading protocol, you can walk out with a complete set of fixed teeth on the same day as surgery at our Wakad clinic.",
  },
];

const HOME_BREADCRUMBS = [
  { name: "Home", url: SITE_URL },
  { name: "Treatments", url: `${SITE_URL}/treatments` },
  { name: "Pricing", url: `${SITE_URL}/pricing` },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={cn(inter.variable, playfair.variable, cormorant.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={generateDentistSchema()} />
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
        {generateDoctorSchemas().map((doc, i) => (
          <JsonLd key={i} data={doc} />
        ))}
        <JsonLd data={generateFAQSchema(HOME_FAQS)} />
        <JsonLd data={generateBreadcrumbSchema(HOME_BREADCRUMBS)} />
      </head>
      <body className={inter.className}>
        <ImageKitProvider
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
        >
          {children}
        </ImageKitProvider>
      </body>
    </html>
  );
}
