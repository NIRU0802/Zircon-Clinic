"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { treatments } from "@/data/treatments";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import GradientButton from "@/components/ui/GradientButton";

export default function TreatmentsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000"
            alt="Treatments"
            fill
            sizes="100vw"
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 to-dark-950" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[500px] h-[500px] bg-primary-500/8 -top-32 -right-32" />
          <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 -left-32" />
        </div>

        <div className="container-custom relative text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium tracking-wider uppercase">
              Zircon Dental, Wakad, Pune
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our <span className="text-gradient">Dental</span>{" "}
            <span className="text-gold-400">Treatments</span>
          </motion.h1>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive dental care solutions â€” from routine checkups
            to advanced implant procedures. All under one roof at Wakad,
            Pune.
          </motion.p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
              <span className="w-8 h-px bg-primary-500" />
              All Treatments
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900 mb-3">
              Complete Dental Care{" "}
              <span className="text-gradient">Solutions</span> in Pune
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Choose from our wide range of dental treatments. Click on
              any treatment to learn more about the procedure, benefits,
              and pricing.
            </p>
            <div className="mt-6 flex items-center gap-2 justify-center">
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              <span className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {treatments.map((treatment) => (
              <motion.div key={treatment.id} variants={staggerItem}>
                <Link href={`/treatments/${treatment.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent h-full">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className="absolute top-4 left-4">
                        <span className="text-3xl drop-shadow-lg">
                          {treatment.icon}
                        </span>
                      </div>

                      {/* Category */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600">
                        {treatment.category}
                      </div>

                      {/* Hover CTA */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <span className="flex items-center gap-2 text-white text-sm font-semibold">
                          Learn More{" "}
                          <FiArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                        {treatment.description}
                      </p>

                      {/* Price & Duration */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-xs font-bold text-primary-500">
                          {treatment.priceRange}
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                          {treatment.duration}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="mt-3 flex items-center text-primary-500 text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        View Details
                        <FiArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Info Badges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "🩺", value: "Free", label: "Consultation" },
              { icon: "💳", value: "0% EMI", label: "Available" },
              {
                icon: "🛡️",
                value: "Warranty",
                label: "On All Treatments",
              },
              { icon: "⭐", value: "4.9★", label: "Google Rating" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <p className="text-xl font-heading font-bold text-dark-900">
                  {item.value}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[400px] h-[400px] bg-primary-500/10 top-0 right-0" />
          <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 left-0" />
        </div>
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-6 shadow-primary"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <span className="text-2xl">ðŸ¦·</span>
            </motion.div>

            <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-gold-400" />
              Not Sure Which Treatment?
              <span className="w-8 h-px bg-gold-400" />
            </span>

            <h2 className="heading-lg text-white mb-6">
              Book a{" "}
              <span className="text-gold-400">Free Consultation</span>{" "}
              Today
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-4 font-light">
              Our specialists will examine, diagnose, and recommend the
              best treatment plan for you â€” absolutely free. No
              obligation, no pressure.
            </p>

            <p className="text-gray-600 text-sm mb-10">
              âœ… Free Consultation &nbsp;â€¢&nbsp; âœ… Same Day Appointment
              &nbsp;â€¢&nbsp; âœ… 0% EMI Available
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton
                href="/contact"
                variant="gold"
                size="lg"
                icon={<FiArrowRight />}
              >
                Book Free Consultation
              </GradientButton>
              <GradientButton
                href="/pricing"
                variant="outline"
                size="lg"
              >
                View Pricing
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}