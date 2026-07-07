import { play2earn } from "@/data/data";
import Image from "next/image";
import React from "react";

const PlayToEarn = () => {
  return (
    <div className="padding text-black overflow-hidden">
      <div>
        <p>{play2earn.heading}</p>
        <p>{play2earn.subhead}</p>
        <p>{play2earn.para}</p>
      </div>
      <div className="grid grid-cols-2 gap-10 py-10">
        {play2earn.p2e.map((value) => (
          <div key={value.id} className="flex">
            <div className="w-[10%]">
              <Image
                src={value.icon}
                className="w-12 h-12 object-contain bg-[#EBF9FF] p-3.5 rounded-lg shadow-2xl"
                alt={value.heading}
              />
            </div>
            <div className="w-[90%]">
              <p className="text-[#00B3E8] text-3xl font-bold">
                {value.heading}
              </p>
              {value.text.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h1>{play2earn.p2ehead}</h1>
        <div className="w-full flex justify-between items-center gap-x-3 padding overflow-hidden">
          {play2earn.p2egames.map((icon, i) => (
            <Image
              key={i}
              src={icon}
              alt="icons"
              className="size-46 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayToEarn;
