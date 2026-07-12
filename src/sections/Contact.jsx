import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="relative overflow-x-hidden bg-[#120E1E] px-4 py-16 sm:px-5 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(23,17,38,0.98),_rgba(18,14,30,0.96))] px-5 py-12 text-center shadow-[0_24px_70px_-30px_rgba(139,92,246,0.4)] sm:px-8 sm:py-16 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.18),_transparent_36%)]" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FDE68A]">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
            Open for select projects
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-[#F5F3F7] sm:text-4xl md:text-6xl">
            Ready to <span className="text-[#E8C468]">build together</span>?
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#F59E0B]" />
          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-[#B8B0C4] sm:text-lg md:text-xl">
            Whether it is a brand launch, a product rethink, or a polished web experience, I create work that feels sharp, clear, and memorable.
          </p>

          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#F59E0B] px-8 py-3.5 text-lg font-semibold text-white shadow-[0_0_45px_rgba(139,92,246,0.28)] transition hover:shadow-[0_0_55px_rgba(245,158,11,0.28)]"
          >
            Start a conversation
            <span className="ml-2 text-xl">→</span>
          </motion.button>
        </motion.div>
        <p className="relative mt-10 text-sm text-[#B8B0C4]">
          © {new Date().getFullYear()} Bee&apos;sHive. All rights reserved.
        </p>
      </div>
    </section>
  );
}
