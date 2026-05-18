"use client";

// ─── WORK PAGE PREVIEW ───────────────────────────────────────────────────────
// Shows three placement options for the team illustration.
// Save the image to /public/team-illustration.png then visit /preview.
// ─────────────────────────────────────────────────────────────────────────────

const IMG = "/team-illustration.png";

const cases = [
  {
    num: "01", name: "Volkov Estates", industry: "Real Estate", platform: "iOS & Android",
    result_stat: "247 units · 34 active deals · 0 spreadsheets",
    subheadline: "Real estate empire. Spreadsheet infrastructure. Something had to give.",
    body: "One platform. Live status on every unit. Accessible in the field. Premium enough to match the properties being sold.",
  },
  {
    num: "02", name: "Crimson Care Foundation", industry: "Healthcare", platform: "Mobile App + Integration",
    result_stat: "36 lives tracked · per donor profile · 0 sync failures",
    subheadline: "People wanted to donate blood. The process was stopping them.",
    body: "Real-time integration with an existing Blood Bank system. 100–200 daily interactions. Zero tolerance for sync failures.",
  },
  {
    num: "03", name: "Rahimi Regulatory Authority", industry: "Government", platform: "Website + Mobile",
    result_stat: "Tens of thousands served · International compliance",
    subheadline: "A government institution needed a platform citizens could trust.",
    body: "Multilingual web portal. Citizen mobile app. Security architecture built to international standards.",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
      color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)", borderRadius: 100, padding: "3px 10px",
    }}>{children}</span>
  );
}

function CaseCard({ c }: { c: typeof cases[0] }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 20, overflow: "hidden",
    }}>
      <div style={{ padding: "32px 36px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(33,118,255,0.85)", letterSpacing: "0.12em" }}>Case {c.num}</span>
              <span style={{ color: "rgba(255,255,255,0.18)" }}>·</span>
              <Tag>{c.industry}</Tag>
              <Tag>{c.platform}</Tag>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 10 }}>{c.name}</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.48)", lineHeight: 1.55 }}>{c.subheadline}</p>
          </div>
          <div style={{
            background: "rgba(33,118,255,0.08)", border: "1px solid rgba(33,118,255,0.18)",
            borderRadius: 14, padding: "16px 20px", minWidth: 190, flexShrink: 0,
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#2176FF", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>Result</p>
            {c.result_stat.split(" · ").map((s, i) => (
              <p key={i} style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{s}</p>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "28px 36px" }}>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 600 }}>{c.body}</p>
      </div>
    </div>
  );
}

