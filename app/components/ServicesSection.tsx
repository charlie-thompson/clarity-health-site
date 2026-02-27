import {
  BadgeDollarSign,
  Globe,
  HeartHandshake,
  Landmark,
  SlidersHorizontal,
  Package,
  TrendingDown,
  BadgeCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ServiceCardGrid from "./ServiceCardGrid";

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: BadgeDollarSign,
    title: "Copay Maximization",
    description:
      "Redirect manufacturer brand-drug copay assistance to the plan. Typically saves $12–$16K per specialty drug enrolled.",
  },
  {
    Icon: Globe,
    title: "International Pharmacy",
    description:
      "Source identical medications from Tier 1 pharmacy partners at 35–65% below US list prices. Personal importation compliant, same clinical standards.",
  },
  {
    Icon: HeartHandshake,
    title: "Patient Assistance (PAP)",
    description:
      "Secure free medications directly from manufacturer programs for qualifying members — zero drug cost to the plan and member.",
  },
  {
    Icon: Landmark,
    title: "340B Pharmacy",
    description:
      "Access drugs at below-acquisition-cost pricing through eligible 340B health system partners for qualifying members.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Flexible Fee Structure",
    description:
      "You choose: PMPM, per-claim, or a hybrid model. Fees are transparent, contractual, and never hidden in drug margins.",
  },
  {
    Icon: Package,
    title: "Mail & Specialty of Choice",
    description:
      "Select your preferred mail-order and specialty pharmacy providers. No mandatory steering to PBM-affiliated pharmacies.",
  },
  {
    Icon: TrendingDown,
    title: "Market-Leading Rebates",
    description:
      "100% pass-through of all manufacturer rebates. We retain nothing — every dollar goes back to your plan.",
  },
  {
    Icon: BadgeCheck,
    title: "Savings Guarantees",
    description:
      "Contractual net drug spend guarantees. We put our fees on the line — backed by real performance, not projections.",
  },
  {
    Icon: Users,
    title: "High-Touch Member Engagement",
    description:
      "Proactive outreach, adherence programs, pharmacist access, and drug cost navigation built into the plan — not a buy-up.",
  },
];

export default function ServicesSection() {
  return (
    <section className="geo-pattern relative bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
          Our Cost Containment Toolkit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-500">
          No two plans are alike. Choose only the programs that fit your
          population, budget, and goals — with full transparency and contractual
          savings guarantees.
        </p>

        {/* Stagger-animated card grid */}
        <ServiceCardGrid>
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="service-card service-card-item fade-in-section relative flex flex-col rounded-2xl bg-white py-7 pl-7 pr-6"
            >
              {/* Left gradient border — 4px, rounded to match card corners */}
              <div
                className="service-card-border absolute left-0 top-0 h-full w-1 rounded-l-2xl"
                style={{
                  background: "linear-gradient(to bottom, #00D4E0, #0B1F3A)",
                }}
              />

              {/* Icon square */}
              <div
                className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(0, 212, 224, 0.10)" }}
              >
                <Icon
                  className="text-accent"
                  size={20}
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[15px] font-bold text-navy">{title}</h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748B" }}
              >
                {description}
              </p>
            </div>
          ))}
        </ServiceCardGrid>

      </div>
    </section>
  );
}
