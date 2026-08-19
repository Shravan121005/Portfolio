"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion, useInView, Variants } from "motion/react";
import DocumentModal from "@/components/DocumentModal";

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
      className={`font-headline-md text-xl border-2 px-3 py-1 inline-block select-none whitespace-nowrap ${colorClass}`}
      style={{ borderRadius: 4, transform: "rotate(-5deg)" }}
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
  title,
  description,
  issuer,
  issued,
  credentialId,
  stampText,
  stampColorClass,
  delay,
  iconName,
  iconColor,
  previewDocId,
  onPreview,
}: {
  title: string;
  description: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  stampText: string;
  stampColorClass: string;
  delay?: number;
  iconName: string;
  iconColor: string;
  previewDocId?: string;
  onPreview?: (docId: string) => void;
}) {
  return (
    <AnimatedCard delay={delay}>
      <article className="dossier-card p-dossier-padding flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* LEFT */}
        <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start w-full">
           <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
             <span className="material-symbols-outlined text-3xl" style={{ color: iconColor, fontVariationSettings: "'FILL' 1" }}>
               {iconName}
             </span>
           </div>
           <div className="flex-1">
             <h3 className="font-headline-md text-primary text-xl leading-snug mb-2">
               {title}
             </h3>
             <p className="font-body-md text-on-surface-variant text-sm mb-4 max-w-2xl">
               {description}
             </p>
             <div className="font-label-sm text-[11px] text-outline uppercase tracking-widest">
               ISSUER: <span className="text-on-surface-variant ml-2">{issuer}</span>
             </div>
           </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-64 shrink-0 w-full flex flex-col md:items-end border-t md:border-t-0 md:border-l border-outline-variant pt-5 md:pt-0 md:pl-6 gap-4">
           <div className="flex w-full justify-between md:flex-col md:items-end gap-2">
             <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest">
               ISSUED: <span className="text-on-surface-variant ml-2">{issued}</span>
             </span>
             {credentialId && (
               <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest text-right">
                 ID: <span className="text-primary truncate max-w-[150px] inline-block align-bottom ml-2">{credentialId}</span>
               </span>
             )}
           </div>
           
           <div className="flex w-full justify-between items-center md:flex-col md:items-end gap-4 mt-2 md:mt-auto">
             <Stamp text={stampText} colorClass={stampColorClass} />
             
             {previewDocId && onPreview && (
               <button 
                 onClick={() => onPreview(previewDocId)}
                 className="font-label-sm text-label-sm text-primary border border-outline-variant px-3 py-1.5 flex items-center gap-1.5 hover:border-primary hover:text-primary transition-all uppercase whitespace-nowrap btn-sweep"
                 aria-label={`Preview ${title}`}
               >
                 <span className="material-symbols-outlined text-[14px]">visibility</span>
                 PREVIEW
               </button>
             )}
           </div>
        </div>
      </article>
    </AnimatedCard>
  );
}

// ── Achievement component ────────────────────────────────────────────────────

