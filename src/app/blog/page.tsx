"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";

const blogPosts = [
  { id: "1", title: "Everything You Need to Know About Dental Implants in Pune", excerpt: "A comprehensive guide to dental implants â€” costs, procedure, recovery, and why Wakad is becoming Pune's implant hub.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600", date: "Jan 15, 2025", author: "Dr. Team", category: "Implants" },
  { id: "2", title: "Top 5 Signs You Need a Root Canal Treatment", excerpt: "Don't ignore tooth pain! Learn the warning signs that indicate you may need root canal treatment.", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600", date: "Jan 10, 2025", author: "Dr. Team", category: "General" },
  { id: "3", title: "Smile Design: Transform Your Smile at Zircon Dental", excerpt: "Discover how digital smile design can give you the perfect smile you've always wanted.", image: "https://images.unsplash.com/photo-1581585095203-c0c5c6608e72?q=80&w=600", date: "Jan 5, 2025", author: "Dr. Team", category: "Cosmetic" },
  { id: "4", title: "All-on-4 Dental Implants: New Teeth in Just One Day", excerpt: "Learn how All-on-4 implant technology can give you a complete set of teeth in a single appointment.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600", date: "Dec 28, 2024", author: "Dr. Team", category: "Implants" },
  { id: "5", title: "Teeth Whitening: Professional vs At-Home â€” What Works?", excerpt: "Compare professional in-office whitening with at-home kits. Which gives better results?", image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=600", date: "Dec 20, 2024", author: "Dr. Team", category: "Cosmetic" },
  { id: "6", title: "Orthodontics for Adults: It's Never Too Late for Straight Teeth", excerpt: "Clear aligners and modern braces make orthodontic treatment comfortable and discreet for adults.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600", date: "Dec 15, 2024", author: "Dr. Team", category: "Orthodontics" },
];

export default function BlogPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-dark-950">
        <div className="container-custom text-center">
          <motion.span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="w-8 h-px bg-gold-400" />Blog<span className="w-8 h-px bg-gold-400" />
          </motion.span>
          <motion.h1 className="heading-xl text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Dental <span className="text-gradient">Insights</span>
          </motion.h1>
          <motion.p className="text-gray-400 max-w-2xl mx-auto text-lg font-light" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Expert dental tips, treatment guides, and oral health advice from Zircon Dental, Pune.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {blogPosts.map((post) => (
              <motion.article key={post.id} variants={staggerItem} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><FiUser className="w-3 h-3" />{post.author}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-dark-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold group-hover:gap-3 transition-all">
                      Read More <FiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}