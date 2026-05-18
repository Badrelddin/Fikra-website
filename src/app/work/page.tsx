import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import BracketCTA from "@/components/BracketCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real projects. Real problems. Real results. Case studies from Fikra Technology.",
};

const cases = [
  {
    num: "01",
    name: "Volkov Estates",
    industry: "Real Estate",
    platform: "iOS & Android",
    type: "Internal Mobile Application",
    result_stat: "247 units · 34 active deals · 0 spreadsheets",
    subheadlines: ["Real estate empire. Spreadsheet infrastructure.", "Something had to give."],
    situation:
      "Agents in the field. Managers at HQ. Listings changing daily. Everything living in spreadsheets — different versions, different devices, zero single source of truth. The business was growing. The system couldn't keep up.",
    challenge:
      "One platform. Live status on every unit. Accessible in the field. Premium enough to match the properties being sold.",
    built:
      "Units Inventory — live status, real time. Lead Management — nothing falls through. Deal Pipeline — full visibility for agents and managers. Sales Dashboard — commissions, rankings, targets. Secure cross-platform backend.",
    result:
      "247 units. 34 active deals. One platform. Every agent. Zero spreadsheets. Zero phone calls to check unit status. The system now runs as fast as the business does.",
  },
  {
    num: "02",
    name: "Crimson Care Foundation",
    industry: "Healthcare",
    platform: "Mobile App + System Integration",
    type: "100–200 daily interactions",
    result_stat: "36 lives tracked · per active donor profile · 0 sync failures",
    subheadlines: [
      "People wanted to donate blood.",
      "The process was stopping them. We fixed the process.",
    ],
    situation:
      "Blood donation saves lives. But the friction between willing donor and completed donation was losing people. They donated once — and didn't come back.",
    challenge:
      "Real-time integration with an existing Blood Bank system. 100–200 daily interactions. Zero tolerance for sync failures.",
    built:
      "Donor profiles. Pre-donation health screening. Appointment booking. Center locator. Donation history. Automated certificates. Live sync — every interaction, zero discrepancy.",
    result:
      "A process that once felt complicated now fits in a pocket. 36 lives tracked per active donor profile. This is what technology is for. Impact. Not features.",
  },
  {
    num: "03",
    name: "Rahimi Regulatory Authority",
    industry: "Government",
    platform: "Website + Mobile Application",
    type: "International compliance standard",
    result_stat: "Tens of thousands served · International compliance · Staff productivity up",
    subheadlines: [
      "A government institution needed a platform citizens could trust.",
      "No shortcuts. No excuses.",
    ],
    situation:
      "A mandate to serve the public — digitally, reliably, accessibly. The previous infrastructure wasn't meeting it.",
    challenge:
      "Powerful enough for a government institution. Simple enough for every citizen regardless of technical ability. Meeting international security and compliance standards throughout.",
    built:
      "Multilingual web portal with no-code CMS. Citizen mobile app — complaints, surveys, announcements, license applications. Security architecture built to international standards.",
    result:
      "Tens of thousands of citizens served. Staff productivity up. Compliance built in — not bolted on. Modern. Accessible. Reliable. Human.",
  },
];

const infoSections = [
  { key: "situation", label: "The Situation" },
  { key: "challenge", label: "The Challenge" },
  { key: "built", label: "What We Built" },
  { key: "result", label: "The Result" },
] as const;

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="section-primary pt-40 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— Case Studies</p>
            <h1 style={{ letterSpacing: "-0.04em", lineHeight: 1.04 }}>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "#ffffff" }}>Real projects.</span>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "rgba(255,255,255,0.42)" }}>Real problems.</span>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "rgba(255,255,255,0.18)" }}>Real results.</span>
            </h1>
            <p className="mt-4" style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.40)", fontStyle: "italic" }}>No invented metrics. No stock photo clients.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Cases */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 space-y-20">
          {cases.map((c, idx) => (
            <SectionReveal key={c.num} delay={idx * 0.04}>
              <div className="case-card">
                {/* Case header */}
                <div
                  className="px-8 py-8 lg:px-10"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      {/* Badges row */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="eyebrow" style={{ color: "rgba(33,118,255,0.80)" }}>Case {c.num}</span>
                        <span style={{ color: "rgba(255,255,255,0.18)" }}>·</span>
                        <span className="tag-pill">{c.industry}</span>
                        <span className="tag-pill">{c.platform}</span>
                      </div>
                      <h2
                        className="font-bold text-white mb-3 tracking-tight"
                        style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.15 }}
                      >
                        {c.name}
                      </h2>
                      <div className="space-y-1">
                        {c.subheadlines.map((s) => (
                          <p key={s} className="font-medium" style={{ fontSize: "var(--text-sub)", letterSpacing: "-0.01em", color: "rgba(255,255,255,0.50)", lineHeight: 1.4 }}>{s}</p>
                        ))}
                      </div>
                    </div>

                    {/* Result stat box */}
                    <div
                      className="shrink-0 rounded-xl px-5 py-4 md:max-w-[220px]"
                      style={{ background: "rgba(33,118,255,0.08)", border: "1px solid rgba(33,118,255,0.18)" }}
                    >
                      <p className="eyebrow mb-2" style={{ color: "#2176FF" }}>Result</p>
                      <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                        {c.result_stat.split(" · ").map((s, i) => (
                          <span key={i} className="block">{s}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info sections */}
                <div className="px-8 py-8 lg:px-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {infoSections.map(({ key, label }) => (
                      <div key={label}>
                        <p className="font-semibold mb-2" style={{ fontSize: "var(--text-caption)", color: "#2176FF", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</p>
                        <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>{c[key]}</p>
                      </div>
                    ))}
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
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              40+ stories. Most under NDA.<br />Yours doesn&apos;t have to be.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <BracketCTA label="Book a 30-Minute Call" href="https://calendly.com/fikratechnology/30min" variant="primary" external />
              <BracketCTA label="Get a Proposal in 7 Days" href="/contact" variant="secondary" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
