"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { doctors } from "@/data/doctors";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiAward } from "react-icons/fi";

const doctorMeta = [
  {
    accent: "primary",
    roleLabel: "Chief Implantologist",
    stats: [
      { title: "15+", subtitle: "Years" },
      { title: "10K+", subtitle: "Patients" },
      { title: "98.5%", subtitle: "Success" },
    ],
    expertise: ["Dental Implants", "All-on-4", "Full Mouth Rehab"],
  },
  {
    accent: "gold",
    roleLabel: "Prosthodontist",
    stats: [
      { title: "12+", subtitle: "Years" },
      { title: "7K+", subtitle: "Patients" },
      { title: "97%", subtitle: "Satisfaction" },
    ],
    expertise: ["Smile Design", "Veneers", "CAD/CAM"],
  },
];

const DoctorsSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          badge="Board Certified Specialists"
          subtitle="Our Dental Experts"
          title='Meet the <span class="text-gradient">Specialists</span> Behind Your Perfect Smile'
          description="Our team of internationally trained dental specialists at Wakad, Pune brings decades of combined experience in implants, cosmetic dentistry & oral surgery."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {doctors.map((doctor, i) => {
            const meta = doctorMeta[i] || doctorMeta[0];
            const isGold = meta.accent === "gold";

            return (
              <motion.div key={doctor.id} variants={staggerItem} className="group">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 border border-gray-100 hover:-translate-y-1">
                  {/* Photo */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600"
                      alt={doctor.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
                    <div
                      className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold ${isGold ? "bg-gold-gradient text-dark-900" : "bg-primary-gradient text-white"
                        }`}
                    >
                      {doctor.experience}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-wider mb-1.5 px-2.5 py-1 rounded-full ${isGold ? "bg-gold-500/90 text-dark-900" : "bg-primary-500/90 text-white"
                          }`}
                      >
                        {meta.roleLabel}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-white mb-0.5">
                        {doctor.name}
                      </h3>
                      <p className={isGold ? "text-gold-200 text-sm font-medium" : "text-primary-300 text-sm font-medium"}>
                        {doctor.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-xs text-gray-400 mb-3">{doctor.qualification}</p>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                      {doctor.description}
                    </p>

                    {/* Mini stats row */}
                    <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-gray-100">
                      {meta.stats.map((s, idx) => (
                        <div key={idx} className="text-center">
                          <p className={`text-sm font-heading font-bold ${isGold ? "text-gold-600" : "text-primary-600"}`}>
                            {s.title}
                          </p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                            {s.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Expertise chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {meta.expertise.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;