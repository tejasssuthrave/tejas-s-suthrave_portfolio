import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaHeart
} from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/tejas-s-suthrave-33633a258/", color: "hover:text-blue-400" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/tejasssuthrave", color: "hover:text-white" },
  { Icon: SiSubstack, label: "Substack", href: "https://tejasssuthrave.substack.com/", color: "hover:text-orange-400" },
  { Icon: FaEnvelope, label: "Email", href: "mailto:tejas.s.suthrave@gmail.com", color: "hover:text-rose-400" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(99,102,241,0.6)) drop-shadow(0 0 18px rgba(244,63,94,0.4))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden font-sans border-t border-[var(--border-color)] bg-black/25 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:px-8 md:py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex flex-col gap-4 min-w-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20 font-semibold">
              T
            </span>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">Portfolio by</p>
              <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                Tejas S Suthrave
              </h2>
            </div>
          </div>
          <p className="max-w-lg text-[13px] leading-relaxed text-[var(--text-secondary)]">
            Modern portfolio design with clean structure, fast interactions, and a strong focus on cloud, AI and frontend craftsmanship.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map(({ Icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-[var(--text-secondary)] ${color} transition-colors duration-300`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative transition-colors duration-300 hover:text-[var(--accent-light)]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="border-t border-[var(--border-color)]/60 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-2 text-[11px] text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Tejas S Suthrave. Built for speed and clarity.</span>
          <span className="text-[var(--accent-light)]">React · Vite · Tailwind-style UI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
