export interface TreatmentFaq {
    question: string;
    answer: string;
  }
  
  export interface ImplantSolution {
    title: string;
    subtitle: string;
    bestFor: string;
    price: string;
    features: string[];
    popular?: boolean;
  }
  
  export interface ProcessStep {
    title: string;
    duration: string;
    description: string;
  }
  
  export interface PriceComparisonItem {
    country: string;
    flag: string;
    price: string;
  }
  
  export interface TreatmentPlan {
    name: string;
    price: string;
    unit: string;
    features: string[];
    popular?: boolean;
  }
  
  export interface BrandPriceItem {
    brand: string;
    type: string;
    priceINR: string;
    priceUSD: string;
    warranty: string;
    tier: "budget" | "standard" | "premium";
  }
  
  export interface TreatmentDetail {
    id: string;
    title: string;
    slug: string;
    category: string;
    icon: string;
    image: string;
    heroImage: string;
    tagline: string;
    description: string;
    longDescription: string;
    successRate: string;
   badge: string;
    metaTitle: string;
    metaDescription: string;
  
    heroStats: {
      label: string;
      value: string;
    }[];
  
    showPriceComparison: boolean;
    priceComparison: PriceComparisonItem[];
  
    clinicPrice: {
      min: string;
      max: string;
      currency: string;
      inrRange: string;
    };
  
    showBrandComparison?: boolean;
    brandPriceList?: BrandPriceItem[];
  
    showAssessment: boolean;
  
    assessmentQuestions: {
      question: string;
      options: string[];
    }[];
  
    whatIsIt: {
      title: string;
      description: string;
      parts?: {
        name: string;
        description: string;
      }[];
    };
  
    benefits: {
      title: string;
      description: string;
      icon: string;
    }[];
  
    solutions: ImplantSolution[];
  
    process: ProcessStep[];
  
    pricingPlans: TreatmentPlan[];
  
    emiStarting: string;
  
    beforeAfterCases: {
      title: string;
      description: string;
    }[];
  
    faqs: TreatmentFaq[];
  
    whyChooseUs: string;
  
    duration: string;
    recovery: string;
    priceRange: string;
  }