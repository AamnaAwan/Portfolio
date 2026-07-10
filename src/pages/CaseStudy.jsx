import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const caseStudies = {
  zeem: {
    title: "Zeem Organics",
    subtitle: "Fixing a Broken Cart System in Production",
    icon: "🛒",
    overview: "Building a fast, responsive e-commerce store with a reliable cart system",
    accent: {
      shell: "from-[#0F2A1F] via-[#1D4D31] to-[#7A9B2B]",
      border: "border-[#B5E34D]/35",
      badge: "border-[#B5E34D]/35 bg-[#10231A]/90 text-[#F4C542]",
      chip: "border-[#B5E34D]/35 bg-[#B5E34D]/12 text-[#EAF7D3]",
      card: "border-[#B5E34D]/20 bg-[linear-gradient(135deg,rgba(16,35,26,0.96),rgba(7,16,14,0.96))]",
      highlight: "text-[#B5E34D]",
    },
    problem: {
      title: "The Cart Collapsed in Production",
      description: "After deploying the website, users reported cart items weren't updating correctly. Old data persisted even after changes, creating inconsistent shopping behavior.",
      issues: [
        "Cart items not updating correctly",
        "Stale data persisting after changes",
        "Inconsistent behavior across page refreshes"
      ]
    },
    rootCause: "Improper synchronization between React state and localStorage. The cart state wasn't rehydrating correctly on page load, and deployment introduced caching issues that weren't visible during local development.",
    solution: {
      title: "Debugging & Rebuilding Cart Logic",
      steps: [
        "Rebuilt cart logic to properly sync with localStorage",
        "Ensured state updates trigger consistent re-renders",
        "Added correct initialization logic on page load",
        "Cleaned up stale data handling after deployment"
      ]
    },
    impact: [
      "Cart updates instantly and accurately",
      "Zero stale or inconsistent data",
      "Stable behavior across refresh and deployment",
      "Improved user trust and conversion"
    ],
    techStack: ["React", "Tailwind CSS", "Netlify"],
    learning: "Real production issues behave differently than local development. Understanding how frontend state syncs after deployment is crucial for reliability."
  },
  invoice: {
    title: "Invoxia",
    subtitle: "Smart Invoice Generator for Small Business",
    icon: "📄",
    overview: "A responsive invoicing web app that streamlines invoice creation, live preview, PDF export, and Firebase-backed persistence.",
    accent: {
      shell: "from-[#06121F] via-[#0F2B3E] to-[#3B82F6]",
      border: "border-[#7DD3FC]/35",
      badge: "border-[#8B5CF6]/35 bg-[#0D1325]/90 text-[#C4B5FD]",
      chip: "border-[#8B5CF6]/35 bg-[#8B5CF6]/12 text-[#EDE9FE]",
      card: "border-[#7DD3FC]/20 bg-[linear-gradient(135deg,rgba(6,18,31,0.96),rgba(7,12,23,0.96))]",
      highlight: "text-[#7DD3FC]",
    },
    problem: {
      title: "Small businesses need fast, polished invoice workflows",
      description: "Many small businesses struggle with manual invoice formatting, inconsistent billing details, and complicated export workflows. Existing tools were either too complex or lacked a polished, brandable experience.",
      issues: [
        "Manual invoice formatting slowed down billing",
        "No easy way to manage ‘Billed From’ business details",
        "Exporting polished PDF invoices required extra tools"
      ]
    },
    rootCause: "The core issue was a disjointed workflow: invoice data creation, preview, and export were split across too many tools, making it hard to deliver fast, consistent billing documents.",
    solution: {
      title: "Designed a polished SaaS invoice workflow",
      steps: [
        "Built business profile management for branded ‘Billed From’ details",
        "Implemented client selection and manual entry for flexible billing",
        "Added editable line items with quantity, price, tax, and totals",
        "Created a live invoice preview paired with downloadable PDF export",
        "Integrated Firebase Auth and Firestore storage for draft and invoice persistence"
      ]
    },
    impact: [
      "Professional invoice creation with consistent branding",
      "Live preview and PDF export in one streamlined workflow",
      "Firebase-backed storage for drafts and invoice records",
      "Faster billing and better client communication"
    ],
    techStack: ["React 18", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore", "@react-pdf/renderer", "React Router v6"],
    learning: "A strong SaaS experience depends on clear billing workflows, reliable persistence, and polished export capabilities."
  },
  photocopy: {
    title: "Photocopy Solutions",
    subtitle: "Clean Frontend Website for a Print and Copy Service",
    icon: "🖨️",
    overview: "A responsive HTML/CSS/JavaScript website for a photocopy and printing business, deployed on Netlify to improve online visibility and lead capture.",
    accent: {
      shell: "from-[#05070B] via-[#111827] to-[#1E3A8A]",
      border: "border-[#60A5FA]/35",
      badge: "border-[#8DB8FF]/35 bg-[#07111F]/90 text-[#8DB8FF]",
      chip: "border-[#60A5FA]/30 bg-[#60A5FA]/12 text-[#EAF3FF]",
      card: "border-[#60A5FA]/20 bg-[linear-gradient(135deg,rgba(7,13,24,0.96),rgba(4,8,15,0.96))]",
      highlight: "text-[#60A5FA]",
    },
    problem: {
      title: "A local print service needed a better web presence",
      description: "The photocopy shop lacked a modern website to showcase services, operating hours, and contact details. Customers needed a simple, mobile-friendly way to learn about the business and reach out.",
      issues: [
        "No polished online presence for the print service",
        "Poor mobile experience on existing pages",
        "No clear service or contact information for customers"
      ]
    },
    rootCause: "The site was missing a clear visual hierarchy, responsive layout, and straightforward messaging, making it hard for visitors to understand the service quickly.",
    solution: {
      title: "Built a responsive business brochure website",
      steps: [
        "Designed a clean homepage to highlight photocopy, printing, and document services",
        "Implemented responsive layout with HTML, CSS, and JavaScript for mobile and desktop",
        "Added clear call-to-action sections with contact and service details",
        "Deployed the site on Netlify for fast, reliable hosting"
      ]
    },
    impact: [
      "Improved online visibility for the photocopy business",
      "Faster mobile browsing and better user experience",
      "Clear service messaging and easy customer contact",
      "Reliable Netlify deployment with a polished frontend"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    learning: "Simple, responsive frontend websites can make a big impact for local businesses by improving clarity, trust, and lead generation."
  },
  foodcoach: {
    title: "Food Coach",
    subtitle: "Crafting a Modern Restaurant Website Experience",
    icon: "🍽️",
    overview: "Designed and developed a responsive restaurant website that showcases the culinary brand, menu offerings, and reservation system for Food Coach.",
    accent: {
      shell: "from-[#1B0F0C] via-[#4A1F1A] to-[#D97706]",
      border: "border-[#FBBF24]/35",
      badge: "border-[#FB7185]/35 bg-[#1F130D]/90 text-[#FECACA]",
      chip: "border-[#FB7185]/35 bg-[#FB7185]/12 text-[#FFE4E6]",
      card: "border-[#FBBF24]/20 bg-[linear-gradient(135deg,rgba(27,15,12,0.96),rgba(15,7,6,0.96))]",
      highlight: "text-[#FB7185]",
    },
    problem: {
      title: "Creating an Engaging Digital Presence",
      description: "The restaurant needed a modern, visually appealing website that could attract customers, display menus effectively, and facilitate easy reservations. The challenge was to balance aesthetics with functionality.",
      issues: [
        "Need for responsive design across all devices",
        "Smooth navigation and fast loading times",
        "Showcasing menu items attractively"
      ]
    },
    rootCause: "Many restaurant websites lack proper design and UX considerations. A custom-built website allows for complete control over the brand experience and customer journey.",
    solution: {
      title: "Building a Modern Restaurant Website",
      steps: [
        "Designed responsive layouts optimized for mobile and desktop",
        "Implemented smooth animations and transitions for engaging UX",
        "Created interactive menu display with filtering options",
        "Integrated reservation booking system and contact forms"
      ]
    },
    impact: [
      "100% responsive design across all devices",
      "Fast loading times with optimized performance",
      "Engaging visual presentation of offerings",
      "Improved customer engagement and bookings"
    ],
    techStack: ["React", "Node.js", "Firebase", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
    learning: "A well-designed website is often the first interaction customers have with a brand. Attention to detail in UI/UX directly impacts customer perception and business outcomes."
  }
};

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies[id];

  if (!study) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#120E1E] px-4 py-10 md:px-10"
      >
        <div className="mx-auto max-w-3xl">
          <button
            onClick={() => navigate("/")}
            className="mb-6 px-4 py-2 text-[#E8C468] transition hover:text-[#D8C7FF]"
          >
            ← Back
          </button>
          <h1 className="text-3xl text-[#F5F3F7] md:text-5xl">Case study not found</h1>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#120E1E] px-4 py-10 md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-[#E8C468] transition hover:bg-white/10"
        >
          ← Back to Projects
        </button>

        <div className={`relative mb-12 overflow-hidden rounded-[36px] border ${study.accent.border} bg-gradient-to-br ${study.accent.shell} p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 md:p-10`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.09),_transparent_24%)]" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${study.accent.border} bg-[#140F24]/85 text-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]`}>
                {study.icon}
              </div>
              <div>
                <p className={`mb-2 text-sm font-semibold uppercase tracking-[0.3em] ${study.accent.highlight}`}>Case Study</p>
                <h1 className="mb-2 text-3xl font-bold text-[#F5F3F7] sm:text-4xl md:text-5xl">
                  {study.title}
                </h1>
                <h2 className={`text-xl font-semibold md:text-2xl ${study.accent.highlight}`}>
                  {study.subtitle}
                </h2>
              </div>
            </div>
            <div className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${study.accent.badge}`}>
              Product build
            </div>
          </motion.div>

          <p className="relative max-w-3xl text-lg leading-8 text-[#F3ECFF]">{study.overview}</p>
          <div className="relative mt-6 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span key={tech} className={`rounded-full border px-3 py-1.5 text-sm ${study.accent.chip}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative mb-8 overflow-hidden rounded-[30px] border p-6 sm:p-7 md:p-8 ${study.accent.card}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_30%)]" />
          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${study.accent.badge}`}>Challenge</span>
              <h2 className="text-2xl font-bold text-[#F5F3F7]">{study.problem.title}</h2>
            </div>
            <div className="mb-5 h-px w-24 rounded-full bg-white/10" />
          <p className="mb-5 text-lg leading-8 text-[#B8B0C4]">
            {study.problem.description}
          </p>
          <ul className="space-y-3">
            {study.problem.issues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#D8C7FF]">
                <span className={`mt-1 text-lg ${study.accent.highlight}`}>•</span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`mb-8 rounded-[28px] border p-7 md:p-8 ${study.accent.card}`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${study.accent.badge}`}>Root cause</span>
            <h3 className="text-2xl font-bold text-[#F5F3F7]">Why it was happening</h3>
          </div>
          <div className="mb-4 h-px w-24 rounded-full bg-white/10" />
          <p className="text-lg leading-8 text-[#B8B0C4]">{study.rootCause}</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`mb-8 rounded-[28px] border p-7 md:p-8 ${study.accent.card}`}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${study.accent.badge}`}>Solution</span>
            <h2 className="text-2xl font-bold text-[#F5F3F7]">{study.solution.title}</h2>
          </div>
          <div className="mb-5 h-px w-24 rounded-full bg-white/10" />
          <ol className="space-y-3">
            {study.solution.steps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-[#D8C7FF]">
                <span className={`min-w-8 text-lg font-semibold ${study.accent.highlight}`}>{idx + 1}.</span>
                <span className="leading-8">{step}</span>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`mb-8 rounded-[28px] border p-7 md:p-8 ${study.accent.card}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${study.accent.badge}`}>Impact</span>
            <h2 className="text-2xl font-bold text-[#F5F3F7]">What changed</h2>
          </div>
          <div className="mb-6 h-px w-24 rounded-full bg-white/10" />
          <div className="grid gap-4 md:grid-cols-2">
            {study.impact.map((point, idx) => (
              <div key={idx} className={`rounded-2xl border p-4 text-sm font-medium ${study.accent.chip}`}>
                {point}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-[30px] border p-6 sm:p-7 md:p-8 ${study.accent.card}`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${study.accent.badge}`}>Learning</span>
            <h3 className="text-2xl font-bold text-[#F5F3F7]">Key takeaway</h3>
          </div>
          <div className="mb-4 h-px w-24 rounded-full bg-white/10" />
          <p className="text-lg leading-8 text-[#B8B0C4] italic">“{study.learning}”</p>
        </motion.section>
      </div>
    </motion.div>
  );
}
