"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/utils/animations";
import {
  FiAward,
  FiHeart,
  FiShield,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiTarget,
  FiEye,
} from "react-icons/fi";
import GradientButton from "@/components/ui/GradientButton";
import { SITE_CONFIG, STATS } from "@/utils/constants";
import { doctors } from "@/data/doctors";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const values = [
    {
      icon: FiHeart,
      title: "Patient First",
      description:
        "Every decision starts with what's best for our patients. Your comfort and safety are our top priorities.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FiShield,
      title: "Safety & Quality",
      description:
        "International sterilization protocols, FDA-approved materials, and evidence-based treatments only.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiAward,
      title: "Excellence",
      description:
        "Continuous training, latest technology adoption, and pursuit of perfection in every procedure.",
      color: "from-gold-500 to-amber-500",
    },
    {
      icon: FiUsers,
      title: "Transparency",
      description:
        "Honest consultations, clear pricing, no hidden costs. We explain everything before we begin.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Clinic Founded",
      description:
        "Started with a vision to provide world-class dental care in Pune.",
    },
    {
      year: "2012",
      title: "1000+ Implants",
      description:
        "Crossed 1000 successful dental implant placements milestone.",
    },
    {
      year: "2015",
      title: "Advanced Technology",
      description:
        "Introduced 3D CBCT scanning and CAD/CAM technology.",
    },
    {
      year: "2018",
      title: "New Facility",
      description:
        "Moved to our state-of-the-art facility at Wakad, opp. Phoenix Mall.",
    },
    {
      year: "2021",
      title: "All-on-4 Launch",
      description:
        "Introduced same-day full arch implant solutions.",
    },
    {
      year: "2024",
      title: "50,000+ Patients",
      description:
        "Celebrated serving over 50,000 happy patients across Pune.",
    },
  ];

  const facilities = [
    {
      title: "3D CBCT Scanner",
      desc: "Advanced 3D imaging for precise diagnosis and implant planning.",
      icon: "🔬",
    },
    {
      title: "CAD/CAM Lab",
      desc: "In-house digital crown and bridge fabrication for same-day dentistry.",
      icon: "💻",
    },
    {
      title: "Sterilization Suite",
      desc: "Class B autoclave sterilization following international protocols.",
      icon: "🧪",
    },
    {
      title: "Implant Surgery Room",
      desc: "Dedicated surgical suite with advanced equipment and monitoring.",
      icon: "🏥",
    },
    {
      title: "Laser Dentistry",
      desc: "Waterlase and diode lasers for painless, minimally invasive procedures.",
      icon: "⚡",
    },
    {
      title: "Digital X-Ray",
      desc: "Low radiation digital radiography for instant, accurate diagnosis.",
      icon: "📸",
    },
    {
      title: "Comfortable Lounges",
      desc: "Relaxing waiting areas with refreshments and entertainment.",
      icon: "🛋️",
    },
    {
      title: "Kids Play Zone",
      desc: "Child-friendly area to make dental visits fun for little ones.",
      icon: "🎈",
    },
  ];

  return (
    <Layout>
      {/* ================================
          SECTION 1: HERO BANNER
      ================================ */}
      <section className="relative pt-32 pb-20 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000"
            alt="About Us"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 to-dark-950" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[400px] h-[400px] bg-primary-500/10 -top-32 -right-32" />
          <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 -left-32" />
        </div>

        <div className="container-custom relative text-center">
          <motion.span
            className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="w-8 h-px bg-gold-400" />
            About Us
            <span className="w-8 h-px bg-gold-400" />
          </motion.span>
          <motion.h1
            className="heading-xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Where <span className="text-gradient">Smiles</span> Meet{" "}
            <span className="text-gold-400">Excellence</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Pune&apos;s most trusted dental clinic at Wakad. Transforming
            smiles and lives since 2009 with world-class care, advanced
            technology, and a team that truly cares.
          </motion.p>

          {/* Quick nav to sections */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {["Our Story", "Our Team", "Infrastructure", "Milestones"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all"
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================
          SECTION 2: OUR STORY
      ================================ */}
      <section id="our-story" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-premium-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800"
                    alt="Zircon Dental Clinic Wakad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Experience Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-premium p-5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-primary-gradient flex items-center justify-center">
                      <span className="text-xl font-heading font-bold text-white">
                        15+
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-900">
                        Years of
                      </p>
                      <p className="text-sm font-bold text-primary-500">
                        Excellence
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary-200 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gold-100 rounded-full -z-10 blur-sm" />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
                <span className="w-8 h-px bg-primary-500" />
                Our Story
              </span>
              <h2 className="heading-lg text-dark-900 mb-6">
                Pune&apos;s Most Trusted{" "}
                <span className="text-gradient">Dental Clinic</span>
              </h2>
              <p className="subtitle mb-6">
                {SITE_CONFIG.name} was founded in 2009 with a simple
                mission — to provide world-class dental care that&apos;s
                accessible, affordable, and delivered with genuine compassion.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Located at Wakad, opposite Phoenix Mall Road, our clinic
                has grown from a small practice to one of the most trusted
                dental centres in Pimpri-Chinchwad and greater Pune. With
                over 50,000 patients treated and a 98.5% implant success
                rate, we combine cutting-edge technology with artistic
                precision to create smiles that transform lives. Our team
                of specialists is trained internationally and committed to
                continuous learning.
              </p>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-primary-50 rounded-xl border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center mb-3">
                    <FiTarget className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-dark-900 mb-1 text-sm">
                    Our Mission
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    To deliver exceptional dental care using the latest
                    technology, making world-class treatment accessible to
                    everyone in Pune.
                  </p>
                </div>
                <div className="p-5 bg-gold-50 rounded-xl border border-gold-200">
                  <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center mb-3">
                    <FiEye className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-dark-900 mb-1 text-sm">
                    Our Vision
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    To be Pune&apos;s most loved and trusted dental clinic,
                    known for clinical excellence, innovation, and patient
                    happiness.
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "15+ Years Experience",
                  "50,000+ Patients",
                  "98.5% Success Rate",
                  "0% EMI Available",
                  "3D CBCT Technology",
                  "Same Day Implants",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-dark-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <GradientButton
                href="/contact"
                variant="primary"
                icon={<FiArrowRight />}
              >
                Book Free Consultation
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================
          SECTION 3: STATS COUNTER
      ================================ */}
      <section
        ref={statsRef}
        className="py-20 bg-dark-950 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000"
            alt="Stats"
            fill
            sizes="100vw"
            className="object-cover opacity-5"
          />
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          SECTION 4: OUR VALUES
      ================================ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
              <span className="w-8 h-px bg-primary-500" />
              Our Values
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================
          SECTION 5: OUR TEAM
      ================================ */}
      <section id="our-team" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
              <span className="w-8 h-px bg-primary-500" />
              Our Team
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900">
              Meet Our <span className="text-gradient">Specialists</span>
            </h2>
            <p className="subtitle max-w-2xl mx-auto mt-4">
              Expert dentists dedicated to your perfect smile. Trained
              internationally with decades of combined experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                variants={staggerItem}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent">
                  {/* Doctor Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600"
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />

                    {/* Experience badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-gold-gradient rounded-full text-xs font-bold text-dark-900">
                      {doctor.experience}
                    </div>

                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-heading font-bold text-white mb-0.5">
                        {doctor.name}
                      </h3>
                      <p className="text-primary-300 text-sm font-medium">
                        {doctor.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <p className="text-xs text-gray-400 mb-3">
                      {doctor.qualification}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {doctor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================
          SECTION 6: INFRASTRUCTURE
      ================================ */}
      <section id="infrastructure" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
              <span className="w-8 h-px bg-primary-500" />
              Our Facility
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900">
              World-Class{" "}
              <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="subtitle max-w-2xl mx-auto mt-4">
              State-of-the-art dental facility at Wakad, Pune designed for
              precision, comfort, and exceptional outcomes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((item, i) => (
              <motion.div key={i} variants={staggerItem}>
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-premium transition-all duration-500 hover:-translate-y-2 text-center h-full border border-gray-100 hover:border-transparent group">
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="text-base font-heading font-bold text-dark-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Clinic Photo Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400",
              "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=400",
              "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400",
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Clinic Photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================
          SECTION 7: MILESTONES TIMELINE
      ================================ */}
      <section id="milestones" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
              <span className="w-8 h-px bg-primary-500" />
              Our Journey
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900">
              Key <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary-gradient flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0 shadow-primary">
                    {item.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-full bg-primary-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-heading font-bold text-dark-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          SECTION 8: CTA
      ================================ */}
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
            <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-gold-400" />
              Visit Us
              <span className="w-8 h-px bg-gold-400" />
            </span>
            <h2 className="heading-lg text-white mb-6">
              Experience the{" "}
              <span className="text-gold-400">Zircon Dental</span>{" "}
              Difference
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 font-light">
              Visit our state-of-the-art clinic at Wakad, Pune. Book your
              free consultation and discover why 50,000+ patients trust us
              with their smiles.
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
              <GradientButton href="/treatments" variant="outline" size="lg">
                View Treatments
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}