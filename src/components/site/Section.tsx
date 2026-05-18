import { ReactNode } from "react";

export default function Section({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      {kicker ? (
        <div className="mb-3 text-xs uppercase tracking-[0.25em] text-cyan-200/75">{kicker}</div>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
