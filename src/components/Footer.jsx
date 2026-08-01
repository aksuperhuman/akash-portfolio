import { socials } from "../data/data";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-white/40 text-center sm:text-left">
          © {year} Akash R. — Built with React + Spring Boot
        </p>
        <div className="flex items-center gap-4">
          {socials.slice(0, 3).map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
