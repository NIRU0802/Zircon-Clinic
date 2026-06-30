"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlay, FiX } from "react-icons/fi";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000"
          alt="Clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-dark-950/70" />
      </div>

      <div className="container-custom relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            <span className="w-8 h-px bg-gold-400" />
            Virtual Tour
            <span className="w-8 h-px bg-gold-400" />
          </span>

          <h2 className="heading-lg text-white mb-6">
            Take a Tour of Our <span className="text-gold-400">Clinic</span>
          </h2>

          <p className="text-white/60 max-w-xl mx-auto mb-12 font-light">
            Experience our world-class facility from the comfort of your home.
            See why thousands of patients trust Zircon Dental.
          </p>

          {/* Play Button */}
          <motion.button
            type="button"
            onClick={() => setIsPlaying(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 group"
          >
            <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
            <span className="absolute -inset-2 rounded-full border border-white/10 animate-pulse" />

            <FiPlay className="w-10 h-10 text-white ml-1 relative z-10" />
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <motion.div
          className="fixed inset-0 z-[200] bg-dark-950/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsPlaying(false)}
        >
          <button
            type="button"
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setIsPlaying(false)}
          >
            <FiX className="w-6 h-6" />
          </button>

          <motion.div
            className="w-full max-w-4xl aspect-video bg-dark-900 rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Clinic Tour"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;