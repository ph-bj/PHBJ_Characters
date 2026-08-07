import React, { useEffect, useState, useCallback, useRef } from "react";
import { Feather } from "lucide-react";

const CURSOR_STORAGE_KEY = "phbj-cursor-brush";

export function getStoredCursorPreference(): boolean {
  try {
    const stored = localStorage.getItem(CURSOR_STORAGE_KEY);
    if (stored !== null) return stored === "true";
  } catch {
    /* localStorage unavailable */
  }
  return true; // Enabled by default for rich calligraphy experience
}

export function setStoredCursorPreference(enabled: boolean) {
  try {
    localStorage.setItem(CURSOR_STORAGE_KEY, String(enabled));
  } catch {
    /* noop */
  }
}

interface StrokePoint {
  x: number;
  y: number;
  width: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
  color: string;
  washColor: string;
}

interface InkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  washColor: string;
  life: number;
  maxLife: number;
  expandRate: number;
}

interface InkRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export function CalligraphyCursorOverlay() {
  const [enabled, setEnabled] = useState<boolean>(getStoredCursorPreference);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strokePointsRef = useRef<StrokePoint[]>([]);
  const particlesRef = useRef<InkParticle[]>([]);
  const ripplesRef = useRef<InkRipple[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Sync preference state changes across components & windows
  useEffect(() => {
    const handleStorage = () => {
      setEnabled(getStoredCursorPreference());
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener("phbj-cursor-change", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("phbj-cursor-change", handleStorage);
    };
  }, []);

  // Update root element class when enabled status changes
  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("custom-brush-enabled");
    } else {
      document.documentElement.classList.remove("custom-brush-enabled");
    }
  }, [enabled]);

  // Canvas Ink Animation Loop
  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, { passive: true });

    // Detect if dark theme (plum) is active to choose high-contrast ink palette
    const getInkPalette = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "plum";
      if (isDark) {
        // Dark Plum Mode: Luminous Gold Calligraphy Ink & Bright Vermilion
        return {
          primaryInk: "#e2c889",      // Gold Ink (金粉墨)
          vermilionInk: "#ff5722",    // Radiant Seal Vermilion (朱砂)
          washColor: "rgba(226, 200, 137, 0.4)",
          vermilionWash: "rgba(255, 87, 34, 0.4)",
        };
      } else {
        // Light Parchment Mode: Deep Pine-Soot Black Ink & Seal Vermilion
        return {
          primaryInk: "#140d0b",      // Pine-Soot Black Ink (松烟墨)
          vermilionInk: "#8b2500",    // Seal Red (朱砂)
          washColor: "rgba(20, 13, 11, 0.35)",
          vermilionWash: "rgba(139, 37, 0, 0.35)",
        };
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render Ink Ripples & Seals (from mouse clicks)
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.15 + 0.6;
        r.alpha *= 0.89;

        if (r.alpha < 0.01) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        // Outer wash ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = r.alpha * 0.75;
        ctx.lineWidth = 2.8;
        ctx.stroke();

        // Inner solid ink bloom
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.globalAlpha = r.alpha * 0.6;
        ctx.fill();
        ctx.restore();
      }

      // 2. Render Continuous Calligraphy Ink Stroke Ribbon (水墨飞白笔触)
      const points = strokePointsRef.current;
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.life += 1;
        const progress = p.life / p.maxLife;
        p.alpha = (1 - progress) * p.maxAlpha;

        if (p.life >= p.maxLife || p.alpha <= 0.01) {
          points.splice(i, 1);
        }
      }

      if (points.length >= 2) {
        // Pass A: Soft Water-Wash Outer Halo (水墨晕染底)
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
          ctx.strokeStyle = p1.washColor;
          ctx.lineWidth = Math.max(p1.width + 6, 8);
          ctx.globalAlpha = p1.alpha * 0.5;
          ctx.stroke();
        }
        ctx.restore();

        // Pass B: Dense Ink Core Ribbon (浓墨主笔道)
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
          ctx.strokeStyle = p1.color;
          ctx.lineWidth = p1.width;
          ctx.globalAlpha = p1.alpha;
          ctx.stroke();
        }
        ctx.restore();
      }

      // 3. Render Ink Splash & Diffusion Particles (墨滴 & 飞溅)
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.life += 1;
        const progress = p.life / p.maxLife;
        p.alpha = (1 - progress) * 0.8;
        p.radius += p.expandRate; // Bleeding wash expand

        if (p.life >= p.maxLife || p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Outer water wash blur ring on larger particles
        if (p.radius > 3.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = p.washColor;
          ctx.globalAlpha = p.alpha * 0.45;
          ctx.fill();
        }
        ctx.restore();
      }

      if (points.length > 0 || particles.length > 0 || ripples.length > 0) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        animFrameRef.current = null;
      }
    };

    const startAnimIfNeeded = () => {
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();
      const palette = getInkPalette();

      if (lastPosRef.current) {
        const dx = x - lastPosRef.current.x;
        const dy = y - lastPosRef.current.y;
        const dt = Math.max(1, now - lastPosRef.current.time);
        const dist = Math.hypot(dx, dy);

        if (dist > 1.2) {
          const speed = dist / dt; // Mouse move velocity

          // Dynamic brush stroke width: slow = rich juicy 10px-15px stroke; fast = tapered 3px-6px stroke
          const strokeWidth = Math.max(3.5, Math.min(15, 13 - speed * 3.5));
          const isVermilion = Math.random() > 0.92;
          const strokeColor = isVermilion ? palette.vermilionInk : palette.primaryInk;
          const washColor = isVermilion ? palette.vermilionWash : palette.washColor;

          // Add continuous stroke point
          strokePointsRef.current.push({
            x,
            y,
            width: strokeWidth,
            alpha: 0.9,
            maxAlpha: 0.9,
            life: 0,
            maxLife: 45, // Visible for ~0.75s
            color: strokeColor,
            washColor,
          });

          // Spawn ink droplets & splatters along movement path
          const numParticles = Math.min(4, Math.floor(dist / 3.5));
          for (let i = 0; i < numParticles; i++) {
            const ratio = i / numParticles;
            const px = lastPosRef.current.x + dx * ratio;
            const py = lastPosRef.current.y + dy * ratio;

            particlesRef.current.push({
              x: px + (Math.random() - 0.5) * 4,
              y: py + (Math.random() - 0.5) * 4,
              vx: (Math.random() - 0.5) * (speed * 0.4 + 0.4),
              vy: (Math.random() - 0.5) * (speed * 0.4 + 0.4),
              radius: Math.random() * 3.8 + 1.8,
              alpha: 0.8,
              color: strokeColor,
              washColor,
              life: 0,
              maxLife: Math.floor(Math.random() * 25) + 20,
              expandRate: 0.2,
            });
          }
        }
      }

      lastPosRef.current = { x, y, time: now };
      startAnimIfNeeded();
    };

    const onMouseDown = (e: MouseEvent) => {
      const palette = getInkPalette();

      // Bold ink stamp bloom on click
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: 30,
        alpha: 0.85,
        color: palette.primaryInk,
      });

      // 10 radial ink splash droplets
      for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 2.8 + 1.2;
        const isVermilion = i % 4 === 0;

        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 4.5 + 2,
          alpha: 0.9,
          color: isVermilion ? palette.vermilionInk : palette.primaryInk,
          washColor: isVermilion ? palette.vermilionWash : palette.washColor,
          life: 0,
          maxLife: 32,
          expandRate: 0.25,
        });
      }

      startAnimIfNeeded();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999] opacity-95"
      aria-hidden="true"
    />
  );
}

