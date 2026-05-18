import GovernanceMap from "@/components/product/GovernanceMap";
import { SubpageVisual } from "@/components/SubpageVisual";
import Section from "@/components/site/Section";

const constitution = [
  ["Purpose", "Build a founder operating system that rewards disciplined execution and contribution."],
  ["Operating principles", "Truthful metrics, deep work, legal and ethical ambition, and transparent accountability."],
  ["Membership standards", "Members must ship consistently, improve peers, and uphold trust under pressure."],
  ["Board rotation rules", "Dynamic seats rotate monthly from score + reputation. Core Council remains stable."],
  ["Removal rules", "Bad actors may be removed regardless of top-line output or political support."],
  ["Anti-politics clause", "No popularity voting, alliance blocs, or influence without measurable contribution."],
  ["No-distraction clause", "Members minimize vanity activities and protect focused execution windows."],
  ["No-passenger rule", "Passive participation loses influence. Everyone carries measurable weight."],
  ["Kill switch clause", "Core Council and Reputation Council can freeze governance if standards are threatened."],
  ["Founder protection clause", "Long-term builders are protected from short-term optics and political churn."],
  ["Long-term vision clause", "1BC compounds founder quality over years, not hype cycles."],
];

export default function GovernancePage() {
  return (
    <main>
      <SubpageVisual variant="default" />
      <Section kicker="Governance" title="1BC Constitution">
        <p className="mb-6 max-w-3xl text-slate-300">
          1BC is a performance environment with governance designed to prevent politics, preserve standards,
          and keep the system stable under growth.
        </p>
        <GovernanceMap />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {constitution.map(([title, text]) => (
            <article key={title} className="glass rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
