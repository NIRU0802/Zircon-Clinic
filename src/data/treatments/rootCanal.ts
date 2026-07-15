import { TreatmentDetail } from "./types";

export const rootCanal: TreatmentDetail = {
    id: "4",
    title: "Root Canal",
    slug: "root-canal",
    category: "General",
    icon: "🔬",
    image:
        "/images/treatments/root-canal.png",
    heroImage:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1920",

    tagline: "Save your natural teeth painlessly",

    description:
        "Pain-free root canal treatment using advanced rotary endodontics and microscopic precision.",

    longDescription:
        "Root canal treatment saves teeth that would otherwise need extraction due to infection or damage. Our endodontists use advanced rotary instruments and dental microscopes for exceptional precision. Modern root canal therapy has a success rate of over 95%.",

    successRate: "95%+",

    badge: "Pain-Free Treatment",

    metaTitle: "Root Canal Treatment | Zircon Dental",

    metaDescription:
        "Painless root canal treatment with advanced rotary endodontics. 95%+ success rate.",

    heroStats: [
        {
            label: "Pain-Free",
            value: "100%",
        },
        {
            label: "Success",
            value: "95%+",
        },
        {
            label: "Single Visit",
            value: "Available",
        },
    ],

    showPriceComparison: false,

    priceComparison: [],

    clinicPrice: {
        min: "₹5,000",
        max: "₹15,000",
        currency: "per tooth",
        inrRange: "₹5,000 – ₹15,000",
    },

    showAssessment: false,

    assessmentQuestions: [],

    whatIsIt: {
        title: "What Is Root Canal Treatment?",
        description:
            "Root canal treatment removes infected pulp tissue from inside your tooth, cleans and shapes the canals, and seals them to prevent future infection. This saves your natural tooth and eliminates pain. With modern technology, it's as comfortable as getting a filling.",

        parts: [
            {
                name: "Crown Restoration",
                description: "Protective cap placed after treatment",
            },
            {
                name: "Filling Material",
                description: "Biocompatible material seals the canals",
            },
            {
                name: "Cleaned Canals",
                description: "Infected tissue removed completely",
            },
        ],
    },

    benefits: [
        {
            title: "Saves Natural Tooth",
            description:
                "Preserve your natural tooth instead of extraction.",
            icon: "🦷",
        },
        {
            title: "Virtually Painless",
            description:
                "Modern anesthesia makes the procedure comfortable.",
            icon: "💉",
        },
        {
            title: "95%+ Success Rate",
            description:
                "Highly predictable and reliable results.",
            icon: "📊",
        },
        {
            title: "Single Visit Option",
            description:
                "Many cases completed in just one appointment.",
            icon: "⏰",
        },
        {
            title: "Prevents Spread",
            description:
                "Stops infection from spreading to other teeth.",
            icon: "🛡️",
        },
        {
            title: "Cost Effective",
            description:
                "Much cheaper than extraction plus implant.",
            icon: "💰",
        },
    ],
    solutions: [
        {
            title: "Single Visit RCT",
            subtitle: "Complete treatment in one appointment",
            bestFor: "Simple cases",
            price: "From ₹5,000",
            features: [
                "Completed in 60-90 mins",
                "Rotary endodontics",
                "Digital X-ray guided",
                "Immediate relief",
            ],
        },
        {
            title: "Multi-Visit RCT",
            subtitle: "For complex or infected cases",
            bestFor: "Complex infections",
            price: "From ₹8,000",
            features: [
                "Thorough disinfection",
                "Calcium hydroxide dressing",
                "Microscope-assisted",
                "Higher success in complex cases",
            ],
        },
        {
            title: "Re-Treatment",
            subtitle: "Redo of failed root canal",
            bestFor: "Previously treated teeth",
            price: "From ₹10,000",
            features: [
                "Removes old filling",
                "Re-cleans canals",
                "Advanced instruments",
                "Microscope visualization",
            ],
        },
        {
            title: "RCT + Crown",
            subtitle: "Complete root canal with crown",
            bestFor: "Best long-term outcome",
            price: "From ₹12,000",
            popular: true,
            features: [
                "Root canal treatment",
                "Zirconia/ceramic crown",
                "Full protection",
                "Best value package",
            ],
        },
    ],

    process: [
        {
            title: "Diagnosis & X-Ray",
            duration: "15 minutes",
            description:
                "Digital X-ray to assess infection and plan treatment.",
        },
        {
            title: "Anesthesia",
            duration: "5 minutes",
            description:
                "Effective numbing for a completely pain-free experience.",
        },
        {
            title: "Access & Cleaning",
            duration: "30-45 minutes",
            description:
                "Remove infected pulp and clean all root canals with rotary instruments.",
        },
        {
            title: "Shaping & Filling",
            duration: "15-20 minutes",
            description:
                "Shape canals and fill with biocompatible material.",
        },
        {
            title: "Crown Placement",
            duration: "Next visit",
            description:
                "Protective crown placed to restore tooth strength and appearance.",
        },
    ],

    pricingPlans: [
        {
            name: "Basic RCT",
            price: "₹5,000",
            unit: "per tooth",
            features: [
                "Single visit",
                "Rotary cleaning",
                "Post-op care",
            ],
        },
        {
            name: "RCT + Crown",
            price: "₹15,000",
            unit: "per tooth",
            popular: true,
            features: [
                "Root canal",
                "Zirconia crown",
                "2-year warranty",
            ],
        },
        {
            name: "Micro-Endodontics",
            price: "₹20,000",
            unit: "per tooth",
            features: [
                "Microscope assisted",
                "Complex cases",
                "5-year warranty",
            ],
        },
    ],

    emiStarting: "₹1,250/month",

    beforeAfterCases: [
        {
            title: "Infected Molar",
            description: "Saved with single visit RCT",
        },
        {
            title: "Front Tooth Trauma",
            description: "Root canal + ceramic crown",
        },
    ],
    faqs: [
        {
            question: "Is oral surgery painful?",
            answer:
                "No. Procedures are performed under local anesthesia or sedation, making treatment comfortable.",
        },
        {
            question: "How long does recovery take?",
            answer:
                "Recovery depends on the procedure. Simple extractions usually heal within a few days, while more complex surgeries may take one to two weeks.",
        },
        {
            question: "Will I need stitches?",
            answer:
                "Some procedures require dissolvable stitches that disappear naturally, while others may need removal during a follow-up visit.",
        },
        {
            question: "Can I eat after surgery?",
            answer:
                "Yes. Soft, cool foods are recommended for the first few days. Your surgeon will provide detailed dietary instructions.",
        },
        {
            question: "Do you provide sedation?",
            answer:
                "Yes. Local anesthesia, conscious sedation, and other options are available depending on your treatment and comfort level.",
        },
    ],

    whyChooseUs:
        "Our oral surgery team combines years of clinical expertise with advanced CBCT imaging, minimally invasive techniques, and strict sterilization protocols to deliver safe, comfortable, and predictable surgical outcomes. Every treatment plan is personalized to ensure faster healing and the best possible long-term results.",

    duration: "30 minutes – 2 hours",
    recovery: "3–7 days",
    priceRange: "₹3,000 – ₹50,000",
};