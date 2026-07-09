"use client";

import Image from "next/image";
import Link from "next/link";

import { CARD_POSITIONS } from "@/data/positions";
import { futureApplications } from "@/data/data";

export default function FutureApplication() {
  const positions = CARD_POSITIONS.desktop;

  const ROWS = 10;

  const cards = [
    {
      id: 1,
      colStart: 1,
      colSpan: 4,
      rowStart: 1,
      rowSpan: 2,
    },
    {
      id: 2,
      colStart: 6,
      colSpan: 5,
      rowStart: 1,
      rowSpan: 3,
    },
    {
      id: 3,
      colStart: 13,
      colSpan: 8,
      rowStart: 1,
      rowSpan: 2,
    },
    {
      id: 4,
      colStart: 1,
      colSpan: 3,
      rowStart: 3,
      rowSpan: 2,
    },
    {
      id: 5,
      colStart: 5,
      colSpan: 6,
      rowStart: 4,
      rowSpan: 1,
    },
    {
      id: 6,
      colStart: 12,
      colSpan: 4,
      rowStart: 3,
      rowSpan: 3,
    },
    {
      id: 7,
      colStart: 17,
      colSpan: 4,
      rowStart: 4,
      rowSpan: 2,
    },
    {
      id: 8,
      colStart: 2,
      colSpan: 8,
      rowStart: 6,
      rowSpan: 2,
    },
    {
      id: 9,
      colStart: 11,
      colSpan: 10,
      rowStart: 6,
      rowSpan: 2,
    },
  ];

  return (
    <section className="padding text-[#273A41] py-5 overflow-hidden">
      <div className="relative">
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid grid-cols-20 auto-rows-25 pointer-events-none z-0">
          {Array.from({ length: 20 * ROWS }).map((_, i) => (
            <div key={i} className="border border-red-300/40" />
          ))}
        </div>

        {/* Actual Cards */}
        <div className="relative z-10 grid grid-cols-20 auto-rows-25 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-blue-300 rounded-lg flex items-center justify-center"
              style={{
                gridColumn: `${card.colStart} / span ${card.colSpan}`,
                gridRow: `${card.rowStart} / span ${card.rowSpan}`,
              }}
            >
              {card.id}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
