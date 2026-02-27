const stats = [
  {
    value: "$2.69M",
    label: "Total Cost Containment Savings",
    sub: "Copay Max · International Pharmacy · PAP",
  },
  {
    value: "+50%",
    label: "Rebate Growth Year-Over-Year",
    sub: "$3.17M in total rebates returned to the plan",
  },
  {
    value: "94%",
    label: "Member Satisfaction Rating",
    sub: "Prompt, Personalized, Problem-Solving Service",
  },
];

const breakdown = [
  {
    amount: "$1,537,017",
    program: "Copay Maximization",
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
    sub: "With a limited single brand focus",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-navy px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            2025 Client Case Study
          </h2>
          <p className="mt-2 text-lg font-semibold text-accent">
            3,500-member labor union
          </p>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — stat blocks */}
          <div className="flex flex-col gap-10">
            {stats.map(({ value, label, sub }) => (
              <div key={value} className="border-l-2 border-accent pl-6">
                <p className="text-5xl font-bold text-accent sm:text-6xl">
                  {value}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{label}</p>
                <p className="mt-1 text-sm text-gray-400">{sub}</p>
              </div>
            ))}
          </div>

          {/* Right — program breakdown */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Program Breakdown
            </h3>
            <div className="flex flex-col gap-7">
              {breakdown.map(({ amount, program, sub }) => (
                <div
                  key={program}
                  className="flex flex-col gap-1 border-b border-white/10 pb-7 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <div>
                    <p className="text-base font-semibold text-white">
                      {program}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-400">{sub}</p>
                  </div>
                  <p className="text-2xl font-bold text-accent sm:shrink-0">
                    {amount}
                  </p>
                </div>
              ))}
            </div>

            {/* Pill badge */}
            <div className="mt-8 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-accent">
                $37 PMPM Saved · 3 Programs
              </span>
            </div>
          </div>

        </div>

        {/* Full-width banner */}
        <div className="mt-14 rounded-xl bg-white/5 px-8 py-6 text-center">
          <p className="text-sm font-medium text-white sm:text-base">
            ⚡ GLP-1 utilization rose 275% (+$750K spend) — fully managed
            without a net increase in drug cost
          </p>
        </div>

      </div>
    </section>
  );
}
