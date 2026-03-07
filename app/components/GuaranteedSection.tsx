import FadeInSection from "./FadeInSection";

const cards = [
  {
    title: "Clarity",
    body: "Flat PMPM rates — transparent, predictable, and contractually locked. No hidden spreads, no margin buried in the drug cost.",
    items: null,
  },
  {
    title: "Confidence",
    body: "Dually-incentivized targets — our fees are on the line alongside yours. We only win when you save.",
    items: null,
  },
  {
    title: "Design",
    body: null,
    items: [
      "Formulary & Clinical Design Collaboration",
      "High-Touch Copay Maximization",
      "International Pharmacy Coordination",
      "PAP Program Management",
    ],
  },
];

export default function GuaranteedSection() {
  return (
    <section className="bg-white px-6 py-24">
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

        {/* Cards — equal height via CSS grid row stretch, stagger-animated */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-3">
          {cards.map(({ title, body, items }, i) => (
            <FadeInSection key={title} delay={i * 150} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-dark-blue/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                {/* Cyan top accent bar */}
                <div className="h-1 w-full flex-shrink-0 bg-light-blue" />

                {/* Card body */}
                <div className="flex flex-1 flex-col p-8 text-left">
                  <p className="text-lg font-bold text-dark-blue">{title}</p>
                  <div className="mb-4 mt-3 h-px w-8 bg-accent-teal/40" />

                  {body ? (
                    <p className="text-sm leading-relaxed text-gray-500">{body}</p>
                  ) : (
                    <ul className="space-y-2.5">
                      {items!.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-relaxed text-gray-500"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}
