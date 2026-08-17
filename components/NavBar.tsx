"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "SUBJECT", href: "/" },
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
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-gutter py-4 bg-surface/95 backdrop-blur-sm border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Brand */}
        <Link href="/" className="font-label-md text-label-sm sm:text-label-md font-bold tracking-widest text-primary bg-on-primary-fixed-variant px-2 py-1 truncate max-w-[50%] md:max-w-none relative hover:text-on-primary hover:bg-primary transition-colors block">
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

      {/* ── Left Hanging Pill (Desktop) / Bottom Dock (Mobile) ── */}
      <AnimatePresence>
        {isAccessOpen && (
          <motion.div
            key="access-pill"
            className="flex fixed md:top-1/2 md:-translate-y-1/2 bottom-4 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-[max(1.5rem,calc(25vw-21.75rem))] md:w-14 w-[calc(100%-2rem)] max-w-sm md:py-4 px-6 md:px-0 py-3 bg-surface-container/90 backdrop-blur-md border-2 border-outline rounded-[40px] flex-row md:flex-col items-center justify-between md:justify-center gap-2 md:gap-4 z-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold Status Dot */}
            <div className="w-2 h-2 rounded-full bg-primary-container status-pulse mb-1" />

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

            <div className="h-6 w-[2px] md:w-6 md:h-[2px] bg-outline-variant/50" />

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
              <span className="text-[14px] tracking-tighter">in</span>
            </motion.a>

            <div className="h-6 w-[2px] md:w-6 md:h-[2px] bg-outline-variant/50" />

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
              <span className="text-[14px] tracking-tighter">GH</span>
            </motion.a>

            <div className="h-6 w-[2px] md:w-6 md:h-[2px] bg-outline-variant/50" />

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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
