import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiFramer,
  SiReactrouter,
} from "react-icons/si";
import { FaFire, FaLeaf, FaFileInvoiceDollar, FaUtensils, FaBrain, FaLock, FaBolt, FaCloud, FaCss3Alt } from "react-icons/fa";
import zeemorganicsImage from "../assets/zeemorganics.png";
import invoxiaImage from "../assets/invoxia.png";
import photocopySolutionsImage from "../assets/photocopy solutions.png";
import foodcoachImage from "../assets/foodcoach.png";

const projects = [
  {
    id: "zeem",
    title: "Zeem Organics",
    description: "A premium organic storefront built to feel calm, trust-rich, and conversion-ready.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Firestore", "Firebase Auth", "Tailwind CSS"],
    icon: "🌿",
    image: zeemorganicsImage,
    imageAlt: "Screenshot of Zeem Organics",
    link: "https://zeemorganics.com",
    tagline: "Organic essentials, delivered with calm clarity.",
    accent: {
      shell: "from-[#0F2A1F] via-[#1D4D31] to-[#7A9B2B]",
      border: "border-[#B5E34D]/45",
      badge: "border-[#F4C542]/40 bg-[#142418]/90 text-[#F4C542]",
      chip: "border-[#B5E34D]/35 bg-[#B5E34D]/12 text-[#EAF7D3]",
      buttonPrimary: "bg-[#B5E34D] text-[#10231A] hover:bg-[#D6F36F]",
      buttonSecondary: "border-[#F4C542]/40 bg-[#F4C542]/10 text-[#F4C542] hover:bg-[#F4C542]/20",
      glow: "shadow-[0_24px_80px_-28px_rgba(181,227,77,0.42)]",
    },
  },
  {
    id: "invoice",
    title: "Invoxia",
    description: "A polished invoice workflow with live preview, exporting, and saved client records.",
    category: "Full-Stack",
    tags: ["React", "Vite", "Tailwind CSS", "Firebase", "PDF Export", "React Router"],
    icon: "📄",
    image: invoxiaImage,
    imageAlt: "Screenshot of Invoxia",
    link: "https://invoice-7d889.web.app",
    tagline: "Fast, polished invoicing for modern small businesses.",
    accent: {
      shell: "from-[#06121F] via-[#0F2B3E] to-[#3B82F6]",
      border: "border-[#7DD3FC]/40",
      badge: "border-[#8B5CF6]/35 bg-[#0D1325]/90 text-[#C4B5FD]",
      chip: "border-[#8B5CF6]/35 bg-[#8B5CF6]/12 text-[#EDE9FE]",
      buttonPrimary: "bg-[#8B5CF6] text-white hover:bg-[#A78BFA]",
      buttonSecondary: "border-[#C4B5FD]/35 bg-[#C4B5FD]/10 text-[#C4B5FD] hover:bg-[#C4B5FD]/20",
      glow: "shadow-[0_24px_80px_-28px_rgba(139,92,246,0.38)]",
    },
  },
  {
    id: "photocopy",
    title: "Photocopy Solutions",
    description: "A sharp local business site focused on service clarity, trust, and fast contact.",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    icon: "🖨️",
    image: photocopySolutionsImage,
    imageAlt: "Screenshot of Photocopy Solutions",
    link: "https://photocopy-solutions.netlify.app",
    tagline: "A sharp local service site built for quick trust and easy contact.",
    accent: {
      shell: "from-[#05070B] via-[#111827] to-[#1E3A8A]",
      border: "border-[#60A5FA]/35",
      badge: "border-[#8DB8FF]/35 bg-[#07111F]/90 text-[#8DB8FF]",
      chip: "border-[#60A5FA]/30 bg-[#60A5FA]/12 text-[#EAF3FF]",
      buttonPrimary: "bg-[#60A5FA] text-[#07111F] hover:bg-[#93C5FD]",
      buttonSecondary: "border-[#8DB8FF]/35 bg-[#8DB8FF]/10 text-[#8DB8FF] hover:bg-[#8DB8FF]/20",
      glow: "shadow-[0_24px_80px_-28px_rgba(96,165,250,0.35)]",
    },
  },
  {
    id: "foodcoach",
    title: "Food Coach",
    description: "A warm, immersive restaurant experience designed to invite exploration and booking.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS", "Animations", "UI/UX Design"],
    icon: "🍽️",
    image: foodcoachImage,
    imageAlt: "Screenshot of Food Coach",
    link: "https://foodcoach.food",
    tagline: "Warm hospitality, presented through a memorable digital experience.",
    accent: {
      shell: "from-[#1B0F0C] via-[#4A1F1A] to-[#D97706]",
      border: "border-[#FBBF24]/35",
      badge: "border-[#FB7185]/35 bg-[#1F130D]/90 text-[#FECACA]",
      chip: "border-[#FB7185]/35 bg-[#FB7185]/12 text-[#FFE4E6]",
      buttonPrimary: "bg-[#FB7185] text-white hover:bg-[#F43F5E]",
      buttonSecondary: "border-[#FECACA]/35 bg-[#FECACA]/10 text-[#FECACA] hover:bg-[#FECACA]/20",
      glow: "shadow-[0_24px_80px_-28px_rgba(251,113,133,0.38)]",
    },
  },
];

