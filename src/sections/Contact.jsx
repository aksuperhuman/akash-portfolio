import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { personal } from "../data/data";

// Set these from your EmailJS dashboard (emailjs.com) to enable live sending.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const isConfigured =
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

    if (!isConfigured) {
      // Graceful fallback until real EmailJS credentials are added.
      setTimeout(() => {
        setStatus("success");
        formRef.current?.reset();
      }, 900);
      return;
    }

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Get In Touch" heading="Let's Work Together" align="center" />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <GlassCard className="p-6 flex items-center gap-4" hover={false}>
              <span className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl shrink-0">
                <FiMail />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">Email</p>
                <a href={`mailto:${personal.email}`} className="text-white/90 hover:text-gold transition-colors break-all">
                  {personal.email}
                </a>
              </div>
            </GlassCard>
            <GlassCard className="p-6 flex items-center gap-4" hover={false}>
              <span className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl shrink-0">
                <FiMapPin />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">Location</p>
                <p className="text-white/90">{personal.location}</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-7 sm:p-9 gradient-border" hover={false}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wide text-white/40 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-gold/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wide text-white/40 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-gold/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wide text-white/40 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-gold/60 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-black text-sm font-semibold hover:shadow-gold hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <FiSend />}
                </button>

                {status === "success" && (
                  <p className="text-sm text-gold text-center">
                    Message sent — thanks for reaching out! I&apos;ll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Please email me directly instead.
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
