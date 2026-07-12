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
  // Frontend and backend deploy separately. If the backend URL changes, update VITE_API_URL in the production env for the hosting site.
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const contactMethods = [
    { icon: "📸", label: "Instagram", value: "@studioby_aamna", link: "https://www.instagram.com/studioby_aamna/", accent: "from-[#F59E0B] to-[#FDE68A]" },
    { icon: "💼", label: "LinkedIn", value: "Amna Awan", link: "https://www.linkedin.com/in/amna-awan-2608sam", accent: "from-[#7C3AED] to-[#A78BFA]" },
    { icon: "🐙", label: "GitHub", value: "AamnaAwan", link: "https://github.com/AamnaAwan", accent: "from-[#0891B2] to-[#22D3EE]" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("❌ Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to send your message. Please try again.");
      }

      setSuccessMessage(data.message || "Thanks! I'll get back to you as soon as I can.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setErrorMessage(`❌ ${error.message || "Failed to send your message. Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#120E1E] text-[#F5F3F7] transition-colors duration-300">
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 px-4 text-center sm:mb-20 sm:px-5"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D8C7FF] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8C468]" />
            Let’s build something memorable
          </div>
          <h1 className="mb-6 font-heading text-4xl font-bold sm:text-5xl md:text-7xl">
            Let's <span className="text-[#E8C468]">Connect</span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#F59E0B]" />
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#B8B0C4] md:text-xl">
            Whether you need a polished launch, a refresh, or a full product experience, I’d love to hear what you’re building.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mb-20"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -6 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(23,17,38,0.98),rgba(12,10,24,0.98))] p-8 shadow-[0_20px_60px_rgba(8,6,18,0.24)] transition duration-300 hover:border-white/20 hover:shadow-[0_24px_70px_rgba(139,92,246,0.18)]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.accent} opacity-10 transition duration-300 group-hover:opacity-20`} />
                  <div className="relative">
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${method.accent} text-3xl shadow-[0_12px_30px_rgba(0,0,0,0.2)]`}>
                      {method.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-[#F5F3F7] transition group-hover:text-[#E8C468]">
                      {method.label}
                    </h3>
                    <p className="text-[#B8B0C4] transition group-hover:text-[#F5F3F7]">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,_rgba(23,17,38,0.98),_rgba(18,14,30,0.96))] p-6 shadow-[0_24px_70px_-30px_rgba(139,92,246,0.35)] sm:p-8 md:p-16"
          >
            <div className="mb-8 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#E8C468]">Direct message</p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-[#F5F3F7] md:text-4xl">
                Send me a Message
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-[#B8B0C4]">
                Share a few details and I’ll follow up with a thoughtful reply.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* Status Messages */}
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-emerald-400/40 bg-emerald-500/10 px-6 py-4 rounded-lg text-emerald-200"
                >
                  {successMessage}
                </motion.div>
              )}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-rose-400/40 bg-rose-500/10 px-6 py-4 rounded-lg text-rose-200"
                >
                  {errorMessage}
                </motion.div>
              )}

              {/* Name Field */}
              <div>
                <label className="mb-2 block font-semibold text-[#F5F3F7]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#140F24] px-4 py-3 text-[#F5F3F7] placeholder-[#B8B0C4] transition focus:border-[#8B5CF6] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="mb-2 block font-semibold text-[#F5F3F7]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#140F24] px-4 py-3 text-[#F5F3F7] placeholder-[#B8B0C4] transition focus:border-[#8B5CF6] focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="mb-2 block font-semibold text-[#F5F3F7]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#140F24] px-4 py-3 text-[#F5F3F7] placeholder-[#B8B0C4] transition focus:border-[#8B5CF6] focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="mb-2 block font-semibold text-[#F5F3F7]">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#140F24] px-4 py-3 text-[#F5F3F7] placeholder-[#B8B0C4] transition focus:border-[#8B5CF6] focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="min-h-[44px] w-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#F59E0B] px-12 py-3.5 text-lg font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.25)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <p className="mb-4 text-[#B8B0C4]">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/studioby_aamna/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/10 px-5 py-2.5 font-medium text-[#D8C7FF] transition hover:bg-white/15"
              >
                DM on Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/amna-awan-2608sam"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/10 px-5 py-2.5 font-medium text-[#D8C7FF] transition hover:bg-white/15"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-[#B8B0C4]">
          © {new Date().getFullYear()} Bee&apos;sHive. All rights reserved.
        </div>
      </div>
    </div>
  );
}
