import Link from "next/link";

interface BracketCTAProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  onClick?: () => void;
}

export default function BracketCTA({
  label,
  href,
  variant = "primary",
  external = false,
  onClick,
}: BracketCTAProps) {
  const cls = variant === "primary" ? "glass-btn primary" : "glass-btn";
  const inner = (
    <>
      <span className="shine" />
      <span className="label">{label}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
