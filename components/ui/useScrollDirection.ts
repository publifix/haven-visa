"use client";

import { useEffect, useState } from "react";

/**
 * Drives the header's hide-on-scroll-down / reveal-on-scroll-up behavior.
 * Always visible near the top (within `topOffset`) regardless of
 * direction, so it never disappears before the visitor has scrolled
 * meaningfully into the page.
 */
export function useScrollDirection(topOffset = 80) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      const y = window.scrollY;
      if (y <= topOffset) {
        setHidden(false);
      } else if (y > lastY) {
        setHidden(true); // scrolling down
      } else if (y < lastY) {
        setHidden(false); // scrolling up
      }
      lastY = y;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [topOffset]);

  return hidden;
}
