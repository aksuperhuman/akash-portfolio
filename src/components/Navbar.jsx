import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks, personal } from "../data/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [light, setLight] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => sections.forEach((s) => s && observer.unobserve(s));
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", light);
  }, [light]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass-strong shadow-glass" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight text-white hover:text-gold transition-colors"
        >
          {personal.name.split(" ")[0]} <span className="text-gold">R.</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === link.href
                    ? "text-black bg-gold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setLight((v) => !v)}
            aria-label="Toggle theme"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-gold hover:border-gold/50 transition-colors"
          >
            {light ? <FiMoon /> : <FiSun />}
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-black text-sm font-semibold hover:shadow-gold hover:-translate-y-0.5 transition-all"
          >
            <FiDownload /> Resume
          </a>
        </div>

        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong mt-4 mx-4 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium ${
                      active === link.href ? "bg-gold text-black" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex-1 text-center px-5 py-3 rounded-xl bg-gold text-black text-sm font-semibold"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => setLight((v) => !v)}
                  aria-label="Toggle theme"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/15 text-white/70"
                >
                  {light ? <FiMoon /> : <FiSun />}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
