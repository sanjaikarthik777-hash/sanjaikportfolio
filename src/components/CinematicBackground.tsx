"use client";

import { useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  color: string;
  depth: number; // 0-1, parallax depth
}

interface LightTrail {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  alpha: number;
  alphaDir: number;
  width: number;
  color: string;
  progress: number; // 0-1 trail head position
}

interface GradientBlob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

// ─── Utility helpers ─────────────────────────────────────────────────────────
const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const COLORS = {
  neonRed: "255, 0, 0",
  darkRed: "139, 0, 0",
  crimson: "180, 20, 20",
  white: "255, 255, 255",
  charcoal: "17, 17, 17",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    initCanvas();

    // ── Particles ──────────────────────────────────────────────────────────
    const PARTICLE_COUNT = 120;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const depth = rand(0.1, 1);
      const colorKey = Math.random() < 0.7 ? "neonRed" : Math.random() < 0.5 ? "darkRed" : "white";
      return {
        x: rand(0, canvas.width),
        y: rand(0, canvas.height),
        vx: rand(-0.12, 0.12) * depth,
        vy: rand(-0.15, -0.05) * depth,
        radius: rand(0.5, 2.5) * depth,
        alpha: rand(0.1, 0.7),
        alphaSpeed: rand(0.002, 0.006),
        color: COLORS[colorKey as keyof typeof COLORS],
        depth,
      };
    });

    // ── Light trails ───────────────────────────────────────────────────────
    const TRAIL_COUNT = 18;
    const trails: LightTrail[] = Array.from({ length: TRAIL_COUNT }, () => ({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      length: rand(60, 240),
      angle: rand(-0.3, 0.3) + Math.PI * rand(0, 2),
      speed: rand(0.15, 0.45),
      alpha: rand(0.05, 0.25),
      alphaDir: 1,
      width: rand(0.5, 2),
      color: Math.random() < 0.8 ? COLORS.neonRed : COLORS.darkRed,
      progress: rand(0, 1),
    }));

    // ── Gradient blobs ─────────────────────────────────────────────────────
    const BLOB_COUNT = 6;
    const blobs: GradientBlob[] = Array.from({ length: BLOB_COUNT }, () => ({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      vx: rand(-0.08, 0.08),
      vy: rand(-0.08, 0.08),
      radius: rand(150, 380),
      color: Math.random() < 0.6 ? COLORS.neonRed : COLORS.darkRed,
      alpha: rand(0.02, 0.07),
    }));

    // ── Grid settings ──────────────────────────────────────────────────────
    const GRID_SIZE = 60;

    // ── Draw functions ─────────────────────────────────────────────────────

    function drawGrid(t: number) {
      const opacity = 0.025 + 0.012 * Math.sin(t * 0.0005);
      ctx!.save();
      ctx!.strokeStyle = `rgba(255,255,255,${opacity})`;
      ctx!.lineWidth = 0.4;

      for (let x = 0; x < canvas!.width; x += GRID_SIZE) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, canvas!.height);
        ctx!.stroke();
      }
      for (let y = 0; y < canvas!.height; y += GRID_SIZE) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(canvas!.width, y);
        ctx!.stroke();
      }
      ctx!.restore();
    }

    function drawBlobs(t: number) {
      blobs.forEach((b) => {
        // Animate position
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.radius) b.x = canvas!.width + b.radius;
        if (b.x > canvas!.width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = canvas!.height + b.radius;
        if (b.y > canvas!.height + b.radius) b.y = -b.radius;

        const pulse = b.alpha + 0.015 * Math.sin(t * 0.0004 + b.x);
        const grad = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grad.addColorStop(0, `rgba(${b.color},${pulse})`);
        grad.addColorStop(0.5, `rgba(${b.color},${pulse * 0.4})`);
        grad.addColorStop(1, `rgba(${b.color},0)`);

        ctx!.save();
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      });
    }

    function drawLiquidWaves(t: number) {
      const W = canvas!.width;
      const H = canvas!.height;

      // Draw 3 layered liquid waves
      for (let layer = 0; layer < 3; layer++) {
        ctx!.save();
        const speed = (layer + 1) * 0.00018;
        const amplitude = 60 + layer * 30;
        const yBase = H * (0.3 + layer * 0.2);
        const alpha = 0.04 - layer * 0.01;
        const colorR = layer === 0 ? COLORS.neonRed : layer === 1 ? COLORS.darkRed : COLORS.crimson;

        ctx!.beginPath();
        ctx!.moveTo(0, H);
        for (let x = 0; x <= W; x += 4) {
          const y =
            yBase +
            Math.sin(x * 0.005 + t * speed) * amplitude +
            Math.sin(x * 0.009 + t * speed * 1.3 + layer) * (amplitude * 0.4);
          ctx!.lineTo(x, y);
        }
        ctx!.lineTo(W, H);
        ctx!.closePath();

        const waveGrad = ctx!.createLinearGradient(0, yBase - amplitude, 0, yBase + amplitude);
        waveGrad.addColorStop(0, `rgba(${colorR},${alpha})`);
        waveGrad.addColorStop(0.5, `rgba(${colorR},${alpha * 0.5})`);
        waveGrad.addColorStop(1, `rgba(${colorR},0)`);
        ctx!.fillStyle = waveGrad;
        ctx!.fill();

        // Glowing wave crest line
        ctx!.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const y =
            yBase +
            Math.sin(x * 0.005 + t * speed) * amplitude +
            Math.sin(x * 0.009 + t * speed * 1.3 + layer) * (amplitude * 0.4);
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.strokeStyle = `rgba(${colorR},${alpha * 3})`;
        ctx!.lineWidth = 1;
        ctx!.shadowBlur = 12;
        ctx!.shadowColor = `rgba(255,0,0,0.3)`;
        ctx!.stroke();
        ctx!.restore();
      }
    }

    function drawTrails() {
      trails.forEach((trail) => {
        trail.progress += trail.speed * 0.003;
        if (trail.progress > 1) {
          // Respawn at new random position
          trail.x = rand(0, canvas!.width);
          trail.y = rand(0, canvas!.height);
          trail.angle = rand(-0.3, 0.3) + Math.PI * rand(0, 2);
          trail.length = rand(60, 240);
          trail.progress = 0;
          trail.alpha = rand(0.05, 0.25);
        }

        // Fade in/out
        trail.alpha += trail.alphaDir * 0.001;
        if (trail.alpha > 0.3 || trail.alpha < 0.01) trail.alphaDir *= -1;

        const headX = trail.x + Math.cos(trail.angle) * trail.length * trail.progress;
        const headY = trail.y + Math.sin(trail.angle) * trail.length * trail.progress;
        const tailX = trail.x + Math.cos(trail.angle) * trail.length * Math.max(0, trail.progress - 0.5);
        const tailY = trail.y + Math.sin(trail.angle) * trail.length * Math.max(0, trail.progress - 0.5);

        const grad = ctx!.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, `rgba(${trail.color},0)`);
        grad.addColorStop(0.5, `rgba(${trail.color},${trail.alpha})`);
        grad.addColorStop(1, `rgba(${trail.color},0)`);

        ctx!.save();
        ctx!.beginPath();
        ctx!.moveTo(tailX, tailY);
        ctx!.lineTo(headX, headY);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = trail.width;
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = `rgba(255,0,0,0.5)`;
        ctx!.stroke();
        ctx!.restore();
      });
    }

    function drawParticles(t: number) {
      particles.forEach((p) => {
        // Floating movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.y < -10) { p.y = canvas!.height + 10; p.x = rand(0, canvas!.width); }
        if (p.y > canvas!.height + 10) { p.y = -10; }
        if (p.x < -10) p.x = canvas!.width + 10;
        if (p.x > canvas!.width + 10) p.x = -10;

        // Pulsing alpha
        p.alpha += p.alphaSpeed * Math.sin(t * 0.001 + p.x);
        if (p.alpha > 0.8) p.alphaSpeed = -Math.abs(p.alphaSpeed);
        if (p.alpha < 0.05) p.alphaSpeed = Math.abs(p.alphaSpeed);

        // Depth-of-field blur simulation (larger = in focus)
        const blur = (1 - p.depth) * 3;

        ctx!.save();
        ctx!.filter = blur > 0.5 ? `blur(${blur.toFixed(1)}px)` : "none";

        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        grd.addColorStop(0, `rgba(${p.color},${p.alpha})`);
        grd.addColorStop(1, `rgba(${p.color},0)`);

        ctx!.fillStyle = grd;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      });
    }

    function drawMouseGlow() {
      const mx = mouse.current.x;
      const my = mouse.current.y;
      if (mx < 0 || my < 0) return;

      const glowRadius = 220;
      const grad = ctx!.createRadialGradient(mx, my, 0, mx, my, glowRadius);
      grad.addColorStop(0, `rgba(${COLORS.neonRed},0.10)`);
      grad.addColorStop(0.3, `rgba(${COLORS.neonRed},0.05)`);
      grad.addColorStop(0.7, `rgba(${COLORS.darkRed},0.02)`);
      grad.addColorStop(1, `rgba(${COLORS.darkRed},0)`);

      ctx!.save();
      ctx!.fillStyle = grad;
      ctx!.beginPath();
      ctx!.arc(mx, my, glowRadius, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    // ── Main animation loop ────────────────────────────────────────────────
    function animate(timestamp: number) {
      timeRef.current = timestamp;
      const W = canvas!.width;
      const H = canvas!.height;

      // Clear with a dark base
      ctx!.clearRect(0, 0, W, H);

      // Base gradient background
      const bgGrad = ctx!.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.8);
      bgGrad.addColorStop(0, "#111111");
      bgGrad.addColorStop(0.5, "#0a0a0a");
      bgGrad.addColorStop(1, "#050505");
      ctx!.fillStyle = bgGrad;
      ctx!.fillRect(0, 0, W, H);

      // Layer order (back → front)
      drawGrid(timestamp);
      drawBlobs(timestamp);
      drawLiquidWaves(timestamp);
      drawTrails();
      drawParticles(timestamp);
      drawMouseGlow();

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animFrameRef.current = requestAnimationFrame(animate);

    // ── Event listeners ────────────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [initCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
