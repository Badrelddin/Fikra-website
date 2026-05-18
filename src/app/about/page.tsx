import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import BracketCTA from "@/components/BracketCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fikra. Arabic for Idea. Founded 2018 in Abu Dhabi. 20+ people. 40+ projects. Zero abandoned.",
};

const beliefs = [
  {
    name: "Software should serve people.",
    body: "If your team dreads opening what we built — we failed.",
  },
  {
    name: "Honesty is a feature.",
    body: "We tell you when the timeline slips. When your idea needs rethinking. Before you ask. Always.",
  },
  {
    name: "The partnership outlasts the project.",
    body: "A product launch is a moment. A great partnership is years of shared growth.",
  },
  {
    name: "Local knowledge is an edge.",
    body: "We understand this market the way outsiders never quite do. That's not a footnote. That's a foundation.",
  },
  {
    name: "The work speaks.",
    body: "We don't over-promise. We build. Then we let it talk.",
  },
];

const differentiators = [
  {
    num: "01",
    name: "We stay after launch.",
    body: "After your product ships, we monitor, support, update, and evolve it. Launch day is the beginning.",
  },
  {
    num: "02",
    name: "We think beyond code.",
    body: "After we build, we study your market and your competitors. We give you the intelligence to win — not just exist. No other software house in the UAE does this. We do.",
  },
  {
    num: "03",
    name: "We are genuinely flexible.",
    body: "Fixed price, time and material, retainer. We work the way your project works.",
  },
];

const clients = [
  { name: "Meridian Health Group", body: "Healthcare systems that clinical teams rely on daily." },
  { name: "Rahimi Regulatory Authority", body: "Government-grade platform. International security standards. Tens of thousands of citizens served." },
  { name: "in Studios", body: "Where great design and great engineering meet — and neither one loses." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="section-primary pt-40 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— About</p>
            <h1
              className="font-bold text-white"
              style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.04em", lineHeight: 1.04 }}
            >
              Fikra.
            </h1>
            <p className="mt-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>Arabic for Idea. Because that&apos;s where everything starts.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— The Story</p>
            <h2 className="font-bold text-white mb-10" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Six years ago, we got tired of watching it happen.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1} className="max-w-2xl">
            <p className="mb-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>
              Great companies. Bad software partners. Projects delivered late, wrong, or both. Vendors who disappeared the moment the invoice cleared.
            </p>
            <p className="mb-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>
              We didn&apos;t write a mission statement about it.
            </p>
            <p className="font-semibold mb-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.88)" }}>We started Fikra.</p>
            <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>
              What began in Abu Dhabi now runs across two offices — the UAE and Egypt. Not because we chased scale. Because the work demanded it.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-8">— What We Believe</p>
          </SectionReveal>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {beliefs.map((b, i) => (
              <SectionReveal key={b.name} delay={i * 0.07}>
                <div className="py-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="font-semibold mb-2" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em", color: "#2176FF" }}>{b.name}</p>
                  <p className="max-w-2xl" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>{b.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— The Team</p>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              20+ people. One thing in common.
            </h2>
            <p className="font-semibold mb-6" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.82)" }}>They care what they ship.</p>
            <p className="max-w-2xl" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
              Engineers, designers, QA specialists, DevOps architects, project managers, market strategists. Different roles. One standard.
            </p>
            <p className="font-semibold mt-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.82)" }}>We don&apos;t ship what we&apos;re not proud of.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Our Roots */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-8">— Our Roots</p>
            <h2 className="font-bold text-white mb-12" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Born in Abu Dhabi.<br />Built in Alexandria.
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 md:divide-x" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <SectionReveal delay={0.05} className="md:pr-16">
              <p className="font-semibold text-white mb-3" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em" }}>Abu Dhabi, UAE — Headquarters</p>
              <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
                Headquartered at Al Bateen, Abu Dhabi — where we serve the Gulf market and our regional corporate clients.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1} className="md:pl-16">
              <p className="font-semibold text-white mb-3" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em" }}>Alexandria, Egypt — Engineering Studio</p>
              <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
                Our development studio sits on El Horreya Road in Loran, Alexandria — where the engineering depth lives.
              </p>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.15} className="mt-10">
            <p className="font-semibold" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.82)" }}>Two offices. One standard across both of them.</p>
          </SectionReveal>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-8">— What Makes Us Different</p>
          </SectionReveal>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {differentiators.map((d, i) => (
              <SectionReveal key={d.num} delay={i * 0.07}>
                <div className="py-10 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="eyebrow">{d.num}.</span>
                  <div>
                    <p className="font-semibold mb-2" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em", color: "#2176FF" }}>{d.name}</p>
                    <p className="max-w-2xl" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>{d.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-8">— Selected Clients</p>
          </SectionReveal>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {clients.map((c, i) => (
              <SectionReveal key={c.name} delay={i * 0.07}>
                <div className="py-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="font-semibold mb-1" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em", color: "#2176FF" }}>{c.name}</p>
                  <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>{c.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3} className="mt-8">
            <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.38)", fontStyle: "italic" }}>Additional references available upon request.</p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <SectionReveal>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              We&apos;re not the biggest.
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
              We don&apos;t want to be. We want to be the team you call first. The one you trust. The one that picks up the phone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <BracketCTA label="Book a 30-Minute Call" href="https://calendly.com/fikratechnology/30min" variant="primary" external />
              <BracketCTA label="See Our Work" href="/work" variant="secondary" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
