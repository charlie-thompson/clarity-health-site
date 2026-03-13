import type { Metadata } from "next";
import ServicesSection from "../components/ServicesSection";

export const metadata: Metadata = {
  title: "Services — Clarity Health Benefits",
  description:
    "Choose only the cost containment programs that fit your population, budget, and goals. Nine fully customizable tools — zero hidden fees.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-dark-blue px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            What We Offer
          </p>
          <h1 className="mt-4 text-5xl font-bold text-white sm:text-6xl">
            Cost Containment Toolkit
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/70">
            Every plan is different. Choose the programs that fit your
            population, budget, and goals — completely tailored, fully
            transparent, with a common goal of decreasing cost and increasing
            member satisfaction.
          </p>
        </div>
      </section>

      {/* 9-card grid */}
      <ServicesSection />
    </>
  );
}
