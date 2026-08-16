"use client";

import { useEffect } from "react";

export default function Coding() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".data-counter");
    
    counters.forEach(counter => {
        const targetAttr = counter.getAttribute("data-target");
        if (!targetAttr) return;
        const target = parseInt(targetAttr);
        const duration = 2000; // 2 seconds
        const frameRate = 30; // ms per frame
        const totalFrames = duration / frameRate;
        let frame = 0;
        
        const interval = setInterval(() => {
            frame++;
            
            if (frame >= totalFrames) {
                counter.innerText = target.toString();
                clearInterval(interval);
            } else {
                // Display random numbers until the end
                const randomNum = Math.floor(Math.random() * (target * 1.5));
                counter.innerText = randomNum.toString();
            }
        }, frameRate);
        
        return () => clearInterval(interval);
    });
  }, []);

  return (
    <main className="w-full flex flex-col">
      {/* Header Section */}
      <div className="mb-12 border-b border-outline-variant pb-6">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-2 uppercase tracking-tight glitch-hover inline-block">NETWORK INTEL: CODING PROFILES</h1>
        <div className="flex items-center gap-4 text-tertiary-fixed-dim font-label-md text-label-md">
          <span className="material-symbols-outlined text-sm">terminal</span>
          <span className="uppercase">Intercepting algorithmic packets...</span>
          <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-sm text-[10px] animate-pulse">LIVE</span>
        </div>
      </div>
      
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">
        {/* Left Column: Primary Targets */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Target 1: LeetCode */}
          <article className="dossier-card p-dossier-padding rotate-[0.5deg]">
            <div className="tape"></div>
            <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">code</span>
                <h2 className="font-headline-md text-headline-md text-primary tracking-tight">TARGET_ALPHA: LEETCODE</h2>
              </div>
              <div className="bg-surface-container px-2 py-1 border border-outline-variant">
                <span className="font-label-sm text-label-sm text-on-surface-variant">NODE_ID: LC-SHRAVAN</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div>
                  <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-1">
                    <span>DECRYPTION PROGRESS (EASY)</span>
                    <span className="text-tertiary-fixed-dim data-counter" data-target="210">0</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container border border-outline-variant">
                    <div className="h-full bg-tertiary-fixed-dim w-[52%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-1">
                    <span>DECRYPTION PROGRESS (MEDIUM)</span>
                    <span className="text-primary-container data-counter" data-target="150">0</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container border border-outline-variant">
                    <div className="h-full bg-primary-container w-[37%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-1">
                    <span>DECRYPTION PROGRESS (HARD)</span>
                    <span className="text-secondary-container data-counter" data-target="40">0</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container border border-outline-variant">
                    <div className="h-full bg-secondary-container w-[10%]"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 border-l border-outline-variant pl-6 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-2 block uppercase">Global Rank Estimate</span>
                <span className="font-headline-lg text-headline-lg text-tertiary-fixed-dim glitch-hover cursor-crosshair data-counter" data-target="270000">0</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-outline-variant border-dashed">
              <p className="font-body-md text-body-md text-on-surface-variant uppercase">STATUS: Active connection maintained. 400+ problems solved across all difficulty tiers.</p>
            </div>
          </article>
          
          {/* Target 2: Codeforces */}
          <article className="dossier-card p-dossier-padding -rotate-[1deg]">
            <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-3xl">terminal</span>
                <h2 className="font-headline-md text-headline-md text-primary tracking-tight uppercase">TARGET_BETA: Codeforces</h2>
              </div>
              <div className="bg-surface-container px-2 py-1 border border-outline-variant">
                <span className="font-label-sm text-label-sm text-on-surface-variant">NODE_ID: CF-SHRAVAN</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-surface-container p-4 border border-outline-variant">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1 uppercase">Signal Strength (Rating)</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-primary-container data-counter" data-target="1357">0</span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">Pupil Level</span>
                </div>
              </div>
              <div className="bg-surface-container p-4 border border-outline-variant">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1 uppercase">Max Signal Detected</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-tertiary-fixed-dim data-counter" data-target="1357">0</span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">Peak Rating</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-end border-t border-outline-variant pt-4">
              <span className="font-body-md text-body-md text-on-surface-variant uppercase">COMPETITION HISTORY LOGGED: DATA STRUCTURES & ALGORITHMS</span>
              <a href="#" className="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 uppercase hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform border border-on-primary-container shadow-[2px_2px_0px_0px_#000]">Extract Raw Data</a>
            </div>
          </article>
        </div>
        
        {/* Right Column: Secondary Targets & Meta */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Target 3: GitHub */}
          <aside className="dossier-card p-dossier-padding rotate-[2deg]">
            <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-2">
              <span className="material-symbols-outlined text-secondary-container">folder_data</span>
              <h3 className="font-headline-md text-headline-md text-primary text-xl uppercase tracking-tight">REPO_ARCHIVE: GITHUB</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-outline-variant border-dashed pb-2">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">Contributions (YTD)</span>
                <span className="font-label-md text-label-md text-tertiary-fixed-dim data-counter" data-target="580">0</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant border-dashed pb-2">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">Public Repositories</span>
                <span className="font-label-md text-label-md text-primary data-counter" data-target="15">0</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">Followers Intercepted</span>
                <span className="font-label-md text-label-md text-primary-container">CLASSIFIED</span>
              </div>
            </div>
            
            <div className="bg-surface-container-highest p-3 border border-outline-variant flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Scanning Repos...</span>
            </div>
          </aside>
          
          {/* Evidence Tag */}
          <div className="bg-surface-tint text-on-primary px-4 py-2 border-l-4 border-on-primary-fixed-variant self-end w-4/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] relative">
            <div className="absolute -left-2 top-1/2 w-4 h-4 bg-background rounded-full border border-outline-variant transform -translate-y-1/2"></div>
            <span className="font-label-md text-label-md font-bold uppercase block">TAG_ID: 88 // CLASSIFIED</span>
            <span className="font-body-md text-body-md text-sm uppercase block mt-1 opacity-80">Subject demonstrates consistent algorithmic threat capability. Monitor closely.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
