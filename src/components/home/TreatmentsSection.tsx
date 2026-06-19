"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  getCategories,
  getTreatmentsByCategory,
} from "@/data/treatments";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const TreatmentsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => getCategories(), []);

  const filteredTreatments = useMemo(() => {
    return getTreatmentsByCategory(activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom relative">

        <SectionTitle
          badge="Wakad, Pune"
          subtitle="Our Treatments"
          title='Complete <span class="text-gradient">Dental Care</span> Solutions'
          description="Comprehensive care using modern dental technology."
        />

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:text-primary-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredTreatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              variants={staggerItem}
              layout
            >
              <Link href={`/treatments/${treatment.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                  {/* IMAGE (optimized) */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all">
                      <span className="text-white flex items-center gap-2 text-sm">
                        Learn More <FiArrowRight />
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">
                      {treatment.title}
                    </h3>

                    <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                      {treatment.description}
                    </p>

                    <p className="text-xs font-bold text-primary-500 mt-2">
                      {treatment.priceRange}
                    </p>

                    <div className="mt-3 text-sm text-primary-500 opacity-0 group-hover:opacity-100 transition-all">
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/treatments"
            className="px-6 py-3 border border-primary-500 text-primary-600 rounded-full hover:bg-primary-50 transition"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;