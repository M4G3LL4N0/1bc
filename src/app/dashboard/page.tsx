import BoardDashboard from "@/components/product/BoardDashboard";
import { SubpageVisual } from "@/components/SubpageVisual";
import Section from "@/components/site/Section";

export default function DashboardPage() {
  return (
    <main>
      <SubpageVisual variant="dashboard" />
      <Section kicker="Live Demo" title="1BC Board Dashboard">
        <p className="mb-6 max-w-3xl text-slate-300">
          This interactive demo tracks members, computes weighted performance and reputation scores,
          and runs monthly board rotation logic using local TypeScript governance rules.
        </p>
        <BoardDashboard />
      </Section>
    </main>
  );
}
