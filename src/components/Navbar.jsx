import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-4 md:px-10 py-4 sticky top-0 backdrop-blur bg-white/80 dark:bg-[#0F0F0F]/80 border-b border-purple-200 dark:border-purple-900 z-50"
    >
      {/* Logo */}
      <motion.h1 
        whileHover={{ scale: 1.05 }}
        className="text-lg md:text-xl text-purple-700 dark:text-purple-400 font-bold cursor-pointer"
        onClick={(e) => handleScroll(e, "#hero")}
      >
        AmnaAwan
      </motion.h1>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="relative text-gray-700 dark:text-gray-300 font-medium text-sm group"
            whileHover={{ scale: 1.05 }}
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </div>

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </motion.nav>
  );
}