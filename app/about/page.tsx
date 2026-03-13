import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import OriginSection from "../components/OriginSection";
import MissionSection from "../components/MissionSection";
import FoundersSection from "../components/FoundersSection";
import FamilySection from "../components/FamilySection";

export const metadata: Metadata = {
  title: "About — Clarity Health Benefits",
  description:
    "Meet the pharmacists who built Clarity — the transparent, pharmacist-designed pharmacy benefit manager.",
};

export default function AboutPage() {
  return (
    <>
      <OriginSection />

      <ScrollReveal>
        <MissionSection />
      </ScrollReveal>

      <ScrollReveal>
        <FoundersSection />
      </ScrollReveal>

      <FamilySection />
    </>
  );
}
