"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FikraNav } from "@/components/ui/text-roll-navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Floating pill wrapper — pointer-events-none so it doesn't block scroll */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
        <header
          ref={headerRef}
          className={`max-w-[1200px] mx-auto pointer-events-auto rounded-2xl transition-all duration-300 ease-out ${
            scrolled
              ? "shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.10)]"
              : "shadow-[0_4px_20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.07)]"
          }`}
          style={{
            background: scrolled
              ? "rgba(7,8,15,0.96)"
              : "rgba(7,8,15,0.72)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
          onMouseMove={(e) => {
            const rect = headerRef.current?.getBoundingClientRect();
            if (!rect || !lineRef.current) return;
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            lineRef.current.style.background = `linear-gradient(90deg, transparent 0%, transparent ${Math.max(0, x - 18)}%, #1E6FBF ${Math.max(0, x - 6)}%, #2176FF ${x}%, #1E6FBF ${Math.min(100, x + 6)}%, transparent ${Math.min(100, x + 18)}%, transparent 100%)`;
          }}
          onMouseLeave={() => {
            if (lineRef.current) {
              lineRef.current.style.background = "linear-gradient(90deg, transparent 0%, #1E6FBF 25%, #2176FF 50%, #1E6FBF 75%, transparent 100%)";
            }
          }}
        >
          {/* Blue gradient accent line — follows mouse X */}
          <div
            ref={lineRef}
            className="rounded-t-2xl"
            style={{
              height: "2px",
              background: "linear-gradient(90deg, transparent 0%, #1E6FBF 25%, #2176FF 50%, #1E6FBF 75%, transparent 100%)",
              opacity: scrolled ? 1 : 0.7,
              transition: "opacity 300ms ease",
            }}
          />

          <nav
            className="px-5 lg:px-8 flex items-center justify-between h-[52px]"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-fikra-blue focus-visible:outline-offset-4 rounded-sm"
            >
              <Image
                src="/logo.png"
                alt="Fikra"
                width={1800}
                height={1800}
                style={{ width: "auto", height: "46px", minWidth: "108px", objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.005em" }}
                  className={`transition-colors duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-fikra-blue focus-visible:outline-offset-4 rounded-sm pb-0.5 ${
                    pathname === link.href
                      ? "text-white border-b border-fikra-blue"
                      : "text-white/60 hover:text-white border-b border-transparent hover:border-fikra-blue/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact-form"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="glass-btn-sm ml-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fikra-blue focus-visible:outline-offset-4"
              >
                <span className="shine" /><span className="label">Let&apos;s Build →</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 -mr-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fikra-blue focus-visible:outline-offset-4 rounded-lg cursor-pointer"
            >
              <span
                className={`block w-5 h-[1.5px] bg-white/80 transition-all duration-150 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white/80 transition-opacity duration-150 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white/80 transition-all duration-150 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </nav>
        </header>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation"
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: "#07080F", padding: "88px 32px 24px" }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <FikraNav onNavigate={() => setMenuOpen(false)} />
            <div style={{ marginTop: "auto", paddingTop: "32px" }}>
              <Link
                href="/#contact-form"
                onClick={() => {
                  setMenuOpen(false);
                  if (pathname === "/") {
                    setTimeout(() => {
                      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 200);
                  }
                }}
                className="glass-btn w-full justify-center"
                style={{ display: "flex" }}
              >
                <span className="shine" /><span className="label">Let&apos;s Build →</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
