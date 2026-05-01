import { FaGitAlt, FaGithub, FaLinux, FaAws, FaPython, FaJava, FaTerminal, FaServer, FaDatabase, FaNetworkWired, FaDocker } from 'react-icons/fa';
import { SiRedhat, SiCentos, SiC, SiCplusplus, SiPycharm, SiIntellijidea, SiStreamlit, SiJira, SiGitlab } from 'react-icons/si';
import { MdEmail, MdSchedule, MdStorage, MdSecurity, MdCloud } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function Skills() {

const categories = [
  {
    title: "Linux Administration",
    skills: [
      { icon: <FaLinux />, name: "Linux", level: 90 },
      { icon: <SiRedhat />, name: "RHEL", level: 85 },
      { icon: <SiCentos />, name: "CentOS", level: 80 },
      { icon: <FaAws />, name: "Amazon Linux", level: 85 },
      { icon: <FaTerminal />, name: "Shell Scripting", level: 85 },
      { icon: <MdSecurity />, name: "Permissions", level: 90 },
      { icon: <MdStorage />, name: "Disk & File Systems", level: 85 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { icon: <FaPython />, name: "Python", level: 85 },
      { icon: <SiC />, name: "C", level: 70 },
      { icon: <SiCplusplus />, name: "C++", level: 65 },
      { icon: <FaJava />, name: "Java", level: 60 },
      { icon: <VscCode />, name: "Verilog", level: 75 },
      { icon: <VscCode />, name: "SystemVerilog", level: 70 },
    ],
  },
  {
    title: "AWS Cloud",
    skills: [
      { icon: <FaAws />, name: "AWS", level: 85 },
      { icon: <FaServer />, name: "EC2", level: 85 },
      { icon: <MdStorage />, name: "EBS & Snapshots", level: 80 },
      { icon: <MdStorage />, name: "S3", level: 90 },
      { icon: <MdSecurity />, name: "IAM", level: 85 },
      { icon: <FaNetworkWired />, name: "VPC", level: 80 },
      { icon: <AiOutlineCloudServer />, name: "Route 53", level: 75 },
      { icon: <MdSchedule />, name: "CloudWatch", level: 80 },
      { icon: <MdCloud />, name: "CloudFront", level: 80 },
      { icon: <FaDatabase />, name: "RDS", level: 80 },
      { icon: <FaDatabase />, name: "DynamoDB", level: 75 },
      { icon: <AiOutlineCloudServer />, name: "Auto Scaling", level: 75 },
      { icon: <AiOutlineCloudServer />, name: "Load Balancer", level: 80 },
      { icon: <MdEmail />, name: "SNS", level: 75 },
      { icon: <MdSchedule />, name: "CloudTrail", level: 70 },
      { icon: <AiOutlineCloudServer />, name: "Elastic Beanstalk", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: <FaGitAlt />, name: "Git", level: 85 },
      { icon: <FaGithub />, name: "GitHub", level: 90 },
      { icon: <SiGitlab />, name: "GitLab", level: 80 },
      { icon: <VscCode />, name: "VS Code", level: 95 },
      { icon: <SiPycharm />, name: "PyCharm", level: 85 },
      { icon: <SiIntellijidea />, name: "IntelliJ", level: 75 },
      { icon: <SiStreamlit />, name: "Streamlit", level: 75 },
      { icon: <SiJira />, name: "Jira", level: 80 },
    ],
  },
  {
    title: "DevOps (Learning)",
    skills: [
      { icon: <MdSchedule />, name: "CI/CD Concepts", level: 75 },
      { icon: <SiGitlab />, name: "GitActions", level: 70 },
      { icon: <SiGitlab />, name: "GitLab CI", level: 70 },
      { icon: <FaDocker />, name: "Docker", level: 75 },
      { icon: <MdCloud />, name: "CloudFormation", level: 70 },
      { icon: <FaAws />, name: "ECS", level: 70 },
    ],
  },
];

  return (
    <section
      id="skills"
      className="w-full py-16 md:py-24 flex flex-col items-center justify-center relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-0 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[130px]" />
        <div className="absolute bottom-10 right-0 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 opacity-18 blur-[130px]" />
        <div className="absolute inset-0 opacity-25 tech-grid-bg" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col gap-4 mb-12 md:mb-14 max-w-3xl px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 w-fit mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">03</span>
          <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-[var(--text-secondary)] text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          A structured view of the tools, systems, and platforms I use across Linux, cloud, development, and DevOps.
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-10 grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6">
        {categories.map((cat, ci) => (
          <motion.article
            key={cat.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: ci * 0.08 }}
            className="tech-panel relative overflow-hidden rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="tech-label">Category</span>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] shrink-0">
                {String(cat.skills.length).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {cat.skills.map((s, i) => (
                <motion.div
                  key={`${cat.title}-${s.name}`}
                  aria-label={s.name}
                  title={s.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group"
                >
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-2.5 sm:px-4 sm:py-3 transition-all duration-300 hover:border-[var(--accent)]/30 hover:bg-white/[0.06] hover:translate-y-[-1px]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-[var(--accent-light)] transition-all duration-300 group-hover:bg-[var(--accent)]/10 group-hover:text-[var(--accent-light)]">
                      <span className="text-lg">{s.icon}</span>
                    </div>
                    <p className="max-w-[10rem] text-sm sm:text-[15px] font-medium text-white leading-tight text-center">
                      {s.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
