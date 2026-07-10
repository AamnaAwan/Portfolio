import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const caseStudies = {
  zeem: {
    title: "Zeem Organics",
    subtitle: "Fixing a Broken Cart System in Production",
    icon: "🛒",
    overview: "Building a fast, responsive e-commerce store with a reliable cart system",
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
      "✅ Cart updates instantly and accurately",
      "✅ Zero stale or inconsistent data",
      "✅ Stable behavior across refresh and deployment",
      "✅ Improved user trust and conversion"
    ],
    techStack: ["React", "Tailwind CSS", "Netlify"],
    learning: "Real production issues behave differently than local development. Understanding how frontend state syncs after deployment is crucial for reliability."
  },
  invoice: {
    title: "Invoxia",
    subtitle: "Smart Invoice Generator for Small Business",
    icon: "📄",
    overview: "A responsive invoicing web app that streamlines invoice creation, live preview, PDF export, and Firebase-backed persistence.",
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
      "✅ Professional invoice creation with consistent branding",
      "✅ Live preview and PDF export in one streamlined workflow",
      "✅ Firebase-backed storage for drafts and invoice records",
      "✅ Faster billing and better client communication"
    ],
    techStack: ["React 18", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore", "@react-pdf/renderer", "React Router v6"],
    learning: "A strong SaaS experience depends on clear billing workflows, reliable persistence, and polished export capabilities."
  },
  photocopy: {
    title: "Photocopy Solutions",
    subtitle: "Clean Frontend Website for a Print and Copy Service",
    icon: "🖨️",
    overview: "A responsive HTML/CSS/JavaScript website for a photocopy and printing business, deployed on Netlify to improve online visibility and lead capture.",
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
      "✅ Improved online visibility for the photocopy business",
      "✅ Faster mobile browsing and better user experience",
      "✅ Clear service messaging and easy customer contact",
      "✅ Reliable Netlify deployment with a polished frontend"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    learning: "Simple, responsive frontend websites can make a big impact for local businesses by improving clarity, trust, and lead generation."
  },
  foodcoach: {
    title: "Food Coach",
    subtitle: "Crafting a Modern Restaurant Website Experience",
    icon: "🍽️",
    overview: "Designed and developed a responsive restaurant website that showcases the culinary brand, menu offerings, and reservation system for Food Coach.",
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
      "✅ 100% responsive design across all devices",
      "✅ Fast loading times with optimized performance",
      "✅ Engaging visual presentation of offerings",
      "✅ Improved customer engagement and bookings"
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
        className="min-h-screen px-4 md:px-10 py-10 bg-white dark:bg-[#0F0F0F]"
      >
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="mb-6 px-4 py-2 text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition"
          >
            ← Back
          </button>
          <h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white">Case study not found</h1>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen px-4 md:px-10 py-10 bg-white dark:bg-[#0F0F0F]"
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-4 py-2 text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition font-medium"
        >
          ← Back to Projects
        </button>

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-4 mb-4"
          >
            <span className="text-6xl">{study.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {study.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-600 dark:text-purple-400 font-semibold">
                {study.subtitle}
              </h2>
            </div>
          </motion.div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{study.overview}</p>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
        </div>

        {/* Problem Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">❌</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{study.problem.title}</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {study.problem.description}
          </p>
          <ul className="space-y-3">
            {study.problem.issues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Root Cause */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
        >
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-200 mb-3">🔍 Root Cause</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {study.rootCause}
          </p>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✅</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{study.solution.title}</h2>
          </div>
          <ol className="space-y-3">
            {study.solution.steps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-lg min-w-8">{idx + 1}.</span>
                <span className="text-lg">{step}</span>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Impact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span>📈</span> Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {study.impact.map((point, idx) => (
              <div
                key={idx}
                className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-900 dark:text-green-200 font-medium"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <span>⚙️</span> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 rounded-full font-semibold border border-purple-300 dark:border-purple-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Key Learning */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 bg-gradient-to-br from-purple-100 dark:from-purple-900/30 to-purple-50 dark:to-purple-950/20 border border-purple-300 dark:border-purple-700 rounded-xl p-6"
        >
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-200 mb-3 flex items-center gap-3">
            <span>💡</span> Key Learning
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
            "{study.learning}"
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
}