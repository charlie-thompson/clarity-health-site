"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 shadow-sm backdrop-blur-md"
          : "bg-white shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <Image
          src="/images/clarity_logo.png"
          alt="Clarity Health Benefits"
          width={180}
          height={54}
          style={{ height: "auto" }}
          priority
        />
      </div>
    </header>
  );
}
