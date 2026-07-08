"use client";
import React, { useRef, useEffect } from "react";
import { gamestadapp } from "@/data/data";
import Image from "next/image";
import { initRevealAnimations } from "@/lib/animations/reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dapp = () => {
  const pageRef = useRef(null);


  useEffect(() => {
    if (!pageRef.current) return;
    setTimeout(() => {
      const cleanup = initRevealAnimations(pageRef);
      return cleanup;
    }, 2000);
  }, []);

  return (
    <div
      ref={pageRef}
      className="padding text-[#273A41] bg-[#EBF9FF] flex flex-col justify-center items-center overflow-hidden pb-20 sm:pb-43  [clip-path:polygon(0%_0%,100%_0%,100%_92%,0%_100%)] sm:[clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)] lg:[clip-path:polygon(0%_0%,100%_0%,100%_83%,0%_100%)]"
    >
      <div className="w-full sm:w-[60%] xl:w-[40%] space-y-3">
        <div className="w-full mt-4 flex flex-col justify-center gap-y-3">
          <div className="relative w-fit font-moda text-3xl md:text-5xl lg:text-7xl 2xl:text-[100px] font-black">
            <h1 className="animate-heading">{gamestadapp.heading}</h1>
            <div className="font-sans font-normal text-white text-sm lg:text-lg flex flex-col items-end absolute -rotate-15 right-[-50%] top-[18%] xl:top-[20%] xl:right-[-35%]">
              <p className="w-fit bg-[#00B3E8] px-2 py-1">Launching in </p>
              <p className="w-fit bg-[#00B3E8] px-2 py-1 absolute top-6 -right-5">
                Q4 2026
              </p>
            </div>
          </div>
          <p className="animate-para font-semibold text-base sm:text-lg xl:text-2xl">
            {gamestadapp.para}
          </p>
        </div>
      </div>
      <div className="animate-grid grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {gamestadapp.dapp.map((value) => (
          <div key={value.id} className="flex">
            <div className="w-[20%] xl:w-[10%]">
              <Image
                src={value.icon}
                className="w-12 h-12 object-contain bg-white p-3.5 rounded-lg shadow-2xl"
                alt={value.head}
              />
            </div>
            <div className="w-[80%] xl:w-[90%]">
              <p className="text-[#00B3E8] text-xl lg:text-2xl xl:text-3xl font-bold">
                {value.head}
              </p>
              <p className="max-w-xl text-sm lg:text-base xl:text-lg">
                {value.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dapp;
