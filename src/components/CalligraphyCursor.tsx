import React, { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { Feather } from "lucide-react";

const CURSOR_STORAGE_KEY = "phbj-cursor-brush";

export function getStoredCursorPreference(): boolean {
  try {
    const stored = localStorage.getItem(CURSOR_STORAGE_KEY);
    if (stored !== null) return stored === "true";
  } catch {
    /* localStorage unavailable */
  }
  return true; // Enabled by default for fine pointer devices
}

export function setStoredCursorPreference(enabled: boolean) {
  try {
    localStorage.setItem(CURSOR_STORAGE_KEY, String(enabled));
  } catch {
    /* noop */
  }
}

/**
 * Smart detection hook for fine pointer devices (mouse/trackpad/stylus).
 * Automatically detects whether fine mouse input is supported vs pure touch-only screens.
 */
export function useFinePointerDevice(): boolean {
  const [isFinePointer, setIsFinePointer] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return (
      window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(hover: hover)").matches
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: fine)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    }

    // Dynamic detection for hybrid touch/mouse devices (e.g. iPads/laptops with touch)
    const handlePointerType = (e: PointerEvent) => {
      if (e.pointerType === "mouse" || e.pointerType === "pen") {
        setIsFinePointer(true);
      }
    };

    window.addEventListener("pointerdown", handlePointerType, { passive: true });
    window.addEventListener("pointermove", handlePointerType, { passive: true });

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      }
      window.removeEventListener("pointerdown", handlePointerType);
      window.removeEventListener("pointermove", handlePointerType);
    };
  }, []);

  return isFinePointer;
}

// Unified Custom Hook for Calligraphy Cursor State Sync
export function useCalligraphyCursorState() {
  const [enabled, setEnabled] = useState<boolean>(getStoredCursorPreference);

  useEffect(() => {
    const syncState = () => {
      setEnabled(getStoredCursorPreference());
    };
    window.addEventListener("phbj-cursor-change", syncState);
    window.addEventListener("storage", syncState);
    return () => {
      window.removeEventListener("phbj-cursor-change", syncState);
      window.removeEventListener("storage", syncState);
    };
  }, []);

  const toggle = useCallback(() => {
    const next = !enabled;
    setStoredCursorPreference(next);
    setEnabled(next);
    window.dispatchEvent(new CustomEvent("phbj-cursor-change"));
  }, [enabled]);

  return { enabled, toggle };
}

// 墨分五色 (Five Tones of Traditional Chinese Calligraphy Ink)
export type InkTone = "jiao" | "nong" | "zhong" | "dan" | "qing" | "vermilion";

interface StrokePoint {
  x: number;
  y: number;
  width: number;
  alpha: number;
  maxAlpha: number;
  tone: InkTone;
  life: number;
  maxLife: number;
  jiaoColor: string;
  nongColor: string;
  danColor: string;
  qingColor: string;
}

interface InkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  tone: InkTone;
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
  washColor: string;
}

