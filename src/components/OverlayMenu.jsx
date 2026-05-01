import { motion, AnimatePresence } from "framer-motion";

export default function OverlayMenu({ isOpen, onClose }) {
  // Pick clip origin based on screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024; // lg breakpoint
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(5,5,5,0.98)" }}
        >
          {/* Header with Close Button */}
          <div className="absolute top-8 md:top-12 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between z-10">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Navigation
            </motion.h2>
            <button
              onClick={onClose}
              className="group flex items-center gap-2 text-white focus:outline-none"
              aria-label="Close menu"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white/70 group-hover:text-[var(--accent-light)] transition-colors">Esc</span>
              <div className="w-5 h-5 relative flex items-center justify-center">
                <span className="absolute w-full h-[1.5px] bg-white group-hover:bg-[var(--accent-light)] transition-colors rotate-45"></span>
                <span className="absolute w-full h-[1.5px] bg-white group-hover:bg-[var(--accent-light)] transition-colors -rotate-45"></span>
              </div>
            </button>
          </div>

          {/* Menu Links */}
          <ul className="space-y-3 md:space-y-4 text-center font-sans relative z-10 px-6">
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Education",
              "Projects",
              "Certifications",
              "Contact",
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                className="overflow-visible"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="group relative inline-flex items-center gap-4 text-3xl md:text-5xl text-white/80 font-light tracking-tight hover:text-white transition-colors duration-300"
                >
                  <span className="text-sm font-mono text-[var(--accent-light)]/70 group-hover:text-[var(--accent-light)] transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Footer Links */}
          <motion.div
            className="absolute bottom-8 md:bottom-12 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between text-xs font-mono text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/tejasssuthrave" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-light)] transition-colors">
              GitHub
            </a>
            <span>Menu Navigation // v1.0</span>
            <a href="https://linkedin.com/in/tejas-s-suthrave" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-light)] transition-colors">
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
