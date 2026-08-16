import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-4 bg-surface/95 backdrop-blur-sm border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="font-label-md text-label-md font-bold tracking-widest text-primary bg-on-primary-fixed-variant px-2 py-1">
        CASE_FILE: SHRAVAN_JAIN
      </div>
      <div className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="text-primary border-b-2 border-primary-container pb-1 font-label-md text-label-md transition-all duration-75"
        >
          SUBJECT
        </Link>
        <Link
          href="/projects"
          className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high hover:text-primary transition-all duration-75"
        >
          EVIDENCE
        </Link>
        <Link
          href="/coding"
          className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high hover:text-primary transition-all duration-75"
        >
          INTEL
        </Link>
        <Link
          href="/achievements"
          className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high hover:text-primary transition-all duration-75"
        >
          DOSSIER
        </Link>
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
