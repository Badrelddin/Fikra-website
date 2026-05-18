"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import BracketCTA from "@/components/BracketCTA";
import SectionReveal from "@/components/SectionReveal";
import ContactChat from "@/components/ContactChat";
import { TextRoll } from "@/components/ui/text-roll-navigation";
import { GeometricBackground } from "@/components/ui/geometric-background";
import { BrandIntro } from "@/components/ui/brand-intro";

const EASING = [0.16, 1, 0.3, 1] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: "88px",
      }}
    >
      {/* Subtle radial glow behind the text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(33,118,255,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 40px",
        }}
      >
        <div style={{ maxWidth: "540px" }}>

          {/* Location tag */}
          <motion.p
            className="font-semibold uppercase flex items-center gap-2"
            style={{ fontSize: "var(--text-label)", color: "#2176FF", letterSpacing: "0.14em", marginBottom: "36px" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0, ease: EASING }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2176FF",
                boxShadow: "0 0 8px rgba(33,118,255,0.8)",
              }}
            />
            Abu Dhabi, UAE · Alexandria, Egypt · Since 2018
          </motion.p>

          {/* Headlines — three lines, decreasing opacity */}
          <motion.h1
            className="overflow-hidden leading-none"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASING }}
          >
            <TextRoll
              className="block font-bold"
              style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.045em", lineHeight: 1.02, color: "#ffffff" }}
            >
              Software that works.
            </TextRoll>
            <TextRoll
              className="block font-bold"
              style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.045em", lineHeight: 1.02, color: "rgba(255,255,255,0.42)" }}
            >
              Partners who stay.
            </TextRoll>
            <TextRoll
              className="block font-bold"
              style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.045em", lineHeight: 1.02, color: "rgba(255,255,255,0.18)" }}
            >
              Results that last.
            </TextRoll>
          </motion.h1>

          {/* Founder quote */}
          <motion.p
            style={{
              fontSize: "var(--text-body)",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.45)",
              paddingLeft: "16px",
              borderLeft: "2px solid #2176FF",
              maxWidth: "360px",
              marginTop: "32px",
              marginBottom: "48px",
              lineHeight: 1.75,
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: EASING }}
          >
            &ldquo;We started Fikra by betting on ourselves. Six years later — the projects do the proving.&rdquo;
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: EASING }}
          >
            <a href="https://calendly.com/fikratechnology/30min" target="_blank" rel="noopener noreferrer" className="glass-btn primary">
              <span className="shine" /><span className="label">Book a 30-Minute Call</span>
            </a>
            <Link href="/work" className="glass-btn">
              <span className="shine" /><span className="label">See the Work →</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OneTruth() {
  return (
    <section className="section-spacing">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <SectionReveal>
          <Eyebrow>— One Truth</Eyebrow>
          {/* Line 1 — setup: muted, smaller */}
          <p
            className="font-semibold"
            style={{
              fontSize: "var(--text-sub)",
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.38)",
              marginBottom: "16px",
              lineHeight: 1.4,
            }}
          >
            Anyone can build an app.
          </p>
          {/* Line 2 — main claim: large, white */}
          <p
            className="font-black text-white"
            style={{
              fontSize: "var(--text-h1)",
              letterSpacing: "-0.04em",
              lineHeight: 1.04,
              marginBottom: "12px",
            }}
          >
            We build the one that<br />works for your business.
          </p>
          {/* Line 3 — kicker: blue accent */}
          <p
            className="font-black"
            style={{
              fontSize: "var(--text-h2)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#2176FF",
            }}
          >
            Then we make sure it wins.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const services = [
    {
      num: "01",
      name: "Software",
      description: "Built around your business. Not a template of someone else's. Every line written for how you actually work.",
      href: "/work",
    },
    {
      num: "02",
      name: "Applications",
      description: "iOS, Android, browser. Fast enough to impress. Solid enough to trust. Built to scale — not against it.",
      href: "/work",
    },
    {
      num: "03",
      name: "Enterprise Solutions",
      description: "The infrastructure that connects your teams. Integrations, automation, enterprise platforms. Visibility for leaders.",
      href: "/work",
    },
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <SectionReveal>
          <Eyebrow>— What We Do</Eyebrow>
          <h2 className="font-black text-white mb-14" style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Three things. Done right.
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <SectionReveal key={s.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(33,118,255,0.18)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  padding: "36px 32px 32px",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.4)",
                  overflow: "visible",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Number */}
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.22)", fontFamily: "monospace", textTransform: "uppercase" }}>
                  {s.num}
                </span>

                {/* Name */}
                <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 800, letterSpacing: "-0.03em", color: "white", marginTop: 56, marginBottom: 14, lineHeight: 1.15 }}>
                  {s.name}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.52)", lineHeight: 1.75, flexGrow: 1 }}>
                  {s.description}
                </p>

                {/* Bottom CTA */}
                <div style={{ marginTop: 32 }}>
                  <Link href={s.href} className="glass-btn-sm">
                    <span className="shine" /><span className="label">Explore →</span>
                  </Link>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.35} className="mt-10">
          <p className="font-semibold" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.80)" }}>
            One team. No gaps. No excuses.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function TheDifference() {
  return (
    <section className="section-spacing">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <SectionReveal>
          <Eyebrow>— The Difference</Eyebrow>
          <h2 className="font-black text-white mb-8" style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            Every agency builds.<br />We&apos;re the ones who stay.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1} className="max-w-2xl">
          <p style={{ fontSize: "var(--text-lead)", color: "rgba(255,255,255,0.70)", lineHeight: 1.72, marginBottom: "16px" }}>
            Six years. 40+ projects. Not one client left holding broken software and an empty inbox.
          </p>
          <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
            After every launch — we monitor, maintain, and evolve your product. We study your market. We bring you competitive intelligence. We help you grow.
          </p>
          <p className="font-semibold mt-6" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.82)" }}>
            That&apos;s not a service. It&apos;s how we work.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function useCountUp(target: number, duration: number, trigger: boolean): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger || target === 0) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [trigger, target, duration]);
  return value;
}

