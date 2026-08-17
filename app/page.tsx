"use client";

import {
  motion,
  useReducedMotion,
  Variants,
} from "motion/react";

// ── Shared animation variants ────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  // If reduced motion: show everything instantly
  const initialState = prefersReducedMotion ? "visible" : "hidden";
  const transitionBase = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <main className="flex flex-col md:flex-row gap-12 items-start justify-center w-full">
      {/* ── Subject Polaroid (Left Col) ── */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center md:justify-end md:sticky md:top-32"
        initial={prefersReducedMotion ? false : { opacity: 0, rotate: -8, y: 30 }}
        animate={{ opacity: 1, rotate: -2, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        whileHover={
          prefersReducedMotion
            ? {}
            : { rotate: 0, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
        }
        style={{ willChange: "transform" }}
      >
        <div className="bg-surface-container p-4 pb-12 border-2 border-outline shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full max-w-80">
          {/* Tape */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-surface-tint/60 backdrop-blur-sm rotate-2 z-20"
            initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-80 object-contain border-b-4 border-r-4 border-surface-container-lowest filter grayscale contrast-125 mb-4"
            alt="A gritty, high-contrast black and white polaroid photograph of a male software engineer, intense expression, stark lighting casting heavy shadows."
            src="/profile.png"
          />
          <div className="font-label-md text-label-md text-on-surface-variant flex justify-between border-b border-outline-variant pb-2">
            <span>ID: SJ-89-X</span>
            <span className="text-error font-bold blinking-cursor">
              STATUS: ACTIVE
            </span>
          </div>
          <div className="mt-4 font-label-md text-body-md text-on-surface opacity-70 italic">
            &quot;Models.Systems.Logic.&quot;
          </div>
        </div>
      </motion.div>

      {/* ── Dossier Content (Right Col) ── */}
      <motion.div
        className="w-full md:w-2/3 flex flex-col gap-8 md:rotate-[1deg]"
        variants={staggerContainer}
        initial={initialState}
        animate="visible"
        transition={{ delayChildren: 0.35 }}
      >
        {/* Main Personnel File Card */}
        <motion.div
          className="dossier-card p-dossier-padding"
          variants={fadeUp}
          transition={transitionBase}
        >
          <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container font-label-sm px-3 py-1 border-l border-b border-[#333333]">
            DOC NO. 04A
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-6 border-b-2 border-outline pb-4 flex items-center justify-between">
            <span>SUBJECT OVERVIEW</span>
            <span className="material-symbols-outlined text-4xl opacity-50">
              badge
            </span>
          </h1>

          {/* Metadata grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body-md text-body-md text-on-surface-variant mb-8"
            variants={staggerContainer}
          >
            <motion.div className="border-l-2 border-surface-tint pl-4" variants={fadeIn} transition={{ ...transitionBase, duration: 0.3 }}>
              <div className="font-label-sm text-label-sm text-primary opacity-70 mb-1">
                ALIAS / NAME
              </div>
              <div className="font-bold text-on-surface uppercase">
                Shravan Shashi Jain
              </div>
            </motion.div>

            <motion.div className="border-l-2 border-surface-tint pl-4" variants={fadeIn} transition={{ ...transitionBase, duration: 0.3 }}>
              <div className="font-label-sm text-label-sm text-primary opacity-70 mb-1">
                PRIMARY LOCATION
              </div>
              <div className="font-bold text-on-surface uppercase">
                Vellore Institute of Technology
              </div>
            </motion.div>

            <motion.div className="border-l-2 border-surface-tint pl-4 md:col-span-2" variants={fadeIn} transition={{ ...transitionBase, duration: 0.3 }}>
              <div className="font-label-sm text-label-sm text-primary opacity-70 mb-1">
                KNOWN ASSOCIATIONS
              </div>
              <div className="font-bold text-on-surface w-full text-[11px] sm:text-sm md:text-base md:typewriter-text">
                MACHINE_LEARNING_ENGINEER // FULL_STACK_DEV
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <div className="bg-surface-container-lowest p-4 border border-outline-variant text-body-md font-body-md">
            <p className="mb-4">
              Subject demonstrates a strong passion for problem-solving, with a
              particular interest in Machine Learning and full-stack software
              development. Driven by curiosity, analytical thinking, and a
              constant desire to build better solutions from complex problems.
            </p>
            <p>
              WARNING: Subject is highly engaged in learning, experimenting, and
              engineering scalable systems. Known to approach difficult problems
              with persistence, explore ideas beyond the obvious solution, and
              continuously improve through hands-on development.
            </p>
          </div>
        </motion.div>

        {/* Operational Capabilities Grid */}
        <motion.div
          className="dossier-card p-dossier-padding relative"
          variants={fadeUp}
          transition={{ ...transitionBase, delay: 0.1 }}
        >
          <div className="hidden md:flex absolute -left-12 top-[68px] w-24 h-6 bg-secondary-container text-on-secondary-container font-label-sm items-center justify-center rotate-[-90deg] border border-[#333333] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
            EVIDENCE
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-6 md:ml-6 border-b border-outline pb-2">
            OPERATIONAL CAPABILITIES
          </h2>

          {/* Capability cells — staggered entrance */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-6"
            variants={staggerContainer}
            initial={initialState}
            animate="visible"
            transition={{ delayChildren: 0.55 }}
          >
            {[
              { icon: "memory", label: "PROBLEM SOLVING / DSA" },
              { icon: "code", label: "WEB TECHNOLOGIES" },
              { icon: "database", label: "SYSTEMS & DEPLOYMENT" },
              { icon: "rocket_launch", label: "MACHINE LEARNING" },
            ].map(({ icon, label }) => (
              <motion.div
                key={label}
                className="flex items-center gap-3 bg-surface-container p-3 border border-outline-variant hover:bg-surface-bright hover:border-outline transition-all glitch-hover cursor-default group"
                variants={fadeUp}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={prefersReducedMotion ? {} : { x: 2 }}
              >
                <span className="material-symbols-outlined text-tertiary-container group-hover:text-tertiary-fixed-dim transition-colors">
                  {icon}
                </span>
                <span className="font-label-md text-label-md text-on-surface">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Area */}
        <motion.div
          className="flex justify-start md:justify-end mt-4"
          variants={fadeUp}
          transition={{ ...transitionBase, delay: 0.2 }}
        >
          <a
            href="mailto:shravanjain.dev@gmail.com"
            className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] btn-sweep flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto text-center hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            <span className="material-symbols-outlined">mail</span>
            CONTACT SUBJECT
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
