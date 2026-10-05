"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import {
  FiAward,
  FiUsers,
  FiShield,
  FiHeart,
  FiStar,
  FiZap,
} from "react-icons/fi";

const features = [
  {
    icon: FiAward,
    title: "10+ Years of Expertise",
    description:
      "Experienced dental professionals with strong expertise in implants, full mouth rehabilitation & cosmetic dentistry.",
    color: "from-primary-500 to-primary-400",
  },
  {
    icon: FiShield,
    title: "Advanced 3D Technology",
    description:
      "CBCT scanning, CAD/CAM, digital impressions & guided surgery for precise, predictable treatment planning.",
    color: "from-cta-600 to-blue-500",
  },
  {
    icon: FiHeart,
    title: "Personalized Treatment",
    description:
      "Every treatment plan is customized to your individual needs, oral health, goals, and comfort.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: FiUsers,
    title: "10,000+ Patients",
    description:
      "A growing patient community across Pune with a focus on quality treatment, safety, and long-term results.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: FiStar,
    title: "Premium Clinic Experience",
    description:
      "A modern dental environment at Wakad designed around patient comfort, hygiene, privacy, and convenience.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: FiZap,
    title: "Efficient Treatment Options",
    description:
      "Selected treatments may be completed faster with advanced planning, digital workflows, and single-visit procedures where appropriate.",
    color: "from-orange-500 to-amber-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eefaf8_0%,#f3fbfa_35%,#f8fcfc_70%,#ffffff_100%)] py-20 sm:py-24 lg:py-28">
      {/* Premium ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary-200/25 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] -translate-x-1/3 translate-y-1/3 rounded-full bg-primary-300/15 blur-[100px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[300px] translate-x-1/3 rounded-full bg-cyan-200/15 blur-[100px]" />

      {/* Very subtle top transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 to-transparent" />

      <div className="container-custom relative z-10">
        <SectionTitle
          badge="Trusted by 10,000+ Patients"
          subtitle="Why Choose Us"
          title='Why Pune Trusts <span class="text-gradient">Zircon Dental</span> for Their Smile'
          description="We are committed to delivering precise, safe, and personalized dental care at our Wakad clinic, combining modern technology with a patient-first approach."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-8 shadow-[0_10px_40px_rgba(15,118,110,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary-100 hover:bg-white hover:shadow-premium">
                {/* Card hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.035]`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-sm transition-transform duration-500 group-hover:scale-110`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-3 font-heading text-xl font-bold text-dark-900">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>

                {/* Number */}
                <span className="pointer-events-none absolute right-6 top-6 font-heading text-6xl font-bold text-primary-50 transition-colors duration-500 group-hover:text-primary-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-primary-400/50 via-primary-300/20 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;