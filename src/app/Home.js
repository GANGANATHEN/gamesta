"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { homecontent, navLinks } from "@/data/data";
import Link from "next/link";
import {
  initHomepageAnimation,
} from "@/lib/gsapanimation";
import RevolverMenu from "@/components/revolverMenu";

const Homepage = () => {
  const container = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      initHomepageAnimation(container);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={container}
      className="relative h-dvh text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <nav className="nav-bar padding w-full fixed z-50 top-0 left-0 flex justify-between items-center p-3 gap-3 2xl:gap-x-25">
        {/* Logo Spot - Same place for animation */}
        <div className="nav-logo-spot w-[40%] xl:w-[20%] h-12.5"></div>
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
          <div className="p-2 rounded-xl bg-white/60 text-[#01A590]">
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
        className="bg-image object-cover scale-155"
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
          className="img-1 z-1 absolute top-32 left-[38%] w-36 h-full"
        />
        <Image
          src={homecontent.images[3].icon}
          alt={homecontent.images[3].name}
          className="img-2 absolute z-0 -top-60 left-[42%] w-76 h-105"
        />
        <Image
          src={homecontent.images[4].icon}
          alt={homecontent.images[4].name}
          className="img-3 z-1 absolute  rotate-20 top-[-105%] right-[-6%] w-28 h-full"
        />
        <Image
          src={homecontent.images[5].icon}
          alt={homecontent.images[5].name}
          className="img-4 z-1 absolute -top-37 right-[18%] w-36 h-full"
        />
        <Image
          src={homecontent.images[6].icon}
          alt={homecontent.images[6].name}
          className="img-5 z-1 absolute -rotate-12 -top-25 left-[27%] w-26 h-full"
        />
        <Image
          src={homecontent.images[7].icon}
          alt={homecontent.images[7].name}
          className="img-6 z-1 absolute top-33 right-[10%] w-38 h-full"
        />
        <Image
          src={homecontent.images[8].icon}
          alt={homecontent.images[8].name}
          className="img-7 z-0 absolute -top-45 -right-3 w-70 h-70"
        />
        <Image
          src={homecontent.images[9].icon}
          alt={homecontent.images[9].name}
          className="img-8 z-1 absolute top-10 -right-17 w-17 h-full"
        />
        <Image
          src={homecontent.images[10].icon}
          alt={homecontent.images[10].name}
          className="img-9 z-1 absolute top-10 -right-10 w-23 h-full"
        />
      </div>

      <div className="padding absolute flex inset-0 w-full justify-center items-center z-1">
        <div className="relative w-full h-full mt-70">
          <div className="content text-4xl bold">{homecontent.heading}</div>
          <p className="content">{homecontent.para}</p>
          <div className="content space-y-4">
            <p>{homecontent.community}</p>
            <div className="flex gap-5">
              {homecontent.social.map((value) => (
                <div
                  key={value.name}
                  className="flex items-center justify-center gap-2 border-2 border-white rounded-lg px-4 py-2"
                >
                  <Image
                    src={value.icon}
                    alt={value.name}
                    className="w-8 h-8"
                  />
                  <p>{value.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="content flex flex-col gap-y-2 mt-5">
            <div>{homecontent.countdown}</div>
            <div className="flex gap-1">
              <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
                <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                  12
                </div>
                <div className="w-full p-2 text-black text-sm text-center">
                  days
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
                <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                  01
                </div>
                <div className="w-full p-2 text-black text-sm text-center">
                  hours
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
                <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                  12
                </div>
                <div className="w-full p-2 text-black text-sm text-center">
                  min
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
                <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                  07
                </div>
                <div className="w-full p-2 text-black text-sm text-center">
                  sec
                </div>
              </div>
            </div>
          </div>
          <div className="laptop absolute right-[10%] 2xl:right-[4%] bottom-10 2xl:bottom-20 border flex justify-baseline">
            <Image
              src={homecontent.images[11].icon}
              alt={homecontent.images[11].name}
              className="w-150 2xl:w-180 h-150 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
