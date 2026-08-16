import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-margin-page flex flex-col md:flex-row justify-between items-center gap-4 mt-12 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant py-8 relative z-10">
      <div className="font-label-sm text-label-sm uppercase opacity-50 text-on-surface-variant dark:text-on-surface-variant">
        © 2005-2026 VIT BUREAU OF INVESTIGATION
      </div>
      <div className="flex space-x-6">
        <Link
          href="https://www.linkedin.com/in/shravan-jain-630009280/"
          className="text-on-surface-variant font-label-sm text-label-sm hover:text-error transition-colors"
        >
          LINKEDIN
        </Link>
        <Link
          href="https://github.com/Shravan121005"
          className="text-on-surface-variant font-label-sm text-label-sm hover:text-error transition-colors"
        >
          GITHUB
        </Link>
        <div className="text-on-surface-variant font-label-sm text-label-sm hover:text-error transition-colors flex items-center gap-1 cursor-default">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          SIGNAL_ENCRYPTED
        </div>
      </div>
    </footer>
  );
}
