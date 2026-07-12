import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#140F24]/90 px-4 py-4 backdrop-blur-xl md:px-10"
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        className="text-base font-semibold cursor-pointer bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#E8C468] bg-clip-text text-transparent md:text-lg"
      >
        Amna Awan
      </motion.h1>
    </motion.nav>
  );
}