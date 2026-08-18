"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "SUBJECT", href: "/" },
  { name: "PROFILE", href: "/profile" },
  { name: "EVIDENCE", href: "/projects" },
  { name: "INTEL", href: "/coding" },
  { name: "DOSSIER", href: "/achievements" },
];

const CONTACT_LINKS = {
  resume: "/resume.pdf",
  github: "https://github.com/Shravan121005",
  linkedin: "https://www.linkedin.com/in/shravan-jain-630009280/",
  email: "mailto:shravanjain.dev@gmail.com",
};

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccessOpen, setIsAccessOpen] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleAccess = () => setIsAccessOpen((prev) => !prev);

  return (
    <>
      {/* ── Top Navigation Bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-6 py-4 bg-surface/95 backdrop-blur-sm border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Brand */}
        <Link
          href="/"
          className="font-label-md text-label-sm sm:text-label-md font-bold tracking-widest text-primary bg-on-primary-fixed-variant px-2 py-1 truncate max-w-[50%] md:max-w-none relative hover:text-on-primary hover:bg-primary transition-colors block"
        >
          CASE_FILE: SHRAVAN_JAIN
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 font-label-md text-label-md transition-colors duration-150"
                style={{
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-on-surface-variant)",
                }}
              >
                {item.name}
                {/* Animated underline using layoutId */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-container"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden sm:block font-label-sm text-label-sm px-2 py-1 bg-error/20 text-error border border-error">
            CLASSIFIED
          </div>

          {/* Desktop access toggle */}
          <button
            onClick={toggleAccess}
            className="hidden md:flex material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-container p-1 focus:outline-none transition-colors"
            title="Toggle Subject Access"
            aria-label="Toggle subject access panel"
          >
            {isAccessOpen ? "close" : "menu"}
          </button>

          {/* Mobile hamburger */}
          <div className="md:hidden flex">
            <button
              onClick={toggleMenu}
              className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-container p-1 focus:outline-none"
              title="Toggle Mobile Menu"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              className="absolute top-full left-0 w-full bg-surface-container border-b-2 border-outline shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] md:hidden flex flex-col z-40 dossier-card mt-0.5"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={
                      isActive
                        ? "px-6 py-4 text-primary border-l-4 border-primary-container bg-surface-container-high font-label-md text-label-md transition-all"
                        : "px-6 py-4 text-on-surface-variant border-l-4 border-transparent font-label-md text-label-md hover:bg-surface-container-high hover:text-primary transition-all"
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile contact access */}
              <div className="border-t border-outline-variant mt-2 pt-2 pb-2 bg-surface-container-low">
                <div className="px-6 py-2 font-label-sm text-primary opacity-70 uppercase tracking-widest border-l-4 border-transparent">
                  SUBJECT ACCESS
                </div>
                <a
                  href={CONTACT_LINKS.resume}
                  download
                  className="px-6 py-3 flex items-center gap-3 text-on-surface-variant font-label-md hover:bg-surface-container-high hover:text-primary transition-all border-l-4 border-transparent hover:border-primary-container"
                >
                  <span className="material-symbols-outlined text-[1.2rem]">
                    download
                  </span>
                  DOWNLOAD RESUME
                </a>
                <a
                  href={CONTACT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center gap-3 text-on-surface-variant font-label-md hover:bg-surface-container-high hover:text-primary transition-all border-l-4 border-transparent hover:border-primary-container"
                >
                  <span className="material-symbols-outlined text-[1.2rem]">
                    code
                  </span>
                  GITHUB PROFILE
                </a>
                <a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center gap-3 text-on-surface-variant font-label-md hover:bg-surface-container-high hover:text-primary transition-all border-l-4 border-transparent hover:border-primary-container"
                >
                  <span className="material-symbols-outlined text-[1.2rem]">
                    work
                  </span>
                  LINKEDIN PROFILE
                </a>
                <a
                  href={CONTACT_LINKS.email}
                  className="px-6 py-3 flex items-center gap-3 text-on-surface-variant font-label-md hover:bg-surface-container-high hover:text-primary transition-all border-l-4 border-transparent hover:border-primary-container"
                >
                  <span className="material-symbols-outlined text-[1.2rem]">
                    mail
                  </span>
                  CONTACT SUBJECT
                </a>
              </div>

              <div className="px-6 py-4 border-t border-outline-variant border-dashed">
                <div className="sm:hidden font-label-sm text-label-sm px-2 py-1 bg-error/20 text-error border border-error inline-block">
                  CLASSIFIED
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/*
        ── Left Access Pill (Desktop) / Bottom Dock (Mobile) ──

        DESKTOP (md+):
          - position: fixed
          - left: 20px (simple, reliable — never causes overflow)
          - top: 50%, translateY(-50%) = vertically centered
          - width: 56px (w-14)
          - The layout.tsx content wrapper has pl-[88px] to clear this pill

        MOBILE (<md):
          - position: fixed
          - bottom: 1rem, left: 50%, translateX(-50%) = centered at bottom
          - horizontal pill layout
          - pb-24 on content wrapper clears this
      */}
      <AnimatePresence>
        {isAccessOpen && (
          <motion.div
            key="access-pill"
            /*
              Mobile: centered bottom dock (horizontal)
              Desktop: fixed left vertical pill
            */
            className="fixed z-50
              /* mobile bottom dock */
              bottom-4 left-1/2 -translate-x-1/2
              flex-row w-auto max-w-[calc(100vw-2rem)] px-5 py-3
              /* desktop left pill — override mobile styles */
              md:bottom-auto md:left-5 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2
              md:flex-col md:w-14 md:px-0 md:py-5
              /* shared */
              flex items-center justify-center gap-3 md:gap-4
              bg-surface-container/95 backdrop-blur-md
              border-2 border-outline rounded-[40px]
              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold Status Dot */}
            <div className="w-2 h-2 rounded-full bg-primary-container status-pulse hidden md:block mb-1" />

            {/* Resume */}
            <motion.a
              href={CONTACT_LINKS.resume}
              download
              title="Download Resume"
              className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[18px]">
                picture_as_pdf
              </span>
            </motion.a>

            <div className="h-6 w-[1px] md:w-full md:h-[1px] bg-outline-variant/50" />

            {/* LinkedIn */}
            <motion.a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[19px] h-[19px]"
                aria-hidden="true"
              >
                <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3C3.82 3 3 3.82 3 4.85S3.82 6.7 4.85 6.7s1.85-.82 1.85-1.85S5.87 3 4.85 3ZM21 13.85c0-3.76-2-5.51-4.67-5.51-2.15 0-3.11 1.18-3.65 2.01V8.5H9.38V21h3.3v-6.18c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.85 2 3.31V21H21v-7.15Z" />
              </svg>
            </motion.a>

            <div className="h-6 w-[1px] md:w-full md:h-[1px] bg-outline-variant/50" />

            {/* GitHub */}
            <motion.a
              href={CONTACT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[18px] h-[18px]"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>

            <div className="h-6 w-[1px] md:w-full md:h-[1px] bg-outline-variant/50" />

            {/* Email */}
            <motion.a
              href={CONTACT_LINKS.email}
              title="Contact Subject"
              className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[18px]">
                mail
              </span>
            </motion.a>

            {/* Desktop: vertical ACCESS label */}
            <div
              className="hidden md:flex items-center justify-center mt-3"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                color: "var(--color-outline)",
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 700,
                opacity: 0.6,
              }}
            >
              ACCESS
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
