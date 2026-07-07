"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import BrandComparisonTable from "@/components/treatment/BrandComparisonTable";
import { brandPriceList } from "@/data/treatments";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiCheck,
  FiArrowRight,
  FiStar,
  FiPhone,
  FiPlus,
  FiMinus,
  FiHeart,
  FiZap,
  FiClock,
  FiCalendar,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import GradientButton from "@/components/ui/GradientButton";
import { SITE_CONFIG } from "@/utils/constants";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/utils/animations";

// ===== IMPLANT PRICING =====
const implantPlans = [
  {
    id: 1,
    name: "Immediate Load Implant",
    icon: "⚡",
    price: "35,000",
    originalPrice: "48,000",
    unit: "per implant",
    popular: false,
    badge: "Fastest Option",
    features: [
      "Titanium Implant Post",
      "Same-Day Temporary Crown",
      "3D CBCT Scan & Planning",
      "No Bone Grafting Wait",
      "Local Anesthesia",
      "Final Crown in 3-6 Months",
      "1 Year Warranty",
    ],
    color: "from-gold-500 to-amber-500",
  },
  {
    id: 2,
    name: "Single Tooth Implant",
    icon: "🦷",
    price: "25,000",
    originalPrice: "35,000",
    unit: "per implant",
    popular: false,
    features: [
      "Titanium Implant Post",
      "Healing Abutment",
      "Porcelain Crown",
      "Digital X-Ray & Planning",
      "Local Anesthesia",
      "2 Follow-up Visits",
      "1 Year Warranty",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "All-on-4 Implants",
    icon: "👑",
    price: "4,50,000",
    originalPrice: "6,00,000",
    unit: "per arch",
    popular: true,
    features: [
      "4 Titanium Implant Posts",
      "Full Arch Prosthesis",
      "3D CBCT Scan & Planning",
      "Surgical Guide (Digital)",
      "Temporary Teeth Same Day",
      "Final Zirconia Bridge",
      "5 Follow-up Visits",
      "3 Year Warranty",
      "Free Annual Checkup",
    ],
    color: "from-primary-500 to-pink-500",
  },
  {
    id: 4,
    name: "Full Mouth Implants",
    icon: "💎",
    price: "8,00,000",
    originalPrice: "10,00,000",
    unit: "both arches",
    popular: false,
    features: [
      "Both Upper & Lower Arches",
      "8-12 Titanium Implants",
      "3D CBCT Scan & Planning",
      "Surgical Guides (Digital)",
      "Temporary Teeth Same Day",
      "Final Zirconia Bridges",
      "8 Follow-up Visits",
      "5 Year Warranty",
      "Free Annual Checkups",
      "VIP Aftercare Package",
    ],
    color: "from-dark-700 to-dark-900",
  },
];

// ===== ALL TREATMENT PRICES =====
const treatmentCategories = [
  {
    category: "Dental Implants",
    icon: "🦷",
    items: [
      { treatment: "Immediate Load Implant", price: "35,000 - 55,000" },
      { treatment: "Single Tooth Implant", price: "25,000 - 50,000" },
      { treatment: "All-on-4 (per arch)", price: "4,50,000 - 6,00,000" },
      { treatment: "All-on-6 (per arch)", price: "5,50,000 - 7,00,000" },
      { treatment: "Zygomatic Implants", price: "6,00,000+" },
      { treatment: "Mini Implants", price: "15,000 - 25,000" },
      { treatment: "Implant-Retained Denture", price: "2,00,000 - 3,00,000" },
      { treatment: "Bone Grafting", price: "15,000 - 30,000" },
      { treatment: "Sinus Lift", price: "25,000 - 45,000" },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    icon: "✨",
    items: [
      { treatment: "Porcelain Veneers", price: "15,000 - 25,000 / tooth" },
      { treatment: "Composite Veneers", price: "5,000 - 8,000 / tooth" },
      { treatment: "Smile Design (8 teeth)", price: "1,20,000 - 2,00,000" },
      { treatment: "In-Office Teeth Whitening", price: "12,000 - 20,000" },
      { treatment: "Take-Home Whitening Kit", price: "8,000 - 12,000" },
      { treatment: "Dental Bonding", price: "3,000 - 8,000 / tooth" },
      { treatment: "Gum Contouring", price: "5,000 - 15,000" },
    ],
  },
  {
    category: "Crowns & Bridges",
    icon: "👑",
    items: [
      { treatment: "Zirconia Crown", price: "10,000 - 18,000" },
      { treatment: "E-max Crown", price: "15,000 - 22,000" },
      { treatment: "PFM Crown (Metal-Ceramic)", price: "5,000 - 8,000" },
      { treatment: "Full Ceramic Crown", price: "12,000 - 20,000" },
      { treatment: "3-Unit Bridge", price: "15,000 - 60,000" },
      { treatment: "Maryland Bridge", price: "12,000 - 20,000" },
    ],
  },
  {
    category: "Root Canal & General",
    icon: "🔬",
    items: [
      { treatment: "Single Visit Root Canal", price: "5,000 - 10,000" },
      { treatment: "Multi-Visit Root Canal", price: "8,000 - 15,000" },
      { treatment: "Re-Treatment RCT", price: "10,000 - 18,000" },
      { treatment: "Post & Core", price: "3,000 - 5,000" },
      { treatment: "Tooth Filling (Composite)", price: "1,500 - 4,000" },
      { treatment: "Dental Cleaning & Scaling", price: "1,500 - 3,000" },
      { treatment: "Fluoride Treatment", price: "1,000 - 2,000" },
    ],
  },
  {
    category: "Orthodontics",
    icon: "😬",
    items: [
      { treatment: "Metal Braces", price: "30,000 - 50,000" },
      { treatment: "Ceramic Braces", price: "45,000 - 70,000" },
      { treatment: "Self-Ligating Braces", price: "50,000 - 80,000" },
      { treatment: "Clear Aligners", price: "80,000 - 2,00,000" },
      { treatment: "Lingual Braces", price: "1,50,000 - 2,50,000" },
      { treatment: "Retainers", price: "5,000 - 15,000" },
    ],
  },
  {
    category: "Oral Surgery",
    icon: "🏥",
    items: [
      { treatment: "Simple Extraction", price: "1,000 - 2,500" },
      { treatment: "Surgical Extraction", price: "3,000 - 5,000" },
      { treatment: "Wisdom Tooth Removal", price: "5,000 - 10,000" },
      { treatment: "Impacted Tooth Surgery", price: "8,000 - 15,000" },
      { treatment: "Cyst Removal", price: "10,000 - 25,000" },
      { treatment: "Jaw Surgery", price: "50,000 - 2,00,000" },
      { treatment: "PRF Treatment (Add-on)", price: "5,000" },
    ],
  },
];

// ===== GLOBAL COMPARISON =====
const globalComparison = [
  {
    country: "USA",
    flag: "🇺🇸",
    implant: "$3,000 – $5,000",
    crown: "$800 – $1,500",
    rct: "$500 – $1,000",
  },
  {
    country: "UK",
    flag: "🇬🇧",
    implant: "$2,000 – $4,500",
    crown: "$600 – $1,200",
    rct: "$400 – $800",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    implant: "$2,000 – $4,000",
    crown: "$700 – $1,300",
    rct: "$500 – $900",
  },
  {
    country: "India (Avg)",
    flag: "🇮🇳",
    implant: "$450 – $700",
    crown: "$100 – $250",
    rct: "$60 – $120",
  },
];

// ===== IMMEDIATE IMPLANT TIMELINE =====
const immediateTimeline = [
  {
    step: "Day 1",
    title: "Extraction & Implant Placement",
    description: "Tooth removed and implant placed in the same sitting — no separate surgery visit.",
  },
  {
    step: "Day 1",
    title: "Temporary Crown Fitted",
    description: "Walk out the same day with a natural-looking temporary tooth. No visible gap.",
  },
  {
    step: "3-6 Months",
    title: "Healing & Osseointegration",
    description: "Implant fuses with the jawbone while you live normally with your temporary crown.",
  },
  {
    step: "Final Visit",
    title: "Permanent Crown Placed",
    description: "Custom-shaded final crown fitted for a seamless, permanent result.",
  },
];

const traditionalVsImmediate = [
  { label: "Waiting time before a tooth is placed", traditional: "3-6 months", immediate: "Same day" },
  { label: "Number of surgical visits", traditional: "2 separate surgeries", immediate: "1 combined visit" },
  { label: "Time without a visible tooth", traditional: "Weeks to months", immediate: "None" },
  { label: "Total treatment visits", traditional: "6-8 visits", immediate: "4-5 visits" },
];

// ===== FAQ =====
const pricingFaqs = [
  {
    question: "Are there any hidden charges?",
    answer:
      "Absolutely not. Our prices include consultation, procedure, materials, and follow-up visits. The price quoted is the price you pay. No surprises.",
  },
  {
    question: "Do you offer EMI / installment options?",
    answer:
      "Yes! We offer 0% EMI options on treatments above ₹20,000 through multiple banking partners. EMI tenure from 3 to 24 months. No-cost EMI available on select plans.",
  },
  {
    question: "Is consultation free?",
    answer:
      "Yes, your first consultation is completely free. This includes examination, X-ray (if basic), treatment planning, and a detailed cost estimate.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), bank transfers, and cheques. EMI through HDFC, ICICI, SBI, Bajaj Finserv, and more.",
  },
  {
    question: "Does insurance cover dental implants?",
    answer:
      "Many dental insurance plans cover a portion of implant costs. We can provide detailed invoices and documentation for your insurance claim. Check with your provider for specifics.",
  },
  {
    question: "Who is a good candidate for an Immediate Load Implant?",
    answer:
      "Patients with sufficient healthy jawbone and no active gum infection at the extraction site are usually good candidates. A quick 3D scan during your free consultation confirms eligibility.",
  },
  {
    question: "Why are your prices lower than other cities?",
    answer:
      "Pune offers excellent dental care at competitive prices compared to Mumbai or Delhi. We maintain affordability by optimizing operations while never compromising on quality of materials or care.",
  },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <Layout>
      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section className="relative pt-32 pb-24 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000"
            alt="Pricing"
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
          {/* Top Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium tracking-wider uppercase">
              Updated for 2026 • No Hidden Costs
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Dental Treatment{" "}
            <span className="text-gradient">Cost</span> in{" "}
            <span className="text-gold-400">Pune</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-heading font-light mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Transparent Pricing at Zircon Dental & Implant Clinic, Wakad
          </motion.p>

          <motion.p
            className="text-gray-500 max-w-2xl mx-auto text-base font-light mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Quality dental care at honest prices. Free consultation included. 0% EMI available. All prices include procedure, materials & follow-up visits.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              {
                icon: "🩺",
                value: "Free",
                label: "Consultation",
                border: "border-green-500/20",
                bg: "bg-green-500/5",
                text: "text-green-400",
              },
              {
                icon: "🛡️",
                value: "Zero",
                label: "Hidden Costs",
                border: "border-blue-500/20",
                bg: "bg-blue-500/5",
                text: "text-blue-400",
              },
              {
                icon: "💳",
                value: "0%",
                label: "EMI Available",
                border: "border-gold-500/20",
                bg: "bg-gold-500/5",
                text: "text-gold-400",
              },
              {
                icon: "🏆",
                value: "Price",
                label: "Match Promise",
                border: "border-primary-500/20",
                bg: "bg-primary-500/5",
                text: "text-primary-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`relative p-5 rounded-2xl ${item.bg} border ${item.border} backdrop-blur-sm text-center group hover:scale-105 transition-transform duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <p className={`text-2xl font-heading font-bold ${item.text} mb-0.5`}>
                  {item.value}
                </p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick CTAs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GradientButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FiArrowRight />}
            >
              Get Free Quote
            </GradientButton>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 px-8 py-5 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-semibold rounded-full"
            >
              <FiPhone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================
IMMEDIATE IMPLANT SPOTLIGHT
======================================== */}
      <section className="section-padding bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[450px] h-[450px] bg-gold-500/10 -top-40 right-0" />
          <div className="blur-blob w-[350px] h-[350px] bg-primary-500/10 bottom-0 -left-32" />
        </div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Story */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <FiZap className="w-3.5 h-3.5" />
                New at Zircon Dental
              </span>

              <h2 className="heading-lg text-white mb-4">
                Immediate Load{" "}
                <span className="text-gradient">Implants</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 font-light max-w-xl">
                Lost a tooth? Don&apos;t wait months for a new one. With Immediate Load Implants, we place the implant and fit a temporary crown in a single visit — so you leave with a full smile the same day.
              </p>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                  <FiClock className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                  <p className="text-white font-heading font-bold text-lg">1 Visit</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Surgery + Crown</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                  <FiCalendar className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                  <p className="text-white font-heading font-bold text-lg">Same Day</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Walk Out Smiling</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                  <FiHeart className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                  <p className="text-white font-heading font-bold text-lg">1 Year</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Warranty</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <GradientButton href="/contact" variant="gold" icon={<FiArrowRight />}>
                  Check If I&apos;m a Candidate
                </GradientButton>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-500 text-sm">Starting from</span>
                  <span className="text-2xl font-heading font-bold text-white">₹35,000</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Traditional vs Immediate comparison */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                  <FiZap className="w-4 h-4 text-gold-400" />
                  Traditional vs. Immediate Implant
                </h3>

                <div className="space-y-4">
                  {traditionalVsImmediate.map((row, i) => (
                    <div key={i} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <p className="text-xs text-gray-500 mb-2">{row.label}</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="px-3 py-2 bg-white/5 rounded-lg">
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Traditional</p>
                          <p className="text-sm text-gray-300 font-medium">{row.traditional}</p>
                        </div>
                        <div className="px-3 py-2 bg-gold-500/10 border border-gold-500/20 rounded-lg">
                          <p className="text-[10px] text-gold-400 uppercase tracking-wider mb-0.5">Immediate</p>
                          <p className="text-sm text-white font-semibold">{row.immediate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            className="mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-center text-sm text-gray-500 uppercase tracking-[0.2em] mb-8">
              Your Immediate Implant Journey
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {immediateTimeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="relative p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span className="inline-block px-2.5 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                    {item.step}
                  </span>

                  <h4 className="text-white font-semibold text-sm mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>

                  {i < immediateTimeline.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          IMPLANT PRICING CARDS
      ======================================== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[500px] h-[500px] bg-primary-500/5 -top-32 -left-32" />
        </div>

        <div className="container-custom relative">
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
              Implant Pricing
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900 mb-3">
              Dental Implant Cost in{" "}
              <span className="text-gradient">Pune</span>{" "}
              <span className="text-gold-600">(2026)</span>
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Transparent pricing with no hidden costs. All prices include consultation, procedure, and follow-up visits.
            </p>

            {/* Price highlight bar */}
            <div className="inline-flex flex-wrap justify-center items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Immediate implant from</p>
                  <p className="text-lg font-heading font-bold text-primary-600">
                    ₹35,000
                  </p>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex items-center gap-2">
                <span className="text-lg">👑</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">All-on-4 from</p>
                  <p className="text-lg font-heading font-bold text-primary-600">
                    ₹4,50,000
                  </p>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex items-center gap-2">
                <span className="text-lg">💳</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">EMI from</p>
                  <p className="text-lg font-heading font-bold text-green-600">
                    ₹2,083/mo
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="mt-6 flex items-center gap-2 justify-center">
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              <span className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {implantPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className="relative group"
              >
                {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-8 py-1.5 bg-primary-gradient rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-primary">
                    <FiStar className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Custom Badge (e.g. Fastest Option) */}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-8 py-1.5 bg-gold-gradient rounded-full text-dark-900 text-xs font-bold tracking-wider uppercase shadow-lg">
                    <FiZap className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

                <div
                  className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${plan.popular
                    ? "border-primary-300 bg-white shadow-premium"
                    : plan.badge
                      ? "border-gold-300 bg-white shadow-premium"
                      : "border-gray-100 bg-white hover:border-primary-200 hover:shadow-premium"
                    }`}
                >
                  <div className="text-center mb-8">
                    <span className="text-4xl mb-3 block">{plan.icon}</span>
                    <h3 className="text-xl font-heading font-bold text-dark-900 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      {plan.unit}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-sm text-gray-400 line-through">
                        ₹{plan.originalPrice}
                      </span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        Save{" "}
                        {Math.round(
                          ((parseInt(plan.originalPrice.replace(/,/g, "")) -
                            parseInt(plan.price.replace(/,/g, ""))) /
                            parseInt(plan.originalPrice.replace(/,/g, ""))) *
                          100
                        )}%
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-lg text-gray-500">₹</span>
                      <span className="text-5xl font-heading font-bold text-dark-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      EMI from ₹
                      {Math.round(
                        parseInt(plan.price.replace(/,/g, "")) / 12
                      ).toLocaleString()}
                      /month
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <FiCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <GradientButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full text-center justify-center"
                    icon={<FiArrowRight />}
                  >
                    Book Consultation
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* EMI Note */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-full border border-green-200">
              <span className="text-lg">💳</span>
              <p className="text-sm text-green-800">
                <strong>EMI Plans Available</strong> — Starting from ₹2,083/month with{" "}
                <strong>0% interest</strong> on select plans
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          ALL TREATMENT PRICES
      ======================================== */}
      <section className="section-padding bg-gray-50">
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
              Complete Price List
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900 mb-3">
              All Dental Treatment{" "}
              <span className="text-gradient">Prices</span> in Wakad, Pune
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Comprehensive and transparent pricing for every dental treatment at Zircon Dental. Updated for 2026.
            </p>

            {/* Decorative dots */}
            <div className="mt-6 flex items-center gap-2 justify-center">
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              <span className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {treatmentCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === i
                  ? "bg-primary-600 text-white shadow-primary"
                  : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm"
                  }`}
              >
                <span>{cat.icon}</span>
                {cat.category}
              </button>
            ))}
          </motion.div>

          {/* Price Table */}
          <motion.div
            className="max-w-3xl mx-auto"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="grid grid-cols-2 gap-4 px-6 py-4 bg-dark-950 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {treatmentCategories[activeCategory].icon}
                  </span>
                  <span className="text-sm font-semibold tracking-wider uppercase">
                    {treatmentCategories[activeCategory].category}
                  </span>
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase text-right">
                  Price (₹)
                </span>
              </div>

              {treatmentCategories[activeCategory].items.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 gap-4 px-6 py-4 items-center transition-colors hover:bg-primary-50 ${i !== treatmentCategories[activeCategory].items.length - 1
                    ? "border-b border-gray-100"
                    : ""
                    }`}
                >
                  <span className="text-sm font-medium text-dark-900">
                    {item.treatment}
                  </span>
                  <span className="text-sm font-bold text-primary-600 text-right">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gold-50 rounded-xl border border-gold-200">
              <p className="text-xs text-gray-600 text-center">
                💡 <strong>Note:</strong> Prices may vary based on case complexity. Final pricing after consultation.{" "}
                <strong>0% EMI available</strong> on treatments above ₹20,000.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
    BRAND COMPARISON TABLE
======================================== */}
      <BrandComparisonTable
        items={brandPriceList}
      />

      {/* ========================================
          GLOBAL PRICE COMPARISON
      ======================================== */}
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
              Why Choose Pune
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900 mb-3">
              Save Up to <span className="text-gradient">85%</span> on Dental Treatments
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              World-class dental care at a fraction of Western prices. See how Pune compares globally.
            </p>

            {/* Decorative dots */}
            <div className="mt-6 flex items-center gap-2 justify-center">
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              <span className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Comparison Table */}
            <motion.div
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-4 gap-2 sm:gap-4 px-4 sm:px-6 py-4 bg-dark-950">
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white">
                  Country
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white text-center">
                  Implant
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white text-center">
                  Crown
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white text-center">
                  Root Canal
                </span>
              </div>

              {globalComparison.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 gap-2 sm:gap-4 px-4 sm:px-6 py-5 items-center bg-white hover:bg-gray-50 transition-colors ${i !== globalComparison.length - 1
                    ? "border-b border-gray-100"
                    : ""
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-2xl">{item.flag}</span>
                    <span className="text-xs sm:text-sm font-semibold text-dark-900">
                      {item.country}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-sm text-gray-600 text-center font-medium">
                    {item.implant}
                  </span>
                  <span className="text-[10px] sm:text-sm text-gray-600 text-center font-medium">
                    {item.crown}
                  </span>
                  <span className="text-[10px] sm:text-sm text-gray-600 text-center font-medium">
                    {item.rct}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Zircon Dental Banner */}
            <motion.div
              className="mt-10 rounded-2xl shadow-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Clinic Name Bar */}
              <div className="bg-dark-950 rounded-t-2xl py-4 px-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">🦷</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                      Zircon Dental & Implant Clinic
                    </h3>
                    <p className="text-gold-400 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                      Wakad, Pune — Prices for 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Cards */}
              <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-pink-500 rounded-b-2xl p-6 sm:p-10">
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  {[
                    { label: "Implant", usd: "$300 – $800", inr: "₹25,000 – ₹66,000", icon: "🦷" },
                    { label: "Crown", usd: "$60 – $240", inr: "₹5,000 – ₹20,000", icon: "👑" },
                    { label: "Root Canal", usd: "$60 – $180", inr: "₹5,000 – ₹15,000", icon: "🔬" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-center p-3 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <span className="text-2xl sm:text-3xl block mb-2">
                        {item.icon}
                      </span>
                      <p className="text-lg sm:text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                        {item.usd}
                      </p>
                      <p className="text-white text-xs sm:text-sm font-semibold mb-1">
                        {item.label}
                      </p>
                      <p className="text-white/50 text-[10px] sm:text-xs">
                        {item.inr}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-white/10 my-6" />

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-3">
                    <span className="text-xl">💰</span>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Save up to{" "}
                      <span className="text-gold-300 text-lg sm:text-2xl">85%</span>{" "}
                      compared to Western countries
                    </p>
                  </div>
                  <p className="text-white/40 text-[10px] sm:text-xs">
                    (1 USD ≈ 83 INR) • Prices are indicative • Free consultation to get accurate estimate
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <GradientButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<FiArrowRight />}
              >
                Get Free Quote
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          EMI & PAYMENT OPTIONS
      ======================================== */}
      <section className="py-24 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[400px] h-[400px] bg-primary-500/5 top-0 right-0" />
          <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 left-0" />
        </div>
        <div className="container-custom relative">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4">
              <span className="w-8 h-px bg-gold-400" />
              Flexible Payments
              <span className="w-8 h-px bg-gold-400" />
            </span>
            <h2 className="heading-lg text-white mb-3">
              0% EMI <span className="text-gold-400">Available</span> on All Treatments
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Don&apos;t let cost be a barrier to your perfect smile. Pay in easy monthly installments with 0% interest through India&apos;s leading banks.
            </p>

            <div className="mt-6 flex items-center gap-2 justify-center">
              <span className="w-12 h-0.5 rounded-full bg-gold-500" />
              <span className="w-3 h-3 rounded-full bg-gold-500" />
              <span className="w-12 h-0.5 rounded-full bg-gold-500" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Starting EMI", value: "₹2,500/mo", icon: "💰" },
                  { label: "Tenure", value: "3-24 months", icon: "📅" },
                  { label: "Interest", value: "0% on select", icon: "✅" },
                  { label: "Processing", value: "Minimal", icon: "⚡" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <p className="text-xl font-heading font-bold text-white">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Banking Partners
              </h4>
              <div className="flex flex-wrap gap-3">
                {["HDFC Bank", "ICICI Bank", "SBI", "Bajaj Finserv", "Axis Bank", "Kotak"].map(
                  (bank) => (
                    <span
                      key={bank}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-medium"
                    >
                      {bank}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Right - EMI Calculator */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  💡 EMI Calculator
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Example monthly payments (12-month tenure)
                </p>

                <div className="space-y-3">
                  {[
                    { treatment: "Immediate Implant (₹35K)", emi: "₹2,917" },
                    { treatment: "Single Implant (₹25K)", emi: "₹2,083" },
                    { treatment: "Zirconia Crown (₹15K)", emi: "₹1,250" },
                    { treatment: "Clear Aligners (₹1L)", emi: "₹8,333" },
                    { treatment: "All-on-4 (₹4.5L)", emi: "₹37,500" },
                    { treatment: "Smile Design (₹1.5L)", emi: "₹12,500" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <span className="text-sm text-gray-300">{item.treatment}</span>
                      <span className="text-sm font-bold text-gold-400">
                        {item.emi}/mo
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-gray-600 mt-4">
                  *Based on 12-month tenure. 0% interest on select plans. Actual EMI may vary based on bank and tenure.
                </p>

                <div className="mt-6">
                  <GradientButton
                    href="/contact"
                    variant="gold"
                    className="w-full justify-center"
                    icon={<FiArrowRight />}
                  >
                    Get Custom EMI Plan
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          PRICING FAQ
      ======================================== */}
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
              Pricing FAQ
              <span className="w-8 h-px bg-primary-500" />
            </span>
            <h2 className="heading-lg text-dark-900 mb-3">
              Common Questions About{" "}
              <span className="text-gradient">Pricing & Payments</span>
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Everything you need to know about costs, EMI options, insurance, and payment methods at Zircon Dental.
            </p>

            <div className="mt-6 flex items-center gap-2 justify-center">
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              <span className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="w-12 h-0.5 rounded-full bg-primary-500" />
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {pricingFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className={`w-full text-left p-5 rounded-2xl transition-all ${activeFaq === i
                    ? "bg-primary-50 border border-primary-100"
                    : "bg-gray-50 hover:bg-gray-100 border border-transparent"
                    }`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4
                      className={`font-semibold text-sm ${activeFaq === i ? "text-primary-600" : "text-dark-900"
                        }`}
                    >
                      {faq.question}
                    </h4>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${activeFaq === i
                        ? "bg-primary-500 text-white"
                        : "bg-gray-200 text-gray-500"
                        }`}
                    >
                      {activeFaq === i ? (
                        <FiMinus className="w-4 h-4" />
                      ) : (
                        <FiPlus className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-gray-600 text-sm leading-relaxed mt-4 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}
      <section className="py-24 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[400px] h-[400px] bg-primary-500/10 top-0 right-0" />
          <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 left-0" />
        </div>

        <div className="container-custom relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <motion.div
              className="w-20 h-20 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-8 shadow-primary"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <FiHeart className="w-8 h-8 text-white" />
            </motion.div>

            <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-gold-400" />
              Free Consultation
              <span className="w-8 h-px bg-gold-400" />
            </span>

            <h2 className="heading-lg text-white mb-4">
              Get Your <span className="text-gold-400">Personalized</span> Treatment Plan & Quote
            </h2>

            <p className="text-gray-400 mb-4 font-light text-lg max-w-xl mx-auto">
              Every smile is unique. Book a free consultation to get an accurate, personalized cost estimate — no obligation, no pressure.
            </p>

            <p className="text-gray-600 text-sm mb-10">
              ✅ Free Consultation &nbsp;•&nbsp; ✅ No Obligation &nbsp;•&nbsp; ✅ Same Day Appointment Available
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <GradientButton
                href="/contact"
                variant="gold"
                size="lg"
                icon={<FiArrowRight />}
              >
                Book Free Consultation
              </GradientButton>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-8 py-5 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm font-semibold"
              >
                <FiPhone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-5 text-white bg-green-600 hover:bg-green-700 rounded-full transition-all text-sm font-semibold"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Address Card */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl inline-block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0">
                  <span>🦷</span>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">
                    Zircon Dental & Implant Clinic
                  </p>
                  <p className="text-gray-500 text-xs">
                    Shop No. 72, Western Avenue, Opp. Phoenix Mall Road, Wakad, Pune - 411057
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}