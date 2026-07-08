"use client";

import Image from "next/image";
import Link from "next/link";


import { CARD_POSITIONS } from "@/data/positions";
import { futureApplications } from "@/data/data";

export default function FutureApplication() {
  const positions = CARD_POSITIONS.desktop;

  return (
    <section className="padding text-[#273A41] py-5 overflow-hidden">
      <div className="relative h-screen w-full">
        {/* Heading */}

        <div className="absolute top-[5%] left-[25%] z-50 flex flex-col items-end">
          <h2 className="font-moda text-[80px] leading-none text-right max-w-md">
            {futureApplications.heading}
          </h2>

          <Link
            href={futureApplications.link.href}
            className="mt-6 rounded-lg bg-gradient-to-r from-[#06C5C1] to-[#009FEA] px-5 py-3 text-white"
          >
            {futureApplications.link.text}
          </Link>
        </div>

        {futureApplications.icons.map((card, index) => {
          const position = positions[index % positions.length];

          return (
            <div
              key={card.id}
              className={`
                absolute
                ${position.width}
                ${position.height}
                ${position.rotate}
                ${position.zIndex}

                -translate-x-1/2
                -translate-y-1/2

                flex
                flex-col
                items-center
                justify-center

                rounded-[32px]
                px-6
                py-8
                shadow-2xl
              `}
              style={{
                top: position.top,
                left: position.left,
                backgroundColor: card.color,
              }}
            >
              <Image
                src={card.icon}
                alt={card.text}
                width={56}
                height={56}
                className="object-contain"
              />

              <p className="mt-4 text-center text-lg font-semibold leading-tight">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
