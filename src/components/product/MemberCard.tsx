import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { ScoredMember } from "@/lib/scoring";

export default function MemberCard({ member }: { member: ScoredMember }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-white">{member.name}</h4>
          <p className="text-sm text-slate-400">{member.company}</p>
        </div>
        <Badge tone={member.toxicHighPerformer ? "rose" : "cyan"}>{member.role}</Badge>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <div className="text-slate-400">Performance</div>
          <div className="font-semibold text-cyan-100">{member.performanceScore}</div>
        </div>
        <div>
          <div className="text-slate-400">Reputation</div>
          <div className="font-semibold text-amber-100">{member.reputationScore}</div>
        </div>
        <div>
          <div className="text-slate-400">Eligibility</div>
          <div className="font-semibold text-slate-200">{member.governanceEligible ? "Eligible" : "Blocked"}</div>
        </div>
        <div>
          <div className="text-slate-400">Status</div>
          <div className="font-semibold text-slate-200">{member.boardStatus}</div>
        </div>
      </div>
      {member.toxicHighPerformer ? (
        <p className="mt-4 text-xs text-rose-200">
          Flagged: high output with weak trust profile. Governance review required.
        </p>
      ) : null}
    </Card>
  );
}
