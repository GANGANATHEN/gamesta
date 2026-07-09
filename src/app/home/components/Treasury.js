import { treasuryData } from "@/data/data";
import Image from "next/image";
import React from "react";

const Treasury = () => {
  return (
    <div className="relative padding py-10 text-[#273A41] overflow-hidden">
    
      <div className="relative z-1 px-5 lg:px-10 xl:px-15 flex flex-col">
        <h2 className="font-moda text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-none">
          {treasuryData.head.text1}
        </h2>

        <div className="ml-12 lg:ml-20 xl:ml-40 2xl:ml-60">
          <h2 className="font-moda flex items-end text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-none">
            {treasuryData.head.text2}
          </h2>
          <p className="mt-3 font-medium text-base lg:text-lg xl:text-xl 2xl:text-2xl  min-[1700px]:text-3xl! 2xl:max-w-[60%]">
            {treasuryData.para.para1}
          </p>
          <p className="mt-7 lg:mt-4 sm:ml-30  md:ml-56 lg:ml-70 xl:ml-90 2xl:ml-120 text-sm lg:text-base xl:text-lg  md:max-w-[60%] lg:max-w-[70%] 2xl:max-w-[50%]">
            {treasuryData.para.para2}
          </p>
        </div>
      </div>

      <div className="relative py-25 lg:py-30 2xl:py-35 flex flex-col justify-center items-center">
        <div className="z-1 text-white text-base lg:text-xl xl:text-3xl 2xl:text-4xl min-[1700px]:text-5xl! -rotate-8">
          <p className="w-fit bg-[#00B3E8] px-2 py-1">
            {treasuryData.circle.text3}
          </p>
          <div className="ml-12 lg:ml-30 -mt-2">
            <p className="w-fit bg-[#00B3E8] px-2 py-1">
              {treasuryData.circle.text4}
            </p>
            <p className="ml-10 lg:ml-20 -mt-2 w-fit bg-[#00B3E8] px-2 py-1">
              {treasuryData.circle.text5}
            </p>
          </div>
        </div>

        <div className="absolute -top-10 left-0 lg:-top-40 xl:-top-50 2xl:-top-65 2xl:left-20 z-0 flex h-70 w-70 lg:h-120 lg:w-120 xl:h-150 xl:w-150 2xl:h-170 2xl:w-170 items-center justify-center rounded-full bg-linear-to-r from-[#443d560a] to-white">
          <div className="relative rounded-full bg-linear-to-r from-[#0469e4] to-[#11bfdd] p-2">
            <div className="flex h-35 w-35 lg:h-60 lg:w-60 xl:h-75 xl:w-75 2xl:h-90 2xl:w-90 flex-col items-center justify-center rounded-full bg-white text-center bg-linear-to-r from-[#571CE30A] to-white">
              <div className="-mt-15 lg:-mt-27 -rotate-6 text-left">
                <p className="font-medium text-base lg:text-lg xl:text-xl ml-4">
                  {treasuryData.circle.text1}
                </p>
                <p className="font-bold text-2xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
                  {treasuryData.circle.text2}
                </p>
              </div>
            </div>
            <div className="absolute w-75 -bottom-20 -left-15 md:-bottom-25 lg:-bottom-30 xl:-left-40 font-medium text-[12px] md:text-sm text-right">
              {treasuryData.circle.para}
            </div>
            <Image
              src={treasuryData.infinity}
              alt="infinity"
              width={1000}
              height={1000}
              className="absolute size-14 lg:size-20 xl:size-26 2xl:size-32 top-0 right-0 sm:top-auto sm:bottom-0 sm:left-0 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 lg:mt-15 flex flex-col justify-center items-center">
        <h1 className="font-moda font-semibold text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl min-[1700px]:text-8xl!">
          {treasuryData.distribution}
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row justify-between py-5 lg:py-15 gap-x-6">
          <div className="relative w-full lg:w-[40%] h-full flex flex-col justify-center items-center">
            <h1 className="font-moda font-bold text-[#00B3E8] text-7xl lg:text-9xl 2xl:text-[200px] min-[1700px]:text-[250px]! -rotate-6 leading-none">
              {treasuryData.calc1.num}
              <span className="align-super text-4xl lg:text-7xl 2xl:text-9xl">
                {treasuryData.calc1.numval}
              </span>
            </h1>
            <p className="mt-4 lg:mt-9 max-w-75 lg:max-w-90 text-base lg:text-lg 2xl:text-xl font-medium">
              {treasuryData.calc1.text}
            </p>

            <div className="bg-[#00000022] absolute w-[90%] h-0.5 bottom-[-50%] rotate-160 xl:bottom-[20%] left-0 md:left-[45%] xl:left-[55%] md:rotate-125"></div>
          </div>
          <div className="mt-28 lg:mt-18 w-full lg:w-[60%] h-full flex flex-col justify-center items-center">
            <p className="font-medium text-base lg:text-lg 2xl:text-xl">
              {treasuryData.calc2.text}
            </p>
            <h1 className="font-moda font-bold text-[#0EC742] text-7xl lg:text-9xl 2xl:text-[200px] min-[1700px]:text-[250px]! -rotate-6 leading-none">
              {treasuryData.calc2.num}
              <span className="align-super text-4xl lg:text-7xl 2xl:text-9xl">
                {treasuryData.calc2.numval}
              </span>
            </h1>
            <p className="mt-3 lg:mt-6 max-w-95 text-base lg:text-lg 2xl:text-xl font-medium">
              {treasuryData.calc2.head}
            </p>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-10 py-8">
              {treasuryData.calc2.cals.map((item, i) => (
                <div key={i} className="w-full lg:w-45">
                  <h1 className="font-moda font-bold text-[#0EC742] text-3xl lg:text-6xl">
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
