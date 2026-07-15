"use client";
// import { HomePage } from "@/lib/dynamic/dynamic";
import { FooterSection } from "@/lib/dynamic/dynamic";
import React from "react";
import FutureApplication from "./FutureApplication";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <FutureApplication />
      <FooterSection />
    </div>
  );
};

export default page;
