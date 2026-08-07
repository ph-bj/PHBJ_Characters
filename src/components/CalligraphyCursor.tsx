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

interface InkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
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
  const particlesRef = useRef<InkParticle[]>([]);
  const ripplesRef = useRef<InkRipple[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

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

    // Check touch screen / reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

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

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render Ink Ripples (from clicks)
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.12 + 0.5;
        r.alpha *= 0.91;

        if (r.alpha < 0.01) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = r.alpha;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Inner ink dot bloom
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.globalAlpha = r.alpha * 0.5;
        ctx.fill();
        ctx.restore();
      }

      // Render Ink Particles (from brush movement)
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;
        const progress = p.life / p.maxLife;
        p.alpha = (1 - progress) * 0.45;
        p.radius += 0.15; // Soft ink diffusion expand

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
        ctx.restore();
      }

      if (particles.length > 0 || ripples.length > 0) {
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

      if (lastPosRef.current) {
        const dx = x - lastPosRef.current.x;
        const dy = y - lastPosRef.current.y;
        const dist = Math.hypot(dx, dy);

        // Spawn ink trail particles when mouse is moving
        if (dist > 3) {
          const numDots = Math.min(3, Math.floor(dist / 6));
          for (let i = 0; i < numDots; i++) {
            const ratio = i / numDots;
            const px = lastPosRef.current.x + dx * ratio;
            const py = lastPosRef.current.y + dy * ratio;

            // Random subtle ink scatter
            particlesRef.current.push({
              x: px + (Math.random() - 0.5) * 2,
              y: py + (Math.random() - 0.5) * 2,
              vx: (Math.random() - 0.5) * 0.3,
              vy: (Math.random() - 0.5) * 0.3,
              radius: Math.random() * 2 + 1.2,
              alpha: 0.5,
              color: Math.random() > 0.85 ? "#8b2500" : "#1a1311", // occasional seal vermilion accent
              life: 0,
              maxLife: Math.floor(Math.random() * 20) + 15,
            });
          }
        }
      }

      lastPosRef.current = { x, y };
      startAnimIfNeeded();
    };

    const onMouseDown = (e: MouseEvent) => {
      // Create rich ink bloom press effect on click
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 3,
        maxRadius: 18,
        alpha: 0.65,
        color: "#1a1311",
      });

      // Extra ink splash dots
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.5 + 1.5,
          alpha: 0.6,
          color: i === 0 ? "#8b2500" : "#140d0b",
          life: 0,
          maxLife: 25,
        });
      }

      startAnimIfNeeded();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
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
      className="fixed inset-0 pointer-events-none z-[99999] opacity-90"
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
