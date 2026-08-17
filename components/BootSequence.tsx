"use client";

import { useEffect, useState } from "react";

const BOOT_MESSAGES = [
  "ESTABLISHING SECURE CONNECTION...",
  "AUTHENTICATING SUBJECT: SHRAVAN_JAIN...",
  "DECRYPTING CASE FILE...",
  "ACCESS GRANTED.",
];

export default function BootSequence() {
  const [messages, setMessages] = useState<string[]>([]);
  // Start as "pending" on both server and client so the initial HTML always
  // matches (renders null). The actual "boot" or "done" decision is made
  // inside useEffect, which only runs on the client — no hydration mismatch.
  const [phase, setPhase] = useState<"pending" | "boot" | "fadeout" | "done">(
    "pending",
  );
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    // Returning visitors: skip directly to done
    if (sessionStorage.getItem("booted")) {
      setPhase("done");
      return;
    }
    setPhase("boot");
  }, []);

  useEffect(() => {
    if (phase !== "boot") return;

    let msgIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function printNext() {
      if (msgIndex < BOOT_MESSAGES.length) {
        setMessages((prev) => [...prev, "> " + BOOT_MESSAGES[msgIndex]]);
        const pct = Math.round(((msgIndex + 1) / BOOT_MESSAGES.length) * 100);
        setProgressWidth(pct);
        msgIndex++;
        timeoutId = setTimeout(printNext, 220 + Math.random() * 100);
      } else {
        timeoutId = setTimeout(() => {
          setPhase("fadeout");
          timeoutId = setTimeout(() => {
            setPhase("done");
            sessionStorage.setItem("booted", "1");
          }, 400);
        }, 500);
      }
    }

    printNext();
    return () => clearTimeout(timeoutId);
  }, [phase]);

  // "pending" and "done" both render nothing — server always outputs null,
  // so hydration is guaranteed to match.
  if (phase === "pending" || phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col justify-center items-center p-8"
      style={{
        backgroundColor: "#0a0a0a",
        opacity: phase === "fadeout" ? 0 : 1,
        transition: "opacity 0.4s ease-out",
      }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          animation: "flicker 8s linear infinite",
        }}
      />

      <div className="w-full max-w-xl relative z-10">
        {/* Header line */}
        <div className="font-label-sm text-label-sm text-[#e9c400] opacity-60 mb-6 tracking-[0.3em]">
          SYS :: CASE_FILE_ACCESS_PROTOCOL v2.4.1
        </div>

        {/* Messages */}
        <div className="space-y-2 mb-8 min-h-[6rem]">
          {messages.map((msg, idx) => (
            <p
              key={idx}
              className="font-label-md text-label-md"
              style={{
                color:
                  idx === messages.length - 1 && msg.includes("GRANTED")
                    ? "#00e639"
                    : "#d0c6ab",
                opacity: idx < messages.length - 1 ? 0.6 : 1,
              }}
            >
              {msg}
              {idx === messages.length - 1 && phase === "boot" && (
                <span
                  style={{
                    display: "inline-block",
                    width: "0.6em",
                    height: "1em",
                    backgroundColor: "#e9c400",
                    marginLeft: "4px",
                    verticalAlign: "text-bottom",
                    animation: "blink 0.8s step-end infinite",
                  }}
                />
              )}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-[2px] bg-[#1a1a1a] border border-[#333] relative overflow-hidden">
          <div
            className="h-full bg-[#e9c400]"
            style={{
              width: `${progressWidth}%`,
              transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>

        {/* Footer label */}
        <div className="flex justify-between mt-2 font-label-sm text-label-sm text-[#4d4732]">
          <span>CLEARANCE: LEVEL-5</span>
          <span>{progressWidth}%</span>
        </div>
      </div>
    </div>
  );
}
