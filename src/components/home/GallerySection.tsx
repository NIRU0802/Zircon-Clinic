"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiZoomIn } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600", category: "Clinic", span: "col-span-2 row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=400", category: "Treatment", span: "" },
  { id: 3, src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400", category: "Results", span: "" },
  { id: 4, src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=400", category: "Equipment", span: "" },
  { id: 5, src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400", category: "Team", span: "" },
  { id: 6, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600", category: "Clinic", span: "col-span-2" },
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          badge="Virtual Tour"
          subtitle="Our Clinic"
          title='Inside <span class="text-gradient">Zircon Dental</span> — Wakad, Pune'
          description="Take a glimpse at our state-of-the-art facility, advanced equipment, and the transformative results we deliver."
        />

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {galleryImages.map((image) => (
            <motion.div key={image.id} variants={staggerItem} className={`relative group rounded-2xl overflow-hidden cursor-pointer ${image.span}`} onMouseEnter={() => setHoveredId(image.id)} onMouseLeave={() => setHoveredId(null)}>
              <div className={`${image.span.includes("row-span-2") ? "h-full min-h-[400px]" : "aspect-square"} relative`}>
                <Image src={image.src} alt={image.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-primary-900/60 flex items-center justify-center transition-opacity duration-300 ${hoveredId === image.id ? "opacity-100" : "opacity-0"}`}>
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FiZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Link href="/gallery" className="btn-outline inline-flex items-center gap-2">
            View Full Gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;