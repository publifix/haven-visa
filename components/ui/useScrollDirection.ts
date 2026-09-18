"use client";

import { useEffect, useState } from "react";

/**
 * Drives the header's hide-on-scroll-down / reveal-on-scroll-up behavior.
 * Always visible near the top (within `topOffset`) regardless of
 * direction, so it never disappears before the visitor has scrolled
 * meaningfully into the page.
 */
export function useScrollDirection(topOffset = 80, minDelta = 8) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      const y = window.scrollY;
      const delta = y - lastY;
      if (y <= topOffset) {
        setHidden(false);
      } else if (delta > minDelta) {
        setHidden(true); // scrolling down
        lastY = y;
      } else if (delta < -minDelta) {
        setHidden(false); // scrolling up
        lastY = y;
      }
      // else: movement smaller than minDelta (scroll jitter/momentum
      // micro-adjustments) — hold the current state and don't update
      // lastY, so small back-and-forth wobble doesn't flicker the header.
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
  }, [topOffset, minDelta]);

  return hidden;
}
