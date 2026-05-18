import Card from "@/components/ui/Card";

export default function RotationEngine({
  keptSeats,
  gainedSeats,
  lostSeats,
}: {
  keptSeats: string[];
  gainedSeats: string[];
  lostSeats: string[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Kept Seats</h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {keptSeats.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">Gained Seats</h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {gainedSeats.length ? gainedSeats.map((name) => <li key={name}>{name}</li>) : <li>None</li>}
        </ul>
      </Card>
      <Card>
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">Lost Seats</h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {lostSeats.length ? lostSeats.map((name) => <li key={name}>{name}</li>) : <li>None</li>}
        </ul>
      </Card>
    </div>
  );
}
