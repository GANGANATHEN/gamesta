// lib/dynamic/dynamic.js
import dynamic from "next/dynamic";

export const HomePage = dynamic(() => import("@/app/home/components/Home"), {
  ssr: false,
});

export const PlayToEarn = dynamic(
  () => import("@/app/home/components/PlayToEarn"),
  {
    ssr: false,
  },
);
