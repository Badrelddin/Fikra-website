"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useForm } from "@formspree/react";

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as const;

const BOT_MESSAGES = [
  "Hey — what are you looking to build?",
  "Good choice. What's your budget range?",
  "Word travels fast — how'd you hear about Fikra?",
  "Almost there. Drop your name and email.",
];

const PROJECT_OPTIONS = ["Web App", "Mobile App", "ERP System", "Consulting"];
const BUDGET_OPTIONS = ["Under $5k", "$5k–$20k", "$20k–$50k", "$50k+"];
const SOURCE_OPTIONS = ["LinkedIn", "Event or Conference", "Organic Search", "Other"];

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = "idle" | "typing" | "submitting" | "success" | "error";

interface FormState {
  projectType: string;
  budget: string;
  source: string;
  name: string;
  email: string;
}

interface Msg {
  id: string;
  role: "bot" | "user";
  text: string;
}

// ─── Shared glass style helpers ───────────────────────────────────────────────

const whiteGlass: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.11)",
  backdropFilter: "blur(14px) saturate(160%)",
  WebkitBackdropFilter: "blur(14px) saturate(160%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09)",
};

const purpleGlass: React.CSSProperties = {
  background: "rgba(33,118,255,0.28)",
  border: "1px solid rgba(33,118,255,0.42)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function BotAvatar() {
  return (
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        ...whiteGlass,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        padding: 5,
      }}
    >
      <Image
        src="/logo.png"
        alt=""
        width={1800}
        height={1800}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        aria-hidden="true"
      />
    </div>
  );
}

