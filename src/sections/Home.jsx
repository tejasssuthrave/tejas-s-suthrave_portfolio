
import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import avatar from "../assets/hero-astronaut.png";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { FiArrowRight, FiCode, FiZap, FiTarget, FiBriefcase } from "react-icons/fi";
import { FaAws, FaLinux, FaPython, FaDocker, FaConnectdevelop } from "react-icons/fa6";
import ParticleBackground from "../components/ParticlesBackground";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/tejas-s-suthrave/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/tejasssuthrave" },
  { Icon: SiSubstack, label: "Substack", href: "https://substack.com/@tejasssuthrave" },
];

const stats = [
  { icon: FiCode, label: "Projects", value: "15+" },
  { icon: FiZap, label: "Skills", value: "20+" },
  { icon: FiBriefcase, label: "Experience", value: "5+" },
];

const techStack = [
  { Icon: FaAws, label: "AWS", color: "from-amber-500 to-orange-500" },
  { Icon: FaLinux, label: "Linux", color: "from-yellow-600 to-amber-600" },
  { Icon: FaPython, label: "Python", color: "from-blue-500 to-cyan-500" },
  { Icon: FaDocker, label: "Docker", color: "from-blue-400 to-blue-600" },
  { Icon: FaConnectdevelop, label: "Cloud", color: "from-blue-600 to-blue-800" },
];


const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(99,102,241,0.9)) drop-shadow(0 0 18px rgba(244,63,94,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

const floatingCardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const Home = React.forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const roles = useMemo(
    () => ["Cloud Infrastructure", "Linux Systems", "AI Development", "Prompt Engineering"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect logic
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60); // original typing speed
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex flex-col"
    >
      <ParticleBackground />

      {/* Code snippet background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 text-xs sm:text-sm font-mono text-white/5 whitespace-pre-wrap max-w-[200px] sm:max-w-xs leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          {`const build = () => {
  return <potential/>
}`}
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-4 sm:right-10 text-xs sm:text-sm font-mono text-[var(--accent)]/10 whitespace-pre-wrap max-w-[200px] sm:max-w-xs leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 2.2, duration: 1.5 }}
        >
          {`async deploy() {
  await cloud.init()
  return success
}`}
        </motion.div>
      </div>

      {/* gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900
          opacity-20 sm:opacity-15 md:opacity-10 
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        />
        <div
          className="absolute bottom-0 right-0 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw] 
          max-w-[500px] max-h-[500px] 
          rounded-full 
          bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 
          opacity-20 sm:opacity-15 
          blur-[100px] sm:blur-[130px] md:blur-[150px] 
          animate-pulse delay-500"
        />
      </div>

      <div className="relative z-10 flex-1 w-full flex flex-col lg:grid lg:grid-cols-12 pt-20 sm:pt-8 pb-8 lg:pt-12 lg:pb-16">
        {/* left */}
        <motion.div
          className="lg:col-span-6 min-w-0 flex flex-col justify-center text-center relative px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-8 lg:py-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-full mx-auto max-w-[48rem] min-w-0">
            {/* Section Intro */}
            <motion.div
              className="inline-flex items-center gap-2 mb-4 mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">01</span>
              <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-4 sm:mb-6 mx-auto px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-md hover:border-[var(--accent)]/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">Open to Opportunities</span>
            </motion.div>

            {/* name */}
            <motion.h1
              className="mb-4 mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none break-words whitespace-normal"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white">Tejas S</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 font-black">
                Suthrave
              </span>
            </motion.h1>

            {/* role */}
            <motion.div
              className="mt-4 sm:mt-6 mb-6 sm:mb-8 min-h-[1.5em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-light tracking-wide">
                {roles[index].substring(0, subIndex)}
                <span className="inline-block w-[2px] h-5 sm:h-6 ml-1 bg-[var(--accent)] animate-pulse align-middle"></span>
              </p>
            </motion.div>

            {/* description */}
            <motion.p
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Cloud Infrastructure & AI enthusiast. I build scalable solutions with modern tech, focusing on Linux systems and prompt engineering.
            </motion.p>



            {/* Tech Stack Showcase */}
            <motion.div
              className="mt-8 sm:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-4 text-center">Tech Stack</p>
              <motion.div
                className="flex gap-3 sm:gap-4 justify-center flex-wrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                {techStack.map(({ Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${color} opacity-80 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group px-6 sm:px-9 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent)] to-purple-600 text-white font-semibold overflow-hidden transition-all duration-300 flex items-center gap-2 text-sm sm:text-base shadow-xl shadow-[var(--accent)]/40 hover:shadow-[var(--accent)]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none"></div>
                <span className="relative">Explore My Work</span>
                <motion.span className="relative transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight size={18} />
                </motion.span>
              </motion.a>
              <motion.a
                href={`${import.meta.env.BASE_URL}carosol/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 sm:px-9 py-3 sm:py-3.5 rounded-xl border-2 border-[var(--accent)]/30 text-white font-semibold backdrop-blur-md bg-white/5 hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/80 transition-all duration-300 text-sm sm:text-base relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
                <span className="relative">Download Resume</span>
              </motion.a>
            </motion.div>

            {/* socials */}
            <motion.div
              className="mt-10 sm:mt-12 flex gap-3 sm:gap-4 text-sm sm:text-base justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="flex gap-3 sm:gap-4">
                {socials.map(({ Icon, label, href }) => (
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
                    className="group w-10 sm:w-11 h-10 sm:h-11 flex items-center justify-center rounded-full border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-white backdrop-blur-md hover:border-[var(--accent)]/60 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)]/0 to-purple-500/0 group-hover:from-[var(--accent)]/20 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>
                    <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* scroll indicator */}
            <motion.div
              className="mt-14 sm:mt-16 flex flex-col items-center gap-3"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 font-mono">Scroll to explore</p>
              <div className="relative">
                <motion.svg 
                  className="w-5 h-5 text-white/30" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
                <motion.svg 
                  className="absolute inset-0 w-5 h-5 text-[var(--accent)]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          className="relative flex lg:col-span-6 items-center justify-center overflow-hidden min-h-[45vh] sm:min-h-[55vh] lg:min-h-0 pt-4 sm:pt-8 lg:pt-0 px-4 sm:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          {/* Animated background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "min(50vw, 700px)",
              height: "min(50vw, 700px)",
              borderRadius: "50%",
              filter: "blur(80px)",
              opacity: 0.25,
              background: "radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(244,63,94,0.2) 100%)",
            }}
          />



          {/* Avatar container */}
          <motion.div 
            className="relative z-10 flex items-center justify-center w-full perspective"
          >
            <motion.img
              src={avatar}
              alt="Tejas S Suthrave avatar"
              style={{ y: yParallax }}
              className="object-contain select-none pointer-events-none w-full max-w-[240px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[550px] max-h-[70vh] sm:max-h-[80vh] mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_50%,transparent_95%)] drop-shadow-[0_0_60px_rgba(79,70,229,0.3)] sm:drop-shadow-[0_0_80px_rgba(79,70,229,0.4)]"
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                y: [0, -20, 0]
              }}
              transition={{ 
                opacity: { delay: 1.2, duration: 0.8 },
                scale: { delay: 1.2, duration: 0.8 },
                rotateY: { delay: 1.2, duration: 1 },
                y: { delay: 1.8, duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced divider with gradient */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />
    </section>
  );
});

export default Home;
