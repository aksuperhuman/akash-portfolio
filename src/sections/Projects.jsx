import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Portfolio" heading="Some of My Recent Work" align="center" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid md:grid-cols-2 gap-8"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative glass gradient-border rounded-3xl p-8 sm:p-10 flex flex-col shadow-glass hover:shadow-gold transition-shadow"
            >
              <span className="line-tag mb-4">
                {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed">{p.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/8">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
                >
                  Live Demo <FiExternalLink />
                </a>
                <a
                  href={p.github}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
