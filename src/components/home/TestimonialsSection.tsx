"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

import { testimonials } from "@/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";

type Testimonial = (typeof testimonials)[number];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="mx-3 w-[310px] shrink-0 sm:w-[360px]"
    >
      <div className="group relative flex min-h-[235px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.20)] transition-all duration-500 hover:border-primary-200 hover:shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
        {/* =================================================
            TOP TEAL ACCENT
        ================================================= */}

        <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

        {/* =================================================
            DECORATIVE QUOTE
        ================================================= */}

        <div className="pointer-events-none absolute right-5 top-1 select-none font-serif text-7xl leading-none text-primary-50">
          &rdquo;
        </div>

        {/* =================================================
            RATING
        ================================================= */}

        <div className="relative z-10 mb-5 flex items-center gap-1">
          {Array.from({
            length: testimonial.rating,
          }).map((_, index) => (
            <FiStar
              key={index}
              className="h-4 w-4 fill-gold-400 text-gold-400"
            />
          ))}
        </div>

        {/* =================================================
            REVIEW
        ================================================= */}

        <p className="relative z-10 line-clamp-5 text-sm leading-6 text-slate-600">
          &ldquo;{testimonial.review}&rdquo;
        </p>

        {/* =================================================
            PATIENT INFORMATION
        ================================================= */}

        <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-5">
          {/* Avatar */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white shadow-sm">
            {testimonial.name.charAt(0)}
          </div>

          {/* Details */}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="truncate text-sm font-semibold text-slate-900">
                {testimonial.name}
              </h3>

              <FiCheckCircle className="h-3.5 w-3.5 shrink-0 text-primary-500" />
            </div>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="truncate text-[10px] font-semibold uppercase tracking-wide text-primary-600">
                {testimonial.treatment}
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />

              <span className="flex shrink-0 items-center gap-1 text-[10px] text-slate-400">
                <FiMapPin className="h-3 w-3" />
                {testimonial.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  /*
   * Split testimonials into two marquee rows.
   */
  const firstRow = testimonials.filter(
    (_, index) => index % 2 === 0
  );

  const secondRow = testimonials.filter(
    (_, index) => index % 2 !== 0
  );

  /*
   * Keep both rows populated.
   */
  const topRow =
    firstRow.length > 0 ? firstRow : testimonials;

  const bottomRow =
    secondRow.length > 0 ? secondRow : testimonials;

  return (
    <section className="relative overflow-hidden bg-[#061A2B] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          DARK BLUE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Very subtle teal glow */}

        <div className="absolute -left-64 -top-64 h-[650px] w-[650px] rounded-full bg-primary-500/[0.055] blur-[160px]" />

        {/* Very subtle right glow */}

        <div className="absolute -bottom-64 -right-64 h-[650px] w-[650px] rounded-full bg-primary-400/[0.04] blur-[160px]" />

        {/* Soft center glow */}

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.012] blur-[140px]" />
      </div>

      {/* =====================================================
          SECTION CONTENT
      ===================================================== */}

      <div className="relative z-10">
        {/* ===================================================
            SECTION TITLE
        =================================================== */}

        <div className="container-custom">
          <SectionTitle
            badge="⭐ 4.9 Google Rating"
            subtitle="Patient Testimonials"
            title='What Our <span class="text-primary-300">Patients</span> Say'
            description="Real experiences from patients who trusted Zircon Dental & Implant Studio for their smile transformation."
            light
          />
        </div>

        {/* ===================================================
            FULL-WIDTH MARQUEE
        =================================================== */}

        <div className="relative mt-12 w-full sm:mt-14">
          {/* =================================================
              LEFT EDGE FADE
          ================================================= */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-[#061A2B] to-transparent sm:w-20 lg:w-32" />

          {/* =================================================
              RIGHT EDGE FADE
          ================================================= */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-[#061A2B] to-transparent sm:w-20 lg:w-32" />

          {/* =================================================
              ROW 1
          ================================================= */}

          <Marquee
            direction="left"
            speed={38}
            pauseOnHover
            gradient={false}
            autoFill
          >
            {topRow.map((testimonial) => (
              <TestimonialCard
                key={`top-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}
          </Marquee>

          {/* =================================================
              ROW 2
          ================================================= */}

          <div className="mt-5">
            <Marquee
              direction="right"
              speed={34}
              pauseOnHover
              gradient={false}
              autoFill
            >
              {bottomRow.map((testimonial) => (
                <TestimonialCard
                  key={`bottom-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}
            </Marquee>
          </div>
        </div>

        {/* ===================================================
            TRUST SUMMARY
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <div className="border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md sm:px-7">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:gap-3">
              {/* Stars */}

              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map(
                  (_, index) => (
                    <FiStar
                      key={index}
                      className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                    />
                  )
                )}
              </span>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              <span className="text-xs font-medium text-white/65 sm:text-sm">
                Trusted by thousands of patients across Pune
              </span>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              <span className="flex items-center gap-1.5 text-xs font-semibold text-primary-300">
                <FiCheckCircle className="h-3.5 w-3.5" />
                Patient Care You Can Trust
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;