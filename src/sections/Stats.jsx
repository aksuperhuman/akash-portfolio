import { motion } from "framer-motion";
import { stats } from "../data/data";
import GlassCard from "../components/GlassCard";
import AnimatedCounter from "../components/AnimatedCounter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Stats = () => {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={item}>
            <GlassCard className="p-6 sm:p-8 text-center h-full">
              <p
                className={`font-display font-bold text-gold ${
                  s.display ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl"
                }`}
              >
                {s.display ? s.display : <AnimatedCounter value={s.value} suffix={s.suffix} />}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-white/50 tracking-wide uppercase">
                {s.label}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
