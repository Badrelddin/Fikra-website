import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import BracketCTA from "@/components/BracketCTA";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "The right tool for your project. Not the only tool we know. Flutter, React Native, Next.js, Node.js, Laravel, AWS, and more.",
};

type Tech = { name: string; body: string; note?: string };
type Category = { label: string; techs: Tech[] };

const categories: Category[] = [
  {
    label: "Mobile",
    techs: [
      { name: "Flutter", body: "Our primary cross-platform framework. One codebase. Native performance on iOS and Android." },
      { name: "React Native", body: "Proven. Flexible. Backed by one of the world's largest developer communities." },
      { name: "Swift & Kotlin", body: "When a project needs to go fully native — we go fully native. No shortcuts when performance is non-negotiable." },
    ],
  },
  {
    label: "Frontend Web",
    techs: [
      { name: "React.js · Next.js · Vue.js", body: "The standards for dynamic, high-performance web interfaces. Server-side rendering, SEO, and architecture built for serious applications." },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js · Laravel/PHP · Python · Django", body: "High-performance, battle-tested backends. Built to run for years without drama." },
    ],
  },
  {
    label: "Databases",
    techs: [
      { name: "PostgreSQL · MySQL · MongoDB · Firebase", body: "Relational or flexible — we use the right database for the right data. Consistent performance across years of growth." },
    ],
  },
  {
    label: "Cloud & DevOps",
    techs: [
      { name: "AWS · Google Cloud · Microsoft Azure", body: "Enterprise-grade cloud infrastructure trusted by governments and financial institutions worldwide." },
      { name: "Docker · Kubernetes · CI/CD", body: "The architecture that keeps applications running — at any scale, at any hour." },
    ],
  },
  {
    label: "Security",
    techs: [
      { name: "SSL/TLS · OAuth 2.0 · OWASP · Data Encryption", body: "Every product we ship communicates securely. Every vulnerability considered from day one. Every layer protected." },
    ],
  },
  {
    label: "AI & Intelligence",
    techs: [
      { name: "Looc.AI · OpenAI · ML Pipelines", body: "Conversational AI, language model integration, and behavioral intelligence — built in from day one, not added later.", note: "Powered by Looc.AI" },
    ],
  },
];

export default function TechStackPage() {
  return (
    <>
      {/* Header */}
      <section className="section-primary pt-40 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— Tech Stack</p>
            <h1 style={{ letterSpacing: "-0.04em", lineHeight: 1.04 }}>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "#ffffff" }}>The right tool for your project.</span>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "rgba(255,255,255,0.42)" }}>Not the only tool we know.</span>
            </h1>
            <p className="mt-4" style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.40)", fontStyle: "italic" }}>There&apos;s a difference. It matters more than you&apos;d think.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Great engineers don&apos;t have favourites.<br />They have standards.
            </h2>
            <p className="max-w-2xl" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
              Every project starts with the same question. Not &apos;what do we know?&apos; — but &apos;what does this project need?&apos;
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Tech categories */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {categories.map((cat, ci) => (
              <SectionReveal key={cat.label} delay={ci * 0.04}>
                <div
                  className="py-12"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="eyebrow mb-8">— {cat.label}</p>
                  <div className={`grid gap-6 ${cat.techs.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                    {cat.techs.map((t) => (
                      <div
                        key={t.name}
                        className="rounded-xl p-5"
                        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <p className="font-mono font-bold text-white mb-2 leading-snug" style={{ fontSize: "var(--text-body)", letterSpacing: "-0.01em" }}>
                          {t.name}
                        </p>
                        <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{t.body}</p>
                        {t.note && (
                          <p className="mt-3" style={{ fontSize: "var(--text-label)", color: "#2176FF", fontStyle: "italic", letterSpacing: "0.04em" }}>— {t.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Honest section */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— The Honest Part</p>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              We&apos;ll be straight with you.
            </h2>
            <p className="max-w-2xl mb-3" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>
              We don&apos;t know every technology. Nobody does. Where a project needs specialist depth we don&apos;t have — we say so. We bring the right person.
            </p>
            <p className="font-semibold" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.82)" }}>
              The goal is your project succeeding. Not our reputation surviving.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <SectionReveal>
            <h2 className="font-bold text-white mb-8" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              The right technology for your project exists.<br />
              Let&apos;s find it together.
            </h2>
            <BracketCTA label="Book a 30-Minute Call" href="https://calendly.com/fikratechnology/30min" variant="primary" external />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
