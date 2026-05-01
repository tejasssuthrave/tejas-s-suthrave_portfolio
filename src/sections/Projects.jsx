

import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 🔹 List of project objects (dynamic images based on screen size)
  const projects = React.useMemo(
    () => [
      {
        title: "CloudCost AI Assistant",
        link: "https://github.com/tejasssuthrave/CloudCost-AI-Smart-AWS-Cost-Optimization-Assistant",
        bgColor: "#050505",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        technologies: ["AWS Lambda", "Python", "Gemini API", "CloudWatch"],
      },
      {
        title: "BloodConnect Serverless",
        link: "https://github.com/tejasssuthrave/BloodConnect-Serverless-Blood-Donation-Alert-System",
        bgColor: "#050505",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
        technologies: ["AWS Lambda", "SNS", "DynamoDB", "Python"],
      },
      {
        title: "Serverless Food Ordering",
        link: "https://github.com/tejasssuthrave/Serverless-Food-Ordering-App-Using-AWS",
        bgColor: "#050505",
        image: "https://tse2.mm.bing.net/th/id/OIP.VXZkydhp6kdozVdKgjoGuAHaEi?rs=1&pid=ImgDetMain&o=7&rm=3",
        technologies: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
      },
      {
        title: "EC2 AutoPark",
        link: "https://github.com/tejasssuthrave/EC2-AutoPark-AWS-EC2-Cost-Optimization-Automation",
        bgColor: "#050505",
        image: "https://tse4.mm.bing.net/th/id/OIP.a-ICu98pGswahpO8BOfw2wHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
        technologies: ["AWS Lambda", "Python", "EventBridge", "EC2"],
      },
      {
        title: "Linux Secure File Management",
        link: "https://github.com/tejasssuthrave/Linux-Secure-File-Management-Access-Control-System",
        bgColor: "#050505",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
        technologies: ["Linux", "Shell Scripting", "ACL", "Security"],
      },
      {
        title: "Serverless File Upload Notification",
        link: "https://github.com/tejasssuthrave/Serverless-File-Upload-Notification-System",
        bgColor: "#050505",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
        technologies: ["AWS S3", "Lambda", "SES", "Python"],
      },
    ],
    [] 
  );

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-rotation
  React.useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section
      id="projects"
      className="relative font-sans py-12 md:py-20 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Section Title */}
        <motion.div
          className="relative z-10 mb-10 md:mb-14 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 w-fit">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">06</span>
            <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative z-10 flex items-center justify-center gap-4">
          {/* Previous button */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Carousel container */}
          <div className="relative w-full flex-1 overflow-hidden">
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[600px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 w-full h-full"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                >
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full group block"
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-[var(--accent)]/30 transition-all duration-300">
                      {/* Background image */}
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                          {projects[currentIndex].title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {projects[currentIndex].technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-[var(--accent)]/20 text-[var(--accent-light)] border border-[var(--accent)]/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-white text-sm font-mono">View on GitHub →</div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Next button */}
          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Carousel indicators */}
        <motion.div
          className="relative z-10 mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[var(--accent)]"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </motion.div>

        {/* View all projects link */}
        <motion.div
          className="relative z-10 mt-10 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://github.com/tejasssuthrave"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 text-sm"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
