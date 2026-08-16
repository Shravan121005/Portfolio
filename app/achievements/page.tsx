"use client";

import { useEffect } from "react";

export default function Achievements() {
  useEffect(() => {
    const stamps = document.querySelectorAll<HTMLElement>("[data-stamp]");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // Add stamping animation class
                el.classList.add("stamping");
                
                // After short delay, settle to visible state
                setTimeout(() => {
                    el.classList.remove("stamping");
                    el.classList.add("visible");
                }, 150);
                
                // Stop observing once stamped
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    stamps.forEach(stamp => {
        observer.observe(stamp);
    });
    
    return () => {
      stamps.forEach(stamp => observer.unobserve(stamp));
      observer.disconnect();
    };
  }, []);

  return (
    <main className="w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
      <style dangerouslySetInnerHTML={{ __html: `
        .stamp {
            border: 3px solid #c31e00;
            color: #c31e00;
            transform: rotate(-15deg);
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            opacity: 0;
            transition: opacity 0.3s ease-in, transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .stamp.visible {
            opacity: 0.8;
            transform: rotate(-15deg) scale(1);
        }
        .stamp.stamping {
            transform: rotate(-15deg) scale(1.5);
            opacity: 1;
        }
      `}} />
      
      {/* Page Header */}
      <header className="md:col-span-12 mb-8 border-b border-outline-variant pb-4 relative">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
          Milestones &amp; Achievements<span className="blinking-cursor"></span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">REF: SEC-994-ACT // COMMENDATIONS LOG</p>
        <div className="absolute top-0 right-0 stamp font-headline-md text-headline-md font-bold tracking-tighter" data-stamp>
          APPROVED
        </div>
      </header>
      
      {/* Official Commendations (Certificates) */}
      <section className="md:col-span-7 space-y-8">
        <div className="flex items-center gap-2 mb-4 border-b border-outline pb-2">
          <span className="material-symbols-outlined text-primary-container">military_tech</span>
          <h2 className="font-headline-md text-headline-md text-primary-container">OFFICIAL COMMENDATIONS</h2>
        </div>
        
        {/* Commendation 1 */}
        <article className="dossier-card p-dossier-padding rotate-1 relative transition-transform hover:rotate-0 duration-300">
          <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rotate-2 z-10"></div>
          <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm text-label-sm">DOC_ID: 042</div>
          <div className="flex items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
              <span className="material-symbols-outlined text-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-primary text-xl mb-1">Intermediate Machine Learning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Certification validating advanced proficiency in practical Machine Learning techniques and applications.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 font-label-sm text-label-sm text-on-surface-variant">
            <div>
              <span className="text-outline">ISSUER:</span> KAGGLE
            </div>
            <div>
              <span className="text-outline">STATUS:</span> ACTIVE
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex justify-between items-end">
            <div className="stamp font-headline-md text-headline-md border-tertiary-container text-tertiary-container text-xl" data-stamp>VERIFIED</div>
            <div className="text-right">
              <div className="font-label-sm text-label-sm text-outline mb-1">SIGNATURE REQUIRED</div>
              <div className="border-b border-outline w-32 h-6"></div>
            </div>
          </div>
        </article>
        
        {/* Commendation 2 */}
        <article className="dossier-card p-dossier-padding -rotate-1 relative transition-transform hover:rotate-0 duration-300">
          <div className="tape absolute -top-2 left-8 w-12 h-5 -rotate-3 z-10"></div>
          <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm text-label-sm">DOC_ID: 089</div>
          <div className="flex items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-primary text-xl mb-1">Bits and Bytes of Computer Networking</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Rigorous certification validating core networking fundamentals and protocol comprehension.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 font-label-sm text-label-sm text-on-surface-variant">
            <div>
              <span className="text-outline">ISSUER:</span> GOOGLE
            </div>
            <div>
              <span className="text-outline">STATUS:</span> ACTIVE
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex justify-between items-end">
            <div className="stamp font-headline-md text-headline-md border-secondary text-secondary text-xl" data-stamp>CLEARED</div>
            <div className="text-right">
              <div className="font-label-sm text-label-sm text-outline mb-1">SIGNATURE REQUIRED</div>
              <div className="border-b border-outline w-32 h-6"></div>
            </div>
          </div>
        </article>
      </section>
      
      {/* Field Operations (Hackathons & Extras) */}
      <section className="md:col-span-5 space-y-6">
        <div className="flex items-center gap-2 mb-4 border-b border-outline pb-2">
          <span className="material-symbols-outlined text-primary-container">radar</span>
          <h2 className="font-headline-md text-headline-md text-primary-container">FIELD OPERATIONS</h2>
        </div>
        
        {/* Op 1 */}
        <div className="dossier-card p-4 flex gap-4 items-center">
          <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
            <div className="absolute inset-0 bg-primary-container opacity-10"></div>
            <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-label-md text-label-md text-primary">OP: FLIPKART GRiD 8.0</h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Competed among thousands of participants nationwide. Outcome: SEMIFINALS.</p>
          </div>
          <div className="stamp font-label-sm text-label-sm border-tertiary-container text-tertiary-container px-1 py-0" data-stamp>SEMIFINALIST</div>
        </div>
        
        {/* Op 2 */}
        <div className="dossier-card p-4 flex gap-4 items-center">
          <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
            <div className="absolute inset-0 bg-secondary opacity-10"></div>
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-label-md text-label-md text-primary">VITERA CLUB CO-LEAD</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant">NOV 23 - FEB 26</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Led 10 members. Organized 5 workshops for 300+ students. Mentored junior members in Python, Git &amp; ML.</p>
          </div>
          <div className="stamp font-label-sm text-label-sm border-primary-container text-primary-container px-1 py-0" data-stamp>COMMAND</div>
        </div>
        
        {/* Op 3 (Placeholder) */}
        <div className="dossier-card p-4 flex gap-4 items-center opacity-70 grayscale">
          <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
            <span className="material-symbols-outlined text-outline" style={{ fontVariationSettings: "'FILL' 1" }}>block</span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-label-md text-label-md text-primary">OP: [REDACTED]</h4>
              <span className="font-label-sm text-label-sm text-outline">UNKNOWN</span>
            </div>
            <div className="h-4 bg-outline-variant w-3/4 mb-1"></div>
            <div className="h-4 bg-outline-variant w-1/2"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
