// ✅ Server Component - no "use client" here
// metadata can only be exported from Server Components

import { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import BrandsSection from "@/components/home/BrandsSection";
import AboutSection from "@/components/home/AboutSection";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import PricingSection from "@/components/home/PricingSection";
import StatsCounter from "@/components/home/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DoctorsSection from "@/components/home/DoctorsSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Best Dentist in Wakad Pune | Zircon Dental & Implant Clinic",

  description:
    "Zircon Dental & Implant Clinic — Wakad's most trusted dental clinic. Dental implants from ₹25,000, smile design, root canal & orthodontics. 18+ years expertise. 99% success rate. Free consultation. Call +91 75586 97707.",

  keywords: [
    "best dentist wakad pune",
    "dental implants wakad pune",
    "dental clinic near phoenix mall wakad",
    "implant dentist pune",
    "zircon dental wakad",
  ],

  alternates: {
    canonical: "https://www.zircondentalandimplantstudio.com",
  },
};

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection />

      {/* Premium International Brands */}
      <BrandsSection />

      {/* About Zircon Dental */}
      <AboutSection />

      {/* Our Treatments */}
      <TreatmentsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Achievements */}
      <StatsCounter />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Dental Experts */}
      <DoctorsSection />

      {/* Before & After */}
      <BeforeAfterSection />

      {/* Patient Testimonials */}
      <TestimonialsSection />

      {/* Our Clinic / Virtual Tour */}
      <GallerySection />

      {/* Ready to Transform Your Smile? */}
      <CTASection />

      {/* FAQ */}
      <FAQSection />

      {/* Dental Blog */}
      <BlogSection />

      {/* Contact / Appointment */}
      <ContactSection />
    </Layout>
  );
}