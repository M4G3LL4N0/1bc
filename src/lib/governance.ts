import { ScoredMember, calculateScores } from "@/lib/scoring";
import { Member } from "@/lib/members";

export const GOVERNANCE_RULES = {
  coreCouncilSeats: 2,
  dynamicBoardSeats: 3,
  rotatingOperatorSeats: 2,
  reputationFloor: 65,
};

export type RotationResult = {
  members: ScoredMember[];
  keptSeats: string[];
  gainedSeats: string[];
  lostSeats: string[];
};

export function runMonthlyBoardRotation(members: Member[]): RotationResult {
  const scored = members.map(calculateScores);
  const prevBoard = new Set(
    scored.filter((m) => m.role === "Performance Board" || m.isCoreCouncil).map((m) => m.id),
  );

  const coreCouncil = scored.filter((m) => m.isCoreCouncil);
  const eligible = scored
    .filter((m) => !m.isCoreCouncil && m.governanceEligible)
    .sort((a, b) => b.performanceScore + b.reputationScore - (a.performanceScore + a.reputationScore));

  const boardDynamic = eligible.slice(0, GOVERNANCE_RULES.dynamicBoardSeats).map((m) => m.id);
  const assigned = new Set([...coreCouncil.map((m) => m.id), ...boardDynamic]);
  const operatorSeats = eligible
    .filter((m) => !assigned.has(m.id) && m.contribution >= 75)
    .slice(0, GOVERNANCE_RULES.rotatingOperatorSeats)
    .map((m) => m.id);

  const nextMembers = scored.map((member) => {
    if (member.isCoreCouncil) return { ...member, boardStatus: "Core Council" as const };
    if (boardDynamic.includes(member.id)) {
      const gained = !prevBoard.has(member.id);
      return { ...member, boardStatus: gained ? ("Board Gained" as const) : ("Board Retained" as const) };
    }
    if (prevBoard.has(member.id)) return { ...member, boardStatus: "Board Lost" as const };
    return { ...member, boardStatus: "Member" as const };
  });

  return {
    members: nextMembers.map((m) => ({
      ...m,
      role: m.isCoreCouncil
        ? "Core Council"
        : boardDynamic.includes(m.id)
          ? "Performance Board"
          : operatorSeats.includes(m.id)
            ? "Operator Seat"
            : "Member",
    })),
    keptSeats: nextMembers
      .filter((m) => m.boardStatus === "Board Retained" || m.boardStatus === "Core Council")
      .map((m) => m.name),
    gainedSeats: nextMembers.filter((m) => m.boardStatus === "Board Gained").map((m) => m.name),
    lostSeats: nextMembers.filter((m) => m.boardStatus === "Board Lost").map((m) => m.name),
  };
}
