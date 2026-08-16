"use client";

import { useEffect } from "react";

export default function Coding() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".data-counter");

    counters.forEach((counter) => {
      const targetAttr = counter.getAttribute("data-target");
      if (!targetAttr) return;

      const target = parseInt(targetAttr);
      const duration = 1800;
      const frameRate = 30;
      const totalFrames = duration / frameRate;
      let frame = 0;

      const interval = setInterval(() => {
        frame++;

        if (frame >= totalFrames) {
          counter.innerText = target.toString();
          clearInterval(interval);
        } else {
          const progress = frame / totalFrames;
          counter.innerText = Math.floor(target * progress).toString();
        }
      }, frameRate);

      return () => clearInterval(interval);
    });
  }, []);

  return (
    <main className="w-full flex flex-col">

      {/* Header Section */}
      <div className="mb-12 border-b border-outline-variant pb-6">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-2 uppercase tracking-tight glitch-hover inline-block">
          NETWORK INTEL: CODING PROFILES
        </h1>

        <div className="flex items-center gap-4 text-tertiary-fixed-dim font-label-md text-label-md">
          <span className="material-symbols-outlined text-sm">
            terminal
          </span>

          <span className="uppercase">
            Intercepting algorithmic packets...
          </span>

          <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-sm text-[10px] animate-pulse">
            LIVE
          </span>
        </div>
      </div>


      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 flex flex-col gap-8">

          {/* ================= LEETCODE ================= */}
          <article className="dossier-card p-dossier-padding rotate-[0.5deg]">

            <div className="tape"></div>

            <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">
                  code
                </span>

                <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                  TARGET_ALPHA: LEETCODE
                </h2>
              </div>

              <div className="bg-surface-container px-2 py-1 border border-outline-variant">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  NODE_ID: LC-SHRAVAN
                </span>
              </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

              {/* Difficulty Progress */}
              <div className="col-span-1 md:col-span-2 space-y-4">

                {/* Easy */}
                <div>
                  <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-1">
                    <span>DECRYPTION PROGRESS (EASY)</span>

                    <span className="text-tertiary-fixed-dim data-counter">
                      148
                    </span>
                  </div>

                  <div className="h-2 w-full bg-surface-container border border-outline-variant">
                    <div className="h-full bg-tertiary-fixed-dim w-[32.2%]"></div>
                  </div>
                </div>


                {/* Medium */}
                <div>
                  <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-1">
                    <span>DECRYPTION PROGRESS (MEDIUM)</span>

                    <span className="text-primary-container data-counter">
                      256
                    </span>
                  </div>

                  <div className="h-2 w-full bg-surface-container border border-outline-variant">
                    <div className="h-full bg-primary-container w-[55.8%]"></div>
                  </div>
                </div>


                {/* Hard */}
                <div>
                  <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-1">
                    <span>DECRYPTION PROGRESS (HARD)</span>

                    <span className="text-secondary-container data-counter">
                      55
                    </span>
                  </div>

                  <div className="h-2 w-full bg-surface-container border border-outline-variant">
                    <div className="h-full bg-secondary-container w-[12%]"></div>
                  </div>
                </div>

              </div>


              {/* Percentile */}
              <div className="col-span-1 border-l border-outline-variant pl-6 flex flex-col justify-center">

                <span className="font-label-sm text-label-sm text-on-surface-variant mb-2 block uppercase">
                  Problem-Solving Percentile
                </span>

                <span className="font-headline-lg text-headline-lg text-tertiary-fixed-dim">
                  TOP 6.03%
                </span>

                <span className="font-label-sm text-on-surface-variant mt-2 uppercase">
                  LeetCode
                </span>

              </div>

            </div>


            {/* LeetCode Stats */}
            <div className="mt-4 pt-4 border-t border-outline-variant border-dashed">

              <p className="font-body-md text-body-md text-on-surface-variant uppercase">
                STATUS: Active connection maintained. 400+ problems solved
                across all difficulty tiers.
              </p>

            </div>


            {/* Profile Button */}
            <div className="mt-5 flex justify-end">

              <a
                href="https://leetcode.com/u/Shravan121005/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 uppercase hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform border border-on-primary-container shadow-[2px_2px_0px_0px_#000]"
              >
                OPEN LEETCODE
                <span className="material-symbols-outlined text-sm ml-2 align-middle">
                  arrow_forward
                </span>
              </a>

            </div>

          </article>


          {/* ================= CODEFORCES ================= */}
          <article className="dossier-card p-dossier-padding -rotate-[1deg]">

            <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">

              <div className="flex items-center gap-3">

                <span className="material-symbols-outlined text-primary-container text-3xl">
                  terminal
                </span>

                <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
                  TARGET_BETA: CODEFORCES
                </h2>

              </div>

              <div className="bg-surface-container px-2 py-1 border border-outline-variant">

                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  NODE_ID: CF-SHRAVAN
                </span>

              </div>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* Current Rating */}
              <div className="bg-surface-container p-4 border border-outline-variant">

                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1 uppercase">
                  Current Signal Strength
                </span>

                <div className="flex items-baseline gap-2">

                  <span className="font-headline-lg text-headline-lg text-primary-container data-counter">
                    1357
                  </span>

                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                    Rating
                  </span>

                </div>

              </div>


              {/* Peak Rating */}
              <div className="bg-surface-container p-4 border border-outline-variant">

                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1 uppercase">
                  Peak Signal Detected
                </span>

                <div className="flex items-baseline gap-2">

                  <span className="font-headline-md text-headline-md text-tertiary-fixed-dim data-counter">
                    1357
                  </span>

                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                    Rating
                  </span>

                </div>

              </div>

            </div>


            <div className="mt-6 flex justify-between items-end border-t border-outline-variant pt-4">

              <span className="font-body-md text-body-md text-on-surface-variant uppercase">
                COMPETITION HISTORY: DATA STRUCTURES & ALGORITHMS
              </span>

              <a
                href="https://codeforces.com/profile/ShravanJain"
                className="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 uppercase hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform border border-on-primary-container shadow-[2px_2px_0px_0px_#000]"
              >
                OPEN PROFILE
              </a>

            </div>

          </article>

        </div>


        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 flex flex-col gap-8">


          {/* ================= GITHUB ================= */}
          <aside className="dossier-card p-dossier-padding rotate-[2deg]">

            <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-2">

              <span className="material-symbols-outlined text-secondary-container">
                folder_data
              </span>

              <h3 className="font-headline-md text-headline-md text-primary text-xl uppercase tracking-tight">
                REPO_ARCHIVE: GITHUB
              </h3>

            </div>


            <div className="space-y-4 mb-6">

              <div className="flex justify-between items-center border-b border-outline-variant border-dashed pb-2">

                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Engineering Focus
                </span>

                <span className="font-label-md text-label-md text-tertiary-fixed-dim">
                  FULL STACK
                </span>

              </div>


              <div className="flex justify-between items-center border-b border-outline-variant border-dashed pb-2">

                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Primary Domain
                </span>

                <span className="font-label-md text-label-md text-primary">
                  ML / AI
                </span>

              </div>


              <div className="flex justify-between items-center pb-2">

                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Public Repositories
                </span>

                <span className="font-label-md text-label-md text-primary-container">
                  20+
                </span>

              </div>

            </div>


            <a
              href="https://github.com/Shravan121005"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-highest p-3 border border-outline-variant flex items-center justify-center gap-2 hover:text-primary transition-colors"
            >

              <span className="material-symbols-outlined">
                open_in_new
              </span>

              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                Open GitHub Archive
              </span>

            </a>

          </aside>


          {/* Evidence Tag */}
          <div className="bg-surface-tint text-on-primary px-4 py-2 border-l-4 border-on-primary-fixed-variant self-end w-4/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] relative">

            <div className="absolute -left-2 top-1/2 w-4 h-4 bg-background rounded-full border border-outline-variant transform -translate-y-1/2"></div>

            <span className="font-label-md text-label-md font-bold uppercase block">
              TAG_ID: 88 // CLASSIFIED
            </span>

            <span className="font-body-md text-body-md text-sm uppercase block mt-1 opacity-80">
              Subject demonstrates consistent algorithmic threat capability.
              Monitor closely.
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}