function StepDots({ current }: { current: number }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 7,
        justifyContent: "center",
        padding: "14px 0 12px",
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={
            i < current
              ? {
                  background: "rgba(33,118,255,0.75)",
                  borderColor: "rgba(33,118,255,0.55)",
                  scale: 1,
                }
              : i === current
              ? {
                  background: "rgba(33,118,255,0.45)",
                  borderColor: "rgba(33,118,255,0.35)",
                  scale: 1.2,
                }
              : {
                  background: "rgba(255,255,255,0.10)",
                  borderColor: "rgba(255,255,255,0.15)",
                  scale: 1,
                }
          }
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            border: "1px solid transparent",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          style={{
            display: "block",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.40)",
          }}
          animate={{ opacity: [0.3, 0.9, 0.3], y: [0, -3, 0] }}
          transition={{
            duration: 0.85,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function BotMessage({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      style={{ display: "flex", gap: 10, alignItems: "flex-end" }}
    >
      <BotAvatar />
      <div
        style={{
          ...whiteGlass,
          borderRadius: "18px 18px 18px 4px",
          padding: "10px 14px",
          fontSize: "14px",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.88)",
          maxWidth: "75%",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: EASE }}
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <div
        style={{
          ...purpleGlass,
          borderRadius: "18px 18px 4px 18px",
          padding: "10px 14px",
          fontSize: "14px",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.92)",
          maxWidth: "75%",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}

function OptionPill({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "rgba(33,118,255,0.28)"
          : "rgba(255,255,255,0.06)",
        border: `1px solid ${
          hovered ? "rgba(33,118,255,0.45)" : "rgba(255,255,255,0.12)"
        }`,
        borderRadius: "999px",
        padding: "8px 18px",
        fontSize: "var(--text-caption)",
        color: "rgba(255,255,255,0.85)",
        cursor: "pointer",
        transition: "background 150ms ease-out, border-color 150ms ease-out",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        lineHeight: 1.5,
      }}
    >
      {label}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactChat() {
  const [, handleSubmitFormspree] = useForm("mlgagzer");
  void handleSubmitFormspree;

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>({
    projectType: "",
    budget: "",
    source: "",
    name: "",
    email: "",
  });
  const [messages, setMessages] = useState<Msg[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [booted, setBooted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function scrollBottom() {
    setTimeout(() => {
      if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 60);
  }

  // Boot: first bot message
  useEffect(() => {
    if (booted) return;
    setBooted(true);
    setStatus("typing");
    setTimeout(() => {
      setMessages([{ id: "bot-0", role: "bot", text: BOT_MESSAGES[0] }]);
      setStatus("idle");
      setShowInput(true);
      scrollBottom();
    }, 650);
  }, [booted]);

  useEffect(scrollBottom, [messages, showInput]);

  function selectOption(field: "projectType" | "budget" | "source", value: string) {
    const next = step + 1;
    setShowInput(false);
    setForm((f) => ({ ...f, [field]: value }));
    setMessages((prev) => [
      ...prev,
      { id: `user-${step}`, role: "user", text: value },
    ]);
    setStatus("typing");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `bot-${next}`, role: "bot", text: BOT_MESSAGES[next] },
      ]);
      setStep(next);
      setStatus("idle");
      setShowInput(true);
      scrollBottom();
      if (next === 3) setTimeout(() => nameRef.current?.focus(), 120);
    }, 550);
  }

  async function submit() {
    const { name, email } = form;
    if (!name.trim() || !email.trim()) return;

    // Client-side email validation — show inline error, don't submit
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Please enter a valid email address so we can reach you.");
      emailRef.current?.focus();
      return;
    }

    setEmailError("");
    setShowInput(false);
    setMessages((prev) => [
      ...prev,
      { id: "user-3", role: "user", text: `${name.trim()} · ${email.trim()}` },
    ]);
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/mlgagzer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const canSubmit = form.name.trim() && form.email.trim();

  // ── Success state ────────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          borderRadius: "28px",
          background: "rgba(30,111,191,0.15)",
          border: "1px solid rgba(30,111,191,0.32)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 48px rgba(0,0,0,0.25)",
          padding: "52px 32px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "260px",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="rgba(33,118,255,0.50)" strokeWidth="1.5" />
            <path d="M7.5 12l3 3 6-6" stroke="#2176FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.92)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "10px",
          }}
        >
          You&apos;re all set!
        </h3>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.52)",
            lineHeight: 1.6,
          }}
        >
          Our team will reach out within 24 hours.
        </p>
      </motion.div>
    );
  }

  // ── Main chat UI ──────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        borderRadius: "28px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 56px rgba(0,0,0,0.32)",
        display: "flex",
        flexDirection: "column",
      }}
      role="region"
      aria-label="Contact chat"
    >
      {/* Step dots header */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.08)",
        }}
      >
        <StepDots current={step} />
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        style={{
          padding: "20px 20px 14px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          overflowY: "auto",
          maxHeight: "280px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="ccc-scroll"
        aria-live="polite"
      >
        {messages.map((msg) =>
          msg.role === "bot" ? (
            <BotMessage key={msg.id} text={msg.text} />
          ) : (
            <UserBubble key={msg.id} text={msg.text} />
          )
        )}

        <AnimatePresence>
          {status === "typing" && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", gap: 10, alignItems: "flex-end" }}
            >
              <BotAvatar />
              <div
                style={{
                  ...whiteGlass,
                  borderRadius: "18px 18px 18px 4px",
                  padding: "12px 16px",
                }}
              >
                <TypingDots />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input area */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.12)",
          padding: "16px 20px 20px",
          minHeight: "76px",
        }}
      >
        <AnimatePresence mode="wait">
          {/* Project type pills */}
          {showInput && step === 0 && (
            <motion.div
              key="opts-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <div
                role="group"
                aria-label="What are you looking to build?"
                style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
              >
                {PROJECT_OPTIONS.map((opt) => (
                  <OptionPill
                    key={opt}
                    label={opt}
                    onClick={() => selectOption("projectType", opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Budget pills */}
          {showInput && step === 1 && (
            <motion.div
              key="opts-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <div
                role="group"
                aria-label="Budget range"
                style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <OptionPill
                    key={opt}
                    label={opt}
                    onClick={() => selectOption("budget", opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Source pills */}
          {showInput && step === 2 && (
            <motion.div
              key="opts-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <div
                role="group"
                aria-label="How did you hear about Fikra?"
                style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
              >
                {SOURCE_OPTIONS.map((opt) => (
                  <OptionPill
                    key={opt}
                    label={opt}
                    onClick={() => selectOption("source", opt)}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => selectOption("source", "")}
                style={{
                  marginTop: 10,
                  background: "none",
                  border: "none",
                  fontSize: "var(--text-caption)",
                  color: "rgba(255,255,255,0.30)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.55)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.30)")
                }
              >
                Skip →
              </button>
            </motion.div>
          )}

          {/* Name + email */}
          {showInput && step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") emailRef.current?.focus();
                  }}
                  className="ccc-input"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "12px",
                    padding: "11px 14px",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.85)",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                  aria-label="Your name"
                />
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                    <input
                      ref={emailRef}
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        if (emailError) setEmailError("");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") submit();
                      }}
                      className="ccc-input"
                      style={{
                        width: "100%",
                        background: emailError ? "rgba(224,49,49,0.06)" : "rgba(255,255,255,0.05)",
                        border: `1px solid ${emailError ? "rgba(224,49,49,0.40)" : "rgba(255,255,255,0.10)"}`,
                        borderRadius: "12px",
                        padding: "11px 14px",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.85)",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      aria-label="Email address"
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? "ccc-email-error" : undefined}
                    />
                    {emailError && (
                      <motion.div
                        id="ccc-email-error"
                        role="alert"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-caption)", color: "rgba(224,49,49,0.85)" }}
                      >
                        <span style={{
                          width: 15, height: 15, borderRadius: "50%",
                          background: "rgba(224,49,49,0.18)", border: "1px solid rgba(224,49,49,0.35)",
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                          fontSize: "10px", fontWeight: 700, flexShrink: 0,
                        }}>!</span>
                        {emailError}
                      </motion.div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={submit}
                    disabled={!canSubmit || status === "submitting"}
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "12px",
                      background: canSubmit
                        ? "rgba(33,118,255,0.55)"
                        : "rgba(255,255,255,0.07)",
                      border: `1px solid ${
                        canSubmit
                          ? "rgba(33,118,255,0.55)"
                          : "rgba(255,255,255,0.10)"
                      }`,
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: canSubmit ? "pointer" : "not-allowed",
                      flexShrink: 0,
                      transition: "all 150ms ease",
                    }}
                    aria-label="Submit"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Submitting */}
          {status === "submitting" && (
            <motion.div
              key="submitting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <TypingDots />
              <span style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.28)" }}>
                Sending...
              </span>
            </motion.div>
          )}

          {/* Error */}
          {status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              role="alert"
              style={{ fontSize: "var(--text-caption)", color: "rgba(224,49,49,0.85)" }}
            >
              Something went wrong. Email us at info@fikratechnology.com
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Scoped overrides */}
      <style>{`
        .ccc-scroll::-webkit-scrollbar { display: none; }
        .ccc-input::placeholder { color: rgba(255,255,255,0.22); }
        .ccc-input:focus {
          border-color: rgba(33,118,255,0.50) !important;
          background: rgba(255,255,255,0.07) !important;
        }
      `}</style>
    </div>
  );
}
