export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-12 items-start justify-center w-full">
      {/* Subject Polaroid (Left Col) */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end md:sticky md:top-32 rotate-[-2deg] transition-transform hover:rotate-0 duration-300">
        <div className="bg-surface-container p-4 pb-12 border-2 border-outline shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full max-w-80">
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-surface-tint/60 backdrop-blur-sm rotate-2 z-20"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-80 object-contain border-b-4 border-r-4 border-surface-container-lowest filter grayscale contrast-125 mb-4"
            alt="A gritty, high-contrast black and white polaroid photograph of a male software engineer, intense expression, stark lighting casting heavy shadows, set against a concrete wall. Investigative noir style, rough texture."
            src="/profile.png"
          />
          <div className="font-label-md text-label-md text-on-surface-variant flex justify-between border-b border-outline-variant pb-2">
            <span>ID: SJ-89-X</span>
            <span className="text-error font-bold blinking-cursor">
              STATUS: ACTIVE
            </span>
          </div>
          <div className="mt-4 font-label-md text-body-md text-on-surface opacity-70 italic">
            &quot;Models.Systems.Logic.&quot;
          </div>
        </div>
      </div>

      {/* Dossier Content (Right Col) */}
      <div className="w-full md:w-2/3 flex flex-col gap-8 rotate-[1deg]">
        {/* Main Personnel File Card */}
        <div className="dossier-card p-dossier-padding">
          <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container font-label-sm px-3 py-1 border-l border-b border-[#333333]">
            DOC NO. 04A
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-6 border-b-2 border-outline pb-4 flex items-center justify-between">
            <span>SUBJECT OVERVIEW</span>
            <span className="material-symbols-outlined text-4xl opacity-50">
              badge
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body-md text-body-md text-on-surface-variant mb-8">
            <div className="border-l-2 border-surface-tint pl-4">
              <div className="font-label-sm text-label-sm text-primary opacity-70 mb-1">
                ALIAS / NAME
              </div>
              <div className="font-bold text-on-surface uppercase">
                Shravan Shashi Jain
              </div>
            </div>
            <div className="border-l-2 border-surface-tint pl-4">
              <div className="font-label-sm text-label-sm text-primary opacity-70 mb-1">
                PRIMARY LOCATION
              </div>
              <div className="font-bold text-on-surface uppercase">
                Vellore Institute of Technology
              </div>
            </div>
            <div className="border-l-2 border-surface-tint pl-4 md:col-span-2">
              <div className="font-label-sm text-label-sm text-primary opacity-70 mb-1">
                KNOWN ASSOCIATIONS
              </div>
              <div className="font-bold text-on-surface typewriter-text w-full text-[11px] sm:text-sm md:text-base">
                MACHINE_LEARNING_ENGINEER // FULL_STACK_DEV
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-4 border border-outline-variant text-body-md font-body-md">
            <p className="mb-4">
              Subject demonstrates a strong passion for problem-solving, with a
              particular interest in Machine Learning and full-stack software
              development. Driven by curiosity, analytical thinking, and a
              constant desire to build better solutions from complex problems.
            </p>
            <p>
              WARNING: Subject is highly engaged in learning, experimenting, and
              engineering scalable systems. Known to approach difficult problems
              with persistence, explore ideas beyond the obvious solution, and
              continuously improve through hands-on development.
            </p>
          </div>
        </div>

        {/* Operational Capabilities Grid */}
        <div className="dossier-card p-dossier-padding relative">
          <div className="absolute -left-12 top-[68px] w-24 h-6 bg-secondary-container text-on-secondary-container font-label-sm flex items-center justify-center rotate-[-90deg] border border-[#333333] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
            EVIDENCE
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-6 ml-6 border-b border-outline pb-2">
            OPERATIONAL CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6">
            <div className="flex items-center gap-3 bg-surface-container p-3 border border-outline-variant hover:bg-surface-bright transition-colors glitch-hover cursor-default">
              <span className="material-symbols-outlined text-tertiary-container">
                memory
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                PROBLEM SOLVING / DSA
              </span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container p-3 border border-outline-variant hover:bg-surface-bright transition-colors glitch-hover cursor-default">
              <span className="material-symbols-outlined text-tertiary-container">
                code
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                WEB TECHNOLOGIES
              </span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container p-3 border border-outline-variant hover:bg-surface-bright transition-colors glitch-hover cursor-default">
              <span className="material-symbols-outlined text-tertiary-container">
                database
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                SYSTEMS & DEPLOYMENT
              </span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container p-3 border border-outline-variant hover:bg-surface-bright transition-colors glitch-hover cursor-default">
              <span className="material-symbols-outlined text-tertiary-container">
                rocket_launch
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                MACHINE LEARNING
              </span>
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="flex justify-start md:justify-end mt-4">
          <a
            href="mailto:shravanjain.dev@gmail.com"
            className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] glitch-hover flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto text-center"
          >
            <span className="material-symbols-outlined">mail</span>
            CONTACT SUBJECT
          </a>
        </div>
      </div>
    </main>
  );
}
