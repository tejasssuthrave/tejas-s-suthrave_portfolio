import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";

// Import certificate images
import MLCert from "../assets/ML_certi.jpeg";
import VLSICert from "../assets/VLSI_certi.jpeg";
import PYTCert from "../assets/PYT_certi.jpeg";
import PYTIBMCert from "../assets/PYT_IBM_certi.png";
import PYTINFOCert from "../assets/PYT_INFO_certi.jpeg";
import AWSINFOCert from "../assets/AWS_INFO_certi.png";
import AWSQuestBadge from "../assets/AWS_AWS_QUEST.png";

const certifications = [
  {
    title: "AWS Cloud Practitioner (Cloud Quest)",
    issuer: "AWS",
    date: "Apr 2026",
    description: "Completed AWS Cloud Quest Cloud Practitioner training and earned the Cloud Practitioner badge.",
    skills: ["AWS", "Cloud Fundamentals", "Cloud Quest"],
    image: AWSQuestBadge,
    verifyLink: "#"
  },
    {
    title: "TechA AWS Solution Architect Certification",
    issuer: "Infosys",
    date: "Apr 2026",
    description: "Completed the TechA AWS Solution Architect program via Infosys Springboard. Demonstrated skills in designing scalable, secure cloud architectures and AWS service best practices.",
    skills: ["AWS", "Cloud Architecture", "Solution Design", "EC2", "S3", "IAM"],
    image: AWSINFOCert,
    verifyLink: "https://verify.onwingspan.com"
  },
  {
    title: "Machine Learning for Cyber Security",
    issuer: "C-DAC Hyderabad",
    date: "Oct 2025",
    description: "An intensive program focused on the intersection of AI and security. Mastered anomaly detection, malware analysis using ML, and building robust defense systems against automated cyber threats.",
    skills: ["Machine Learning", "Cybersecurity", "Threat Detection", "Anomaly Detection", "Python"],
    image: MLCert,
    verifyLink: "#"
  },
  {
    title: "VLSI Design Engineer",
    issuer: "National Skill Development Corporation",
    date: "May 2025",
    description: "Professional certification covering the complete VLSI design flow. Expertise in RTL design using Verilog, functional verification, and logic synthesis for high-performance integrated circuits.",
    skills: ["VLSI", "Verilog", "RTL Design", "Digital Electronics", "ASIC Design", "FPGA"],
    image: VLSICert,
    verifyLink: "#"
  },
  {
    title: "Programming in Python",
    issuer: "SWAYAM MHRD",
    date: "Jan 2025",
    description: "Comprehensive certification from the Ministry of Education. Covered advanced data structures, algorithmic complexity, and software engineering principles using Python for real-world applications.",
    skills: ["Python", "Algorithms", "Data Structures", "Problem Solving", "Software Engineering"],
    image: PYTCert,
    verifyLink: "#"
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class",
    date: "Dec 2024",
    description: "Mastered the fundamentals of data science using Python. Expertise in data manipulation with Pandas, numerical computing with NumPy, and data visualization with Matplotlib and Seaborn.",
    skills: ["Python", "Data Science", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
    image: PYTIBMCert,
    verifyLink: "https://courses.cognitiveclass.ai/certificates/64b0bc6710f643e8a47fb738a564401a"
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    description: "Validated core programming proficiency through the Infosys Springboard platform. Focused on writing clean, efficient code and understanding the underlying architecture of Python applications.",
    skills: ["Python", "Software Development", "Programming Fundamentals", "Clean Code", "OOP"],
    image: PYTINFOCert,
    verifyLink: "#"
  },

  // {
  //   title: "(Placeholder) Add another certificate",
  //   issuer: "Your Issuer",
  //   date: "Month YYYY",
  //   description: "Replace this entry with the details of your second certificate. Update the `image` path to point to the uploaded file in `public/` or import it from `src/assets`.",
  //   skills: ["CertSkill1", "CertSkill2"],
  //   image: "/certificate-placeholder.jpg",
  //   verifyLink: "#"
  // },
];
const PageCover = React.forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full overflow-hidden bg-[var(--bg-surface)]"
    style={{
      backgroundColor: "var(--bg-surface)",
      background: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1000px var(--bg-surface)",
    }}
  >
    {/* Decorative border */}
    <div className="absolute inset-3 border-2 border-[var(--border-color)] rounded-lg" />
    <div className="absolute inset-5 border border-[var(--border-color)]/50 rounded-lg" />

    {/* Corner ornaments */}
    {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
      <div
        key={i}
        className={`absolute ${pos} w-4 h-4 border-[var(--accent)]/50 ${
          i < 2 ? "border-t-2" : "border-b-2"
        } ${i % 2 === 0 ? "border-l-2" : "border-r-2"}`}
      />
    ))}

    <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
      {children}
    </div>
  </div>
));

