import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, heading, align = "left" }) => {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
      >
        {heading}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
