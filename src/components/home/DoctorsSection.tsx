"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { doctors } from "@/data/doctors";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const doctorMeta = [
  {
    accent: "primary",
    roleLabel: "Head Dentist",
    stats: [
      { title: "10+", subtitle: "Years" },
      { title: "12K+", subtitle: "Patients" },
      { title: "3-Day", subtitle: "Smile Rehab" },
    ],
    expertise: [
      "Full Mouth Rehab",
      "Dental Implants",
      "Single-Visit RCT",
    ],
  },
  {
    accent: "gold",
    roleLabel: "Chief Implantologist",
    stats: [
      { title: "5+", subtitle: "Years" },
      { title: "10K+", subtitle: "Patients" },
      { title: "98%", subtitle: "Success" },
    ],
    expertise: [
      "Dental Implants",
      "All-on-4",
      "Zygomatic Implants",
    ],
  },
];

const DoctorsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-18 lg:pb-28">
      {/* Very subtle section transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary-50/40 to-transparent" />

      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-primary-50/40 blur-[120px]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          badge="Our Dental Experts"
          subtitle="Meet Our Specialists"
          title='Meet the <span class="text-gradient">Dental Experts</span> Behind Your Smile'
          description="Our dental professionals at Wakad, Pune combine clinical expertise, modern technology, and a patient-focused approach across implant dentistry, oral surgery, cosmetic dentistry, and full mouth rehabilitation."
        />

        <motion.div
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
        >
          {doctors.map((doctor, i) => {
            const meta = doctorMeta[i] || doctorMeta[0];
            const isGold = meta.accent === "gold";

            return (
              <motion.div
                key={doctor.id}
                variants={staggerItem}
                className="group"
              >
                <Link
                  href="/about#our-team"
                  aria-label={`View ${doctor.name} on our team page`}
                  className="block h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-premium">
                    {/* Photo */}
                    <div className="relative h-80 overflow-hidden bg-gray-100">
                      <Image
                        src={doctor.image}
                        alt={`${doctor.name} - ${doctor.specialization}`}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />

                      <div
                        className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold ${
                          isGold
                            ? "bg-gold-gradient text-dark-900"
                            : "bg-primary-gradient text-white"
                        }`}
                      >
                        {doctor.experience}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span
                          className={`mb-1.5 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            isGold
                              ? "bg-gold-500/90 text-dark-900"
                              : "bg-primary-500/90 text-white"
                          }`}
                        >
                          {meta.roleLabel}
                        </span>

                        <h3 className="mb-0.5 font-heading text-xl font-bold text-white">
                          {doctor.name}
                        </h3>

                        <p
                          className={
                            isGold
                              ? "text-sm font-medium text-gold-200"
                              : "text-sm font-medium text-primary-300"
                          }
                        >
                          {doctor.specialization}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <p className="mb-3 text-xs text-gray-400">
                        {doctor.qualification}
                      </p>

                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
                        {doctor.description}
                      </p>

                      {/* Stats */}
                      <div className="mb-5 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4">
                        {meta.stats.map((s, idx) => (
                          <div
                            key={idx}
                            className="text-center"
                          >
                            <p
                              className={`font-heading text-sm font-bold ${
                                isGold
                                  ? "text-gold-600"
                                  : "text-primary-600"
                              }`}
                            >
                              {s.title}
                            </p>

                            <p className="text-[10px] uppercase tracking-wide text-gray-400">
                              {s.subtitle}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Expertise */}
                      <div className="mb-5">
                        <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                          Areas of Expertise
                        </p>

                        <div className="flex min-h-[88px] flex-wrap content-start gap-2">
                          {meta.expertise.map((item, idx) => (
                            <span
                              key={idx}
                              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
                                isGold
                                  ? "border-gold-200 bg-gold-50 text-gold-700 hover:border-gold-400"
                                  : "border-primary-100 bg-primary-50 text-primary-700 hover:border-primary-300"
                              }`}
                            >
                              <span
                                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                                  isGold
                                    ? "bg-gold-500"
                                    : "bg-primary-500"
                                }`}
                              >
                                <FiCheck className="h-2.5 w-2.5 text-white" />
                              </span>

                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <span
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${
                          isGold
                            ? "text-gold-600"
                            : "text-primary-600"
                        }`}
                      >
                        View Full Profile
                        <FiArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;