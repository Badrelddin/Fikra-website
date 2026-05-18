"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function BrandIntro({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<"idle" | "line" | "logo" | "tag" | "out">("idle");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase("line"), 300));
    timers.push(setTimeout(() => setPhase("logo"), 1000));
    timers.push(setTimeout(() => setPhase("tag"), 1500));
    timers.push(setTimeout(() => setPhase("out"), 2200));
    timers.push(setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2700));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!visible) return null;

  const lineActive = phase === "line" || phase === "logo" || phase === "tag" || phase === "out";
  const logoActive = phase === "logo" || phase === "tag" || phase === "out";
  const tagActive = phase === "tag" || phase === "out";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="brand-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "out" ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "#07080F",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* LOGO + LINE */}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "600px",
            gap: "16px",
          }}>
            {/* Logo — sits above the line */}
            <motion.div
              style={{ position: "relative", zIndex: 2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: logoActive ? 1 : 0, y: logoActive ? 0 : 20 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/logo.png"
                alt="Fikra"
                width={1800}
                height={1800}
                style={{ width: "auto", height: "80px", objectFit: "contain" }}
                priority
              />
            </motion.div>

            {/* Line — underneath the logo */}
            <div style={{
              position: "relative",
              width: "100%",
              height: "1.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* Left half */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  right: "50%",
                  height: "1.5px",
                  background: "#1E6FBF",
                  transformOrigin: "right center",
                }}
                initial={{ width: 0 }}
                animate={{ width: lineActive ? "50%" : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Right half */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  height: "1.5px",
                  background: "#1E6FBF",
                  transformOrigin: "left center",
                }}
                initial={{ width: 0 }}
                animate={{ width: lineActive ? "50%" : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: tagActive ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              marginTop: "32px",
              fontSize: "var(--text-label)",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Building your digital future
          </motion.p>

          {/* PROGRESS DOTS */}
          <div style={{ position: "absolute", bottom: "28px", display: "flex", gap: "6px" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background:
                    i === 0 && phase === "idle" ? "#1E6FBF" :
                    i === 1 && (phase === "line" || phase === "logo") ? "#1E6FBF" :
                    i === 2 && (phase === "tag" || phase === "out") ? "#1E6FBF" :
                    "rgba(255,255,255,0.15)",
                  transition: "background 0.3s ease",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
