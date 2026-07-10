import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

export default function Hero() {
  const navigate = useNavigate();

  const handleViewWork = () => {
    // Scroll to projects section
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetInTouch = () => {
    navigate("/contact");
  };

  const handleConsultation = () => {
    navigate("/consultation");
  };
  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 md:px-10 py-20 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-accent-200/15 dark:bg-accent-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-accent-200/10 dark:bg-accent-600/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <p className="text-accent-600 dark:text-accent-400 font-semibold text-sm md:text-base mb-4 tracking-widest uppercase">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
        >
          Building{" "}
          <span className="text-accent-600 dark:text-accent-400 drop-shadow-lg">
            premium products
          </span>
          {" "}with precision
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-2"
        >
          React, Node, Firebase. Focused on real-world solutions, smooth interactions, and production reliability.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 justify-center my-8"
        >
          {["React", "Node.js", "Firebase", "Tailwind", "Framer Motion"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-300 rounded-full text-xs md:text-sm font-medium border border-accent-200 dark:border-accent-800"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-4 my-12 max-w-2xl mx-auto"
        >
          {[
            { icon: "🎯", title: "Real Products", desc: "Live solutions in production" },
            { icon: "🐛", title: "Debugging", desc: "Production-ready confidence" },
            { icon: "✨", title: "Polish", desc: "Smooth, intentional design" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-4 rounded-lg bg-accent-50/50 dark:bg-accent-950/20 border border-accent-200 dark:border-accent-800 hover:border-accent-300 dark:hover:border-accent-700 transition"
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</p>
              <p className="text-xs text-gray-700 dark:text-gray-400 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.button
            onClick={handleViewWork}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 bg-accent-600 dark:bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-700 dark:hover:bg-accent-600 transition"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={handleGetInTouch}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-accent-600 dark:border-accent-400 text-accent-700 dark:text-accent-300 rounded-lg font-semibold hover:bg-accent-50 dark:hover:bg-accent-950/30 transition"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mt-16 text-sm text-gray-500 dark:text-gray-400"
        >
          ↓ Scroll to explore ↓
        </motion.div>
      </motion.div>
    </section>
  );
}