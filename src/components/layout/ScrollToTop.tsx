"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scrolls to the top when the route changes so navigation shows the page from the top with the navbar.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
