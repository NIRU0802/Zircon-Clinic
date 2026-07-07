"use client";

import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiCheck,
  FiArrowRight,
  FiPhone,
  FiPlus,
  FiMinus,
  FiHeart,
  FiStar,
  FiClock,
  FiZap,
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
import type {
  TreatmentDetail,
  ProcessStep,
  TreatmentPlan,
  TreatmentFaq,
  ImplantSolution,
  PriceComparisonItem,
} from "@/data/treatments/types";

interface Props {
  treatment: TreatmentDetail;
  relatedTreatments?: TreatmentDetail[];
}

export default function TreatmentDetailClient({
  treatment,
  relatedTreatments = [],
}: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <Layout>
      {/* ========================================
          HERO
      ======================================== */}
      <section className="relative pt-32 pb-24 bg-dark-950 overflow-hidden">
        {treatment.heroImage && (
          <div className="absolute inset-0">
            <Image
              src={treatment.heroImage}
              alt={treatment.title}
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 to-dark-950" />
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[500px] h-[500px] bg-primary-500/8 -top-32 -right-32" />
          <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 -left-32" />
        </div>

        <div className="container-custom relative text-center">
          {/* Badge */}
          {treatment.badge && (
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FiZap className="w-3.5 h-3.5" />
              {treatment.badge}
            </motion.div>
          )}

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium tracking-wider uppercase">
              {treatment.category} • Wakad, Pune
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {treatment.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-heading font-light mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {treatment.tagline}
          </motion.p>

          <motion.p
            className="text-gray-500 max-w-2xl mx-auto text-base font-light mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {treatment.description}
          </motion.p>

          {/* Hero Stats */}
          {treatment.heroStats && treatment.heroStats.length > 0 && (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              {treatment.heroStats.map(
                (stat: { label: string; value: string }, i: number) => (
                  <motion.div
                    key={i}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.08 }}
                  >
                    <p className="text-2xl font-heading font-bold text-primary-400 mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          )}

          {/* Quick info pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {treatment.duration && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <FiClock className="w-4 h-4 text-gold-400" />
                <span className="text-xs text-gray-300">
                  {treatment.duration}
                </span>
              </div>
            )}
            {treatment.recovery && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <FiHeart className="w-4 h-4 text-gold-400" />
                <span className="text-xs text-gray-300">
                  Recovery: {treatment.recovery}
                </span>
              </div>
            )}
            {treatment.successRate && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <FiStar className="w-4 h-4 text-gold-400" />
                <span className="text-xs text-gray-300">
                  {treatment.successRate} Success Rate
                </span>
              </div>
            )}
            {treatment.priceRange && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <span className="text-xs text-gold-400 font-bold">₹</span>
                <span className="text-xs text-gray-300">
                  {treatment.priceRange}
                </span>
              </div>
            )}
          </motion.div>

          {/* CTAs */}
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
              Book Free Consultation
            </GradientButton>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 px-8 py-5 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-semibold"
            >
              <FiPhone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          WHAT IS IT
      ======================================== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[400px] h-[400px] bg-primary-500/5 -top-32 -left-32" />
        </div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
                <span className="w-8 h-px bg-primary-500" />
                {treatment.whatIsIt.title}
                <span className="w-8 h-px bg-primary-500" />
              </span>

              <h2 className="heading-lg text-dark-900 mb-6">
                Understanding{" "}
                <span className="text-gradient">{treatment.title}</span>
              </h2>

              <p className="text-gray-600 leading-relaxed font-light">
                {treatment.whatIsIt.description}
              </p>

              {/* Parts breakdown if present */}
              {treatment.whatIsIt.parts &&
                treatment.whatIsIt.parts.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {treatment.whatIsIt.parts.map(
                      (part: { name: string; description: string }, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FiCheck className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-dark-900 text-sm">
                              {part.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {part.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

              <div className="mt-8">
                <GradientButton
                  href="/contact"
                  variant="primary"
                  icon={<FiArrowRight />}
                >
                  Ask Our Experts
                </GradientButton>
              </div>
            </motion.div>

            {/* Image */}
            {treatment.image ? (
              <motion.div
                className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-premium"
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 to-transparent" />
              </motion.div>
            ) : (
              <motion.div
                className="relative rounded-3xl bg-gradient-to-br from-primary-50 to-pink-50 border border-primary-100 flex items-center justify-center aspect-[4/3]"
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-[8rem] opacity-20 select-none">
                  {treatment.icon}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          BENEFITS
      ======================================== */}
      {treatment.benefits.length > 0 && (
        <section className="section-padding bg-gray-50">
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
                Benefits
                <span className="w-8 h-px bg-primary-500" />
              </span>
              <h2 className="heading-lg text-dark-900 mb-3">
                Why Choose{" "}
                <span className="text-gradient">{treatment.title}</span>
              </h2>
              <p className="subtitle max-w-2xl mx-auto">
                Discover the advantages that make this treatment a preferred
                choice at Zircon Dental.
              </p>
              <div className="mt-6 flex items-center gap-2 justify-center">
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                <span className="w-3 h-3 rounded-full bg-primary-500" />
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {treatment.benefits.map(
                (
                  benefit: { title: string; description: string; icon: string },
                  i: number
                ) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon ? (
                          <span className="text-lg">{benefit.icon}</span>
                        ) : (
                          <FiCheck className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-dark-900 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ========================================
          SOLUTIONS (ImplantSolution[])
      ======================================== */}
      {treatment.solutions.length > 0 && (
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
                Treatment Options
                <span className="w-8 h-px bg-primary-500" />
              </span>
              <h2 className="heading-lg text-dark-900 mb-3">
                Solutions We{" "}
                <span className="text-gradient">Offer</span>
              </h2>
              <p className="subtitle max-w-2xl mx-auto">
                Choose the option that best fits your needs and budget.
              </p>
              <div className="mt-6 flex items-center gap-2 justify-center">
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                <span className="w-3 h-3 rounded-full bg-primary-500" />
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {treatment.solutions.map(
                (solution: ImplantSolution, i: number) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="relative group"
                  >
                    {solution.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="flex items-center gap-1.5 px-4 py-1.5 bg-primary-gradient rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-primary">
                          <FiStar className="w-3 h-3 fill-white" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div
                      className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${
                        solution.popular
                          ? "border-primary-300 bg-white shadow-premium"
                          : "border-gray-100 bg-white hover:border-primary-200 hover:shadow-premium"
                      }`}
                    >
                      <h3 className="text-xl font-heading font-bold text-dark-900 mb-1">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {solution.subtitle}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                          Best For
                        </p>
                        <p className="text-sm text-dark-900 font-medium">
                          {solution.bestFor}
                        </p>
                      </div>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-lg text-gray-500">₹</span>
                        <span className="text-3xl font-heading font-bold text-dark-900">
                          {solution.price}
                        </span>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

                      <ul className="space-y-3 mb-8">
                        {solution.features.map(
                          (feature: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3"
                            >
                              <div className="w-5 h-5 rounded-full bg-primary-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FiCheck className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>

                      <GradientButton
                        href="/contact"
                        variant={solution.popular ? "primary" : "outline"}
                        className="w-full text-center justify-center"
                        icon={<FiArrowRight />}
                      >
                        Book Consultation
                      </GradientButton>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ========================================
          PROCESS
      ======================================== */}
      {treatment.process.length > 0 && (
        <section className="section-padding bg-dark-950 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="blur-blob w-[400px] h-[400px] bg-primary-500/5 top-0 right-0" />
            <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 left-0" />
          </div>

          <div className="container-custom relative">
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4">
                <span className="w-8 h-px bg-gold-400" />
                Our Process
                <span className="w-8 h-px bg-gold-400" />
              </span>
              <h2 className="heading-lg text-white mb-3">
                How{" "}
                <span className="text-gold-400">{treatment.title}</span>{" "}
                Works
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                A step-by-step look at your treatment journey at Zircon Dental.
              </p>
              <div className="mt-6 flex items-center gap-2 justify-center">
                <span className="w-12 h-0.5 rounded-full bg-gold-500" />
                <span className="w-3 h-3 rounded-full bg-gold-500" />
                <span className="w-12 h-0.5 rounded-full bg-gold-500" />
              </div>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical connector line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden md:block" />

              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {treatment.process.map((step: ProcessStep, i: number) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="relative flex gap-6 group"
                  >
                    {/* Step bubble */}
                    <div className="flex-shrink-0 z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-heading font-bold text-white">
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="text-[10px] text-primary-400 font-semibold tracking-wider uppercase mb-0.5">
                            Step {i + 1}
                          </p>
                          <h3 className="text-lg font-heading font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        {step.duration && (
                          <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium rounded-full flex-shrink-0 mt-1">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          PRICING PLANS (TreatmentPlan[])
      ======================================== */}
      {treatment.pricingPlans && treatment.pricingPlans.length > 0 && (
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="blur-blob w-[500px] h-[500px] bg-primary-500/5 -top-32 -left-32" />
          </div>

          <div className="container-custom relative">
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
                <span className="w-8 h-px bg-primary-500" />
                Pricing Plans
                <span className="w-8 h-px bg-primary-500" />
              </span>
              <h2 className="heading-lg text-dark-900 mb-3">
                Transparent{" "}
                <span className="text-gradient">Pricing</span>
              </h2>
              <p className="subtitle max-w-2xl mx-auto">
                All prices include consultation, procedure, materials, and
                follow-up visits. No hidden costs.
              </p>
              <div className="mt-6 flex items-center gap-2 justify-center">
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                <span className="w-3 h-3 rounded-full bg-primary-500" />
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {treatment.pricingPlans.map(
                (plan: TreatmentPlan, i: number) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="relative group"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="flex items-center gap-1.5 px-4 py-1.5 bg-primary-gradient rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-primary">
                          <FiStar className="w-3 h-3 fill-white" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div
                      className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${
                        plan.popular
                          ? "border-primary-300 bg-white shadow-premium"
                          : "border-gray-100 bg-white hover:border-primary-200 hover:shadow-premium"
                      }`}
                    >
                      {/* Header */}
                      <div className="text-center mb-8">
                        <h3 className="text-xl font-heading font-bold text-dark-900 mb-1">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {plan.unit}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-8">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-lg text-gray-500">₹</span>
                          <span className="text-5xl font-heading font-bold text-dark-900">
                            {plan.price}
                          </span>
                        </div>
                        {treatment.emiStarting && (
                          <p className="text-xs text-gray-400 mt-2">
                            EMI from ₹{treatment.emiStarting}/month
                          </p>
                        )}
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map(
                          (feature: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3"
                            >
                              <div className="w-5 h-5 rounded-full bg-primary-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FiCheck className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
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
                )
              )}
            </motion.div>

            {/* EMI note */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-full border border-green-200">
                <span className="text-lg">💳</span>
                <p className="text-sm text-green-800">
                  <strong>0% EMI Available</strong> — Starting from ₹
                  {treatment.emiStarting}/month on select plans
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ========================================
          PRICE COMPARISON
      ======================================== */}
      {treatment.showPriceComparison &&
        treatment.priceComparison.length > 0 && (
          <section className="section-padding bg-gray-50">
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
                  Global Comparison
                  <span className="w-8 h-px bg-primary-500" />
                </span>
                <h2 className="heading-lg text-dark-900 mb-3">
                  Save Up to{" "}
                  <span className="text-gradient">85%</span> vs
                  Western Countries
                </h2>
                <p className="subtitle max-w-2xl mx-auto">
                  World-class care at a fraction of the price. See how Pune
                  compares globally.
                </p>
                <div className="mt-6 flex items-center gap-2 justify-center">
                  <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                  <span className="w-3 h-3 rounded-full bg-primary-500" />
                  <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                </div>
              </motion.div>

              <div className="max-w-2xl mx-auto">
                <motion.div
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-dark-950">
                    <span className="text-xs font-semibold tracking-wider uppercase text-white">
                      Country
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-white text-center">
                      Flag
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-white text-right">
                      Price
                    </span>
                  </div>

                  {treatment.priceComparison.map(
                    (item: PriceComparisonItem, i: number) => (
                      <div
                        key={i}
                        className={`grid grid-cols-3 gap-4 px-6 py-5 items-center bg-white hover:bg-gray-50 transition-colors ${
                          i !== treatment.priceComparison.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        <span className="text-sm font-semibold text-dark-900">
                          {item.country}
                        </span>
                        <span className="text-2xl text-center">
                          {item.flag}
                        </span>
                        <span className="text-sm font-bold text-primary-600 text-right">
                          {item.price}
                        </span>
                      </div>
                    )
                  )}
                </motion.div>

                {/* Clinic price highlight */}
                {treatment.clinicPrice && (
                  <motion.div
                    className="mt-6 p-6 bg-primary-gradient rounded-2xl text-white text-center shadow-primary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/70">
                      At Zircon Dental, Wakad
                    </p>
                    <p className="text-4xl font-heading font-bold mb-1">
                      {treatment.clinicPrice.inrRange}
                    </p>
                    <p className="text-white/60 text-xs">
                      {treatment.clinicPrice.currency}{" "}
                      {treatment.clinicPrice.min} –{" "}
                      {treatment.clinicPrice.max} • Free consultation
                      included
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

      {/* ========================================
          BEFORE & AFTER CASES
      ======================================== */}
      {treatment.beforeAfterCases &&
        treatment.beforeAfterCases.length > 0 && (
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
                  Real Results
                  <span className="w-8 h-px bg-primary-500" />
                </span>
                <h2 className="heading-lg text-dark-900 mb-3">
                  Before &{" "}
                  <span className="text-gradient">After Cases</span>
                </h2>
                <div className="mt-6 flex items-center gap-2 justify-center">
                  <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                  <span className="w-3 h-3 rounded-full bg-primary-500" />
                  <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {treatment.beforeAfterCases.map(
                  (
                    item: { title: string; description: string },
                    i: number
                  ) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-premium transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center mb-4 shadow-sm">
                        <FiStar className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-dark-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </section>
        )}

      {/* ========================================
          WHY CHOOSE US
      ======================================== */}
      {treatment.whyChooseUs && (
        <section className="section-padding bg-dark-950 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="blur-blob w-[400px] h-[400px] bg-primary-500/5 top-0 right-0" />
            <div className="blur-blob w-[300px] h-[300px] bg-gold-500/5 bottom-0 left-0" />
          </div>
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="text-center mb-10"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4">
                  <span className="w-8 h-px bg-gold-400" />
                  Why Zircon Dental
                  <span className="w-8 h-px bg-gold-400" />
                </span>
                <h2 className="heading-lg text-white mb-3">
                  The{" "}
                  <span className="text-gold-400">Zircon</span> Difference
                </h2>
              </motion.div>

              <motion.div
                className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 leading-relaxed text-base font-light">
                  {treatment.whyChooseUs}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          FAQS
      ======================================== */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <section className="section-padding bg-gray-50">
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
                FAQ
                <span className="w-8 h-px bg-primary-500" />
              </span>
              <h2 className="heading-lg text-dark-900 mb-3">
                Frequently Asked{" "}
                <span className="text-gradient">Questions</span>
              </h2>
              <p className="subtitle max-w-2xl mx-auto">
                Everything you need to know about {treatment.title} at Zircon
                Dental.
              </p>
              <div className="mt-6 flex items-center gap-2 justify-center">
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                <span className="w-3 h-3 rounded-full bg-primary-500" />
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              </div>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {treatment.faqs.map((faq: TreatmentFaq, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    className={`w-full text-left p-5 rounded-2xl transition-all ${
                      activeFaq === i
                        ? "bg-primary-50 border border-primary-100"
                        : "bg-white hover:bg-gray-100 border border-transparent"
                    }`}
                    onClick={() =>
                      setActiveFaq(activeFaq === i ? null : i)
                    }
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4
                        className={`font-semibold text-sm ${
                          activeFaq === i
                            ? "text-primary-600"
                            : "text-dark-900"
                        }`}
                      >
                        {faq.question}
                      </h4>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activeFaq === i
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
      )}

      {/* ========================================
          RELATED TREATMENTS
      ======================================== */}
      {relatedTreatments.length > 0 && (
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
                Explore More
                <span className="w-8 h-px bg-primary-500" />
              </span>
              <h2 className="heading-lg text-dark-900 mb-3">
                Related{" "}
                <span className="text-gradient">Treatments</span>
              </h2>
              <div className="mt-6 flex items-center gap-2 justify-center">
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
                <span className="w-3 h-3 rounded-full bg-primary-500" />
                <span className="w-12 h-0.5 rounded-full bg-primary-500" />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {relatedTreatments.map(
                (related: TreatmentDetail, i: number) => (
                  <motion.a
                    key={related.slug}
                    href={`/treatments/${related.slug}`}
                    variants={staggerItem}
                    className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{related.icon}</span>
                      <h3 className="font-heading font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                        {related.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">
                      {related.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary-500 text-sm font-semibold">
                      Learn more
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                )
              )}
            </motion.div>
          </div>
        </section>
      )}

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
              Ready for Your{" "}
              <span className="text-gold-400">Perfect Smile?</span>
            </h2>

            <p className="text-gray-400 mb-4 font-light text-lg max-w-xl mx-auto">
              Book a free consultation and get a personalized treatment plan —
              no obligation, no pressure.
            </p>

            <p className="text-gray-600 text-sm mb-10">
              ✅ Free Consultation &nbsp;•&nbsp; ✅ No Obligation &nbsp;•&nbsp;
              ✅ Same Day Appointments Available
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

            {/* Address */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl inline-block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0">
                  <span>🦷</span>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">
                    Zircon Dental &amp; Implant Clinic
                  </p>
                  <p className="text-gray-500 text-xs">
                    Shop No. 72, Western Avenue, Opp. Phoenix Mall Road,
                    Wakad, Pune - 411057
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