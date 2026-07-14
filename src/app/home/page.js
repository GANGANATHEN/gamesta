"use client";
import React, { useEffect } from "react";
import Dapp from "./components/Dapp";
import FutureApplication from "./components/FutureApplication";
import { HomePage, PlayToEarn } from "@/lib/dynamic/dynamic";
import Treasury from "./components/Treasury";
import Partandinvest from "./components/Partandinvest";
import Gamestateam from "./components/Gamestateam";
import Gamesstablog from "./components/Gamesstablog";

const Page = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="bg-white overflow-hidden">
      <HomePage />
      <Dapp />
      <FutureApplication />
      <PlayToEarn />
      <Treasury />
      <Gamestateam />
      <Partandinvest />
      <Gamesstablog />
    </div>
  );
};

export default Page;
