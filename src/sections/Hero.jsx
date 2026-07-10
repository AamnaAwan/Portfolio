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
    <section id="hero" className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 md:px-10 py-20 overflow-hidden bg-white dark:bg-[#0F0F0F]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200/15 dark:bg-purple-400/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg md:text-xl mb-4 tracking-wide">
            Welcome to my digital space
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
        >
          I craft{" "}
          <span className="text-purple-600 dark:text-purple-400 drop-shadow-[0_0_30px_rgba(168,123,255,0.4)] dark:drop-shadow-[0_0_30px_rgba(168,123,255,0.3)]">
            stunning digital experiences
          </span>
          {" "}that drive results
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-2"
        >
          Frontend-focused Full Stack Developer building real-world products with polished UI/UX,
          smooth animations, and production-ready reliability.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center my-8"
        >
          {["React", "Tailwind CSS", "Framer Motion", "Firebase", "Production Debugging"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm md:text-base font-medium border border-purple-300 dark:border-purple-600"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 my-12 max-w-2xl mx-auto"
        >
          {[
            { icon: "🎯", title: "Real-World Products", desc: "Building solutions that solve actual problems" },
            { icon: "🐛", title: "Production Debugging", desc: "Handling deployment issues with confidence" },
            { icon: "✨", title: "Polished UI/UX", desc: "Smooth animations & engaging interactions" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-4 rounded-lg bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800"
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</p>
              <p className="text-xs text-gray-700 dark:text-gray-400 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12 flex-wrap"
        >
          <motion.button
            onClick={handleViewWork}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 123, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition cursor-pointer"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={handleGetInTouch}
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 123, 255, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 rounded-lg font-semibold text-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition cursor-pointer"
          >
            Get In Touch
          </motion.button>
          <motion.button
            onClick={handleConsultation}
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 123, 255, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-purple-400 dark:border-purple-500 text-purple-700 dark:text-purple-300 rounded-lg font-semibold text-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition cursor-pointer bg-purple-50/30 dark:bg-purple-950/20"
          >
            Get Expert Advice
          </motion.button>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mt-16 text-sm text-gray-500 dark:text-gray-400"
        >
          ↓ Scroll to explore my work ↓
        </motion.div>
      </motion.div>
    </section>
  );
}