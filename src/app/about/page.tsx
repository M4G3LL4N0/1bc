import Section from "@/components/site/Section";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function AboutPage() {
  return (
    <main>
      <SubpageVisual variant="about" />
      <Section kicker="About 1BC" title="Built as a venture-grade execution system for elite founders">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass rounded-2xl p-5">
            <h3 className="text-xl font-semibold text-white">Not a social club</h3>
            <p className="mt-3 text-sm text-slate-300">
              1BC uses the billion-dollar race as a scoreboard, not an identity. The purpose is to
              raise execution standards, remove distractions, and compound founder capability.
            </p>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="text-xl font-semibold text-white">What intensity means here</h3>
            <p className="mt-3 text-sm text-slate-300">
              Intensity means disciplined execution, legal and ethical ambition, sustainable routines,
              and measurable outcomes over performative hustle.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
