import { useState } from "react";
import { motion } from "framer-motion";
import resumeImage from "../assets/resume.jpg";
import {
  FaBolt,
  FaCloud,
  FaCode,
  FaFigma,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaRocket,
  FaServer,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const skillPills = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Firebase", icon: FaCloud },
  { name: "UI Systems", icon: FaPalette },
  { name: "Motion", icon: FaBolt },
  { name: "Design", icon: FaFigma },
  { name: "APIs", icon: FaServer },
  { name: "Performance", icon: FaRocket },
  { name: "Full-stack", icon: FaCode },
];

export default function Hero() {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleViewWork = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetInTouch = () => {
    navigate("/contact");
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleOpenResumeImage = () => {
    window.open(resumeImage, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#120E1E] px-4 py-20 text-center sm:px-5 sm:py-24 md:px-10 md:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-20 right-8 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
          className="absolute bottom-16 left-8 h-72 w-72 rounded-full bg-[#E8C468]/20 blur-3xl"
        />
        <div className="absolute inset-x-0 top-[32%] h-px bg-gradient-to-r from-transparent via-[#E8C468]/50 to-transparent" />
        <div className="absolute inset-x-10 top-[38%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={itemVariants}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D8C7FF] backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8C468] shadow-[0_0_14px_rgba(232,196,104,0.9)]" />
            Product-minded full-stack developer
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mx-auto mb-6 max-w-3xl font-heading text-4xl font-bold leading-[0.95] text-[#F5F3F7] sm:text-5xl lg:text-7xl"
        >
          I design and build
          <span className="mt-2 block bg-gradient-to-r from-[#F5F3F7] via-[#E8C468] to-[#CDB8FF] bg-clip-text text-transparent">
            calm, high-impact digital experiences.
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mx-auto mb-10 flex flex-wrap items-center justify-center gap-3 px-1 sm:px-0"
        >
          {skillPills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: [0.78, 1, 0.78],
                  y: [0, -5, 0],
                  scale: [0.98, 1.03, 0.98],
                }}
                transition={{
                  duration: 3.6 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hero-skill-bubble flex items-center gap-2 rounded-full border border-white/10 bg-[#171126]/80 px-3.5 py-2 text-sm text-[#F5F3F7] shadow-[0_0_25px_rgba(139,92,246,0.12)] backdrop-blur"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2A2038] text-[#E8C468] shadow-[0_0_18px_rgba(232,196,104,0.2)]">
                  <Icon className="text-sm" />
                </span>
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mx-auto flex w-full max-w-3xl flex-col flex-wrap justify-center gap-3 sm:flex-row"
        >
          <motion.button
            onClick={handleViewWork}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group hero-suggestion-card flex w-full items-center justify-between rounded-[26px] border border-white/10 bg-[#171126]/85 px-5 py-4 text-left backdrop-blur-xl transition sm:min-w-[220px] sm:w-auto"
          >
            <span>
              <span className="block text-sm font-semibold text-[#F5F3F7]">Browse the work</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-[#CDB8FF]">Selected projects</span>
            </span>
            <span className="text-xl text-[#E8C468] transition group-hover:translate-x-1">↗</span>
          </motion.button>

          <motion.button
            onClick={handleGetInTouch}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group hero-suggestion-card flex w-full items-center justify-between rounded-[26px] border border-[#8B5CF6]/30 bg-[#1B1428]/80 px-5 py-4 text-left backdrop-blur-xl transition sm:min-w-[220px] sm:w-auto"
          >
            <span>
              <span className="block text-sm font-semibold text-[#F5F3F7]">Start a conversation</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-[#E8C468]">Available for new ideas</span>
            </span>
            <span className="text-xl text-[#CDB8FF] transition group-hover:translate-x-1">→</span>
          </motion.button>

          <motion.button
            onClick={handleOpenResume}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group hero-suggestion-card flex w-full items-center justify-between rounded-[26px] border border-[#E8C468]/25 bg-[#1A1422]/90 px-5 py-4 text-left backdrop-blur-xl transition sm:min-w-[220px] sm:w-auto"
          >
            <span>
              <span className="block text-sm font-semibold text-[#F5F3F7]">See my resume</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-[#E8C468]">Quick snapshot</span>
            </span>
            <span className="text-xl text-[#E8C468] transition group-hover:translate-x-1">↓</span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mt-14 text-sm uppercase tracking-[0.36em] text-[#B8B0C4]"
        >
          ↓ Scroll to explore ↓
        </motion.div>
      </motion.div>

      {isResumeOpen && (
        <div className="fixed inset-0 z-[60] flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-[#06040D]/90 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6" onClick={handleCloseResume}>
          <div className="relative flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#120E1E] shadow-[0_30px_90px_rgba(0,0,0,0.45)]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E8C468]">Resume preview</p>
                <p className="text-sm text-[#B8B0C4]">Open the image resume in full view</p>
              </div>
              <button
                onClick={handleCloseResume}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#F5F3F7] transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-[#f7f5fb] p-2 sm:p-3 md:p-5">
              <img
                src={resumeImage}
                alt="Resume preview"
                className="mx-auto h-auto max-h-[calc(100dvh-176px)] w-full max-w-4xl rounded-[20px] border border-black/10 bg-white object-contain"
              />
            </div>
            <div className="border-t border-white/10 bg-[#140F24] px-4 py-3 md:px-5">
              <button
                onClick={handleOpenResumeImage}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.2)] transition hover:scale-[1.02]"
              >
                Open image
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}