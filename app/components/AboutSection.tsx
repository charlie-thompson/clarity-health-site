import { ClipboardList, ShieldCheck, Puzzle } from "lucide-react";

const steps = [
  {
    Icon: ClipboardList,
    title: "A Broken System.",
    body: "Three pharmacists spent years watching legacy PBMs obscure costs, pocket rebates, and leave plan sponsors with zero flexibility — paying more every year.",
  },
  {
    Icon: ShieldCheck,
    title: "One Clear Mandate.",
    body: "The industry needed a PBM built to work for the client — not the middleman. Total transparency, full savings pass-through, programs tailored to real needs.",
  },
  {
    Icon: Puzzle,
    title: "So, We Built Clarity.",
    body: "No legacy systems. No hidden layers. A clean-slate, pharmacist-designed PBM built around contractual transparency, à la carte cost containment, and high-touch member support.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="mb-16 text-center text-3xl font-bold text-navy sm:text-4xl">
          How Clarity Was Built
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0 sm:flex-row sm:items-start sm:gap-0">

          {/* Desktop dashed connector — sits behind the step nodes */}
          <div
            aria-hidden
            className="absolute left-8 top-8 hidden h-px w-[calc(100%-4rem)] sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #00D4E0 0, #00D4E0 8px, transparent 8px, transparent 16px)",
            }}
          />

          {steps.map((step, i) => {
            const { Icon } = step;
            return (
              <div key={i} className="relative flex flex-1 flex-col items-center text-center">

                {/* Mobile: dashed vertical line running down from icon */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-8 top-16 block h-[calc(100%+2rem)] w-px sm:hidden"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, #00D4E0 0, #00D4E0 8px, transparent 8px, transparent 16px)",
                    }}
                  />
                )}

                {/* Mobile layout: icon + content side-by-side aligned left */}
                <div className="flex w-full items-start gap-6 text-left sm:flex-col sm:items-center sm:text-center">

                  {/* Icon circle */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Icon className="text-accent" size={28} strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <div className="pb-12 sm:pb-0 sm:px-4">
                    <h3 className="mb-2 text-lg font-bold text-navy">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{step.body}</p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
