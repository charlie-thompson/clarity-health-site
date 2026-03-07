import { ClipboardList, ShieldCheck, Puzzle } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "A Broken System.",
    body: "Three pharmacists spent years watching legacy PBMs obscure costs, pocket rebates, and leave plan sponsors with zero flexibility — paying more every year.",
  },
  {
    number: "02",
    Icon: ShieldCheck,
    title: "One Clear Mandate.",
    body: "The industry needed a PBM built to work for the client — not the middleman. Total transparency, full savings pass-through, programs tailored to real needs.",
  },
  {
    number: "03",
    Icon: Puzzle,
    title: "So, We Built Clarity.",
    body: "No legacy systems. No hidden layers. A clean-slate, pharmacist-designed PBM built around contractual transparency, à la carte cost containment, and high-touch member support.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative bg-white px-6 pt-24 pb-56">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="mb-6 text-center text-3xl font-bold text-dark-blue sm:text-4xl">
          How Clarity Was Built
        </h2>

        {/* Intro paragraph */}
        <p className="mx-auto mb-16 max-w-3xl text-center text-base leading-relaxed text-gray-500">
          Clarity Health Benefits is reshaping the pharmacy benefits space with a thoughtful, comprehensive, client-specific solution that includes best-in-class clinical programs, alternative sourcing plans, and much more to increase member satisfaction and decrease plan spend.
        </p>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0 sm:flex-row sm:items-start sm:gap-0">

          {/* Desktop dashed connector — sits behind the step nodes */}
          <div
            aria-hidden
            className="absolute left-8 top-8 hidden h-px w-[calc(100%-4rem)] sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #00C8E8 0, #00C8E8 8px, transparent 8px, transparent 16px)",
            }}
          />

          {steps.map((step, i) => {
            const { Icon, number } = step;
            return (
              <div key={i} className="relative flex flex-1 flex-col items-center text-center">

                {/* Mobile: dashed vertical line running down from icon */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-8 top-16 block h-[calc(100%+2rem)] w-px sm:hidden"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, #00C8E8 0, #00C8E8 8px, transparent 8px, transparent 16px)",
                    }}
                  />
                )}

                {/* Mobile layout: icon + content side-by-side aligned left */}
                <div className="flex w-full items-start gap-6 text-left sm:flex-col sm:items-center sm:text-center">

                  {/* Icon circle with ring */}
                  <div className="icon-ring relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-dark-blue">
                    <Icon className="text-accent-teal" size={28} strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <div className="pb-12 sm:pb-0 sm:px-4">
                    <p
                      aria-hidden
                      className="select-none text-6xl font-bold leading-none text-light-blue/25 sm:text-7xl"
                    >
                      {number}
                    </p>
                    <h3 className="mb-2 mt-2 text-lg font-bold text-dark-blue">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{step.body}</p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
      {/* Section bottom gradient → Services (#EBF7FC) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: "linear-gradient(to bottom, transparent, #EBF7FC)" }}
      />
    </section>
  );
}
