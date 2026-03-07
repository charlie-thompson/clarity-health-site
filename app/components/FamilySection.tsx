import Image from "next/image";

export default function FamilySection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background photo — no heavy overlay so it stays bright and warm */}
      <Image
        src="/family.jpg"
        alt="Family benefiting from Clarity Health Benefits pharmacy coverage"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Bottom-only gradient — only darkens the text area, top of photo stays fully visible */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,45,92,0.88) 0%, rgba(0,45,92,0.15) 50%, transparent 100%)",
        }}
      />

      {/* Content — anchored to bottom of section */}
      <div className="relative z-10 flex min-h-[580px] flex-col items-center justify-end px-6 pb-16 text-center">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
        >
          Why It Matters
        </p>
        <h2
          className="text-3xl font-bold text-white sm:text-4xl"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.70)" }}
        >
          Pharmacy Benefits That Put Families First
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.55)" }}
        >
          Clarity Health Benefits is reshaping the pharmacy benefits space with a
          thoughtful, comprehensive, client-specific solution that includes
          best-in-class clinical programs, alternative sourcing plans, and much
          more to increase member satisfaction and decrease plan spend.
        </p>
        <a
          href="mailto:info@clarityhealthbenefits.com"
          className="mt-8 inline-block rounded-full bg-accent-teal px-8 py-3.5 text-sm font-semibold text-dark-blue transition-colors duration-200 hover:bg-light-blue"
        >
          Get in Touch
        </a>
      </div>

    </section>
  );
}
