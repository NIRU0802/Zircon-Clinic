"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiZoomIn } from "react-icons/fi";

import SectionTitle from "@/components/ui/SectionTitle";
import { galleryImages } from "@/data/gallery";
import { staggerContainer, staggerItem } from "@/utils/animations";

const featuredGalleryImages = galleryImages.slice(0, 3).map((image, index) => ({
  ...image,
  span:
    index === 0
      ? "col-span-2 row-span-2"
      : index === 2
        ? "col-span-2"
        : "",
}));

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

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredGalleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={staggerItem}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${image.span}`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`${image.span.includes("row-span-2")
                    ? "h-full min-h-[400px]"
                    : "aspect-square"
                  } relative`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 50vw"
                  quality={95}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className={`absolute inset-0 bg-primary-900/60 flex items-center justify-center transition-opacity duration-300 ${hoveredId === image.id ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FiZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/gallery"
            className="btn-outline inline-flex items-center gap-2"
          >
            View Full Gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;