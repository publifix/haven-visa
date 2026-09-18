"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /**
   * "up"   -> Elevated Progress: a soft upward resolve. Default; used for
   *           card grids, section entrances, generally anything that reads.
   * "right" -> Forward Movement: a soft left-to-right momentum. Reserved for
   *            moments that should feel directional (hero, horizon lines).
   * Brand guideline sec. 8: only these two behaviors, always soft
   * ease-in/ease-out, never bounce or overshoot.
   */
  direction?: "up" | "right";
  delayMs?: number;
  className?: string;
};

/**
 * One orchestrated reveal per section, not per element — mount this around
 * a whole block (a section, a card grid as a unit) rather than wrapping
 * every child individually, per the guideline's "one moment, not decoration
 * repeated" motion principle.
 */
export function Reveal({ children, direction = "up", delayMs = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offset = direction === "up" ? "translate-y-6" : "-translate-x-6";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${offset}`} ${className ?? ""}`}
      style={{ transitionDuration: "700ms", transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
