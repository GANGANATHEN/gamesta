"use client";

import Image from "next/image";
import Link from "next/link";
import { futureApplications } from "@/data/data";
import { CARD_POSITIONS1 } from "@/data/positions";

export default function FutureApplication() {
  const positions = CARD_POSITIONS1;

  return (
    <section className="padding text-[#273A41] py-5 overflow-hidden">
      <div className="relative min-h-screen w-full">
        {/* Heading */}

        <div className="sm:absolute sm:top-[5%] sm:left-[25%] z-50 flex flex-col items-center sm:items-end">
          <h2 className="w-fit font-moda font-bold max-[501px]:text-[34px]! text-4xl lg:text-5xl 2xl:text-8xl leading-none text-right max-w-xl">
            {futureApplications.heading}
          </h2>

          <Link
            href={futureApplications.link.href}
            className="w-fit mt-6 bg-linear-to-r from-[#06C5C1] to-[#009FEA] px-5 py-3 text-white rounded-lg text-sm sm:text-base 2xl:text-lg"
          >
            {futureApplications.link.text}
          </Link>
        </div>
        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-center max-sm:gap-3">
          {futureApplications.icons.map((card, index) => {
            const position = positions[index % positions.length];

            return (
              <div
                key={card.id}
                className={`
                mt-10 sm:absolute ${position.className}
                sm:-translate-x-1/2 sm:-translate-y-1/2
                flex flex-col justify-center max-sm:items-center sm:justify-end
                rounded-2xl sm:rounded-[40px]
                max-[501px]:px-2! max-[501px]:py-5! sm:px-6 sm:py-8
                max-[350px]:w-35! max-[400px]:w-40! max-[501px]:h-auto! max-[501px]:w-45! 
                max-sm:w-55 max-sm:h-45
              `}
                style={{
                  backgroundColor: card.color,
                  boxShadow: `-2px 14px 7px -5px ${card.color}`,
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.text}
                  width={56}
                  height={56}
                  className="object-contain"
                />

                <p className="mt-4 max-[410px]:font-medium! max-sm:text-center max-[410px]:text-sm! text:base lg:text-lg font-bold leading-tight">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
