import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import BracketCTA from "@/components/BracketCTA";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Six stages. No black boxes. No vanishing acts. Here's exactly what working with Fikra looks like.",
};

const stages = [
  {
    num: "01",
    name: "We listen.",
    body: "Who actually uses this? What breaks their day? What does success look like in twelve months? Those answers change everything. So we ask them first.",
    outputs: ["Stakeholder interviews", "Workflow mapping", "Problem definition", "Feasibility assessment"],
    duration: "1–2 weeks",
  },
  {
    num: "02",
    name: "We think.",
    body: "Architecture before aesthetics. The right technology for your project — not the technology we're most comfortable with. That decision, made right, saves you years.",
    outputs: ["Technical architecture", "Technology selection", "Product roadmap", "Timeline planning"],
    duration: "1–2 weeks",
  },
  {
    num: "03",
    name: "You see it before we build it.",
    body: "We design every screen. Hand it to you — working, clickable, real. You break it. You tell us what's wrong. Changing a design takes days. Changing built software takes months. This stage saves you both.",
    outputs: ["UI/UX design", "Interactive prototyping", "Design review", "Your sign-off before dev begins"],
    duration: "2–4 weeks",
  },
  {
    num: "04",
    name: "We build. You watch.",
    body: "Every sprint — real progress. Actual features. Working. In your hands. Close enough to steer if something needs to change.",
    outputs: ["Agile sprints", "Weekly demos", "Milestone sign-offs", "Real-time progress tracking"],
    duration: "Depends on scope. Always communicated clearly.",
  },
  {
    num: "05",
    name: "We break it.",
    body: "Our QA team's job is to destroy what we built. Every edge case. Every weak point. Every scenario no one planned for. The only acceptable time for something to break is when we're the ones breaking it.",
    outputs: ["Functional", "Load & performance", "Security", "Cross-platform", "User acceptance"],
    duration: "1–3 weeks",
  },
  {
    num: "06",
    name: "We launch. Then we stay.",
    body: "Deployment. Monitoring. Market analysis. Competitive intelligence. Growth advice. We don't hand you a product and a manual. We hand you a product — and stay on speed dial.",
    outputs: ["Technical monitoring", "Bug resolution", "Feature updates", "Competitor analysis", "Growth advisory"],
    duration: "As long as you need us.",
  },
];

const communication = [
  {
    name: "Weekly Progress Reports",
    body: "What got done, what's next, what decisions you need to make. Plain language. Every week.",
  },
  {
    name: "Dedicated Project Manager",
    body: "One person. Your direct line. Answers when you call.",
  },
  {
    name: "Shared Project Dashboard",
    body: "Real-time visibility into every milestone. Always available. Always current.",
  },
  {
    name: "Honest Conversations",
    body: "If something is taking longer — we tell you before you ask. We bring the solution, not just the problem.",
  },
];

const pricing = [
  {
    name: "Fixed Price",
    body: "Clear scope. Clear price. No surprises.",
    note: "Best for well-defined projects.",
  },
  {
    name: "Time & Material",
    body: "Pay for what gets built.",
    note: "Best for evolving projects.",
  },
  {
    name: "Retainer",
    body: "Monthly capacity. Ongoing partnership.",
    note: "Best for continuous development.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Header */}
      <section className="section-primary pt-40 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— How We Work</p>
            <h1
              className="font-bold text-white mb-4"
              style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.04em", lineHeight: 1.04 }}
            >
              Here&apos;s exactly what working with Fikra looks like.
            </h1>
            <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>
              No black boxes. No vanishing acts. No excuses.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-4">— The Problem We Solve</p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}
            >
              You&apos;ve been here before.
            </h2>
            <p className="max-w-2xl mb-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
              Kickoff meeting. Big energy. Month three. Silence. Delivery day. Something&apos;s wrong. Support request. No answer.
            </p>
            <p className="font-semibold" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.82)" }}>
              We built our entire process around fixing that experience.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Stages */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {stages.map((s, i) => (
              <SectionReveal key={s.num} delay={i * 0.05}>
                <div
                  className="py-12 grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-6 lg:gap-12"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {/* Stage indicator */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-3 pt-1">
                    <div
                      className="flex items-center justify-center rounded-full shrink-0"
                      style={{
                        width: 40,
                        height: 40,
                        border: "1px solid rgba(33,118,255,0.30)",
                        background: "rgba(33,118,255,0.06)",
                      }}
                    >
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#2176FF", letterSpacing: "0.04em" }}>{s.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="eyebrow mb-3">— Stage {s.num}</p>
                    <h2
                      className="font-bold text-white mb-4"
                      style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em", lineHeight: 1.3 }}
                    >
                      {s.name}
                    </h2>
                    <p className="max-w-2xl mb-5" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
                      {s.body}
                    </p>
                    {/* Outputs as pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.outputs.map((o) => (
                        <span key={o} className="tag-pill">{o}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.38)" }}>
                      Duration: <span style={{ color: "rgba(255,255,255,0.55)" }}>{s.duration}</span>
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-8">— Communication</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {communication.map((c, i) => (
              <SectionReveal key={c.name} delay={i * 0.07}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="font-semibold mb-3" style={{ fontSize: "var(--text-body)", letterSpacing: "-0.01em", color: "#2176FF" }}>{c.name}</p>
                  <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>{c.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-4">— Pricing</p>
            <h2
              className="font-bold text-white mb-12"
              style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}
            >
              Flexible by design.<br />Honest by default.
            </h2>
          </SectionReveal>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {pricing.map((p, i) => (
              <SectionReveal key={p.name} delay={i * 0.07}>
                <div
                  className="py-8 grid grid-cols-1 md:grid-cols-[200px_1fr_180px] gap-4 md:gap-8 items-baseline"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="font-semibold" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em", color: "#2176FF" }}>{p.name}</p>
                  <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>{p.body}</p>
                  <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.42)", fontStyle: "italic" }}>{p.note}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.25} className="mt-8">
            <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.40)", fontStyle: "italic" }}>
              We&apos;ll tell you which fits. Honestly. Not commercially.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <SectionReveal>
            <h2
              className="font-bold text-white mb-8"
              style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}
            >
              Ready to build something that lasts?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <BracketCTA label="Book a 30-Minute Call — No Pitch" href="https://calendly.com/fikratechnology/30min" variant="primary" external />
              <BracketCTA label="Get a Proposal in 7 Days" href="/contact" variant="secondary" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
