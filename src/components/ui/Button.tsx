import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold hover-lift";
  const styles =
    variant === "primary"
      ? "premium-gradient text-slate-950 shadow-[0_10px_28px_rgba(14,165,233,0.35)]"
      : "glass text-slate-100";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${base} ${styles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
