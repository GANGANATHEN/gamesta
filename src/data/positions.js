// data/positions.js

export const CARD_POSITIONS = {
  desktop: [
    {
      // finish
      top: "24%",
      right: "20%",
      width: "w-54",
      height: "h-56",
      zIndex: "z-20",
    },
    {
      // finish
      top: "50%",
      left: "34%",
      width: "w-52",
      height: "h-50",
      zIndex: "z-10",
    },
    {
      // finish
      top: "62%",
      left: "49%",
      width: "w-56",
      height: "h-62",
      zIndex: "z-30",
    },
    {
      top: "50%",
      right: "27.5%",
      width: "w-44",
      height: "h-46",
      zIndex: "z-10",
    },
    {
      top: "50%",
      right: "10%",
      width: "w-60",
      height: "h-56",
      zIndex: "z-10",
    },
    {
      bottom: "-7%",
      left: "30%",
      width: "w-64",
      height: "h-60",
      rotate: "rotate-4",
      zIndex: "z-20",
    },
    {
      bottom: "-7%",
      right: "15%",
      width: "w-60",
      height: "h-56",
      rotate: "-rotate-3",
      zIndex: "z-20",
    },
  ],

  tablet: [
    {
      top: "10%",
      left: "50%",
      width: "w-56",
      height: "h-32",
      rotate: "rotate-0",
      zIndex: "z-20",
    },
    {
      top: "8%",
      left: "60%",
      width: "w-60",
      height: "h-36",
      rotate: "-rotate-3",
      zIndex: "z-20",
    },

    // Remaining tablet positions...
  ],

  mobile: [
    {
      top: "15%",
      left: "50%",
      width: "w-44",
      height: "h-28",
      rotate: "rotate-0",
      zIndex: "z-20",
    },

    // Remaining mobile positions...
  ],
};

export const CARD_POSITIONS1 = [
  {
    className: `
      sm:w-45 sm:h-45 sm:top-53 sm:-right-20
      2xl:w-48 2xl:h-48 2xl:right-95 2xl:top-34
    `,
  },
  {
    className: `
      sm:w-45 sm:h-45 sm:top-90 sm:right-27
      2xl:w-50 2xl:h-50 2xl:right-[16%] 2xl:top-[38%]
    `,
  },
  {
    className: `
      sm:w-45 sm:h-45 sm:top-60 sm:left-30
     2xl:w-46 2xl:h-42 2xl:left-[60%] 2xl:top-[40%]
    `,
  },
  {
    className: `
      sm:w-50 sm:h-50 sm:top-115 sm:left-25
      md:top-[30px] md:left-[320px]
      lg:top-[30px] lg:left-[420px]
      xl:top-[30px] xl:left-[520px]
      2xl:w-56 2xl:h-62 2xl:left-[46%] 2xl:top-[50%]
    `,
  },
  {
    className: `
      sm:w-40 sm:h-40 sm:bottom-60 sm:-right-15
      2xl:w-46 2xl:h-42 2xl:right-[57%] 2xl:top-[40%]
    `,
  },
  {
    className: `
      sm:w-45 sm:h-45 sm:bottom-15 sm:right-25
      2xl:w-56 2xl:h-52 2xl:right-[57%] 2xl:bottom-[10%]
    `,
  },
  {
    className: `
      sm:w-45 sm:h-45 sm:-bottom-12 sm:left-25
      2xl:w-56 2xl:h-52 2xl:left-auto 2xl:right-[23%] 2xl:bottom-[10%]
    `,
  },
];
