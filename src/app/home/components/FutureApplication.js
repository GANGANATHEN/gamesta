"use client";

import Image from "next/image";
import Link from "next/link";

import { CARD_POSITIONS } from "@/data/positions";
import { futureApplications } from "@/data/data";

export default function FutureApplication() {
  const positions = CARD_POSITIONS.desktop;

  return (
    <section className="padding text-[#273A41] py-5 overflow-hidden">
      <div className="relative min-h-screen w-full">
        {/* Heading */}

        <div className="absolute top-[5%] 2xl:left-[25%] z-50 flex flex-col items-center md:items-end">
          <h2 className="w-fit font-moda font-bold text-3xl 2xl:text-8xl leading-none text-right max-w-xl">
            {futureApplications.heading}
          </h2>

          <Link
            href={futureApplications.link.href}
            className="w-fit mt-6 bg-linear-to-r from-[#06C5C1] to-[#009FEA] px-5 py-3 text-white rounded-lg text-sm 2xl:text-lg"
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
              mt-10
                md:absolute
                ${position.width}
                ${position.height}
                ${position.zIndex}
                md:-translate-x-1/2
                md:-translate-y-1/2
                flex
                flex-col
                justify-end
                rounded-[40px]
                px-6
                py-8
              `}
              style={{
                top: position.top,
                bottom: position.bottom,
                left: position.left,
                right: position.right,
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

              <p className="mt-4 text-lg font-bold leading-tight">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
