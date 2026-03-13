import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="hero-gradient px-6 py-20 text-center">
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

      {/* Pharmacy photo break */}
      <FadeInSection>
        <section className="bg-light-bg px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-lg sm:h-80 lg:h-96">
              <Image
                src="/pharmacy.jpg"
                alt="Pharmacists at work inside a Clarity-partnered pharmacy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              {/* Subtle dark gradient overlay for legibility if caption is added later */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,45,92,0.35) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Philosophy — Proven, Aligned & Guaranteed */}
      <FadeInSection>
        <GuaranteedSection />
      </FadeInSection>
    </>
  );
}
