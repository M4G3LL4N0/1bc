import Pricing from "@/components/site/Pricing";
import { SubpageVisual } from "@/components/SubpageVisual";
import Section from "@/components/site/Section";

export default function PricingPage() {
  return (
    <main>
      <SubpageVisual variant="pricing" />
      <Section kicker="Pricing" title="Membership tracks for different levels of execution commitment">
        <Pricing />
      </Section>
    </main>
  );
}
