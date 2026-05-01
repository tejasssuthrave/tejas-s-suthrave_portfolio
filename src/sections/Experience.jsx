import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "AWS Cloud Intern",
    company: "ITSN",
    duration: "Oct 2025 - Apr 2026",
    location: "Remote / Bengaluru, Karnataka, India",
    description: [
      "Managed and optimized AWS cloud infrastructure including EC2, EBS, S3, RDS, DynamoDB, and ElastiCache; implemented auto-scaling and load balancing for high-availability systems.",
      "Configured and maintained secure AWS VPC architecture with subnets, route tables, security groups, NACLs, NAT Gateways, and VPC peering; deployed CloudFront CDN for optimized content delivery.",
      "Provided proactive Linux server support including user management, permissions, SSH configuration, and package management; resolved infrastructure incidents with minimal downtime through systematic troubleshooting.",
      "Automated routine administrative tasks using shell scripting and cron jobs; explored DevOps services (Elastic Beanstalk, CloudFormation, ECS) for infrastructure automation; monitored system health using CloudWatch dashboards and maintained comprehensive documentation."
    ],
  },
  {
    role: "Student Ambassador",
    company: "E-Cell, IIT Guwahati",
    duration: "Nov 2025 - Feb 2026",
    location: "Remote",
    description: [
      "Promoted the IIT Guwahati Internship Program as a Campus Ambassador, significantly increasing student engagement and participation.",
      "Facilitated communication between students and the organizing team, serving as the primary liaison for program updates.",
      "Coordinated outreach initiatives and peer engagement strategies to maximize program visibility across campus."
    ],
  },
  {
    role: "VLSI Design Engineer Trainee",
    company: "Rooman Technologies Pvt Ltd",
    duration: "Oct 2024 - May 2025",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Designed and implemented digital circuits using Verilog (RTL), ensuring robust hardware functionality and efficient implementation.",
      "Performed rigorous RTL verification and debugging to maintain functional correctness across complex digital designs.",
      "Utilized the OpenROAD toolchain to execute the complete ASIC design flow, including the verification of up/down counters."
    ],
  },
  {
    role: "Embedded system intern",
    company: "Technologics Global Pvt Ltd",
    duration: "Aug 2024 - Feb 2025",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Developed resource-optimized embedded applications using Embedded C for various microcontroller architectures.",
      "Integrated IoT-based systems with hardware components to build responsive and connected industrial solutions.",
      "Conducted hardware interfacing, testing, and low-level debugging to ensure long-term system stability and reliability."
    ],
  },
  {
    role: "INTEL Unnati Industrial Training Program 2024",
    company: "Intel Corporation",
    duration: "May 2024 - Aug 2024",
    location: "Remote / Hybrid",
    description: [
      "Trained in advanced security technologies, focusing on Trusted Execution Environments (TEEs) and secure system architectures.",
      "Implemented secure key management protocols using Intel SGX to enhance system-level data protection and integrity.",
      "Analyzed secure computing frameworks to implement robust hardware-based security solutions for industrial applications."
    ],
  },
  {
    role: "Python AI/ML intern",
    company: "Dotch endeavours",
    duration: "Oct 2023 - Nov 2023",
    location: "Mysore, Karnataka, India",
    description: [
      "Developed Python-based AI/ML solutions, specializing in predictive modeling and robust data preprocessing pipelines.",
      "Engineered machine learning models using industry-standard libraries to improve prediction accuracy and performance.",
      "Conducted data analysis and experimentation to optimize model performance for specific research use cases."
    ],
  },
  {
    role: "Python Engineer",
    company: "Dhanaina Technologies",
    duration: "Oct 2023 - Nov 2023",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Developed and maintained high-performance Python applications with a focus on scalable code and system quality.",
      "Designed and implemented intuitive desktop user interfaces (UIs) using the Tkinter framework for internal tools.",
      "Collaborated in an agile team environment, participating in code reviews to enhance overall system reliability."
    ],
  }
];

function ExperienceItem({ exp, idx }) {
  const isLeft = idx % 2 === 0;

  const card = (side) => (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: side === "left" ? -50 : 50,
        y: 20 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: idx * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className="relative rounded-lg border border-white/10 bg-white/5 p-6 md:p-8 max-w-[450px] w-full hover:border-[var(--accent)]/40 hover:bg-white/8 transition-all duration-300 group"
    >
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: idx * 0.1 + 0.3 }}
        className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-white/60 mb-4"
      >
        {exp.duration}
      </motion.span>
      <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[var(--accent-light)] transition-colors">{exp.role}</h3>
      <p className="text-sm text-[var(--text-secondary)] mb-3 font-light">{exp.company}</p>
      {exp.location && (
        <span className="text-xs font-mono tracking-widest text-white/50 inline-block mb-4">{exp.location}</span>
      )}
      <ul className="text-sm text-[var(--text-secondary)] leading-relaxed font-light list-disc list-outside ml-4 space-y-2">
        {exp.description.map((item, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 + 0.5 + (i * 0.1) }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-[1fr_50px_1fr] items-center w-full mb-12">
        <div className={`flex ${isLeft ? "justify-end pr-6" : "justify-end pr-6 invisible"}`}>
          {isLeft && card("left")}
        </div>

        <div className="flex justify-center relative h-full">
          <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-[var(--border-color)] origin-top" 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="w-4 h-4 rounded-full bg-[var(--accent)] ring-[3px] ring-[var(--accent)]/30 shadow-[0_0_10px_var(--accent)] z-10"
          />
        </div>

        <div className={`flex ${!isLeft ? "justify-start pl-6" : "justify-start pl-6 invisible"}`}>
          {!isLeft && card("right")}
        </div>
      </div>

      {/* Mobile */}
      <motion.div 
        className="md:hidden relative flex items-start mb-12 pl-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
      >
        <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-[var(--border-color)]"></div>
        <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-[var(--accent)] ring-[3px] ring-[var(--accent)]/30 shadow-[0_0_10px_var(--accent)] z-10" />
        <div className="ml-4 rounded-lg border border-white/10 bg-white/5 p-5 w-full max-w-sm group hover:border-[var(--accent)]/40 hover:bg-white/8 transition-all duration-300">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 + 0.2 }}
            className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-white/60 mb-4"
          >
            {exp.duration}
          </motion.span>
          <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[var(--accent-light)] transition-colors">{exp.role}</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-3 font-light">{exp.company}</p>
          {exp.location && (
            <span className="text-xs font-mono tracking-widest text-white/50 inline-block mb-4">{exp.location}</span>
          )}
          <ul className="text-sm text-[var(--text-secondary)] leading-relaxed font-light list-disc list-outside ml-4 space-y-2">
            {exp.description.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.4 + (i * 0.1) }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="relative font-sans py-12 md:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          
          <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 opacity-20 blur-[120px] animate-pulse delay-500" />
        </div>

        {/* Title */}
        <motion.div
          className="relative z-10 mb-16 md:mb-20 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 w-fit">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">04</span>
            <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional Journey
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg font-light">
            My experience in cloud infrastructure, AI/ML, and embedded systems.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          {/* Mobile Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[var(--border-color)] md:hidden"></div>
          
          {experiences.map((exp, idx) => (
            <ExperienceItem
              key={`${exp.company}-${exp.role}-${idx}`}
              exp={exp}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
