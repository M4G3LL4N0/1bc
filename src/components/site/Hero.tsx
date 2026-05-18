import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-18">
      <div>
        <Badge tone="cyan">Silicon Valley execution environment</Badge>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          The execution board for founders racing to $1B.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          1BC is not a social club. It is a performance environment where elite founders compete,
          collaborate, and hold each other accountable through disciplined, ethical execution.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/dashboard">Enter Demo Dashboard</Button>
          <Button href="/governance" variant="secondary">
            View Governance
          </Button>
        </div>
      </div>
      <Card className="grid gap-4">
        {[
          ["Execution intensity", "Measured output over status"],
          ["Deep work", "No-distraction operating standards"],
          ["Accountability", "Board influence tied to score and trust"],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-xl border border-slate-700/35 bg-slate-900/45 p-4">
            <div className="text-sm font-semibold text-cyan-100">{title}</div>
            <p className="mt-1 text-sm text-slate-300">{detail}</p>
          </div>
        ))}
      </Card>
    </section>
  );
}
