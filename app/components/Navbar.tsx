"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Team", href: "/about/team" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Our Results", href: "/our-results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);     // desktop dropdown
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // mobile accordion
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  const isAboutActive =
    pathname.startsWith("/about");

  const linkClass = (href: string) =>
    `text-sm font-semibold transition-colors duration-200 ${
      pathname === href
        ? "text-[#00C8E8]"
        : "text-[#0B1F3A] hover:text-[#00C8E8]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0">

        {/* Logo */}
        <Link href="/" aria-label="Clarity Health Benefits — home">
          <Image
            src="/images/clarity-logo-light@400.png"
            alt="Clarity Health Benefits"
            width={400}
            height={100}
            className="h-[66px] w-auto"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setAboutOpen((o) => !o)}
                    aria-expanded={aboutOpen}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                      isAboutActive ? "text-[#00C8E8]" : "text-[#0B1F3A] hover:text-[#00C8E8]"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {aboutOpen && (
                    <div className="absolute left-0 top-full mt-2 w-44 rounded-xl border border-gray-100 bg-white py-1.5 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setAboutOpen(false)}
                          className={`block px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                            pathname === child.href
                              ? "text-[#00C8E8]"
                              : "text-[#0B1F3A] hover:bg-[#F0F7FA] hover:text-[#00C8E8]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href!} className={linkClass(item.href!)}>
                {item.label}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="mailto:support@clarityhealthbenefits.com"
            className="ml-2 rounded-full bg-[#00C8E8] px-5 py-2 text-sm font-bold text-[#0B1F3A] transition-all duration-200 hover:bg-[#00A3B5] hover:shadow-md"
          >
            Connect with Clarity
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 rounded bg-[#0B1F3A] transition-all duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-[#0B1F3A] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-[#0B1F3A] transition-all duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1 bg-white">
          {NAV_LINKS.map((item) => {
            if (item.children) {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileAboutOpen((o) => !o)}
                    className={`flex w-full items-center justify-between py-3 text-sm font-semibold ${
                      isAboutActive ? "text-[#00C8E8]" : "text-[#0B1F3A]"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileAboutOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block py-2.5 pl-4 text-sm font-medium border-l-2 mb-0.5 transition-colors duration-150 ${
                          pathname === child.href
                            ? "border-[#00C8E8] text-[#00C8E8]"
                            : "border-gray-200 text-[#0B1F3A] hover:border-[#00C8E8] hover:text-[#00C8E8]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`py-3 text-sm font-semibold transition-colors duration-150 ${
                  pathname === item.href!
                    ? "text-[#00C8E8]"
                    : "text-[#0B1F3A] hover:text-[#00C8E8]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="mailto:support@clarityhealthbenefits.com"
            className="mt-3 rounded-full bg-[#00C8E8] px-5 py-2.5 text-center text-sm font-bold text-[#0B1F3A] transition-all duration-200 hover:bg-[#00A3B5]"
          >
            Connect with Clarity
          </Link>
        </nav>
      </div>
    </header>
  );
}
