"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }) {
  const container = useRef(null);

  useEffect(() => {
    // GSAP Context create pannunga
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".page-wrapper",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );
    }, container); // Scope-ah container-kulla limit pannunga

    // Cleanup: Ithu thaan antha spacer issue-ah fix pannum
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="page-wrapper">
      {children}
    </div>
  );
}
