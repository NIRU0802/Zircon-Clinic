import { Doctor } from "@/types";

// ===================== BASIC DOCTOR LIST =====================
export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Akansha Lakde",
    qualification: "MDS - Oral & Maxillofacial Surgery, Fellow ICOI",
    specialization: "Chief Dental Surgeon & Implantologist",
    image: "/images/doctors/dr-akansha.jpg",
    experience: "10+ Years",
    description:
      "Renowned oral and maxillofacial surgeon specializing in dental implants, full mouth rehabilitation, and same-day teeth. Pioneer in zygomatic and basal implant techniques.",
  },
  {
    id: "2",
    name: "Dr. Manoj Kumar Anarase",
    qualification: "BDS | Advanced Training in Full Mouth Rehabilitation",
    specialization: "Chief Dental Surgeon & Head Dentist",
    image: "/images/doctors/dr-manoj-anarase.jpg",
    experience: "10+ Years",
    description:
      "Expert in Full Mouth Rehabilitation, Dental Implants, Single Visit Root Canal Treatment, Laser Dentistry, Crown & Bridge Prosthodontics, Smile Rehabilitation, and Comprehensive Restorative Dentistry.",
  },
];

// ===================== DETAILED DOCTOR INFO =====================
export const doctorDetailedInfo = {
  doctor1: {
    name: "Dr. Akansha Lakde",
    title: "Chief Dental Surgeon & Implantologist",
    image: "/images/doctors/dr-akansha.jpg",
    experience: "10+",
    patients: "10K+",
    bio: "Dr. Akansha Lakde is a renowned oral and maxillofacial surgeon with 18+ years of experience in dental implants and full mouth rehabilitation. A pioneer in same-day dental implants, she has transformed thousands of smiles using cutting-edge technology and minimally invasive techniques. Her expertise in zygomatic and basal implants has helped patients who were previously told they couldn't get implants.",
    education: [
      "MDS - Oral & Maxillofacial Surgery",
      "Fellow - International Congress of Oral Implantologists (ICOI)",
      "Certified - Advanced Implantology, Germany",
      "Diploma - Lasers in Dentistry, USA",
    ],
    specializations: [
      "Dental Implants",
      "Full Mouth Rehabilitation",
      "Zygomatic Implants",
      "Cosmetic Dentistry",
      "Oral Surgery",
    ],
    awards: [
      {
        title: "Excellence in Implantology",
        org: "Indian Dental Association",
        year: "2023",
      },
      {
        title: "Best Dental Clinic Award",
        org: "Pune Healthcare Awards",
        year: "2022",
      },
      {
        title: "Innovation in Same-Day Teeth",
        org: "Global Dental Summit",
        year: "2021",
      },
    ],
  },

  doctor2: {
    name: "Dr. Manoj Kumar Anarase",
    title: "Chief Dental Surgeon & Head Dentist",
    image: "/images/doctors/dr-manoj-anarase.jpg",
    experience: "10+",
    patients: "12K+",
    bio: "Dr. Manoj Kumar Anarase is the Chief Dental Surgeon and Head Dentist at Zircon Dental & Implant Studio, Wakad, Pune. Renowned for his precision, meticulous attention to detail, and patient-centric approach, he is dedicated to restoring smiles with advanced, minimally invasive dental care. His primary expertise lies in Full Mouth Rehabilitation, where he successfully restores complete smiles in just 3 days using advanced implant protocols and modern digital dentistry. Dr. Anarase is also highly skilled in Dental Implants, Single-Visit Root Canal Treatment, Laser Dentistry, Complete Dentures, Crown & Bridge Prosthodontics, Smile Rehabilitation, and Comprehensive Restorative Dentistry. Known for handling complex dental cases with confidence and accuracy, he combines the latest technology with evidence-based treatment techniques to deliver long-lasting, functional, and aesthetic results. His calm demeanor, ethical practice, and commitment to excellence have earned the trust of patients from across India and abroad. Driven by a passion for continuous learning and innovation, Dr. Anarase strives to provide world-class dental care while ensuring every patient experiences comfort, transparency, and exceptional clinical outcomes. His philosophy is simple: precision creates perfection, and every smile deserves the highest standard of care.",
    education: [
      "Bachelor of Dental Surgery (BDS)",
      "Advanced Training in Full Mouth Rehabilitation",
      "Certified in Advanced Dental Implantology",
      "Advanced Certification in Laser Dentistry",
      "Continuing Education in Digital Dentistry & Restorative Dentistry",
    ],
    specializations: [
      "Full Mouth Rehabilitation",
      "Dental Implants",
      "Immediate Loading Implants",
      "Single Visit Root Canal Treatment",
      "Laser Dentistry",
      "Complete Dentures",
      "Crown & Bridge Prosthodontics",
      "Smile Rehabilitation",
      "Comprehensive Restorative Dentistry",
      "Digital Dentistry",
    ],
    awards: [
      {
        title: "Clinical Excellence in Restorative Dentistry",
        org: "Professional Recognition",
        year: "2023",
      },
      {
        title: "Advanced Implantology Certification",
        org: "Continuing Dental Education",
        year: "2022",
      },
      {
        title: "Excellence in Patient Care",
        org: "Zircon Dental & Implant Studio",
        year: "2021",
      },
    ],
  },
};