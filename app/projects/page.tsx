"use client";

import { motion, useReducedMotion, useInView, Variants } from "motion/react";
import { useRef } from "react";

// ── Shared variants ───────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const headerReveal: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

// ── Project card data ─────────────────────────────────────────────────────────

const projects = [
  {
    exhibit: "EXH A",
    title: "DEEPGUARD AI",
    caseNo: "CASE_NO: 001",
    icon: "image_search",
    rotation: "rotate-0",
    date: "NOV 25 - FEB 26",
    dateLabel: "DATE",
    description1:
      "AI-generated image detection system built with EfficientNet, achieving 96.2% accuracy and 95.8% F1-score across modern generative image architectures.",
    description2:
      "Improved generalization through augmentation and regularization, with a FastAPI inference service and Grad-CAM explainability under <100 ms latency.",
    tags: ["PYTHON", "PYTORCH", "EFFICIENTNET", "FASTAPI", "DOCKER"],
    github: "https://github.com/Shravan121005/DeepgaurdAI",
  },
  {
    exhibit: "EXH B",
    title: "BUGINSIGHT",
    caseNo: "CASE_NO: 002",
    icon: "bug_report",
    rotation: "rotate-[1deg]",
    date: "MAY 25 - AUG 25",
    dateLabel: "DATE",
    description1:
      "Dual-task ML pipeline predicting GitHub issue severity and resolution time, achieving a 91.3% F1-score and 1.8-day RMSE.",
    description2:
      "Improved prediction performance by 12% through NLP-based feature engineering and model optimization, with FastAPI and automated GitHub API integration.",
    tags: ["SCIKIT-LEARN", "XGBOOST", "LIGHTGBM", "NLP", "FASTAPI"],
    github: "https://github.com/Shravan121005/BugInsight",
  },
  {
    exhibit: "EXH C",
    title: "SMARTDIET AI",
    caseNo: "CASE_NO: 003",
    icon: "restaurant",
    rotation: "rotate-[-1deg]",
    date: "OCT 24 - JAN 25",
    dateLabel: "DATE",
    description1:
      "Nutrition recommendation and calorie prediction system trained on 500+ dietary records, achieving 78% prediction accuracy.",
    description2:
      "Reduced calorie prediction error by 15% through feature engineering and regression optimization, integrated into a full-stack React and Flask application.",
    tags: ["PYTHON", "REACT.JS", "FLASK", "XGBOOST", "MONGODB"],
    github: "https://github.com/Shravan121005/SmartDietAi",
  },
  {
    exhibit: "EXH D",
    title: "OIL WELL CHOKE",
    caseNo: "CASE_NO: 004",
    icon: "oil_barrel",
    rotation: "rotate-[1deg]",
    date: "HONEYWELL AI HACKATHON",
    dateLabel: "EVENT",
    description1:
      "Autonomous oil well choke control system built for the Honeywell Industrial AI Hackathon using a data-driven Digital Twin and Model Predictive Control.",
    description2:
      "Developed a predictive well model and closed-loop MPC controller to track production targets while maintaining pressure and operational constraints.",
    tags: ["PYTHON", "PANDAS", "SCIKIT-LEARN", "MPC", "DIGITAL-TWIN"],
    github: "https://github.com/Shravan121005/OilWellChokePrediction",
  },
];

// ── Project Card Component ────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  prefersReducedMotion,
}: {
  project: (typeof projects)[number];
  index: number;
  prefersReducedMotion: boolean | null;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      className={`dossier-card p-dossier-padding flex flex-col h-full group ${project.rotation}`}
      variants={fadeUp}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={inView ? "visible" : "hidden"}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.55,
              delay: (index % 2) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" },
            }
      }
    >
      {/* Card header */}
      <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            {project.icon}
          </span>
          <h2 className="font-headline-md text-primary tracking-tight">
            {project.exhibit}: {project.title}
          </h2>
        </div>
        <span className="font-label-sm bg-surface-bright text-on-surface px-2 py-1 font-bold">
          {project.caseNo}
        </span>
      </div>

      {/* Description */}
      <div className="flex-grow mb-6">
        <p className="font-body-md text-on-surface-variant mb-4">
          {project.description1}
        </p>
        <p className="font-body-md text-on-surface-variant mb-4">
          {project.description2}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1"
            >
              TAG: {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-outline-variant pt-4 flex flex-wrap gap-4 justify-between items-center">
        <span className="font-label-sm text-on-surface-variant">
          {project.dateLabel}:{" "}
          <span className="text-tertiary-fixed-dim">{project.date}</span>
        </span>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary font-label-md px-4 py-2 hover:bg-primary-container btn-sweep flex items-center gap-2 border border-on-primary-fixed uppercase font-bold cursor-pointer transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
        >
          ACCESS FILE
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
      </div>
    </motion.article>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="w-full">
      {/* Header */}
      <motion.header
        ref={headerRef}
        className="mb-12 border-b border-outline-variant pb-6"
        variants={headerReveal}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={headerInView ? "visible" : "hidden"}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <div className="flex items-end justify-between mb-2">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary uppercase tracking-tight">
            <span className="blinking-cursor">EVIDENCE LOG: TECHNICAL PROJECTS</span>
          </h1>
          <span className="font-label-sm text-on-surface-variant opacity-70">
            REF: DOC-77A // EXH. 01-04
          </span>
        </div>

        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          &gt; INITIALIZING QUERY...
          <br />
          &gt; RETRIEVING ARCHIVED TECHNICAL EXECUTIONS...
          <br />
          &gt; WARNING: CONTENTS MAY CONTAIN HIGHLY CLASSIFIED ALGORITHMS.
        </p>
      </motion.header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.exhibit}
            project={project}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </main>
  );
}
