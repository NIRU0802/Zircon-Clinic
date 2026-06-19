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

  // Hero stats
  heroStats: { label: string; value: string }[];

  // Price comparison
  showPriceComparison: boolean;
  priceComparison: PriceComparisonItem[];
  clinicPrice: { min: string; max: string; currency: string; inrRange: string };

  // Candidate assessment
  showAssessment: boolean;
  assessmentQuestions: { question: string; options: string[] }[];

  // What is it section
  whatIsIt: {
    title: string;
    description: string;
    parts?: { name: string; description: string }[];
  };

  // Benefits
  benefits: { title: string; description: string; icon: string }[];

  // Solutions/Options
  solutions: ImplantSolution[];

  // Process
  process: ProcessStep[];

  // Pricing plans
  pricingPlans: TreatmentPlan[];
  emiStarting: string;

  // Before After
  beforeAfterCases: { title: string; description: string }[];

  // FAQs
  faqs: TreatmentFaq[];

  // Why choose us points
  whyChooseUs: string;

  // Additional info
  duration: string;
  recovery: string;
  priceRange: string;
}

export const treatments: TreatmentDetail[] = [
  {
    id: "1",
    title: "Dental Implants",
    slug: "dental-implants",
    category: "Implants",
    icon: "🦷",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1920",
    tagline: "Confident smile with dental implants",
    description: "Best Dental Implants — Restore Your Smile with permanent, natural-looking dental implants.",
    longDescription: "Dental implants are the gold standard for tooth replacement, providing a permanent solution that mimics the natural structure of your teeth. At Esthetica Dental, we've placed thousands of implants with a 98.5% success rate. A dental implant consists of three parts: a titanium post that's surgically placed into your jawbone, an abutment that connects the post to your new tooth, and a custom-crafted crown that looks and functions like your natural tooth. Unlike dentures or bridges, implants replace the entire tooth root, stimulating your jawbone and preventing the bone loss that typically occurs with missing teeth.",
    successRate: "98.5%",
    badge: "#1 Implant Centre",
    metaTitle: "Best Dental Implants | Esthetica Dental",
    metaDescription: "Get world-class dental implants starting at ₹25,000 with 98.5% success rate, lifetime warranty, and 0% EMI options.",
    heroStats: [
      { label: "Rating", value: "4.9" },
      { label: "Success", value: "98.5%" },
      { label: "Years Exp.", value: "15+" },
    ],
    showPriceComparison: true,
    priceComparison: [
      { country: "USA", flag: "🇺🇸", price: "$3,000 – $5,000" },
      { country: "UK", flag: "🇬🇧", price: "$2,000 – $4,500" },
      { country: "Australia", flag: "🇦🇺", price: "$2,000 – $4,000" },
      { country: "India (Average)", flag: "🇮🇳", price: "$450 – $700" },
    ],
    clinicPrice: { min: "$300", max: "$800", currency: "per implant", inrRange: "₹24,900 – ₹66,400" },
    showAssessment: true,
    assessmentQuestions: [
      {
        question: "How many teeth are you currently missing?",
        options: ["None - I'm just exploring", "1-2 teeth", "3-5 teeth", "6 or more / Full arch"],
      },
      {
        question: "How long have your teeth been missing?",
        options: ["Less than 6 months", "6-12 months", "1-3 years", "More than 3 years"],
      },
      {
        question: "Are you currently wearing dentures?",
        options: ["No", "Yes, partial dentures", "Yes, full dentures", "Yes, but they're uncomfortable"],
      },
      {
        question: "Do you have any gum disease?",
        options: ["No", "Mild", "Moderate", "Severe / Not sure"],
      },
      {
        question: "Do you smoke?",
        options: ["No", "Occasionally", "Yes, regularly", "Former smoker"],
      },
    ],
    whatIsIt: {
      title: "What Are Dental Implants?",
      description: "Dental implants are the gold standard for tooth replacement worldwide, providing a permanent solution that mimics the natural structure of your teeth. At Esthetica Dental, we've placed thousands of implants with a 98.5% success rate. A dental implant consists of three parts: a titanium post that's surgically placed into your jawbone, an abutment that connects the post to your new tooth, and a custom-crafted crown that looks and functions like your natural tooth.",
      parts: [
        { name: "Crown", description: "Custom porcelain tooth that looks natural" },
        { name: "Abutment", description: "Connects implant to the crown" },
        { name: "Implant", description: "Titanium post fused with jawbone" },
      ],
    },
    benefits: [
      { title: "Natural Appearance", description: "Implants look and feel like your own teeth, blending perfectly with your natural smile.", icon: "😁" },
      { title: "Preserves Jawbone", description: "Implants stimulate bone growth, preventing the bone loss that occurs with missing teeth.", icon: "🦴" },
      { title: "Improved Oral Health", description: "Unlike bridges, implants don't require reducing adjacent teeth, preserving your natural tooth structure.", icon: "🏥" },
      { title: "Long-Lasting Solution", description: "With proper care, dental implants can last a lifetime, making them a cost-effective choice.", icon: "⏳" },
      { title: "Enhanced Comfort", description: "Implants eliminate the discomfort and embarrassment of removable dentures.", icon: "✨" },
      { title: "Restored Function", description: "Enjoy eating, speaking, and smiling with complete confidence and comfort.", icon: "💪" },
    ],
    solutions: [
      {
        title: "Single Tooth Implant",
        subtitle: "Replace one missing tooth with a custom crown",
        bestFor: "One missing tooth",
        price: "From ₹25,000",
        features: ["Individual implant crown", "Preserves adjacent teeth", "Natural look and feel", "Lifetime warranty"],
      },
      {
        title: "Implant-Supported Bridge",
        subtitle: "Replace multiple missing teeth with a permanent bridge",
        bestFor: "Multiple adjacent missing teeth",
        price: "From ₹2,50,000",
        features: ["Replaces 3+ consecutive teeth", "More stable than traditional bridges", "Prevents bone loss", "Fixed permanent solution"],
      },
      {
        title: "All-on-4 / All-on-6",
        subtitle: "Full arch replacement using 4 or 6 implants",
        bestFor: "Full arch or complete tooth loss",
        price: "From ₹4,50,000",
        popular: true,
        features: ["Complete smile restoration", "Same-day temporary teeth", "Fixed non-removable solution", "Revolutionary same-day teeth"],
      },
      {
        title: "Implant-Retained Denture",
        subtitle: "Secure dentures with implant support",
        bestFor: "Patients with existing dentures",
        price: "From ₹2,00,000",
        features: ["Removable for cleaning", "Eliminates denture slippage", "Improved comfort and function", "Budget-friendly option"],
      },
    ],
    process: [
      { title: "Comprehensive Consultation", duration: "60 minutes", description: "We begin with a thorough examination, including 3D CT scans, to assess your oral health and create a personalized treatment plan." },
      { title: "Treatment Planning", duration: "Varies", description: "Our team designs your custom implant solution, selecting the ideal implant type, position, and restoration." },
      { title: "Implant Placement", duration: "1-2 hours", description: "Using guided surgery technology, we precisely place the titanium implant into your jawbone." },
      { title: "Healing & Osseointegration", duration: "3-6 months", description: "Your implant naturally fuses with your jawbone, creating a strong foundation." },
      { title: "Custom Restoration", duration: "2-3 weeks", description: "We attach your custom-crafted crown, bridge, or denture, perfectly matched to your natural teeth." },
      { title: "Aftercare & Maintenance", duration: "Ongoing", description: "Regular follow-ups to ensure your implant stays healthy for years to come." },
    ],
    pricingPlans: [
      {
        name: "Single Tooth Implant",
        price: "₹1,50,000",
        unit: "per implant",
        features: ["Titanium implant", "Abutment & crown", "5-year warranty"],
      },
      {
        name: "All-on-4 Implants",
        price: "₹4,50,000",
        unit: "per arch",
        popular: true,
        features: ["4 implants + full arch", "Lifetime warranty", "Same-day teeth"],
      },
      {
        name: "Full Mouth Implants",
        price: "₹8,00,000",
        unit: "both arches",
        features: ["Complete smile restoration", "Premium materials", "VIP aftercare"],
      },
    ],
    emiStarting: "₹2,500/month",
    beforeAfterCases: [
      { title: "Single Implant", description: "Treatment completed successfully" },
      { title: "All-on-4 Bridge", description: "Treatment completed successfully" },
      { title: "Front Tooth Replacement", description: "Treatment completed successfully" },
    ],
    faqs: [
      { question: "How much do dental implants cost?", answer: "Dental implants at Esthetica start from ₹25,000 per implant. The total cost depends on the number of implants, type of restoration, and any additional procedures needed. We offer 0% EMI options and free consultations." },
      { question: "Is dental implant surgery painful?", answer: "Modern implant surgery is performed under local anesthesia and is virtually painless. Most patients report less discomfort than a tooth extraction. We also offer sedation options for anxious patients." },
      { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The titanium post fuses permanently with your jawbone. The crown on top typically lasts 10-15 years before needing replacement." },
      { question: "What is the success rate of dental implants?", answer: "Our clinic maintains a 98.5% success rate for dental implants, which is among the highest in the industry. Success depends on proper planning, skilled placement, and good oral hygiene." },
      { question: "Can I get implants if I have diabetes?", answer: "Yes, most diabetic patients can receive dental implants. Well-controlled diabetes does not significantly affect implant success rates. Our team will evaluate your overall health during consultation." },
    ],
    whyChooseUs: "Esthetica Dental & Cosmetic Centre is the premier destination for dental implant treatment. Our state-of-the-art clinic is equipped with 3D CBCT scanners, digital impression systems, and a dedicated implant surgery suite. Led by experienced implantologists with 15+ years of clinical experience, our team has successfully placed thousands of dental implants with a documented 98.5% success rate.",
    duration: "3-6 months total",
    recovery: "3-5 days initial",
    priceRange: "₹25,000 - ₹50,000 per implant",
  },
  {
    id: "2",
    title: "Advanced Implants",
    slug: "advanced-implants",
    category: "Implants",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920",
    tagline: "Full mouth restoration in a single day",
    description: "Advanced full mouth rehabilitation with All-on-4, All-on-6, and zygomatic implants for complex cases.",
    longDescription: "Advanced implant solutions are designed for patients who need full arch restoration or have complex dental situations including significant bone loss. Our All-on-4 and All-on-6 techniques allow us to restore an entire arch of teeth using just 4-6 strategically placed implants, often providing same-day teeth.",
    successRate: "97%",
    badge: "Advanced Solutions",
    metaTitle: "Advanced Dental Implants | All-on-4 | Esthetica",
    metaDescription: "Full mouth rehabilitation with All-on-4, All-on-6 implants. Same-day teeth available.",
    heroStats: [
      { label: "Rating", value: "4.9" },
      { label: "Success", value: "97%" },
      { label: "Same Day", value: "Teeth" },
    ],
    showPriceComparison: true,
    priceComparison: [
      { country: "USA", flag: "🇺🇸", price: "$20,000 – $30,000" },
      { country: "UK", flag: "🇬🇧", price: "$15,000 – $25,000" },
      { country: "Australia", flag: "🇦🇺", price: "$18,000 – $28,000" },
      { country: "India (Average)", flag: "🇮🇳", price: "$5,000 – $8,000" },
    ],
    clinicPrice: { min: "$4,000", max: "$7,000", currency: "per arch", inrRange: "₹3,50,000 – ₹6,00,000" },
    showAssessment: true,
    assessmentQuestions: [
      { question: "How many teeth are you missing?", options: ["Multiple teeth", "Most teeth", "All teeth (one arch)", "All teeth (both arches)"] },
      { question: "Are you wearing dentures currently?", options: ["No", "Partial dentures", "Full dentures", "Dentures but unhappy"] },
      { question: "Have you been told you lack bone?", options: ["No", "Yes, mild bone loss", "Yes, significant bone loss", "Not sure"] },
    ],
    whatIsIt: {
      title: "What Are Advanced Implant Procedures?",
      description: "Advanced implant procedures like All-on-4 and All-on-6 revolutionize full-mouth rehabilitation. Using strategically angled implants, we can restore an entire arch of teeth—even in patients with significant bone loss—often with same-day results.",
      parts: [
        { name: "Full Arch Bridge", description: "Complete set of teeth on implants" },
        { name: "Strategic Implants", description: "4-6 implants placed at optimal angles" },
        { name: "Immediate Loading", description: "Temporary teeth placed same day" },
      ],
    },
    benefits: [
      { title: "Same-Day Teeth", description: "Walk out with a complete smile on the day of surgery.", icon: "⚡" },
      { title: "No Bone Grafting", description: "Special angulation techniques avoid the need for bone grafts in most cases.", icon: "🦴" },
      { title: "Full Arch in 4 Implants", description: "An entire arch of teeth supported by just 4 strategically placed implants.", icon: "🔧" },
      { title: "Cost Effective", description: "Significantly more affordable than replacing each tooth individually.", icon: "💰" },
      { title: "Permanent Solution", description: "Fixed, non-removable teeth that function like natural teeth.", icon: "🏆" },
      { title: "Life Changing", description: "Dramatic improvement in quality of life, confidence, and nutrition.", icon: "✨" },
    ],
    solutions: [
      { title: "All-on-4", subtitle: "Full arch on 4 implants", bestFor: "Complete tooth loss (one arch)", price: "From ₹4,50,000", popular: true, features: ["4 implants per arch", "Same-day temporary teeth", "No bone grafting usually needed", "Lifetime warranty"] },
      { title: "All-on-6", subtitle: "Full arch on 6 implants", bestFor: "Greater stability needed", price: "From ₹5,50,000", features: ["6 implants per arch", "Maximum stability", "Ideal for larger arches", "Premium zirconia bridge"] },
      { title: "Zygomatic Implants", subtitle: "For severe bone loss cases", bestFor: "Patients with severe upper jaw bone loss", price: "From ₹6,00,000", features: ["No bone grafting required", "Anchored in cheekbone", "Immediate loading possible", "Solution when others fail"] },
      { title: "Full Mouth Rehabilitation", subtitle: "Both arches restored", bestFor: "Complete mouth restoration", price: "From ₹8,00,000", features: ["Both upper & lower arches", "Complete smile makeover", "Premium materials", "VIP care package"] },
    ],
    process: [
      { title: "3D Evaluation & Planning", duration: "90 minutes", description: "Complete 3D CBCT scan and digital planning for precise implant positioning." },
      { title: "Digital Smile Preview", duration: "1 week", description: "See your new smile before surgery with digital design technology." },
      { title: "Surgery Day", duration: "2-4 hours", description: "All implants placed and temporary teeth fitted in a single appointment." },
      { title: "Healing Phase", duration: "3-4 months", description: "Implants fuse with bone while you enjoy your temporary teeth." },
      { title: "Final Prosthesis", duration: "2 weeks", description: "Premium zirconia bridge crafted and fitted for your permanent smile." },
      { title: "Lifetime Care", duration: "Ongoing", description: "Annual checkups and maintenance to keep your smile perfect." },
    ],
    pricingPlans: [
      { name: "All-on-4 (Single Arch)", price: "₹4,50,000", unit: "per arch", features: ["4 implants + bridge", "Same-day teeth", "3-year warranty"] },
      { name: "All-on-6 (Single Arch)", price: "₹5,50,000", unit: "per arch", popular: true, features: ["6 implants + bridge", "Maximum stability", "5-year warranty"] },
      { name: "Full Mouth (Both Arches)", price: "₹8,00,000", unit: "complete", features: ["Both arches restored", "Premium zirconia", "Lifetime warranty"] },
    ],
    emiStarting: "₹8,500/month",
    beforeAfterCases: [
      { title: "All-on-4 Restoration", description: "Complete upper arch restoration" },
      { title: "Full Mouth Rehab", description: "Both arches with All-on-6" },
      { title: "Zygomatic Case", description: "Severe bone loss solution" },
    ],
    faqs: [
      { question: "What is All-on-4?", answer: "All-on-4 is a revolutionary technique where a full arch of teeth is supported by just 4 implants placed at strategic angles, providing maximum stability with minimal surgery. You can get a complete set of teeth in just one day." },
      { question: "Can I get teeth the same day?", answer: "Yes! With our immediate loading protocol, you walk out with fixed temporary teeth on the same day as surgery. Final permanent teeth are placed after 3-4 months of healing." },
      { question: "What if I have bone loss?", answer: "Advanced techniques like tilted implants and zygomatic implants can eliminate the need for bone grafting in most cases, even with severe bone loss." },
      { question: "How long does the surgery take?", answer: "The surgery typically takes 2-4 hours per arch. You'll receive local anesthesia or sedation for complete comfort." },
      { question: "What is the recovery like?", answer: "Most patients return to normal activities within 5-7 days. Soft diet is recommended for the first few weeks." },
    ],
    whyChooseUs: "Our advanced implant team has performed hundreds of All-on-4 and full mouth rehabilitation cases with outstanding results. We use 3D-guided surgery, premium implant systems, and same-day teeth protocols.",
    duration: "Same day teeth, final in 3-4 months",
    recovery: "5-7 days",
    priceRange: "₹4,50,000 - ₹8,00,000",
  },
  {
    id: "3",
    title: "Root Canal",
    slug: "root-canal",
    category: "General",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1920",
    tagline: "Save your natural teeth painlessly",
    description: "Pain-free root canal treatment using advanced rotary endodontics and microscopic precision.",
    longDescription: "Root canal treatment saves teeth that would otherwise need extraction due to infection or damage. Our endodontists use advanced rotary instruments and dental microscopes for exceptional precision. Modern root canal therapy has a success rate of over 95%.",
    successRate: "95%+",
    badge: "Pain-Free Treatment",
    metaTitle: "Root Canal Treatment | Esthetica Dental",
    metaDescription: "Painless root canal treatment with advanced rotary endodontics. 95%+ success rate.",
    heroStats: [
      { label: "Pain-Free", value: "100%" },
      { label: "Success", value: "95%+" },
      { label: "Single Visit", value: "Available" },
    ],
    showPriceComparison: false,
    priceComparison: [],
    clinicPrice: { min: "₹5,000", max: "₹15,000", currency: "per tooth", inrRange: "₹5,000 – ₹15,000" },
    showAssessment: false,
    assessmentQuestions: [],
    whatIsIt: {
      title: "What Is Root Canal Treatment?",
      description: "Root canal treatment removes infected pulp tissue from inside your tooth, cleans and shapes the canals, and seals them to prevent future infection. This saves your natural tooth and eliminates pain. With modern technology, it's as comfortable as getting a filling.",
      parts: [
        { name: "Crown Restoration", description: "Protective cap placed after treatment" },
        { name: "Filling Material", description: "Biocompatible material seals the canals" },
        { name: "Cleaned Canals", description: "Infected tissue removed completely" },
      ],
    },
    benefits: [
      { title: "Saves Natural Tooth", description: "Preserve your natural tooth instead of extraction.", icon: "🦷" },
      { title: "Virtually Painless", description: "Modern anesthesia makes the procedure comfortable.", icon: "💉" },
      { title: "95%+ Success Rate", description: "Highly predictable and reliable results.", icon: "📊" },
      { title: "Single Visit Option", description: "Many cases completed in just one appointment.", icon: "⏰" },
      { title: "Prevents Spread", description: "Stops infection from spreading to other teeth.", icon: "🛡️" },
      { title: "Cost Effective", description: "Much cheaper than extraction plus implant.", icon: "💰" },
    ],
    solutions: [
      { title: "Single Visit RCT", subtitle: "Complete treatment in one appointment", bestFor: "Simple cases", price: "From ₹5,000", features: ["Completed in 60-90 mins", "Rotary endodontics", "Digital X-ray guided", "Immediate relief"] },
      { title: "Multi-Visit RCT", subtitle: "For complex or infected cases", bestFor: "Complex infections", price: "From ₹8,000", features: ["Thorough disinfection", "Calcium hydroxide dressing", "Microscope-assisted", "Higher success in complex cases"] },
      { title: "Re-Treatment", subtitle: "Redo of failed root canal", bestFor: "Previously treated teeth", price: "From ₹10,000", features: ["Removes old filling", "Re-cleans canals", "Advanced instruments", "Microscope visualization"] },
      { title: "RCT + Crown", subtitle: "Complete root canal with crown", bestFor: "Best long-term outcome", price: "From ₹12,000", popular: true, features: ["Root canal treatment", "Zirconia/ceramic crown", "Full protection", "Best value package"] },
    ],
    process: [
      { title: "Diagnosis & X-Ray", duration: "15 minutes", description: "Digital X-ray to assess infection and plan treatment." },
      { title: "Anesthesia", duration: "5 minutes", description: "Effective numbing for a completely pain-free experience." },
      { title: "Access & Cleaning", duration: "30-45 minutes", description: "Remove infected pulp and clean all root canals with rotary instruments." },
      { title: "Shaping & Filling", duration: "15-20 minutes", description: "Shape canals and fill with biocompatible material." },
      { title: "Crown Placement", duration: "Next visit", description: "Protective crown placed to restore tooth strength and appearance." },
    ],
    pricingPlans: [
      { name: "Basic RCT", price: "₹5,000", unit: "per tooth", features: ["Single visit", "Rotary cleaning", "Post-op care"] },
      { name: "RCT + Crown", price: "₹15,000", unit: "per tooth", popular: true, features: ["Root canal", "Zirconia crown", "2-year warranty"] },
      { name: "Micro-Endodontics", price: "₹20,000", unit: "per tooth", features: ["Microscope assisted", "Complex cases", "5-year warranty"] },
    ],
    emiStarting: "₹1,250/month",
    beforeAfterCases: [
      { title: "Infected Molar", description: "Saved with single visit RCT" },
      { title: "Front Tooth Trauma", description: "Root canal + ceramic crown" },
    ],
    faqs: [
      { question: "Is root canal painful?", answer: "Not at all! Modern root canal treatment is performed under effective local anesthesia and is virtually painless. Most patients say it feels like getting a filling." },
      { question: "How many visits are needed?", answer: "Most root canals are completed in 1-2 visits. Simple cases can often be done in a single 60-90 minute appointment." },
      { question: "Do I need a crown after RCT?", answer: "Yes, a crown is highly recommended to protect the treated tooth from fracture and restore its full strength and appearance." },
      { question: "What happens if I don't get RCT?", answer: "Without treatment, the infection can spread, cause an abscess, damage surrounding bone, and ultimately lead to tooth loss." },
    ],
    whyChooseUs: "Our endodontists use advanced rotary systems and dental microscopes for the most precise and comfortable root canal treatment. Single-visit options available for most cases.",
    duration: "1-2 visits (60-90 mins each)",
    recovery: "Same day, minimal discomfort",
    priceRange: "₹5,000 - ₹20,000",
  },
  {
    id: "4",
    title: "Smile Design",
    slug: "smile-design",
    category: "Cosmetic",
    icon: "😁",
    image: "https://images.unsplash.com/photo-1581585095203-c0c5c6608e72?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1581585095203-c0c5c6608e72?q=80&w=1920",
    tagline: "Design your dream smile digitally",
    description: "Transform your smile with digital smile design technology. Preview your new smile before treatment.",
    longDescription: "Digital Smile Design (DSD) is a revolutionary approach that allows us to plan and preview your new smile before any treatment begins. Using advanced digital photography, facial analysis, and 3D software, we create a blueprint of your ideal smile.",
    successRate: "99%",
    badge: "Preview Before You Commit",
    metaTitle: "Smile Design | Digital Smile Makeover | Esthetica",
    metaDescription: "Transform your smile with digital smile design. See your new smile before treatment begins.",
    heroStats: [{ label: "Satisfaction", value: "99%" }, { label: "Preview", value: "Before" }, { label: "Natural", value: "Results" }],
    showPriceComparison: false,
    priceComparison: [],
    clinicPrice: { min: "₹8,000", max: "₹25,000", currency: "per tooth", inrRange: "₹8,000 – ₹25,000" },
    showAssessment: false,
    assessmentQuestions: [],
    whatIsIt: {
      title: "What Is Digital Smile Design?",
      description: "Digital Smile Design uses advanced photography, facial analysis, and 3D software to create a preview of your perfect smile. You can see and approve the final result before any work begins. Treatment may include veneers, bonding, crowns, and whitening.",
    },
    benefits: [
      { title: "See Before You Commit", description: "Preview your new smile digitally before any treatment.", icon: "👀" },
      { title: "Custom Designed", description: "Tailored to your facial features and personality.", icon: "🎨" },
      { title: "Minimally Invasive", description: "Conservative preparation preserves maximum tooth structure.", icon: "🪶" },
      { title: "Natural Results", description: "Premium porcelain that mimics natural tooth translucency.", icon: "✨" },
      { title: "Long Lasting", description: "Porcelain veneers last 10-15 years with proper care.", icon: "⏳" },
      { title: "Confidence Boost", description: "A beautiful smile transforms your entire appearance.", icon: "💫" },
    ],
    solutions: [
      { title: "Porcelain Veneers", subtitle: "Ultra-thin porcelain shells", bestFor: "Complete smile transformation", price: "From ₹15,000/tooth", popular: true, features: ["Custom shade matching", "Minimal tooth prep", "10-15 year lifespan", "Stain resistant"] },
      { title: "Composite Bonding", subtitle: "Direct tooth-colored restoration", bestFor: "Minor corrections", price: "From ₹5,000/tooth", features: ["Single visit", "No tooth preparation", "Reversible", "Budget-friendly"] },
      { title: "Full Smile Makeover", subtitle: "Complete transformation package", bestFor: "Multiple cosmetic issues", price: "From ₹1,50,000", features: ["Veneers + whitening", "Gum contouring", "Digital planning", "Complete transformation"] },
    ],
    process: [
      { title: "Smile Analysis", duration: "60 mins", description: "Photos, videos, and facial analysis for digital planning." },
      { title: "Digital Design", duration: "1 week", description: "3D smile design created and reviewed with you." },
      { title: "Mock-Up Trial", duration: "30 mins", description: "Try your new smile in your mouth before committing." },
      { title: "Tooth Preparation", duration: "1-2 hours", description: "Minimal preparation of teeth for veneers." },
      { title: "Final Placement", duration: "1-2 hours", description: "Permanent veneers bonded for your dream smile." },
    ],
    pricingPlans: [
      { name: "Composite Veneers", price: "₹5,000", unit: "per tooth", features: ["Single visit", "Direct bonding", "3-year warranty"] },
      { name: "Porcelain Veneers", price: "₹15,000", unit: "per tooth", popular: true, features: ["Premium porcelain", "Digital design", "10-year warranty"] },
      { name: "Full Makeover (8 teeth)", price: "₹1,50,000", unit: "package", features: ["8 veneers", "Whitening included", "Lifetime follow-up"] },
    ],
    emiStarting: "₹3,000/month",
    beforeAfterCases: [
      { title: "8 Veneer Makeover", description: "Complete smile transformation" },
      { title: "Gap Closure", description: "Composite bonding for gaps" },
    ],
    faqs: [
      { question: "What are dental veneers?", answer: "Thin shells of porcelain bonded to the front of teeth to improve appearance — changing color, shape, size, and alignment." },
      { question: "Can I preview my smile?", answer: "Yes! Our digital smile design process creates a 3D preview and physical mock-up so you can see your new smile before committing." },
      { question: "How long do veneers last?", answer: "Premium porcelain veneers last 10-15 years or more with proper care." },
    ],
    whyChooseUs: "Our cosmetic dentists are trained in digital smile design with artistic precision. We use premium E-max and feldspathic porcelain for the most natural results.",
    duration: "2-3 weeks (2-3 visits)",
    recovery: "No downtime",
    priceRange: "₹5,000 - ₹25,000 per tooth",
  },
  {
    id: "5",
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    category: "Cosmetic",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1920",
    tagline: "Brighter smile in just 60 minutes",
    description: "Professional teeth whitening for a dramatically brighter smile in just one visit.",
    longDescription: "Our professional teeth whitening delivers results that over-the-counter products can't match. We offer both in-office power whitening and custom take-home kits.",
    successRate: "100%",
    badge: "Instant Results",
    metaTitle: "Teeth Whitening | Esthetica Dental",
    metaDescription: "Professional teeth whitening - up to 8 shades brighter in 60 minutes.",
    heroStats: [{ label: "Shades", value: "8+" }, { label: "Time", value: "60 min" }, { label: "Safe", value: "100%" }],
    showPriceComparison: false, priceComparison: [],
    clinicPrice: { min: "₹8,000", max: "₹20,000", currency: "per session", inrRange: "₹8,000 – ₹20,000" },
    showAssessment: false, assessmentQuestions: [],
    whatIsIt: { title: "What Is Professional Teeth Whitening?", description: "Professional whitening uses high-concentration bleaching agents activated by LED/laser light to remove deep stains and discoloration. Results are dramatic and immediate." },
    benefits: [
      { title: "8+ Shades Brighter", description: "Dramatic improvement visible immediately.", icon: "⭐" },
      { title: "60-Minute Treatment", description: "Complete in a single appointment.", icon: "⏱️" },
      { title: "Safe & Enamel-Friendly", description: "Dentist-supervised for complete safety.", icon: "🛡️" },
      { title: "Long-Lasting", description: "Results last 6 months to 2 years.", icon: "📅" },
      { title: "No Sensitivity", description: "Advanced formulas minimize sensitivity.", icon: "😊" },
      { title: "Take-Home Kit", description: "Maintenance kit included for touch-ups.", icon: "🏠" },
    ],
    solutions: [
      { title: "In-Office Whitening", subtitle: "Instant results in 60 minutes", bestFor: "Quick dramatic results", price: "From ₹12,000", popular: true, features: ["LED/laser activated", "Up to 8 shades", "Single visit", "Take-home kit included"] },
      { title: "Take-Home Kit", subtitle: "Gradual whitening at home", bestFor: "Convenience & comfort", price: "From ₹8,000", features: ["Custom trays", "2-week treatment", "Gradual results", "Touch-up supplies"] },
      { title: "Combo Package", subtitle: "In-office + take-home", bestFor: "Maximum & lasting results", price: "From ₹18,000", features: ["In-office session", "Custom take-home kit", "Best value", "Longest lasting results"] },
    ],
    process: [
      { title: "Shade Assessment", duration: "10 mins", description: "Document current shade and set whitening goals." },
      { title: "Cleaning", duration: "15 mins", description: "Professional cleaning to remove surface stains." },
      { title: "Gum Protection", duration: "5 mins", description: "Protective barrier applied to gums." },
      { title: "Whitening", duration: "45 mins", description: "Professional-grade gel with LED activation." },
      { title: "Final Assessment", duration: "5 mins", description: "Compare results and receive aftercare kit." },
    ],
    pricingPlans: [
      { name: "Take-Home Kit", price: "₹8,000", unit: "kit", features: ["Custom trays", "Whitening gel", "2-week supply"] },
      { name: "In-Office Whitening", price: "₹12,000", unit: "session", popular: true, features: ["LED activated", "60 minutes", "Instant results"] },
      { name: "Combo Package", price: "₹18,000", unit: "complete", features: ["In-office + home kit", "Maximum results", "6-month supply"] },
    ],
    emiStarting: "₹1,000/month",
    beforeAfterCases: [
      { title: "Coffee Stain Removal", description: "8 shades improvement" },
      { title: "Tobacco Staining", description: "Complete transformation" },
    ],
    faqs: [
      { question: "How long does whitening last?", answer: "6 months to 2 years depending on diet and habits. Touch-up kits help maintain results." },
      { question: "Will it damage my teeth?", answer: "No, professional whitening is completely safe when supervised by a dentist." },
      { question: "Is there sensitivity?", answer: "Minimal. We use desensitizing agents to prevent discomfort." },
    ],
    whyChooseUs: "We use the latest LED-activated whitening technology with enamel-safe professional-grade products.",
    duration: "60-90 minutes", recovery: "No downtime", priceRange: "₹8,000 - ₹20,000",
  },
  {
    id: "6", title: "Crowns & Bridges", slug: "crowns-bridges", category: "Restorative", icon: "👑",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1920",
    tagline: "Restore strength and beauty", description: "Premium ceramic and zirconia crowns and bridges for natural-looking restoration.",
    longDescription: "High-quality crowns and bridges restore damaged or missing teeth with materials virtually indistinguishable from natural teeth.",
    successRate: "97%", badge: "Same-Day Available", metaTitle: "Crowns & Bridges | Esthetica", metaDescription: "Premium zirconia crowns and bridges.",
    heroStats: [{ label: "Materials", value: "Premium" }, { label: "CAD/CAM", value: "Yes" }, { label: "Durability", value: "15+ yrs" }],
    showPriceComparison: false, priceComparison: [],
    clinicPrice: { min: "₹5,000", max: "₹20,000", currency: "per unit", inrRange: "₹5,000 – ₹20,000" },
    showAssessment: false, assessmentQuestions: [],
    whatIsIt: { title: "What Are Crowns & Bridges?", description: "Crowns cap damaged teeth to restore strength. Bridges replace missing teeth by anchoring to adjacent teeth. Both are custom-made for a perfect fit and natural appearance." },
    benefits: [
      { title: "Natural Look", description: "Matches your teeth perfectly.", icon: "😁" },
      { title: "CAD/CAM Precision", description: "Digital technology for perfect fit.", icon: "💻" },
      { title: "Same-Day Option", description: "CEREC same-day crowns available.", icon: "⚡" },
      { title: "15+ Year Durability", description: "Premium materials that last.", icon: "💪" },
      { title: "Full Function", description: "Eat and speak normally.", icon: "🍎" },
      { title: "Protects Teeth", description: "Prevents further damage.", icon: "🛡️" },
    ],
    solutions: [
      { title: "Zirconia Crown", subtitle: "Strongest ceramic option", bestFor: "Back teeth / strength needed", price: "From ₹10,000", popular: true, features: ["Maximum strength", "Natural translucency", "10-year warranty", "Metal-free"] },
      { title: "E-max Crown", subtitle: "Most aesthetic option", bestFor: "Front teeth / aesthetics", price: "From ₹15,000", features: ["Best aesthetics", "Lifelike translucency", "10-year warranty", "Ideal for smile zone"] },
      { title: "PFM Crown", subtitle: "Metal-ceramic option", bestFor: "Budget-conscious patients", price: "From ₹5,000", features: ["Time-tested", "Good strength", "5-year warranty", "Affordable option"] },
      { title: "Dental Bridge", subtitle: "Replace missing teeth", bestFor: "1-3 missing teeth", price: "From ₹15,000", features: ["Fixed prosthesis", "Natural appearance", "Quick treatment", "No surgery needed"] },
    ],
    process: [
      { title: "Tooth Preparation", duration: "30-45 mins", description: "Reshape tooth and take digital impressions." },
      { title: "Temporary Crown", duration: "15 mins", description: "Wear a temporary crown while final one is made." },
      { title: "Crown Fabrication", duration: "5-7 days", description: "CAD/CAM precision crafting in the lab." },
      { title: "Final Cementation", duration: "30 mins", description: "Bond permanent crown and adjust bite." },
    ],
    pricingPlans: [
      { name: "PFM Crown", price: "₹5,000", unit: "per tooth", features: ["Metal-ceramic", "Good durability", "5-yr warranty"] },
      { name: "Zirconia Crown", price: "₹10,000", unit: "per tooth", popular: true, features: ["Full ceramic", "Maximum strength", "10-yr warranty"] },
      { name: "E-max Crown", price: "₹15,000", unit: "per tooth", features: ["Best aesthetics", "Premium porcelain", "10-yr warranty"] },
    ],
    emiStarting: "₹800/month", beforeAfterCases: [{ title: "Front Crown", description: "E-max veneer crown" }],
    faqs: [
      { question: "Which crown material is best?", answer: "Zirconia for back teeth (strength), E-max for front teeth (aesthetics)." },
      { question: "How long do crowns last?", answer: "10-15+ years with proper care." },
      { question: "Is it painful?", answer: "Completely painless under local anesthesia." },
    ],
    whyChooseUs: "CAD/CAM technology for precision-fit crowns. Same-day options available.", duration: "2 visits over 5-7 days", recovery: "No downtime", priceRange: "₹5,000 - ₹20,000",
  },
  {
    id: "7", title: "Orthodontics", slug: "orthodontics", category: "Orthodontics", icon: "😬",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920",
    tagline: "Straight teeth, perfect smile", description: "Braces, clear aligners, and lingual braces for all ages.",
    longDescription: "Comprehensive orthodontic solutions using the latest technology for beautiful, aligned smiles.",
    successRate: "98%", badge: "All Ages Welcome", metaTitle: "Orthodontics | Braces | Esthetica", metaDescription: "Braces and clear aligners for perfect teeth alignment.",
    heroStats: [{ label: "Options", value: "5+" }, { label: "Ages", value: "All" }, { label: "Success", value: "98%" }],
    showPriceComparison: false, priceComparison: [],
    clinicPrice: { min: "₹30,000", max: "₹2,00,000", currency: "full treatment", inrRange: "₹30,000 – ₹2,00,000" },
    showAssessment: false, assessmentQuestions: [],
    whatIsIt: { title: "What Is Orthodontic Treatment?", description: "Orthodontics corrects misaligned teeth and jaw problems using braces, aligners, or other appliances. We treat patients of all ages for healthier, straighter smiles." },
    benefits: [
      { title: "Multiple Options", description: "Metal, ceramic, lingual, and clear aligners.", icon: "🔧" },
      { title: "Clear Aligners", description: "Invisible treatment for adults.", icon: "👓" },
      { title: "3D Planning", description: "See your result before starting.", icon: "💻" },
      { title: "All Ages", description: "Children, teens, and adults.", icon: "👨‍👩‍👧‍👦" },
      { title: "Better Oral Health", description: "Straight teeth are easier to clean.", icon: "🪥" },
      { title: "Flexible Payments", description: "Monthly payment plans available.", icon: "💳" },
    ],
    solutions: [
      { title: "Metal Braces", subtitle: "Traditional & effective", bestFor: "Complex cases, all ages", price: "From ₹30,000", features: ["Most versatile", "Handles complex cases", "Fastest results", "Most affordable"] },
      { title: "Ceramic Braces", subtitle: "Tooth-colored brackets", bestFor: "Aesthetic-conscious patients", price: "From ₹45,000", features: ["Less visible", "Tooth-colored", "Same effectiveness", "Professional look"] },
      { title: "Clear Aligners", subtitle: "Invisible & removable", bestFor: "Adults & mild-moderate cases", price: "From ₹80,000", popular: true, features: ["Nearly invisible", "Removable for eating", "Digital planning", "Comfortable"] },
      { title: "Lingual Braces", subtitle: "Hidden behind teeth", bestFor: "Complete invisibility", price: "From ₹1,50,000", features: ["Completely hidden", "Custom-made", "Effective for most cases", "Premium option"] },
    ],
    process: [
      { title: "Consultation", duration: "45 mins", description: "Complete evaluation with 3D scans and X-rays." },
      { title: "Treatment Plan", duration: "1 week", description: "Custom plan with timeline and cost." },
      { title: "Fitting", duration: "60-90 mins", description: "Braces placed or aligners delivered." },
      { title: "Adjustments", duration: "Every 4-6 weeks", description: "Regular visits for progress and adjustments." },
      { title: "Completion", duration: "12-24 months", description: "Braces removed and retainer provided." },
    ],
    pricingPlans: [
      { name: "Metal Braces", price: "₹30,000", unit: "full treatment", features: ["Complete treatment", "All adjustments", "Retainer included"] },
      { name: "Clear Aligners", price: "₹80,000", unit: "full treatment", popular: true, features: ["Full set of aligners", "Digital monitoring", "Retainer included"] },
      { name: "Lingual Braces", price: "₹1,50,000", unit: "full treatment", features: ["Hidden braces", "Custom brackets", "Premium experience"] },
    ],
    emiStarting: "₹2,500/month", beforeAfterCases: [{ title: "Crowded Teeth", description: "18-month treatment" }],
    faqs: [
      { question: "Braces or aligners?", answer: "Both are effective. Aligners offer aesthetics, braces handle complex cases better. We'll recommend the best option." },
      { question: "How long is treatment?", answer: "6-24 months depending on complexity." },
      { question: "Any age limit?", answer: "No! We treat adults of all ages successfully." },
    ],
    whyChooseUs: "Experienced orthodontists with 3D treatment planning and multiple options for every budget.",
    duration: "6-24 months", recovery: "Mild soreness initially", priceRange: "₹30,000 - ₹2,00,000",
  },
  {
    id: "8", title: "Oral Surgery", slug: "oral-surgery", category: "Surgery", icon: "🏥",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920",
    tagline: "Expert surgical care you can trust", description: "Wisdom teeth, jaw surgery, bone grafting, and complex extractions by board-certified surgeons.",
    longDescription: "Our oral surgery department handles everything from simple extractions to complex jaw surgeries using advanced imaging and minimally invasive techniques.",
    successRate: "99%", badge: "Board Certified Surgeons", metaTitle: "Oral Surgery | Esthetica Dental", metaDescription: "Expert oral surgery with minimally invasive techniques.",
    heroStats: [{ label: "Surgeons", value: "Board Cert." }, { label: "Minimally", value: "Invasive" }, { label: "Sedation", value: "Available" }],
    showPriceComparison: false, priceComparison: [],
    clinicPrice: { min: "₹3,000", max: "₹50,000", currency: "per procedure", inrRange: "₹3,000 – ₹50,000" },
    showAssessment: false, assessmentQuestions: [],
    whatIsIt: { title: "What Is Oral Surgery?", description: "Oral surgery encompasses procedures including tooth extractions, wisdom teeth removal, bone grafting, sinus lifts, cyst removal, and corrective jaw surgery. Our surgeons use 3D imaging and minimally invasive techniques." },
    benefits: [
      { title: "Expert Surgeons", description: "Board-certified oral & maxillofacial surgeons.", icon: "👨‍⚕️" },
      { title: "Minimally Invasive", description: "Smaller incisions, faster healing.", icon: "🪡" },
      { title: "3D Guided", description: "CBCT imaging for precision surgery.", icon: "🔬" },
      { title: "Sedation Options", description: "IV sedation for anxious patients.", icon: "💉" },
      { title: "Fast Recovery", description: "PRF therapy for accelerated healing.", icon: "⚡" },
      { title: "Comprehensive Care", description: "Pre-op to post-op support.", icon: "🏥" },
    ],
    solutions: [
      { title: "Wisdom Tooth Extraction", subtitle: "Safe removal of wisdom teeth", bestFor: "Impacted or problematic wisdom teeth", price: "From ₹3,000", popular: true, features: ["Digital X-ray guided", "Minimally invasive", "Same-day procedure", "Quick recovery"] },
      { title: "Bone Grafting", subtitle: "Rebuild jawbone for implants", bestFor: "Preparing for dental implants", price: "From ₹15,000", features: ["Multiple graft options", "Guided bone regeneration", "PRF enhanced healing", "Implant preparation"] },
      { title: "Sinus Lift", subtitle: "Create space for upper implants", bestFor: "Upper jaw implant preparation", price: "From ₹25,000", features: ["Lateral or crestal approach", "Biomaterial grafting", "Minimally invasive", "Implant placement possible"] },
      { title: "Jaw Surgery", subtitle: "Corrective jaw procedures", bestFor: "Jaw alignment issues", price: "From ₹50,000", features: ["3D surgical planning", "Precision correction", "Hospital setting", "Comprehensive follow-up"] },
    ],
    process: [
      { title: "Evaluation", duration: "30-45 mins", description: "Clinical exam and 3D CBCT imaging." },
      { title: "Planning", duration: "1-2 days", description: "Surgical plan created with 3D guidance." },
      { title: "Surgery", duration: "30 min - 2 hrs", description: "Procedure performed with chosen anesthesia." },
      { title: "Recovery", duration: "3-7 days", description: "Post-op care and healing support." },
      { title: "Follow-Up", duration: "1-2 weeks", description: "Healing assessment and suture removal." },
    ],
    pricingPlans: [
      { name: "Simple Extraction", price: "₹1,500", unit: "per tooth", features: ["Local anesthesia", "Quick procedure", "Same-day"] },
      { name: "Wisdom Tooth", price: "₹5,000", unit: "per tooth", popular: true, features: ["Impacted tooth", "Surgical extraction", "Post-op kit"] },
      { name: "Bone Grafting", price: "₹15,000", unit: "per site", features: ["Bio-material graft", "PRF therapy", "Implant prep"] },
    ],
    emiStarting: "₹1,500/month", beforeAfterCases: [{ title: "Wisdom Tooth", description: "Impacted third molar removal" }],
    faqs: [
      { question: "Do wisdom teeth always need removal?", answer: "Not always. Removal is recommended when they cause pain, infection, or crowd other teeth." },
      { question: "Is sedation available?", answer: "Yes, we offer local anesthesia, conscious sedation, and IV sedation." },
      { question: "What is recovery time?", answer: "Simple: 1-2 days. Wisdom teeth: 3-5 days. Complex surgery: 5-7 days." },
    ],
    whyChooseUs: "Board-certified oral surgeons with advanced 3D-guided surgical techniques and PRF therapy for faster healing.",
    duration: "30 mins - 2 hours", recovery: "3-7 days", priceRange: "₹3,000 - ₹50,000",
  },
];

export const getTreatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);
export const getRelatedTreatments = (slug: string, limit = 4) => treatments.filter((t) => t.slug !== slug).slice(0, limit);
export const getTreatmentsByCategory = (cat: string) => cat === "All" ? treatments : treatments.filter((t) => t.category === cat);
export const getCategories = () => ["All", ...Array.from(new Set(treatments.map((t) => t.category)))];