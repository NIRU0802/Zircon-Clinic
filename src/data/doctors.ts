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
    name: "Dr. XYZ",
    qualification: "MDS - Prosthodontics & Crown & Bridge",
    specialization: "Prosthodontist & Cosmetic Dental Specialist",
    image: "/images/doctors/dr-rohan.jpg",
    experience: "10+ Years",
    description:
      "Expert in smile design, crowns, bridges, veneers, and full mouth rehabilitation using CAD/CAM and digital dentistry systems.",
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
    name: "Dr. Rohan Mehta",
    title: "Prosthodontist & Cosmetic Dental Specialist",
    image: "/images/doctors/dr-rohan.jpg",
    experience: "10+",
    patients: "7K+",
    bio: "Dr. Rohan Mehta is a highly skilled prosthodontist specializing in smile design, crowns, bridges, and full-mouth rehabilitation. With over 12 years of experience, he focuses on aesthetic-driven dentistry using advanced CAD/CAM and digital smile design systems. His approach blends function with aesthetics for natural-looking results.",
    education: [
      "MDS - Prosthodontics & Crown & Bridge",
      "Fellow - International College of Prosthodontists",
      "Certification - Digital Smile Design (DSD), Spain",
      "Advanced Training - CAD/CAM Dentistry, USA",
    ],
    specializations: [
      "Smile Design",
      "Crowns & Bridges",
      "Full Mouth Rehabilitation",
      "Veneers",
      "CAD/CAM Dentistry",
    ],
    awards: [
      {
        title: "Best Aesthetic Dentist",
        org: "Indian Prosthodontic Society",
        year: "2023",
      },
      {
        title: "Excellence in Digital Dentistry",
        org: "Asia Dental Forum",
        year: "2022",
      },
      {
        title: "Rising Dental Specialist Award",
        org: "Pune Dental Council",
        year: "2021",
      },
    ],
  },
};