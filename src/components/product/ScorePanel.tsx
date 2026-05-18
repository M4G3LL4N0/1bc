import Card from "@/components/ui/Card";
import { ScoredMember } from "@/lib/scoring";

export default function ScorePanel({ members }: { members: ScoredMember[] }) {
  const avgPerformance = Math.round(
    members.reduce((sum, member) => sum + member.performanceScore, 0) / members.length,
  );
  const avgReputation = Math.round(
    members.reduce((sum, member) => sum + member.reputationScore, 0) / members.length,
  );
  const flagged = members.filter((member) => member.toxicHighPerformer).length;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Avg Performance</p>
        <p className="mt-2 text-3xl font-semibold text-cyan-100">{avgPerformance}</p>
      </Card>
      <Card>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Avg Reputation</p>
        <p className="mt-2 text-3xl font-semibold text-amber-100">{avgReputation}</p>
      </Card>
      <Card>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Toxic High Performers</p>
        <p className="mt-2 text-3xl font-semibold text-rose-100">{flagged}</p>
      </Card>
    </div>
  );
}
