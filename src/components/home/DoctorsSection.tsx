"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { doctors } from "@/data/doctors";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";

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

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {doctors.map((doctor) => (
            <motion.div key={doctor.id} variants={staggerItem} className="group">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600"
                    alt={doctor.name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-gold-gradient rounded-full text-xs font-bold text-dark-900">{doctor.experience}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-0.5">{doctor.name}</h3>
                    <p className="text-primary-300 text-sm font-medium">{doctor.specialization}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-3">{doctor.qualification}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{doctor.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;