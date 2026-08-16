"use client";

import { useEffect, useState } from "react";

export default function BootSequence() {
  const [messages, setMessages] = useState<string[]>([]);
  const [visible, setVisible] = useState(true);

  const fullMessages = [
    "INITIALIZING SECURE CONNECTION...",
    "BYPASSING MAINFRAME FIREWALLS...",
    "ACCESSING CLASSIFIED DATABASE...",
    "DECRYPTING SUBJECT DOSSIER: SHRAVAN_JAIN...",
    "ACCESS GRANTED.",
  ];

  useEffect(() => {
    let msgIndex = 0;
    let timeoutId: NodeJS.Timeout;

    function printMessage() {
      if (msgIndex < fullMessages.length) {
        setMessages((prev) => [...prev, "> " + fullMessages[msgIndex]]);
        msgIndex++;
        timeoutId = setTimeout(printMessage, 300 + Math.random() * 400);
      } else {
        timeoutId = setTimeout(() => {
          setVisible(false);
        }, 800);
      }
    }

    printMessage();

    return () => clearTimeout(timeoutId);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0e0e0e] z-[100] flex flex-col justify-center items-center text-[#e1ffd7] font-label-md text-label-md p-8 transition-opacity duration-500 ease-in-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="w-full max-w-2xl text-left">
        {messages.map((msg, idx) => (
          <p key={idx} className="mb-2 opacity-80">
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}
