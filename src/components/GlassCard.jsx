import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6, borderColor: "rgba(245,180,0,0.35)" } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`glass rounded-2xl shadow-glass transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
