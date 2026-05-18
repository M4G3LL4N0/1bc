import Hero from "@/components/site/Hero";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { TrustStrip } from "@/components/TrustStrip";
import Section from "@/components/site/Section";
import GovernanceMap from "@/components/product/GovernanceMap";
import Pricing from "@/components/site/Pricing";
import CTA from "@/components/site/CTA";

export default function Home() {
  return (
    <main className="pb-8">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

      <Hero />
      <Section
        kicker="Governance architecture"
        title="Power is earned, measured, temporary - and constrained by trust"
      >
        <GovernanceMap />
      </Section>
      <Section
        kicker="Founder framing"
        title="High intensity without unhealthy behavior, shortcuts, or legal risk"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Disciplined execution and deep work over hustle theater",
            "Legal and ethical ambition with transparent accountability",
            "Sustainable high performance with no-distraction operating standards",
          ].map((point) => (
            <div key={point} className="glass rounded-2xl p-5 text-sm text-slate-200">
              {point}
            </div>
          ))}
        </div>
      </Section>
      <Section kicker="Membership" title="Serious pricing for serious operators">
        <Pricing />
      </Section>
      <CTA />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6"><HeroProductPanel /></section>
      <ProcessFlowSection />
    <MarketingGraphicsStack />
    </main>
  );
}