// Left page - Certificate details
const DetailPage = React.forwardRef(({ cert, pageNumber }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full overflow-hidden bg-[var(--bg-surface)]"
    style={{
      backgroundColor: "var(--bg-surface)",
      background: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1000px var(--bg-surface)",
    }}
  >
    {/* Spine shadow (Right side for left page) */}
    <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/40 to-transparent z-20 pointer-events-none" />

    {/* Page texture */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

    {/* Inner border */}
    <div className="absolute inset-3 sm:inset-4 border border-[var(--border-color)] rounded-lg" />

    <div className="relative z-10 flex flex-col h-full p-4 sm:p-8 md:p-10">
      {/* Header ribbon */}
      <div className="text-center mb-2 sm:mb-6">
        <div className="inline-block px-3 sm:px-5 py-1 sm:py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
          <span className="text-xs sm:text-xs font-mono font-bold tracking-[0.05em] sm:tracking-[0.2em] uppercase text-[var(--accent)]">
            Credential Record
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
        <div className="w-2 h-2 sm:w-2 sm:h-2 rotate-45 border border-[var(--accent)]/50" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
      </div>

      {/* Title */}
      <div className="relative">
        <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white mb-1 sm:mb-2 leading-tight tracking-tight px-2 sm:px-4">
          {cert.title}
        </h3>
        {/* Decorative Seal */}
        <div className="absolute -top-3 -right-0.5 sm:-top-6 sm:-right-2 opacity-10 pointer-events-none">
          <svg className="w-6 h-6 sm:w-12 sm:h-12 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L9 4H5V8L2 11V13L5 16V20H9L12 23L15 20H19V16L22 13V11L19 8V4H15L12 1M12 17A5 5 0 1 1 17 12A5 5 0 0 1 12 17M12 9A3 3 0 1 0 15 12A3 3 0 0 0 12 9Z" />
          </svg>
        </div>
      </div>

      {/* Issuer */}
      <p className="text-center text-xs sm:text-xs md:text-sm font-mono text-[var(--text-secondary)] mb-2 sm:mb-8">
        Issued by <span className="text-[var(--accent-light)] font-bold">{cert.issuer}</span>
      </p>

      {/* Description & Skills Container */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden px-1 sm:px-4">
        <div className="flex-1 overflow-y-auto py-2 sm:py-2 custom-scrollbar">
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed text-center mb-3 italic opacity-90 border-l border-r border-[var(--accent)]/20 py-1 sm:py-2 px-2">
            "{cert.description}"
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3 mb-3">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 sm:py-1 text-xs sm:text-[10px] md:text-xs font-mono rounded-none bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-auto pt-2 sm:pt-4 border-t border-[var(--border-color)]/30">
        <div className="flex justify-between items-center text-xs sm:text-[10px] md:text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex flex-col gap-1 sm:gap-1">
            <span className="text-[var(--accent)]/60 text-[10px] sm:text-[7px] uppercase tracking-tighter">Issue Date</span>
            <span className="text-white/80 text-xs">{cert.date}</span>
          </div>
          {cert.verifyLink && cert.verifyLink !== "#" && (
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 sm:px-3 py-1 sm:py-1 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 flex items-center gap-1 sm:gap-1.5 text-xs"
            >
              Verify <span className="text-[10px] sm:text-[10px]">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
));

// Right page - Certificate image
const ImagePage = React.forwardRef(({ cert, pageNumber }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full overflow-hidden bg-[var(--bg-surface)]"
    style={{
      backgroundColor: "var(--bg-surface)",
      background: "var(--bg-surface)",
      boxShadow: "inset 0 0 0 1000px var(--bg-surface)",
    }}
  >
    {/* Spine shadow (Left side for right page) */}
    <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none" />

    {/* Inner border */}
    <div className="absolute inset-4 border border-[var(--border-color)] rounded-lg" />

    <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 sm:p-10">
      {/* Small label */}
      <div className="mb-2 sm:mb-6 text-center">
        <span className="text-[9px] sm:text-xs font-mono font-medium tracking-[0.3em] uppercase text-[var(--text-secondary)]/60">
          Visual Documentation
        </span>
      </div>

      {/* Certificate image */}
      <div className="flex-1 flex items-center justify-center w-full px-1 sm:px-4 min-h-0">
        <div className="relative group/img">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-lg blur opacity-20 group-hover/img:opacity-40 transition duration-500"></div>
          <img
            src={cert.image}
            alt={`${cert.title} Certificate`}
            className="relative max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-[var(--border-color)] grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </div>
));

// Mobile flip-up card (phone view)
const MobileFlipCard = ({ cert, isOpen, onToggle }) => (
  <motion.div
    layout
    className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]/90 shadow-xl overflow-hidden"
    transition={{ layout: { duration: 0.3, ease: [0.25, 0.8, 0.25, 1] } }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-4 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg border border-[var(--border-color)] bg-[var(--bg-base)] flex items-center justify-center overflow-hidden">
          <img src={cert.image} alt={`${cert.title} thumb`} className="max-w-full max-h-full object-contain" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent)]/70">Credential</p>
          <h3 className="text-base font-semibold text-white leading-snug">{cert.title}</h3>
          <p className="text-[11px] text-[var(--text-secondary)]">
            {cert.issuer} - {cert.date}
          </p>
        </div>
      </div>
      <span className="text-[var(--accent-light)] text-base font-mono">{isOpen ? "-" : "+"}</span>
    </button>

    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 pb-4"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
        className="origin-top"
      >
        <div className="rounded-xl border border-[var(--border-color)] bg-black/40 overflow-hidden mb-3">
          <img src={cert.image} alt={cert.title} className="w-full object-cover" />
        </div>
        <p className="text-sm text-white font-semibold mb-1">{cert.title}</p>
        <p className="text-xs text-[var(--text-secondary)] mb-3 italic">{cert.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-[11px] font-mono rounded-md bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-secondary)]"
            >
              {skill}
            </span>
          ))}
        </div>
        {cert.verifyLink && cert.verifyLink !== "#" && (
          <a
            href={cert.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-[var(--accent)]/40 text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition-colors text-sm font-semibold"
          >
            Verify ?
          </a>
        )}
      </motion.div>
    </motion.div>
  </motion.div>
);

