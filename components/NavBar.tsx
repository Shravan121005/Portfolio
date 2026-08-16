"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "SUBJECT", href: "/" },
    { name: "EVIDENCE", href: "/projects" },
    { name: "INTEL", href: "/coding" },
    { name: "DOSSIER", href: "/achievements" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-4 bg-surface/95 backdrop-blur-sm border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">

      <div className="font-label-md text-label-md font-bold tracking-widest text-primary bg-on-primary-fixed-variant px-2 py-1">
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

      <div className="flex items-center space-x-4">
        <div className="font-label-sm text-label-sm px-2 py-1 bg-error/20 text-error border border-error">
          CLASSIFIED
        </div>

        <span className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-container md:hidden">
          menu
        </span>
      </div>

    </nav>
  );
}