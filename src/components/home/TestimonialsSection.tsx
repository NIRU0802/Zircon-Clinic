"use client";

import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

const AUTO_PLAY_DELAY = 5000;

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-dark-950 section-padding">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary-500/10 blur-[170px]" />
        <div className="absolute -bottom-52 -right-52 w-[700px] h-[700px] rounded-full bg-gold-500/10 blur-[170px]" />
      </div>

      {/* Decorative Quote */}
      <div className="absolute top-16 left-8 md:left-16 text-[220px] leading-none font-serif text-white/[0.03] select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          badge="⭐ 4.9 Google Rating"
          subtitle="Patient Testimonials"
          title='What Our <span class="text-gold-400">Patients</span> Say'
          description="Real experiences from patients who trusted Zircon Dental & Implant Clinic for their smile transformation."
          light
        />

        {/* ========================= */}
        {/* Premium Reviews Marquee */}
        {/* ========================= */}

        <div className="mt-14 mb-16">
          <Marquee
            speed={35}
            pauseOnHover
            gradient={false}
            autoFill
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="mx-3"
              >
                <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl px-6 py-3 hover:border-gold-400/40 hover:bg-white/[0.08] transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-4 h-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>

                  <div className="w-px h-5 bg-white/10" />

                  <span className="font-semibold text-white whitespace-nowrap">
                    {item.name}
                  </span>

                  <div className="w-1 h-1 rounded-full bg-gray-500" />

                  <span className="rounded-full border border-primary-500/20 bg-primary-500/15 px-3 py-1 text-xs font-medium text-primary-300 whitespace-nowrap">
                    {item.treatment}
                  </span>

                  <div className="w-1 h-1 rounded-full bg-gray-500" />

                  <div className="flex items-center gap-1 text-gray-400 text-sm whitespace-nowrap">
                    <FiMapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* ========================= */}
        {/* Featured Testimonial */}
        {/* ========================= */}

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
            >
              {/* Top Glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

              {/* Floating Glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary-500/10 blur-[120px]" />

              <div className="relative p-8 md:p-14 lg:p-16">
                {/* Verified Badge */}
                <div className="flex justify-center mb-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/10 px-5 py-2">
                    <FiCheckCircle className="text-gold-400" />

                    <span className="text-sm font-medium text-gold-300">
                      Verified Patient Review
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar
                      key={index}
                      className={`w-6 h-6 ${
                        index < current.rating
                          ? "fill-gold-400 text-gold-400"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="max-w-4xl mx-auto text-center text-white text-xl md:text-2xl lg:text-3xl leading-relaxed font-heading font-light italic">
                  &ldquo;{current.review}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="mx-auto my-12 h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

                {/* Patient */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 blur-md opacity-60" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/30 bg-dark-900">
                      <span className="font-heading text-3xl font-bold text-white">
                        {current.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white">
                      {current.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <FiMapPin className="h-4 w-4" />
                        {current.location}
                      </div>

                      <span className="hidden h-1 w-1 rounded-full bg-gray-500 md:block" />

                      <span className="rounded-full border border-primary-500/30 bg-primary-500/15 px-3 py-1 text-xs font-medium text-primary-300">
                        {current.treatment}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-14">
                  <div className="mx-auto h-1 w-72 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      key={currentIndex}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: AUTO_PLAY_DELAY / 1000,
                        ease: "linear",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-gold-400"
                    />
                  </div>
                </div>
                                {/* Trust Statistics */}
                                <div className="mt-14 border-t border-white/10 pt-10">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-gold-400">
                        5000+
                      </h4>
                      <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                        Happy Patients
                      </p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-gold-400">
                        98%
                      </h4>
                      <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                        Patient Satisfaction
                      </p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-gold-400">
                        15+
                      </h4>
                      <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                        Years of Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-5">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-400/10"
            >
              <FiChevronLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            {/* Pagination */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                    currentIndex === index
                      ? "h-3 w-12 bg-primary-500"
                      : "h-3 w-3 bg-white/20 hover:bg-white/40"
                  }`}
                >
                  {currentIndex === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-gold-400"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-400/10"
            >
              <FiChevronRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Bottom Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                <span className="text-lg text-gold-400">★★★★★</span>

                <span className="text-sm text-gray-300">
                  Trusted by thousands of patients across Pune for exceptional
                  dental care and life-changing smile transformations.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;