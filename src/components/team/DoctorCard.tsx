"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Doctor = {
  name: string;
  experience: string;
  qualification: string;
  specialization: string;
  description: string;
  image: string;
};

type Props = {
  doctor: Doctor;
  variant?: "primary" | "gold";
  roleLabel: string;
  accent: "primary" | "gold";
  expertise: string[];
  highlights: { title: string; subtitle: string }[];
  memberships: string[];
  languages: string[];
  children?: React.ReactNode;
};

export default function DoctorCard({
  doctor,
  variant = "primary",
  roleLabel,
  accent,
  expertise,
  highlights,
  memberships,
  languages,
  children,
}: Props) {
  return (
    <motion.article
      className={`group overflow-hidden rounded-[32px] border bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 ${
        accent === "gold"
          ? "hover:border-gold-300"
          : "hover:border-primary-300"
      } hover:shadow-2xl`}
    >
      {/* IMAGE SECTION */}
      <div className="relative h-[460px] overflow-hidden bg-slate-100">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
          priority
          className="object-cover object-[center_20%] transition duration-700 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />

        {/* Experience */}
        <div className="absolute left-6 top-6 rounded-xl bg-white/95 px-4 py-2 shadow-xl backdrop-blur">
          <p
            className={`text-2xl font-bold ${
              accent === "gold"
                ? "text-gold-600"
                : "text-primary-600"
            }`}
          >
            {doctor.experience}
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            Experience
          </p>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span
            className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur ${
              accent === "gold"
                ? "bg-gold-500/90 text-dark-900"
                : "bg-primary-500/90"
            }`}
          >
            {roleLabel}
          </span>

          <h3 className="mt-3 font-heading text-2xl font-bold text-white">
            {doctor.name}
          </h3>

          <p
            className={`mt-1 line-clamp-1 text-base ${
              accent === "gold"
                ? "text-gold-200"
                : "text-primary-200"
            }`}
          >
            {doctor.specialization}
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="space-y-6 p-6">
        {children}
      </div>
    </motion.article>
  );
}