function AchievementCard({
  title,
  description,
  category,
  stampText,
  stampColorClass,
  delay,
  iconName,
  iconColor,
}: {
  title: string;
  description: string;
  category: string;
  stampText: string;
  stampColorClass: string;
  delay?: number;
  iconName: string;
  iconColor: string;
}) {
  return (
    <AnimatedCard delay={delay}>
      <article className="dossier-card p-dossier-padding flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* LEFT */}
        <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start w-full">
           <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline shrink-0">
             <span className="material-symbols-outlined text-3xl" style={{ color: iconColor, fontVariationSettings: "'FILL' 1" }}>
               {iconName}
             </span>
           </div>
           <div className="flex-1">
             <h3 className="font-headline-md text-primary text-xl leading-snug mb-2">
               {title}
             </h3>
             <p className="font-body-md text-on-surface-variant text-sm mb-4 max-w-2xl">
               {description}
             </p>
             <div className="font-label-sm text-[11px] text-outline uppercase tracking-widest">
               {category}
             </div>
           </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-56 shrink-0 w-full flex flex-col md:items-end border-t md:border-t-0 md:border-l border-outline-variant pt-5 md:pt-0 md:pl-6">
           <Stamp text={stampText} colorClass={stampColorClass} />
        </div>
      </article>
    </AnimatedCard>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Achievements() {
  const prefersReducedMotion = useReducedMotion();
  const [previewDocId, setPreviewDocId] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const handlePreview = (docId: string) => {
    setPreviewDocId(docId);
  };

  return (
    <>
      <main className="w-full relative z-10 flex flex-col gap-10">
        {/* ── PAGE HEADER ── */}
        <motion.header
          ref={headerRef}
          className="border-b border-outline-variant pb-6 relative scan-sweep"
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
            PROFESSIONAL CREDENTIALS // CERTIFICATIONS &amp; ACHIEVEMENTS
          </p>
        </motion.header>

        {/* ── SUMMARY METRICS ── */}
        <AnimatedCard delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container p-5 border border-outline-variant flex flex-col items-center justify-center">
              <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mb-2">04</span>
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest">CERTIFICATIONS</span>
            </div>
            <div className="bg-surface-container p-5 border border-outline-variant flex flex-col items-center justify-center">
              <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary-fixed-dim mb-2">02+</span>
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest">COMPETITIONS</span>
            </div>
            <div className="bg-surface-container p-5 border border-outline-variant flex flex-col items-center justify-center">
              <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">GSSoC</span>
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest">OPEN SOURCE</span>
            </div>
            <div className="bg-surface-container p-5 border border-outline-variant flex flex-col items-center justify-center">
              <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary-container mb-2">10+</span>
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest">LEADERSHIP</span>
            </div>
          </div>
        </AnimatedCard>

        {/* ── CERTIFICATIONS ── */}
        <section className="space-y-6">
          <AnimatedCard delay={0.1} className="flex items-center gap-3 mb-6 border-b border-outline pb-4 mt-4">
            <span className="material-symbols-outlined text-primary-container text-3xl">
              military_tech
            </span>
            <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
              CERTIFICATIONS
            </h2>
          </AnimatedCard>

          {/* Kaggle ML */}
          <CredentialDoc
            title="Intermediate Machine Learning"
            description="Practical Machine Learning certification covering supervised learning, model evaluation, feature engineering and applied ML workflows."
            issuer="KAGGLE"
            issued="JUL 2026"
            stampText="VERIFIED"
            stampColorClass="border-tertiary-container text-tertiary-container"
            delay={0.15}
            iconName="psychology"
            iconColor="var(--color-secondary)"
            previewDocId="Kaggle"
            onPreview={handlePreview}
          />

          {/* Google Networking */}
          <CredentialDoc
            title="The Bits and Bytes of Computer Networking"
            description="Certification covering core computer networking concepts, protocols, and communication fundamentals."
            issuer="GOOGLE (COURSERA)"
            issued="NOV 2025"
            credentialId="D7SRMMHRJYJM"
            stampText="CLEARED"
            stampColorClass="border-secondary text-secondary"
            delay={0.2}
            iconName="lan"
            iconColor="var(--color-secondary)"
            previewDocId="Coursera cert"
            onPreview={handlePreview}
          />

          {/* IBM ML */}
          <CredentialDoc
            title="Machine Learning for Data Science"
            description="Certification focused on Machine Learning methods and their application to practical Data Science workflows."
            issuer="IBM"
            issued="JUL 2026"
            stampText="VERIFIED"
            stampColorClass="border-tertiary-container text-tertiary-container"
            delay={0.25}
            iconName="model_training"
            iconColor="var(--color-primary-container)"
            previewDocId="IBM"
            onPreview={handlePreview}
          />

          {/* Full Stack Bootcamp */}
          <CredentialDoc
            title="The Complete Full-Stack Web Development Bootcamp"
            description="Comprehensive full-stack development training covering modern web technologies, APIs, backend systems, and deployment."
            issuer="UDEMY"
            issued="MAY 2025"
            credentialId="UC-50391662-C5E3-4079-80F8-29DDCC49375F"
            stampText="VERIFIED"
            stampColorClass="border-tertiary-container text-tertiary-container"
            delay={0.3}
            iconName="code"
            iconColor="var(--color-primary-container)"
            previewDocId="Udemy"
            onPreview={handlePreview}
          />
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section className="space-y-6">
          <AnimatedCard delay={0.35} className="flex items-center gap-3 mb-6 border-b border-outline pb-4 mt-8">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">
              radar
            </span>
            <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
              ACHIEVEMENTS
            </h2>
          </AnimatedCard>

          {/* Flipkart GRiD */}
          <AchievementCard
            title="Flipkart GRiD 8.0"
            description="Competed among thousands of participants nationwide and advanced to the semifinals."
            category="COMPETITION"
            stampText="SEMIFINALIST"
            stampColorClass="border-tertiary-container text-tertiary-container"
            delay={0.4}
            iconName="terminal"
            iconColor="var(--color-primary-container)"
          />

          {/* GirlScript Summer of Code */}
          <AchievementCard
            title="GirlScript Summer of Code"
            description="Open-source development experience contributing to collaborative software projects and real-world development workflows."
            category="OPEN SOURCE"
            stampText="CONTRIBUTOR"
            stampColorClass="border-secondary text-secondary"
            delay={0.45}
            iconName="code_blocks"
            iconColor="var(--color-secondary)"
          />
        </section>
      </main>

      <DocumentModal 
        isOpen={!!previewDocId} 
        onClose={() => setPreviewDocId(null)} 
        initialDocId={previewDocId || undefined} 
      />
    </>
  );
}
