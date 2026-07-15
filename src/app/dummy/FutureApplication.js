"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { futureApplications } from "@/data/data";
import { initFutureApplicationAnimation } from "@/lib/animations/futurepageappanim1";

export default function FutureApplication() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cleanup = initFutureApplicationAnimation(sectionRef);

    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding relative overflow-hidden py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute bottom-20 right-10 h-87.5 w-87.5 rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-1500px">
        {/* Heading */}
        <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center">
          <h2 className="future-heading text-center font-moda font-bold leading-none text-[#273A41] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            {futureApplications.heading}
          </h2>

          <Link
            href={futureApplications.link.href}
            className="future-button mt-8 rounded-xl bg-linear-to-r from-[#06C5C1] to-[#009FEA] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            {futureApplications.link.text}
          </Link>
        </div>

        {/* Grid */}
        <div className="future-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 place-items-center">
          {futureApplications.icons.map((card) => (
            <div
              key={card.id}
              className="future-card group relative w-full max-w-90 min-h-65 rounded-4xl overflow-hidden p-8 transition-transform duration-300 cursor-pointer"
              style={{
                background: card.color,
                boxShadow: `0px 30px 60px -20px ${card.color}`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/30 blur-3xl" />

              {/* Icon */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md">
                <Image
                  src={card.icon}
                  alt={card.text}
                  width={64}
                  height={64}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl lg:text-2xl font-bold leading-snug text-[#273A41]">
                {card.text}
              </h3>

              {/* Description Line */}
              <div
                className="
                mt-6 h-1 w-16 rounded-full bg-linear-to-r from-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-28
              "
              />

              {/* Hover Border */}
              <div
                className="
                pointer-events-none absolute inset-0 rounded-4xl border border-white/30 opacity-0 transition duration-500 group-hover:opacity-100
              "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
