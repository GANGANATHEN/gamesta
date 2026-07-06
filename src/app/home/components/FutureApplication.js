import { futureapplications } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FutureApplication = () => {
  return (
    <div className="padding text-black py-5">
     <div className="relative mt-4 h-dvh w-full overflow-hidden">
  {/* Header & Link - Idhaiyum absolute position panna mudiyum */}
  <div className="absolute top-[5%] left-[25%] z-10 flex flex-col items-end">
    <p className="font-moda leading-snug text-[80px] max-w-sm text-right">{futureapplications.heading}</p>
    <Link
      href={futureapplications.link.href}
      className="text-white bg-linear-to-r from-[#06C5C1] to-[#009FEA] p-2 rounded-md inline-block mt-4"
    >
      {futureapplications.link.text}
    </Link>
  </div>

  {futureapplications.icons.map((value, index) => {
    const positions = [
      { top: "20%", left: "60%" },
      { top: "20%", left: "50%" },
      { top: "35%", left: "75%" },
      { top: "50%", left: "15%" },
      { top: "65%", left: "45%" },
      { top: "25%", left: "20%" },
      { top: "70%", left: "70%" },
    ];

    return (
      <div
        key={value.id}
        className="absolute flex flex-col justify-center items-center px-6 py-8 shadow-2xl rounded-4xl"
        style={{
          backgroundColor: value.color,
          top: positions[index % positions.length].top,
          left: positions[index % positions.length].left,
          transform: "translate(-50%, -50%)", // Perfect center alignment
        }}
      >
        <Image
          src={value.icon}
          alt={value.text}
          className="w-12 h-12 object-contain"
        />
        <p className="text-lg font-semibold mt-2 text-center max-w-[140px] break-words leading-tight">
          {value.text}
        </p>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default FutureApplication;
