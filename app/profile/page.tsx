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

// ── Stamp component ──────────────────────────────────────────────────────────

function Stamp({
  text,
  colorClass,
}: {
  text: string;
  colorClass: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`font-headline-md text-xl border-2 px-2 py-0.5 inline-block select-none ${colorClass}`}
      style={{ borderRadius: 4, transform: "rotate(-15deg)" }}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.8 }}
      animate={
        inView
          ? { opacity: 0.85, scale: 1 }
          : { opacity: 0, scale: 1.8 }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
            duration: 0.22,
            ease: [0.175, 0.885, 0.32, 1.275],
          }
      }
    >
      {text}
    </motion.div>
  );
}

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
          TECH-PROFILE-01
        </div>

        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
          TECHNICAL PROFILE<span className="blinking-cursor" />
        </h1>

        {/* Boot-style prefix lines */}
        <div className="font-label-sm text-[10px] text-outline tracking-widest mb-3 space-y-0.5">
          <div><span className="text-tertiary-fixed-dim">&gt; </span>ENGINEERING PROFILE</div>
          <div><span className="text-outline">&gt; </span>ANALYZING TECHNICAL CAPABILITIES...</div>
          <div><span className="text-tertiary-fixed-dim">&gt; </span>CLASSIFICATION: DEVELOPER // CLEARANCE: LEVEL-5</div>
        </div>
        <p className="font-body-md text-on-surface-variant mt-2">
          REF: TECH-PROFILE-01 // TECHNICAL CAPABILITIES &amp; ENGINEERING PROFILE
        </p>
      </motion.header>

      {/* ══ TECHNICAL SUMMARY ════════════════════════════════════════════════ */}
      <RevealSection>
        <div className="dossier-card p-dossier-padding">
          {/* Card label */}
          <div className="absolute top-0 right-0 bg-surface-container text-outline font-label-sm text-[10px] px-3 py-1 border-l border-b border-[#333] tracking-widest">
            EVALUATION: COMPLETE
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
                Computer Science and Engineering undergraduate at VIT Bhopal with a 9.18 CGPA, focused on Machine Learning and full-stack development. Strong foundation in Data Structures and Algorithms with hands-on experience building practical software systems.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
                Well-grounded in core CSE concepts including OperatingSystems, DatabaseManagementSystems, ObjectOrientedProgramming, and Computer Networks. Driven by analytical problem-solving and a focus on building efficient, reliable, and deployable solutions.
              </p>
            </div>

            {/* Quick-stats column */}
            <div className="flex flex-col gap-3">
              {[
                { label: "SKILL CATEGORIES", value: String(skillCategories.length) },
                { label: "Problems Solved", value: "450+" },
                { label: "Github Repos", value: "20+" },
                { label: "PRIMARY DOMAIN", value: "Machine Learning" },
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

      {/* ══ LEADERSHIP & EXPERIENCE ════════════════════════════════════════════ */}
      <RevealSection delay={0.05}>
        <div>
          {/* Section header */}
          <div className="border-b border-outline-variant pb-4 mb-8">
            <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-2xl">
                groups
              </span>
              LEADERSHIP &amp; EXPERIENCE
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {/* VITERA */}
            <RevealSection delay={0.1} variant="fadeUp">
              <div className="dossier-card p-4 hover:-translate-y-1 transition-transform duration-200">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-start mb-3">
                  <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
                    <div className="absolute inset-0 bg-secondary opacity-10" />
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      groups
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap justify-between items-baseline gap-1 mb-1">
                      <h4 className="font-label-md text-primary">VITERA CLUB // TECH CO-LEAD</h4>
                      <span className="font-label-sm text-on-surface-variant text-[11px]">
                        NOV 2023 — FEB 2026
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface-variant text-sm">
                      Led a team of 10 members. Organised 5 technical workshops and
                      coding events for 300+ students. Mentored junior members in
                      Python, Git &amp; Machine Learning fundamentals.
                    </p>
                  </div>
                </div>
                {/* VITERA metrics row */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-outline-variant">
                  {[
                    { value: "10", label: "TEAM" },
                    { value: "5", label: "WORKSHOPS" },
                    { value: "300+", label: "STUDENTS" },
                  ].map((m) => (
                    <div key={m.label} className="metric-box text-center py-2">
                      <div className="font-headline-md text-lg text-primary leading-none mb-0.5">
                        {m.value}
                      </div>
                      <div className="font-label-sm text-[9px] text-outline tracking-widest">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-end">
                  <Stamp text="LEADERSHIP" colorClass="border-primary-container text-primary-container" />
                </div>
              </div>
            </RevealSection>

            {/* GirlScript */}
            <RevealSection delay={0.15} variant="fadeUp">
              <div className="dossier-card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:-translate-y-1 transition-transform duration-200">
                <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
                  <div className="absolute inset-0 bg-primary-container opacity-10" />
                  <span
                    className="material-symbols-outlined text-primary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    code
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-label-md text-primary">OP: GIRLSCRIPT SUMMER OF CODE</h4>
                    <span className="font-label-sm text-on-surface-variant">GSSoC</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    Open-source development experience contributing to collaborative
                    software projects and real-world development workflows.
                  </p>
                </div>
                <Stamp
                  text="CONTRIBUTOR"
                  colorClass="border-secondary text-secondary"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </RevealSection>

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
                VIEW CODING PROFILE
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

      {/* ══ FOOTER CTA ═══════════════════════════════════════════════════════ */}
      <RevealSection delay={0.05}>
        <div className="border-t border-outline-variant pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <div className="font-label-sm text-[10px] text-outline tracking-widest mb-1">
              EXPLORE FURTHER
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
              VIEW PROJECTS
            </Link>
            <Link
              href="/coding"
              className="exhibit-tab px-4 py-2.5 flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <span className="material-symbols-outlined text-[14px]">code</span>
              VIEW CODING PROFILE
            </Link>
          </div>
        </div>
      </RevealSection>

    </main>
  );
}
