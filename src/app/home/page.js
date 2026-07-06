import React from "react";
import Homepage from "./components/Home";
import Dapp from "./components/Dapp";

const page = () => {
  return (
    <div className="bg-white">
      <Homepage />
      <Dapp />
    </div>
  );
};

export default page;
