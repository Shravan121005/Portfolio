"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccessOpen, setIsAccessOpen] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleAccess = () => setIsAccessOpen(!isAccessOpen);

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

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-gutter py-4 bg-surface/95 backdrop-blur-sm border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="font-label-md text-label-sm sm:text-label-md font-bold tracking-widest text-primary bg-on-primary-fixed-variant px-2 py-1 truncate max-w-[50%] md:max-w-none relative">
          CASE_FILE: SHRAVAN_JAIN
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-primary border-b-2 border-primary-container pb-1 font-label-md text-label-md transition-all duration-75"
                    : "text-on-surface-variant border-b-2 border-transparent pb-1 font-label-md text-label-md hover:bg-surface-container-high hover:text-primary transition-all duration-75"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden sm:block font-label-sm text-label-sm px-2 py-1 bg-error/20 text-error border border-error">
            CLASSIFIED
          </div>

          {/* Desktop Access Toggle */}
          <button
            onClick={toggleAccess}
            className="hidden md:flex material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-container p-1 focus:outline-none"
            title="Toggle Subject Access"
          >
            {isAccessOpen ? "close" : "menu"}
          </button>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex">
            <button
              onClick={toggleMenu}
              className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-container p-1 focus:outline-none"
              title="Toggle Mobile Menu"
            >
              {isMenuOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-surface-container border-b-2 border-outline shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] md:hidden flex flex-col z-40 dossier-card mt-0.5">
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

            {/* Mobile Contact Access */}
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
          </div>
        )}
      </nav>

      {/* Desktop Left Hanging Pill (Moved outside nav for proper fixed centering) */}
      <div
        className={`hidden md:flex fixed top-1/2 -translate-y-1/2 left-[max(1.5rem,calc(25vw-21.75rem))] w-14 py-4 bg-surface-container/90 backdrop-blur-md border-2 border-outline rounded-[40px] flex-col items-center gap-4 z-40 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 origin-center ${
          isAccessOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Gold Status Dot */}
        <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_var(--tw-colors-primary-container, #ffd700)] mb-1"></div>

        {/* PDF */}
        <a
          href={CONTACT_LINKS.resume}
          download
          title="Download Resume"
          className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all group shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">
            picture_as_pdf
          </span>
        </a>

        {/* Divider */}
        <div className="w-6 h-[2px] bg-outline-variant/50"></div>

        {/* LinkedIn */}
        <a
          href={CONTACT_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all group font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="text-[14px] group-hover:scale-110 transition-transform tracking-tighter">
            in
          </span>
        </a>

        {/* Divider */}
        <div className="w-6 h-[2px] bg-outline-variant/50"></div>

        {/* GitHub */}
        <a
          href={CONTACT_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all group font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="text-[14px] group-hover:scale-110 transition-transform tracking-tighter">
            GH
          </span>
        </a>

        {/* Divider */}
        <div className="w-6 h-[2px] bg-outline-variant/50"></div>

        {/* Email */}
        <a
          href={CONTACT_LINKS.email}
          title="Contact Subject"
          className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center text-primary hover:bg-primary-container/20 hover:border-primary-container hover:text-primary-container transition-all group shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">
            mail
          </span>
        </a>
      </div>
    </>
  );
}
