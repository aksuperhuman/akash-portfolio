import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { skillTabs, skills } from "../data/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  const [active, setActive] = useState(skillTabs[0]);

  return (
    <section id="skills" className="relative z-10 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Skill Set" heading="Technologies I Work With" align="center" />

        <div className="mt-10 flex justify-center">
          <div className="glass rounded-full p-1.5 flex flex-wrap justify-center gap-1">
            {skillTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active === tab
                    ? "bg-gold text-black shadow-gold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
          >
            {skills[active].map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                variants={item}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center shadow-glass hover:shadow-gold hover:border-gold/40 transition-shadow"
              >
                <Icon className="text-3xl sm:text-4xl text-gold" />
                <span className="text-xs sm:text-sm font-medium text-white/80">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
