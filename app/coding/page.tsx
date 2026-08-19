"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { animate } from "motion";
import { useRef, useEffect } from "react";

// ── Animated counter ─────────────────────────────────────────────────────────

function Counter({
  target,
  className,
  suffix = "",
}: {
  target: number;
  className?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (prefersReducedMotion) {
      ref.current.textContent = `${target}${suffix}`;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${Math.floor(value)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, prefersReducedMotion]);

  return (
    <span className={className}>
      <span className="sr-only">{target}{suffix}</span>
      <span aria-hidden="true" ref={ref}>0{suffix}</span>
    </span>
  );
}

// ── Animated progress bar ────────────────────────────────────────────────────

function ProgressBar({
  width,
  colorClass,
  prefersReducedMotion,
}: {
  width: string;
  colorClass: string;
  prefersReducedMotion: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="h-2 w-full bg-surface-container border border-outline-variant"
    >
      <motion.div
        className={`h-full ${colorClass}`}
        initial={{ width: 0 }}
        animate={inView ? { width } : { width: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
        }
      />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Coding() {
  const prefersReducedMotion = useReducedMotion();

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const cfRef = useRef<HTMLElement>(null);
  const cfInView = useInView(cfRef, { once: true, margin: "-60px" });

  const lcRef = useRef<HTMLElement>(null);
  const lcInView = useInView(lcRef, { once: true, margin: "-60px" });

  const gfgRef = useRef<HTMLElement>(null);
  const gfgInView = useInView(gfgRef, { once: true, margin: "-60px" });

  const transitionBase = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <main className="w-full flex flex-col">
      {/* Header */}
      <motion.header
        ref={headerRef}
        className="mb-12 border-b border-outline-variant pb-6 scan-sweep"
        initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
        animate={headerInView ? { opacity: 1, x: 0 } : {}}
        transition={transitionBase}
      >
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 uppercase tracking-tight glitch-hover inline-block">
          CODING &amp; ALGORITHMIC PROFILES
        </h1>

        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-tertiary-fixed-dim font-label-md text-label-md">
          <span className="material-symbols-outlined text-sm">terminal</span>
          <span className="uppercase">Retrieving algorithmic profiles...</span>
          <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-sm text-[10px] animate-pulse">
            LIVE
          </span>
        </div>
      </motion.header>

      {/* Single Column Layout */}
      <section className="flex flex-col gap-10 flex-grow">

        {/* ── CODEFORCES ── */}
        <motion.article
          ref={cfRef}
          className="dossier-card p-dossier-padding"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={cfInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...transitionBase, delay: 0 }}
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center mb-6 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                terminal
              </span>
              <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
                CODEFORCES // COMPETITIVE PROGRAMMING
              </h2>
            </div>
            <div className="bg-surface-container px-3 py-1.5 border border-outline-variant">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                PROFILE: ShravanJain
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-start">
              <span className="font-label-sm text-label-sm text-on-surface-variant block mb-2 uppercase tracking-widest">
                Current Rating
              </span>
              <div className="flex items-baseline gap-2">
                <Counter
                  target={1357}
                  className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container leading-none"
                />
              </div>
            </div>

            <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-start">
              <span className="font-label-sm text-label-sm text-on-surface-variant block mb-2 uppercase tracking-widest">
                Peak Rating
              </span>
              <div className="flex items-baseline gap-2">
                <Counter
                  target={1357}
                  className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary-fixed-dim leading-none"
                />
              </div>
            </div>
          </div>

          {/* Footer Row */}
          <div className="mt-2 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-t border-outline-variant pt-4">
            <span className="font-body-md text-body-md text-on-surface-variant uppercase">
              STATUS: Active in competitive programming &amp; algorithmic contests.
            </span>
            <a
              href="https://codeforces.com/profile/ShravanJain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Shravan Jain's Codeforces Profile"
              className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 uppercase btn-sweep hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform border border-on-primary-container shadow-[2px_2px_0px_0px_#000] text-center whitespace-nowrap"
            >
              OPEN PROFILE
            </a>
          </div>
        </motion.article>

        {/* ── LEETCODE ── */}
        <motion.article
          ref={lcRef}
          className="dossier-card p-dossier-padding"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={lcInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...transitionBase, delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center mb-6 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">
                code
              </span>
              <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
                LEETCODE // CODING PROFILE
              </h2>
            </div>
            <div className="bg-surface-container px-3 py-1.5 border border-outline-variant">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                PROFILE: Shravan121005
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
            {/* Difficulty progress bars */}
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              {/* Easy */}
              <div>
                <div className="flex justify-between flex-wrap gap-x-2 font-label-md text-label-md text-on-surface-variant mb-2">
                  <span>PROBLEMS SOLVED (EASY)</span>
                  <Counter
                    target={148}
                    className="text-tertiary-fixed-dim font-bold"
                  />
                </div>
                <ProgressBar
                  width="32.2%"
                  colorClass="bg-tertiary-fixed-dim"
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>

              {/* Medium */}
              <div>
                <div className="flex justify-between flex-wrap gap-x-2 font-label-md text-label-md text-on-surface-variant mb-2">
                  <span>PROBLEMS SOLVED (MEDIUM)</span>
                  <Counter
                    target={256}
                    className="text-primary-container font-bold"
                  />
                </div>
                <ProgressBar
                  width="55.8%"
                  colorClass="bg-primary-container"
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>

              {/* Hard */}
              <div>
                <div className="flex justify-between flex-wrap gap-x-2 font-label-md text-label-md text-on-surface-variant mb-2">
                  <span>PROBLEMS SOLVED (HARD)</span>
                  <Counter
                    target={55}
                    className="text-secondary-container font-bold"
                  />
                </div>
                <ProgressBar
                  width="12%"
                  colorClass="bg-secondary-container"
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            </div>

            {/* Percentile & Streak */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-start h-full">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-2 block uppercase tracking-widest">
                  Percentile
                </span>
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary-fixed-dim leading-none mb-1">
                  TOP{" "}
                  <Counter
                    target={6}
                    suffix=".03%"
                    className="inline"
                  />
                </div>
              </div>

              <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-start h-full">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-2 block uppercase tracking-widest">
                  Longest Streak
                </span>
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container leading-none mb-1">
                  <Counter
                    target={115}
                    suffix=" DAYS"
                    className="inline"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Row */}
          <div className="mt-2 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-t border-outline-variant pt-4">
            <span className="font-body-md text-body-md text-on-surface-variant uppercase">
              STATUS: Consistent practice. 400+ problems solved across all difficulty tiers.
            </span>
            <a
              href="https://leetcode.com/u/Shravan121005/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Shravan Jain's LeetCode Profile"
              className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 uppercase btn-sweep hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform border border-on-primary-container shadow-[2px_2px_0px_0px_#000] text-center whitespace-nowrap"
            >
              OPEN PROFILE
            </a>
          </div>
        </motion.article>

        {/* ── GEEKSFORGEEKS ── */}
        <motion.article
          ref={gfgRef}
          className="dossier-card p-dossier-padding"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={gfgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...transitionBase, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center mb-6 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container text-3xl">
                data_object
              </span>
              <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
                GEEKSFORGEEKS // CODING PROFILE
              </h2>
            </div>
            <div className="bg-surface-container px-3 py-1.5 border border-outline-variant">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                PROFILE: shravanjain1210
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-center text-center">
              <Counter target={1257} className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mb-2" />
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                Coding Score
              </span>
            </div>

            <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-center text-center">
              <Counter target={354} className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary-fixed-dim mb-2" />
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                Problems Solved
              </span>
            </div>

            <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-center text-center">
              <Counter target={451} className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary-container mb-2" />
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                Institute Rank
              </span>
            </div>

            <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-center text-center">
              <Counter target={126} className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary-fixed-dim mb-2" />
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                POTD Solved
              </span>
            </div>

            <div className="bg-surface-container p-6 border border-outline-variant flex flex-col justify-center items-center text-center col-span-2 lg:col-span-1">
              <Counter target={89} suffix="d" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2" />
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                Longest Streak
              </span>
            </div>
          </div>

          {/* Footer Row */}
          <div className="mt-2 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-t border-outline-variant pt-4">
            <span className="font-body-md text-body-md text-on-surface-variant uppercase">
              STATUS: Consistent problem of the day (POTD) solver. 126 POTDs completed.
            </span>
            <a
              href="https://www.geeksforgeeks.org/user/shravanjain1210/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Shravan Jain's GeeksForGeeks Profile"
              className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 uppercase btn-sweep hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform border border-on-primary-container shadow-[2px_2px_0px_0px_#000] text-center whitespace-nowrap"
            >
              OPEN PROFILE
            </a>
          </div>
        </motion.article>

      </section>
    </main>
  );
}
