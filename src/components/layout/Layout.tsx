"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Preloader from "@/components/ui/Preloader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useSmoothScroll();

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
};

export default Layout;