import { Member } from "@/lib/members";

export type ScoredMember = Member & {
  performanceScore: number;
  reputationScore: number;
  governanceEligible: boolean;
  boardStatus: "Core Council" | "Board Retained" | "Board Gained" | "Board Lost" | "Member";
  toxicHighPerformer: boolean;
  influenceTier: "High" | "Medium" | "Low";
};

const performanceWeights = {
  revenueGrowth: 0.18,
  productVelocity: 0.16,
  capitalRaised: 0.1,
  netWorthDelta: 0.1,
  strategicLeverage: 0.1,
  consistency: 0.11,
  contribution: 0.1,
  focusScore: 0.09,
  executionStreak: 0.06,
};

export function calculateScores(member: Member): ScoredMember {
  const performanceRaw =
    member.revenueGrowth * performanceWeights.revenueGrowth +
    member.productVelocity * performanceWeights.productVelocity +
    member.capitalRaised * performanceWeights.capitalRaised +
    member.netWorthDelta * performanceWeights.netWorthDelta +
    member.strategicLeverage * performanceWeights.strategicLeverage +
    member.consistency * performanceWeights.consistency +
    member.contribution * performanceWeights.contribution +
    member.focusScore * performanceWeights.focusScore +
    member.executionStreak * performanceWeights.executionStreak;

  const reputationScore = Math.round(
    member.reputationTrust * 0.7 + member.contribution * 0.2 + member.consistency * 0.1,
  );
  const performanceScore = Math.round(performanceRaw);
  const governanceEligible = reputationScore >= 65 && !member.isBadActor;
  const toxicHighPerformer = performanceScore >= 85 && (reputationScore < 60 || !!member.isBadActor);

  let influenceTier: ScoredMember["influenceTier"] = "Medium";
  if (performanceScore >= 82 && reputationScore >= 70) influenceTier = "High";
  if (performanceScore < 65 || reputationScore < 60) influenceTier = "Low";

  return {
    ...member,
    performanceScore,
    reputationScore,
    governanceEligible,
    boardStatus: member.isCoreCouncil ? "Core Council" : "Member",
    toxicHighPerformer,
    influenceTier,
  };
}
