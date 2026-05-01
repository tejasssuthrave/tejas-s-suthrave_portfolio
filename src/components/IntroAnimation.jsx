import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function IntroAnimation({ onFinish }) {
  const greetings = [
    "Hello",          // English
    "ನಮಸ್ಕಾರ",        // Kannada
    "నమస్తే",          // Telugu
    "வணக்கம்",         // Tamil
    "നമസ്കാരം",        // Malayalam
    "नमस्कार",         // Marathi
    "নমস্কার",         // Bengali
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",     // Punjabi
    "નમસ્તે",          // Gujarati
    "ନମସ୍କାର",         // Odia
    "नमस्ते",          // Hindi
    "नमस्कारम्"         // Sanskrit
  ];

  const [index, setIndex] = useState(0);
  const overlayRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    let greetingTimer;

    if (index < greetings.length - 1) {
      gsap.fromTo(
        greetingRef.current,
        { opacity: 0, filter: "blur(10px)", scale: 0.95 },
        { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.15, ease: "power2.out" }
      );
      greetingTimer = setTimeout(() => setIndex(i => i + 1), 220);
    } else {
      gsap.fromTo(
        greetingRef.current,
        { opacity: 0, filter: "blur(10px)", scale: 0.95 },
        { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.5, ease: "power2.out" }
      );

      greetingTimer = setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => onFinish && onFinish(),
        });

        tl.to(greetingRef.current, {
          duration: 0.8,
          opacity: 0,
          scale: 1.1,
          filter: "blur(20px)",
          ease: "power2.inOut",
        });

        tl.to(overlayRef.current, {
          duration: 1.2,
          y: "-100%",
          ease: "power4.inOut",
        }, "-=0.4");
      }, 800);
    }

    return () => clearTimeout(greetingTimer);
  }, [index, onFinish]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center text-white overflow-hidden pointer-events-none bg-[var(--bg-base)]"
    >
      <h1
        ref={greetingRef}
        className="text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-widest absolute z-20 text-[var(--text-primary)] uppercase"
      >
        {greetings[index]}
      </h1>
    </div>
  );
}
