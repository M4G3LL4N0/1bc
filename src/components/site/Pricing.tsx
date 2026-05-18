import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const tiers = [
  {
    name: "Observer",
    price: "Free (Application)",
    points: ["Read-only briefings", "Community pulse", "Invite-only acceptance"],
  },
  {
    name: "Operator",
    price: "$399 / month",
    points: ["Founder scorecard", "Monthly reviews", "Peer accountability sprints"],
  },
  {
    name: "Board Track",
    price: "$1,200 / month",
    points: ["Board eligibility tracking", "Advanced performance analytics", "Priority strategy circles"],
  },
  {
    name: "Institutional",
    price: "Private pricing",
    points: ["Dedicated founder cohort", "Custom governance controls", "Studio and accelerator deployment"],
  },
];

export default function Pricing() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {tiers.map((tier) => (
        <Card key={tier.name}>
          <Badge tone={tier.name === "Board Track" ? "gold" : "slate"}>{tier.name}</Badge>
          <h3 className="mt-4 text-xl font-semibold text-white">{tier.name}</h3>
          <div className="mt-2 text-sm text-cyan-100">{tier.price}</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {tier.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
