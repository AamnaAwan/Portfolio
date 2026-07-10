import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-32 px-4 md:px-10 relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent-200/20 dark:bg-accent-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to <span className="text-accent-600 dark:text-accent-400">build together</span>?
          </h2>
          <div className="w-20 h-1 bg-accent-600 dark:bg-accent-400 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Got a project in mind? Let's create something great.
          </p>
          
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-accent-600 dark:bg-accent-500 text-white rounded-lg font-bold text-lg hover:bg-accent-700 dark:hover:bg-accent-600 transition cursor-pointer shadow-lg hover:shadow-xl"
          >
            Get In Touch →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
