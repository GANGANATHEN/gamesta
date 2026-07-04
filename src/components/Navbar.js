"use client";
import { navLinks } from "@/data/data";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RevolverMenu from "./revolverMenu";
import { initHomepageAnimation } from "@/lib/gsapanimation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    // Prevent animation on server side
    const timer = setTimeout(() => {
      initHomepageAnimation();
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <nav className="nav-bar opacity-0 padding w-full fixed z-50 top-0 left-0 flex justify-between items-center p-3 gap-3 2xl:gap-x-25">
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
    </div>
  );
};

export default Navbar;
