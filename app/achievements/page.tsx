"use client";

import { useEffect } from "react";

export default function Achievements() {
  useEffect(() => {
    const stamps = document.querySelectorAll<HTMLElement>("[data-stamp]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            el.classList.add("stamping");

            setTimeout(() => {
              el.classList.remove("stamping");
              el.classList.add("visible");
            }, 150);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );

    stamps.forEach((stamp) => observer.observe(stamp));

    return () => {
      stamps.forEach((stamp) => observer.unobserve(stamp));
      observer.disconnect();
    };
  }, []);

  return (
    <main className="w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .stamp {
              border: 3px solid #c31e00;
              color: #c31e00;
              transform: rotate(-15deg);
              padding: 4px 8px;
              border-radius: 4px;
              display: inline-block;
              opacity: 0;
              transition: opacity 0.3s ease-in,
                transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            .stamp.visible {
              opacity: 0.8;
              transform: rotate(-15deg) scale(1);
            }

            .stamp.stamping {
              transform: rotate(-15deg) scale(1.5);
              opacity: 1;
            }
          `,
        }}
      />

      {/* =========================================================
          PAGE HEADER
      ========================================================= */}

      <header className="md:col-span-12 mb-8 border-b border-outline-variant pb-4 relative">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
          Milestones &amp; Achievements
          <span className="blinking-cursor"></span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          REF: SEC-994-ACT // COMMENDATIONS &amp; FIELD RECORDS
        </p>

        <div
          className="absolute top-0 right-0 stamp font-headline-md text-headline-md font-bold tracking-tighter"
          data-stamp
        >
          APPROVED
        </div>
      </header>

      {/* =========================================================
          OFFICIAL COMMENDATIONS
      ========================================================= */}

      <section className="md:col-span-7 space-y-8">
        <div className="flex items-center gap-2 mb-4 border-b border-outline pb-2">
          <span className="material-symbols-outlined text-primary-container">
            military_tech
          </span>

          <h2 className="font-headline-md text-headline-md text-primary-container">
            OFFICIAL COMMENDATIONS
          </h2>
        </div>

        {/* =====================================================
            CERTIFICATION 1 — ORACLE
        ===================================================== */}

        <article className="dossier-card p-dossier-padding rotate-1 relative transition-transform hover:rotate-0 duration-300">
          <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rotate-2 z-10"></div>

          <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
            DOC_ID: 001
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
              <span
                className="material-symbols-outlined text-tertiary-container text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>

            <div>
              <h3 className="font-label-md text-primary text-xl mb-1">
                Oracle Certified Associate, Oracle WebLogic Server 11g System
                Administrator
              </h3>

              <p className="font-body-md text-on-surface-variant">
                Professional certification covering Oracle WebLogic Server
                administration and enterprise application server management.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
            <div>
              <span className="text-outline">ISSUER:</span> ORACLE
            </div>

            <div>
              <span className="text-outline">ISSUED:</span> JUL 2026
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
            <div
              className="stamp font-headline-md text-xl border-tertiary-container text-tertiary-container"
              data-stamp
            >
              VERIFIED
            </div>

            <div className="text-right">
              <div className="font-label-sm text-outline mb-1">
                CREDENTIAL STATUS
              </div>

              <div className="font-label-sm text-primary">ACTIVE</div>
            </div>
          </div>
        </article>

        {/* =====================================================
            CERTIFICATION 2 — KAGGLE
        ===================================================== */}

        <article className="dossier-card p-dossier-padding -rotate-1 relative transition-transform hover:rotate-0 duration-300">
          <div className="tape absolute -top-2 left-8 w-12 h-5 -rotate-3 z-10"></div>

          <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
            DOC_ID: 002
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
              <span
                className="material-symbols-outlined text-secondary text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
            </div>

            <div>
              <h3 className="font-label-md text-primary text-xl mb-1">
                Intermediate Machine Learning
              </h3>

              <p className="font-body-md text-on-surface-variant">
                Practical Machine Learning certification covering supervised
                learning, model evaluation, and applied ML workflows.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
            <div>
              <span className="text-outline">ISSUER:</span> KAGGLE
            </div>

            <div>
              <span className="text-outline">ISSUED:</span> JUL 2026
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
            <div
              className="stamp font-headline-md text-xl border-secondary text-secondary"
              data-stamp
            >
              CLEARED
            </div>

            <div className="text-right">
              <div className="font-label-sm text-outline mb-1">
                CREDENTIAL STATUS
              </div>

              <div className="font-label-sm text-primary">ACTIVE</div>
            </div>
          </div>
        </article>

        {/* =====================================================
            CERTIFICATION 3 — IBM
        ===================================================== */}

        <article className="dossier-card p-dossier-padding rotate-1 relative transition-transform hover:rotate-0 duration-300">
          <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
            DOC_ID: 003
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
              <span
                className="material-symbols-outlined text-primary-container text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                model_training
              </span>
            </div>

            <div>
              <h3 className="font-label-md text-primary text-xl mb-1">
                Machine Learning for Data Science
              </h3>

              <p className="font-body-md text-on-surface-variant">
                Certification focused on Machine Learning methods and their
                application to practical Data Science workflows.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
            <div>
              <span className="text-outline">ISSUER:</span> IBM
            </div>

            <div>
              <span className="text-outline">ISSUED:</span> JUL 2026
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
            <div
              className="stamp font-headline-md text-xl border-tertiary-container text-tertiary-container"
              data-stamp
            >
              VERIFIED
            </div>

            <div className="text-right">
              <div className="font-label-sm text-outline mb-1">
                CREDENTIAL STATUS
              </div>

              <div className="font-label-sm text-primary">ACTIVE</div>
            </div>
          </div>
        </article>

        {/* =====================================================
            CERTIFICATION 4 — NETWORKING
        ===================================================== */}

        <article className="dossier-card p-dossier-padding -rotate-1 relative transition-transform hover:rotate-0 duration-300">
          <div className="tape absolute -top-2 right-12 w-12 h-5 rotate-3 z-10"></div>

          <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
            DOC_ID: 004
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
              <span
                className="material-symbols-outlined text-secondary text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lan
              </span>
            </div>

            <div>
              <h3 className="font-label-md text-primary text-xl mb-1">
                The Bits and Bytes of Computer Networking
              </h3>

              <p className="font-body-md text-on-surface-variant">
                Certification covering core computer networking concepts,
                protocols, and communication fundamentals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
            <div>
              <span className="text-outline">ISSUER:</span> UNITED LATINO
              STUDENTS ASSOCIATION
            </div>

            <div>
              <span className="text-outline">ISSUED:</span> NOV 2025
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
            <div
              className="stamp font-headline-md text-xl border-secondary text-secondary"
              data-stamp
            >
              CLEARED
            </div>

            <div className="text-right">
              <div className="font-label-sm text-outline mb-1">
                CREDENTIAL ID
              </div>

              <div className="font-label-sm text-primary">D7SRMMHRJYJM</div>
            </div>
          </div>
        </article>

        {/* =====================================================
            CERTIFICATION 5 — FULL STACK
        ===================================================== */}

        <article className="dossier-card p-dossier-padding rotate-1 relative transition-transform hover:rotate-0 duration-300">
          <div className="absolute top-2 right-2 text-on-surface-variant font-label-sm">
            DOC_ID: 005
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 border-b border-outline-variant pb-4 mb-4">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-outline rounded-full shrink-0">
              <span
                className="material-symbols-outlined text-primary-container text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                code
              </span>
            </div>

            <div>
              <h3 className="font-label-md text-primary text-xl mb-1">
                The Complete Full-Stack Web Development Bootcamp
              </h3>

              <p className="font-body-md text-on-surface-variant">
                Comprehensive full-stack development training covering modern
                web technologies, APIs, backend systems, and deployment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 font-label-sm text-on-surface-variant">
            <div>
              <span className="text-outline">ISSUER:</span> UDEMY
            </div>

            <div>
              <span className="text-outline">ISSUED:</span> MAY 2025
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end">
            <div
              className="stamp font-headline-md text-xl border-tertiary-container text-tertiary-container"
              data-stamp
            >
              VERIFIED
            </div>

            <div className="text-right">
              <div className="font-label-sm text-outline mb-1">
                CREDENTIAL ID
              </div>

              <div className="font-label-sm text-primary">
                UC-50391662-C5E3-4079-80F8-29DDCC49375F
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* =========================================================
          FIELD OPERATIONS
      ========================================================= */}

      <section className="md:col-span-5 space-y-6">
        <div className="flex items-center gap-2 mb-4 border-b border-outline pb-2">
          <span className="material-symbols-outlined text-primary-container">
            radar
          </span>

          <h2 className="font-headline-md text-headline-md text-primary-container">
            FIELD OPERATIONS
          </h2>
        </div>

        {/* =====================================================
            FLIPKART GRID
        ===================================================== */}

        <div className="dossier-card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
            <div className="absolute inset-0 bg-primary-container opacity-10"></div>

            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-label-md text-primary">
                OP: FLIPKART GRiD 8.0
              </h4>
            </div>

            <p className="font-body-md text-on-surface-variant text-sm">
              Competed among thousands of participants nationwide. Advanced to
              the semifinals.
            </p>
          </div>

          <div
            className="stamp font-label-sm border-tertiary-container text-tertiary-container px-1 py-0"
            data-stamp
          >
            SEMIFINALIST
          </div>
        </div>

        {/* =====================================================
            GIRLSCRIPT SUMMER OF CODE
        ===================================================== */}

        <div className="dossier-card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
            <div className="absolute inset-0 bg-primary-container opacity-10"></div>

            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              code
            </span>
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-label-md text-primary">
                OP: GIRLSCRIPT SUMMER OF CODE
              </h4>

              <span className="font-label-sm text-on-surface-variant">
                GSSoC
              </span>
            </div>

            <p className="font-body-md text-on-surface-variant text-sm">
              Open-source development experience contributing to collaborative
              software projects and real-world development workflows.
            </p>
          </div>

          <div
            className="stamp font-label-sm border-secondary text-secondary px-1 py-0"
            data-stamp
          >
            CONTRIBUTOR
          </div>
        </div>

        {/* =====================================================
            VITERA
        ===================================================== */}

        <div className="dossier-card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center relative shrink-0">
            <div className="absolute inset-0 bg-secondary opacity-10"></div>

            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              groups
            </span>
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-label-md text-primary">
                VITERA CLUB // TECH CO-LEAD
              </h4>

              <span className="font-label-sm text-on-surface-variant">
                NOV 23 - FEB 26
              </span>
            </div>

            <p className="font-body-md text-on-surface-variant text-sm">
              Led 10 members, organized 5 technical workshops and coding events
              for 300+ students, and mentored juniors in Python, Git &amp;
              Machine Learning.
            </p>
          </div>

          <div
            className="stamp font-label-sm border-primary-container text-primary-container px-1 py-0"
            data-stamp
          >
            COMMAND
          </div>
        </div>

        {/* =====================================================
            QUICK STATS
        ===================================================== */}

        <div className="dossier-card p-5 rotate-[-2deg]">
          <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim">
              military_tech
            </span>

            <h3 className="font-headline-md text-primary">RECORD SUMMARY</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-label-sm text-on-surface-variant block">
                CERTIFICATIONS
              </span>

              <span className="font-headline-md text-primary">05</span>
            </div>

            <div>
              <span className="font-label-sm text-on-surface-variant block">
                COMPETITIONS
              </span>

              <span className="font-headline-md text-primary">01+</span>
            </div>

            <div>
              <span className="font-label-sm text-on-surface-variant block">
                OPEN SOURCE
              </span>

              <span className="font-headline-md text-primary">GSSoC</span>
            </div>

            <div>
              <span className="font-label-sm text-on-surface-variant block">
                LEADERSHIP
              </span>

              <span className="font-headline-md text-primary">10+</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
