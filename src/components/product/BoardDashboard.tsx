"use client";

import { useMemo, useState } from "react";
import MemberCard from "@/components/product/MemberCard";
import RotationEngine from "@/components/product/RotationEngine";
import ScorePanel from "@/components/product/ScorePanel";
import { membersSeed } from "@/lib/members";
import { runMonthlyBoardRotation } from "@/lib/governance";

export default function BoardDashboard() {
  const [cycle, setCycle] = useState(1);
  const [result, setResult] = useState(() => runMonthlyBoardRotation(membersSeed));

  const rising = useMemo(
    () =>
      result.members
        .filter((m) => m.boardStatus === "Board Gained" || m.influenceTier === "High")
        .map((m) => m.name),
    [result.members],
  );

  const falling = useMemo(
    () =>
      result.members
        .filter((m) => m.boardStatus === "Board Lost" || m.influenceTier === "Low")
        .map((m) => m.name),
    [result.members],
  );

  function rotate() {
    setCycle((value) => value + 1);
    setResult(runMonthlyBoardRotation(result.members));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold text-white">Monthly Board Cycle {cycle}</h3>
        <button
          onClick={rotate}
          className="inline-flex items-center justify-center rounded-xl premium-gradient px-5 py-3 text-sm font-semibold text-slate-950 hover-lift"
        >
          Run Monthly Board Rotation
        </button>
      </div>

      <ScorePanel members={result.members} />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {result.members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      <RotationEngine keptSeats={result.keptSeats} gainedSeats={result.gainedSeats} lostSeats={result.lostSeats} />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Rising</h4>
          <p className="mt-3 text-sm text-slate-300">{rising.length ? rising.join(", ") : "No changes yet."}</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">Falling</h4>
          <p className="mt-3 text-sm text-slate-300">{falling.length ? falling.join(", ") : "No changes yet."}</p>
        </div>
      </div>
    </div>
  );
}
