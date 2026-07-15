import { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      {label: "Immediate Load Implants", href: "/treatments/immediate-load-implants"},
      { label: "Dental Implants", href: "/treatments/dental-implants" },
      { label: "Advanced Implants", href: "/treatments/advanced-implants" },
      { label: "Root Canal", href: "/treatments/root-canal" },
      { label: "Smile Design", href: "/treatments/smile-design" },
      { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
      { label: "Crowns & Bridges", href: "/treatments/crowns-bridges" },
      { label: "Orthodontics", href: "/treatments/orthodontics" },
      { label: "Oral Surgery", href: "/treatments/oral-surgery" },
      {label: "Child Dentistry", href: "/treatments/child-dentistry"},
    ],
  },
  {
    label: "Implant Pricing",
    href: "/pricing",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];