import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 md:pl-[88px] md:pr-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-12 bg-surface-container-lowest border-t border-outline-variant py-6 relative z-10">
      {/* Left: org label */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <div className="w-2 h-2 rounded-full bg-primary-container status-pulse shrink-0" />
        <div>
          <div className="font-label-sm text-label-sm uppercase opacity-50 text-on-surface-variant">
            © 2005–2026 VIT BUREAU OF INVESTIGATION
          </div>
          <div className="font-label-sm text-[10px] text-outline opacity-40 tracking-widest mt-0.5">
            CASE_FILE: SHRAVAN_JAIN // CLEARANCE: LEVEL-5
          </div>
        </div>
      </div>

      {/* Right: links + encrypted tag */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <Link
          href="https://www.linkedin.com/in/shravan-jain-630009280/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary-container transition-colors duration-200"
        >
          LINKEDIN
        </Link>
        <Link
          href="https://github.com/Shravan121005"
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary-container transition-colors duration-200"
        >
          GITHUB
        </Link>
        <a
          href="mailto:shravanjain.dev@gmail.com"
          className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary-container transition-colors duration-200"
        >
          CONTACT
        </a>
        <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 cursor-default opacity-40">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          SIGNAL_ENCRYPTED
        </div>
      </div>
    </footer>
  );
}
