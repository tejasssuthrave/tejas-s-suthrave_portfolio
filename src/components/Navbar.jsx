import { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png"; // Adjust path

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true); // Always visible on homepage
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // If on homepage, never hide navbar
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down -> hide
        setVisible(false);
      } else {
        // scrolling up -> show
        setVisible(true);

        // hide again after 3sec idle
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 z-50 transition-transform duration-500 font-sans ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src={Logo} alt="Logo" className="w-8 h-8" /> */}
          <div className="text-xl font-mono font-bold text-white hidden sm:block tracking-[0.2em] uppercase">
            T<span className="text-[var(--accent)]">.</span>S<span className="text-[var(--accent)]">.</span>S
          </div>
        </div>

        {/* Menu Button */}
        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="group flex items-center gap-2 sm:gap-3 text-white focus:outline-none px-3 sm:px-4 py-2 white border border-white/10 rounded-lg hover:border-[var(--accent)] transition-colors text-xs sm:text-sm"
            aria-label="Open menu"
          >
            <span className="font-mono uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Menu</span>
            <div className="w-5 h-4 sm:w-6 sm:h-5 flex flex-col justify-center gap-1.5 items-end">
              <span className="w-full h-[1px] bg-white group-hover:bg-[var(--accent-light)] transition-colors"></span>
              <span className="w-2/3 h-[1px] bg-white group-hover:bg-[var(--accent-light)] transition-colors"></span>
            </div>
          </button>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 group white border border-white/10 rounded-lg hover:border-[var(--accent)] transition-colors"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--accent-light)] rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
              <span className="text-xs font-mono uppercase tracking-[0.2em]">Available</span>
            </span>
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
