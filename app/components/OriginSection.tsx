import { ClipboardList, ShieldCheck, Puzzle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { Icon: LucideIcon; number: string; title: string; body: string }[] = [
  {
    Icon: ClipboardList,
    number: "01",
    title: "A Broken System",
    body: "Three pharmacists spent years watching legacy PBMs obscure costs, pocket rebates, and leave plan sponsors with zero flexibility — paying more every year.",
  },
  {
    Icon: ShieldCheck,
    number: "02",
    title: "One Clear Mandate",
    body: "It became clear the industry needed a PBM built to work for the client — not the middleman. Total transparency, full savings pass-through, programs tailored to real needs.",
  },
  {
    Icon: Puzzle,
    number: "03",
    title: "So, We Built Clarity",
    body: "No legacy systems. No hidden layers. A clean-slate, pharmacist-designed PBM built around contractual transparency, à la carte cost containment, and high-touch member support.",
  },
];

export default function OriginSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Eyebrow + heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
          Our Story
        </p>
        <h2 className="mt-3 mb-20 text-center text-3xl font-bold text-dark-blue sm:text-4xl">
          How Clarity Was Built
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col sm:flex-row sm:items-start">

          {/* Desktop dashed connector — behind nodes */}
          <div
            aria-hidden
            className="absolute left-8 top-8 hidden h-px w-[calc(100%-4rem)] sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #00C8E8 0, #00C8E8 8px, transparent 8px, transparent 16px)",
            }}
          />

          {steps.map(({ Icon, number, title, body }, i) => (
            <div key={i} className="relative flex flex-1 flex-col items-center text-center">

              {/* Mobile: dashed vertical connector below each non-last node */}
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

              {/* Mobile: icon + text side-by-side; Desktop: stacked centered */}
              <div className="flex w-full items-start gap-6 text-left sm:flex-col sm:items-center sm:text-center">

                {/* Icon node */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full bg-dark-blue">
                  <Icon className="text-accent-teal" size={26} strokeWidth={1.75} />
                </div>

                {/* Text block */}
                <div className="pb-12 sm:pb-0 sm:px-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent-teal">
                    {number}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-dark-blue">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{body}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
