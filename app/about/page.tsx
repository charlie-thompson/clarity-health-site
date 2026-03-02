import type { Metadata } from "next";
import FadeInSection from "../components/FadeInSection";
import OriginSection from "../components/OriginSection";
import MissionSection from "../components/MissionSection";
import FoundersSection from "../components/FoundersSection";

export const metadata: Metadata = {
  title: "About — Clarity Health Benefits",
  description:
    "Meet the pharmacists who built Clarity — the transparent, pharmacist-designed pharmacy benefit manager.",
};

export default function AboutPage() {
  return (
    <>
      <OriginSection />

      <FadeInSection>
        <MissionSection />
      </FadeInSection>

      <FadeInSection>
        <FoundersSection />
      </FadeInSection>
    </>
  );
}
