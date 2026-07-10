import { motion } from "framer-motion";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.95 }}
      className="relative h-9 w-16 rounded-full border border-white/10 bg-[linear-gradient(135deg,_rgba(35,27,58,0.95),_rgba(44,33,70,0.95))] p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.35)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-[#120E1E]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute -top-2 right-1 h-3 w-3 rounded-full bg-[#E8C468]/40 blur-[6px]" />
        <div className="absolute bottom-1 left-2 h-2 w-2 rounded-full bg-[#8B5CF6]/35 blur-[5px]" />
      </div>

      <motion.div
        initial={false}
        animate={{ x: darkMode ? 28 : 2, rotate: darkMode ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#F5F3F7_0%,_#E8C468_55%,_#D8C7FF_100%)] shadow-[0_6px_18px_rgba(139,92,246,0.35)]"
      >
        <motion.svg
          animate={{ scale: darkMode ? 0.9 : 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className={`h-4 w-4 transition-all duration-300 ${
            darkMode ? "rotate-0 text-[#2A213D]" : "rotate-180 text-[#6D28D9]"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {darkMode ? (
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          ) : (
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zm2.828-2.828l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zM13 11a1 1 0 110 2h-2a1 1 0 110-2h2zm-6 0a1 1 0 110 2H5a1 1 0 110-2h2z"
              clipRule="evenodd"
            />
          )}
        </motion.svg>
      </motion.div>

      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
