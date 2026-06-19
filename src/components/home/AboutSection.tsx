"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInLeft, fadeInRight } from "@/utils/animations";
import GradientButton from "@/components/ui/GradientButton";
import { FiArrowRight, FiAward, FiShield, FiHeart } from "react-icons/fi";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const features = [
    { icon: FiAward, title: "Award Winning", description: "Recognized for excellence in dental care" },
    { icon: FiShield, title: "FDA Approved", description: "All treatments use certified materials" },
    { icon: FiHeart, title: "Patient First", description: "Personalized care with dedicated support" },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-100/50 -skew-x-12 origin-top-right" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <motion.div className="relative rounded-2xl overflow-hidden shadow-premium-lg" style={{ y: imageY }}>
                <div className="aspect-[4/5] bg-gray-200 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000"
                    alt="Zircon Dental Clinic Wakad Pune"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-premium p-6 max-w-[240px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-heading font-bold text-white">15+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark-900">Years of</p>
                    <p className="text-sm font-bold text-primary-500">Excellence</p>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary-200 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-100 rounded-full -z-10 blur-sm" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
              <span className="w-8 h-px bg-primary-500" />
              About Zircon Dental
            </span>

            <h2 className="heading-lg text-dark-900 mb-6">
              Pune&apos;s Most Trusted <span className="text-gradient">Dental Clinic</span> in Wakad
            </h2>

            <p className="subtitle mb-6">
              At Zircon Dental & Implant Clinic, we combine cutting-edge technology with artistic precision to deliver transformative dental results that look naturally beautiful.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Located at Wakad, opposite Phoenix Mall Road, we have grown to become one of the most trusted dental centres in Pimpri-Chinchwad and greater Pune. With over 50,000 patients treated and a 98.5% implant success rate, every smile we create is a masterpiece.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <feature.icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-dark-900 mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <GradientButton href="/about" variant="primary" icon={<FiArrowRight />}>Learn More</GradientButton>
              <GradientButton href="/about#our-team" variant="outline">Meet Our Team</GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;