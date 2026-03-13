import type { Metadata } from "next";
import FoundersSection from "../../components/FoundersSection";
import FadeInSection from "../../components/FadeInSection";
import PageTransition from "../../components/PageTransition";

export const metadata: Metadata = {
  title: "Our Team — Clarity Health Benefits",
  description:
    "Meet the pharmacists and founders behind Clarity Health Benefits — built by practitioners who lived the problem firsthand.",
};

export default function TeamPage() {
  return (
    <PageTransition>
      {/* Page hero */}
      <section className="hero-gradient px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            About Clarity
          </p>
          <h1 className="mt-4 text-5xl font-bold text-white sm:text-6xl">
            Our Team
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/70">
            Pharmacists who spent years inside the broken system — then built
            the alternative they always wished existed.
          </p>
        </div>
      </section>

      {/* Founder cards */}
      <FadeInSection>
        <FoundersSection />
      </FadeInSection>
    </PageTransition>
  );
}
