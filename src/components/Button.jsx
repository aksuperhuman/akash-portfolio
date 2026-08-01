import { motion } from "framer-motion";

/**
 * Premium button with a ripple-on-click effect.
 * variant: "primary" (solid gold) | "ghost" (outlined)
 */
const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
  icon: Icon,
}) => {
  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 select-none";
  const styles =
    variant === "primary"
      ? "bg-gold text-black hover:shadow-gold hover:-translate-y-0.5"
      : "border border-white/20 text-white hover:border-gold/60 hover:text-gold hover:-translate-y-0.5";

  const handleClick = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.className =
      "absolute rounded-full bg-white/40 pointer-events-none animate-ping-once";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
    if (onClick) onClick(e);
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div whileTap={{ scale: 0.96 }} className="inline-block">
      <Tag
        href={href}
        type={href ? undefined : type}
        onClick={handleClick}
        className={`${base} ${styles} ${className}`}
      >
        {Icon && <Icon className="text-base" />}
        {children}
      </Tag>
    </motion.div>
  );
};

export default Button;
