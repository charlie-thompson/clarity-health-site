import LogoDark from "./components/logos/LogoDark";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ResultsSection from "./components/ResultsSection";
import ContactSection from "./components/ContactSection";
import FadeInSection from "./components/FadeInSection";

const valueProps = [
  "True Claim-Level Transparency and Pass-Through",
  "Customizable and Personalized Cost Containment Strategies",
  "Built & Run by Pharmacists",
];

export default function Home() {
  return (
    <>
      {/* Hero — above fold, no fade wrapper */}
      <section className="bg-dark-blue w-full px-6 py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          {/* Logo */}
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <LogoDark style={{ width: "500px", maxWidth: "90vw", height: "auto", display: "block" }} priority />
          </div>

          {/* Accent divider */}
          <div className="mt-8 h-px w-[200px] bg-accent-teal" />

          {/* Heading */}
          <h1 className="mt-10 text-3xl font-light tracking-wide text-white sm:text-4xl md:text-5xl">
            Where others blur the line,
          </h1>
          <h2 className="mt-2 text-4xl font-bold tracking-wide text-accent-teal sm:text-5xl md:text-6xl">
            we clear it.
          </h2>

          {/* Value props */}
          <div className="mt-16 flex w-full flex-col items-stretch sm:flex-row">
            {valueProps.map((prop, i) => (
              <div
                key={i}
                className="flex flex-1 items-center border-b border-white/15 last:border-0 sm:border-0"
              >
                {/* Vertical divider — desktop only, between columns */}
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

      <FadeInSection>
        <AboutSection />
      </FadeInSection>

      <FadeInSection>
        <ServicesSection />
      </FadeInSection>

      <FadeInSection>
        <ResultsSection />
      </FadeInSection>

      <FadeInSection>
        <ContactSection />
      </FadeInSection>
    </>
  );
}
