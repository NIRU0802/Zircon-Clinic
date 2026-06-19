"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/utils/constants";

const StatsCounter = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2000')" }} />
        <div className="absolute inset-0 bg-dark-950/90" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" animate={{ x: ["100%", "-100%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
      </div>

      <div className="container-custom relative">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-gold-400" />
            Our Achievements
            <span className="w-8 h-px bg-gold-400" />
          </span>
          <h2 className="heading-lg text-white">
            Numbers That <span className="text-gold-400">Speak</span> for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
              <span className="text-4xl mb-4 block">{stat.icon}</span>
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                {inView ? <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;