import type { Metadata } from "next";
import OriginSection from "../../components/OriginSection";
import GuaranteedSection from "../../components/GuaranteedSection";
import ScrollReveal from "../../components/ScrollReveal";
import PageTransition from "../../components/PageTransition";

export const metadata: Metadata = {
  title: "Our Story — Clarity Health Benefits",
  description:
    "Pharmacists who saw an opportunity to raise the bar on transparency, customization, and true client alignment. Learn how Clarity Health Benefits was built.",
};

export default function OurStoryPage() {
  return (
    <PageTransition>
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
            Pharmacists who saw a better way to deliver pharmacy benefits — more
            transparent, more customizable, and genuinely aligned with clients
            and the members they serve.
          </p>
        </div>
      </section>

      {/* Origin timeline */}
      <ScrollReveal>
        <OriginSection />
      </ScrollReveal>

      {/* Pharmacy full-bleed banner */}
      <ScrollReveal>
        <section
          className="relative px-6 py-36 text-center"
          style={{
            backgroundImage: "url('/pharmacy.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Tint overlay */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "rgba(11, 31, 58, 0.58)" }}
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
            >
              Our Philosophy
            </p>

            <h2
              className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
            >
              Built by{" "}
              <span style={{ color: "#00C8E8" }}>pharmacists</span>
              <br className="hidden sm:block" /> who&apos;ve been in your shoes.
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
            >
              The pharmacy benefit landscape has evolved, but plan sponsors still
              deserve more — more clinical expertise, more flexibility, more
              accountability. Clarity wasn't built in a boardroom. It was built
              at the pharmacy counter, by clinicians who knew exactly what
              &ldquo;better&rdquo; should look like.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Philosophy — Proven, Aligned & Guaranteed */}
      <ScrollReveal>
        <GuaranteedSection />
      </ScrollReveal>
    </PageTransition>
  );
}
