"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FiAward, FiUsers, FiShield, FiHeart, FiStar, FiZap } from "react-icons/fi";

const features = [
  { icon: FiAward, title: "10+ Years of Expertise", description: "Internationally trained specialists with decades of combined experience in implants & cosmetic dentistry.", color: "from-primary-500 to-primary-400" },
  { icon: FiShield, title: "Advanced 3D Technology", description: "CBCT scanning, CAD/CAM, digital impressions & guided surgery for precise, predictable results.", color: "from-cta-600 to-blue-500" },
  { icon: FiHeart, title: "Personalized Treatment", description: "Every plan is customized to your unique needs. No cookie-cutter approaches — just genuine care.", color: "from-emerald-500 to-green-500" },
  { icon: FiUsers, title: "10,000+ Happy Patients", description: "A proven track record across Pune with 98.5% implant success rate and thousands of smile transformations.", color: "from-amber-500 to-yellow-500" },
  { icon: FiStar, title: "Premium Clinic Experience", description: "Luxurious facility at Wakad with private treatment rooms, relaxation lounge & child-friendly zone.", color: "from-violet-500 to-purple-500" },
  { icon: FiZap, title: "Same-Day Solutions", description: "Same-day crowns, immediate implants & single-visit root canals — get results faster.", color: "from-orange-500 to-amber-500" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative">
        <SectionTitle
          badge="Trusted by 10,000+ Patients"
          subtitle="Why Choose Us"
          title='Why Pune Trusts <span class="text-gradient">Zircon Dental</span> for Their Smile'
          description="We set the gold standard in dental care with an unwavering commitment to quality, safety, and patient satisfaction at our Wakad clinic."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem} className="group relative">
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-premium transition-all duration-500 h-full">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                <span className="absolute top-6 right-6 text-6xl font-heading font-bold text-gray-50 group-hover:text-primary-50 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;