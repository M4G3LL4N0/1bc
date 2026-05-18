export default function Badge({
  children,
  tone = "slate",
}: {
  children: string;
  tone?: "slate" | "cyan" | "gold" | "rose";
}) {
  const colorMap: Record<string, string> = {
    slate: "border-slate-400/25 bg-slate-300/10 text-slate-200",
    cyan: "border-cyan-300/35 bg-cyan-300/10 text-cyan-100",
    gold: "border-amber-300/35 bg-amber-300/10 text-amber-100",
    rose: "border-rose-300/35 bg-rose-300/10 text-rose-100",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${colorMap[tone]}`}
    >
      {children}
    </span>
  );
}
