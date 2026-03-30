"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Founder {
  name: string;
  title: string;
  initials: string;
  photoFilename: string;
  photo?: string;
  bio: string[] | null;
}

const founders: Founder[] = [
  {
    name: "Dr. Maney Mazloom",
    title: "CEO & Co-Founder",
    initials: "MM",
    photoFilename: "team-maney-mazloom.jpg",
    photo: "/maney.png",
    bio: [
      "Board-certified licensed pharmacist, PharmD from Mercer University College of Pharmacy",
      "Co-founded Encompass RX (2012) — grew to nearly $500M/year revenue before CVS Health acquisition in under 6 years",
      "Co-founded MS-Rx (2014) — first-of-its-kind patient management model for MS and neurology patients with the MS Center of Atlanta",
      "Active angel investor in Health Tech and Health & Wellness sectors",
      "Advisory board member of CHRIS 180 and Cliff Valley School",
    ],
  },
  {
    name: "Dr. John Olsen",
    title: "President & Co-Founder",
    initials: "JO",
    photoFilename: "team-john-olsen.jpg",
    photo: "/john-olsen.png",
    bio: [
      "20+ years advocating for patients and clients in the pharmacy industry",
      "Built and operated multiple successful healthcare companies, always focused on delivering high-quality, high-touch, affordable services",
      "Clarity Health Benefits was born from this same mission — decidedly focused on providing a fresh perspective in an outdated industry",
    ],
  },
  {
    name: "Dr. Stephanie Dowell",
    title: "COO & Co-Founder",
    initials: "S",
    photoFilename: "team-stephanie.jpg",
    photo: "/stephanie.jpeg",
    bio: [
      "Pharmacist with 16+ years of experience across retail, specialty, and pharmacy benefit channels",
      "Expertise in pharmacy benefit strategy, specialty pharmacy operations, personalized patient care, and cost containment",
      "Managed and scaled a fertility pharmacy program — building clinical and business partnerships with providers while optimizing patient access and cost savings",
      "Deep experience with benefit design, manufacturer assistance programs, and alternative sourcing strategies",
      "At Clarity, leads delivery of transparent, customizable pharmacy benefit solutions that help self-funded groups control spend and maximize savings",
    ],
  },
];

function FounderAvatar({ initials, photo, name }: { initials: string; photo?: string; name: string }) {
  if (photo) {
    return (
      <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-dark-blue">
        <Image src={photo} alt={name} fill className="object-cover" />
      </div>
    );
  }
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

        <ScrollReveal>
          <h2 className="mb-16 text-center text-3xl font-bold text-dark-blue sm:text-4xl">
            Meet the Founders
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {founders.map(({ name, title, initials, photo, bio }, i) => (
            <ScrollReveal key={name} delay={i * 0.1} className="flex flex-col">
              <div className="flex flex-1 flex-col items-center rounded-2xl bg-white px-8 py-10 text-center shadow-sm">

                <FounderAvatar initials={initials} photo={photo} name={name} />

                <h3 className="mt-5 text-lg font-bold text-dark-blue">{name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-teal">{title}</p>

                <div className="my-5 h-px w-10 bg-accent-teal/40" />

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
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
