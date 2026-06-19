export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  slug: string;
  category: string;
}

export interface TreatmentDetail extends Treatment {
  longDescription: string;
  benefits: string[];
  procedure: string[];
  duration: string;
  recovery: string;
  priceRange: string;
  faqs: { question: string; answer: string }[];
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  image: string;
  experience: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  treatment: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}