function OptionLabel({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{
          width: 28, height: 28, borderRadius: "50%", background: "#2176FF",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 800, color: "white", flexShrink: 0,
        }}>{num}</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>{title}</span>
      </div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, paddingLeft: 40 }}>{desc}</p>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <div style={{ background: "#07080F", color: "white", fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", minHeight: "100vh" }}>

      {/* Preview badge */}
      <div style={{
        position: "fixed", top: 16, left: 16, zIndex: 9999,
        background: "rgba(255,200,0,0.12)", border: "1px solid rgba(255,200,0,0.35)",
        backdropFilter: "blur(14px)", borderRadius: 100, padding: "7px 16px",
        fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: "rgba(255,210,0,0.9)", textTransform: "uppercase",
      }}>
        ✦ Preview — Not Live
      </div>

      {/* Intro */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 80px 60px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#2176FF", textTransform: "uppercase", marginBottom: 12 }}>— Placement Options</p>
        <h1 style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-0.04em", color: "white", marginBottom: 16, lineHeight: 1.1 }}>
          3 ways to place<br />the illustration
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.50)", lineHeight: 1.75, maxWidth: 480, marginBottom: 56 }}>
          Scroll down to see each option in context. Pick what feels right.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {[
            { num: "1", title: "Hero — split layout", desc: "Image sits right of the headline. Strong first impression, professional feel." },
            { num: "2", title: "Full-width banner", desc: "Centered between header and cases. Acts as a visual separator with max impact." },
            { num: "3", title: "CTA section", desc: "Floats above the closing call-to-action. Warm, human finish to the page." },
          ].map((o, i) => (
            <div key={o.num} style={{ padding: "28px 0", paddingRight: i < 2 ? 40 : 0, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <OptionLabel {...o} />
            </div>
          ))}
        </div>
      </div>

      {/* ── OPTION 1 — Hero split layout ──────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "12px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.16em", color: "#2176FF", textTransform: "uppercase" }}>Option 1 — Hero split</span>
      </div>

      <section style={{ padding: "80px 80px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#2176FF", textTransform: "uppercase", marginBottom: 20 }}>— Case Studies</p>
            <h1 style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.04, marginBottom: 16 }}>
              <span style={{ color: "#fff" }}>Real projects.</span><br />
              <span style={{ color: "rgba(255,255,255,0.42)" }}>Real problems.</span><br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>Real results.</span>
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.40)", fontStyle: "italic" }}>No invented metrics. No stock photo clients.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={IMG}
              alt="Fikra team at work"
              style={{
                width: "100%", maxWidth: 480,
                filter: "drop-shadow(0 24px 60px rgba(33,118,255,0.18))",
                borderRadius: 12,
              }}
            />
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cases.map(c => <CaseCard key={c.num} c={c} />)}
        </div>
      </div>

      {/* ── OPTION 2 — Full-width banner ──────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "12px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.16em", color: "#2176FF", textTransform: "uppercase" }}>Option 2 — Full-width banner</span>
      </div>

      <section style={{ padding: "80px 80px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#2176FF", textTransform: "uppercase", marginBottom: 20 }}>— Case Studies</p>
        <h1 style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.04, marginBottom: 8 }}>
          <span style={{ color: "#fff" }}>Real projects.</span>{" "}
          <span style={{ color: "rgba(255,255,255,0.42)" }}>Real problems.</span>{" "}
          <span style={{ color: "rgba(255,255,255,0.18)" }}>Real results.</span>
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.40)", fontStyle: "italic", marginBottom: 56 }}>No invented metrics. No stock photo clients.</p>

        {/* Banner */}
        <div style={{
          borderRadius: 24, overflow: "hidden",
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          padding: "48px 0", textAlign: "center", marginBottom: 56,
          boxShadow: "0 0 80px rgba(33,118,255,0.08)",
        }}>
          <img
            src={IMG}
            alt="Fikra team at work"
            style={{
              maxWidth: 560, width: "80%",
              filter: "drop-shadow(0 20px 48px rgba(33,118,255,0.22))",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cases.map(c => <CaseCard key={c.num} c={c} />)}
        </div>
      </section>

      {/* ── OPTION 3 — CTA section ────────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "12px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.16em", color: "#2176FF", textTransform: "uppercase" }}>Option 3 — CTA section</span>
      </div>

      <section style={{ padding: "80px 80px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#2176FF", textTransform: "uppercase", marginBottom: 20 }}>— Case Studies</p>
        <h1 style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.04, marginBottom: 8 }}>
          <span style={{ color: "#fff" }}>Real projects.</span><br />
          <span style={{ color: "rgba(255,255,255,0.42)" }}>Real problems.</span><br />
          <span style={{ color: "rgba(255,255,255,0.18)" }}>Real results.</span>
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.40)", fontStyle: "italic", marginBottom: 56 }}>No invented metrics. No stock photo clients.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 80 }}>
          {cases.map(c => <CaseCard key={c.num} c={c} />)}
        </div>

        {/* CTA with image */}
        <div style={{
          borderRadius: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          padding: "64px 60px", textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse, rgba(33,118,255,0.14) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
          <img
            src={IMG}
            alt="Fikra team at work"
            style={{
              maxWidth: 380, width: "60%", marginBottom: 40,
              filter: "drop-shadow(0 16px 40px rgba(33,118,255,0.20))",
              position: "relative",
            }}
          />
          <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.04em", color: "white", marginBottom: 16, position: "relative" }}>
            40+ stories. Most under NDA.<br />Yours doesn&apos;t have to be.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.50)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 40px", position: "relative" }}>
            Tell us your problem. We'll tell you if we can solve it — honestly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", position: "relative" }}>
            <a href="#" style={{ padding: "14px 32px", background: "#2176FF", color: "white", borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 32px rgba(33,118,255,0.35)" }}>Book a 30-Minute Call</a>
            <a href="#" style={{ padding: "14px 28px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", borderRadius: 100, fontSize: 15, textDecoration: "none" }}>Get a Proposal →</a>
          </div>
        </div>
      </section>

    </div>
  );
}
