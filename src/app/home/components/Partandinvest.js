import { partandinves } from "@/data/data";
import Image from "next/image";
import React from "react";

const Partandinvest = () => {
  return (
    <div className="padding bg-[#F5F9FA] text-[#273A41] py-10">
      <div className="font-moda font-extrabold text-3xl md:text-4xl xl:text-5xl xl:w-54">
        Partners & Investors
      </div>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-5">
        {partandinves.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt={i}
            className="size-auto min-[1400px]:size-54!"
          />
        ))}
      </div>
    </div>
  );
};

export default Partandinvest;
