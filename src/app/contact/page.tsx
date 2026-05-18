import Section from "@/components/site/Section";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function ContactPage() {
  return (
    <main>
      <SubpageVisual variant="contact" />
      <Section kicker="Contact" title="Apply to join 1BC">
        <form className="glass mx-auto grid w-full max-w-3xl gap-4 rounded-2xl p-6">
          <label className="grid gap-2 text-sm">
            <span className="text-slate-300">Full Name</span>
            <input className="rounded-lg border border-slate-600/60 bg-slate-900/70 px-3 py-2" />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-slate-300">Company</span>
            <input className="rounded-lg border border-slate-600/60 bg-slate-900/70 px-3 py-2" />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-slate-300">Why 1BC</span>
            <textarea
              rows={5}
              className="rounded-lg border border-slate-600/60 bg-slate-900/70 px-3 py-2"
            />
          </label>
          <button
            type="button"
            className="inline-flex w-fit rounded-xl premium-gradient px-5 py-3 text-sm font-semibold text-slate-950 hover-lift"
          >
            Submit Application
          </button>
        </form>
      </Section>
    </main>
  );
}
