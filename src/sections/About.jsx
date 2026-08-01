import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { aboutInfo } from "../data/data";

const icons = {
  Name: FiUser,
  Email: FiMail,
  Phone: FiPhone,
  Location: FiMapPin,
  Experience: FiBriefcase,
  Availability: FiCheckCircle,
};

const About = () => {
  return (
      <section id="about" className="relative z-10 py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <div>
            <SectionHeading
                eyebrow="About Me"
                heading="Passionate about building real-world solutions"
            />

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I am a Computer Science postgraduate passionate about backend
              development, scalable systems, and solving real-world problems
              using Java technologies. I enjoy building secure, scalable, and
              user-friendly applications with Spring Boot and React, and I'm
              always eager to learn new technologies and improve my skills.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-9"
            >
              <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-sm font-semibold hover:border-gold/60 hover:text-gold hover:-translate-y-0.5 transition-all"
              >
                More About Me
                <FiArrowRight />
              </Link>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-7 sm:p-9 gradient-border" hover={false}>
              <ul className="divide-y divide-white/10">
                {aboutInfo.map(({ label, value }) => {
                  const Icon = icons[label];

                  return (
                      <li
                          key={label}
                          className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                      >
                    <span className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                      {Icon && <Icon size={18} />}
                    </span>

                        <div>
                          <p className="text-xs uppercase tracking-wide text-white/40">
                            {label}
                          </p>

                          <p className="text-sm sm:text-base text-white/90 font-medium">
                            {value}
                          </p>
                        </div>
                      </li>
                  );
                })}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </section>
  );
};

export default About;