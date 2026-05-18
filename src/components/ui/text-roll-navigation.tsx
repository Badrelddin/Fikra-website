"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const STAGGER = 0.025;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface TextRollProps {
  children: string;
  center?: boolean;
  className?: string;
  hoverColor?: string;
  style?: React.CSSProperties;
}

export function TextRoll({
  children,
  center = false,
  className,
  hoverColor = "#2176FF",
  style,
}: TextRollProps) {
  const letters = Array.from(children);
  const length = letters.length;

  // If caller passes a display class, don't add inline-block (avoid conflict)
  const hasDisplayClass = className
    ? /\b(block|inline-block|inline|flex|grid|hidden)\b/.test(className)
    : false;

  return (
    <motion.span
      className={`overflow-hidden${hasDisplayClass ? "" : " inline-block"}${className ? ` ${className}` : ""}`}
      style={style}
      initial="idle"
      whileHover="hover"
    >
      {letters.map((letter, i) => {
        const delay = center
          ? STAGGER * Math.abs(i - (length - 1) / 2)
          : STAGGER * i;
        const char = letter === " " ? " " : letter;

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
              verticalAlign: "top",
            }}
          >
            {/* Top layer — slides up on hover */}
            <motion.span
              style={{ display: "inline-block" }}
              variants={{ idle: { y: "0%" }, hover: { y: "-100%" } }}
              transition={{ duration: 0.28, delay, ease: EASE }}
            >
              {char}
            </motion.span>
            {/* Bottom layer — slides in from below */}
            <motion.span
              style={{
                display: "inline-block",
                position: "absolute",
                top: 0,
                left: 0,
                color: hoverColor,
              }}
              variants={{ idle: { y: "105%" }, hover: { y: "0%" } }}
              transition={{ duration: 0.28, delay, ease: EASE }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function FikraNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-col list-none p-0 m-0">
        {NAV_ITEMS.map((item, i) => {
          const letters = Array.from(item.label);
          return (
            <li
              key={item.href}
              style={{
                borderBottom: i < NAV_ITEMS.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : undefined,
              }}
            >
              <Link
                href={item.href}
                onClick={onNavigate}
                style={{ display: "block", padding: "16px 0" }}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-fikra-blue focus-visible:outline-offset-4 rounded-sm"
              >
                <motion.span
                  className="block relative"
                  initial="idle"
                  whileHover="hover"
                >
                  <span
                    className="text-white block select-none"
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    {letters.map((letter, j) => {
                      const delay = STAGGER * j;
                      const char = letter;
                      return (
                        <span
                          key={j}
                          style={{
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden",
                            verticalAlign: "top",
                          }}
                        >
                          <motion.span
                            style={{ display: "inline-block" }}
                            variants={{ idle: { y: "0%" }, hover: { y: "-100%" } }}
                            transition={{ duration: 0.28, delay, ease: EASE }}
                          >
                            {char}
                          </motion.span>
                          <motion.span
                            style={{
                              display: "inline-block",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              color: "#2176FF",
                            }}
                            variants={{ idle: { y: "105%" }, hover: { y: "0%" } }}
                            transition={{ duration: 0.28, delay, ease: EASE }}
                          >
                            {char}
                          </motion.span>
                        </span>
                      );
                    })}
                  </span>
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
