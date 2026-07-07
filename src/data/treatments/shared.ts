import {
    TreatmentFaq,
    ImplantSolution,
    ProcessStep,
    TreatmentPlan,
  } from "./types";
  
  export const commonImplantFaqs: TreatmentFaq[] = [
    {
      question: "How much do dental implants cost?",
      answer:
        "Dental implant treatment starts from ₹25,000 per implant. The final cost depends on the implant brand, bone condition, and restoration selected.",
    },
    {
      question: "Is implant surgery painful?",
      answer:
        "No. Implant surgery is performed under local anesthesia and is generally more comfortable than most patients expect. Mild soreness for a few days is normal.",
    },
    {
      question: "How long do implants last?",
      answer:
        "With proper oral hygiene and regular dental check-ups, implants can last decades and often a lifetime.",
    },
    {
      question: "Can diabetics get implants?",
      answer:
        "Yes. Patients with well-controlled diabetes are usually excellent candidates for implant treatment after proper evaluation.",
    },
  ];
  
  export const standardImplantProcess: ProcessStep[] = [
    {
      title: "Consultation & 3D Scan",
      duration: "45–60 mins",
      description:
        "Clinical examination, CBCT scan and treatment planning.",
    },
    {
      title: "Implant Placement",
      duration: "30–90 mins",
      description:
        "Titanium implant is precisely placed into the jawbone.",
    },
    {
      title: "Healing Phase",
      duration: "3–6 Months",
      description:
        "Natural bone integrates with the implant for long-term stability.",
    },
    {
      title: "Final Crown",
      duration: "1 Visit",
      description:
        "Custom ceramic crown is attached to complete your smile.",
    },
  ];
  
  export const singleImplantSolution: ImplantSolution = {
    title: "Single Tooth Implant",
    subtitle: "Permanent replacement for one missing tooth",
    bestFor: "Single missing tooth",
    price: "From ₹25,000",
    features: [
      "Natural appearance",
      "Titanium implant",
      "Ceramic crown",
      "Preserves jawbone",
    ],
  };
  
  export const bridgeImplantSolution: ImplantSolution = {
    title: "Implant Bridge",
    subtitle: "Replace multiple missing teeth",
    bestFor: "2–4 missing teeth",
    price: "From ₹90,000",
    features: [
      "Fewer implants required",
      "Strong & stable",
      "Natural chewing",
      "Long-lasting solution",
    ],
  };
  
  export const allOn4Solution: ImplantSolution = {
    title: "All-on-4",
    subtitle: "Complete fixed teeth on 4 implants",
    bestFor: "Full arch replacement",
    price: "From ₹4,50,000",
    popular: true,
    features: [
      "Same-day temporary teeth",
      "Only 4 implants",
      "Fixed prosthesis",
      "Premium smile restoration",
    ],
  };
  
  export const implantPricingPlans: TreatmentPlan[] = [
    {
      name: "Single Implant",
      price: "₹25,000",
      unit: "Per Implant",
      features: [
        "Titanium implant",
        "Abutment",
        "Ceramic crown",
      ],
    },
    {
      name: "Premium Implant",
      price: "₹45,000",
      unit: "Per Implant",
      popular: true,
      features: [
        "Premium implant system",
        "Lifetime support",
        "Digital planning",
      ],
    },
    {
      name: "All-on-4",
      price: "₹4,50,000",
      unit: "Per Arch",
      features: [
        "Complete fixed bridge",
        "4 implants",
        "Temporary teeth included",
      ],
    },
  ];