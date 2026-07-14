// src/app/template.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }) {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="page-wrapper">
      {children}
    </div>
  );
}