export function CalligraphyCursorOverlay() {
  const { enabled } = useCalligraphyCursorState();
  const isFinePointer = useFinePointerDevice();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strokePointsRef = useRef<StrokePoint[]>([]);
  const particlesRef = useRef<InkParticle[]>([]);
  const ripplesRef = useRef<InkRipple[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const activeInputRef = useRef<"mouse" | "touch">("mouse");

  const isCursorActive = enabled && isFinePointer;
  const activeRef = useRef<boolean>(isCursorActive);

  // Keep active state ref updated for event handlers & DOM classes
  useEffect(() => {
    activeRef.current = isCursorActive;
    if (isCursorActive) {
      document.documentElement.classList.add("custom-brush-enabled");
    } else {
      document.documentElement.classList.remove("custom-brush-enabled");
      strokePointsRef.current = [];
      particlesRef.current = [];
      ripplesRef.current = [];
      lastPosRef.current = null;
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  }, [isCursorActive]);

  // Main Canvas Ink System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Retina / High-DPI canvas resolution scaling
    const handleResize = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, { passive: true });

    // Dynamic pointer type tracker - automatically restores "mouse" input mode on pointermove
    const handlePointerType = (e: PointerEvent) => {
      if (e.pointerType === "mouse" || e.pointerType === "pen") {
        activeInputRef.current = "mouse";
      } else if (e.pointerType === "touch") {
        activeInputRef.current = "touch";
      }
    };
    window.addEventListener("pointerdown", handlePointerType, { passive: true });
    window.addEventListener("pointermove", handlePointerType, { passive: true });

    // Traditional Chinese Ink Tone Palette Generator (墨分五色: 焦, 浓, 重, 淡, 清)
    const getInkToneColors = (tone: InkTone) => {
      const isPlumTheme = document.documentElement.getAttribute("data-theme") === "plum";

      if (isPlumTheme) {
        switch (tone) {
          case "jiao":
            return { core: "#0c1809", wash: "rgba(12, 24, 9, 0.4)", alpha: 0.95 };
          case "nong":
            return { core: "#162210", wash: "rgba(22, 34, 16, 0.35)", alpha: 0.8 };
          case "zhong":
            return { core: "#283620", wash: "rgba(40, 54, 32, 0.28)", alpha: 0.6 };
          case "dan":
            return { core: "#485a3c", wash: "rgba(72, 90, 60, 0.2)", alpha: 0.38 };
          case "qing":
            return { core: "#6a7e5c", wash: "rgba(106, 126, 92, 0.12)", alpha: 0.18 };
          case "vermilion":
            return { core: "#8b2500", wash: "rgba(139, 37, 0, 0.35)", alpha: 0.88 };
        }
      } else {
        switch (tone) {
          case "jiao":
            return { core: "#080605", wash: "rgba(8, 6, 5, 0.4)", alpha: 0.95 };
          case "nong":
            return { core: "#140d0b", wash: "rgba(20, 13, 11, 0.35)", alpha: 0.8 };
          case "zhong":
            return { core: "#281e19", wash: "rgba(40, 30, 25, 0.28)", alpha: 0.6 };
          case "dan":
            return { core: "#473830", wash: "rgba(71, 56, 48, 0.2)", alpha: 0.38 };
          case "qing":
            return { core: "#6e594d", wash: "rgba(110, 89, 77, 0.12)", alpha: 0.18 };
          case "vermilion":
            return { core: "#8b2500", wash: "rgba(139, 37, 0, 0.35)", alpha: 0.88 };
        }
      }
    };

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      if (!activeRef.current) {
        animFrameRef.current = null;
        return;
      }

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
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.washColor;
        ctx.globalAlpha = r.alpha * 0.75;
        ctx.lineWidth = 3.0;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.48, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.globalAlpha = r.alpha * 0.65;
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
        // Pass A: 清墨 / 淡墨 Outer Water Wash Bleed Halo (清墨水晕底)
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
          ctx.strokeStyle = p1.qingColor;
          ctx.lineWidth = Math.max(p1.width + 8, 10);
          ctx.globalAlpha = p1.alpha * 0.4;
          ctx.stroke();
        }
        ctx.restore();

        // Pass B: 重墨 / 淡墨 Mid-Stroke Water Wash Body (淡墨润色层)
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
          ctx.strokeStyle = p1.danColor;
          ctx.lineWidth = Math.max(p1.width + 3, 5);
          ctx.globalAlpha = p1.alpha * 0.65;
          ctx.stroke();
        }
        ctx.restore();

        // Pass C: 焦墨 / 浓墨 Dense Black Ink Core Ribbon (焦墨主笔锋)
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
          ctx.strokeStyle = p1.jiaoColor;
          ctx.lineWidth = p1.width;
          ctx.globalAlpha = p1.alpha;
          ctx.stroke();
        }
        ctx.restore();
      }

      // 3. Render Ink Splash & Diffusion Particles (墨滴水墨晕染)
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.life += 1;
        const progress = p.life / p.maxLife;
        p.alpha = (1 - progress) * 0.85;
        p.radius += p.expandRate;

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

        if (p.radius > 3) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.6, 0, Math.PI * 2);
          ctx.fillStyle = p.washColor;
          ctx.globalAlpha = p.alpha * 0.4;
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
      if (!animFrameRef.current && activeRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      // Suppress ink particle generation only on active touch dragging
      if (!activeRef.current || activeInputRef.current === "touch") return;

      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();

      if (lastPosRef.current) {
        const dx = x - lastPosRef.current.x;
        const dy = y - lastPosRef.current.y;
        const dt = Math.max(1, now - lastPosRef.current.time);
        const dist = Math.hypot(dx, dy);

        if (dist > 1.2 && dt < 500) {
          const speed = dist / dt;
          const strokeWidth = Math.max(3.5, Math.min(16, 14 - speed * 3.8));

          let tone: InkTone = "nong";
          const rand = Math.random();
          if (rand > 0.92) tone = "vermilion";
          else if (rand > 0.70) tone = "jiao";
          else if (rand > 0.40) tone = "nong";
          else if (rand > 0.15) tone = "zhong";
          else tone = "dan";

          const jiaoColors = getInkToneColors("jiao");
          const nongColors = getInkToneColors(tone);
          const danColors = getInkToneColors("dan");
          const qingColors = getInkToneColors("qing");

          // Bounded point queue limit to prevent GC overhead
          if (strokePointsRef.current.length > 50) {
            strokePointsRef.current.shift();
          }

          strokePointsRef.current.push({
            x,
            y,
            width: strokeWidth,
            alpha: nongColors.alpha,
            maxAlpha: nongColors.alpha,
            tone,
            life: 0,
            maxLife: 45,
            jiaoColor: jiaoColors.core,
            nongColor: nongColors.core,
            danColor: danColors.core,
            qingColor: qingColors.wash,
          });

          const numParticles = Math.min(3, Math.floor(dist / 4.0));
          for (let i = 0; i < numParticles; i++) {
            const ratio = i / Math.max(1, numParticles);
            const px = lastPosRef.current.x + dx * ratio;
            const py = lastPosRef.current.y + dy * ratio;

            const pRand = Math.random();
            let pTone: InkTone = "nong";
            if (pRand > 0.90) pTone = "vermilion";
            else if (pRand > 0.65) pTone = "jiao";
            else if (pRand > 0.35) pTone = "zhong";
            else if (pRand > 0.15) pTone = "dan";
            else pTone = "qing";

            const pColors = getInkToneColors(pTone);

            if (particlesRef.current.length > 35) {
              particlesRef.current.shift();
            }

            particlesRef.current.push({
              x: px + (Math.random() - 0.5) * 5,
              y: py + (Math.random() - 0.5) * 5,
              vx: (Math.random() - 0.5) * (speed * 0.4 + 0.4),
              vy: (Math.random() - 0.5) * (speed * 0.4 + 0.4),
              radius: Math.random() * 4.0 + 1.8,
              alpha: pColors.alpha,
              tone: pTone,
              color: pColors.core,
              washColor: pColors.wash,
              life: 0,
              maxLife: Math.floor(Math.random() * 25) + 20,
              expandRate: 0.22,
            });
          }
        }
      }

      lastPosRef.current = { x, y, time: now };
      startAnimIfNeeded();
    };

    const onMouseDown = (e: MouseEvent) => {
      if (!activeRef.current || activeInputRef.current === "touch") return;

      const jiaoColors = getInkToneColors("jiao");
      const qingColors = getInkToneColors("qing");

      if (ripplesRef.current.length > 10) {
        ripplesRef.current.shift();
      }

      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: 32,
        alpha: 0.88,
        color: jiaoColors.core,
        washColor: qingColors.wash,
      });

      const tones: InkTone[] = ["jiao", "nong", "zhong", "dan", "vermilion"];
      for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 3.0 + 1.2;
        const t = tones[i % tones.length];
        const tColors = getInkToneColors(t);

        if (particlesRef.current.length > 35) {
          particlesRef.current.shift();
        }

        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 4.8 + 2.0,
          alpha: tColors.alpha,
          tone: t,
          color: tColors.core,
          washColor: tColors.wash,
          life: 0,
          maxLife: 35,
          expandRate: 0.26,
        });
      }

      startAnimIfNeeded();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
      window.removeEventListener("pointerdown", handlePointerType);
      window.removeEventListener("pointermove", handlePointerType);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  if (typeof document === "undefined") return null;

  // Render via createPortal to document.body at z-[999999] so canvas sits above all reader panels & modals
  return createPortal(
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[999999] opacity-95 ${isCursorActive ? "" : "hidden"}`}
      aria-hidden="true"
    />,
    document.body
  );
}

export function CalligraphyCursorToggle({
  lang,
  className = "",
}: {
  lang: "en" | "zh";
  className?: string;
}) {
  const { enabled, toggle } = useCalligraphyCursorState();
  const isFinePointer = useFinePointerDevice();

  // On touch-only devices without fine mouse pointers (e.g. mobile phones), hide cursor toggle button to keep UI clean
  if (!isFinePointer) {
    return null;
  }

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
