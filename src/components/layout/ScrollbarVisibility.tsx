"use client";

import { useCallback, useEffect, useRef } from "react";

const HIDE_DELAY_MS = 1200;
const EDGE_THRESHOLD_PX = 24;

/**
 * Shows the scrollbar on scroll or when hovering near the right edge; hides it after inactivity.
 */
export default function ScrollbarVisibility() {
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    document.documentElement.classList.add("scrollbar-visible");
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    hideTimeoutRef.current = setTimeout(() => {
      document.documentElement.classList.remove("scrollbar-visible");
      hideTimeoutRef.current = null;
    }, HIDE_DELAY_MS);
  }, []);

  useEffect(() => {
    const handleScroll = () => show();
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX >= window.innerWidth - EDGE_THRESHOLD_PX) show();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [show]);

  return null;
}
