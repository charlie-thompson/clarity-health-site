import type { Metadata } from "next";
import OriginSection from "../../components/OriginSection";
import GuaranteedSection from "../../components/GuaranteedSection";
import FadeInSection from "../../components/FadeInSection";

export const metadata: Metadata = {
  title: "Our Story — Clarity Health Benefits",
  description:
    "Three pharmacists saw a broken system and built something better. Learn how Clarity was founded on transparency, alignment, and real savings.",
};

export default function OurStoryPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-dark-blue px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            About Clarity
          </p>
          <h1 className="mt-4 text-5xl font-bold text-white sm:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/70">
            Three pharmacists. One broken industry. A clean-slate solution built
            to work for the client — not the middleman.
          </p>
        </div>
      </section>

      {/* Origin timeline */}
      <FadeInSection>
        <OriginSection />
      </FadeInSection>

      {/* Philosophy — Proven, Aligned & Guaranteed */}
      <FadeInSection>
        <GuaranteedSection />
      </FadeInSection>
    </>
  );
}
