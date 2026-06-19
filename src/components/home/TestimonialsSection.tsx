"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blur-blob w-[600px] h-[600px] bg-primary-500/5 -top-32 -right-32" />
        <div className="blur-blob w-[400px] h-[400px] bg-gold-500/5 bottom-0 -left-32" />
      </div>
      <div className="absolute top-20 left-10 text-[200px] font-heading text-white/[0.02] leading-none pointer-events-none select-none">&ldquo;</div>

      <div className="container-custom relative">
        <SectionTitle
          badge="4.9 ★ Google Rating"
          subtitle="Patient Reviews"
          title='What Our <span class="text-gold-400">Patients</span> Say About Us'
          description="Real stories from real patients at Zircon Dental & Implant Clinic, Wakad, Pune."
          light
        />

        <div className="max-w-4xl mx-auto">
          <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "text-gold-400 fill-gold-400" : "text-gray-600"}`} />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/90 font-heading font-light leading-relaxed mb-10 italic">
              &ldquo;{testimonials[currentIndex].review}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 p-0.5">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-white">{testimonials[currentIndex].name.charAt(0)}</span>
                </div>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].location} • {testimonials[currentIndex].treatment}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"><FiChevronLeft className="w-5 h-5" /></button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-primary-500" : "w-2 bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
            <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"><FiChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;