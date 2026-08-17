"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "SUBJECT", href: "/" },
    { name: "EVIDENCE", href: "/projects" },
    { name: "INTEL", href: "/coding" },
    { name: "DOSSIER", href: "/achievements" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-gutter py-4 bg-surface/95 backdrop-blur-sm border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">

      <div className="font-label-md text-label-sm sm:text-label-md font-bold tracking-widest text-primary bg-on-primary-fixed-variant px-2 py-1 truncate max-w-[50%] md:max-w-none">
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

        <button 
          onClick={toggleMenu}
          className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-container md:hidden p-1 focus:outline-none"
        >
          {isMenuOpen ? "close" : "menu"}
        </button>
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
          <div className="px-6 py-4 border-t border-outline-variant border-dashed">
             <div className="sm:hidden font-label-sm text-label-sm px-2 py-1 bg-error/20 text-error border border-error inline-block">
                CLASSIFIED
             </div>
          </div>
        </div>
      )}

    </nav>
  );
}