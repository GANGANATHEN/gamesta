"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

export default function NotFound() {
  useEffect(() => {
    // Glitch animation for 404 text
    gsap.to(".glitch-text", {
      x: gsap.utils.random(-5, 5),
      y: gsap.utils.random(-2, 2),
      repeat: -1,
      yoyo: true,
      duration: 0.1,
    });
  }, []);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Scanlines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

      <h1 className="glitch-text text-[150px] md:text-[250px] font-black font-oswald italic leading-none">
        404
      </h1>
      <p className="text-xl md:text-2xl tracking-[0.5em] uppercase text-[#00B3E8]">
        Level Not Found
      </p>

      <Link
        href="/"
        className="mt-10 px-8 py-3 border border-[#00B3E8] hover:bg-[#00B3E8] hover:text-black transition-all font-bold uppercase tracking-widest"
      >
        Return to Lobby
      </Link>
    </div>
  );
}
