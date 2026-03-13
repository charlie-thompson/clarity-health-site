import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    title: "Clarity",
    body: "Flat PMPM rates — transparent, predictable, and contractually locked. No hidden spreads, no margin buried in the drug cost.",
  },
  {
    title: "Confidence",
    body: "Dually-incentivized targets — our fees are on the line alongside yours. We only win when you save.",
  },
  {
    title: "Design",
    body: "Tailored clinical program design — including formulary collaboration, copay maximization, international pharmacy coordination, and patient assistance management — built around your plan's specific needs.",
  },
];

export default function GuaranteedSection() {
  return (
    <section className="bg-light-gray px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
          Proven, Aligned, &amp; Guaranteed
        </p>

        {/* Heading */}
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-dark-blue sm:text-4xl">
          Every penny spent on program fees is guaranteed to be returned in savings.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500">
          Our clients can rest confidently knowing our interests are aligned.
        </p>

        {/* Staggered card grid */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-3">
          {cards.map(({ title, body }, i) => (
            <ScrollReveal key={title} delay={i * 0.15} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-dark-blue/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                {/* Cyan top accent bar */}
                <div className="h-1 w-full flex-shrink-0 bg-light-blue" />

                {/* Card body */}
                <div className="flex flex-1 flex-col p-8 text-left">
                  <p className="text-lg font-bold text-dark-blue">{title}</p>
                  <div className="mb-4 mt-3 h-px w-8 bg-accent-teal/40" />
                  <p className="text-sm leading-relaxed text-gray-500">{body}</p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
