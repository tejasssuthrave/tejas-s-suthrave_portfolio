import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import Avatar from "../assets/avatar.png";

const FORMSPREE_URL = "https://formspree.io/f/xjkwqwne";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const validateForm = () => {
    const required = ["name", "email", "idea"];
    const newErrors = {};

    required.forEach((f) => {
      if (!formData[f].trim()) {
        newErrors[f] = "Fill this field";
      }
    });

    if (formData.idea.trim() && formData.idea.trim().length < 20) {
      newErrors.idea = "Idea must be at least 20 characters long";
    }

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    try {
      const form = e.target;
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", idea: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Formspree Error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 font-sans"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center md:items-stretch gap-12">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-6 sm:gap-8"
        >
      <div className="mb-6 inline-flex items-center gap-2 w-fit">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">08</span>
            <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 sm:mb-12">
            Let's Build <br />
            <span className="text-[var(--accent-light)]">Together</span>
          </h2>

          <div className="relative w-full flex-1 flex justify-center md:justify-start items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-4/5 sm:w-3/4 md:w-full"
            >
              <img
                src={Avatar}
                alt="Avatar"
                className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.3)] hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute -top-4 -left-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-l border-indigo-500/30"></div>
              <div className="absolute -bottom-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-r border-rose-500/30"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 relative overflow-hidden group flex flex-col justify-center hover:border-[var(--accent)]/30 hover:bg-white/8 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
            Send Message
          </h3>

          <form className="flex flex-col gap-5 sm:gap-6 relative z-10 w-full" onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-white/60">
                Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 sm:p-4 bg-white/5 border-b text-sm sm:text-base ${
                  errors.name ? "border-rose-500" : "border-white/10 focus:border-[var(--accent)]"
                } text-white focus:outline-none transition-colors`}
              />
              {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-white/60">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 sm:p-4 bg-white/5 border-b text-sm sm:text-base ${
                  errors.email ? "border-rose-500" : "border-white/10 focus:border-[var(--accent)]"
                } text-white focus:outline-none transition-colors`}
              />
              {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-white/60">
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="idea"
                rows={4}
                placeholder="Share your ideas or feedback..."
                value={formData.idea}
                onChange={handleChange}
                className={`p-3 sm:p-4 bg-white/5 border-b text-sm sm:text-base ${
                  errors.idea ? "border-rose-500" : "border-white/10 focus:border-[var(--accent)]"
                } text-white focus:outline-none resize-none transition-colors`}
              />
              {errors.idea && <p className="text-rose-500 text-xs mt-1">{errors.idea}</p>}
            </div>

            {/* Status */}
            {status && (
              <p
                className={`text-xs sm:text-sm font-mono ${
                  status === "success"
                    ? "text-emerald-400"
                    : status === "error"
                    ? "text-rose-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message sent successfully ✅"
                  : "Something went wrong ❌"}
              </p>
            )}

            {/* Button */}
            <button
              disabled={status === "sending"}
              type="submit"
              className="mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}