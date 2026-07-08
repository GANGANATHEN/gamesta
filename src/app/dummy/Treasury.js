import { treasuryData } from "@/data/data";
import Image from "next/image";
import React from "react";

const Treasury = () => {
  return (
    <div className="padding py-10 text-[#273A41]">
      <div className="relative z-1 px-15 lex flex-col">
        <h2 className="font-moda text-7xl font-semibold leading-none">
          {treasuryData.head.text1}
        </h2>

        <div className="ml-60">
          <h2 className="font-moda flex items-end text-7xl font-semibold leading-none">
            {treasuryData.head.text2}
          </h2>
          <p className="mt-3 font-medium text-3xl max-w-[60%]">
            {treasuryData.para.para1}
          </p>
          <p className="mt-7 ml-120 text-lg max-w-[50%]">
            {treasuryData.para.para2}
          </p>
        </div>
      </div>
      <div className="relative py-35 text-white text-5xl flex flex-col justify-center items-center">
        <div className="z-1 -rotate-8">
          <p className="w-fit bg-[#00B3E8] px-2 py-1">
            {treasuryData.circle.text3}
          </p>
          <div className="ml-30 -mt-2">
            <p className="w-fit bg-[#00B3E8] px-2 py-1">
              {treasuryData.circle.text4}
            </p>
            <p className="ml-20 -mt-2 w-fit bg-[#00B3E8] px-2 py-1">
              {treasuryData.circle.text5}
            </p>
          </div>
        </div>
        <div className="text-[#273A41] absolute -top-65 left-20 z-0 flex h-170 w-170 items-center justify-center rounded-full bg-linear-to-r from-[#571CE30A] to-white">
          <div className="relative rounded-full bg-linear-to-r from-[#0469e4] to-[#11bfdd] p-2">
            <div className="flex h-90 w-90 flex-col items-center justify-center rounded-full bg-white text-center bg-linear-to-r from-[#571CE30A] to-white">
              <div className="-mt-27 -rotate-6 text-left">
                <p className="font-medium text-xl ml-4">
                  {treasuryData.circle.text1}
                </p>
                <p className="font-bold text-8xl">
                  {treasuryData.circle.text2}
                </p>
              </div>
            </div>
            <div className="absolute w-75 -bottom-30 -left-40 font-medium text-sm text-right border border-accent">
              {treasuryData.circle.para}
            </div>
            <Image
              src={treasuryData.infinity}
              alt="infinity"
              width={100}
              height={100}
              className="absolute size-32 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-15 flex flex-col justify-center items-center">
        <h1 className="font-moda font-semibold text-8xl ">
          {treasuryData.distribution}
        </h1>
        <div className="w-full h-full flex justify-between py-15 gap-x-6">
          <div className="relative w-[40%] h-full  flex flex-col justify-center items-center">
            <h1 className="font-moda font-bold text-[#00B3E8] text-[250px] -rotate-6 leading-none">
              {treasuryData.calc1.num}
              <span className="align-super text-9xl">
                {treasuryData.calc1.numval}
              </span>
            </h1>
            <p className="mt-9 max-w-90 text-xl font-medium">
              {treasuryData.calc1.text}
            </p>

            <div className="bg-[#00000022] absolute bottom-[20%] right-[-40%] w-[90%] h-0.5 rotate-125"></div>
          </div>
          <div className="mt-18 w-[60%] h-full flex flex-col justify-center items-center">
            <p className="font-medium text-xl">{treasuryData.calc2.text}</p>
            <h1 className="font-moda font-bold text-[#0EC742] text-[250px] -rotate-6 leading-none">
              {treasuryData.calc2.num}
              <span className="align-super text-9xl">
                {treasuryData.calc2.numval}
              </span>
            </h1>
            <p className="mt-6 max-w-95 text-xl font-medium">
              {treasuryData.calc2.head}
            </p>
            <div className="flex justify-between items-center gap-10 py-8">
              {treasuryData.calc2.cals.map((item, i) => (
                <div key={i} className="w-45">
                  <h1 className="font-moda font-bold text-[#0EC742] text-6xl">
                    {item.num}
                    {treasuryData.calc2.numval}
                  </h1>
                  <p className="mt-3 text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasury;
