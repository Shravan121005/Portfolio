"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ── Document registry — add future documents here ─────────────────────────────

export interface DocumentEntry {
  id: string;
  name: string;
  description: string;
  path: string;         // /public path, served at root
  filename: string;     // filename used for the download attribute
}

const DOCUMENTS: DocumentEntry[] = [
  {
    id: "resume",
    name: "SOFTWARE DEVELOPER & AI ENGINEER",
    description:
      "Full-stack & ML engineering resume — Python, C++, React, FastAPI, Docker. " +
      "Projects include DeepGuard AI (96.2% accuracy), BugInsight, and SmartDiet AI.",
    path: "/docs/resume.pdf",
    filename: "Shravan_Jain_Resume.pdf",
  },
  {
    id: "Oracle cert",
    name: "Oracle Agentic AI Foundation",
    description:
      "Oracle’s certification demonstrating foundational knowledge of Agentic AI concepts and technologies.",
    path: "/docs/Oracle.pdf",
    filename: "Shravan_Jain_Oracle.pdf",
  },
  {
    id: "Coursera cert",
    name: "Bits And Bytes Of Computer Networking",
    description:
      "Completed Google’s networking course covering fundamental computer networking concepts and principles." +
      "Built a strong foundation in networking fundamentals relevant to systems, backend, and cloud engineering.",
    path: "/docs/Coursera.pdf",
    filename: "Shravan_Jain_Coursera.pdf",
  },
  {
    id: "IBM",
    name: "Machine Learning for Data Science Projects – IBM SkillsBuild",
    description:
      "Completed IBM SkillsBuild training focused on applying machine learning concepts to data science projects." +
      "Developed foundational understanding of ML workflows and practical project applications.",
    path: "/docs/IBMskillbuild.pdf",
    filename: "Shravan_Jain_IBMskillbuild.pdf",
  },
  {
    id: "Kaggle",
    name: "Intermediate Machine Learning – Kaggle",
    description:
      "Completed Kaggle’s Intermediate Machine Learning course, strengthening practical understanding of machine learning concepts and workflows." +
      "Gained hands-on exposure to applying ML techniques for building and improving predictive models.",
    path: "/docs/Intermediate Machine Learning.pdf",
    filename: "Shravan_Jain_Intermediate Machine Learning.pdf",
  },
  {
    id: "Udemy",
    name: "Full-Stack Web Development Bootcamp",
    description:
      "Completed a 61.5-hour comprehensive bootcamp covering full-stack web development with hands-on projects." +
      "Built practical skills across frontend, backend, databases, APIs, and modern web development workflows.",
    path: "/docs/ShravanJainUdemy.pdf",
    filename: "Shravan_Jain_Udemy.pdf",
  },

];

// ── Variants ──────────────────────────────────────────────────────────────────

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const viewerVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08 + 0.15,
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

// ── Sub-components ────────────────────────────────────────────────────────────

// ── PDF Viewer Overlay — large immersive viewer ────────────────────────────────

