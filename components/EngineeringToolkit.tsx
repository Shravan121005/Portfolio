"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

// ── Variants ──────────────────────────────────────────────────────────────────

const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0 },
  },
};

const skillFadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// ── Skill data — single source of truth ──────────────────────────────────────

export const skillCategories = [
  {
    id: "languages",
    label: "LANGUAGES",
    ref: "CAT-A",
    icon: "terminal",
    skills: [
      { name: "Python", status: "CORE", note: "Primary language" },
      { name: "C++", status: "ACTIVE", note: "DSA & systems" },
      { name: "SQL", status: "ACTIVE", note: "Queries & pipelines" },
    ],
  },
  {
    id: "ml",
    label: "MACHINE LEARNING",
    ref: "CAT-B",
    icon: "psychology",
    skills: [
      { name: "Scikit-learn", status: "ACTIVE", note: "Project deployed" },
      { name: "XGBoost", status: "ACTIVE", note: "Project deployed" },
      { name: "Supervised Learning", status: "CORE", note: "Primary domain" },
      { name: "Deep Learning", status: "ACTIVE", note: "EfficientNet, PyTorch" },
      { name: "Feature Engineering", status: "ACTIVE", note: "NLP pipelines" },
    ],
  },
  {
    id: "web",
    label: "WEB TECHNOLOGIES",
    ref: "CAT-C",
    icon: "code",
    skills: [
      { name: "Node.js", status: "ACTIVE", note: "Backend runtime" },
      { name: "Express.js", status: "ACTIVE", note: "REST APIs" },
      { name: "React.js", status: "ACTIVE", note: "Frontend stack" },
      { name: "JavaScript", status: "ACTIVE", note: "Core language" },
    ],
  },
  {
    id: "databases",
    label: "DATABASES",
    ref: "CAT-D",
    icon: "database",
    skills: [
      { name: "MongoDB", status: "ACTIVE", note: "NoSQL — SmartDiet AI" },
      { name: "PostgreSQL", status: "ACTIVE", note: "Relational DB" },
    ],
  },
  {
    id: "deploy",
    label: "DEPLOYMENT / ENGINEERING",
    ref: "CAT-E",
    icon: "rocket_launch",
    skills: [
      { name: "GitHub", status: "CORE", note: "Version control" },
      { name: "Docker", status: "ACTIVE", note: "Containerised — DeepGuard" },
      { name: "Kubernetes", status: "WORKING", note: "Container orchestration" },
      { name: "FastAPI", status: "ACTIVE", note: "Inference services" },
    ],
  },
];

export const statusConfig: Record<
  string,
  { label: string; color: string; dot: string }
> = {
  CORE: { label: "CORE", color: "#ffd700", dot: "#ffd700" },
  ACTIVE: { label: "ACTIVE", color: "#00e639", dot: "#00e639" },
  WORKING: { label: "WORKING KNOWLEDGE", color: "#d0c6ab", dot: "#4d4732" },
};

// ── SkillCell ─────────────────────────────────────────────────────────────────

export function SkillCell({
  name,
  status,
  note,
  prefersReducedMotion,
}: {
  name: string;
  status: string;
  note: string;
  prefersReducedMotion: boolean | null;
}) {
  const cfg = statusConfig[status] || statusConfig.WORKING;
  return (
    <motion.div
      className="skill-cell p-3 flex flex-col gap-1.5 group cursor-default"
      variants={skillFadeUp}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
      }
      whileHover={
        prefersReducedMotion ? {} : { y: -2, transition: { duration: 0.15 } }
      }
    >
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: cfg.dot }}
        />
        <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
          {name}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-0.5">
        <span
          className="font-label-sm text-[10px] px-1.5 py-0.5 border leading-none"
          style={{
            color: cfg.color,
            borderColor: cfg.color + "44",
            backgroundColor: cfg.color + "11",
          }}
        >
          {cfg.label}
        </span>
        <span className="font-label-sm text-[10px] text-outline opacity-80 hidden sm:block">
          {note}
        </span>
      </div>
    </motion.div>
  );
}

// ── EngineeringToolkit ────────────────────────────────────────────────────────

export default function EngineeringToolkit({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean | null;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const transitionBase = prefersReducedMotion
    ? { duration: 0 }
    : {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full"
      aria-label="Engineering Toolkit"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={transitionBase}
    >
      {/* Section Header */}
      <div className="border-b border-outline-variant pb-4 mb-8 relative">
        <div className="absolute inset-0 scan-sweep pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <div className="font-label-sm text-label-sm text-outline mb-1 tracking-widest">
              SYS-MAP-001 // TECHNICAL PROFILE
            </div>
            <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
              ENGINEERING TOOLKIT
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim status-pulse" />
            <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
              SYSTEMS ACTIVE
            </span>
          </div>
        </div>

        <p className="font-body-md text-on-surface-variant mt-3 max-w-xl">
          Operational systems and technologies deployed across active projects.
          Classification based on production usage and project outcomes.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 font-label-sm text-[11px]">
        {Object.entries(statusConfig).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: cfg.dot }}
            />
            <span style={{ color: cfg.color }}>{cfg.label}</span>
            <span className="text-outline opacity-60">—</span>
            <span className="text-outline opacity-80">
              {key === "CORE"
                ? "primary stack"
                : key === "ACTIVE"
                  ? "used in shipped projects"
                  : "studied & applied"}
            </span>
          </div>
        ))}
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            className="dossier-card p-0 overflow-hidden"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                  duration: 0.5,
                  delay: catIdx * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }
            }
          >
            {/* Category header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-outline-variant bg-surface-container-low">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                {cat.icon}
              </span>
              <span className="font-label-md text-label-md text-primary-container tracking-wider">
                {cat.label}
              </span>
              <span className="ml-auto font-label-sm text-[10px] text-outline opacity-60">
                {cat.ref}
              </span>
            </div>

            {/* Skills */}
            <motion.div
              className="grid grid-cols-1 gap-0 divide-y divide-[#222]"
              variants={staggerFast}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={inView ? "visible" : "hidden"}
            >
              {cat.skills.map((skill) => (
                <SkillCell
                  key={skill.name}
                  name={skill.name}
                  status={skill.status}
                  note={skill.note}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-6 pt-4 border-t border-outline-variant border-dashed flex flex-wrap gap-4 items-center justify-between">
        <p className="font-label-sm text-label-sm text-outline opacity-80">
          TECHNICAL STACK // LANGUAGES • FRAMEWORKS • DATABASES • DEPLOYMENT
        </p>
        <div className="font-label-sm text-label-sm text-on-surface-variant">
          REF: SKILLS-MAP-001 //{" "}
          {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)}{" "}
          SYSTEMS CATALOGUED
        </div>
      </div>
    </motion.section>
  );
}
