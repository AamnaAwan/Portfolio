import { motion } from "framer-motion";

const expertise = [
  {
    icon: "💻",
    title: "Frontend Development",
    description: "Building interactive, responsive UIs with modern technologies",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design", "Dynamic Rendering"]
  },
  {
    icon: "🎨",
    title: "UI/UX & Animations",
    description: "Crafting polished interfaces with smooth micro-interactions",
    skills: ["Tailwind CSS", "Framer Motion", "Scroll Animations", "Mobile Optimization", "Reveal Effects"]
  },
  {
    icon: "🔥",
    title: "Backend & Database",
    description: "Building robust data layers and real-time functionality",
    skills: ["Firebase", "Firestore (CRUD)", "Authentication", "Real-time Data", "Node.js/Express Basics"]
  },
  {
    icon: "🚀",
    title: "Deployment & DevOps",
    description: "Handling production issues with real-world experience",
    skills: ["Netlify", "Render", "Build Issue Resolution", "API Connection Fixes", "Production Debugging"]
  },
  {
    icon: "🧩",
    title: "Data & Integration",
    description: "Managing async operations and data persistence",
    skills: ["API Integration", "Async Data Fetching", "LocalStorage Usage", "State Management"]
  },
  {
    icon: "🛠️",
    title: "Problem Solving",
    description: "Debugging real-world production issues with confidence",
    skills: ["Deployment Bugs", "Backend Errors", "Runtime Issues", "Production Troubleshooting"]
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-32 px-4 md:px-10 bg-gradient-to-b from-white via-accent-50/50 dark:from-slate-900 dark:via-accent-950/5 to-white dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-accent-600 dark:text-accent-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent-600 dark:bg-accent-400 rounded-full"></div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="space-y-4 text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            <p>
              I learned development by <span className="text-accent-600 dark:text-accent-400 font-semibold">building real products</span> — debugging broken deployments, fixing API errors, handling production issues. That's where real learning happens.
            </p>
            <p>
              I create <span className="text-accent-600 dark:text-accent-400 font-semibold">polished, interactive interfaces</span> with smooth animations, paired with robust backend work using Firebase and Node.js. Full-stack end-to-end.
            </p>
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Core Expertise</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-accent-950/20 border border-accent-200 dark:border-accent-800 rounded-xl p-6 hover:border-accent-500 dark:hover:border-accent-500 transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{area.icon}</span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{area.title}</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent-100 dark:bg-accent-900/40 text-accent-800 dark:text-accent-200 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
