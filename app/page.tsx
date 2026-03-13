import Image from "next/image";
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

      {/* Family split section */}
      <FadeInSection>
        <section className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg sm:h-96 lg:h-[480px]">
              <Image
                src="/family.jpg"
                alt="Family benefiting from Clarity Health Benefits pharmacy coverage"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Copy */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
                Why It Matters
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-dark-blue sm:text-5xl">
                Pharmacy benefits designed around{" "}
                <span className="text-accent-teal">people</span>, not profits.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-500">
                Legacy PBMs were built to extract margin at every step — from
                rebates, spreads, and steering. Clarity was built to do the
                opposite: pass every dollar back to the plan, give members
                real access to affordable medications, and put pharmacists
                back in charge of patient care.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/about/our-story"
                  className="inline-block rounded-full bg-dark-blue px-7 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-mid-blue"
                >
                  Our Story
                </Link>
                <a
                  href="mailto:support@clarityhealthbenefits.com"
                  className="inline-block rounded-full border border-accent-teal px-7 py-3 text-sm font-bold text-accent-teal transition-colors duration-200 hover:bg-accent-teal hover:text-dark-blue"
                >
                  Get a Demo
                </a>
              </div>
            </div>

          </div>
        </section>
      </FadeInSection>
    </>
  );
}
