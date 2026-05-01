import React from "react";
import { motion } from "framer-motion";

const educations = [
  {
    degree: "B.E in Electronics and Communication",
    school: "Atria Institute of Technology, Bengaluru",
    year: "Dec 2021 - Jul 2025",
    description: "GPA: 9.21/10.00. Specialized in Electronics and Communication Engineering.",
    icon: "🎓",
  },
  {
    degree: "12th Standard",
    school: "Vidya Mandir IND PU College, Bengaluru",
    year: "2020 - 2021",
    description: "Specialized in Physics, Chemistry, Maths and Computer Science.",
    icon: "📚",
  },
  {
    degree: "10th Standard",
    school: "Sri Vidya Mandir High School, Bengaluru",
    year: "2018 - 2019",
    description: "Focused on core subjects including Science, Mathematics, Social Studies, and Languages.",
    icon: "✏️",
  },
];

function EducationCard({ edu, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      className="relative"
    >
      <div className="flex gap-4 md:gap-6 items-stretch">
        {/* Timeline marker */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] relative z-10"
            whileHover={{ scale: 1.15 }}
          >
            {edu.icon}
          </motion.div>
          {idx !== educations.length - 1 && (
            <div className="w-1 h-16 bg-gradient-to-b from-[var(--accent)]/40 to-transparent mt-1"></div>
          )}
        </div>

        {/* Content card */}
        <motion.div
          className="flex-1 pb-4 group"
          whileHover={{ x: 6 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-5 backdrop-blur-sm hover:border-[var(--accent)]/30 transition-all duration-300">
            <div className="flex flex-col gap-1 mb-2">
              <div className="inline-flex items-center gap-2 w-fit">
                <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--accent-light)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
                  {edu.year}
                </span>
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-white mb-1 tracking-tight group-hover:text-[var(--accent-light)] transition-colors duration-300">
              {edu.degree}
            </h3>

            <p className="text-[var(--text-secondary)] text-xs md:text-sm font-mono mb-2">
              {edu.school}
            </p>

            <p className="text-[12px] md:text-sm leading-relaxed text-[var(--text-secondary)]">
              {edu.description}
            </p>

            {/* Subtle accent line on hover */}
            <div className="h-px w-0 bg-gradient-to-r from-[var(--accent)] to-transparent mt-2 group-hover:w-full transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const Education = () => {
  return (
    <section id="education" className="relative font-sans py-12 md:py-20 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-900/20 blur-[120px]" />
        </div>

        {/* Title */}
        <div className="relative z-10 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[var(--accent-light)] font-mono text-sm uppercase tracking-widest">05</span>
              <span className="w-8 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              My Education
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative z-10 space-y-4">
          {educations.map((edu, idx) => (
            <EducationCard key={`${edu.degree}-${idx}`} edu={edu} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

