import LogoDark from "./components/logos/LogoDark";
import TrustBar from "./components/TrustBar";

const valueProps = [
  "True Claim-Level Transparency and Pass-Through",
  "Customizable and Personalized Cost Containment Strategies",
  "Built & Run by Pharmacists",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-blue w-full px-6 py-24">
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
    </>
  );
}
