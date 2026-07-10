import { motion } from "framer-motion";

const expertise = [
  {
    title: "Frontend",
    icon: "⚡",
    accent: "from-[#7C3AED] via-[#A78BFA] to-[#E9D5FF]",
    description: "Interfaces that feel premium and alive.",
    skills: ["React", "Tailwind", "Framer Motion", "Responsive UI"],
    level: 92,
    feature: "Motion-first UI",
  },
  {
    title: "Product Thinking",
    icon: "🧠",
    accent: "from-[#D97706] via-[#F59E0B] to-[#FDE68A]",
    description: "Clear flows, thoughtful structure, better decisions.",
    skills: ["UX Patterns", "Interaction Design", "Conversion Flow", "Storytelling"],
    level: 88,
    feature: "Clarity over clutter",
  },
  {
    title: "Backend",
    icon: "☁️",
    accent: "from-[#0891B2] via-[#22D3EE] to-[#7C3AED]",
    description: "Reliable systems behind polished experiences.",
    skills: ["Firebase", "Node", "APIs", "Auth"],
    level: 84,
    feature: "Scalable foundations",
  },
  {
    title: "Performance",
    icon: "🚀",
    accent: "from-[#0F766E] via-[#2DD4BF] to-[#A7F3D0]",
    description: "Fast, lean, and ready for real users.",
    skills: ["Optimization", "Build Fixes", "Debugging", "Launch Prep"],
    level: 90,
    feature: "Launch-ready polish",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),_transparent_60%)] px-3 py-16 sm:px-4 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#F59E0B]">
            About me
          </p>
          <h2 className="max-w-3xl font-heading text-3xl font-bold text-[#F5F3F7] sm:text-4xl md:text-6xl">
            I turn ideas into sharp, memorable digital experiences.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(23,17,38,0.92),rgba(10,8,22,0.95))] p-6 shadow-[0_30px_80px_rgba(8,6,18,0.28)] backdrop-blur sm:p-8">
            <div className="mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#F59E0B] to-[#C4B5FD]" />
            <p className="text-lg leading-8 text-[#D8C7FF]">
              I learned by building real things — shipping websites, fixing broken flows, handling launch issues, and turning rough ideas into calm, polished products.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#B8B0C4]">
              My work sits at the intersection of design, motion, and dependable engineering. The goal is never just “a site” — it is a feeling that feels clear, modern, and effortless.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#F59E0B]/20 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_35%),rgba(23,17,38,0.94)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#F5F3F7]">Signature style</h3>
              <span className="rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#FDE68A]">
                Intentional
              </span>
            </div>
            <div className="space-y-3">
              {[
                "Clean visual hierarchy",
                "Soft motion that guides attention",
                "Thoughtful interaction details",
                "Reliable handoff-ready build quality",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#D9D0E8]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A78BFA] shadow-[0_0_12px_rgba(167,139,250,0.7)]" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mb-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F59E0B]">Expertise</p>
              <h3 className="text-2xl font-bold text-[#F5F3F7] sm:text-3xl">A polished mix of strategy, design, and execution</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#B8B0C4]">
              I build interfaces that feel elevated, intuitive, and ready to perform in the real world.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-5 md:grid-cols-2"
          >
            {expertise.map((area) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,15,35,0.98),rgba(10,8,20,0.98))] p-5 shadow-[0_20px_70px_rgba(8,6,18,0.24)] sm:p-6"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.accent} opacity-10 transition duration-500 group-hover:opacity-20`} />
                <div className="absolute -right-6 top-6 h-24 w-24 rounded-full bg-white/5 blur-3xl" />
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.accent} text-xl shadow-[0_12px_30px_rgba(0,0,0,0.2)]`}>
                        {area.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">Core strength</p>
                        <h4 className="text-xl font-semibold text-[#F5F3F7]">{area.title}</h4>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FDE68A]">
                      {area.feature}
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-7 text-[#CCC4D8]">{area.description}</p>

                  <div className="mb-5">
                    <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/55">
                      <span>Depth</span>
                      <span className="font-semibold text-[#F5F3F7]">{area.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${area.accent}`}
                        style={{ width: `${area.level}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#E9D5FF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
