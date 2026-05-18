import Card from "@/components/ui/Card";

const layers = [
  {
    title: "Permanent Core Council",
    text: "Long-term operators who protect mission and standards. Immune to monthly rotation.",
  },
  {
    title: "Dynamic Performance Board",
    text: "Seats earned monthly from measured output and trust. No permanent political control.",
  },
  {
    title: "Rotating Operator Seats",
    text: "Contribution-driven seats for founders improving other members and system throughput.",
  },
  {
    title: "Reputation Council",
    text: "Independently reviews ethics, trust, and fit. Bad actors can be removed despite performance.",
  },
  {
    title: "Emergency Kill Switch",
    text: "Hard circuit breaker that freezes governance when standards risk erosion.",
  },
];

export default function GovernanceMap() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {layers.map((layer) => (
        <Card key={layer.title}>
          <h4 className="text-lg font-semibold text-white">{layer.title}</h4>
          <p className="mt-2 text-sm text-slate-300">{layer.text}</p>
        </Card>
      ))}
    </div>
  );
}
