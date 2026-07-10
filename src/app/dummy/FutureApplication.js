"use client";

import Image from "next/image";
import Link from "next/link";
import { futureApplications } from "@/data/data";

export default function FutureApplication() {
  const CARD_POSITIONS = [
    {
      className: `
      top-[180px] left-[20px]
      sm:top-[200px] sm:left-[40px]
      md:top-[180px] md:left-[60px]
      lg:top-[160px] lg:left-[90px]
      xl:top-[150px] xl:left-[120px]
      2xl:top-[150px] 2xl:left-[150px]
    `,
    },
    {
      className: `
      top-[30px] left-[180px]
      sm:top-[40px] sm:left-[240px]
      md:top-[30px] md:left-[320px]
      lg:top-[30px] lg:left-[420px]
      xl:top-[30px] xl:left-[520px]
      2xl:top-[30px] 2xl:left-[620px]
    `,
    },
  ];

  // {cards.map((card, index) => (
  //   <div
  //     key={card.id}
  //     className={`absolute ${CARD_POSITIONS[index].className}`}
  //   >
  //     <Card {...card} />
  //   </div>
  // ))}

  const cards = [
    {
      id: 0,
      colStart: 17,
      colSpan: 4,
      rowStart: 2,
      rowSpan: 3,
      width: "w-54",
      height: "h-56",
    },
    {
      id: 1,
      colStart: 19,
      colSpan: 4,
      rowStart: 6,
      rowSpan: 3,
      width: "w-52",
      height: "h-50",
    },
    {
      id: 2,
      colStart: 14,
      colSpan: 3,
      rowStart: 5,
      rowSpan: 2,
      width: "w-44",
      height: "h-46",
    },
    // {
    //   id: 3,
    //   colStart: 10,
    //   colSpan: 2,
    //   rowStart: 4,
    //   rowSpan: 2,
    // width: "w-56",
    //   height: "h-62",
    // },
    // {
    //   id: 4,
    //   colStart: 13,
    //   colSpan: 3,
    //   rowStart: 3,
    //   rowSpan: 2,
    //   width: "w-60",
    //   height: "h-56",
    // },
    // {
    //   id: 5,
    //   colStart: 4,
    //   colSpan: 3,
    //   rowStart: 5,
    //   rowSpan: 2,
    //   width: "w-64",
    //   height: "h-60",
    // },
    // {
    //   id: 6,
    //   colStart: 11,
    //   colSpan: 3,
    //   rowStart: 6,
    //   rowSpan: 2,
    //   width: "w-60",
    //   height: "h-56",
    // },
  ];

  return (
    <section className="padding text-[#273A41] py-5 ">
      <div className="relative">
        {/* Grid Overlay */}
        <div className="absolute h-screen py-5 gap-5 opacity-100 inset-0 grid grid-cols-30 pointer-events-none z-0">
          {Array.from({ length: 30 * 10 }).map((_, i) => (
            <div
              key={i}
              className="border border-red-200 text-center text-xs py-2"
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Actual Cards */}
        <div className="relative z-10 grid grid-cols-30 gap-5">
          <div className="col-span-8 col-start-8 row-start-1 row-span-3">
            <h2 className="w-fit font-moda font-bold text-3xl 2xl:text-8xl leading-none text-right max-w-xl">
              {futureApplications.heading}
            </h2>
          </div>

          <div className="row-start-4 row-span-1 col-start-11 col-span-7">
            <Link
              href={futureApplications.link.href}
              className="w-fit mt-6 bg-linear-to-r from-[#06C5C1] to-[#009FEA] px-5 py-3 text-white rounded-lg text-sm 2xl:text-lg"
            >
              {futureApplications.link.text}
            </Link>
          </div>

          {cards.map((card, index) => {
            const item = futureApplications.icons[index];

            return (
              <div
                key={card.id}
                className={`${card.height} ${card.width} place-self-start rounded-[40px] flex flex-col justify-end px-8 py-8`}
                style={{
                  gridColumn: `${card.colStart} / span ${card.colSpan}`,
                  gridRow: `${card.rowStart} / span ${card.rowSpan}`,
                  backgroundColor: item.color,
                  boxShadow: `-2px 14px 7px -5px ${item.color}`,
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={56}
                  height={56}
                  className="object-contain"
                />

                <p className="mt-4 text-lg font-bold leading-tight">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
