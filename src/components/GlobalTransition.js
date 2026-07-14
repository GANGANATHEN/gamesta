// components/GlobalTransition.js
"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GlobalTransition() {
  const pathname = usePathname();
  const overlay = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(overlay.current, 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 0.6, ease: "power4.inOut", yoyo: true, repeat: 1 }
    );
  }, [pathname]);

  return <div ref={overlay} className="fixed inset-0 z-99 bg-[#00B3E8] origin-left pointer-events-none" />;
}