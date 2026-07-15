import { TreatmentDetail } from "./types";

export const advancedImplants: TreatmentDetail = {
  id: "3",
  title: "Advanced Implants",
  slug: "advanced-implants",
  category: "Implants",
  icon: "⚡",
  image:
    "/images/treatments/advanced-implants.png",
  heroImage:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920",

  tagline: "Full mouth restoration in a single day",

  description:
    "Advanced full mouth rehabilitation with All-on-4, All-on-6, and zygomatic implants for complex cases.",

  longDescription:
    "Advanced implant solutions are designed for patients who need full arch restoration or have complex dental situations including significant bone loss. Our All-on-4 and All-on-6 techniques allow us to restore an entire arch of teeth using just 4-6 strategically placed implants, often providing same-day teeth.",

  successRate: "97%",

  badge: "Advanced Solutions",

  metaTitle: "Advanced Dental Implants | All-on-4 | Zircon",

  metaDescription:
    "Full mouth rehabilitation with All-on-4, All-on-6 implants. Same-day teeth available.",

  heroStats: [
    {
      label: "Rating",
      value: "4.9",
    },
    {
      label: "Success",
      value: "97%",
    },
    {
      label: "Same Day",
      value: "Teeth",
    },
  ],

  showPriceComparison: true,

  priceComparison: [
    {
      country: "USA",
      flag: "🇺🇸",
      price: "$20,000 – $30,000",
    },
    {
      country: "UK",
      flag: "🇬🇧",
      price: "$15,000 – $25,000",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      price: "$18,000 – $28,000",
    },
    {
      country: "India (Average)",
      flag: "🇮🇳",
      price: "$5,000 – $8,000",
    },
  ],

  clinicPrice: {
    min: "$4,000",
    max: "$7,000",
    currency: "per arch",
    inrRange: "₹3,50,000 – ₹6,00,000",
  },

  showAssessment: true,

  assessmentQuestions: [
    {
      question: "How many teeth are you missing?",
      options: [
        "Multiple teeth",
        "Most teeth",
        "All teeth (one arch)",
        "All teeth (both arches)",
      ],
    },
    {
      question: "Are you wearing dentures currently?",
      options: [
        "No",
        "Partial dentures",
        "Full dentures",
        "Dentures but unhappy",
      ],
    },
    {
      question: "Have you been told you lack bone?",
      options: [
        "No",
        "Yes, mild bone loss",
        "Yes, significant bone loss",
        "Not sure",
      ],
    },
  ],

  whatIsIt: {
    title: "What Are Advanced Implant Procedures?",
    description:
      "Advanced implant procedures like All-on-4 and All-on-6 revolutionize full-mouth rehabilitation. Using strategically angled implants, we can restore an entire arch of teeth—even in patients with significant bone loss—often with same-day results.",

    parts: [
      {
        name: "Full Arch Bridge",
        description: "Complete set of teeth on implants",
      },
      {
        name: "Strategic Implants",
        description: "4-6 implants placed at optimal angles",
      },
      {
        name: "Immediate Loading",
        description: "Temporary teeth placed same day",
      },
    ],
  },

  benefits: [
    {
      title: "Same-Day Teeth",
      description:
        "Walk out with a complete smile on the day of surgery.",
      icon: "⚡",
    },
    {
      title: "No Bone Grafting",
      description:
        "Special angulation techniques avoid the need for bone grafts in most cases.",
      icon: "🦴",
    },
    {
      title: "Full Arch in 4 Implants",
      description:
        "An entire arch of teeth supported by just 4 strategically placed implants.",
      icon: "🔧",
    },
    {
      title: "Cost Effective",
      description:
        "Significantly more affordable than replacing each tooth individually.",
      icon: "💰",
    },
    {
      title: "Permanent Solution",
      description:
        "Fixed, non-removable teeth that function like natural teeth.",
      icon: "🏆",
    },
    {
      title: "Life Changing",
      description:
        "Dramatic improvement in quality of life, confidence, and nutrition.",
      icon: "✨",
    },
  ],

  solutions: [
    {
      title: "All-on-4",
      subtitle: "Full arch on 4 implants",
      bestFor: "Complete tooth loss (one arch)",
      price: "From ₹4,50,000",
      popular: true,
      features: [
        "4 implants per arch",
        "Same-day temporary teeth",
        "No bone grafting usually needed",
        "Lifetime warranty",
      ],
    },
    {
      title: "All-on-6",
      subtitle: "Full arch on 6 implants",
      bestFor: "Greater stability needed",
      price: "From ₹5,50,000",
      features: [
        "6 implants per arch",
        "Maximum stability",
        "Ideal for larger arches",
        "Premium zirconia bridge",
      ],
    },
    {
      title: "Zygomatic Implants",
      subtitle: "For severe bone loss cases",
      bestFor: "Patients with severe upper jaw bone loss",
      price: "From ₹6,00,000",
      features: [
        "No bone grafting required",
        "Anchored in cheekbone",
        "Immediate loading possible",
        "Solution when others fail",
      ],
    },
    {
      title: "Full Mouth Rehabilitation",
      subtitle: "Both arches restored",
      bestFor: "Complete mouth restoration",
      price: "From ₹8,00,000",
      features: [
        "Both upper & lower arches",
        "Complete smile makeover",
        "Premium materials",
        "VIP care package",
      ],
    },
  ],

  process: [
    {
      title: "3D Evaluation & Planning",
      duration: "90 minutes",
      description:
        "Complete 3D CBCT scan and digital planning for precise implant positioning.",
    },
    {
      title: "Digital Smile Preview",
      duration: "1 week",
      description:
        "See your new smile before surgery with digital design technology.",
    },
    {
      title: "Surgery Day",
      duration: "2-4 hours",
      description:
        "All implants placed and temporary teeth fitted in a single appointment.",
    },
    {
      title: "Healing Phase",
      duration: "3-4 months",
      description:
        "Implants fuse with bone while you enjoy your temporary teeth.",
    },
    {
      title: "Final Prosthesis",
      duration: "2 weeks",
      description:
        "Premium zirconia bridge crafted and fitted for your permanent smile.",
    },
    {
      title: "Lifetime Care",
      duration: "Ongoing",
      description:
        "Annual checkups and maintenance to keep your smile perfect.",
    },
  ],

  pricingPlans: [
    {
      name: "All-on-4 (Single Arch)",
      price: "₹4,50,000",
      unit: "per arch",
      features: [
        "4 implants + bridge",
        "Same-day teeth",
        "3-year warranty",
      ],
    },
    {
      name: "All-on-6 (Single Arch)",
      price: "₹5,50,000",
      unit: "per arch",
      popular: true,
      features: [
        "6 implants + bridge",
        "Maximum stability",
        "5-year warranty",
      ],
    },
    {
      name: "Full Mouth (Both Arches)",
      price: "₹8,00,000",
      unit: "complete",
      features: [
        "Both arches restored",
        "Premium zirconia",
        "Lifetime warranty",
      ],
    },
  ],

  emiStarting: "₹8,500/month",

  beforeAfterCases: [
    {
      title: "All-on-4 Restoration",
      description: "Complete upper arch restoration",
    },
    {
      title: "Full Mouth Rehab",
      description: "Both arches with All-on-6",
    },
    {
      title: "Zygomatic Case",
      description: "Severe bone loss solution",
    },
  ],

  faqs: [
    {
      question: "What is All-on-4?",
      answer:
        "All-on-4 is a revolutionary technique where a full arch of teeth is supported by just 4 implants placed at strategic angles, providing maximum stability with minimal surgery.",
    },
    {
      question: "Can I get teeth the same day?",
      answer:
        "Yes. Most patients receive fixed temporary teeth on the same day as surgery.",
    },
    {
      question: "What if I have bone loss?",
      answer:
        "Advanced techniques like tilted implants and zygomatic implants often eliminate the need for bone grafting.",
    },
    {
      question: "How long does surgery take?",
      answer:
        "Typically 2–4 hours per arch depending on complexity.",
    },
    {
      question: "How long is recovery?",
      answer:
        "Most patients return to normal activities within one week.",
    },
  ],

  whyChooseUs:
    "Our advanced implant team has performed hundreds of All-on-4 and full-mouth rehabilitation cases using 3D-guided surgery and premium implant systems.",

  duration: "Same-day teeth, final in 3–4 months",

  recovery: "5–7 days",

  priceRange: "₹4,50,000 - ₹8,00,000",
};