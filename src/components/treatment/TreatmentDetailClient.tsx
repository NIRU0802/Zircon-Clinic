"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import type { TreatmentDetail } from "@/data/treatments";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FiArrowLeft, FiArrowRight, FiCheck, FiPhone, FiClock,
  FiActivity, FiDollarSign, FiPlus, FiMinus, FiStar,
  FiMapPin, FiChevronRight, FiMessageCircle,
} from "react-icons/fi";
import GradientButton from "@/components/ui/GradientButton";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { SITE_CONFIG } from "@/utils/constants";

interface TreatmentDetailClientProps {
  treatment: TreatmentDetail;
  relatedTreatments: TreatmentDetail[];
}

export default function TreatmentDetailClient({
  treatment,
  relatedTreatments,
}: TreatmentDetailClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState<string[]>([]);
  const [assessmentComplete, setAssessmentComplete] = useState(false);

  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const handleAssessmentAnswer = (answer: string) => {
    const newAnswers = [...assessmentAnswers, answer];
    setAssessmentAnswers(newAnswers);
    if (assessmentStep < treatment.assessmentQuestions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      setAssessmentComplete(true);
    }
  };

  return (
    <Layout>
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={treatment.heroImage} alt={treatment.title} fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/80 to-dark-950" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blur-blob w-[500px] h-[500px] bg-primary-500/8 -top-32 -right-32" />
          <div className="blur-blob w-[400px] h-[400px] bg-gold-500/5 bottom-0 -left-32" />
        </div>

        <div className="container-custom relative">
          {/* Breadcrumb */}
          <motion.div className="flex items-center gap-2 text-sm text-gray-500 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight className="w-3 h-3" />
            <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
            <FiChevronRight className="w-3 h-3" />
            <span className="text-primary-400">{treatment.title}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-gray-400 text-sm italic mb-2">{treatment.tagline}</p>

              {/* Success Rate Badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="relative">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#c9295a" strokeWidth="2" strokeDasharray={`${parseFloat(treatment.successRate)} ${100 - parseFloat(treatment.successRate)}`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">{treatment.successRate}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Success Rate</p>
                  <p className="text-gray-400 text-xs">{treatment.badge}</p>
                </div>
              </div>

              <h1 className="heading-xl text-white mb-6">
                Best <span className="text-gradient">{treatment.title}</span> — Restore Your Smile
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light max-w-xl">{treatment.description}</p>

              <div className="flex flex-wrap gap-4 mb-10">
                <GradientButton href="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>Schedule Consultation</GradientButton>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 px-6 py-4 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm font-semibold">
                  <FiPhone className="w-4 h-4" /> Call {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Hero Stats */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                {treatment.heroStats.map((stat, i) => (
                  <span key={i} className="flex items-center gap-1">
                    {i > 0 && <span className="mx-2">•</span>}
                    <span className="font-bold text-white">{stat.value}</span> {stat.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div className="hidden lg:block" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-premium-lg aspect-[4/3]">
                <Image src={treatment.image} alt={treatment.title} fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PRICE COMPARISON ========== */}
      {treatment.showPriceComparison && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionTitle subtitle="Care you can trust. Prices you can handle." title="Global Price Comparison" description="See how our prices compare globally — save up to 85%." />

            <div className="max-w-3xl mx-auto">
              <motion.div className="space-y-3 mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {treatment.priceComparison.map((item, i) => (
                  <motion.div key={i} variants={staggerItem} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.flag}</span>
                      <span className="font-medium text-dark-900">{item.country}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{item.price}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Our Price - Highlighted */}
              <motion.div className="relative p-6 bg-primary-gradient rounded-2xl text-white text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-dark-900 text-xs font-bold rounded-full">Esthetica Dental Clinic</div>
                <div className="flex items-baseline justify-center gap-2 mt-4 mb-2">
                  <span className="text-4xl font-heading font-bold">{treatment.clinicPrice.min}</span>
                  <span className="text-white/60">–</span>
                  <span className="text-4xl font-heading font-bold">{treatment.clinicPrice.max}</span>
                </div>
                <p className="text-white/70 text-sm">{treatment.clinicPrice.currency}</p>
                <p className="text-white/50 text-xs mt-2">Indian prices: {treatment.clinicPrice.inrRange}</p>
                <p className="mt-4 text-sm font-semibold text-gold-300">💰 Save up to 85% compared to Western countries</p>
              </motion.div>

              <div className="text-center mt-8">
                <GradientButton href="/contact" variant="primary" icon={<FiArrowRight />}>Get Free Quote</GradientButton>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== CANDIDATE ASSESSMENT ========== */}
      {treatment.showAssessment && treatment.assessmentQuestions.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <SectionTitle subtitle="Free Assessment" title={`Are You a Candidate for ${treatment.title}?`} description="Answer a few quick questions to discover if this treatment is right for you." />

              {!assessmentComplete ? (
                <motion.div className="bg-gray-50 rounded-2xl p-8 border border-gray-100" key={assessmentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500">Question {assessmentStep + 1} of {treatment.assessmentQuestions.length}</span>
                    <span className="text-sm font-bold text-primary-500">{Math.round(((assessmentStep + 1) / treatment.assessmentQuestions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
                    <motion.div className="h-full bg-primary-gradient rounded-full" animate={{ width: `${((assessmentStep + 1) / treatment.assessmentQuestions.length) * 100}%` }} />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-dark-900 mb-6">{treatment.assessmentQuestions[assessmentStep].question}</h3>
                  <div className="space-y-3">
                    {treatment.assessmentQuestions[assessmentStep].options.map((option, i) => (
                      <button key={i} onClick={() => handleAssessmentAnswer(option)} className="w-full text-left p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-medium text-dark-900">
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div className="bg-green-50 rounded-2xl p-8 text-center border border-green-200" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <span className="text-5xl mb-4 block">✅</span>
                  <h3 className="text-2xl font-heading font-bold text-dark-900 mb-3">You May Be a Great Candidate!</h3>
                  <p className="text-gray-600 mb-6">Based on your responses, {treatment.title.toLowerCase()} could be an excellent option for you. Book a free consultation to get a personalized assessment.</p>
                  <GradientButton href="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>Book Free Consultation</GradientButton>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ========== WHAT IS IT ========== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-primary-500 mb-4">
                <span className="w-8 h-px bg-primary-500" />Understanding {treatment.category}
              </span>
              <h2 className="heading-lg text-dark-900 mb-6">{treatment.whatIsIt.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{treatment.whatIsIt.description}</p>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {treatment.whatIsIt.parts && (
                <div className="relative bg-white rounded-2xl p-8 shadow-premium">
                  <div className="space-y-6">
                    {treatment.whatIsIt.parts.map((part, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center text-white font-bold flex-shrink-0">{i + 1}</div>
                        <div>
                          <h4 className="font-bold text-dark-900">{part.name}</h4>
                          <p className="text-sm text-gray-500">{part.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="Why Choose This" title={`Benefits of ${treatment.title}`} description="Discover why this is the preferred choice for patients." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {treatment.benefits.map((benefit, i) => (
              <motion.div key={i} variants={staggerItem} className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-premium transition-all duration-500 border border-gray-100 hover:border-transparent group">
                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{benefit.icon}</span>
                <h3 className="text-lg font-heading font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== SOLUTIONS / OPTIONS ========== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle subtitle="Your Options" title={`${treatment.title} Solutions`} description="Customized solutions for every need." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {treatment.solutions.map((solution, i) => (
              <motion.div key={i} variants={staggerItem} className="relative">
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">Most Popular</div>
                )}
                <div className={`h-full p-6 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium bg-white ${solution.popular ? 'border-primary-300 shadow-primary' : 'border-gray-100'}`}>
                  <h3 className="text-lg font-heading font-bold text-dark-900 mb-1">{solution.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{solution.subtitle}</p>
                  <div className="px-2 py-1 bg-primary-50 rounded-lg text-xs text-primary-600 font-medium inline-block mb-4">Best for: {solution.bestFor}</div>
                  <p className="text-2xl font-heading font-bold text-primary-600 mb-4">{solution.price}</p>
                  <ul className="space-y-2">
                    {solution.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== PROCESS TIMELINE ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="The Process" title="Your Journey to a New Smile" description="Our streamlined process ensures comfort, precision, and exceptional results." />
          <div className="max-w-3xl mx-auto">
            {treatment.process.map((step, i) => (
              <motion.div key={i} className="flex gap-6 mb-8 last:mb-0" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < treatment.process.length - 1 && <div className="w-px h-full bg-primary-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-heading font-bold text-dark-900">{step.title}</h3>
                    <span className="px-2 py-0.5 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING PLANS ========== */}
      <section className="section-padding bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[500px] h-[500px] bg-primary-500/5 -top-32 right-0" />
        </div>
        <div className="container-custom relative">
          <SectionTitle subtitle={`${treatment.title} Cost`} title="Transparent Pricing" description="No hidden costs. All prices include consultation, procedure, and follow-up." light />

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {treatment.pricingPlans.map((plan, i) => (
              <motion.div key={i} variants={staggerItem} className="relative">
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-gold-gradient text-dark-900 text-xs font-bold rounded-full">Most Popular</div>
                )}
                <div className={`h-full p-6 rounded-2xl text-center ${plan.popular ? 'bg-white text-dark-900' : 'bg-white/5 border border-white/10 text-white'}`}>
                  <h3 className={`text-lg font-heading font-bold mb-2 ${plan.popular ? 'text-dark-900' : 'text-white'}`}>{plan.name}</h3>
                  <div className="mb-1">
                    <span className={`text-4xl font-heading font-bold ${plan.popular ? 'text-primary-600' : 'text-white'}`}>{plan.price}</span>
                  </div>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-500' : 'text-gray-400'}`}>{plan.unit}</p>
                  <ul className="space-y-3 mb-6 text-left">
                    {plan.features.map((f, j) => (
                      <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-gray-600' : 'text-gray-300'}`}>
                        <FiCheck className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-primary-500' : 'text-green-400'}`} /> {f}
                      </li>
                    ))}
                  </ul>
                  <GradientButton href="/contact" variant={plan.popular ? "primary" : "outline"} className="w-full justify-center">
                    Book Now
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-gray-400 text-sm">
              💳 <strong className="text-white">EMI Plans Available</strong> — Starting from <strong className="text-gold-400">{treatment.emiStarting}</strong> with 0% interest
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="Common Questions" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-3">
            {treatment.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <button
                  className={`w-full text-left p-5 rounded-2xl transition-all ${activeFaq === i ? 'bg-primary-50 border border-primary-100' : 'bg-gray-50 hover:bg-gray-100 border border-transparent'}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className={`font-semibold ${activeFaq === i ? 'text-primary-600' : 'text-dark-900'}`}>{faq.question}</h4>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${activeFaq === i ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {activeFaq === i ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-gray-600 text-sm leading-relaxed mt-4 overflow-hidden">
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

      {/* ========== WHY CHOOSE US ========== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle subtitle={`Why Choose Esthetica`} title={`Why Choose Us for ${treatment.title}?`} />
            <motion.p className="text-gray-600 leading-relaxed text-lg text-center mb-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {treatment.whyChooseUs}
            </motion.p>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" ref={statsRef} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {[
                { value: 15, suffix: "+", label: "Years Experience" },
                { value: parseFloat(treatment.successRate), suffix: "%", label: "Success Rate" },
                { value: 15000, suffix: "+", label: "Procedures Done" },
                { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
              ].map((stat, i) => (
                <motion.div key={i} variants={staggerItem} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-3xl font-heading font-bold text-primary-600 mb-1">
                    {statsInView ? <CountUp end={stat.value} duration={2.5} decimals={stat.decimals || 0} suffix={stat.suffix} /> : `0${stat.suffix}`}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[400px] h-[400px] bg-primary-500/10 top-0 right-0" />
        </div>
        <div className="container-custom relative">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-gold-400" />Get Started<span className="w-8 h-px bg-gold-400" />
            </span>
            <h2 className="heading-lg text-white mb-6">
              Ready for <span className="text-gold-400">{treatment.title}</span>?
            </h2>
            <p className="text-gray-400 mb-10 font-light text-lg">
              Schedule your first visit and discover a dental experience designed around your comfort and well-being.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <GradientButton href="/contact" variant="primary" size="lg" icon={<FiArrowRight />} className="justify-center">Book Appointment</GradientButton>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center gap-2 px-6 py-4 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm font-semibold">
                <FiPhone className="w-4 h-4" /> Call Us
              </a>
              <a href="#" className="flex items-center justify-center gap-2 px-6 py-4 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm font-semibold">
                <FiMapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>

            {/* Related Treatments */}
            <div className="pt-10 border-t border-white/5">
              <p className="text-gray-500 text-sm mb-4">Other Treatments</p>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedTreatments.map((t) => (
                  <Link key={t.id} href={`/treatments/${t.slug}`} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
                    {t.icon} {t.title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}