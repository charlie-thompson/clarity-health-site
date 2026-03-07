import { TrendingDown, ShieldCheck, BadgeCheck, Star } from "lucide-react";

const signals = [
  { Icon: TrendingDown, label: "100% Rebate Pass-Through" },
  { Icon: ShieldCheck,  label: "Pharmacist-Designed" },
  { Icon: BadgeCheck,   label: "Contractual Savings Guarantees" },
  { Icon: Star,         label: "94% Member Satisfaction" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-dark-blue/10 bg-dark-blue/[0.04] px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 sm:gap-12">
        {signals.map(({ Icon, label }, i) => (
          <div key={label} className="flex items-center gap-2">
            {i > 0 && (
              <span className="hidden h-3 w-px bg-dark-blue/20 sm:block" />
            )}
            <Icon size={15} className="shrink-0 text-accent-teal" strokeWidth={2} />
            <span className="text-xs font-semibold tracking-wide text-dark-blue">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
