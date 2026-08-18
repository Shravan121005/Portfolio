"use client";

import { motion, useReducedMotion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import EngineeringToolkit, { skillCategories } from "../../components/EngineeringToolkit";

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

// ── Section wrapper with IntersectionObserver ─────────────────────────────────

function RevealSection({
  children,
  delay = 0,
  variant = "fadeUp",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: "fadeUp" | "slideLeft";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const v = variant === "slideLeft" ? slideLeft : fadeUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={v}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={inView ? "visible" : "hidden"}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

// ── Engineering focus areas ───────────────────────────────────────────────────

const focusAreas = [
  {
    icon: "psychology",
    title: "MACHINE LEARNING SYSTEMS",
    body: "Building end-to-end ML pipelines — from feature engineering and model selection through deployment and monitoring. Particular interest in supervised learning, model interpretability, and inference efficiency.",
  },
  {
    icon: "code",
    title: "FULL-STACK ENGINEERING",
    body: "Designing and building practical applications across the stack — backend APIs, data layers, and frontend interfaces that connect ML capabilities to real users.",
  },
  {
    icon: "rocket_launch",
    title: "DEPLOYMENT & SYSTEMS",
    body: "Containerising and deploying ML services with Docker and FastAPI. Interest in scalable backend architecture, API design, and the operational side of production systems.",
  },
  {
    icon: "memory",
    title: "ALGORITHMIC PROBLEM SOLVING",
    body: "Consistent competitive programming practice. Strong foundation in data structures, algorithms, and analytical thinking applied to both contest problems and engineering challenges.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Profile() {
  const prefersReducedMotion = useReducedMotion();

  const headerRef = useRef<HTMLElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <main className="w-full flex flex-col gap-16">

      {/* ══ PAGE HEADER ══════════════════════════════════════════════════════ */}
      <motion.header
        ref={headerRef}
        className="border-b border-outline-variant pb-6 relative scan-sweep"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        {/* Corner doc tag */}
        <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container font-label-sm px-3 py-1 border-l border-b border-[#333]">
          TECH-DOC-01
        </div>

        {/* Boot-style prefix lines */}
        <div className="font-label-sm text-[10px] text-outline tracking-widest mb-3 space-y-0.5">
          <div><span className="text-tertiary-fixed-dim">&gt; </span>SUBJECT TECHNICAL PROFILE</div>
          <div><span className="text-outline">&gt; </span>ANALYZING ENGINEERING CAPABILITIES...</div>
          <div><span className="text-tertiary-fixed-dim">&gt; </span>CLASSIFICATION: DEVELOPER // CLEARANCE: LEVEL-5</div>
        </div>

        <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary uppercase tracking-tight">
          PROFILE<span className="blinking-cursor" />
        </h1>
        <p className="font-body-md text-on-surface-variant mt-2">
          REF: TECH-DOC-01 // TECHNICAL CAPABILITIES &amp; ENGINEERING PROFILE
        </p>
      </motion.header>

      {/* ══ TECHNICAL SUMMARY ════════════════════════════════════════════════ */}
      <RevealSection>
        <div className="dossier-card p-dossier-padding">
          {/* Card label */}
          <div className="absolute top-0 right-0 bg-surface-container text-outline font-label-sm text-[10px] px-3 py-1 border-l border-b border-[#333] tracking-widest">
            ASSESSMENT: ALPHA-1
          </div>

          <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline pb-3 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container text-2xl">
              person_search
            </span>
            TECHNICAL SUMMARY
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main statement */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-4 border border-outline-variant">
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
                Subject is a Machine Learning engineer and full-stack developer with a
                demonstrated focus on building practical, deployable systems. Primary
                interest lies at the intersection of data-driven modelling and
                software engineering — designing end-to-end pipelines that move from
                raw data through inference to production.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                WARNING: Subject approaches problems analytically, experimentally, and
                iteratively. Known to favour systems that are measurable, reproducible,
                and honest in their limitations.
              </p>
            </div>

            {/* Quick-stats column */}
            <div className="flex flex-col gap-3">
              {[
                { label: "SKILL CATEGORIES", value: String(skillCategories.length) },
                { label: "SYSTEMS CATALOGUED", value: String(totalSkills) },
                { label: "PROJECTS DEPLOYED", value: "04" },
                { label: "PRIMARY DOMAIN", value: "ML / AI" },
              ].map((stat) => (
                <div key={stat.label} className="metric-box">
                  <div className="font-headline-md text-xl text-primary leading-none mb-0.5">
                    {stat.value}
                  </div>
                  <div className="font-label-sm text-[9px] text-outline tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ══ ENGINEERING TOOLKIT ══════════════════════════════════════════════ */}
      <div>
        <EngineeringToolkit prefersReducedMotion={prefersReducedMotion} />
      </div>

      {/* ══ PROBLEM SOLVING / DSA ════════════════════════════════════════════ */}
      <RevealSection delay={0.05}>
        <div className="dossier-card p-dossier-padding">
          <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline pb-3 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container text-2xl">
              memory
            </span>
            ALGORITHMIC PROBLEM SOLVING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Description */}
            <div className="flex flex-col gap-4">
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Consistent competitive programming practice across LeetCode and
                Codeforces. Analytical problem decomposition applied as an
                engineering discipline — not just contest preparation.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Strong foundation in data structures, algorithms, and
                complexity analysis, directly informing decisions in production
                engineering work.
              </p>

              <Link
                href="/coding"
                className="bg-primary-container text-on-primary-container font-label-md text-label-md px-5 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] btn-sweep flex items-center gap-2 cursor-pointer mt-auto hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 w-full sm:w-auto justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
                VIEW CODING INTEL
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: "LEETCODE SOLVED",
                  value: "400+",
                  sub: "Easy · Medium · Hard",
                  color: "#ffd700",
                },
                {
                  label: "CODEFORCES RATING",
                  value: "1357",
                  sub: "Competitive programming",
                  color: "#ffd700",
                },
                {
                  label: "LEETCODE PERCENTILE",
                  value: "Top 6.03%",
                  sub: "Problem-solving ranking",
                  color: "#00e639",
                },
                {
                  label: "DOMAIN",
                  value: "DSA",
                  sub: "Data structures & algorithms",
                  color: "#d0c6ab",
                },
              ].map((s) => (
                <div key={s.label} className="metric-box">
                  <div
                    className="font-headline-md text-lg leading-none mb-0.5"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </div>
                  <div className="font-label-sm text-[9px] text-outline tracking-widest mb-1">
                    {s.label}
                  </div>
                  <div className="font-label-sm text-[9px] text-on-surface-variant opacity-60">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ══ ENGINEERING FOCUS ════════════════════════════════════════════════ */}
      <RevealSection delay={0.05}>
        <div>
          {/* Section header */}
          <div className="border-b border-outline-variant pb-4 mb-8">
            <div className="font-label-sm text-label-sm text-outline mb-1 tracking-widest">
              INTEREST VECTOR // CURRENT TRAJECTORY
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-md text-primary uppercase tracking-tight">
              ENGINEERING FOCUS
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-xl">
              Active areas of interest and ongoing development. Reflects current
              direction, not claimed expertise.
            </p>
          </div>

          {/* Focus grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={stagger}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                className="skill-cell p-5 group"
                variants={fadeUp}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { y: -3, transition: { duration: 0.15 } }
                }
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary-container group-hover:text-primary transition-colors">
                    {area.icon}
                  </span>
                  <span className="font-label-md text-label-md text-primary-container group-hover:text-primary transition-colors tracking-wider">
                    {area.title}
                  </span>
                </div>
                {/* Body */}
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  {area.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* ══ FOOTER CTA ═══════════════════════════════════════════════════════ */}
      <RevealSection delay={0.05}>
        <div className="border-t border-outline-variant pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <div className="font-label-sm text-[10px] text-outline tracking-widest mb-1">
              FURTHER INVESTIGATION
            </div>
            <p className="font-body-md text-on-surface-variant text-sm">
              View deployed projects or coding profiles for concrete evidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="exhibit-tab px-4 py-2.5 flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <span className="material-symbols-outlined text-[14px]">folder_open</span>
              ACCESS EVIDENCE
            </Link>
            <Link
              href="/coding"
              className="exhibit-tab px-4 py-2.5 flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <span className="material-symbols-outlined text-[14px]">code</span>
              VIEW INTEL
            </Link>
          </div>
        </div>
      </RevealSection>

    </main>
  );
}
