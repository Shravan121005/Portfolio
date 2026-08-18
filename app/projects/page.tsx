"use client";

import { motion, useReducedMotion, useInView, AnimatePresence, Variants } from "motion/react";
import { useRef, useState } from "react";

// ── Shared variants ───────────────────────────────────────────────────────────

const headerReveal: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

const exhibitEnter: Variants = {
  hidden: { opacity: 0, y: 16, clipPath: "inset(8px 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0px 0 0 0)",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    clipPath: "inset(0 0 8px 0)",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const metaReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const metaItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

// ── Project data ──────────────────────────────────────────────────────────────

const projects = [
  {
    id: "deepguard",
    exhibitNo: "01",
    caseNo: "PROJECT ID: 001",
    title: "DEEPGUARD AI",
    subtitle: "AI-generated image detection system",
    icon: "image_search",
    date: "NOV 2025 — FEB 2026",
    category: "MACHINE LEARNING / COMPUTER VISION",
    description:
      "AI-generated image detection system built with EfficientNet, achieving 96.2% accuracy and 95.8% F1-score across modern generative image architectures. Improved generalisation through augmentation and regularisation, with a FastAPI inference service and Grad-CAM explainability.",
    metrics: [
      { label: "ACCURACY", value: "96.2%", color: "#ffd700" },
      { label: "F1-SCORE", value: "95.8%", color: "#ffd700" },
      { label: "LATENCY", value: "<100ms", color: "#00e639" },
    ],
    architecture: ["EfficientNet", "FastAPI", "Docker", "Grad-CAM"],
    tags: ["PYTHON", "PYTORCH", "EFFICIENTNET", "FASTAPI", "DOCKER"],
    github: "https://github.com/Shravan121005/DeepgaurdAI",
    status: "DEPLOYED",
  },
  {
    id: "buginsight",
    exhibitNo: "02",
    caseNo: "PROJECT ID: 002",
    title: "BUGINSIGHT",
    subtitle: "Issue severity & resolution prediction pipeline",
    icon: "bug_report",
    date: "MAY 2025 — AUG 2025",
    category: "MACHINE LEARNING / NLP",
    description:
      "Dual-task ML pipeline predicting GitHub issue severity and resolution time, achieving a 91.3% F1-score and 1.8-day RMSE. Improved prediction performance by 12% through NLP-based feature engineering and model optimisation, with FastAPI and automated GitHub API integration.",
    metrics: [
      { label: "F1-SCORE", value: "91.3%", color: "#ffd700" },
      { label: "RMSE", value: "1.8 days", color: "#ffd700" },
      { label: "LATENCY", value: "<120ms", color: "#00e639" },
    ],
    architecture: ["XGBoost", "LightGBM", "SHAP", "FastAPI"],
    tags: ["SCIKIT-LEARN", "XGBOOST", "LIGHTGBM", "NLP", "FASTAPI"],
    github: "https://github.com/Shravan121005/BugInsight",
    status: "DEPLOYED",
  },
  {
    id: "smartdiet",
    exhibitNo: "03",
    caseNo: "PROJECT ID: 003",
    title: "SMARTDIET AI",
    subtitle: "Nutrition recommendation & calorie prediction",
    icon: "restaurant",
    date: "OCT 2024 — JAN 2025",
    category: "MACHINE LEARNING / FULL STACK",
    description:
      "Nutrition recommendation and calorie prediction system trained on 500+ dietary records, achieving 78% prediction accuracy. Reduced calorie prediction error by 15% through feature engineering and regression optimisation, integrated into a full-stack React and Flask application.",
    metrics: [
      { label: "ACCURACY", value: "78%", color: "#ffd700" },
      { label: "RECORDS", value: "500+", color: "#d0c6ab" },
      { label: "ERROR REDUCTION", value: "−15%", color: "#00e639" },
    ],
    architecture: ["XGBoost", "React.js", "Flask", "MongoDB"],
    tags: ["PYTHON", "REACT.JS", "FLASK", "XGBOOST", "MONGODB"],
    github: "https://github.com/Shravan121005/SmartDietAi",
    status: "DEPLOYED",
  },
  {
    id: "oilwell",
    exhibitNo: "04",
    caseNo: "PROJECT ID: 004",
    title: "OIL WELL CHOKE",
    subtitle: "Autonomous choke control — Honeywell AI Hackathon",
    icon: "oil_barrel",
    date: "HONEYWELL INDUSTRIAL AI HACKATHON",
    category: "INDUSTRIAL AI / PREDICTIVE CONTROL",
    description:
      "Autonomous oil well choke control system built for the Honeywell Industrial AI Hackathon using a data-driven Digital Twin and Model Predictive Control. Developed a predictive well model and closed-loop MPC controller to track production targets while maintaining pressure and operational constraints.",
    metrics: [
      { label: "METHOD", value: "MPC", color: "#d0c6ab" },
      { label: "PARADIGM", value: "DIGITAL TWIN", color: "#d0c6ab" },
      { label: "EVENT", value: "HACKATHON", color: "#ffb4a5" },
    ],
    architecture: ["MPC", "Digital Twin", "Scikit-learn", "Pandas"],
    tags: ["PYTHON", "PANDAS", "SCIKIT-LEARN", "MPC", "DIGITAL-TWIN"],
    github: "https://github.com/Shravan121005/OilWellChokePrediction",
    status: "HACKATHON",
  },
];

// ── Exhibit Tab ───────────────────────────────────────────────────────────────

function ExhibitTab({
  exhibitNo,
  title,
  isActive,
  onClick,
}: {
  exhibitNo: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`exhibit-tab px-3 py-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary${isActive ? " active" : ""}`}
      aria-label={`View Project ${exhibitNo}: ${title}`}
      aria-pressed={isActive}
    >
      <span
        className="font-label-sm text-[10px] tracking-widest"
        style={{ color: isActive ? "#ffd700" : "#4d4732" }}
      >
        PROJ {exhibitNo}
      </span>
      <span
        className="font-label-md text-[11px] truncate max-w-[120px] sm:max-w-none"
        style={{ color: isActive ? "#fff6df" : "#999077" }}
      >
        {title}
      </span>
    </button>
  );
}

// ── Featured Exhibit Card ─────────────────────────────────────────────────────

function ExhibitCard({
  project,
  prefersReducedMotion,
}: {
  project: (typeof projects)[number];
  prefersReducedMotion: boolean | null;
}) {
  const statusColor =
    project.status === "DEPLOYED"
      ? "#00e639"
      : project.status === "HACKATHON"
      ? "#ffb4a5"
      : "#ffd700";

  return (
    <motion.article
      key={project.id}
      className="exhibit-card w-full active"
      variants={exhibitEnter}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      {/* ── Top header bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 px-6 pt-6 pb-5 border-b border-[#222]">
        <div className="flex items-start gap-3 min-w-0">
          <span className="material-symbols-outlined text-primary-container text-2xl shrink-0 mt-0.5">
            {project.icon}
          </span>
          <div className="min-w-0">
            <div className="font-label-sm text-[10px] text-outline tracking-widest mb-1">
              CASE STUDY / PROJECT {project.exhibitNo} / 04 &nbsp;·&nbsp; {project.caseNo}
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-md text-primary uppercase tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="font-label-md text-label-md text-on-surface-variant mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 shrink-0">
          {/* Status badge */}
          <div
            className="font-label-sm text-[10px] px-2 py-1 border tracking-widest"
            style={{
              color: statusColor,
              borderColor: statusColor + "44",
              backgroundColor: statusColor + "11",
            }}
          >
            {project.status}
          </div>
          {/* Category */}
          <div className="font-label-sm text-[10px] text-outline tracking-wider text-right hidden sm:block">
            {project.category}
          </div>
        </div>
      </div>

      {/* ── Main body ── */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#1f1f1f]"
        variants={metaReveal}
        initial="hidden"
        animate="visible"
      >
        {/* Left col: description + tags */}
        <motion.div className="lg:col-span-3 p-6 flex flex-col gap-5" variants={metaItem}>
          {/* Date */}
          <div className="font-label-sm text-[10px] text-outline tracking-widest">
            {project.date}
          </div>

          {/* Description */}
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#1f1f1f]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="evidence-tag bg-surface-container text-on-surface-variant font-label-sm text-[10px] px-2 py-1 tracking-widest"
              >
                TAG: {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right col: metrics + architecture */}
        <div className="lg:col-span-2 flex flex-col divide-y divide-[#1f1f1f]">
          {/* Metrics */}
          <motion.div className="p-6" variants={metaItem}>
            <div className="font-label-sm text-[10px] text-outline tracking-widest mb-4">
              PERFORMANCE METRICS
            </div>
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="metric-box">
                  <div
                    className="font-headline-md text-xl leading-none mb-1"
                    style={{ color: m.color }}
                  >
                    {m.value}
                  </div>
                  <div className="font-label-sm text-[9px] text-outline tracking-widest">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Architecture */}
          <motion.div className="p-6" variants={metaItem}>
            <div className="font-label-sm text-[10px] text-outline tracking-widest mb-4">
              ARCHITECTURE / STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((a) => (
                <span
                  key={a}
                  className="font-label-sm text-[11px] bg-surface-container-high border border-outline-variant px-2 py-1 text-on-surface-variant"
                >
                  {a}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div className="p-6 mt-auto" variants={metaItem}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container font-label-md text-label-md px-5 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] btn-sweep flex items-center justify-center gap-2 cursor-pointer w-full text-center hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 uppercase"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              ACCESS FILE
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);

  const headerRef = useRef<HTMLElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const activeProject = projects[activeIdx];

  return (
    <main className="w-full">
      {/* ── Header ── */}
      <motion.header
        ref={headerRef}
        className="mb-10 border-b border-outline-variant pb-6"
        variants={headerReveal}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={headerInView ? "visible" : "hidden"}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary uppercase tracking-tight">
            <span className="blinking-cursor">TECHNICAL PROJECTS</span>
          </h1>
          <span className="font-label-sm text-on-surface-variant opacity-70 shrink-0">
            REF: DOC-77A // PROJ. 01-04
          </span>
        </div>

        <div className="font-body-md text-on-surface-variant">
          <span className="text-outline">&gt; </span>INITIALIZING QUERY...
          <br />
          <span className="text-outline">&gt; </span>RETRIEVING ARCHIVED TECHNICAL EXECUTIONS...
          <br />
          <span className="text-tertiary-fixed-dim">&gt; </span>
          <span className="text-tertiary-fixed-dim/80">
            NOTE: CONTENTS DETAIL SYSTEMS ARCHITECTURE AND ML PIPELINES.
          </span>
        </div>
      </motion.header>

      {/* ── Project navigator tabs ── */}
      <div className="mb-6">
        {/* Tab row — scroll on very small screens, no overflow on normal */}
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="tablist"
          aria-label="Projects"
        >
          {projects.map((p, idx) => (
            <ExhibitTab
              key={p.id}
              exhibitNo={p.exhibitNo}
              title={p.title}
              isActive={idx === activeIdx}
              onClick={() => setActiveIdx(idx)}
            />
          ))}

          {/* Counter */}
          <div className="ml-auto shrink-0 flex items-center gap-1 font-label-sm text-[11px] text-outline pl-4">
            <span className="text-primary">{String(activeIdx + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{projects.length.toString().padStart(2, "0")}</span>
          </div>
        </div>

        {/* Progress bar under tabs */}
        <div className="mt-2 h-[1px] bg-[#1a1a1a] relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary-container"
            animate={{ width: `${((activeIdx + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* ── Featured project ── */}
      <AnimatePresence mode="wait">
        <ExhibitCard
          key={activeProject.id}
          project={activeProject}
          prefersReducedMotion={prefersReducedMotion}
        />
      </AnimatePresence>

      {/* ── Prev / Next navigation ── */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
          disabled={activeIdx === 0}
          className="exhibit-tab px-4 py-2 flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          aria-label="Previous project"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>PREV PROJECT</span>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className="focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              aria-label={`Go to project ${idx + 1}`}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: idx === activeIdx ? "#ffd700" : "#2a2a2a",
                  scale: idx === activeIdx ? 1.3 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => setActiveIdx((i) => Math.min(projects.length - 1, i + 1))}
          disabled={activeIdx === projects.length - 1}
          className="exhibit-tab px-4 py-2 flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          aria-label="Next project"
        >
          <span>NEXT PROJECT</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      {/* ── All exhibits quick-reference ── */}
      <div className="mt-12 border-t border-outline-variant pt-8">
        <div className="font-label-sm text-[10px] text-outline tracking-widest mb-4">
          ALL EXHIBITS // QUICK REFERENCE
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`text-left p-3 border transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                idx === activeIdx
                  ? "border-primary-container bg-[#1a1600]"
                  : "border-[#222] hover:border-outline-variant bg-[#111]"
              }`}
            >
              <div
                className="font-label-sm text-[10px] mb-1 tracking-wider"
                style={{ color: idx === activeIdx ? "#ffd700" : "#4d4732" }}
              >
                EXH {p.exhibitNo}
              </div>
              <div
                className="font-label-md text-[12px] truncate"
                style={{ color: idx === activeIdx ? "#fff6df" : "#999077" }}
              >
                {p.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
