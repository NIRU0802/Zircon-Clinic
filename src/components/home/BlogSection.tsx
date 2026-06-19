"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";
import { BlogPost } from "@/types";

const blogPosts: BlogPost[] = [
  { id: "1", title: "Complete Guide to Dental Implants in Pune (2026)", excerpt: "Everything you need to know about dental implants — costs, procedure, recovery & why Wakad is Pune's implant hub.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600", date: "Jan 15, 2025", author: "Dr. Team", category: "Implants", slug: "dental-implants-guide-pune" },
  { id: "2", title: "Top 5 Signs You Need a Root Canal Treatment", excerpt: "Don't ignore tooth pain! Learn warning signs that indicate you may need root canal treatment at our Wakad clinic.", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600", date: "Jan 10, 2025", author: "Dr. Team", category: "General", slug: "root-canal-signs" },
  { id: "3", title: "Smile Design: Transform Your Smile at Zircon Dental", excerpt: "Discover how digital smile design technology can give you the perfect smile you've always wanted.", image: "https://images.unsplash.com/photo-1581585095203-c0c5c6608e72?q=80&w=600", date: "Jan 5, 2025", author: "Dr. Team", category: "Cosmetic", slug: "smile-design-pune" },
];

const BlogSection = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          subtitle="Dental Blog"
          title='Latest <span class="text-gradient">Insights</span> & Oral Health Tips'
          description="Expert dental advice, treatment guides, and oral health tips from the specialists at Zircon Dental, Wakad, Pune."
        />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {blogPosts.map((post) => (
            <motion.article key={post.id} variants={staggerItem} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">{post.category}</span></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><FiUser className="w-3 h-3" />{post.author}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-dark-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold group-hover:gap-3 transition-all">Read More <FiArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;