const Certification = () => {
  const bookRef = useRef(null);
  const [screenSize, setScreenSize] = useState("desktop");
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 480) setScreenSize("xs");
      else if (w < 768) setScreenSize("sm");
      else setScreenSize("desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const bookDimensions = {
    xs: { width: 200, height: 300, minWidth: 180, maxWidth: 220, minHeight: 280, maxHeight: 340 },
    sm: { width: 300, height: 420, minWidth: 260, maxWidth: 340, minHeight: 380, maxHeight: 480 },
    desktop: { width: 450, height: 550, minWidth: 300, maxWidth: 550, minHeight: 400, maxHeight: 680 },
  };

  const dims = bookDimensions[screenSize];
  const isMobile = screenSize !== "desktop";

  return (
    <section id="certifications" className="relative text-white py-12 md:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          className="mb-10 md:mb-14 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 w-fit">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">05</span>
            <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg font-light">
            {isMobile ? "Swipe through my professional credentials" : "Flip through my professional certifications"}
          </p>
        </motion.div>

        {/* Book */}
        {isMobile ? (
          <motion.div
            className="grid grid-cols-1 gap-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {certifications.map((cert) => (
              <MobileFlipCard
                key={cert.title}
                cert={cert}
                isOpen={openCard === cert.title}
                onToggle={() => setOpenCard(openCard === cert.title ? null : cert.title)}
              />
            ))}
          </motion.div>
        ) : (
          <>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HTMLFlipBook
                key={screenSize}
                ref={bookRef}
                width={dims.width}
                height={dims.height}
                size="stretch"
                minWidth={dims.minWidth}
                maxWidth={dims.maxWidth}
                minHeight={dims.minHeight}
                maxHeight={dims.maxHeight}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="certification-book"
                style={{}}
                flippingTime={800}
                usePortrait={false}
                startZIndex={0}
                autoSize={true}
                drawShadow={true}
                useMouseEvents={true}
                swipeDistance={30}
              >
                {/* Front Cover */}
                <PageCover>
                  <div className="w-16 h-16 mb-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    My Certifications
                  </h2>
                  <p className="text-[var(--text-secondary)] text-xs">Click to open</p>
                </PageCover>

                {/* Certification pairs: Detail (left) + Image (right) */}
                {certifications.flatMap((cert, idx) => [
                  <DetailPage key={`detail-${idx}`} cert={cert} pageNumber={idx * 2 + 1} />, 
                  <ImagePage key={`image-${idx}`} cert={cert} pageNumber={idx * 2 + 2} />, 
                ])}

                {/* Back Cover */}
                <PageCover>
                  <div className="w-12 h-12 mb-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs">Always Learning...</p>
                </PageCover>
              </HTMLFlipBook>
            </motion.div>

            {/* Navigation buttons */}
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
                className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 text-sm"
              >
                Previous
              </button>
              <button
                onClick={() => bookRef.current?.pageFlip()?.flipNext()}
                className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 text-sm"
              >
                Next
              </button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Certification;