function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [showPulse, setShowPulse] = useState(false);
  const [showNote, setShowNote] = useState(false);

  const n1 = useCountUp(6, 1600, inView);
  const n2 = useCountUp(40, 1600, inView);
  const n3 = useCountUp(20, 1600, inView);
  const n4 = useCountUp(2, 1600, inView);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setShowPulse(true), 1200);
    const t2 = setTimeout(() => setShowNote(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  const statItems = [
    { value: n1, suffix: "+", label: "Years building" },
    { value: n2, suffix: "+", label: "Products shipped" },
    { value: n3, suffix: "+", label: "People who care" },
    { value: n4, suffix: "", label: "Offices — UAE & Egypt" },
  ];

  const numStyle: React.CSSProperties = {
    fontSize: "var(--text-h1)",
    lineHeight: 1,
    letterSpacing: "-0.05em",
    fontWeight: 800,
  };

  return (
    <section className="relative section-spacing">
      <GeometricBackground density="low" />
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6 lg:px-20" style={{ position: "relative", zIndex: 1 }}>
        <SectionReveal>
          <Eyebrow>— By the Numbers</Eyebrow>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-5 mt-10 bg-[#07080F]" style={{ gap: "1px", outline: "1px solid rgba(255,255,255,0.07)" }}>
          {statItems.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.06}>
              <div className="px-6 py-8 first:pl-0" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-white" style={numStyle}>
                  {s.value}{s.suffix}
                </p>
                <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.50)", marginTop: "6px" }}>{s.label}</p>
              </div>
            </SectionReveal>
          ))}

          {/* The Zero */}
          <SectionReveal delay={0.24} className="col-span-2 md:col-span-1">
            <div className="px-6 py-8">
              <div style={{ position: "relative", display: "inline-block" }}>
                <p className="text-white" style={numStyle}>0</p>
                <AnimatePresence>
                  {showPulse && (
                    <motion.div
                      key="pulse"
                      initial={{ width: 0, height: 0, opacity: 0.7 }}
                      animate={{ width: 120, height: 120, opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(33,118,255,0.6)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
              <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.50)", marginTop: "6px" }}>Projects abandoned</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: showNote ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: "var(--text-label)", color: "#2176FF", fontStyle: "italic", lineHeight: 1.6, marginTop: "8px" }}
              >
                Zero. In six years.<br />That number matters.
              </motion.p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function WorkRow({ index, name, description, href }: { index: string; name: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative block py-8 group transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-fikra-blue"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      aria-label={`${name} — ${description}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"
        style={{ background: "rgba(33,118,255,0.04)" }}
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-between gap-8">
        <div className="flex items-center gap-6 min-w-0">
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", flexShrink: 0 }}>{index}</span>
          <div className="min-w-0">
            <p className="font-extrabold text-white group-hover:text-fikra-blue transition-colors duration-150 leading-tight tracking-tight" style={{ fontSize: "var(--text-h3)" }}>
              {name}
            </p>
            <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.52)", marginTop: "4px" }}>{description}</p>
          </div>
        </div>
        <span className="text-white/25 group-hover:text-fikra-blue group-hover:translate-x-1 transition-all duration-150 text-xl shrink-0" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

function SelectedWork() {
  const works = [
    { index: "01", name: "Volkov Estates", description: "247 units. 34 active deals. One platform. Every agent. Zero spreadsheets.", href: "/work" },
    { index: "02", name: "Rahimi Regulatory Authority", description: "Government-grade platform. Tens of thousands of citizens served.", href: "/work" },
    { index: "03", name: "Crimson Care Foundation", description: "100–200 daily donor interactions. Zero sync failures.", href: "/work" },
  ];
  return (
    <section className="section-spacing">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionReveal>
            <Eyebrow>— Selected Work</Eyebrow>
            <h2 className="font-black text-white" style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Built for the ones<br />who demand more.
            </h2>
            <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.40)", fontStyle: "italic", marginTop: "12px" }}>From Abu Dhabi to Alexandria — the standard never changes.</p>
          </SectionReveal>
        </div>
        {works.map((w, i) => (
          <SectionReveal key={w.name} delay={i * 0.06}>
            <WorkRow {...w} />
          </SectionReveal>
        ))}
        <SectionReveal delay={0.2} className="mt-8 flex justify-end">
          <BracketCTA label="View All Work" href="/work" variant="primary" />
        </SectionReveal>
      </div>
    </section>
  );
}

function Industries() {
  const items = ["Healthcare", "Finance", "Government", "Real Estate", "E-commerce", "Transportation"];
  // 4 repetitions: animate -50% = exactly 2 full sets scroll off, sets 3+4 are identical → seamless
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="section-spacing overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 mb-10">
        <SectionReveal>
          <Eyebrow>— Industries</Eyebrow>
          <h2 className="font-black text-white" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Six industries. Two offices.<br />One standard.
          </h2>
        </SectionReveal>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
          {repeated.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                paddingRight: "48px",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>{item}</span>
              <span style={{ color: "#2176FF", opacity: 0.8, marginLeft: "16px" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 mt-6">
        <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.38)", fontStyle: "italic" }}>Don&apos;t see yours? Tell us the problem. We&apos;ll find the solution.</p>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="section-spacing">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <SectionReveal>
          <Eyebrow>— Partnership</Eyebrow>
          <h2 className="font-black text-white mb-6" style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Intelligence, built in.
          </h2>
          <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "12px" }}>
            Through our partnership with Looc.AI, every product we build can think, respond, and communicate — in any language, across every channel.
          </p>
          <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.40)", fontStyle: "italic" }}>AI isn&apos;t a feature we add. It&apos;s a layer we consider from day one.</p>
        </SectionReveal>
      </div>
    </section>
  );
}

function WhyFikra() {
  const values = [
    { name: "Honest.", body: "We tell you what we think. Before we build. During. After. No surprises." },
    { name: "Local.", body: "Headquartered in Abu Dhabi. Development studio in Alexandria, Egypt. We understand this market, this culture, and the standards that matter here — because we operate inside them every day." },
    { name: "Relentless.", body: "We don't stop at delivery. We stop when you're winning." },
  ];
  return (
    <section className="section-spacing">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <SectionReveal>
          <Eyebrow>— Why Fikra</Eyebrow>
        </SectionReveal>
        <div className="space-y-0 mt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {values.map((v, i) => (
            <SectionReveal key={v.name} delay={i * 0.08}>
              <div
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16 py-10"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="text-xl font-bold" style={{ color: "#2176FF" }}>{v.name}</p>
                <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, maxWidth: "640px" }}>{v.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeChatSection() {
  return (
    <section id="contact-form" className="section-spacing">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <SectionReveal>
            <p className="eyebrow mb-4">— Let&apos;s Build Together</p>
            <h2
              className="font-bold text-white mb-4"
              style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}
            >
              Tell us what you need.
            </h2>
            <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
              We respond within 24 hours. A real person — with thoughts, not a ticket number.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { n: "01", text: "Tell us about your project — three quick questions." },
                { n: "02", text: "Leave your name and email." },
                { n: "03", text: "We'll reach out within 24 hours." },
              ].map(({ n, text }) => (
                <div key={n} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "#2176FF", fontWeight: 700, fontSize: "var(--text-caption)", paddingTop: "2px", minWidth: "20px" }}>{n}</span>
                  <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.50)", lineHeight: 1.75 }}>{text}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ContactChat />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section className="relative section-spacing">
      <GeometricBackground density="low" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center" style={{ position: "relative", zIndex: 1 }}>
        <SectionReveal>
          <h2 className="font-black text-white mb-8" style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            <TextRoll center className="block">The best time to start</TextRoll>
            <TextRoll center className="block">was six months ago.</TextRoll>
            <TextRoll center className="block">The second best time is now.</TextRoll>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <BracketCTA label="Book a 30-Minute Call — No Pitch" href="https://calendly.com/fikratechnology/30min" variant="primary" external />
            <BracketCTA label="Get a Proposal in 7 Days" href="/contact" variant="secondary" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })} />
          </div>
          <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.38)" }}>info@fikratechnology.com · +971 52 384 6699</p>
        </SectionReveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <BrandIntro onComplete={() => setDone(true)} />
      <main style={{ opacity: done ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Hero />
        <OneTruth />
        <WhatWeDo />
        <TheDifference />
        <Stats />
        <SelectedWork />
        <Industries />
        <Partnership />
        <WhyFikra />
        <HomeChatSection />
        <CTAStrip />
      </main>
    </>
  );
}