const tagIcons = {
  React: <SiReact className="h-3.5 w-3.5" />,
  "Node.js": <SiNodedotjs className="h-3.5 w-3.5" />,
  Firestore: <FaFire className="h-3.5 w-3.5" />,
  "Firebase Auth": <FaLock className="h-3.5 w-3.5" />,
  "Tailwind CSS": <SiTailwindcss className="h-3.5 w-3.5" />,
  Vite: <SiVite className="h-3.5 w-3.5" />,
  Firebase: <SiFirebase className="h-3.5 w-3.5" />,
  "PDF Export": <FaFileInvoiceDollar className="h-3.5 w-3.5" />,
  "React Router": <SiReactrouter className="h-3.5 w-3.5" />,
  HTML: <SiHtml5 className="h-3.5 w-3.5" />,
  CSS: <FaCss3Alt className="h-3.5 w-3.5" />,
  JavaScript: <SiJavascript className="h-3.5 w-3.5" />,
  Netlify: <SiNetlify className="h-3.5 w-3.5" />,
  Animations: <SiFramer className="h-3.5 w-3.5" />,
  "UI/UX Design": <FaBrain className="h-3.5 w-3.5" />,
  "Full-Stack": <FaBolt className="h-3.5 w-3.5" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  const handleCaseStudy = (event, projectId) => {
    event.stopPropagation();
    setSelectedProject(null);
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="overflow-x-hidden bg-[#120E1E] px-4 py-16 sm:px-5 md:px-10 md:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-[#F5F3F7] sm:text-4xl md:text-6xl">
            Featured <span className="text-[#E8C468]">Projects</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-[#8B5CF6]"></div>
          <p className="mt-4 text-lg text-[#B8B0C4]">
            Real products, real impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              type="button"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openProject(project)}
              className="group text-left"
            >
              <div className={`relative overflow-hidden rounded-[2rem] border bg-gradient-to-br ${project.accent.shell} p-3 sm:p-4 ${project.accent.border} ${project.accent.glow} transition duration-300 hover:border-white/20`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className={`flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-[1.3rem] border ${project.accent.border} bg-[#140F24]/90 p-1 shadow-[0_10px_28px_rgba(0,0,0,0.25)] sm:h-28 sm:w-28 sm:max-w-none`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full rounded-[0.95rem] object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-full border border-dashed border-white/10 bg-[#171126]/80 text-sm text-[#E8C468]">
                        Preview
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className={`mb-2 inline-flex rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${project.accent.badge}`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#F5F3F7] transition group-hover:text-[#E8C468]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#D8C7FF]">
                      Tap to view expertise and quick links
                    </p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] flex items-center justify-center bg-[#05030A]/80 px-4 py-6 backdrop-blur-md"
              onClick={closeProject}
            >
              <motion.div
                initial={{ y: 24, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 18, opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#140F24] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:p-6"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-flex rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${selectedProject.accent.badge}`}>
                      {selectedProject.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-[#F5F3F7]">
                      {selectedProject.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#D8C7FF]">
                      {selectedProject.tagline}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeProject}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-[#D8C7FF] transition hover:bg-white/10"
                    aria-label="Close project details"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E8C468]">
                    Expertise used
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium ${selectedProject.accent.chip}`}
                      >
                        <span className="mr-1.5 flex items-center">{tagIcons[tag] ?? <FaLeaf className="h-3.5 w-3.5" />}</span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={(event) => handleCaseStudy(event, selectedProject.id)}
                    className={`min-h-[44px] w-full rounded-full px-5 py-2.5 text-sm font-semibold transition sm:w-auto ${selectedProject.accent.buttonPrimary}`}
                  >
                    Case Study
                  </button>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex min-h-[44px] w-full items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition sm:w-auto ${selectedProject.accent.buttonSecondary}`}
                    >
                      Visit Site ↗
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}