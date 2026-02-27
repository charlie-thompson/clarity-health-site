"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ServiceCardGrid({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards =
            container.querySelectorAll<HTMLElement>(".service-card-item");
          cards.forEach((card, i) => {
            card.style.transitionDelay = `${i * 100}ms`;
            card.classList.add("is-visible");
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {children}
    </div>
  );
}
