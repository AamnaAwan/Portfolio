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

const stats = [
  { icon: "🎯", number: "Real-World", label: "Products Built" },
  { icon: "🐛", number: "Production", label: "Issues Debugged" },
  { icon: "✨", number: "Polished", label: "UI/UX Focus" },
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
    <section id="about" className="py-32 px-4 md:px-10 bg-gradient-to-b from-white via-purple-50 dark:from-[#0F0F0F] dark:via-purple-950/10 to-white dark:to-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-purple-600 dark:text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Frontend-Focused Full Stack Developer
          </h3>
          <div className="space-y-4 text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            <p>
              I didn't learn development by just watching tutorials — I learned it by <span className="text-purple-600 dark:text-purple-400 font-semibold">building things that actually broke</span>. Most of what I know comes from working on real projects, where I had to figure out everything from UI design to deployment issues on my own.
            </p>
            <p>
              Things didn't work the first time (or the fifth), but that's where I got better — debugging errors, fixing broken builds, and understanding how things actually run in production. Each failure taught me something I couldn't learn from any tutorial.
            </p>
            <p>
              I enjoy creating <span className="text-purple-600 dark:text-purple-400 font-semibold">clean, interactive interfaces</span> and adding small details like animations and smooth transitions that make a product feel alive. At the same time, I've worked with backend tools like Firebase to handle real data, authentication, and app logic.
            </p>
            <p>
              Right now, I'm focused on improving my full-stack skills and building projects that are not just functional, but feel <span className="text-purple-600 dark:text-purple-400 font-semibold">polished and real</span> to use.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gradient-to-br from-purple-100 dark:from-purple-900/30 to-purple-50 dark:to-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition"
            >
              <p className="text-5xl mb-3">{stat.icon}</p>
              <p className="text-xl md:text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">{stat.number}</p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
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
                className="bg-white dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 hover:border-purple-500 dark:hover:border-purple-500 transition"
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
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-100 dark:from-purple-900/30 to-purple-50 dark:to-purple-950/20 border border-purple-300 dark:border-purple-700 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span>⭐</span> What Sets Me Apart
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Production-Ready Thinking</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">I don't just build features — I build systems that work in production</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Debugging Skills</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Real experience fixing deployment bugs and backend connection errors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Polished UI/UX</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Smooth animations and micro-interactions that delight users</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Full Stack Capability</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Handle frontend, backend, and deployment — end-to-end solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Problem Solver</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Comfortable tackling unfamiliar errors and finding solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Continuous Learner</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Always exploring new technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
