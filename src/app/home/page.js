import React from "react";
import Homepage from "./components/Home";
import Dapp from "./components/Dapp";
import FutureApplication from "./components/FutureApplication";
import PlayToEarn from "./components/PlayToEarn";

const page = () => {
  return (
    <div className="bg-white">
      <Homepage />
      <Dapp />
      <FutureApplication />
      <PlayToEarn />
    </div>
  );
};

export default page;
