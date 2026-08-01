import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
