import { motion } from "framer-motion";
import { FiCompass } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Journey" heading="Ready to Start" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <GlassCard className="p-8 sm:p-12 text-center gradient-border" hover={false}>
            <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mx-auto text-2xl">
              <FiCompass />
            </div>
            <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Currently seeking an opportunity as a Java Full Stack Developer where I can
              contribute, learn and grow while building scalable enterprise applications.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
