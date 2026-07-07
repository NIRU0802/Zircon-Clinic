"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import GradientButton from "@/components/ui/GradientButton";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { staggerContainer, staggerItem } from "@/utils/animations";

// ✅ Import Particles with ssr: false
// This means Particles.tsx will ONLY run on the browser (client)
// Never on the server - so Math.random() won't cause hydration mismatch
const Particles = dynamic(() => import("./Particles"), {
  ssr: false,
  // Optional: show nothing while particles load
  loading: () => null,
});

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ========================================
          BACKGROUND IMAGE WITH PARALLAX EFFECT
          Moves slower than scroll = parallax feel
      ======================================== */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068')",
          }}
        />
        {/* Dark overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/70 to-dark-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
      </motion.div>

      {/* ========================================
          ANIMATED BACKGROUND ELEMENTS
          Blobs + Particles
      ======================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - top right */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "10%", right: "-10%" }}
        />

        {/* Blob 2 - bottom left */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-[80px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: "10%", left: "10%" }}
        />

        {/* ✅ Particles - client only, no hydration error */}
        <Particles />
      </div>

      {/* ========================================
          MAIN HERO CONTENT
      ======================================== */}
      <motion.div
        className="relative z-10 container-custom pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* --- Top Badge --- */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/80 font-medium tracking-wider uppercase">
                #1 Rated Dental Clinic in Pune
              </span>
            </motion.div>

            {/* --- Main Heading --- */}
            <motion.h1
              variants={staggerItem}
              className="heading-xl text-white mb-6"
            >
              Discover Your
              <br />
              <span className="text-gradient-gold">True Beauty</span>
              <br />
              With Confidence
            </motion.h1>

            {/* --- Subtitle --- */}
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl font-light"
            >
              Experience world-class aesthetic treatments delivered by
              India&apos;s finest cosmetic specialists. Your journey to timeless
              beauty starts here.
            </motion.p>

            {/* --- CTA Buttons --- */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-4 mb-16"
            >
              {/* Primary Button */}
              <GradientButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<FiArrowRight />}
              >
                Book Free Consultation
              </GradientButton>

              {/* Watch Video Button */}
              <motion.button
                className="flex items-center gap-3 px-8 py-5 text-white group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300">
                  <FiPlay className="w-5 h-5 ml-0.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-white/60 uppercase tracking-wider block">
                    Watch
                  </span>
                  <span className="text-sm font-semibold">Our Story</span>
                </div>
              </motion.button>
            </motion.div>

            {/* --- Stats Bar --- */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: "10K+", label: "Happy Patients" },
                { value: "10+", label: "Years Experience" },
                { value: "1500+", label: "Treatments" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center md:text-left"
                >
                  <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================
          SCROLL INDICATOR - Bottom Center
      ======================================== */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-white/40 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold-400"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* ========================================
          SIDE DECORATIVE LINE - Right side
          Only visible on extra large screens
      ======================================== */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/20" />
        <span className="text-xs text-white/30 tracking-[0.3em] rotate-90 origin-center whitespace-nowrap">
          ZIRCON DENTAL
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;