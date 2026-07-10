import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (href) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 88;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      return true;
    }

    return false;
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (!href.startsWith("#")) {
      return;
    }

    const completeNavigation = () => {
      if (location.pathname !== "/") {
        navigate("/");
        window.setTimeout(() => {
          scrollToSection(href);
        }, 120);
        return;
      }

      const didScroll = scrollToSection(href);
      if (!didScroll) {
        window.location.hash = href;
      }
    };

    if (mobileMenuOpen) {
      closeMenu();
      window.setTimeout(completeNavigation, 220);
      return;
    }

    completeNavigation();
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    if (!mobileMenuOpen) {
      return;
    }

    previouslyFocusedElementRef.current = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement || !menuRef.current?.contains(document.activeElement)) {
          event.preventDefault();
          lastElement.focus();
        }
      } else if (document.activeElement === lastElement || !menuRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const firstFocusable = menuRef.current?.querySelector('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    firstFocusable?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocusedElementRef.current?.focus();
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#140F24]/90 px-4 py-4 backdrop-blur-xl md:px-10"
    >
      {/* Logo */}
      <motion.h1 
        whileHover={{ scale: 1.05 }}
        className="text-base md:text-lg font-semibold cursor-pointer bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#E8C468] bg-clip-text text-transparent"
        onClick={(e) => handleNavClick(e, "#hero")}
      >
        Amna Awan
      </motion.h1>

      {/* Desktop Navigation Links */}
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="group relative text-sm font-medium text-[#B8B0C4] hover:text-[#F5F3F7]"
            whileHover={{ scale: 1.05 }}
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#E8C468] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F5F3F7] transition hover:bg-white/10 md:hidden"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span className="flex flex-col gap-1.5">
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[55] bg-[#06050A]/85 backdrop-blur-md md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              key="panel"
              ref={menuRef}
              id="mobile-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 z-[60] flex w-[88%] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.26),_transparent_35%),linear-gradient(135deg,_#140F24_0%,_#0F0A1A_100%)] p-6 pt-20 shadow-[0_25px_90px_rgba(0,0,0,0.45)] md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E8C468]">
                    Explore
                  </p>
                  <p className="mt-1 text-sm text-[#D9D0E8]">Choose a section</p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-[#F5F3F7] transition hover:bg-white/10"
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.25 }}
                    className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_45%),rgba(255,255,255,0.06)] px-4 py-4 text-left shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#E8C468]/35 hover:bg-[#221835]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/15 via-transparent to-[#E8C468]/10 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#F5F3F7]">{link.name}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-[#E8C468] transition group-hover:translate-x-1">↗</span>
                    </div>
                    <p className="relative mt-1 text-sm text-[#B8B0C4]">
                      {index === 0 && "A quick look at my approach"}
                      {index === 1 && "Selected work and case studies"}
                      {index === 2 && "A direct way to get in touch"}
                    </p>
                  </motion.a>
                ))}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}