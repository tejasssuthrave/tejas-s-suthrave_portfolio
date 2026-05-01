import { motion } from "framer-motion";

export default function About() {
  const strengths = [
    {
      title: "Infrastructure mindset",
      text: "I like designing systems that stay reliable, observable, and easy to scale.",
    },
    {
      title: "Builds with intent",
      text: "I focus on solutions that are practical, maintainable, and grounded in real use cases.",
    },
    {
      title: "Cross-domain fluency",
      text: "I work across cloud, Linux, and AI workflows to connect backend systems with product outcomes.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 flex items-center justify-center relative overflow-hidden font-sans"
      aria-label="About me"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-900/25 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-fuchsia-900/15 blur-[140px]" />
        <div className="absolute inset-0 opacity-30 tech-grid-bg" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="flex flex-col gap-5 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 w-fit mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">02</span>
            <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Who I Am
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
            A cloud-focused engineer blending Linux, AWS, Python, and AI to build systems that are clean, resilient, and ready for scale.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <motion.div
            className="tech-panel relative rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="relative space-y-6">
              <div className="space-y-4 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                <p>
                  I’m an EC Engineering graduate passionate about cloud infrastructure, Linux systems, and AI development. I bridge the gap between robust backend systems and cutting-edge AI capabilities.
                </p>
                <p>
                  My expertise spans AWS cloud services, Python development, system administration, and prompt engineering. I focus on building scalable, reliable solutions that solve real-world problems.
                </p>
                <p className="text-[var(--accent-light)] italic border-l border-[var(--accent)] pl-4">
                  "A rare mix of infrastructure thinking and application-layer skills."
                </p>
              </div>

            </div>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true }}
          >
            <div className="tech-panel rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="tech-label">Current Focus</span>
                <span className="tech-dot" />
              </div>
              <div className="space-y-4">
                {strengths.map((item, index) => (
                  <div key={item.title} className={`${index !== strengths.length - 1 ? "pb-4 border-b border-white/8" : ""}`}>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

