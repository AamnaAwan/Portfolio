import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "zeem",
    title: "Zeem Organics",
    description: "E-commerce platform for organic products",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Firestore", "Firebase Auth", "Tailwind CSS"],
    icon: "🌿",
    link: "https://zeemorganics.com",
  },
  {
    id: "invoice",
    title: "Invoxia",
    description: "Invoice SaaS for creating, previewing, and exporting polished invoices",
    category: "Full-Stack",
    tags: ["React", "Vite", "Tailwind CSS", "Firebase", "PDF Export", "React Router"],
    icon: "📄",
    link: "https://invoice-7d889.web.app",
  },
  {
    id: "photocopy",
    title: "Photocopy Solutions",
    description: "Responsive frontend website for a local photocopy and print service",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    icon: "🖨️",
    link: "https://photocopy-solutions.netlify.app",
  },
  {
    id: "foodcoach",
    title: "Food Coach",
    description: "Restaurant website designed to showcase menus, reservations, and culinary services",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS", "Animations", "UI/UX Design"],
    icon: "🍽️",
    link: "https://foodcoach.food",
  },
];

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

  return (
    <section id="projects" className="py-32 px-4 md:px-10 bg-white dark:bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
            Showcasing my recent work and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-purple-100 dark:from-purple-950/20 via-transparent to-purple-50 dark:to-purple-950/10 border border-purple-300 dark:border-purple-800 rounded-2xl p-8 hover:border-purple-500 dark:hover:border-purple-500 transition duration-300 overflow-hidden">
                {/* Animated background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-200/30 dark:from-purple-600/20 to-transparent"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl">{project.icon}</span>
                    <span className="px-3 py-1 bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 text-sm rounded-lg border border-purple-300 dark:border-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-semibold text-lg"
                    >
                      View Case Study
                      <span className="text-2xl">→</span>
                    </motion.div>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition"
                      >
                        Visit Site →
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}