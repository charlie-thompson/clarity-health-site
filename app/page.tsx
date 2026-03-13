import Link from "next/link";
import LogoDark from "./components/logos/LogoDark";
import TrustBar from "./components/TrustBar";
import FadeInSection from "./components/FadeInSection";

const valueProps = [
  "True Claim-Level Transparency and Pass-Through",
  "Customizable and Personalized Cost Containment Strategies",
  "Built & Run by Pharmacists",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative w-full px-6 py-24">
        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">

          {/* Logo */}
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <LogoDark style={{ width: "500px", maxWidth: "90vw", height: "auto", display: "block" }} priority />
          </div>

          {/* Accent divider + tagline */}
          <div className="mt-8 flex w-fit flex-col items-stretch">
            <div className="h-px bg-accent-teal" />
            <h1 className="mt-6 text-3xl font-light tracking-wide text-white sm:text-4xl md:text-5xl">
              Where others <span style={{ filter: "blur(1.5px)" }}>blur</span> the line,
            </h1>
          </div>
          <h2 className="mt-2 text-4xl font-bold tracking-wide text-accent-teal sm:text-5xl md:text-6xl">
            we clear it.
          </h2>

          {/* 3-pillar value props */}
          <div className="mt-16 flex w-full flex-col items-stretch sm:flex-row">
            {valueProps.map((prop, i) => (
              <div
                key={i}
                className="flex flex-1 items-center border-b border-white/15 last:border-0 sm:border-0"
              >
                {i > 0 && (
                  <div className="hidden h-16 w-px shrink-0 bg-accent-teal sm:block" />
                )}
                <p className="flex-1 px-6 py-6 text-base font-medium leading-relaxed text-white sm:px-8 sm:py-0">
                  {prop}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <TrustBar />

      {/* Family full-bleed section */}
      <FadeInSection>
        <section
          className="relative px-6 py-36 text-center"
          style={{
            backgroundImage: "url('/family.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Tint overlay */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "rgba(11, 31, 58, 0.55)" }}
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
            >
              Why It Matters
            </p>

            <h2
              className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
            >
              Pharmacy benefits designed around{" "}
              <span style={{ color: "#00C8E8" }}>people</span>,<br className="hidden sm:block" /> not profits.
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
            >
              Legacy PBMs were built to extract margin at every step — from
              rebates, spreads, and steering. Clarity was built to do the
              opposite: pass every dollar back to the plan, give members real
              access to affordable medications, and put pharmacists back in
              charge of patient care.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/about/our-story"
                className="rounded-full bg-[#0B1F3A] px-8 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#0e3568]"
              >
                Our Story
              </Link>
              <a
                href="mailto:support@clarityhealthbenefits.com"
                className="rounded-full border-2 border-white/70 px-8 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:border-accent-teal hover:text-accent-teal"
              >
                Get a Demo
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
