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

const consultationTopics = [
  {
    id: "project-consultation",
    icon: "🚀",
    title: "Project Consultation",
    description: "Discuss your project ideas and get expert advice",
  },
  {
    id: "code-review",
    icon: "👀",
    title: "Code Review",
    description: "Get feedback on your code and best practices",
  },
  {
    id: "career-advice",
    icon: "💼",
    title: "Career Advice",
    description: "Guidance on your development career path",
  },
  {
    id: "learning-resources",
    icon: "📚",
    title: "Learning Resources",
    description: "Recommendations for learning paths and tools",
  },
  {
    id: "collaboration",
    icon: "🤝",
    title: "Collaboration",
    description: "Explore partnership or collaboration opportunities",
  },
  {
    id: "general-inquiry",
    icon: "💬",
    title: "General Inquiry",
    description: "Any other questions or topics",
  },
];

export default function ConsultationPage() {
  const navigate = useNavigate();
  const INSTAGRAM_URL = "https://www.instagram.com/studioby_aamna/";
  const [selectedTopic, setSelectedTopic] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedTopic || !formData.name || !formData.message) {
      alert("Please fill in your name, message, and consultation topic.");
      return;
    }

    // Redirect users to Instagram for all consultation requests
    window.open(INSTAGRAM_URL, "_blank");

    // Reset form
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSelectedTopic("");
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Back button */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-20 left-4 md:left-10 px-6 py-2 text-accent-700 dark:text-accent-400 hover:text-accent-900 dark:hover:text-accent-300 font-semibold transition z-40"
      >
        ← Back to Home
      </motion.button>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/20 dark:bg-accent-500/15 rounded-full blur-3xl"
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
          className="text-center mb-16 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get <span className="text-accent-600 dark:text-accent-400">Expert Advice</span>
          </h1>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mx-auto"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Looking for guidance? Whether you need project consultation, code review, or career advice, I'm here to help you grow and succeed!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Topic Selection */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {consultationTopics.map((topic) => (
              <motion.div
                key={topic.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedTopic(topic.id)}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition duration-300 ${
                  selectedTopic === topic.id
                    ? "border-accent-600 dark:border-purple-400 bg-accent-100 dark:bg-accent-950/40"
                    : "border-accent-300 dark:border-accent-800 bg-accent-50 dark:bg-accent-950/20 hover:border-purple-400 dark:hover:border-accent-600"
                }`}
              >
                <p className="text-5xl mb-3">{topic.icon}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {topic.description}
                </p>
                {selectedTopic === topic.id && (
                  <div className="mt-4 inline-block px-3 py-1 bg-purple-600 dark:bg-accent-500 text-white rounded-full text-sm font-semibold">
                    ✓ Selected
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-linear-to-br from-purple-50 dark:from-purple-950/30 to-white dark:to-[#0F0F0F] border border-accent-300 dark:border-accent-800 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {selectedTopic
                ? consultationTopics.find((t) => t.id === selectedTopic)?.title
                : "Select a Topic to Continue"}
            </h2>

            {selectedTopic && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white dark:bg-black/30 border border-accent-300 dark:border-accent-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Your Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white dark:bg-black/30 border border-accent-300 dark:border-accent-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your query or problem in detail..."
                    rows="6"
                    className="w-full px-4 py-3 bg-white dark:bg-black/30 border border-accent-300 dark:border-accent-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4"
                >
                  <motion.button
                    type="submit"
                    disabled={submitted}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 123, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 bg-purple-600 dark:bg-accent-500 text-white rounded-lg font-bold text-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition disabled:opacity-50"
                  >
                    {submitted ? "Sent! ✓" : "Send Request →"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => {
                      setSelectedTopic("");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-6 py-4 border-2 border-accent-300 dark:border-accent-800 text-accent-700 dark:text-accent-300 rounded-lg font-semibold hover:bg-accent-50 dark:hover:bg-accent-950/30 transition"
                  >
                    Reset
                  </motion.button>
                </motion.div>
              </form>
            )}

            {!selectedTopic && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-600 dark:text-gray-400 py-8"
              >
                Please select a consultation topic above to get started
              </motion.p>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-white dark:bg-black/20 border border-accent-200 dark:border-accent-800 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-accent-600 dark:text-accent-400">1</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Select Topic</h4>
                    <p className="text-gray-700 dark:text-gray-300">Choose the type of consultation you need.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-accent-600 dark:text-accent-400">2</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fill Details</h4>
                    <p className="text-gray-700 dark:text-gray-300">Provide your information and describe your query.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-accent-600 dark:text-accent-400">3</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Get Help</h4>
                    <p className="text-gray-700 dark:text-gray-300">I'll review and get back to you promptly.</p>
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
          transition={{ delay: 0.7 }}
          className="text-center text-gray-600 dark:text-gray-400 mt-16"
        >
          © 2024 AmnaAwan. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
}
