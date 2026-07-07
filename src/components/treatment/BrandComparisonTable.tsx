"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import type { BrandPriceItem } from "@/data/treatments";

interface BrandComparisonTableProps {
  items: BrandPriceItem[];
  currency?: string;
}

type FilterKey = "all" | "budget" | "standard" | "premium";

const FILTERS: ReadonlyArray<{
  key: FilterKey;
  label: string;
}> = [
  { key: "all", label: "All Brands" },
  { key: "budget", label: "Budget (₹8K–22K)" },
  { key: "standard", label: "Standard (₹25K–45K)" },
  { key: "premium", label: "Premium (₹45K+)" },
];

const TIER_STYLES = {
  all: "",
  budget: "bg-green-50 text-green-700 border-green-200",
  standard: "bg-primary-50 text-primary-700 border-primary-200",
  premium: "bg-gold-50 text-gold-700 border-gold-200",
} satisfies Record<FilterKey, string>;

export default function BrandComparisonTable({
  items,
  currency = "INR",
}: BrandComparisonTableProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredItems: BrandPriceItem[] =
    activeFilter === "all"
      ? items
      : items.filter((item: BrandPriceItem) => item.tier === activeFilter);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Brand Comparison"
          title="Complete Dental Implant Price List by Brand"
          description={`Detailed pricing for all implant brands available at Zircon Dental. All prices are in ${
            currency === "INR"
              ? "Indian Rupees (INR)"
              : currency
          }.`}
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-primary-gradient text-white border-transparent shadow-primary"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-5xl mx-auto overflow-hidden rounded-2xl border border-gray-100 shadow-premium">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-dark-950 text-white">
                <th className="px-6 py-4 text-sm font-semibold">
                  Brand Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold">
                  Type
                </th>
                <th className="px-6 py-4 text-sm font-semibold">
                  Price (INR)
                </th>
                <th className="px-6 py-4 text-sm font-semibold">
                  Price (USD)
                </th>
                <th className="px-6 py-4 text-sm font-semibold">
                  Warranty
                </th>
              </tr>
            </thead>

            <tbody>
              <AnimatePresence initial={false}>
                {filteredItems.map(
                  (item: BrandPriceItem, index: number) => (
                    <motion.tr
                      key={item.brand}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.03,
                      }}
                      className={`${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                      } hover:bg-primary-50/50 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-dark-900">
                        {item.brand}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full border text-xs font-semibold ${
                            TIER_STYLES[item.tier]
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-bold text-primary-600">
                        {item.priceINR}
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        {item.priceUSD}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {item.warranty}
                      </td>
                    </motion.tr>
                  )
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden max-w-5xl mx-auto space-y-4">
          <AnimatePresence initial={false}>
            {filteredItems.map(
              (item: BrandPriceItem, index: number) => (
                <motion.div
                  key={item.brand}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.03,
                  }}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-dark-900">
                      {item.brand}
                    </h4>

                    <span
                      className={`px-3 py-1 rounded-full border text-xs font-semibold ${
                        TIER_STYLES[item.tier]
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-between text-sm">
                    <span className="text-gray-500">Price</span>

                    <span className="font-bold text-primary-600">
                      {item.priceINR}
                    </span>
                  </div>

                  <div className="mt-1 flex justify-between text-sm">
                    <span className="text-gray-500">
                      USD
                    </span>

                    <span className="text-gray-700">
                      {item.priceUSD}
                    </span>
                  </div>

                  <div className="mt-1 flex justify-between text-sm">
                    <span className="text-gray-500">
                      Warranty
                    </span>

                    <span className="font-medium text-gray-700">
                      {item.warranty}
                    </span>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Prices shown are per implant and may vary depending on
          bone condition, complexity, and additional procedures.
          Contact us for an exact treatment estimate.
        </p>
      </div>
    </section>
  );
}