import { TreatmentDetail } from "./types";

export const orthodontics: TreatmentDetail = {
    id: "7",
    title: "Orthodontics",
    slug: "orthodontics",
    category: "Orthodontics",
    icon: "😬",

    image:
        "/images/treatments/Orthodontics.png",
    heroImage:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920",

    tagline: "Straight teeth, perfect smile",

    description:
        "Braces, clear aligners, and lingual braces for children, teens, and adults.",

    longDescription:
        "Comprehensive orthodontic solutions using the latest technology to correct crooked teeth, bite problems, spacing, and jaw alignment while creating healthy, confident smiles.",

    successRate: "98%",
    badge: "All Ages Welcome",

    metaTitle: "Orthodontics | Braces & Clear Aligners",
    metaDescription:
        "Metal braces, ceramic braces, clear aligners, and lingual braces with personalized treatment plans.",

    heroStats: [
        { label: "Success", value: "98%" },
        { label: "Patients", value: "5000+" },
        { label: "Experience", value: "15+ Years" },
    ],

    showPriceComparison: false,
    priceComparison: [],

    clinicPrice: {
        min: "₹30,000",
        max: "₹2,00,000",
        currency: "Full Treatment",
        inrRange: "₹30,000 – ₹2,00,000",
    },

    showBrandComparison: false,
    brandPriceList: [],

    showAssessment: false,
    assessmentQuestions: [],

    whatIsIt: {
        title: "What Is Orthodontic Treatment?",
        description:
            "Orthodontic treatment straightens teeth, corrects bite problems, improves jaw alignment, and enhances both oral health and facial appearance using braces or clear aligners.",
    },

    benefits: [
        {
            title: "Straighter Smile",
            description:
                "Achieve beautifully aligned teeth for a confident smile.",
            icon: "😁",
        },
        {
            title: "Better Bite",
            description:
                "Correct overbite, underbite, crossbite, and open bite.",
            icon: "🦷",
        },
        {
            title: "Easy Cleaning",
            description:
                "Straight teeth are easier to brush and floss.",
            icon: "🪥",
        },
        {
            title: "Improved Speech",
            description:
                "Proper alignment improves pronunciation in some cases.",
            icon: "🗣️",
        },
        {
            title: "Jaw Health",
            description:
                "Reduces uneven pressure on teeth and jaw joints.",
            icon: "💪",
        },
        {
            title: "Long-Term Results",
            description:
                "Permanent improvements with proper retention.",
            icon: "⭐",
        },
    ],

    solutions: [
        {
            title: "Metal Braces",
            subtitle: "Traditional orthodontic treatment",
            bestFor: "Children & Teens",
            price: "From ₹30,000",
            features: [
                "Most affordable",
                "Highly effective",
                "Suitable for all cases",
                "Excellent durability",
            ],
        },
        {
            title: "Ceramic Braces",
            subtitle: "Tooth-colored braces",
            bestFor: "Adults",
            price: "From ₹45,000",
            features: [
                "Less noticeable",
                "Strong ceramic brackets",
                "Comfortable",
                "Great aesthetics",
            ],
        },
        {
            title: "Clear Aligners",
            subtitle: "Virtually invisible treatment",
            bestFor: "Working professionals",
            price: "From ₹80,000",
            popular: true,
            features: [
                "Removable",
                "Nearly invisible",
                "Comfortable",
                "Digital treatment planning",
            ],
        },
        {
            title: "Lingual Braces",
            subtitle: "Hidden behind teeth",
            bestFor: "Complete invisibility",
            price: "From ₹1,50,000",
            features: [
                "Invisible braces",
                "Custom-made",
                "Highly aesthetic",
                "Premium treatment",
            ],
        },
    ],

    process: [
        {
            title: "Consultation",
            duration: "45 mins",
            description:
                "Complete orthodontic examination with digital scans and X-rays.",
        },
        {
            title: "Treatment Planning",
            duration: "1 week",
            description:
                "Personalized treatment plan using digital technology.",
        },
        {
            title: "Appliance Placement",
            duration: "60-90 mins",
            description:
                "Braces fitted or aligners delivered.",
        },
        {
            title: "Regular Reviews",
            duration: "Every 4-6 weeks",
            description:
                "Adjustments and monitoring throughout treatment.",
        },
        {
            title: "Retention",
            duration: "Ongoing",
            description:
                "Retainers provided to maintain your new smile.",
        },
    ],

    pricingPlans: [
        {
            name: "Metal Braces",
            price: "₹30,000",
            unit: "Full Treatment",
            features: [
                "Complete treatment",
                "Regular adjustments",
                "Retainers included",
            ],
        },
        {
            name: "Clear Aligners",
            price: "₹80,000",
            unit: "Full Treatment",
            popular: true,
            features: [
                "Complete aligner set",
                "Digital monitoring",
                "Retainers included",
            ],
        },
        {
            name: "Lingual Braces",
            price: "₹1,50,000",
            unit: "Full Treatment",
            features: [
                "Hidden braces",
                "Premium treatment",
                "Retainers included",
            ],
        },
    ],

    emiStarting: "₹2,500/month",

    beforeAfterCases: [
        {
            title: "Crowded Teeth",
            description: "18-month orthodontic correction",
        },
        {
            title: "Deep Bite",
            description: "Clear aligner treatment",
        },
    ],
    faqs: [
        {
            question: "Which is better: braces or clear aligners?",
            answer:
                "Both are highly effective. Metal braces are ideal for complex orthodontic problems, while clear aligners are nearly invisible, removable, and preferred by adults and working professionals.",
        },
        {
            question: "How long does orthodontic treatment take?",
            answer:
                "Treatment usually takes between 6 and 24 months depending on the severity of the alignment problem and the treatment option selected.",
        },
        {
            question: "Are braces painful?",
            answer:
                "You may experience mild soreness for a few days after braces are placed or adjusted. This discomfort is temporary and can usually be managed with over-the-counter pain relief.",
        },
        {
            question: "Can adults get braces?",
            answer:
                "Absolutely. Orthodontic treatment is suitable for adults of all ages. Clear aligners and ceramic braces are especially popular among adult patients.",
        },
        {
            question: "How often are follow-up appointments needed?",
            answer:
                "Most patients visit every 4 to 6 weeks so the orthodontist can monitor progress and make necessary adjustments.",
        },
    ],

    whyChooseUs:
        "Our orthodontic specialists combine years of experience with digital smile planning, 3D scanning, and advanced orthodontic technology to create personalized treatment plans. We offer everything from traditional braces to premium clear aligners, ensuring the right solution for every patient.",

    duration: "6–24 months",

    recovery: "Mild soreness for 2–3 days after adjustments",

    priceRange: "₹30,000 - ₹2,00,000",
};