"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiZoomIn, FiX } from "react-icons/fi";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800", category: "Clinic", title: "Reception Area" },
  { id: 2, src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800", category: "Treatment", title: "Treatment Room" },
  { id: 3, src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800", category: "Equipment", title: "3D CBCT Scanner" },
  { id: 4, src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800", category: "Team", title: "Our Team" },
  { id: 5, src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800", category: "Treatment", title: "Dental Surgery" },
  { id: 6, src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800", category: "Results", title: "Smile Makeover" },
  { id: 7, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", category: "Clinic", title: "Waiting Lounge" },
  { id: 8, src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", category: "Equipment", title: "Laser Unit" },
  { id: 9, src: "https://images.unsplash.com/photo-1581585095203-c0c5c6608e72?q=80&w=800", category: "Results", title: "Before & After" },
];

const categories = ["All", "Clinic", "Treatment", "Equipment", "Team", "Results"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-dark-950">
        <div className="container-custom text-center">
          <motion.span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="w-8 h-px bg-gold-400" />Gallery<span className="w-8 h-px bg-gold-400" />
          </motion.span>
          <motion.h1 className="heading-xl text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Our <span className="text-gradient">Gallery</span>
          </motion.h1>
          <motion.p className="text-gray-400 max-w-2xl mx-auto text-lg font-light" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Take a virtual tour of our state-of-the-art facility at Wakad, Pune.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "bg-primary-600 text-white shadow-primary" : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} key={activeCategory}>
            {filtered.map((image) => (
              <motion.div key={image.id} variants={staggerItem} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500">
                  <Image src={image.src} alt={image.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                        <FiZoomIn className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm">{image.title}</p>
                      <p className="text-white/60 text-xs">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div className="fixed inset-0 z-[200] bg-dark-950/95 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20" onClick={() => setSelectedImage(null)}>
            <FiX className="w-6 h-6" />
          </button>
          <motion.img src={selectedImage.src} alt={selectedImage.title} className="max-w-full max-h-[85vh] rounded-2xl shadow-premium-lg object-contain" initial={{ scale: 0.8 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} />
        </motion.div>
      )}
    </Layout>
  );
}