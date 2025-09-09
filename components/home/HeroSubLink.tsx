"use client";

import React from "react";

type Props = {
  // optional tracking callback you can pass from parent or leave undefined
  onTrack?: () => void;
};

export default function HeroSubLink({ onTrack }: Props) {
  // Build path reliably, fallback to relative path if env var missing
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const filePath = `${base.replace(/\/+$/,'')}/static/file/NGUEFACK_LEONEL_CV.pdf`.replace(/^\/+/, "/");

  const handleClick = () => {
    // user-provided tracking callback (optional)
    if (typeof onTrack === "function") onTrack();

    // Example: fire GA gtag event if gtag is loaded (safe, non-blocking)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "download", {
        event_category: "resume",
        event_label: "NGUEFACK_LEONEL_CV.pdf",
      });
    }
  };

  return (
    <div className="mb-5 cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
    <a
      href={filePath}
      download="leonel_nguefack_resume"
      onClick={handleClick}
      aria-label="Download résumé (PDF)"
      title="Download résumé (PDF)"
    >
      Download résumé (PDF)
    </a>
    </div>
  );
}
