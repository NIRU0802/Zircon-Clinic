"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiX } from "react-icons/fi";
import { useState } from "react";
import { beforeAfterCases } from "@/data/beforeAfter";

export default function BeforeAfterPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#063c3c] px-6 pb-20 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-teal-100 backdrop-blur-sm">
              <FiCheckCircle className="text-teal-300" />
              Real Patient Transformations
            </span>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Before &{" "}
              <span className="text-teal-300">After</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Explore real patient transformations achieved through
              personalized dental care at Zircon Dental & Implant Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Our Results
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Real Transformations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Every smile is unique. These results reflect personalized
              treatment plans created according to each patient's dental needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {beforeAfterCases.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.2),
                }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(item.image)}
                  className="relative block w-full cursor-zoom-in overflow-hidden bg-slate-100 text-left"
                  aria-label={`View ${item.title}`}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={`${item.treatment} - ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                      Before & After
                    </span>
                  </div>
                </button>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
                    {item.treatment}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedImage(item.image)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
                  >
                    View Result
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
            <p className="text-sm leading-6 text-slate-600">
              <strong className="text-slate-800">Please note:</strong>{" "}
              Individual results may vary. Treatment outcomes depend on each
              patient's dental condition, treatment plan, oral health, and
              response to care.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#0b5f59]"
            >
              Discuss Your Smile Goals
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Before and After image preview"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close image preview"
          >
            <FiX size={22} />
          </button>

          <div
            className="relative h-[90vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Before and After dental transformation"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}