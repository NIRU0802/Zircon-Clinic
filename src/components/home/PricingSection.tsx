"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiCheck, FiArrowRight, FiStar, FiZap } from "react-icons/fi";
import GradientButton from "@/components/ui/GradientButton";

const pricingPlans = [
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
      "Final Crown in 2 Days",
      "Min 5 Year Warranty",
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
    badge: null,
    features: [
      "Titanium Implant Post",
      "Healing Abutment",
      "Porcelain Crown",
      "Digital X-Ray & Planning",
      "Local Anesthesia",
      "2 Follow-up Visits",
      "Min 5 Year Warranty",
    ],
    color: "from-primary-500 to-primary-400",
  },
  {
    id: 3,
    name: "All-on-4 Implants",
    icon: "⚡",
    price: "4,00,000",
    originalPrice: "6,00,000",
    unit: "per arch",
    popular: true,
    badge: null,
    features: [
      "4 Titanium Implant Posts",
      "Full Arch Prosthesis",
      "3D CBCT Scan & Planning",
      "Surgical Guide (Digital)",
      "Temporary Teeth Same Day",
      "Final Zirconia Bridge",
      "5 Follow-up Visits",
      "Min 5 Year Warranty",
      "Free Annual Checkup",
    ],
    color: "from-cta-600 to-blue-500",
  },
  {
    id: 4,
    name: "Full Mouth Implants",
    icon: "👑",
    price: "5,00,000",
    originalPrice: "10,00,000",
    unit: "both arches",
    popular: false,
    badge: null,
    features: [
      "Both Upper & Lower Arches",
      "8-12 Titanium Implants",
      "3D CBCT Scan & Planning",
      "Surgical Guide (Digital)",
      "Temporary Teeth Same Day",
      "Final Zirconia Bridges",
      "8 Follow-up Visits",
      "5 Year Warranty",
      "Free Annual Checkups",
      "VIP Aftercare Package",
    ],
    color: "from-amber-500 to-yellow-500",
  },
];

const additionalPricing = [
  { treatment: "Root Canal Treatment", price: "4,000 - 15,000" },
  { treatment: "Porcelain Veneers", price: "8,000 - 25,000 / tooth" },
  { treatment: "Teeth Whitening", price: "4,000 - 20,000" },
  { treatment: "Zirconia Crown", price: "8,000 - 20,000" },
  { treatment: "Metal Braces", price: "30,000 - 50,000" },
  { treatment: "Clear Aligners", price: "50,000 - 2,00,000" },
  { treatment: "Wisdom Tooth Extraction", price: "3,000 - 8,000" },
  { treatment: "Bone Grafting", price: "15,000 - 30,000" },
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blur-blob w-[500px] h-[500px] bg-primary-500/5 -top-32 -left-32" />
        <div className="blur-blob w-[400px] h-[400px] bg-gold-500/5 bottom-0 -right-32" />
      </div>

      <div className="container-custom relative">
        <SectionTitle
          subtitle="Our Pricing"
          title="Transparent & Affordable Pricing"
          description="Quality dental care at competitive prices. No hidden charges. 0% EMI options available on all treatments."
        />

        {/* ========================================
          IMPLANT PRICING CARDS
          ======================================== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingPlans.map((plan) => (
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
                    : "border-gray-100 bg-white hover:border-primary-200 hover:shadow-premium"
                  }`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <span className="text-4xl mb-3 block">{plan.icon}</span>
                  <h3 className="text-xl font-heading font-bold text-dark-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {plan.unit}
                  </p>
                </div>

                {/* Price */}
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
                      )}
                      %
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg text-gray-500">₹</span>
                    <span className="text-5xl font-heading font-bold text-dark-900">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    EMI starting ₹
                    {Math.round(
                      parseInt(plan.price.replace(/,/g, "")) / 12
                    ).toLocaleString()}
                    /month
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

                {/* Features */}
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

                {/* CTA */}
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

        {/* ========================================
            ADDITIONAL TREATMENT PRICES TABLE
        ======================================== */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-dark-900 text-center mb-8">
            Other <span className="text-gradient">Treatment Prices</span>
          </h3>

          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 px-6 py-4 bg-dark-950 text-white">
              <span className="text-sm font-semibold tracking-wider uppercase">
                Treatment
              </span>
              <span className="text-sm font-semibold tracking-wider uppercase text-right">
                Price Range (₹)
              </span>
            </div>

            {/* Table Rows */}
            {additionalPricing.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 gap-4 px-6 py-4 items-center transition-colors hover:bg-primary-50 ${i !== additionalPricing.length - 1
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

          {/* Note */}
          <div className="mt-6 p-4 bg-gold-50 rounded-xl border border-gold-200">
            <p className="text-xs text-gray-600 text-center">
              💡 <strong>Note:</strong> Prices may vary based on case
              complexity. Final pricing provided after consultation.
              <strong> 0% EMI available</strong> on treatments above
              ₹20,000. All prices include consultation & follow-up visits.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <GradientButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FiArrowRight />}
            >
              Get Free Quote
            </GradientButton>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 hover:gap-3 transition-all"
            >
              View Complete Price List
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default PricingSection;