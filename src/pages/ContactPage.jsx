import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const INSTAGRAM_URL = "https://www.instagram.com/studioby_aamna/";

  const contactMethods = [
    { icon: "📸", label: "Instagram", value: "@studioby_aamna", link: INSTAGRAM_URL },
    { icon: "💼", label: "LinkedIn", value: "Amna Awan", link: "https://www.linkedin.com/in/amna-awan-2608sam" },
    { icon: "🐙", label: "GitHub", value: "AamnaAwan", link: "https://github.com/AamnaAwan" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      window.open(INSTAGRAM_URL, "_blank");
      setSuccessMessage("✅ Please send your message via Instagram DM to @studioby_aamna.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccessMessage(""), 7000);
    } catch {
      setErrorMessage("❌ Unable to open Instagram. Please visit https://www.instagram.com/studioby_aamna/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Back button */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-20 left-4 md:left-10 px-6 py-2 text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-semibold transition z-40"
      >
        ← Back to Home
      </motion.button>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-300/15 dark:bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="text-purple-600 dark:text-purple-400">Connect</span>
          </h1>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mx-auto"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Get in touch and let's create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -10 }}
                className="group text-center"
              >
                <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-300 dark:border-purple-800 rounded-2xl p-8 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition duration-300">
                  <p className="text-6xl mb-4">{method.icon}</p>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">
                    {method.label}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-linear-to-r from-purple-200 dark:from-purple-950/40 to-purple-100 dark:to-purple-900/20 border border-purple-400 dark:border-purple-800 rounded-3xl p-12 md:p-16 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              Send me a Message on Instagram
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto text-center">
              After submitting, you'll be directed to Instagram to send a DM to @studioby_aamna for all inquiries.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* Status Messages */}
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-800 dark:text-green-200 px-6 py-4 rounded-lg"
                >
                  {successMessage}
                </motion.div>
              )}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-800 dark:text-red-200 px-6 py-4 rounded-lg"
                >
                  {errorMessage}
                </motion.div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black/30 border border-purple-300 dark:border-purple-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black/30 border border-purple-300 dark:border-purple-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-black/30 border border-purple-300 dark:border-purple-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-12 py-4 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-bold text-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition cursor-pointer shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Opening Instagram..." : "Open Instagram DM →"}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-20 bg-white dark:bg-black/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">⚡</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fast Response</h4>
                    <p className="text-gray-700 dark:text-gray-300">I typically respond within 24 hours to all inquiries.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">💡</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Creative Solutions</h4>
                    <p className="text-gray-700 dark:text-gray-300">I bring fresh ideas and innovative approaches to every project.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🎯</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Goal-Oriented</h4>
                    <p className="text-gray-700 dark:text-gray-300">Your success is my success. I focus on delivering results.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🤝</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Collaboration</h4>
                    <p className="text-gray-700 dark:text-gray-300">I believe in open communication and teamwork throughout the project.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-600 dark:text-gray-400 mt-16"
        >
          © 2024 AmnaAwan. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
}
