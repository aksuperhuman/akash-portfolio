import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/data";

const Education = () => {
  return (
    <section id="education" className="relative z-10 py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Academics" heading="Education" align="center" />

        <div className="mt-14 relative">
          <div
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent sm:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {education.map((ed, idx) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-start sm:items-center gap-6 pl-16 sm:pl-0 ${
                  idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <span className="absolute left-4 sm:left-1/2 top-1 sm:top-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full bg-gold shadow-gold" />
                <div className={`sm:w-1/2 ${idx % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 inline-block w-full sm:w-auto text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-9 h-9 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                        <FiBookOpen />
                      </span>
                      <span className="font-mono text-xs text-white/40">{ed.period}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold">{ed.degree}</h3>
                    <p className="text-white/50 text-sm mt-1">{ed.school}</p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
