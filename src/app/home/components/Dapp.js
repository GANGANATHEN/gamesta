import { gamestadapp } from "@/data/data";
import Image from "next/image";
import React from "react";

const Dapp = () => {
  return (
    <div className="padding text-black bg-[#EBF9FF] flex flex-col justify-center items-center">
      <div className="relative w-[40%] space-y-3">
        <div className="font-moda text-[100px] font-black">{gamestadapp.heading}</div>
        <p className="font-semibold text-2xl">{gamestadapp.para}</p>
        <div className="font-sans text-white flex flex-col items-end absolute top-15 right-0 -rotate-15">
          <p className="w-fit bg-[#00B3E8] px-2 py-1">Launching in </p>
          <p className="w-fit bg-[#00B3E8] px-2 py-1 absolute top-6 -right-5">Q4 2026</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 py-10">
        {gamestadapp.dapp.map((value) => (
          <div key={value.id} className="flex">
            <div className="w-[10%]">
              <Image
                src={value.icon}
                className="w-12 h-12 object-contain bg-white p-3.5 rounded-lg shadow-2xl"
                alt={value.head}
              />
            </div>
            <div className="w-[90%]">
              <p className="text-[#00B3E8] text-3xl font-bold">{value.head}</p>
              <p className="max-w-xl">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dapp;
