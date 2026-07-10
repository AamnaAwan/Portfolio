import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function Contact() {
  const navigate = useNavigate();

  const contactMethods = [
    { icon: "📸", label: "Instagram", value: "@studioby_aamna", link: "https://www.instagram.com/studioby_aamna/" },
    { icon: "💼", label: "LinkedIn", value: "Amna Awan", link: "https://www.linkedin.com/in/amna-awan-2608sam" },
    { icon: "🐙", label: "GitHub", value: "AamnaAwan", link: "https://github.com/AamnaAwan" },
    { icon: "💡", label: "Consultation", value: "Get Expert Advice", action: "consultation" },
  ];

  return (
    <section id="contact" className="py-32 px-4 md:px-10 relative overflow-hidden bg-white dark:bg-[#0F0F0F]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Work <span className="text-purple-600 dark:text-purple-400">Together</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Have an exciting project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => method.action && navigate(`/${method.action}`)}
              className={method.action ? "cursor-pointer" : ""}
            >
              {method.link ? (
                <motion.a
                  href={method.link}
                  target={method.link.startsWith("mailto:") ? undefined : "_blank"}
                  rel={method.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group text-center block"
                >
                  <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-300 dark:border-purple-800 rounded-xl p-8 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition duration-300">
                    <p className="text-5xl mb-4">{method.icon}</p>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">
                      {method.label}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group text-center block"
                >
                  <div className="bg-gradient-to-br from-purple-100 dark:from-purple-900/40 to-purple-50 dark:to-purple-950/20 border border-purple-400 dark:border-purple-600 rounded-xl p-8 hover:border-purple-600 dark:hover:border-purple-500 hover:bg-purple-200 dark:hover:bg-purple-900/60 transition duration-300">
                    <p className="text-5xl mb-4">{method.icon}</p>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">
                      {method.label}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition font-semibold">
                      {method.value}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-200 dark:from-purple-950/40 to-purple-100 dark:to-purple-900/20 border border-purple-400 dark:border-purple-800 rounded-2xl p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to start your next project?
          </h3>
          <p className="text-gray-800 dark:text-gray-200 mb-8 text-lg">
            I'm currently available for freelance work and exciting full-time opportunities.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://www.instagram.com/studioby_aamna/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-bold text-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition cursor-pointer shadow-lg hover:shadow-xl"
            >
              DM on Instagram →
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 dark:text-gray-400 mt-12 text-sm"
        >
          © 2024 AmnaAwan. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
