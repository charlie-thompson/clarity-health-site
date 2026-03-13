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
      "Source identical medications from Tier 1 pharmacy partners at 35–65% below US list prices.",
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
    <section className="bg-light-gray relative px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Stagger-animated card grid */}
        <ServiceCardGrid>
          {services.map(({ Icon, title, description }) => (

            <div
              key={title}
              className="group service-card service-card-item fade-in-section relative flex flex-col rounded-2xl bg-white py-7 pl-7 pr-6"
            >
              {/* Top gradient bar */}
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{
                  background: "linear-gradient(to right, #00C8E8, #0673BC)",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              {/* Left gradient border — 4px, rounded to match card corners */}
              <div
                className="service-card-border absolute left-0 top-0 h-full w-1 rounded-l-2xl"
                style={{
                  background: "linear-gradient(to bottom, #00C8E8, #002D5C)",
                }}
              />

              {/* Icon square */}
              <div
                className="service-icon mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(0, 200, 232, 0.10)" }}
              >
                <Icon
                  className="text-accent-teal"
                  size={20}
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-dark-blue">{title}</h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748B" }}
              >
                {description}
              </p>

              {/* Hover-reveal contact link */}
              <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-12">
                <div className="mt-4 border-t border-accent-teal/20 pt-3">
                  <a
                    href="mailto:support@clarityhealthbenefits.com"
                    className="text-xs font-semibold text-accent-teal hover:underline"
                  >
                    Schedule a free assessment →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </ServiceCardGrid>

        {/* Section CTA */}
        <div className="mt-14 text-center">
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
