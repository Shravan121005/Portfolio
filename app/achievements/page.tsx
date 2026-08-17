"use client";

import { motion, useReducedMotion, useInView, Variants } from "motion/react";
import { useRef } from "react";

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

// ── Animated card wrapper ────────────────────────────────────────────────────

function AnimatedCard({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "slideLeft";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  const variants = variant === "slideLeft" ? slideLeft : fadeUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={inView ? "visible" : "hidden"}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }
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
      className={`font-headline-md text-xl border-2 px-2 py-0.5 inline-block ${colorClass}`}
      style={{ borderRadius: 4, transform: "rotate(-15deg)" }}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.4 }}
      animate={
        inView
          ? { opacity: 0.85, scale: 1 }
          : { opacity: 0, scale: 1.4 }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.2,
              ease: [0.175, 0.885, 0.32, 1.275],
            }
      }
    >
      {text}
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Achievements() {
  const prefersReducedMotion = useReducedMotion();

  const headerRef = useRef<HTMLElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* ── PAGE HEADER ── */}
      <motion.header
        ref={headerRef}
        className="md:col-span-12 mb-8 border-b border-outline-variant pb-4 relative"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
          Milestones &amp; Achievements
          <span className="blinking-cursor" />
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          REF: SEC-994-ACT // COMMENDATIONS &amp; FIELD RECORDS
        </p>

        {/* Header stamp */}
        <div className="sm:absolute sm:top-0 sm:right-0 mt-4 sm:mt-0 flex justify-start sm:justify-end">
          <Stamp text="APPROVED" colorClass="border-[#c31e00] text-[#c31e00]" />
        </div>
      </motion.header>

      {/* ── OFFICIAL COMMENDATIONS ── */}
      <section className="md:col-span-7 space-y-8">
        <AnimatedCard className="flex items-center gap-2 mb-4 border-b border-outline pb-2">
          <span className="material-symbols-outlined text-primary-container">
            military_tech
          </span>
          <h2 className="font-headline-md text-headline-md text-primary-container">
            OFFICIAL COMMENDATIONS
          </h2>
        </AnimatedCard>

        {/* ── ORACLE ── */}
        <AnimatedCard delay={0.05}>
          <article className="dossier-card p-dossier-padding md:rotate-1 relative transition-transform hover:rotate-0 duration-300">
            <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rotate-2 z-10" />
            <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
              DOC_ID: 001
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
                <span
                  className="material-symbols-outlined text-tertiary-container text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <div>
                <h3 className="font-label-md text-primary text-xl mb-1">
                  Oracle Certified Associate, Oracle WebLogic Server 11g System
                  Administrator
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Professional certification covering Oracle WebLogic Server
                  administration and enterprise application server management.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
              <div>
                <span className="text-outline">ISSUER:</span> ORACLE
              </div>
              <div>
                <span className="text-outline">ISSUED:</span> JUL 2026
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
              <Stamp
                text="VERIFIED"
                colorClass="border-tertiary-container text-tertiary-container"
              />
              <div className="text-right">
                <div className="font-label-sm text-outline mb-1">
                  CREDENTIAL STATUS
                </div>
                <div className="font-label-sm text-primary">ACTIVE</div>
              </div>
            </div>
          </article>
        </AnimatedCard>

        {/* ── KAGGLE ── */}
        <AnimatedCard delay={0.1}>
          <article className="dossier-card p-dossier-padding md:-rotate-1 relative transition-transform hover:rotate-0 duration-300">
            <div className="tape absolute -top-2 left-8 w-12 h-5 -rotate-3 z-10" />
            <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
              DOC_ID: 002
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
                <span
                  className="material-symbols-outlined text-secondary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychology
                </span>
              </div>
              <div>
                <h3 className="font-label-md text-primary text-xl mb-1">
                  Intermediate Machine Learning
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Practical Machine Learning certification covering supervised
                  learning, model evaluation, and applied ML workflows.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
              <div>
                <span className="text-outline">ISSUER:</span> KAGGLE
              </div>
              <div>
                <span className="text-outline">ISSUED:</span> JUL 2026
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
              <Stamp
                text="CLEARED"
                colorClass="border-secondary text-secondary"
              />
              <div className="text-right">
                <div className="font-label-sm text-outline mb-1">
                  CREDENTIAL STATUS
                </div>
                <div className="font-label-sm text-primary">ACTIVE</div>
              </div>
            </div>
          </article>
        </AnimatedCard>

        {/* ── IBM ── */}
        <AnimatedCard delay={0.15}>
          <article className="dossier-card p-dossier-padding md:rotate-1 relative transition-transform hover:rotate-0 duration-300">
            <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
              DOC_ID: 003
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
                <span
                  className="material-symbols-outlined text-primary-container text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  model_training
                </span>
              </div>
              <div>
                <h3 className="font-label-md text-primary text-xl mb-1">
                  Machine Learning for Data Science
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Certification focused on Machine Learning methods and their
                  application to practical Data Science workflows.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
              <div>
                <span className="text-outline">ISSUER:</span> IBM
              </div>
              <div>
                <span className="text-outline">ISSUED:</span> JUL 2026
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
              <Stamp
                text="VERIFIED"
                colorClass="border-tertiary-container text-tertiary-container"
              />
              <div className="text-right">
                <div className="font-label-sm text-outline mb-1">
                  CREDENTIAL STATUS
                </div>
                <div className="font-label-sm text-primary">ACTIVE</div>
              </div>
            </div>
          </article>
        </AnimatedCard>

        {/* ── NETWORKING ── */}
        <AnimatedCard delay={0.2}>
          <article className="dossier-card p-dossier-padding md:-rotate-1 relative transition-transform hover:rotate-0 duration-300">
            <div className="tape absolute -top-2 right-12 w-12 h-5 rotate-3 z-10" />
            <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
              DOC_ID: 004
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
                <span
                  className="material-symbols-outlined text-secondary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lan
                </span>
              </div>
              <div>
                <h3 className="font-label-md text-primary text-xl mb-1">
                  The Bits and Bytes of Computer Networking
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Certification covering core computer networking concepts,
                  protocols, and communication fundamentals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
              <div>
                <span className="text-outline">ISSUER:</span> UNITED LATINO
                STUDENTS ASSOCIATION
              </div>
              <div>
                <span className="text-outline">ISSUED:</span> NOV 2025
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
              <Stamp
                text="CLEARED"
                colorClass="border-secondary text-secondary"
              />
              <div className="text-right">
                <div className="font-label-sm text-outline mb-1">
                  CREDENTIAL ID
                </div>
                <div className="font-label-sm text-primary">D7SRMMHRJYJM</div>
              </div>
            </div>
          </article>
        </AnimatedCard>

        {/* ── FULL STACK BOOTCAMP ── */}
        <AnimatedCard delay={0.25}>
          <article className="dossier-card p-dossier-padding md:rotate-1 relative transition-transform hover:rotate-0 duration-300">
            <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
              DOC_ID: 005
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
                <span
                  className="material-symbols-outlined text-primary-container text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  code
                </span>
              </div>
              <div>
                <h3 className="font-label-md text-primary text-xl mb-1">
                  The Complete Full-Stack Web Development Bootcamp
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Comprehensive full-stack development training covering modern
                  web technologies, APIs, backend systems, and deployment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
              <div>
                <span className="text-outline">ISSUER:</span> UDEMY
              </div>
              <div>
                <span className="text-outline">ISSUED:</span> MAY 2025
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
              <Stamp
                text="VERIFIED"
                colorClass="border-tertiary-container text-tertiary-container"
              />
              <div className="text-right">
                <div className="font-label-sm text-outline mb-1">
                  CREDENTIAL ID
                </div>
                <div className="font-label-sm text-primary">
                  UC-50391662-C5E3-4079-80F8-29DDCC49375F
                </div>
              </div>
            </div>
          </article>
        </AnimatedCard>
      </section>

      {/* ── FIELD OPERATIONS ── */}
      <section className="md:col-span-5 space-y-6">
        <AnimatedCard className="flex items-center gap-2 mb-4 border-b border-outline pb-2" variant="slideLeft">
          <span className="material-symbols-outlined text-primary-container">
            radar
          </span>
          <h2 className="font-headline-md text-headline-md text-primary-container">
            FIELD OPERATIONS
          </h2>
        </AnimatedCard>

        {/* Flipkart Grid */}
        <AnimatedCard delay={0.05} variant="slideLeft">
          <div className="dossier-card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0 bg-primary-container opacity-10" />
              <span
                className="material-symbols-outlined text-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                terminal
              </span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-label-md text-primary">
                  OP: FLIPKART GRiD 8.0
                </h4>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm">
                Competed among thousands of participants nationwide. Advanced to
                the semifinals.
              </p>
            </div>
            <Stamp
              text="SEMIFINALIST"
              colorClass="border-tertiary-container text-tertiary-container"
            />
          </div>
        </AnimatedCard>

        {/* GirlScript */}
        <AnimatedCard delay={0.1} variant="slideLeft">
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
                <h4 className="font-label-md text-primary">
                  OP: GIRLSCRIPT SUMMER OF CODE
                </h4>
                <span className="font-label-sm text-on-surface-variant">
                  GSSoC
                </span>
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
        </AnimatedCard>

        {/* VITERA */}
        <AnimatedCard delay={0.15} variant="slideLeft">
          <div className="dossier-card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:-translate-y-1 transition-transform duration-200">
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
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-label-md text-primary">
                  VITERA CLUB // TECH CO-LEAD
                </h4>
                <span className="font-label-sm text-on-surface-variant">
                  NOV 23 - FEB 26
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm">
                Led 10 members, organized 5 technical workshops and coding events
                for 300+ students, and mentored juniors in Python, Git &amp;
                Machine Learning.
              </p>
            </div>
            <Stamp
              text="COMMAND"
              colorClass="border-primary-container text-primary-container"
            />
          </div>
        </AnimatedCard>

        {/* Record Summary */}
        <AnimatedCard delay={0.2} variant="slideLeft">
          <div className="dossier-card p-5 md:-rotate-2">
            <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-2">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">
                military_tech
              </span>
              <h3 className="font-headline-md text-primary">RECORD SUMMARY</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-label-sm text-on-surface-variant block">
                  CERTIFICATIONS
                </span>
                <span className="font-headline-md text-primary">05</span>
              </div>
              <div>
                <span className="font-label-sm text-on-surface-variant block">
                  COMPETITIONS
                </span>
                <span className="font-headline-md text-primary">01+</span>
              </div>
              <div>
                <span className="font-label-sm text-on-surface-variant block">
                  OPEN SOURCE
                </span>
                <span className="font-headline-md text-primary">GSSoC</span>
              </div>
              <div>
                <span className="font-label-sm text-on-surface-variant block">
                  LEADERSHIP
                </span>
                <span className="font-headline-md text-primary">10+</span>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </section>
    </main>
  );
}
