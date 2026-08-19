"use client";

import { motion, useReducedMotion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

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

// ── Credential document component ────────────────────────────────────────────

function CredentialDoc({
  docId,
  title,
  description,
  issuer,
  issued,
  credentialId,
  stampText,
  stampColorClass,
  rotation,
  delay,
  iconName,
  iconColor,
}: {
  docId: string;
  title: string;
  description: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  stampText: string;
  stampColorClass: string;
  rotation?: string;
  delay?: number;
  iconName: string;
  iconColor: string;
}) {
  return (
    <AnimatedCard delay={delay}>
      <article
        className={`credential-doc p-dossier-padding relative transition-transform duration-300 hover:rotate-0 ${rotation ?? ""}`}
      >
        {/* Doc ID corner tag */}
        <div className="absolute top-2 right-3 text-on-surface-variant font-label-sm text-[10px] tracking-widest">
          RECORD NO: {docId}
        </div>

        {/* Tape decoration */}
        {docId === "001" && (
          <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 rotate-2 z-10" />
        )}
        {docId === "002" && (
          <div className="tape absolute -top-2 left-8 w-12 h-5 -rotate-3 z-10" />
        )}
        {docId === "004" && (
          <div className="tape absolute -top-2 right-12 w-12 h-5 rotate-3 z-10" />
        )}

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
          <div
            className="w-14 h-14 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0"
          >
            <span
              className="material-symbols-outlined text-3xl"
              style={{ color: iconColor, fontVariationSettings: "'FILL' 1" }}
            >
              {iconName}
            </span>
          </div>
          <div>
            <h3 className="font-label-md text-primary text-lg leading-snug mb-1">
              {title}
            </h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              {description}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-2 gap-4 font-label-sm text-[11px] text-on-surface-variant mb-1">
          <div>
            <span className="text-outline">ISSUER: </span>
            {issuer}
          </div>
          <div>
            <span className="text-outline">ISSUED: </span>
            {issued}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
          <Stamp text={stampText} colorClass={stampColorClass} />
          <div className="text-right">
            <div className="font-label-sm text-[10px] text-outline mb-1">
              {credentialId ? "CREDENTIAL ID" : "CREDENTIAL STATUS"}
            </div>
            <div className="font-label-sm text-[11px] text-primary truncate max-w-[200px]">
              {credentialId ?? "ACTIVE"}
            </div>
          </div>
        </div>
      </article>
    </AnimatedCard>
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
        className="md:col-span-12 mb-8 border-b border-outline-variant pb-4 relative scan-sweep"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
          CREDENTIALS &amp; ACHIEVEMENTS
          <span className="blinking-cursor" />
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          REF: SEC-994-ACT // COMMENDATIONS &amp; VERIFIED RECORDS
        </p>

        {/* Header stamp */}
        <div className="sm:absolute sm:top-0 sm:right-0 mt-4 sm:mt-0 flex justify-start sm:justify-end">
          <Stamp text="VERIFIED" colorClass="border-[#c31e00] text-[#c31e00]" />
        </div>
      </motion.header>

      {/* ── LEFT COL: CREDENTIALS ── */}
      <section className="md:col-span-7 space-y-8">
        <AnimatedCard className="flex items-center gap-2 mb-4 border-b border-outline pb-2">
          <span className="material-symbols-outlined text-primary-container">
            military_tech
          </span>
          <h2 className="font-headline-md text-headline-md text-primary-container">
            CERTIFICATIONS
          </h2>
        </AnimatedCard>

        {/* Kaggle ML */}
        <CredentialDoc
          docId="001"
          title="Intermediate Machine Learning"
          description="Practical Machine Learning certification covering supervised learning, model evaluation, feature engineering and applied ML workflows."
          issuer="KAGGLE"
          issued="JUL 2026"
          stampText="VERIFIED"
          stampColorClass="border-tertiary-container text-tertiary-container"
          rotation="md:rotate-1"
          delay={0.05}
          iconName="psychology"
          iconColor="var(--color-secondary)"
        />

        {/* Google Networking */}
        <CredentialDoc
          docId="002"
          title="The Bits and Bytes of Computer Networking"
          description="Certification covering core computer networking concepts, protocols, and communication fundamentals."
          issuer="GOOGLE (COURSERA)"
          issued="NOV 2025"
          credentialId="D7SRMMHRJYJM"
          stampText="CLEARED"
          stampColorClass="border-secondary text-secondary"
          rotation="md:-rotate-1"
          delay={0.1}
          iconName="lan"
          iconColor="var(--color-secondary)"
        />

        {/* IBM ML */}
        <CredentialDoc
          docId="003"
          title="Machine Learning for Data Science"
          description="Certification focused on Machine Learning methods and their application to practical Data Science workflows."
          issuer="IBM"
          issued="JUL 2026"
          stampText="VERIFIED"
          stampColorClass="border-tertiary-container text-tertiary-container"
          rotation="md:rotate-1"
          delay={0.15}
          iconName="model_training"
          iconColor="var(--color-primary-container)"
        />

        {/* Full Stack Bootcamp */}
        <CredentialDoc
          docId="004"
          title="The Complete Full-Stack Web Development Bootcamp"
          description="Comprehensive full-stack development training covering modern web technologies, APIs, backend systems, and deployment."
          issuer="UDEMY"
          issued="MAY 2025"
          credentialId="UC-50391662-C5E3-4079-80F8-29DDCC49375F"
          stampText="VERIFIED"
          stampColorClass="border-tertiary-container text-tertiary-container"
          rotation="md:-rotate-1"
          delay={0.2}
          iconName="code"
          iconColor="var(--color-primary-container)"
        />
      </section>

      {/* ── RIGHT COL: Acheivements ── */}
      <section className="md:col-span-5 space-y-6">
        <AnimatedCard className="flex items-center gap-2 mb-4 border-b border-outline pb-2" variant="slideLeft">
          <span className="material-symbols-outlined text-primary-container">
            radar
          </span>
          <h2 className="font-headline-md text-headline-md text-primary-container">
            ACHIEVEMENTS
          </h2>
        </AnimatedCard>

        {/* Flipkart GRiD */}
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
                <h4 className="font-label-md text-primary">OP: FLIPKART GRiD 8.0</h4>
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

        {/* Coding profiles cross-link */}
        <AnimatedCard delay={0.2} variant="slideLeft">
          <div className="dossier-card p-4 hover:-translate-y-1 transition-transform duration-200">
            <div className="flex items-center gap-2 mb-3 border-b border-outline-variant pb-2">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">
                code
              </span>
              <h4 className="font-label-md text-primary">ALGORITHMIC THREAT PROFILE</h4>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="metric-box">
                <div className="font-headline-md text-xl text-primary-container leading-none mb-0.5">
                  400+
                </div>
                <div className="font-label-sm text-[9px] text-outline tracking-widest">
                  LEETCODE PROBLEMS
                </div>
              </div>
              <div className="metric-box">
                <div className="font-headline-md text-xl text-tertiary-fixed-dim leading-none mb-0.5">
                  1357
                </div>
                <div className="font-label-sm text-[9px] text-outline tracking-widest">
                  CODEFORCES RATING
                </div>
              </div>
              <div className="metric-box col-span-2">
                <div className="font-label-sm text-[11px] text-primary-container leading-none mb-0.5">
                  TOP 6.03%
                </div>
                <div className="font-label-sm text-[9px] text-outline tracking-widest">
                  LEETCODE PERCENTILE
                </div>
              </div>
            </div>
            <Link
              href="/coding"
              className="font-label-md text-label-md text-primary border border-outline-variant px-3 py-2 flex items-center gap-2 hover:border-primary-container hover:text-primary-container transition-all btn-sweep w-full justify-center"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              VIEW INTEL PROFILE
            </Link>
          </div>
        </AnimatedCard>

        {/* Record Summary */}
        <AnimatedCard delay={0.25} variant="slideLeft">
          <div className="dossier-card p-5 md:-rotate-2 hover:rotate-0 transition-transform duration-300">
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
                <span className="font-headline-md text-primary">04</span>
              </div>
              <div>
                <span className="font-label-sm text-on-surface-variant block">
                  COMPETITIONS
                </span>
                <span className="font-headline-md text-primary">02+</span>
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
