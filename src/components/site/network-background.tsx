import { useEffect, useRef } from "react";

type NetworkNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  base: number;
  pulse: number;
  pulseSpeed: number;
  highlight: boolean;
};

type Particle = {
  from: number;
  to: number;
  t: number;
  speed: number;
};

const LINK_DISTANCE = 150;
const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE;
const LINE_RGB = "180, 180, 180";
const LINE_MAX_ALPHA = 0.12;
const NODE_RGB = "245, 245, 245";
const HIGHLIGHT_RGB = "100, 116, 139";

function nodeCountFor(width: number): number {
  if (width < 640) return 26;
  if (width < 1024) return 42;
  return 58;
}

function particleCountFor(width: number): number {
  if (width < 640) return 6;
  return 12;
}

/**
 * Lightweight animated node-network background rendered on a transparent
 * canvas. Purely decorative: it never handles pointer events and pauses when
 * the tab is hidden or the hero scrolls out of view.
 */
export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx = context;
    const surface: HTMLCanvasElement = canvas;

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: NetworkNode[] = [];
    let particles: Particle[] = [];
    let running = false;
    let rafId = 0;
    let last = 0;

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    function makeParticle(): Particle {
      const from = Math.floor(Math.random() * nodes.length);
      let to = from;
      const source = nodes[from];
      if (source) {
        let best = -1;
        let bestDist = LINK_DISTANCE_SQ;
        for (let i = 0; i < nodes.length; i++) {
          if (i === from) continue;
          const candidate = nodes[i];
          if (!candidate) continue;
          const dx = source.x - candidate.x;
          const dy = source.y - candidate.y;
          const dist = dx * dx + dy * dy;
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        }
        if (best >= 0) to = best;
      }
      return { from, to, t: Math.random(), speed: rand(0.0035, 0.007) };
    }

    function buildNodes() {
      const count = nodeCountFor(width);
      const list: NetworkNode[] = [];
      for (let i = 0; i < count; i++) {
        list.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: rand(-0.09, 0.09),
          vy: rand(-0.09, 0.09),
          r: rand(1, 2),
          base: rand(0.32, 0.85),
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: rand(0.0005, 0.0014),
          highlight: Math.random() < 0.08,
        });
      }
      nodes = list;
      particles = [];
      if (nodes.length > 1) {
        const count2 = particleCountFor(width);
        for (let i = 0; i < count2; i++) particles.push(makeParticle());
      }
    }

    function draw(dtMs: number) {
      const step = Math.min(dtMs, 50) / 16.6667;
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx * step;
        n.y += n.vy * step;
        if (n.x < n.r) {
          n.x = n.r;
          n.vx = Math.abs(n.vx);
        } else if (n.x > width - n.r) {
          n.x = width - n.r;
          n.vx = -Math.abs(n.vx);
        }
        if (n.y < n.r) {
          n.y = n.r;
          n.vy = Math.abs(n.vy);
        } else if (n.y > height - n.r) {
          n.y = height - n.r;
          n.vy = -Math.abs(n.vy);
        }
        n.pulse += n.pulseSpeed * dtMs;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!a) continue;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          if (!b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > LINK_DISTANCE_SQ) continue;
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / LINK_DISTANCE) * LINE_MAX_ALPHA;
          ctx.strokeStyle = `rgba(${LINE_RGB}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (!reduceMotion) {
        for (const p of particles) {
          const a = nodes[p.from];
          const b = nodes[p.to];
          if (!a || !b) {
            Object.assign(p, makeParticle());
            continue;
          }
          p.t += p.speed * step;
          if (p.t >= 1) {
            Object.assign(p, makeParticle());
            continue;
          }
          const px = a.x + (b.x - a.x) * p.t;
          const py = a.y + (b.y - a.y) * p.t;
          ctx.fillStyle = `rgba(${NODE_RGB}, 0.9)`;
          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (const n of nodes) {
        const alpha = Math.max(
          0,
          Math.min(1, n.base + Math.sin(n.pulse) * 0.24),
        );
        if (n.highlight) {
          ctx.fillStyle = `rgba(${HIGHLIGHT_RGB}, ${alpha * 0.16})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 3.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgba(${HIGHLIGHT_RGB}, ${Math.min(1, alpha + 0.12)})`;
        } else {
          ctx.fillStyle = `rgba(${NODE_RGB}, ${alpha})`;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop(now: number) {
      if (!running) return;
      const dt = now - last;
      last = now;
      draw(dt);
      rafId = window.requestAnimationFrame(loop);
    }

    function start() {
      if (reduceMotion || running || width === 0 || height === 0) return;
      running = true;
      last = performance.now();
      rafId = window.requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = 0;
    }

    function resize() {
      const rect = surface.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      surface.width = Math.round(width * dpr);
      surface.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
      if (reduceMotion) {
        draw(0);
      } else if (running) {
        last = performance.now();
      }
    }

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => resize())
        : null;
    resizeObserver?.observe(surface);

    const intersectionObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (!entry) return;
            if (entry.isIntersecting && !document.hidden) start();
            else stop();
          })
        : null;
    intersectionObserver?.observe(surface);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    resize();
    if (!resizeObserver) {
      window.addEventListener("resize", resize);
    }
    start();

    return () => {
      stop();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (!resizeObserver) window.removeEventListener("resize", resize);
      nodes = [];
      particles = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
