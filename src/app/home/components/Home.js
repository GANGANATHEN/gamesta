"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { homecontent, navLinks } from "@/data/data";
import Link from "next/link";
import { initHomepageAnimation } from "@/lib/animations/gsapanimation";
import RevolverMenu from "@/components/revolverMenu";
import Countdown from "@/components/counDown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const container = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // call animation
  useEffect(() => {
    if (!mounted) return;

    let cleanup = () => {};

    const timer = setTimeout(() => {
      cleanup = initHomepageAnimation(container);
    }, 500);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [mounted]);

  // useEffect(() => {
  //   const images = document.images;

  //   Promise.all(
  //     [...images].map((img) => {
  //       if (img.complete) return Promise.resolve();

  //       return new Promise((resolve) => {
  //         img.onload = resolve;
  //         img.onerror = resolve;
  //       });
  //     }),
  //   ).then(() => {
  //     ScrollTrigger.refresh();
  //   });
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  const anchors = [
    // img-1
    `w-5 h-5 bottom-30 -left-15
     sm:bottom-[45%] sm:left-[-10%]
     md:bottom-40 md:-left-13
     min-[1800px]:bottom-[50%]! min-[1800px]:!left-[-12%]`,
    // img-2
    `w-5 h-5 -top-4 -left-30 
     sm:top-[-17%] sm:left-[-25%] md:-top-17 md:-left-25
     min-[1800px]:top-[-17%]! min-[1800px]:left-[-13%]!`,
    // img-3
    `w-5 h-5 -top-18 left-3
     sm:top-[-28%] sm:left-14 md:-top-32 md:left-16
     xl:-top-37
     min-[1800px]:top-[-38%]! min-[1800px]:left-[13%]!`,
    // img-4
    `w-5 h-5 -top-16 left-6
     sm:top-[-31%] sm:left-[22%] md:-top-18 md:left-26
     lg:-top-16 lg:left-30 xl:-top-24 xl:left-34 2xl:-top-28 2xl:left-37
     min-[1800px]:top-[-30%]! min-[1800px]:left-[26%]!`,
    // img-5
    `w-5 h-5 -top-10 left-24
     sm:top-[-25%] sm:left-[37%] md:-top-25 md:left-37
     lg:-top-28 lg:left-42 xl:-top-36 xl:left-46 2xl:-top-38 2xl:left-54
     min-[1800px]:top-[-40%]! min-[1800px]:left-[30%]!`,
    // img-6
    `w-5 h-5 -top-10 left-33
     sm:top-[-20%] sm:left-[43%] md:-top-17 md:left-46
     lg:-top-15 xl:-top-23 xl:left-60 2xl:left-74
     min-[1800px]:top-[-30%]! min-[1800px]:left-[40%]!`,
    // img-7
    `w-5 h-5 -top-14 left-34
     sm:top-[-37%] sm:left-[42%] md:-top-24 md:left-52
     xl:-top-28 xl:left-80 2xl:-top-36 2xl:left-95
     min-[1800px]:top-[-45%]! min-[1800px]:right-[42%]!`,
    // img-8
    `w-5 h-5 bottom-35 right-4
     sm:bottom-[60%] sm:right-[9%] md:bottom-45 md:right-7
     lg:right-4
     min-[1800px]:bottom-[50%]! min-[1800px]:right-[2%]!`,
    // img-9
    `w-5 h-5 bottom-33 right-11
     sm:bottom-[58%] sm:right-[16%] md:bottom-45 md:right-15
     lg:right-13 xl:right-15
     min-[1800px]:bottom-[48%]! min-[1800px]:right-[9%]!`,
  ];

  console.log("Home render");

  if (!mounted) {
    return null; // Render nothing on the server side
  }

  return (
    <div
      ref={container}
      className="relative h-dvh bg-[#EBF9FF] text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <nav className="nav-bar opacity-0 padding w-full absolute z-50 top-0 left-0 flex justify-between items-center p-3 gap-3 2xl:gap-x-25">
        {/* Logo Spot - Same place for animation */}
        <div className="w-[40%] xl:w-[20%] h-12.5">
          <div className="nav-logo-spot w-full h-full mt-4 sm:mt-2"></div>
        </div>
        <div className="w-[70%] hidden xl:flex justify-between items-center gap-4 text-[14px]">
          {navLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              onClick={() => setMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        {/* Mobile Menu & Login */}
        <div className="w-[60%] xl:w-[10%] flex justify-end items-center gap-4">
          {/* Login Button */}
          <div className="p-1.5 2xl:p-2 rounded-lg 2xl:rounded-xl bg-white/60 text-[#01A590]">
            <span className="hidden xl:block">Login to App</span>
            <span className="xl:hidden">👤</span> {/* Simple Icon */}
          </div>

          {/* Hamburger Menu */}
          <div
            className="xl:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* Gaming Arcade Overlay */}
      {menuOpen && (
        <RevolverMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}

      {/* bg image */}
      <Image
        src={homecontent.images[1].icon}
        alt={homecontent.images[1].name}
        fill
        className="bg-image object-cover scale-155 lg:[clip-path:polygon(0%_0%,100%_0%,100%_83%,0%_100%)]"
      />

      <div className="relative flex flex-col mt-30">
        {/* logo */}
        <Image
          src={homecontent.images[0].icon}
          alt={homecontent.images[0].name}
          className="hero-logo z-1 w-70 sm:w-120 md:w-150 lg:w-180 xl:w-220 2xl:w-276 min-[1800px]:w-376! h-full"
        />
        <Image
          src={homecontent.images[2].icon}
          alt={homecontent.images[2].name}
          className="img-1 z-1 absolute top-[88%] left-[17%] 2xl:left-97 min-[1800px]:top-32! min-[1800px]:left-[38%]! w-36 h-full"
        />
        <Image
          src={homecontent.images[3].icon}
          alt={homecontent.images[3].name}
          className="img-2 absolute z-0 w-76 h-30 top-[-238%] left-[3%] sm:h-40 sm:top-[-185%] sm:left-[17%]
          md:h-55 md:left-[26%] lg:h-70 lg:top-[-210%] lg:left-[30%] xl:h-80 xl:top-[-190%] xl:left-[34%]
          2xl:h-105 2xl:top-[-205%] 2xl:left-[37%] min-[1800px]:-top-62! min-[1800px]:left-[43%]!"
        />
        <Image
          src={homecontent.images[4].icon}
          alt={homecontent.images[4].name}
          className="img-3 z-1 absolute w-28 h-full top-[-70] right-[-20%] -rotate-40 
          sm:-top-30 sm:-right-15 sm:rotate-20 lg:-right-23 
          min-[1800px]:top-[-105%]! min-[1800px]:right-[-6%]!"
        />
        <Image
          src={homecontent.images[5].icon}
          alt={homecontent.images[5].name}
          className="img-4 z-1 absolute w-36 h-20 
             -top-18 -left-13 
             lg:h-full lg:-top-20 xl:-top-24 lg:left-[66%] 
             2xl:-top-29 2xl:left-[70%]
             min-[1800px]:-top-37!"
        />
        <Image
          src={homecontent.images[6].icon}
          alt={homecontent.images[6].name}
          className="img-5 z-1 absolute w-26 h-10 2xl:h-20 -top-8 left-8 -rotate-12 
          sm:left-22 md:left-29  lg:left-42 xl:h-15 xl:-top-12 xl:left-52 2xl:-top-23 2xl:left-68 min-[1800px]:-top-15! min-[1800px]:left-[27%]!"
        />
        <Image
          src={homecontent.images[7].icon}
          alt={homecontent.images[7].name}
          className="img-6 z-1 absolute w-38 h-15 top-6 right-3 sm:h-full sm:top-11 sm:right-0 
          md:top-15 md:right-5 lg:top-17 lg:right-10 xl:top-21 xl:right-16 2xl:top-26 2xl:right-24 min-[1800px]:top-33! min-[1800px]:right-[10%]!"
        />
        <Image
          src={homecontent.images[8].icon}
          alt={homecontent.images[8].name}
          className="img-7 z-0 absolute w-70 h-20 -top-15 -right-23 sm:h-30 sm:-top-25 sm:-right-13 
          md:right-[-5%] lg:h-35 lg:-right-20 xl:-right-19 2xl:h-50 2xl:-top-40 2xl:-right-12 
          min-[1800px]:-top-55! min-[1800px]:-right-3! min-[1800px]:h-70!"
        />
        <Image
          src={homecontent.images[9].icon}
          alt={homecontent.images[9].name}
          className="img-8 z-1 absolute w-17 h-15 top-5 sm:h-full sm:top-10 sm:-right-12 2xl:top-10 2xl:-right-17 "
        />
        <Image
          src={homecontent.images[10].icon}
          alt={homecontent.images[10].name}
          className="img-9 z-1 absolute w-23 h-15 top-5 sm:h-full sm:top-10 sm:-right-10 2xl:top-10 2xl:-right-10 "
        />
      </div>

      <div className="padding  absolute flex inset-0 w-full justify-center items-center z-1">
        <div
          className="relative flex flex-col justify-between max-[376px]:pt-[25%] max-[432px]:pt-[20%] 
        max-[500px]:pt-[17%] max-[640px]:pt-[15%] max-[640px]:pb-[5%] sm:py-[15%] lg:py-[10%] w-full h-full overflow-hidden"
        >
          <div className="space-y-5 z-1">
            <div className="content opacity-0 text-2xl md:text-4xl lg:text-5xl font-moda font-bold">
              {homecontent.heading}
            </div>
            <div className="sm:pl-7 md:pl-20 space-y-4 2xl:space-y-6">
              <p className="content max-sm:max-w-sm opacity-0 text-md md:text-lg lg:text-2xl lg:w-180">
                {homecontent.para}
              </p>
              <div className="content opacity-0 space-y-4">
                <p className="font-sans text-lg">{homecontent.community}</p>
                <div className="flex gap-2 sm:gap-5">
                  {homecontent.social.map((value) => (
                    <div
                      key={value.name}
                      className="flex items-center justify-center overflow-hidden gap-1.5 sm:gap-2 border-2 border-white rounded-lg text-sm p-1 sm:px-4 sm:py-2"
                    >
                      <Image
                        src={value.icon}
                        alt={value.name}
                        className="w-4 h-4 md:w-8 md:h-8"
                      />
                      <p>{value.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="content opacity-0 z-1 flex flex-col gap-y-2 mt-5">
            <div className="font-sans text-lg">{homecontent.countdown}</div>
            <Countdown targetDate={homecontent.targetDate} />
          </div>

          <div
            className="absolute 
            max-[1024px]:flex 
            max-[640px]:justify-center
            max-[1024px]:justify-end 
            max-[1024px]:w-full 
            max-[1024px]:bottom-[20%]
            lg:right-[3%] 
            2xl:right-[4%] 
            lg:bottom-4 
            2xl:bottom-15"
          >
            <div
              className="relative inline-block w-90 h-60 sm:w-110 md:w-120 md:h-70
            lg:h-80 xl:w-150 xl:h-90 2xl:w-180 2xl:h-115"
            >
              <Image
                src={homecontent.images[11].icon}
                alt={homecontent.images[11].name}
                fill
                className="laptop opacity-0 object-contain"
              />

              {anchors.map((pos, i) => (
                <div
                  key={i}
                  className={`anchor anchor-${i + 1} absolute w-1 h-1 ${pos}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
