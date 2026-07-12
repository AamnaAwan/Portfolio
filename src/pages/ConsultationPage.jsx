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
  // Frontend and backend deploy separately. If the backend URL changes, update VITE_API_URL in the production env for the hosting site.
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [selectedTopic, setSelectedTopic] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTopic || !formData.name || !formData.email || !formData.message) {
      setErrorMessage("❌ Please fill in your name, email, message, and consultation topic.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const topicLabel = consultationTopics.find((topic) => topic.id === selectedTopic)?.title || "Consultation Request";
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Consultation: ${topicLabel}`,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to send your consultation request.");
      }

      setSuccessMessage(data.message || "Thanks! I'll get back to you as soon as I can.");
      setFormData({ name: "", email: "", message: "" });
      setSelectedTopic("");
    } catch (error) {
      console.error("Consultation error:", error);
      setErrorMessage(`❌ ${error.message || "Failed to send your request. Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#120E1E] text-[#F5F3F7] transition-colors duration-300">
      {/* Back button */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed left-3 top-4 z-40 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-[#140F24]/80 px-4 py-2 text-sm font-semibold text-[#F5F3F7] backdrop-blur transition hover:bg-[#1B1428] sm:left-4 sm:top-20 md:left-10"
      >
        ← Back to Home
      </motion.button>

      <div className="relative pb-20 pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 px-4 text-center sm:px-5"
        >
          <h1 className="mb-6 font-heading text-4xl font-bold sm:text-5xl md:text-7xl">
            Get <span className="text-[#E8C468]">Expert Advice</span>
          </h1>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#8B5CF6]"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#B8B0C4] sm:text-xl">
            Looking for guidance? Whether you need project consultation, code review, or career advice, I'm here to help you grow and succeed!
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          {/* Topic Selection */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {consultationTopics.map((topic) => (
              <motion.div
                key={topic.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedTopic(topic.id)}
                className={`cursor-pointer rounded-2xl border-2 p-6 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] transition duration-300 ${
                  selectedTopic === topic.id
                    ? "border-[#8B5CF6] bg-[#171126] shadow-[0_20px_55px_-24px_rgba(139,92,246,0.35)]"
                    : "border-white/10 bg-[#171126]/80 hover:border-[#8B5CF6]/50 hover:shadow-[0_20px_55px_-24px_rgba(139,92,246,0.2)]"
                }`}
              >
                <p className="text-5xl mb-3">{topic.icon}</p>
                <h3 className="text-xl font-bold text-[#F5F3F7] mb-2">
                  {topic.title}
                </h3>
                <p className="text-[#B8B0C4] text-sm">
                  {topic.description}
                </p>
                {selectedTopic === topic.id && (
                  <div className="mt-4 inline-block rounded-full bg-[#8B5CF6] px-3 py-1 text-sm font-semibold text-white">
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
            className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[linear-gradient(135deg,_rgba(23,17,38,0.98),_rgba(18,14,30,0.96))] p-6 shadow-[0_24px_70px_-30px_rgba(139,92,246,0.35)] sm:p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#F5F3F7]">
              {selectedTopic
                ? consultationTopics.find((t) => t.id === selectedTopic)?.title
                : "Select a Topic to Continue"}
            </h2>

            {selectedTopic && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-emerald-200"
                  >
                    {successMessage}
                  </motion.div>
                )}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-rose-200"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-lg font-semibold text-[#F5F3F7] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#140F24] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#F5F3F7] placeholder-[#B8B0C4]"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-lg font-semibold text-[#F5F3F7] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[#140F24] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#F5F3F7] placeholder-[#B8B0C4]"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-lg font-semibold text-[#F5F3F7] mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your query or problem in detail..."
                    rows="6"
                    className="w-full px-4 py-3 bg-[#140F24] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#F5F3F7] placeholder-[#B8B0C4] resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 123, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="min-h-[44px] w-full rounded-lg bg-[#8B5CF6] px-8 py-3.5 text-lg font-bold text-white shadow-[0_0_35px_rgba(139,92,246,0.25)] transition hover:bg-[#A78BFA] disabled:opacity-50 sm:flex-1"
                  >
                    {loading ? "Sending..." : "Send Request →"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => {
                      setSelectedTopic("");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="w-full rounded-lg border-2 border-white/10 px-6 py-4 font-semibold text-[#CDB8FF] transition hover:bg-white/10 sm:w-auto"
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
                className="text-center text-[#B8B0C4] py-8"
              >
                Please select a consultation topic above to get started
              </motion.p>
            )}
          </motion.div>

          {/* Secondary Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="mb-4 text-[#B8B0C4]">Prefer a quick social follow-up instead?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/studioby_aamna/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 font-medium text-[#D8C7FF] transition hover:bg-white/10"
              >
                DM on Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/amna-awan-2608sam"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 font-medium text-[#D8C7FF] transition hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/AamnaAwan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 font-medium text-[#D8C7FF] transition hover:bg-white/10"
              >
                View GitHub
              </a>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-[#171126]/80 border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#F5F3F7]">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#E8C468]">1</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#F5F3F7]">Select Topic</h4>
                    <p className="text-[#B8B0C4]">Choose the type of consultation you need.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#E8C468]">2</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#F5F3F7]">Fill Details</h4>
                    <p className="text-[#B8B0C4]">Provide your information and describe your query.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#E8C468]">3</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#F5F3F7]">Get Help</h4>
                    <p className="text-[#B8B0C4]">I'll review and get back to you promptly.</p>
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
          className="text-center text-[#B8B0C4] mt-16"
        >
          © {new Date().getFullYear()} AmnaAwan. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
}
