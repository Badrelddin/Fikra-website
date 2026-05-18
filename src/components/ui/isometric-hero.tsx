"use client";
import { useEffect, useRef } from "react";

export function IsometricHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cv: HTMLCanvasElement = canvas;
    const cx: CanvasRenderingContext2D = ctx;

    let W = 0, H = 0, t = 0;
    let mx = 0, my = 0, smx = 0, smy = 0;
    let eyeX = 0, eyeY = 0, antP = 0, animId: number;

    function resize() {
      const p = cv.parentElement;
      if (!p) return;
      W = cv.width = p.offsetWidth;
      H = cv.height = p.offsetHeight;
      mx = W * 0.52; my = H * 0.4;
      smx = mx; smy = my;
    }

    function onMouseMove(e: MouseEvent) {
      const r = cv.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    }

    function onMouseLeave() {
      mx = W * 0.52; my = H * 0.4;
    }

    function isoC(
      icx: number, icy: number, s: number,
      topA: number, edgeA: number, gA: number
    ) {
      const hw = s, hh = s * 0.5, depth = s * 0.72;

      cx.beginPath();
      cx.moveTo(icx, icy - hh); cx.lineTo(icx + hw, icy);
      cx.lineTo(icx, icy + hh); cx.lineTo(icx - hw, icy);
      cx.closePath();
      cx.fillStyle = `rgba(30,111,191,${Math.min(topA, 0.32)})`;
      cx.fill();

      cx.beginPath();
      cx.moveTo(icx - hw, icy); cx.lineTo(icx, icy + hh);
      cx.lineTo(icx, icy + hh + depth); cx.lineTo(icx - hw, icy + depth);
      cx.closePath();
      cx.fillStyle = `rgba(8,20,60,${Math.min(topA * 0.55, 0.26)})`;
      cx.fill();

      cx.beginPath();
      cx.moveTo(icx + hw, icy); cx.lineTo(icx, icy + hh);
      cx.lineTo(icx, icy + hh + depth); cx.lineTo(icx + hw, icy + depth);
      cx.closePath();
      cx.fillStyle = `rgba(4,10,38,${Math.min(topA * 0.38, 0.16)})`;
      cx.fill();

      cx.strokeStyle = `rgba(30,111,191,${Math.min(edgeA, 0.82)})`;
      cx.lineWidth = 0.9;
      cx.beginPath();
      cx.moveTo(icx, icy - hh); cx.lineTo(icx + hw, icy);
      cx.lineTo(icx, icy + hh); cx.lineTo(icx - hw, icy);
      cx.closePath(); cx.stroke();

      cx.strokeStyle = `rgba(30,111,191,${Math.min(edgeA * 0.55, 0.48)})`;
      cx.lineWidth = 0.6;
      ([[icx - hw, icy, icx - hw, icy + depth], [icx, icy + hh, icx, icy + hh + depth], [icx + hw, icy, icx + hw, icy + depth]] as number[][]).forEach(l => {
        cx.beginPath(); cx.moveTo(l[0], l[1]); cx.lineTo(l[2], l[3]); cx.stroke();
      });

      cx.strokeStyle = `rgba(30,111,191,${Math.min(edgeA * 0.28, 0.22)})`;
      cx.lineWidth = 0.5;
      ([[icx - hw, icy + depth, icx, icy + hh + depth], [icx + hw, icy + depth, icx, icy + hh + depth]] as number[][]).forEach(l => {
        cx.beginPath(); cx.moveTo(l[0], l[1]); cx.lineTo(l[2], l[3]); cx.stroke();
      });

      if (gA > 0.02) {
        const g = cx.createRadialGradient(icx, icy, 0, icx, icy, hw * 1.3);
        g.addColorStop(0, `rgba(30,111,191,${Math.min(gA * 0.45, 0.38)})`);
        g.addColorStop(1, "rgba(30,111,191,0)");
        cx.beginPath();
        cx.moveTo(icx, icy - hh); cx.lineTo(icx + hw, icy);
        cx.lineTo(icx, icy + hh); cx.lineTo(icx - hw, icy);
        cx.closePath(); cx.fillStyle = g; cx.fill();
      }
    }

    function drawGrid() {
      const gcx = W * 0.52, gcy = H * 0.65;
      const s = 30;
      const ox = (smx - gcx) * 0.016, oy = (smy - gcy) * 0.01;
      const rows = [
        [[0, 0], [1, 0], [2, 0], [3, 0]],
        [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]],
        [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]],
        [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]],
        [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4]],
        [[0, 5], [1, 5], [2, 5], [3, 5]],
      ];
      const all: { x: number; y: number; d: number }[] = [];
      rows.forEach(row => row.forEach(g => {
        all.push({
          x: gcx + (g[0] - g[1]) * s + ox,
          y: gcy + (g[0] + g[1]) * s * 0.5 + oy,
          d: g[0] + g[1],
        });
      }));
      all.sort((a, b) => a.d - b.d);
      all.forEach(cube => {
        const bob = Math.sin(t * 0.7 + cube.d * 0.35) * 1.8;
        const cy = cube.y + bob;
        const maxD = 10;
        const a = 0.15 + (maxD - cube.d) / maxD * 0.28;
        const ea = 0.28 + (maxD - cube.d) / maxD * 0.52;
        const dx = smx - cube.x, dy = smy - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const hov = Math.max(0, 1 - dist / 85);
        isoC(cube.x, cy, s, a + hov * 0.22, ea + hov * 0.45, hov * 0.65);
      });
    }

    function drawRobot() {
      const rx = W * 0.52, ry = H * 0.31;
      const pulse = Math.sin(t * 1.3) * 0.5 + 0.5;
      const bob = Math.sin(t * 0.88) * 3.2;
      const ddx = smx - rx, ddy = smy - (ry + bob);
      const dist = Math.sqrt(ddx * ddx + ddy * ddy);
      eyeX += (ddx / Math.max(dist, 1) * 4.2 - eyeX) * 0.1;
      eyeY += (ddy / Math.max(dist, 1) * 3.2 - eyeY) * 0.1;

      cx.save(); cx.translate(rx, ry + bob);
      cx.rotate(eyeX * 0.022);

      // Shadow
      const sg = cx.createRadialGradient(0, 90, 4, 0, 105, 68);
      sg.addColorStop(0, "rgba(30,111,191,0.26)");
      sg.addColorStop(1, "rgba(30,111,191,0)");
      cx.beginPath(); cx.ellipse(0, 98, 62, 16, 0, 0, Math.PI * 2);
      cx.fillStyle = sg; cx.fill();

      // Pedestal
      const ps = 40, py = 48;
      const pg = cx.createLinearGradient(-ps, py, ps, py + ps);
      pg.addColorStop(0, "rgba(20,48,122,0.96)");
      pg.addColorStop(1, "rgba(7,8,15,0.96)");
      cx.beginPath();
      cx.moveTo(0, py - ps * 0.5); cx.lineTo(ps, py);
      cx.lineTo(0, py + ps * 0.5); cx.lineTo(-ps, py); cx.closePath();
      cx.fillStyle = pg; cx.fill();
      cx.strokeStyle = "rgba(30,111,191,0.72)"; cx.lineWidth = 1; cx.stroke();
      const pg2 = cx.createRadialGradient(0, py, 0, 0, py, ps * 1.3);
      pg2.addColorStop(0, `rgba(30,111,191,${0.12 + pulse * 0.08})`);
      pg2.addColorStop(1, "rgba(30,111,191,0)");
      cx.beginPath();
      cx.moveTo(0, py - ps * 0.5); cx.lineTo(ps, py);
      cx.lineTo(0, py + ps * 0.5); cx.lineTo(-ps, py); cx.closePath();
      cx.fillStyle = pg2; cx.fill();
      cx.beginPath();
      cx.moveTo(-ps, py); cx.lineTo(0, py + ps * 0.5);
      cx.lineTo(0, py + ps * 0.5 + ps * 0.72); cx.lineTo(-ps, py + ps * 0.72); cx.closePath();
      cx.fillStyle = "rgba(8,20,62,0.92)"; cx.fill();
      cx.strokeStyle = "rgba(30,111,191,0.4)"; cx.lineWidth = 0.7; cx.stroke();
      cx.beginPath();
      cx.moveTo(ps, py); cx.lineTo(0, py + ps * 0.5);
      cx.lineTo(0, py + ps * 0.5 + ps * 0.72); cx.lineTo(ps, py + ps * 0.72); cx.closePath();
      cx.fillStyle = "rgba(5,12,42,0.92)"; cx.fill();
      cx.strokeStyle = "rgba(30,111,191,0.28)"; cx.lineWidth = 0.7; cx.stroke();

      // Neck
      cx.save(); cx.translate(0, 24);
      ([{ r: 7, y: 0 }, { r: 5, y: 12 }]).forEach(n => {
        cx.beginPath(); cx.ellipse(0, n.y, n.r, n.r, 0, 0, Math.PI * 2);
        cx.fillStyle = "rgba(14,28,78,0.96)"; cx.fill();
        cx.strokeStyle = "rgba(30,111,191,0.5)"; cx.lineWidth = 0.8; cx.stroke();
      });
      cx.beginPath(); cx.rect(-3.5, 0, 7, 12);
      cx.fillStyle = "rgba(14,28,78,0.8)"; cx.fill();
      cx.restore();

      // Head
      cx.save(); cx.translate(0, 14);
      const hw = 44, hh = 34;
      cx.save();
      cx.shadowColor = "rgba(30,111,191,0.55)"; cx.shadowBlur = 24;
      const hg = cx.createLinearGradient(-hw, -hh, hw, hh);
      hg.addColorStop(0, "rgba(24,56,135,0.99)");
      hg.addColorStop(1, "rgba(8,12,42,0.99)");
      cx.beginPath(); cx.roundRect(-hw, -hh, hw * 2, hh * 2, 9);
      cx.fillStyle = hg; cx.fill();
      cx.strokeStyle = "rgba(30,111,191,0.72)"; cx.lineWidth = 1.2; cx.stroke();
      cx.restore();

      // Eyes
      const ey = -5;
      ([-14, 14]).forEach(ex => {
        const epx = ex + eyeX * 0.72, epy = ey + eyeY * 0.72;
        const eg = cx.createRadialGradient(epx, epy, 0, ex, ey, 13);
        eg.addColorStop(0, `rgba(30,111,191,${0.72 + pulse * 0.28})`);
        eg.addColorStop(1, "rgba(30,111,191,0)");
        cx.beginPath(); cx.arc(ex, ey, 13, 0, Math.PI * 2);
        cx.fillStyle = eg; cx.fill();
        cx.beginPath(); cx.arc(epx, epy, 5.5, 0, Math.PI * 2);
        cx.fillStyle = `rgba(30,111,191,${0.88 + pulse * 0.12})`; cx.fill();
        cx.beginPath(); cx.arc(epx - 1.5, epy - 1.5, 1.8, 0, Math.PI * 2);
        cx.fillStyle = "rgba(210,235,255,0.88)"; cx.fill();
      });

      // Mouth
      const fd = Math.sqrt((smx - rx) ** 2 + (smy - (ry + bob)) ** 2);
      const smile = Math.max(0, 1 - fd / 220) * 9;
      cx.beginPath(); cx.moveTo(-11, 14);
      cx.quadraticCurveTo(0, 14 + smile, 11, 14);
      cx.strokeStyle = `rgba(30,111,191,${0.55 + pulse * 0.25})`;
      cx.lineWidth = 1.8; cx.stroke();

      // Antenna
      antP += 0.055;
      const ap = Math.sin(antP) * 0.5 + 0.5;
      const as = Math.sin(t * 1.5) * 4 + eyeX * 0.28;
      cx.beginPath(); cx.moveTo(0, -hh); cx.lineTo(as, -hh - 30);
      cx.strokeStyle = "rgba(30,111,191,0.55)"; cx.lineWidth = 1.6; cx.stroke();
      const abg = cx.createRadialGradient(as, -hh - 30, 0, as, -hh - 30, 11);
      abg.addColorStop(0, `rgba(30,111,191,${0.82 + ap * 0.18})`);
      abg.addColorStop(1, "rgba(30,111,191,0)");
      cx.beginPath(); cx.arc(as, -hh - 30, 11, 0, Math.PI * 2);
      cx.fillStyle = abg; cx.fill();
      cx.beginPath(); cx.arc(as, -hh - 30, 3.8, 0, Math.PI * 2);
      cx.fillStyle = `rgba(30,111,191,${0.86 + ap * 0.14})`; cx.fill();

      cx.restore();
      cx.restore();
    }

    function draw() {
      t += 0.014;
      smx += (mx - smx) * 0.07; smy += (my - smy) * 0.07;
      cx.clearRect(0, 0, W, H);

      // Dot grid
      cx.fillStyle = "rgba(30,111,191,0.1)";
      for (let gx = 0; gx < W; gx += 44) {
        for (let gy = 0; gy < H; gy += 44) {
          cx.beginPath(); cx.arc(gx, gy, 0.7, 0, Math.PI * 2); cx.fill();
        }
      }

      // Floor glow
      const fl = cx.createRadialGradient(W * 0.52, H * 0.78, 0, W * 0.52, H * 0.78, 180);
      fl.addColorStop(0, "rgba(30,111,191,0.09)");
      fl.addColorStop(1, "rgba(30,111,191,0)");
      cx.beginPath(); cx.ellipse(W * 0.52, H * 0.78, 180, 52, 0, 0, Math.PI * 2);
      cx.fillStyle = fl; cx.fill();

      drawGrid();
      drawRobot();
      animId = requestAnimationFrame(draw);
    }

    const parent = cv.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

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
