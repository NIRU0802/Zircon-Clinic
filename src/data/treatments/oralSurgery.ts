import { TreatmentDetail } from "./types";

export const oralSurgery: TreatmentDetail = {
  id: "9",
  title: "Oral Surgery",
  slug: "oral-surgery",
  category: "Surgery",
  icon: "🏥",

  image:
    "/images/treatments/oral-surgery.png",
  heroImage:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920",

  tagline: "Expert surgical care you can trust",

  description:
    "Wisdom teeth, jaw surgery, bone grafting, and complex extractions performed by experienced oral surgeons.",

  longDescription:
    "Our oral surgery department provides advanced surgical procedures using modern technology, CBCT imaging, minimally invasive techniques, and strict sterilization protocols for predictable outcomes and faster recovery.",

  successRate: "99%",
  badge: "Expert Oral Surgeons",

  metaTitle: "Oral Surgery | Wisdom Tooth Removal | Zircon Dental",

  metaDescription:
    "Advanced oral surgery including wisdom teeth removal, bone grafting, jaw surgery, and surgical extractions.",

  heroStats: [
    {
      label: "Success",
      value: "99%",
    },
    {
      label: "Recovery",
      value: "Fast",
    },
    {
      label: "Experience",
      value: "15+ Years",
    },
  ],

  showPriceComparison: false,
  priceComparison: [],

  clinicPrice: {
    min: "₹3,000",
    max: "₹50,000",
    currency: "per procedure",
    inrRange: "₹3,000 – ₹50,000",
  },

  showBrandComparison: false,
  brandPriceList: [],

  showAssessment: false,
  assessmentQuestions: [],

  whatIsIt: {
    title: "What is Oral Surgery?",
    description:
      "Oral surgery includes procedures such as wisdom tooth removal, impacted tooth surgery, bone grafting, sinus lifts, cyst removal, and corrective jaw surgery performed by experienced specialists.",
  },

  benefits: [
    {
      title: "Experienced Surgeons",
      description: "Treatment by skilled oral surgeons.",
      icon: "👨‍⚕️",
    },
    {
      title: "Modern Technology",
      description: "CBCT guided surgical planning.",
      icon: "🖥️",
    },
    {
      title: "Minimal Pain",
      description: "Advanced anesthesia techniques.",
      icon: "💉",
    },
    {
      title: "Fast Healing",
      description: "Modern surgical protocols reduce recovery time.",
      icon: "⚡",
    },
    {
      title: "High Success",
      description: "Evidence-based surgical techniques.",
      icon: "🏆",
    },
    {
      title: "Safe Procedures",
      description: "Strict sterilization and safety standards.",
      icon: "🛡️",
    },
  ],

  solutions: [
    {
      title: "Wisdom Tooth Removal",
      subtitle: "Safe surgical extraction",
      bestFor: "Impacted wisdom teeth",
      price: "From ₹5,000",
      popular: true,
      features: [
        "CBCT planning",
        "Minimal discomfort",
        "Quick recovery",
        "Experienced surgeon",
      ],
    },
    {
      title: "Bone Grafting",
      subtitle: "Jaw bone reconstruction",
      bestFor: "Dental implant preparation",
      price: "From ₹15,000",
      features: [
        "Bone augmentation",
        "Improved implant support",
        "High success",
        "Modern graft materials",
      ],
    },
    {
      title: "Sinus Lift",
      subtitle: "Upper jaw bone enhancement",
      bestFor: "Upper implant cases",
      price: "From ₹25,000",
      features: [
        "Advanced technique",
        "Safe procedure",
        "Implant preparation",
        "Minimal downtime",
      ],
    },
    {
      title: "Jaw Surgery",
      subtitle: "Corrective jaw procedures",
      bestFor: "Complex jaw conditions",
      price: "From ₹50,000",
      features: [
        "Specialist care",
        "Hospital support",
        "Comprehensive planning",
        "Long-term results",
      ],
    },
  ],

  process: [
    {
      title: "Consultation",
      duration: "30 Minutes",
      description:
        "Clinical examination with digital imaging and diagnosis.",
    },
    {
      title: "Treatment Planning",
      duration: "30 Minutes",
      description:
        "Customized surgical plan with patient counseling.",
    },
    {
      title: "Procedure",
      duration: "30-120 Minutes",
      description:
        "Surgery performed under local anesthesia or sedation.",
    },
    {
      title: "Recovery",
      duration: "3-7 Days",
      description:
        "Healing instructions and medications for comfortable recovery.",
    },
    {
      title: "Follow-up",
      duration: "1 Week",
      description:
        "Healing evaluation and post-operative care.",
    },
  ],

  pricingPlans: [
    {
      name: "Simple Extraction",
      price: "₹3,000",
      unit: "per tooth",
      features: [
        "Local anesthesia",
        "Quick procedure",
        "Post-op instructions",
      ],
    },
    {
      name: "Wisdom Tooth Surgery",
      price: "₹8,000",
      unit: "per tooth",
      popular: true,
      features: [
        "Impacted tooth removal",
        "Medicines included",
        "Follow-up visit",
      ],
    },
    {
      name: "Bone Grafting",
      price: "₹15,000",
      unit: "per site",
      features: [
        "Premium graft material",
        "Specialist surgeon",
        "Healing monitoring",
      ],
    },
  ],

  emiStarting: "₹1,500/month",

  beforeAfterCases: [
    {
      title: "Impacted Wisdom Tooth",
      description: "Successful surgical removal with smooth recovery.",
    },
    {
      title: "Bone Grafting",
      description: "Jaw prepared successfully for implants.",
    },
  ],

  faqs: [
    {
      question: "Is oral surgery painful?",
      answer:
        "No. Procedures are performed under local anesthesia or sedation, making treatment comfortable.",
    },
    {
      question: "How long is recovery?",
      answer:
        "Most patients recover within 3-7 days depending on the procedure.",
    },
    {
      question: "Will I need stitches?",
      answer:
        "Some procedures require dissolvable stitches which heal naturally.",
    },
    {
      question: "Can I eat after surgery?",
      answer:
        "Yes, soft foods are recommended for the first few days after surgery.",
    },
  ],

  whyChooseUs:
    "Our experienced oral surgeons combine advanced technology with patient-focused care to deliver safe, comfortable, and predictable surgical outcomes.",

  duration: "30 Minutes – 2 Hours",
  recovery: "3–7 Days",
  priceRange: "₹3,000 – ₹50,000",
};