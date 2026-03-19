import { BadgeCheck, ShieldCheck } from "lucide-react";

const signals = [
  { Icon: BadgeCheck,  label: "Best-in-Class, 100% Pass-Through Rebates" },
  { Icon: ShieldCheck, label: "100% Contractual Savings Guarantees" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-dark-blue/10 bg-dark-blue/[0.04] px-6 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 sm:gap-14">
        {signals.map(({ Icon, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            {i > 0 && (
              <span className="hidden h-4 w-px bg-dark-blue/20 sm:block" />
            )}
            <Icon size={21} className="shrink-0 text-accent-teal" strokeWidth={2} />
            <span className="text-sm font-semibold tracking-wide text-dark-blue">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
