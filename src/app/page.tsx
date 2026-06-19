"use client";

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