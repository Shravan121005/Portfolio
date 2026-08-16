export default function Projects() {
  return (
    <main className="w-full">
      {/* Header Section */}
      <header className="mb-12 border-b border-outline-variant pb-6">
        <div className="flex items-end justify-between mb-2">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary uppercase tracking-tight">
            <span className="cursor-blink">EVIDENCE LOG: TECHNICAL PROJECTS</span>
          </h1>

          <span className="font-label-sm text-on-surface-variant opacity-70">
            REF: DOC-77A // EXH. 01-04
          </span>
        </div>

        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          &gt; INITIALIZING QUERY...<br />
          &gt; RETRIEVING ARCHIVED TECHNICAL EXECUTIONS...<br />
          &gt; WARNING: CONTENTS MAY CONTAIN HIGHLY CLASSIFIED ALGORITHMS.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* Project 1: DeepGuard AI */}
        <article className="dossier-card p-dossier-padding flex flex-col h-full group">
          <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                image_search
              </span>

              <h2 className="font-headline-md text-primary tracking-tight">
                EXH A: DEEPGUARD AI
              </h2>
            </div>

            <span className="font-label-sm bg-surface-bright text-on-surface px-2 py-1 font-bold">
              CASE_NO: 001
            </span>
          </div>

          <div className="flex-grow mb-6">
            <p className="font-body-md text-on-surface-variant mb-4">
              AI-generated image detection system built with EfficientNet,
              achieving 96.2% accuracy and 95.8% F1-score across modern
              generative image architectures.
            </p>

            <p className="font-body-md text-on-surface-variant mb-4">
              Improved generalization through augmentation and regularization,
              with a FastAPI inference service and Grad-CAM explainability
              under &lt;100 ms latency.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: PYTHON
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: PYTORCH
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: EFFICIENTNET
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: FASTAPI
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: DOCKER
              </span>
            </div>
          </div>

          <div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
            <span className="font-label-sm text-on-surface-variant">
              DATE:{" "}
              <span className="text-tertiary-fixed-dim">
                NOV 25 - FEB 26
              </span>
            </span>

            <a
              href="https://github.com/Shravan121005/DeepgaurdAI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-label-md px-4 py-2 hover:bg-primary-container glitch-hover flex items-center gap-2 border border-on-primary-fixed uppercase font-bold cursor-pointer"
            >
              GITHUB REPO
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </article>


        {/* Project 2: BugInsight */}
        <article
          className="dossier-card p-dossier-padding flex flex-col h-full group"
          style={{ transform: "rotate(1deg)" }}
        >
          <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                bug_report
              </span>

              <h2 className="font-headline-md text-primary tracking-tight">
                EXH B: BUGINSIGHT
              </h2>
            </div>

            <span className="font-label-sm bg-surface-bright text-on-surface px-2 py-1 font-bold">
              CASE_NO: 002
            </span>
          </div>

          <div className="flex-grow mb-6">
            <p className="font-body-md text-on-surface-variant mb-4">
              Dual-task ML pipeline predicting GitHub issue severity and
              resolution time, achieving a 91.3% F1-score and 1.8-day RMSE.
            </p>

            <p className="font-body-md text-on-surface-variant mb-4">
              Improved prediction performance by 12% through NLP-based
              feature engineering and model optimization, with FastAPI and
              automated GitHub API integration.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: SCIKIT-LEARN
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: XGBOOST
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: LIGHTGBM
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: NLP
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: FASTAPI
              </span>
            </div>
          </div>

          <div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
            <span className="font-label-sm text-on-surface-variant">
              DATE:{" "}
              <span className="text-tertiary-fixed-dim">
                MAY 25 - AUG 25
              </span>
            </span>

            <a
              href="https://github.com/Shravan121005/BugInsight"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-label-md px-4 py-2 hover:bg-primary-container glitch-hover flex items-center gap-2 border border-on-primary-fixed uppercase font-bold cursor-pointer"
            >
              GITHUB REPO
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </article>


        {/* Project 3: SmartDiet AI */}
        <article
          className="dossier-card p-dossier-padding flex flex-col h-full group"
          style={{ transform: "rotate(-1deg)" }}
        >
          <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                restaurant
              </span>

              <h2 className="font-headline-md text-primary tracking-tight">
                EXH C: SMARTDIET AI
              </h2>
            </div>

            <span className="font-label-sm bg-surface-bright text-on-surface px-2 py-1 font-bold">
              CASE_NO: 003
            </span>
          </div>

          <div className="flex-grow mb-6">
            <p className="font-body-md text-on-surface-variant mb-4">
              Nutrition recommendation and calorie prediction system trained
              on 500+ dietary records, achieving 78% prediction accuracy.
            </p>

            <p className="font-body-md text-on-surface-variant mb-4">
              Reduced calorie prediction error by 15% through feature
              engineering and regression optimization, integrated into a
              full-stack React and Flask application.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: PYTHON
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: REACT.JS
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: FLASK
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: XGBOOST
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: MONGODB
              </span>
            </div>
          </div>

          <div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
            <span className="font-label-sm text-on-surface-variant">
              DATE:{" "}
              <span className="text-tertiary-fixed-dim">
                OCT 24 - JAN 25
              </span>
            </span>

            <a
              href="https://github.com/Shravan121005/SmartDietAi"
              className="bg-primary text-on-primary font-label-md px-4 py-2 hover:bg-primary-container glitch-hover flex items-center gap-2 border border-on-primary-fixed uppercase font-bold cursor-pointer"
            >
              GITHUB REPO
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </article>


        {/* Project 4: Oil Well Choke Prediction */}
        <article
          className="dossier-card p-dossier-padding flex flex-col h-full group"
          style={{ transform: "rotate(1deg)" }}
        >
          <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                oil_barrel
              </span>

              <h2 className="font-headline-md text-primary tracking-tight">
                EXH D: OIL WELL CHOKE
              </h2>
            </div>

            <span className="font-label-sm bg-surface-bright text-on-surface px-2 py-1 font-bold">
              CASE_NO: 004
            </span>
          </div>

          <div className="flex-grow mb-6">
            <p className="font-body-md text-on-surface-variant mb-4">
              Autonomous oil well choke control system built for the Honeywell
              Industrial AI Hackathon using a data-driven Digital Twin and
              Model Predictive Control.
            </p>

            <p className="font-body-md text-on-surface-variant mb-4">
              Developed a predictive well model and closed-loop MPC controller
              to track production targets while maintaining pressure and
              operational constraints.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: PYTHON
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: PANDAS
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: SCIKIT-LEARN
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: MPC
              </span>

              <span className="evidence-tag bg-surface-container text-primary font-label-sm px-2 py-1">
                TAG: DIGITAL-TWIN
              </span>
            </div>
          </div>

          <div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
            <span className="font-label-sm text-on-surface-variant">
              EVENT:{" "}
              <span className="text-tertiary-fixed-dim">
                HONEYWELL AI HACKATHON
              </span>
            </span>

            <a
              href="https://github.com/Shravan121005/OilWellChokePrediction"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-label-md px-4 py-2 hover:bg-primary-container glitch-hover flex items-center gap-2 border border-on-primary-fixed uppercase font-bold cursor-pointer"
            >
              GITHUB REPO
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </article>

      </div>
    </main>
  );
}