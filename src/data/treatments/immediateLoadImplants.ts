import { TreatmentDetail } from "./types";

export const immediateLoadImplants: TreatmentDetail = {
    id: "1",
    title: "Immediate Load Implants",
    slug: "immediate-load-implants",
    category: "Implants",
    icon: "⚡",

    image: "/images/treatments/immediate-load-implants.png",

    heroImage: "/images/treatments/immediate-load-implants.png",

    tagline: "Walk in with missing teeth. Walk out with a confident smile the same day.",

    description:
        "Immediate Load Implants, also known as Same-Day Dental Implants or Teeth-in-a-Day, allow eligible patients to receive dental implants and fixed temporary teeth in a single visit.",

    longDescription:
        "Immediate Load Implants are an advanced implant technique that allows carefully selected patients to leave the clinic with fixed temporary teeth on the very same day as implant placement. Instead of waiting several months without teeth, you can enjoy immediate function, improved appearance, and restored confidence while the implants naturally fuse with your jawbone. Using 3D CBCT imaging, digital smile planning, and premium implant systems, our specialists determine whether immediate loading is the safest and most predictable option for you.",

    successRate: "98%",

    badge: "Same-Day Teeth",

    metaTitle:
        "Immediate Load Dental Implants in Pune | Same Day Teeth | Zircon Dental",

    metaDescription:
        "Get fixed teeth on the same day with Immediate Load Dental Implants in Wakad, Pune. Advanced digital planning, experienced implantologists & flexible EMI.",

    heroStats: [
        {
            label: "Success",
            value: "98%",
        },
        {
            label: "Treatment",
            value: "Same Day",
        },
        {
            label: "Recovery",
            value: "Fast",
        },
    ],

    showPriceComparison: true,

    priceComparison: [
        {
            country: "USA",
            flag: "🇺🇸",
            price: "$8,000 – $15,000",
        },
        {
            country: "UK",
            flag: "🇬🇧",
            price: "$7,000 – $13,000",
        },
        {
            country: "Australia",
            flag: "🇦🇺",
            price: "$8,500 – $14,000",
        },
        {
            country: "India (Average)",
            flag: "🇮🇳",
            price: "$2,500 – $5,000",
        },
    ],

    clinicPrice: {
        min: "$2,000",
        max: "$4,500",
        currency: "per arch",
        inrRange: "₹1,75,000 – ₹3,75,000",
    },

    showAssessment: true,

    assessmentQuestions: [
        {
            question: "How many teeth are you missing?",
            options: [
                "Single tooth",
                "Multiple teeth",
                "Full arch",
                "Complete mouth",
            ],
        },
        {
            question: "How long have the teeth been missing?",
            options: [
                "Less than 3 months",
                "3-12 months",
                "More than 1 year",
                "Many years",
            ],
        },
        {
            question: "Have you been told you have bone loss?",
            options: [
                "No",
                "Mild bone loss",
                "Severe bone loss",
                "Not sure",
            ],
        },
    ],

    whatIsIt: {
        title: "What Are Immediate Load Implants?",

        description:
            "Immediate Load Implants are an advanced dental implant procedure where implants are placed and fixed temporary teeth are attached within 24 hours. Instead of waiting several months without teeth, qualified patients can smile, speak, and eat with confidence immediately after treatment.",

        parts: [
            {
                name: "Titanium Implant",
                description:
                    "Acts as an artificial tooth root placed into the jawbone.",
            },
            {
                name: "Immediate Temporary Crown",
                description:
                    "A fixed temporary tooth attached on the same day.",
            },
            {
                name: "Final Zirconia Crown",
                description:
                    "Permanent crown placed after complete healing for long-term strength and aesthetics.",
            },
        ],
    },
    benefits: [
        {
            title: "Same-Day Smile",
            description:
                "Leave the clinic with fixed temporary teeth on the same day of implant placement.",
            icon: "⚡",
        },
        {
            title: "Immediate Confidence",
            description:
                "Smile, speak, and attend social events without waiting months for replacement teeth.",
            icon: "😁",
        },
        {
            title: "Preserves Jaw Bone",
            description:
                "Dental implants stimulate the jawbone and help prevent bone loss after tooth extraction.",
            icon: "🦴",
        },
        {
            title: "Natural Appearance",
            description:
                "Temporary and final restorations are designed to closely match your natural smile.",
            icon: "✨",
        },
        {
            title: "Comfortable Eating",
            description:
                "Enjoy improved chewing ability with fixed teeth instead of removable dentures.",
            icon: "🍎",
        },
        {
            title: "Long-Term Solution",
            description:
                "With proper care, implants can provide a durable and long-lasting replacement for missing teeth.",
            icon: "🏆",
        },
    ],

    solutions: [
        {
            title: "Single Tooth Immediate Implant",
            subtitle: "Replace one missing tooth",
            bestFor: "Patients missing a single tooth",
            price: "From ₹30,000",
            popular: true,
            features: [
                "Same-day temporary crown",
                "3D guided implant placement",
                "Natural aesthetics",
                "Lifetime implant support",
            ],
        },
        {
            title: "Multiple Immediate Implants",
            subtitle: "Restore several missing teeth",
            bestFor: "Multiple adjacent missing teeth",
            price: "From ₹75,000",
            features: [
                "Multiple implants",
                "Fixed temporary bridge",
                "Digital smile planning",
                "Premium implant systems",
            ],
        },
        {
            title: "Immediate Full Arch",
            subtitle: "Same-day complete smile",
            bestFor: "Patients with complete tooth loss",
            price: "From ₹2,50,000",
            features: [
                "Full arch restoration",
                "Immediate fixed teeth",
                "Advanced digital workflow",
                "Premium prosthesis",
            ],
        },
        {
            title: "Immediate Extraction & Implant",
            subtitle: "Extraction + Implant in one visit",
            bestFor: "Severely damaged teeth",
            price: "From ₹35,000",
            features: [
                "Tooth extraction",
                "Immediate implant placement",
                "Bone preservation",
                "Reduced treatment time",
            ],
        },
    ],

    process: [
        {
            title: "Consultation & CBCT Scan",
            duration: "45-60 minutes",
            description:
                "Comprehensive examination, digital X-rays, CBCT scan, and evaluation to determine eligibility for immediate loading.",
        },
        {
            title: "Digital Smile Planning",
            duration: "1-2 days",
            description:
                "Advanced digital planning ensures accurate implant positioning and ideal smile design.",
        },
        {
            title: "Implant Placement",
            duration: "60-120 minutes",
            description:
                "Implants are placed using minimally invasive guided surgery under local anesthesia.",
        },
        {
            title: "Temporary Teeth Placement",
            duration: "Same Day",
            description:
                "A fixed temporary crown or bridge is attached immediately after implant placement.",
        },
        {
            title: "Healing & Osseointegration",
            duration: "3-4 months",
            description:
                "The implant naturally fuses with the jawbone while you continue using your temporary teeth.",
        },
        {
            title: "Permanent Zirconia Crown",
            duration: "1 Week",
            description:
                "Your custom-crafted permanent zirconia crown or bridge is placed for long-term function and aesthetics.",
        },
    ],

    pricingPlans: [
        {
            name: "Single Immediate Implant",
            price: "₹30,000",
            unit: "per implant",
            features: [
                "Consultation",
                "CBCT Scan",
                "Immediate temporary crown",
                "Follow-up visits",
            ],
        },
        {
            name: "Premium Immediate Implant",
            price: "₹45,000",
            unit: "per implant",
            popular: true,
            features: [
                "Premium implant brand",
                "Digital guided surgery",
                "Immediate temporary crown",
                "Extended warranty",
            ],
        },
        {
            name: "Immediate Full Arch",
            price: "₹2,50,000",
            unit: "per arch",
            features: [
                "Complete fixed teeth",
                "Digital smile design",
                "Same-day loading",
                "Premium prosthesis",
            ],
        },
    ],

    emiStarting: "₹2,999/month",
    beforeAfterCases: [
        {
            title: "Single Tooth Replacement",
            description:
                "Missing front tooth restored with an immediate implant and temporary crown on the same day.",
        },
        {
            title: "Immediate Smile Makeover",
            description:
                "Multiple missing teeth replaced with fixed temporary teeth in one visit.",
        },
        {
            title: "Full Arch Immediate Loading",
            description:
                "Complete upper arch restored with immediate fixed teeth using advanced implant techniques.",
        },
    ],

    faqs: [
        {
            question: "What are Immediate Load Implants?",
            answer:
                "Immediate Load Implants are dental implants where a temporary fixed crown or bridge is attached within 24 hours of implant placement, allowing patients to leave with functional teeth on the same day.",
        },
        {
            question: "Is everyone eligible for same-day implants?",
            answer:
                "No. Eligibility depends on bone quality, bone quantity, overall oral health, and implant stability. A CBCT scan helps determine if immediate loading is suitable.",
        },
        {
            question: "Will I receive permanent teeth on the same day?",
            answer:
                "No. You'll receive high-quality temporary fixed teeth immediately. After 3–4 months of healing, they are replaced with permanent zirconia or ceramic crowns.",
        },
        {
            question: "Is the procedure painful?",
            answer:
                "The procedure is performed under local anesthesia, making it comfortable. Mild swelling or soreness may occur for a few days and is easily managed with medication.",
        },
        {
            question: "How long do Immediate Load Implants last?",
            answer:
                "With proper oral hygiene and regular dental check-ups, implants can last for decades, while the final crowns typically last 10–15 years or more.",
        },
        {
            question: "Can I eat normally after surgery?",
            answer:
                "Soft foods are recommended during the initial healing period. Once healing is complete and the final crowns are placed, you can comfortably enjoy most foods.",
        },
        {
            question: "How successful are Immediate Load Implants?",
            answer:
                "When performed on suitable candidates by experienced implant specialists, Immediate Load Implants have a success rate of over 98%.",
        },
    ],

    whyChooseUs:
        "Our implant specialists use advanced CBCT imaging, digital smile planning, computer-guided implant surgery, and internationally trusted implant systems to deliver safe, predictable, and natural-looking same-day smiles. Every treatment is customized to maximize long-term success and patient comfort.",

    duration: "Same-day procedure, final teeth in 3–4 months",

    recovery: "2–5 days",

    priceRange: "₹30,000 - ₹2,50,000",
};