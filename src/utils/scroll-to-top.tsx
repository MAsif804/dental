"use client";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls the window to the top when the route changes
 */
export default function ScrollToTop() {
  const pathname = useLocation().pathname;

  useEffect(() => {
    console.log({ hash: window.location.hash });
    if (window.location.hash.length > 0) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
