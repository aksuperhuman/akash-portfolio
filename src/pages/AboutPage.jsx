import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import { personal } from "../data/data";

const highlights = [
  {
    title: "Backend engineering",
    body: "I design REST APIs and services in Java and Spring Boot with a focus on clean layering, validation and meaningful error handling.",
  },
  {
    title: "Data & persistence",
    body: "Comfortable modeling relational schemas with JPA/Hibernate across MySQL and PostgreSQL, and using Redis for caching and locking.",
  },
  {
    title: "Security-minded",
    body: "I implement authentication and authorization with Spring Security and JWT, treating access control as a first-class concern.",
  },
  {
    title: "Full stack fluency",
    body: "On the frontend I build with React, wiring up state, routing and API integration so the backend's guarantees reach the user.",
  },
];

const AboutPage = () => {
  return (
    <section className="relative z-10 pt-36 pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <Link
          to="/#about"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors mb-10"
        >
          <FiArrowLeft /> Back to home
        </Link>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          More About Me
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl font-semibold leading-tight"
        >
          Hi, I&apos;m {personal.firstName} — here&apos;s a closer look
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl"
        >
          I&apos;m a Computer Science postgraduate from St. Joseph&apos;s College, Trichy, with a
          focus on backend development and scalable systems. My interest in Java and the Spring
          ecosystem grew out of building complete, production-shaped applications end to end —
          from the database schema up through the API to the interface someone actually uses.
        </motion.p>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {highlights.map((h, idx) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
            >
              <GlassCard className="p-6 h-full" hover={false}>
                <h3 className="font-display text-lg font-semibold text-gold mb-2">{h.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{h.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        >
          <GlassCard className="p-8 gradient-border" hover={false}>
            <p className="text-white/70 leading-relaxed">
              Outside of coursework, I like taking a project all the way to a working state —
              handling the edge cases, writing the tests, and making sure the concurrency and
              failure paths hold up, not just the happy path. That&apos;s the standard I hold my
              own projects to, and the one I bring to a team.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
