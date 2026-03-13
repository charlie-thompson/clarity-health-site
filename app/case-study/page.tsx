import type { Metadata } from "next";
import ResultsSection from "../components/ResultsSection";

export const metadata: Metadata = {
  title: "Case Study — Clarity Health Benefits",
  description:
    "$2.69M in savings for a 3,500-member labor union. See how Clarity's cost containment toolkit delivers real, measurable results.",
};

export default function CaseStudyPage() {
  return (
    <>
      {/* Page hero */}
      <section className="hero-gradient px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            Real Results
          </p>
          <h1 className="mt-4 text-5xl font-bold text-white sm:text-6xl">
            Case Study
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/70">
            A 3,500-member labor union. Three cost containment programs. $2.69M
            in documented savings — and a 94% member satisfaction rating.
          </p>
        </div>
      </section>

      <ResultsSection />
    </>
  );
}
