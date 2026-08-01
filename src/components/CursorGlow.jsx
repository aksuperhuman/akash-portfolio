import { useEffect, useRef } from "react";

/**
 * Ambient radial glow that follows the pointer. Desktop only,
 * disabled automatically on touch devices and reduced-motion.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const el = glowRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      if (el) el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-radial z-0 hidden md:block"
      style={{ willChange: "transform", mixBlendMode: "screen" }}
    />
  );
};

export default CursorGlow;
