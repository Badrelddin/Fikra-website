"use client";
import { useEffect, useRef } from "react";

export function useGridAnimation(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Explicit non-null aliases — TypeScript loses narrowing inside closures
    const cv: HTMLCanvasElement = canvas;
    const cx: CanvasRenderingContext2D = ctx;

    const SPACING = 28;
    const RADIUS = 90;
    const STRENGTH = 4;

    let dots: { ox: number; oy: number; x: number; y: number }[] = [];
    let animId: number;
    let W = 0;
    let H = 0;

    function buildDots() {
      W = cv.width = cv.offsetWidth;
      H = cv.height = cv.offsetHeight;
      dots = [];
      for (let x = SPACING; x < W; x += SPACING)
        for (let y = SPACING; y < H; y += SPACING)
          dots.push({ ox: x, oy: y, x, y });
    }

    function draw() {
      cx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouseRef.current;

      for (const d of dots) {
        const dx = mx - d.ox;
        const dy = my - d.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS && dist > 0) {
          const force = (1 - dist / RADIUS) * STRENGTH;
          d.x = d.ox + (dx / dist) * force;
          d.y = d.oy + (dy / dist) * force;
        } else {
          d.x += (d.ox - d.x) * 0.12;
          d.y += (d.oy - d.y) * 0.12;
        }

        const alpha =
          dist < RADIUS ? 0.05 + 0.18 * (1 - dist / RADIUS) : 0.05;

        cx.beginPath();
        cx.arc(d.x, d.y, 1.2, 0, Math.PI * 2);
        cx.fillStyle = `rgba(255,255,255,${alpha})`;
        cx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cv.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };

    const parent = cv.parentElement;
    parent?.addEventListener("mousemove", handleMouseMove);
    parent?.addEventListener("mouseleave", handleMouseLeave);

    const ro = new ResizeObserver(() => buildDots());
    ro.observe(cv);

    buildDots();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      parent?.removeEventListener("mousemove", handleMouseMove);
      parent?.removeEventListener("mouseleave", handleMouseLeave);
      ro.disconnect();
    };
  }, [canvasRef]);
}
