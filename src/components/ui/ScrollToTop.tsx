"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Allow browser anchor links such as /about#our-team
    if (window.location.hash) {
      return;
    }

    // Always start a newly navigated page at the top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}