// ✅ NO "use client" here - Server Component
// metadata can only be exported from Server Components

import { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import PricingSection from "@/components/home/PricingSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsCounter from "@/components/home/StatsCounter";
import VideoSection from "@/components/home/VideoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import GallerySection from "@/components/home/GallerySection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import BrandsSection from "@/components/home/BrandsSection";
import ContactSection from "@/components/home/ContactSection";

// ✅ metadata works because there is NO "use client" here
export const metadata: Metadata = {
  title:
    "Best Dentist in Wakad Pune | Zircon Dental & Implant Clinic",
  description:
    "Zircon Dental & Implant Clinic — Wakad's most trusted dental clinic. Dental implants from ₹25,000, smile design, root canal & orthodontics. 18+ years expertise. 98.5% success rate. Free consultation. Call +91 75586 97707.",
  keywords: [
    "best dentist wakad pune",
    "dental implants wakad pune",
    "dental clinic near phoenix mall wakad",
    "implant dentist pune",
    "zircon dental wakad",
  ],
  alternates: {
    canonical: "https://zircondentalpune.com",
  },
};

// ✅ This is a Server Component - no "use client"
// All child components (HeroSection, etc.) have their own "use client"
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <TreatmentsSection />
      <PricingSection />
      <StatsCounter />
      <WhyChooseUs />
      <VideoSection />
      <DoctorsSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
}