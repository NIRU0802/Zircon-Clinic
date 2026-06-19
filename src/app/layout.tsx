import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title:
    "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
  description:
    "Pune's premier dental implant clinic at Wakad, Pimpri-Chinchwad. Best dental implants, smile design, root canal, orthodontics & oral surgery. Near Phoenix Mall, Wakad. Call +91 98982 81989.",
  keywords:
    "dentist in wakad, dental clinic pune, dental implants wakad, best dentist pimpri chinchwad, smile design pune, root canal wakad, orthodontics pune, teeth whitening wakad, dental clinic near phoenix mall wakad, zircon dental",
  openGraph: {
    title:
      "Zircon Dental & Implant Clinic | Best Dentist in Wakad, Pune",
    description:
      "World-class dental care at Wakad, Pune. Dental implants starting ₹25,000. 98.5% success rate. 0% EMI available. Near Phoenix Mall Road.",
    type: "website",
    locale: "en_IN",
    siteName: "Zircon Dental & Implant Clinic",
    url: "https://zircondental.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zircon Dental & Implant Clinic | Wakad, Pune",
    description:
      "Best dental implants & cosmetic dentistry in Wakad, Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zircondental.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <head>
        {/* Local Business Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Zircon Dental & Implant Clinic",
              image: "https://zircondental.com/og-image.jpg",
              url: "https://zircondental.com",
              telephone: "+919898281989",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop No. 72, WESTERN AVENU, Western High St, opp. Phoenix Mall Road, Shankar Kalat Nagar",
                addressLocality: "Wakad, Pimpri-Chinchwad",
                addressRegion: "Maharashtra",
                postalCode: "411057",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.5989,
                longitude: 73.7638,
              },
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
              priceRange: "₹₹",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}