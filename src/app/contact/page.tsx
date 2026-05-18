import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import ContactChat from "@/components/ContactChat";
import BracketCTA from "@/components/BracketCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Fikra Technology. We respond to every inquiry within 24 hours.",
};

const steps = [
  { label: "Today", body: "You send a message." },
  { label: "Within 24 hours", body: "A real person responds. With thoughts. Not a ticket number." },
  { label: "First call — 30 minutes", body: "We listen. You talk. No pitch. No deck. An honest conversation about what you need." },
  { label: "Within one week", body: "If we're the right fit — a clear proposal. Scope, approach, timeline, investment. No surprises." },
  { label: "If we're not the right fit", body: "We tell you that too. And where we can — we point you in the right direction. We'd rather lose the project than waste your time." },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="section-primary pt-40 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-6">— Contact</p>
            <h1 style={{ letterSpacing: "-0.04em", lineHeight: 1.04 }}>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "#ffffff" }}>You reached the end.</span>
              <span className="block font-bold" style={{ fontSize: "var(--text-h1)", color: "rgba(255,255,255,0.45)" }}>That means something.</span>
            </h1>
            <p className="mt-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>Let&apos;s talk.</p>
          </SectionReveal>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-8">— What Happens Next</p>
          </SectionReveal>
          <div className="space-y-0 divide-y divide-white/10">
            {steps.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 0.06}>
                <div className="py-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-16">
                  <p className="font-semibold text-fikra-blue" style={{ fontSize: "var(--text-body)" }}>{s.label}</p>
                  <p style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.55)", lineHeight: 1.72 }}>{s.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chat + Contact Details */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ContactChat />
            </div>
            <div>
              <SectionReveal delay={0.1}>
                <div className="space-y-10">
                  <div>
                    <p className="eyebrow mb-4">Email</p>
                    <a
                      href="mailto:info@fikratechnology.com"
                      className="font-medium text-white hover:text-fikra-blue transition-colors duration-150"
                      style={{ fontSize: "var(--text-body)" }}
                    >
                      info@fikratechnology.com
                    </a>
                  </div>

                  <div>
                    <p className="eyebrow mb-4">Phone</p>
                    <a
                      href="tel:+971523846699"
                      className="font-medium text-white hover:text-fikra-blue transition-colors duration-150 block mb-1"
                      style={{ fontSize: "var(--text-body)" }}
                    >
                      +971 52 384 6699
                    </a>
                    <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.35)" }}>Sunday–Thursday, 9am–6pm GST</p>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-white/10">
                    <div>
                      <p className="eyebrow mb-3">Abu Dhabi, UAE — Headquarters</p>
                      <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.55)", lineHeight: 1.72 }}>
                        3 Al Hirdiyah St, Al Bateen<br />
                        Abu Dhabi, UAE
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Alexandria, Egypt — Office</p>
                      <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.55)", lineHeight: 1.72 }}>
                        696 El Horreya Road, Loran<br />
                        Alexandria, Egypt
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-secondary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <SectionReveal>
            <p className="eyebrow mb-4">— Partnerships</p>
            <h2 className="font-bold text-white mb-3" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Building something together?
            </h2>
            <p className="max-w-xl mb-4" style={{ fontSize: "var(--text-body)", color: "rgba(255,255,255,0.55)", lineHeight: 1.72 }}>
              Technology partners, AI companies, design studios — if you share our standard, let&apos;s talk.
            </p>
            <a
              href="mailto:info@fikratechnology.com?subject=Partnership"
              className="hover:text-fikra-blue transition-colors duration-150"
              style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.55)" }}
            >
              info@fikratechnology.com — Subject: Partnership
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-primary section-spacing">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <SectionReveal>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              The best time to start<br />was six months ago.<br />
              The second best time is now.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <BracketCTA label="Book a 30-Minute Call — No Pitch" href="https://calendly.com/fikratechnology/30min" variant="primary" external />
              <BracketCTA label="Get a Proposal in 7 Days" href="/contact" variant="secondary" />
            </div>
            <p style={{ fontSize: "var(--text-caption)", color: "rgba(255,255,255,0.35)" }}>
              info@fikratechnology.com · +971 52 384 6699<br />
              Abu Dhabi, UAE · Alexandria, Egypt · www.fikratechnology.com
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
