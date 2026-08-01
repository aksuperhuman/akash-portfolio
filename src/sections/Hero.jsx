import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { personal, socials } from "../data/data";
import useTypewriter from "../hooks/useTypewriter";
import HeroPortrait from "../components/HeroPortrait";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" },
  }),
};

const Hero = () => {
  const typed = useTypewriter(personal.role, { speed: 65 });

  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow mb-5"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-gradient-gold"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 h-9 sm:h-10"
          >
            <span className="font-mono text-lg sm:text-xl text-white/80">
              {typed}
              <span className="inline-block w-[2px] h-5 sm:h-6 bg-gold ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 text-base sm:text-lg text-white/60 max-w-lg leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={scrollTo("#projects")}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-black text-sm font-semibold hover:shadow-gold hover:-translate-y-0.5 transition-all"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-sm font-semibold hover:border-gold/60 hover:text-gold hover:-translate-y-0.5 transition-all"
            >
              <FiMail /> Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-10 flex items-center gap-4"
          >
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-full glass text-white/70 hover:text-gold hover:border-gold/50 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <HeroPortrait />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
