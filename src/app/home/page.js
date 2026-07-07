"use client";
import React, { useEffect } from "react";
import Homepage from "./components/Home";
import Dapp from "./components/Dapp";
import FutureApplication from "./components/FutureApplication";
import PlayToEarn from "./components/PlayToEarn";

const Page = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="bg-white">
      <Homepage />
      <div className="h-190">dummy</div>
      <Dapp />
      <FutureApplication />
      <PlayToEarn />
    </div>
  );
};

export default Page;
