import { useEffect } from "react";

/**
 * Adds `is-in` to every `.reveal` / `.reveal-img` element once it scrolls into
 * view. Elements are revealed immediately when the user prefers reduced motion.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-img"),
    );

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset["delay"] ?? 0);
          window.setTimeout(() => el.classList.add("is-in"), delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

/** Counts a number up when its element enters the viewport. */
export function useCountUp(ref: React.RefObject<HTMLElement | null>, to: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const render = (v: number) => {
      el.textContent = v.toFixed(1);
    };

    if (reduced || typeof IntersectionObserver === "undefined") {
      render(to);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1100;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        render(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

    io.observe(el);
    return () => io.disconnect();
  }, [ref, to]);
}
