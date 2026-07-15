import { TreatmentDetail } from "./types";

export const childDentistry: TreatmentDetail = {
    id: "12",

    title: "Child Dentistry",

    slug: "child-dentistry",

    category: "Children",

    icon: "🧒",

    image: "/images/treatments/child-dentistry.png",

    heroImage: "/images/treatments/child-dentistry.png",

    tagline:
        "Gentle, painless & child-friendly dental care for healthy growing smiles.",

    description:
        "Comprehensive child dentistry services for infants, children, and teenagers in a safe, friendly, and comfortable environment.",

    longDescription:
        "Our Child Dentistry department provides complete dental care for infants, children, and teenagers. We focus on preventive dentistry, early diagnosis, painless treatments, and healthy oral development. From routine dental check-ups and fluoride treatments to tooth-coloured fillings, pulpotomy, space maintainers, emergency dental care, and minor oral surgical procedures, our experienced dentists ensure every child receives personalized care in a comfortable, child-friendly environment.",

    successRate: "99%",

    badge: "Kids Friendly",

    metaTitle:
        "Best Child Dentistry in Wakad, Pune | Kids Dental Clinic | Zircon Dental",

    metaDescription:
        "Looking for Child Dentistry in Wakad, Pune? Zircon Dental provides gentle children's dental care including check-ups, fluoride treatment, fillings, pulpotomy, space maintainers & emergency dental care.",

    heroStats: [
        {
            label: "Children Treated",
            value: "1000+",
        },
        {
            label: "Success Rate",
            value: "99%",
        },
        {
            label: "Care",
            value: "Pain-Free",
        },
    ],

    showPriceComparison: false,

    priceComparison: [],

    clinicPrice: {
        min: "$10",
        max: "$120",
        currency: "per procedure",
        inrRange: "₹500 – ₹10,000",
    },

    showAssessment: true,

    assessmentQuestions: [
        {
            question: "What is your child's age?",
            options: [
                "0–3 Years",
                "4–7 Years",
                "8–12 Years",
                "13–16 Years",
            ],
        },
        {
            question: "What is the main concern?",
            options: [
                "Tooth Pain",
                "Cavity",
                "Broken Tooth",
                "Routine Check-up",
            ],
        },
        {
            question: "Has your child visited a dentist before?",
            options: [
                "Yes",
                "No",
                "Not Sure",
            ],
        },
    ],

    whatIsIt: {
        title: "What is Pediatric Dentistry?",

        description:
            "Pediatric Dentistry is a specialized branch of dentistry dedicated to the oral health of infants, children, and teenagers. It focuses on preventive care, early diagnosis, treatment of dental problems, and educating parents to ensure healthy smiles throughout childhood.",

        parts: [
            {
                name: "Preventive Care",
                description:
                    "Regular dental check-ups, fluoride application, and dental sealants.",
            },
            {
                name: "Restorative Care",
                description:
                    "Child-friendly tooth-colored fillings, crowns, and pulp therapy.",
            },
            {
                name: "Growth Monitoring",
                description:
                    "Monitoring jaw development, eruption of teeth, and orthodontic needs.",
            },
        ],
    },
    benefits: [
        {
            title: "Child-Friendly Environment",
            description:
                "A warm, welcoming clinic designed to make every child feel relaxed and comfortable.",
            icon: "🧸",
        },
        {
            title: "Painless Treatment",
            description:
                "Gentle techniques and modern technology ensure a stress-free dental experience.",
            icon: "😊",
        },
        {
            title: "Early Detection",
            description:
                "Identify cavities, bite problems, and oral issues before they become serious.",
            icon: "🔍",
        },
        {
            title: "Healthy Smile Development",
            description:
                "Monitor the growth of teeth and jaws for proper oral development.",
            icon: "😁",
        },
        {
            title: "Preventive Care",
            description:
                "Fluoride treatments and sealants help protect children's teeth from decay.",
            icon: "🛡️",
        },
        {
            title: "Parent Education",
            description:
                "Expert guidance on brushing, diet, thumb sucking, and oral hygiene habits.",
            icon: "👨‍👩‍👧",
        },
    ],

    solutions: [
        {
            title: "Routine Dental Check-up",
            subtitle: "Preventive oral examination",
            bestFor: "Every child (6-monthly visits)",
            price: "From ₹500",
            popular: true,
            features: [
                "Complete oral examination",
                "Digital diagnosis",
                "Cleaning advice",
                "Growth monitoring",
            ],
        },
        {
            title: "Fluoride Treatment",
            subtitle: "Extra protection against cavities",
            bestFor: "Children with cavity risk",
            price: "From ₹800",
            features: [
                "Professional fluoride application",
                "Strengthens enamel",
                "Quick & painless",
                "Reduces cavity risk",
            ],
        },
        {
            title: "Tooth-Coloured Fillings",
            subtitle: "Natural-looking cavity treatment",
            bestFor: "Milk & permanent teeth",
            price: "From ₹1,500",
            features: [
                "Composite fillings",
                "Natural appearance",
                "Mercury-free",
                "Single sitting",
            ],
        },
        {
            title: "Pulpotomy & Stainless Steel Crown",
            subtitle: "Save severely decayed baby teeth",
            bestFor: "Deep cavities in milk teeth",
            price: "From ₹3,500",
            features: [
                "Pain relief",
                "Preserves baby tooth",
                "Durable crown",
                "Child-friendly procedure",
            ],
        },
        {
            title: "Space Maintainer",
            subtitle: "Maintain space for permanent teeth",
            bestFor: "Early loss of baby teeth",
            price: "From ₹4,000",
            features: [
                "Custom appliance",
                "Prevents crowding",
                "Easy maintenance",
                "Improves alignment",
            ],
        },
        {
            title: "Emergency Pediatric Dental Care",
            subtitle: "Immediate treatment for dental injuries",
            bestFor: "Broken or knocked-out teeth",
            price: "Consultation Required",
            features: [
                "Same-day appointment",
                "Pain management",
                "Trauma care",
                "Emergency treatment",
            ],
        },
    ],

    process: [
        {
            title: "Friendly Consultation",
            duration: "20-30 minutes",
            description:
                "Our pediatric dentist builds trust with your child before beginning the examination.",
        },
        {
            title: "Dental Examination",
            duration: "15 minutes",
            description:
                "A complete oral examination with digital X-rays if required.",
        },
        {
            title: "Treatment Planning",
            duration: "15 minutes",
            description:
                "We explain the condition and recommend the most suitable treatment to parents.",
        },
        {
            title: "Comfortable Treatment",
            duration: "30-90 minutes",
            description:
                "Gentle, minimally invasive treatment using child-friendly techniques.",
        },
        {
            title: "Preventive Guidance",
            duration: "10 minutes",
            description:
                "Parents receive guidance on brushing, diet, and cavity prevention.",
        },
        {
            title: "Regular Follow-up",
            duration: "Every 6 months",
            description:
                "Routine check-ups help monitor healthy growth and prevent future dental issues.",
        },
    ],

    pricingPlans: [
        {
            name: "Kids Dental Check-up",
            price: "₹500",
            unit: "visit",
            features: [
                "Consultation",
                "Oral examination",
                "Treatment advice",
                "Digital records",
            ],
        },
        {
            name: "Preventive Care Package",
            price: "₹2,000",
            unit: "package",
            popular: true,
            features: [
                "Dental check-up",
                "Fluoride application",
                "Oral hygiene education",
                "6-month follow-up",
            ],
        },
        {
            name: "Complete Pediatric Care",
            price: "Custom Treatment Plan",
            unit: "as required",
            features: [
                "Restorative treatment",
                "Emergency care",
                "Preventive procedures",
                "Long-term follow-up",
            ],
        },
    ],

    emiStarting: "Affordable treatment plans available",
    beforeAfterCases: [
        {
            title: "Cavity-Free Smile",
            description:
                "Early cavities treated with tooth-colored fillings, restoring healthy teeth and confidence.",
        },
        {
            title: "Pulpotomy Success",
            description:
                "Deeply decayed baby tooth saved with pulpotomy and a stainless steel crown.",
        },
        {
            title: "Healthy Smile Journey",
            description:
                "Regular preventive dental visits helping children maintain healthy teeth as they grow.",
        },
    ],

    faqs: [
        {
            question: "When should my child first visit the dentist?",
            answer:
                "The first dental visit is recommended by the child's first birthday or within six months after the first tooth erupts.",
        },
        {
            question: "How often should children have dental check-ups?",
            answer:
                "Routine dental check-ups every six months help prevent cavities and monitor healthy tooth development.",
        },
        {
            question: "Are dental X-rays safe for children?",
            answer:
                "Yes. We use modern low-radiation digital X-rays only when clinically necessary, making them safe for children.",
        },
        {
            question: "What causes cavities in children?",
            answer:
                "Frequent sugary foods, poor brushing habits, prolonged bottle feeding, and inadequate oral hygiene are the most common causes.",
        },
        {
            question: "What is a pulpotomy?",
            answer:
                "A pulpotomy is a child-friendly procedure that removes infected pulp from a baby tooth while preserving the remaining healthy tooth until it naturally falls out.",
        },
        {
            question: "How can I prevent cavities in my child?",
            answer:
                "Good brushing habits, fluoride toothpaste, regular dental visits, healthy eating, and fluoride treatments significantly reduce the risk of cavities.",
        },
        {
            question: "Does pediatric dental treatment hurt?",
            answer:
                "Our pediatric dentists use gentle techniques, child-friendly communication, and modern anesthesia to make treatment as comfortable and stress-free as possible.",
        },
    ],

    whyChooseUs:
        "Our pediatric dental team provides compassionate, child-focused care in a fun and welcoming environment. Using modern technology, painless techniques, and preventive dentistry, we help children build healthy smiles and positive dental experiences that last a lifetime.",

    duration: "20–90 minutes depending on treatment",

    recovery: "Most children return to normal activities immediately or within 24 hours",

    priceRange: "₹500 - ₹10,000",
};