interface Founder {
  name: string;
  title: string;
  initials: string;
  /** Swap to <Image> once team-*.jpg files are added to /public/images/ */
  photoFilename: string;
  bio: string[] | null;
}

const founders: Founder[] = [
  {
    name: "Dr. Maney Mazloom",
    title: "Co-Founder",
    initials: "MM",
    photoFilename: "team-maney-mazloom.jpg",
    bio: [
      "Board-certified licensed pharmacist, PharmD from Mercer University College of Pharmacy",
      "Co-founded Encompass RX (2012) — grew to nearly $500M/year revenue before CVS Health acquisition in under 6 years",
      "Co-founded MS-Rx (2014) — first-of-its-kind patient management model for MS and neurology patients with the MS Center of Atlanta",
      "Active angel investor in Health Tech and Health & Wellness sectors",
      "Advisory board member of CHRIS 180 and Cliff Valley School",
    ],
  },
  {
    name: "John Olsen",
    title: "Co-Founder",
    initials: "JO",
    photoFilename: "team-john-olsen.jpg",
    bio: null,
  },
  {
    name: "Stephanie",
    title: "Co-Founder",
    initials: "S",
    photoFilename: "team-stephanie.jpg",
    bio: null,
  },
];

function FounderAvatar({ initials }: { initials: string }) {
  return (
    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-dark-blue text-2xl font-bold text-white">
      {initials}
    </div>
  );
}

export default function FoundersSection() {
  return (
    <section className="bg-light-bg px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Eyebrow + heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
          Our Team
        </p>
        <h2 className="mt-3 mb-16 text-center text-3xl font-bold text-dark-blue sm:text-4xl">
          Meet the Founders
        </h2>

        {/* Founder grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {founders.map(({ name, title, initials, bio }) => (
            <div
              key={name}
              className="flex flex-col items-center rounded-2xl bg-white px-8 py-10 text-center shadow-sm"
            >
              {/* Avatar */}
              <FounderAvatar initials={initials} />

              {/* Name + title */}
              <h3 className="mt-5 text-lg font-bold text-dark-blue">{name}</h3>
              <p className="mt-1 text-sm font-semibold text-accent-teal">{title}</p>

              {/* Divider */}
              <div className="my-5 h-px w-10 bg-accent-teal/40" />

              {/* Bio */}
              {bio ? (
                <ul className="space-y-2.5 text-left">
                  {bio.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-gray-500">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm italic text-gray-400">Bio coming soon.</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
