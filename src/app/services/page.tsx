import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import BracketCTA from "@/components/BracketCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, mobile apps, web applications, UI/UX design, QA, DevOps, project management, post-launch support, and market intelligence.",
};

const services = [
  {
    num: "01",
    name: "Custom Software",
    headline: "Built for you. Fits no one else.",
    body: "Your business isn't generic. Your software shouldn't be either. We build from scratch — around how you actually operate.",
    tags: ["Enterprise platforms", "Internal tools", "ERP systems", "Workflow automation", "BI dashboards"],
  },
  {
    num: "02",
    name: "Mobile Applications",
    headline: "Your product. Every pocket.",
    body: "iOS. Android. Cross-platform. Built for real estate agents in the field, donors booking at midnight, citizens accessing government services for the first time. They all worked. First day and two years later.",
    tags: ["Consumer apps", "Internal tools", "Cross-platform", "App store deployment", "Ongoing maintenance"],
  },
  {
    num: "03",
    name: "Web Applications",
    headline: "Powerful backend. Simple frontend.",
    body: "The best web platforms feel effortless. We build systems that handle real load and real complexity — without the user ever feeling any of it.",
    tags: ["Web portals", "SaaS platforms", "Government systems", "Secure financial platforms", "CMS"],
  },
  {
    num: "04",
    name: "UI/UX Design",
    headline: "Design is not how it looks. It's whether your user comes back.",
    body: "Interfaces that earn trust in the first three seconds. Where users don't notice the design. They just get things done.",
    tags: ["User research", "Wireframing", "Prototyping", "Interface design", "Design systems"],
  },
  {
    num: "05",
    name: "Quality Assurance",
    headline: "We find the bugs before your users do.",
    body: "Every product gets broken before it ships. By us. Intentionally. Edge cases, security gaps, stress loads — in testing, not in production.",
    tags: ["Functional", "Load & performance", "Security", "Cross-platform", "UAT"],
  },
  {
    num: "06",
    name: "DevOps & Infrastructure",
    headline: "Ships fast. Stays up. Scales quietly.",
    body: "The infrastructure no one thinks about — until it fails at 3am. We think about it from day one.",
    tags: ["Cloud architecture", "CI/CD pipelines", "Server management", "Monitoring", "Scalability"],
  },
  {
    num: "07",
    name: "Project Management",
    headline: "You'll always know where we are.",
    body: "No black boxes. Weekly check-ins. Shared dashboards. One project manager who picks up the phone. Always.",
    tags: ["Sprint planning", "Weekly reporting", "Milestone tracking", "Stakeholder comms"],
  },
  {
    num: "08",
    name: "Post-Launch Support",
    headline: "Most agencies stop at launch. We consider launch the beginning.",
    body: "Monitoring, updates, bug fixes, performance reviews. For as long as your product needs us. Not a package. A way of working.",
    tags: ["Technical support", "Performance monitoring", "Feature updates", "Security patches"],
  },
  {
    num: "09",
    name: "Market & Competitive Intelligence",
    headline: "We don't just want your product to exist. We want it to win.",
    body: "After we build — we study your market, your competitors, the gaps they're missing. We bring you the intelligence. You make the moves. No other software house in the UAE does this. We do.",
    tags: ["Competitor analysis", "Market positioning", "Feature gap reports", "Growth recommendations"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="section-primary pt-40 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— Services</p>
            <h1 style={{ letterSpacing: "-0.04em", lineHeight: 1.04 }}>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "#ffffff" }}>What we build.</span>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "rgba(255,255,255,0.42)" }}>How we build it.</span>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "rgba(255,255,255,0.18)" }}>Why it holds.</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Service list */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          {services.map((s, i) => (
            <SectionReveal key={s.num} delay={Math.min(i * 0.04, 0.25)}>
              <div
                className="group py-12 transition-all duration-200"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-12">
                  {/* Number */}
                  <div className="flex items-start pt-1">
                    <span
                      className="font-bold transition-colors duration-200 group-hover:text-fikra-blue"
                      style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}
                    >
                      {s.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="eyebrow mb-3" style={{ color: "rgba(33,118,255,0.75)" }}>{s.name}</p>
                    <h2
                      className="font-bold text-white mb-4 leading-snug"
                      style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.02em" }}
                    >
                      {s.headline}
                    </h2>
                    <p
                      className="mb-6"
                      style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75, maxWidth: "640px" }}
                    >
                      {s.body}
                    </p>
                    {/* Tag pills */}
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <SectionReveal>
            <h2
              className="font-bold text-white mb-8"
              style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}
            >
              Nine services. One team.<br />One phone number.
            </h2>
            <BracketCTA label="Book a 30-Minute Call" href="https://calendly.com/fikratechnology/30min" variant="primary" external />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
