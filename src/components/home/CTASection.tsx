"use client";

import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { SITE_CONFIG } from "@/utils/constants";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 to-primary-900/90" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-white/5"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ top: "10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full border border-white/5"
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ bottom: "-10%", left: "-5%" }}
        />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-flex items-center gap-2 text-primary-300 text-sm font-semibold tracking-[0.25em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-px bg-primary-400" />
            Ready to Transform Your Smile?
            <span className="w-8 h-px bg-primary-400" />
          </motion.span>

          <motion.h2
            className="heading-lg text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book Your{" "}
            <span className="text-primary-400">Free Consultation</span>{" "}
            at Wakad, Pune
          </motion.h2>

          <motion.p
            className="text-lg text-white/70 mb-10 max-w-xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Visit Zircon Dental & Implant Clinic, opposite Phoenix Mall
            Road. Expert consultation, transparent pricing, and a smile
            you&apos;ll love — guaranteed.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GradientButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FiArrowRight />}
            >
              Book Free Consultation
            </GradientButton>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-3 px-8 py-5 text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all"
            >
              <FiPhone className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                {SITE_CONFIG.phone}
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;