function PDFViewerOverlay({
  doc,
  onBack,
  onClose,
}: {
  doc: DocumentEntry;
  onBack: () => void;
  onClose: () => void;
}) {
  const viewerRef = useRef<HTMLDivElement>(null);

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (viewerRef.current && !viewerRef.current.contains(e.target as Node)) {
      onBack(); // clicking outside → back to selector (not full close)
    }
  }

  return (
    <>
      {/* Viewer backdrop — slightly darker than the selector backdrop */}
      <motion.div
        key="pdf-viewer-backdrop"
        className="fixed inset-0 z-[115] bg-black/60 backdrop-blur-[2px]"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.18 }}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Viewer panel */}
      <motion.div
        key="pdf-viewer-panel"
        className="fixed inset-0 z-[116] flex items-center justify-center
          p-2 sm:p-4 md:p-6
          pointer-events-none"
        variants={viewerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          ref={viewerRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Previewing: ${doc.name}`}
          className="
            pointer-events-auto
            flex flex-col
            bg-surface-container
            border-2 border-outline
            shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
            overflow-hidden

            /* mobile: nearly full screen */
            w-[98vw] h-[93vh]

            /* tablet+ */
            sm:w-[94vw] sm:h-[90vh]

            /* desktop */
            md:w-[90vw] md:h-[88vh]
          "
          style={{ borderRadius: "2px" }}
        >
          {/* ── Compact sticky header ── */}
          <div className="
            flex items-center justify-between
            px-3 sm:px-5 py-2.5
            border-b-2 border-outline-variant
            bg-surface-container-low
            shrink-0 gap-3
          ">
            {/* Left: label + document title */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="shrink-0 hidden sm:flex flex-col">
                <span className="font-label-sm text-[9px] text-outline tracking-[0.2em] uppercase leading-none">
                  PREVIEWING
                </span>
              </div>
              <div className="w-px h-6 bg-outline-variant hidden sm:block shrink-0" />
              <div className="font-label-md text-label-md text-primary truncate">
                {doc.name}
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Back to selector */}
              <button
                onClick={onBack}
                aria-label="Back to document selector"
                className="
                  font-label-sm text-label-sm
                  text-on-surface-variant
                  border border-outline-variant
                  px-2.5 py-1.5
                  flex items-center gap-1.5
                  hover:border-outline hover:text-on-surface
                  transition-all
                "
              >
                <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                <span className="hidden sm:inline">BACK</span>
              </button>

              {/* Download */}
              <a
                href={doc.path}
                download={doc.filename}
                aria-label={`Download ${doc.name}`}
                className="
                  font-label-sm text-label-sm
                  bg-primary-container text-on-primary-container
                  border-2 border-black
                  px-2.5 py-1.5
                  flex items-center gap-1.5
                  hover:opacity-90 transition-opacity
                  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                "
              >
                <span className="material-symbols-outlined text-[14px]">download</span>
                <span className="hidden sm:inline">DOWNLOAD</span>
              </a>

              {/* Close viewer (goes back to selector) */}
              <button
                onClick={onBack}
                aria-label="Close preview"
                className="
                  w-8 h-8
                  border-2 border-outline
                  flex items-center justify-center
                  text-on-surface-variant
                  hover:border-primary hover:text-primary hover:bg-surface-container-high
                  transition-all
                "
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>

          {/* ── PDF area — fills all remaining height ── */}
          <div className="flex-1 min-h-0 bg-[#1a1a1a] relative">
            {/* Subtle scan line at top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-primary-container/30 z-10" />

            <iframe
              src={`${doc.path}#toolbar=1&navpanes=0&view=FitH`}
              title={doc.name}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function DocumentCard({
  doc,
  index,
  onPreview,
}: {
  doc: DocumentEntry;
  index: number;
  onPreview: (doc: DocumentEntry) => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="border border-outline-variant bg-surface-container-low p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-outline hover:bg-surface-container transition-all group"
    >
      {/* Icon */}
      <div className="shrink-0 w-10 h-10 bg-primary-container/20 border border-primary-container/40 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary-container text-[20px]">
          picture_as_pdf
        </span>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="font-label-md text-label-md text-primary-container tracking-wide mb-1 group-hover:text-primary transition-colors">
          {doc.name}
        </div>
        <p className="font-body-md text-[12px] text-on-surface-variant leading-relaxed">
          {doc.description}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-row sm:flex-col gap-2 shrink-0">
        {/* Preview */}
        <button
          onClick={() => onPreview(doc)}
          className="font-label-sm text-label-sm text-on-surface border-2 border-outline px-3 py-1.5 flex items-center gap-1.5 hover:border-primary hover:text-primary transition-all"
          aria-label={`Preview ${doc.name}`}
        >
          <span className="material-symbols-outlined text-[14px]">visibility</span>
          PREVIEW
        </button>

        {/* Download */}
        <a
          href={doc.path}
          download={doc.filename}
          className="font-label-sm text-label-sm bg-primary-container text-on-primary-container border-2 border-black px-3 py-1.5 flex items-center gap-1.5 hover:opacity-90 transition-opacity shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          aria-label={`Download ${doc.name}`}
        >
          <span className="material-symbols-outlined text-[14px]">download</span>
          DOWNLOAD
        </a>
      </div>
    </motion.div>
  );
}

// ── Main Modal ────────────────────────────────────────────────────────────────

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DocumentModal({ isOpen, onClose }: DocumentModalProps) {
  const [previewDoc, setPreviewDoc] = useState<DocumentEntry | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset to selector when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Small delay so exit animation finishes before resetting preview state
      const t = setTimeout(() => setPreviewDoc(null), 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Escape key closes modal
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (previewDoc) {
          setPreviewDoc(null); // go back to selector first
        } else {
          onClose();
        }
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden"; // lock scroll
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, previewDoc, onClose]);

  // Click outside modal panel to close
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Shared backdrop for selector ── */}
          <motion.div
            key="doc-modal-backdrop"
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            onClick={!previewDoc ? handleBackdropClick : undefined}
            aria-hidden="true"
          />

          {/* ── Document selector modal — hidden while viewer is open ── */}
          <AnimatePresence>
            {!previewDoc && (
              <motion.div
                key="doc-modal-panel"
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  ref={modalRef}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Document Selector"
                  className="pointer-events-auto w-full max-w-xl max-h-[90vh] flex flex-col bg-surface-container border-2 border-outline shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                  style={{ borderRadius: "2px" }}
                >
                  {/* Modal header */}
                  <div className="px-5 pt-5 pb-4 border-b border-outline-variant shrink-0 relative">
                    {/* Scan sweep overlay */}
                    <div className="absolute inset-0 scan-sweep pointer-events-none" />

                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 mb-3 px-2 py-1 bg-primary-container/20 border border-primary-container/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container status-pulse" />
                      <span className="font-label-sm text-[9px] text-primary tracking-[0.2em]">
                        RECRUITER &amp; CREDENTIALS HUB
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                          SELECT DOCUMENT
                        </h2>
                        <p className="font-label-sm text-[11px] text-outline mt-1 tracking-wider">
                          REF: DOC-VAULT-01 // {DOCUMENTS.length} DOCUMENT
                          {DOCUMENTS.length !== 1 ? "S" : ""} AVAILABLE
                        </p>
                      </div>

                      {/* Close button */}
                      <button
                        onClick={onClose}
                        aria-label="Close document selector"
                        className="w-8 h-8 border-2 border-outline flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container-high transition-all shrink-0 mt-0.5"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>
                  </div>

                  {/* Document list */}
                  <div className="overflow-y-auto flex-1 p-4 space-y-3">
                    {DOCUMENTS.map((doc, i) => (
                      <DocumentCard
                        key={doc.id}
                        doc={doc}
                        index={i}
                        onPreview={setPreviewDoc}
                      />
                    ))}
                  </div>

                  {/* Modal footer */}
                  <div className="px-5 py-3 border-t border-outline-variant border-dashed shrink-0">
                    <p className="font-label-sm text-[9px] text-outline tracking-widest text-center">
                      SHRAVAN SHASHI JAIN // CASE FILE: SJ-89-X // DOCUMENTS CLEARED FOR REVIEW
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Large PDF viewer — separate full-screen overlay ── */}
          <AnimatePresence>
            {previewDoc && (
              <PDFViewerOverlay
                key={`viewer-${previewDoc.id}`}
                doc={previewDoc}
                onBack={() => setPreviewDoc(null)}
                onClose={onClose}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
