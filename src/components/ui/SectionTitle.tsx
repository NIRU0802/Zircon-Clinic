"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  badge?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  badge,
  center = true,
  light = false,
}: SectionTitleProps) => {
  return (
    <motion.div
      className={`mb-16 md:mb-20 ${center ? "text-center" : "text-left"}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 ${
            light
              ? "bg-white/5 border border-white/10"
              : "bg-primary-50 border border-primary-100"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span
            className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${
              light ? "text-gold-400" : "text-primary-600"
            }`}
          >
            {badge}
          </span>
        </motion.div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.span
          className={`inline-flex items-center gap-3 text-sm font-semibold tracking-[0.25em] uppercase mb-4 ${
            light ? "text-gold-400" : "text-primary-500"
          }`}
        >
          <span
            className={`w-8 h-px ${
              light ? "bg-gold-400" : "bg-primary-500"
            }`}
          />
          {subtitle}
          <span
            className={`w-8 h-px ${
              light ? "bg-gold-400" : "bg-primary-500"
            }`}
          />
        </motion.span>
      )}

      {/* Title */}
      <h2
        className={`heading-lg mb-4 ${
          light ? "text-white" : "text-dark-900"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Description */}
      {description && (
        <p
          className={`subtitle max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}

      {/* Decorative Line */}
      <div
        className={`mt-6 flex items-center gap-2 ${
          center ? "justify-center" : "justify-start"
        }`}
      >
        <span
          className={`w-12 h-0.5 rounded-full ${
            light ? "bg-gold-500" : "bg-primary-500"
          }`}
        />
        <span
          className={`w-3 h-3 rounded-full ${
            light ? "bg-gold-500" : "bg-primary-500"
          }`}
        />
        <span
          className={`w-12 h-0.5 rounded-full ${
            light ? "bg-gold-500" : "bg-primary-500"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default SectionTitle;