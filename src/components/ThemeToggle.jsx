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
      className="relative w-14 h-8 rounded-full bg-purple-200 dark:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-[#0F0F0F]"
    >
      <motion.div
        initial={false}
        animate={{ x: darkMode ? 28 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
      >
        <svg
          className={`w-4 h-4 transition-all duration-300 ${
            darkMode ? "text-yellow-500 rotate-0" : "text-purple-600 rotate-180"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {darkMode ? (
            // Moon icon
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          ) : (
            // Sun icon
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zm2.828-2.828l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zM13 11a1 1 0 110 2h-2a1 1 0 110-2h2zm-6 0a1 1 0 110 2H5a1 1 0 110-2h2z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </motion.div>

      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
