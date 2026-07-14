'use client'
import { play2earn } from "@/data/data";
import Image from "next/image";
import React from "react";

const PlayToEarn = () => {
  const marqueeIcons = [...play2earn.p2egames, ...play2earn.p2egames];

  return (
    <div className="relative">
      <div className="relative padding text-[#273A41] overflow-hidden py-20">
        <div className="w-full flex flex-col justify-center items-center gap-y-12 sm:gap-y-16 lg:gap-y-20 2xl:gap-y-26">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute -rotate-6 -0 top-12 sm:top-16 -right-10 md:top-20 lg:top-30 xl:top-36 2xl:bottom-10 2xl:-right-30 w-[30%] h-0.5 bg-[#00B3E8]"></div>

            <div className="absolute inset-x-0 top-0 flex justify-center">
              <p className="font-moda font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[170px] 2xl:text-[200px] text-transparent text-stroke-accent [word-spacing:30px] sm:[word-spacing:50px] 2xl:[word-spacing:130px] uppercase -rotate-6 whitespace-nowrap">
                {play2earn.heading}
              </p>
            </div>
            <p className="font-moda font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[130px] uppercase -rotate-11 mt-1 sm:mt-2 lg:mt-5 2xl:mt-10">
              {play2earn.heading}
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="font-semibold text-base lg:text-xl xl:text-2xl">
              {play2earn.subhead}
            </p>
            <p className="pl-8 sm:pl-12 md:pl-20 lg:pl-34 2xl:pl-38 sm:max-w-[80%] lg:max-w-[60%] 2xl:max-w-[40%] text-sm lg:text-base xl:text-lg">
              {play2earn.para}
            </p>
          </div>
        </div>
        <div className="animate-grid grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {play2earn.p2e.map((value) => (
            <div key={value.id} className="flex">
              <div className="w-[20%] xl:w-[10%]">
                <Image
                  src={value.icon}
                  className="w-12 h-12 object-contain bg-[#EBF9FF] p-3.5 rounded-lg shadow-2xl"
                  alt={value.heading}
                />
              </div>
              <div className="w-[80%] xl:w-[90%]">
                <p className="text-[#00B3E8] text-xl lg:text-2xl xl:text-3xl font-bold">
                  {value.heading}
                </p>
                <div className="flex flex-col gap-y-3">
                  {value.text.map((t, i) => (
                    <p
                      key={i}
                      className="max-w-xl text-sm lg:text-base xl:text-lg"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* marquee */}
        <div className="relative sm:pb-10 mt-15">
          <div className="absolute -rotate-4 -top-5 -left-10 2xl:-top-10 2xl:-left-20 w-[30%] md:w-[20%] h-0.5 bg-black"></div>
          <h1 className="font-moda font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {play2earn.p2ehead}
          </h1>
          <div
            className="relative overflow-hidden bg-white py-6 2xl:py-12
          before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-white before:to-transparent
          after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-white after:to-transparent"
          >
            <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
              {marqueeIcons.map((icon, index) => (
                <div key={index} className="shrink-0 px-3 2xl:px-8">
                  <Image
                    src={icon}
                    alt={index}
                    width={100}
                    height={100}
                    className="size-28 lg:size-30 xl:size-36 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute rotate-6 z-99 bottom-7 lg:-bottom-5 2xl:-bottom-10 -left-13 w-[150%] h-0.5 bg-[#00B3E820]"></div>
    </div>
  );
};

export default PlayToEarn;
