"use client";
import React, { useEffect } from "react";
import Dapp from "./components/Dapp";
import FutureApplication from "./components/FutureApplication";
import { HomePage, PlayToEarn } from "@/lib/dynamic/dynamic";

const Page = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="bg-white">
      <HomePage />
      <Dapp />
      <FutureApplication />
      <PlayToEarn />
    </div>
  );
};

export default Page;
