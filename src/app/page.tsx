import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/site/Section";
import GovernanceMap from "@/components/product/GovernanceMap";
import Pricing from "@/components/site/Pricing";
import CTA from "@/components/site/CTA";

const boardRows = [
  { seat: "Core", role: "Mission lock", rule: "Not rotated monthly", score: "standing", trust: "Locked" },
  { seat: "Board", role: "Earned influence", rule: "Score + trust this cycle", score: "87", trust: "Provisional" },
  { seat: "Operator", role: "Throughput", rule: "Contribution-backed seat", score: "74", trust: "Earned" },
  { seat: "Reputation", role: "Ethics review", rule: "Can remove a high performer", score: "veto", trust: "Independent" },
];

const demoMoves = [
  ["Enter the local board", "/dashboard", "See seats, cycle scores, and rotation rules running as TypeScript in the browser."],
  ["Read the governance map", "/governance", "Five layers: core council, performance board, operator seats, reputation council, kill switch."],
  ["Inspect listed tracks", "/pricing", "Observer, Operator, Board Track, Institutional — published offers, invite-only acceptance."],
];

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <section className="mx-auto grid w-full max-w-7xl gap-10 pb-14 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge tone="cyan">Prototype · founder execution board</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A scored board for founders who want $1B without theater.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            1BC is a membership environment, not a social club. Power is temporary,
            measured, and constrained by trust. The public site ships a local demo
            of the board, rotation rules, and governance map — not a live member
            network.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/dashboard">Enter demo board</Button>
            <Button href="/governance" variant="secondary">
              Read governance
            </Button>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            For operators who want intensity without illegal shortcuts or hustle cosplay.
          </p>
        </div>

        <aside
          className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/80 shadow-[0_24px_80px_rgba(2,132,199,0.18)]"
          aria-label="Board seat preview"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200/80">
            <span>1BC board</span>
            <span>demo cycle</span>
          </div>
          <div className="divide-y divide-white/8">
            {boardRows.map((row) => (
              <div key={row.seat} className="grid grid-cols-[88px_1fr_auto] gap-3 px-4 py-3 sm:grid-cols-[110px_1fr_auto]">
                <div className="font-mono text-xs font-semibold text-amber-200">{row.seat}</div>
                <div>
                  <p className="text-sm font-medium text-white">{row.role}</p>
                  <p className="mt-1 text-xs text-slate-400">{row.rule}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-cyan-200">{row.score}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">{row.trust}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-3 text-xs text-slate-500">
            Rotation and scores run in the browser demo. No live member data.
          </div>
        </aside>
      </section>

      <Section kicker="What the demo does" title="A local board you can operate in a minute">
        <ol className="divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
          {demoMoves.map(([title, href, copy], i) => (
            <li key={title} className="grid gap-3 px-5 py-4 sm:grid-cols-[48px_1fr_auto] sm:items-center">
              <span className="font-mono text-xs text-cyan-300">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-base font-semibold text-white">{title}</h2>
                <p className="mt-1 text-sm text-slate-400">{copy}</p>
              </div>
              <Link href={href} className="text-sm text-cyan-300 hover:underline">
                {href} →
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Who it is for" title="Founders who want a board, not an audience">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Disciplined execution", "Monthly output is scored. Status posts do not move a seat."],
            ["Legal ambition", "High intensity with a reputation council that can remove a high performer."],
            ["Temporary power", "Board seats reset each cycle unless score and trust both hold."],
          ].map(([title, copy]) => (
            <Card key={title}>
              <h2 className="text-base font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm text-slate-300">{copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section kicker="Governance architecture" title="Power is earned, measured, temporary — and constrained by trust">
        <GovernanceMap />
        <p className="mt-6 text-sm text-slate-500">
          The dashboard implements these rules as local TypeScript, not as a hosted membership backend.
        </p>
      </Section>

      <Section kicker="Membership" title="Listed tracks. Application required.">
        <Pricing />
        <p className="mt-4 text-xs text-slate-500">
          Prices are the published offer on this site. Acceptance is invite-only. Nothing here is a live subscriber count.
        </p>
      </Section>

      <CTA />

      <p className="mx-auto mb-16 max-w-7xl text-center text-xs text-slate-600">
        <Link href="/about" className="underline-offset-2 hover:text-slate-400 hover:underline">
          About 1BC
        </Link>
        {" · "}
        <Link href="/contact" className="underline-offset-2 hover:text-slate-400 hover:underline">
          Contact
        </Link>
      </p>
    </div>
  );
}
