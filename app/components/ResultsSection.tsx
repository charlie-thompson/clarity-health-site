import CountUp from "./CountUp";

const stats = [
  {
    prefix: "$",
    to: 2.69,
    suffix: "M",
    decimals: 2,
    label: "Total Cost Containment Savings",
    sub: "CopaySync · International Pharmacy · PAP",
  },
  {
    prefix: "+",
    to: 50,
    suffix: "%",
    decimals: 0,
    label: "Rebate Growth Year-Over-Year",
    sub: "$3.17M in total rebates returned to the plan",
  },
  {
    prefix: "",
    to: 94,
    suffix: "%",
    decimals: 0,
    label: "Member Satisfaction Rating",
    sub: "Prompt, Personalized, Problem-Solving Service",
  },
];

const breakdown = [
  {
    amount: "$1,537,017",
    program: "CopaySync",
    sub: ">100 brand/specialty drugs enrolled",
  },
  {
    amount: "$831,491",
    program: "International Pharmacy",
    sub: "$70,000/enrolled member in savings",
  },
  {
    amount: "$321,834",
    program: "Patient Assistance (PAP)",
    sub: "Limited single brand focus",
  },
];

export default function ResultsSection() {
  return (
    <section className="relative bg-light-gray px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — stat blocks */}
          <div className="flex flex-col gap-10">
            {stats.map(({ prefix, to, suffix, decimals, label, sub }) => (
              <div key={label} className="border-l-2 border-accent-teal pl-6">
                <p className="text-5xl font-bold text-accent-teal sm:text-6xl">
                  <CountUp prefix={prefix} to={to} suffix={suffix} decimals={decimals} />
                </p>
                <p className="mt-2 text-lg font-semibold text-dark-blue">{label}</p>
                <p className="mt-1 text-sm text-[#4A5568]">{sub}</p>
              </div>
            ))}
          </div>

          {/* Right — program breakdown */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-dark-blue">
              Program Breakdown
            </h3>
            <div className="flex flex-col gap-7">
              {breakdown.map(({ amount, program, sub }) => (
                <div
                  key={program}
                  className="flex flex-col gap-1 border-b border-dark-blue/10 pb-7 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <div>
                    <p className="text-base font-semibold text-dark-blue">
                      {program}
                    </p>
                    <p className="mt-0.5 text-sm text-[#4A5568]">{sub}</p>
                  </div>
                  <p className="text-2xl font-bold text-accent-teal sm:shrink-0">
                    {amount}
                  </p>
                </div>
              ))}
            </div>

            {/* Pill badge */}
            <div className="mt-8 inline-flex items-center rounded-full border border-accent-teal/40 bg-accent-teal/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-accent-teal">
                $37 PMPM Saved · 3 Programs
              </span>
            </div>
          </div>

        </div>

        {/* Full-width callout banner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-xl border border-dark-blue/10 bg-white px-8 py-6 text-center shadow-sm sm:flex-row sm:text-left">
          <p className="text-sm font-medium text-dark-blue sm:text-base">
            ⚡ GLP-1 utilization rose 275% (+$750K spend) — fully managed without a net increase in drug cost
          </p>
          <div className="shrink-0 rounded-full bg-accent-teal/15 px-5 py-1.5">
            <span className="text-sm font-bold uppercase tracking-wide text-accent-teal">
              $37 PMPM Saved · 3 Programs
            </span>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <a
            href="mailto:support@clarityhealthbenefits.com"
            className="inline-block rounded-full bg-accent-teal px-10 py-4 text-base font-semibold text-dark-blue transition-colors duration-200 hover:bg-light-blue"
          >
            Get a Demo
          </a>
        </div>

      </div>
    </section>
  );
}
