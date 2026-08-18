"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
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

  // --------------------------------------------------
  // ACCESS PILL
  // Shared by desktop + mobile.
  // Starts OPEN by default.
  // --------------------------------------------------
  const [isAccessOpen, setIsAccessOpen] = useState(true);

  const toggleAccess = () => {
    setIsAccessOpen((prev) => !prev);
  };

  // --------------------------------------------------
  // MOBILE PAGE NAVIGATION
  // --------------------------------------------------
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // --------------------------------------------------
  // CLICK OUTSIDE MOBILE NAV
  // --------------------------------------------------
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <>
      {/* ==================================================
          TOP NAVIGATION BAR
          ================================================== */}

      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-6 py-4 bg-surface/95 backdrop-blur-sm border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* --------------------------------------------------
            BRAND
            -------------------------------------------------- */}

        <Link
          href="/"
          className="
            font-label-md font-bold tracking-widest
            text-primary
            bg-on-primary-fixed-variant
            px-2 py-1
            relative
            hover:text-on-primary
            hover:bg-primary
            transition-colors
            block
            whitespace-nowrap
            text-[10px]
            sm:text-[11px]
            md:text-label-md
          "
        >
          CASE_FILE: SHRAVAN_JAIN
        </Link>

        {/* --------------------------------------------------
            DESKTOP NAVIGATION
            -------------------------------------------------- */}

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

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-container"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* --------------------------------------------------
            RIGHT CONTROLS
            -------------------------------------------------- */}

        <div className="flex items-center gap-2 md:gap-4">

          {/* CLASSIFIED BADGE */}

          <div className="hidden sm:block font-label-sm text-label-sm px-2 py-1 bg-error/20 text-error border border-error">
            CLASSIFIED
          </div>

          {/* ------------------------------------------------
              DESKTOP ACCESS TOGGLE
              Hidden on mobile
              ------------------------------------------------ */}

          <div className="hidden md:block">
            <button
              onClick={toggleAccess}
              className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-container p-1 focus:outline-none transition-colors"
              title="Toggle Subject Access"
              aria-label="Toggle subject access panel"
            >
              {isAccessOpen ? "close" : "menu"}
            </button>
          </div>

          {/* ==================================================
              MOBILE CONTROLS
              EXACTLY TWO BUTTONS
              
              1. + / × = Subject Access
              2. ☰ / × = Page Navigation
              ================================================== */}

          <div className="md:hidden flex items-center gap-2">

            {/* ----------------------------------------------
                MOBILE ACCESS
                + when closed
                × when open
                ---------------------------------------------- */}

            <button
              onClick={toggleAccess}
              aria-label="Toggle subject access panel"
              aria-expanded={isAccessOpen}
              className="
                w-8 h-8
                flex items-center justify-center
                bg-surface-container
                border-2 border-outline
                text-primary
                hover:bg-primary-container
                hover:text-on-primary-container
                hover:border-primary-container
                transition-all duration-150
                focus:outline-none
                focus-visible:ring-1
                focus-visible:ring-primary
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              "
              title="Toggle Subject Access"
            >
              <span
                className="
                  font-mono
                  text-[22px]
                  leading-none
                  font-light
                  select-none
                "
              >
                {isAccessOpen ? "×" : "+"}
              </span>
            </button>

            {/* ----------------------------------------------
                MOBILE PAGE NAVIGATION
                ☰ when closed
                × when open
                ---------------------------------------------- */}

            <button
              onClick={toggleMenu}
              aria-label="Toggle page navigation"
              aria-expanded={isMenuOpen}
              className={`
                w-8 h-8
                flex items-center justify-center
                bg-surface-container
                border-2 border-outline
                text-primary
                hover:bg-primary-container
                hover:text-on-primary-container
                hover:border-primary-container
                transition-all duration-150
                focus:outline-none
                focus-visible:ring-1
                focus-visible:ring-primary
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              `}
              title="Page Navigation"
            >
              <span
                className="material-symbols-outlined text-[18px] leading-none"
                aria-hidden="true"
              >
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* ==================================================
            MOBILE PAGE NAVIGATION PANEL
            ================================================== */}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav-panel"
              className="
                absolute
                top-full
                right-0
                mt-1
                w-[240px]
                bg-surface-container
                border border-outline-variant
                overflow-hidden
                md:hidden
                z-50
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                rounded-sm
              "
              initial={{
                opacity: 0,
                y: -6,
                scale: 0.97,
                transformOrigin: "top right",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -6,
                scale: 0.97,
              }}
              transition={{
                duration: 0.14,
                ease: "easeOut",
              }}
            >
              {/* PANEL HEADER */}

              <div className="px-4 py-2 border-b border-outline-variant bg-surface-container-lowest">
                <span className="font-label-sm text-[9px] text-outline tracking-[0.2em] uppercase">
                  NAVIGATION // SELECT ROUTE
                </span>
              </div>

              {/* NAVIGATION ITEMS */}

              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      flex items-center gap-3
                      px-4 py-3
                      font-label-md
                      text-label-md
                      transition-all
                      border-l-2

                      ${isActive
                        ? "text-primary border-primary-container bg-surface-container-high"
                        : "text-on-surface-variant border-transparent hover:bg-surface-container-high hover:text-primary hover:border-outline-variant"
                      }
                    `}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: isActive
                          ? "var(--color-primary-container)"
                          : "transparent",
                        border: isActive
                          ? "none"
                          : "1px solid var(--color-outline-variant)",
                      }}
                    />

                    {item.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ==================================================
          SUBJECT ACCESS PILL
          
          Desktop:
          Fixed left side, vertically centered.

          Mobile:
          Fixed bottom, horizontally centered.

          SAME PILL.
          SAME STATE.
          Starts OPEN.
          ================================================== */}

      <AnimatePresence>
        {isAccessOpen && (
          <motion.div
            key="access-pill"
            className="
              fixed
              z-50

              bottom-4
              left-1/2
              -translate-x-1/2

              flex-row
              w-auto
              max-w-[calc(100vw-2rem)]
              px-5
              py-3

              md:bottom-auto
              md:left-5
              md:top-1/2
              md:-translate-x-0
              md:-translate-y-1/2

              md:flex-col
              md:w-14
              md:px-0
              md:py-5

              flex
              items-center
              justify-center
              gap-3
              md:gap-4

              bg-surface-container/95
              backdrop-blur-md

              border-2
              border-outline
              rounded-[40px]

              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
            "
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            {/* GOLD STATUS DOT
                Desktop only */}

            <div className="w-2 h-2 rounded-full bg-primary-container status-pulse hidden md:block mb-1" />

            {/* ------------------------------------------------
                RESUME
                ------------------------------------------------ */}

            <motion.a
              href={CONTACT_LINKS.resume}
              download
              title="Download Resume"
              className="
                w-10 h-10
                rounded-full
                bg-surface-container-lowest
                border-2 border-outline
                flex items-center justify-center
                text-primary
                hover:bg-primary-container/20
                hover:border-primary-container
                hover:text-primary-container
                transition-all
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[18px]">
                picture_as_pdf
              </span>
            </motion.a>

            <div className="h-6 w-[1px] md:w-full md:h-[1px] bg-outline-variant/50" />

            {/* ------------------------------------------------
                LINKEDIN
                ------------------------------------------------ */}

            <motion.a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="
                w-10 h-10
                rounded-full
                bg-surface-container-lowest
                border-2 border-outline
                flex items-center justify-center
                text-primary
                hover:bg-primary-container/20
                hover:border-primary-container
                hover:text-primary-container
                transition-all
                font-bold
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              "
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

            {/* ------------------------------------------------
                GITHUB
                ------------------------------------------------ */}

            <motion.a
              href={CONTACT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="
                w-10 h-10
                rounded-full
                bg-surface-container-lowest
                border-2 border-outline
                flex items-center justify-center
                text-primary
                hover:bg-primary-container/20
                hover:border-primary-container
                hover:text-primary-container
                transition-all
                font-bold
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              "
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

            {/* ------------------------------------------------
                EMAIL
                ------------------------------------------------ */}

            <motion.a
              href={CONTACT_LINKS.email}
              title="Contact Subject"
              className="
                w-10 h-10
                rounded-full
                bg-surface-container-lowest
                border-2 border-outline
                flex items-center justify-center
                text-primary
                hover:bg-primary-container/20
                hover:border-primary-container
                hover:text-primary-container
                transition-all
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[18px]">
                mail
              </span>
            </motion.a>

            {/* ------------------------------------------------
                DESKTOP ACCESS LABEL
                ------------------------------------------------ */}

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