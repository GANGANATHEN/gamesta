"use client";
import React, { useEffect } from "react";
import Dapp from "./components/Dapp";
import {
  FutureApp,
  GamestaBlog,
  HomePage,
  PlayToEarn,
} from "@/lib/dynamic/dynamic";
import Treasury from "./components/Treasury";
import Partandinvest from "./components/Partandinvest";
import Gamestateam from "./components/Gamestateam";

const Page = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="bg-white overflow-hidden">
      <HomePage />
      <Dapp />
      <FutureApp />
      <PlayToEarn />
      <Treasury />
      <Gamestateam />
      <Partandinvest />
      <GamestaBlog />
    </div>
  );
};

export default Page;