export function CalligraphyCursorToggle({
  lang,
  className = "",
}: {
  lang: "en" | "zh";
  className?: string;
}) {
  const [enabled, setEnabled] = useState<boolean>(getStoredCursorPreference);

  const toggle = useCallback(() => {
    const next = !enabled;
    setEnabled(next);
    setStoredCursorPreference(next);
    window.dispatchEvent(new CustomEvent("phbj-cursor-change"));
  }, [enabled]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={`h-[32px] px-2 flex items-center gap-1.5 text-xs font-bold tracking-wider rounded-sm border border-[var(--paper-border)] transition-all cursor-pointer select-none ${
        enabled
          ? "bg-[var(--accent)] text-[var(--paper-bg)] shadow-sm"
          : "bg-black/5 text-[var(--ink-dim-text)] hover:bg-black/10"
      } ${className}`}
      title={
        lang === "zh"
          ? enabled
            ? "已开启毛笔光标 (点击切换为标准光标)"
            : "已开启标准光标 (点击切换为毛笔光标)"
          : enabled
          ? "Calligraphy Brush Cursor Active"
          : "Standard Mouse Cursor Active"
      }
      aria-label={lang === "zh" ? "毛笔光标" : "Calligraphy Cursor"}
    >
      <Feather className={`w-3.5 h-3.5 transition-transform ${enabled ? "rotate-[-20deg]" : ""}`} />
      <span className="hidden sm:inline">
        {lang === "zh" ? (enabled ? "毛笔" : "光标") : enabled ? "Brush" : "Cursor"}
      </span>
    </button>
  );
}
