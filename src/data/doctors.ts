import { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Akansha Lakde",
    qualification: "MDS - Oral & Maxillofacial Surgery, Fellow ICOI",
    specialization: "Chief Dental Surgeon & Implantologist",
    image: "/images/doctors/dr-akansha.jpg",
    experience: "18+ Years",
    description:
      "Renowned oral and maxillofacial surgeon specializing in dental implants, full mouth rehabilitation, and same-day teeth. Pioneer in zygomatic and basal implant techniques.",
  },
];

// Extended doctor info for about page and doctor section
export const doctorDetailedInfo = {
  name: "Dr. Akansha Lakde",
  title: "Chief Dental Surgeon & Implantologist",
  image: "/images/doctors/dr-akansha.jpg",
  experience: "18+",
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
};