"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Preloader() {
  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial Glitch & Rumble Effect
    tl.fromTo(
      "#logo",
      { opacity: 0, scale: 0.5, letterSpacing: "-10px" },
      {
        opacity: 1,
        scale: 1,
        letterSpacing: "5px",
        duration: 0.5,
        ease: "back.out(2)",
      },
    )
      .to("#logo", {
        duration: 0.2,
        x: gsap.utils.random(-10, 10),
        y: gsap.utils.random(-5, 5),
        repeat: 5,
        yoyo: true,
      })
      // 2. Rugged Wipe Out (Game Screen Transition)
      .to("#preloader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
      });
    //  .call(() => {
    //   const audio = new Audio('/sounds/glitch.mp3');
    //   audio.play();
    // }, null, 0)
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-99 flex flex-col items-center justify-center bg-black"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="w-80 h-80 relative">
        <Image
          src="/g.png"
          alt="logo"
          sizes="200px"
          fill
          className="object-contain"
        />
      </div>
      <h1
        id="logo"
        className="text-white text-6xl md:text-9xl font-bold tracking-widest font-oswald italic"
      >
        GAMESTA
      </h1>

      {/* Decorative Gaming Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
    </div>
  );
}
