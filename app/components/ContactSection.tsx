export default function ContactSection() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">

        <h2 className="text-3xl font-light text-dark-blue sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
          The PBM industry is overdue for
        </h2>
        <h3 className="mt-2 text-4xl font-bold text-accent-teal sm:text-5xl md:text-6xl">
          a better alternative.
        </h3>

        <p className="mt-8 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg">
          Clarity was built to be exactly that — transparent, customizable, and
          run by the pharmacists who designed it.
        </p>

        <a
          href="mailto:info@clarityhealthbenefits.com"
          className="cta-btn-glow mt-12 rounded-full bg-accent-teal px-10 py-4 text-base font-semibold text-dark-blue transition-colors duration-200 hover:bg-[#00A8C4]"
        >
          Get in Touch
        </a>

      </div>
    </section>
  );
}
