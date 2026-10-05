import { Doctor } from "@/types";

// ===================== BASIC DOCTOR LIST =====================
export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Manoj Kumar Anarase",
    qualification:
      "BDS | Advanced Training in Full Mouth Rehabilitation",
    specialization: "Chief Dental Surgeon & Head Dentist",
    image: "/images/doctors/dr-manoj-anarase.webp",
    experience: "10+ Years",
    description:
      "Dr. Manoj Kumar Anarase is the Chief Dental Surgeon and Head Dentist at Zircon Dental & Implant Studio, Wakad, Pune. Known for his precision and patient-centric approach, he specializes in Full Mouth Rehabilitation, restoring complete smiles with advanced implant protocols and digital dentistry. He is also skilled in Dental Implants, Single-Visit Root Canal Treatment, Laser Dentistry, and Crown & Bridge Prosthodontics. His philosophy is simple: precision creates perfection, and every smile deserves the highest standard of care.",
  },
  {
    id: "2",
    name: "Dr. Aakanksha Lakde-Anarase",
    qualification:
      "MDS - Oral & Maxillofacial Surgery, Fellow ICOI",
    specialization: "Dental Surgeon & Cosmetic Dentist",
    image: "/images/doctors/dr-akansha-lakde.webp",
    experience: "5+ Years",
    description:
      "Dr. Aakanksha Lakde-Anarase is a dedicated Dental Surgeon and Cosmetic Dentist committed to creating healthy, confident, and beautiful smiles. With a gentle and patient-focused approach, she combines clinical expertise with an eye for aesthetics to deliver personalised dental care and natural-looking smile transformations. Her focus is on making every patient feel comfortable while providing precise, modern, and aesthetically driven dental treatment.",
  },
];

// ===================== DETAILED DOCTOR INFO =====================
export const doctorDetailedInfo = {
  doctor1: {
    name: "Dr. Manoj Kumar Anarase",
    title: "Chief Dental Surgeon & Head Dentist",
    image: "/images/doctors/dr-manoj-anarase.webp",
    experience: "10+",
    patients: "12K+",
    bio:
      "Dr. Manoj Kumar Anarase is the Chief Dental Surgeon and Head Dentist at Zircon Dental & Implant Studio, Wakad, Pune. Known for his precision and patient-centric approach, he specializes in Full Mouth Rehabilitation, restoring complete smiles with advanced implant protocols and digital dentistry. He is also skilled in Dental Implants, Single-Visit Root Canal Treatment, Laser Dentistry, and Crown & Bridge Prosthodontics. His philosophy is simple: precision creates perfection, and every smile deserves the highest standard of care.",
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

  doctor2: {
    name: "Dr. Aakanksha Lakde-Anarase",
    title: "Dental Surgeon & Cosmetic Dentist",
    image: "/images/doctors/dr-akansha-lakde.webp",
    experience: "5+",
    patients: "10K+",
    bio:
      "Dr. Aakanksha Lakde-Anarase is a dedicated Dental Surgeon and Cosmetic Dentist committed to creating healthy, confident, and beautiful smiles. With a gentle and patient-focused approach, she combines clinical expertise with an eye for aesthetics to deliver personalised dental care and natural-looking smile transformations. Her focus is on making every patient feel comfortable while providing precise, modern, and aesthetically driven dental treatment.",
    education: [
      "MDS - Oral & Maxillofacial Surgery",
      "Fellow - International Congress of Oral Implantologists (ICOI)",
    ],
    specializations: [
      "Cosmetic Dentistry",
      "Smile Design",
      "Aesthetic Dentistry",
      "Dental Implants",
      "Full Mouth Rehabilitation",
      "Oral & Maxillofacial Surgery",
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
};