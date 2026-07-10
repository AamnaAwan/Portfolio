import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-4 md:px-10 py-4 sticky top-0 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border-b border-accent-100 dark:border-accent-900 z-50"
    >
      {/* Logo */}
      <motion.h1 
        whileHover={{ scale: 1.05 }}
        className="text-base md:text-lg font-bold cursor-pointer bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent"
        onClick={(e) => handleScroll(e, "#hero")}
      >
        AA
      </motion.h1>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="relative text-sm text-gray-700 dark:text-gray-300 font-medium group"
            whileHover={{ scale: 1.05 }}
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button & Theme Toggle */}
      <div className="flex items-center gap-3">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Hamburger Menu */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-gray-900 dark:bg-white block"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-gray-900 dark:bg-white block"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-gray-900 dark:bg-white block"
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={mobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-full left-0 right-0 md:hidden overflow-hidden bg-white dark:bg-slate-900 border-b border-accent-100 dark:border-accent-900"
      >
        <div className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-accent-50 dark:hover:bg-accent-900/20 transition"
              whileHover={{ x: 5 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}