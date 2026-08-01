import { useMemo } from "react";

/**
 * Lightweight ambient particle field, pure CSS/SVG (no canvas deps),
 * kept subtle so it reads as atmosphere rather than noise.
 */
const ParticlesBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
