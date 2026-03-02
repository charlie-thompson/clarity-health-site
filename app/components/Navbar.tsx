"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LogoLight from "./logos/LogoLight";

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
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        <Link href="/" aria-label="Clarity Health Benefits — home">
          <LogoLight style={{ height: "44px", width: "auto" }} priority />
        </Link>

        <nav>
          <Link
            href="/about"
            className="text-sm font-semibold text-dark-blue transition-colors duration-200 hover:text-accent-teal"
          >
            About
          </Link>
        </nav>

      </div>
    </header>
  );
}
