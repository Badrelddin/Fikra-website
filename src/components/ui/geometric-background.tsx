"use client";
import { useEffect, useRef } from "react";

interface GeometricBackgroundProps {
  density?: "default" | "low";
}

export function GeometricBackground({ density = "default" }: GeometricBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cv: HTMLCanvasElement = canvas;
    const cx: CanvasRenderingContext2D = ctx;

    let W = 0, H = 0, animId: number;
    let mouseX = -9999, mouseY = -9999;

    interface Shard {
      x: number; y: number;
      vx: number; vy: number;
      baseVx: number; baseVy: number;
      size: number; sides: number; angle: number;
      rotSpeed: number; alpha: number; isBlue: boolean; strokeOnly: boolean;
    }

    let shards: Shard[] = [];

    function makeShard(): Shard {
      const sr = Math.random();
      const size =
        sr < 0.2 ? 80 + Math.random() * 40
        : sr < 0.6 ? 35 + Math.random() * 25
        : 12 + Math.random() * 14;
      const bvx = (Math.random() - 0.5) * 0.18;
      const bvy = (Math.random() - 0.5) * 0.10;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: bvx, vy: bvy,
        baseVx: bvx, baseVy: bvy,
        size,
        sides: Math.random() < 0.55 ? 3 : 4,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.002,
        alpha: 0.025 + Math.random() * 0.045,
        isBlue: Math.random() < 0.18,
        strokeOnly: Math.random() < 0.7,
      };
    }

    function resize() {
      const p = cv.parentElement;
      if (!p) return;
      W = cv.width = p.offsetWidth;
      H = cv.height = p.offsetHeight;
      const divisor = density === "low" ? 20000 : 10000;
      const count = Math.max(density === "low" ? 4 : 8, Math.floor((W * H) / divisor));
      shards = Array.from({ length: count }, makeShard);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = cv.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    // Use window so events are captured regardless of which child element the cursor is over
    window.addEventListener("mousemove", onMouseMove);

    function drawPoly(s: Shard) {
      cx.beginPath();
      for (let i = 0; i < s.sides; i++) {
        const a = s.angle + i * (Math.PI * 2 / s.sides);
        const px = s.x + s.size * Math.cos(a);
        const py = s.y + s.size * Math.sin(a);
        i === 0 ? cx.moveTo(px, py) : cx.lineTo(px, py);
      }
      cx.closePath();
      const alpha = Math.min(s.alpha, 0.07);
      cx.strokeStyle = s.isBlue
        ? `rgba(30,111,191,${alpha})`
        : `rgba(255,255,255,${alpha * 0.6})`;
      cx.lineWidth = s.isBlue ? 0.8 : 0.5;
      cx.stroke();
      if (!s.strokeOnly && s.isBlue) {
        cx.fillStyle = `rgba(30,111,191,${alpha * 0.2})`;
        cx.fill();
      }
    }

    const REPEL_RADIUS = 160;
    const MAX_SPEED = 4;

    function animate() {
      cx.clearRect(0, 0, W, H);
      shards.forEach((s) => {
        // Mouse repulsion
        const dx = s.x - mouseX;
        const dy = s.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 1) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * 0.7;
          s.vx += (dx / dist) * force;
          s.vy += (dy / dist) * force;
        }

        // Drift back toward base velocity
        s.vx += (s.baseVx - s.vx) * 0.035;
        s.vy += (s.baseVy - s.vy) * 0.035;

        // Clamp speed
        const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        if (spd > MAX_SPEED) {
          s.vx = (s.vx / spd) * MAX_SPEED;
          s.vy = (s.vy / spd) * MAX_SPEED;
        }

        s.x += s.vx;
        s.y += s.vy;
        s.angle += s.rotSpeed;

        if (s.x < -s.size) s.x = W + s.size;
        if (s.x > W + s.size) s.x = -s.size;
        if (s.y < -s.size) s.y = H + s.size;
        if (s.y > H + s.size) s.y = -s.size;

        drawPoly(s);
      });
      animId = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
