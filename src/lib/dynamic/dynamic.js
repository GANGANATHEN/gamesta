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

export const FutureApp = dynamic(
  () => import("@/app/home/components/FutureApplication"),
  {
    ssr: false,
  },
);

export const GamestaBlog = dynamic(() => import("@/app/home/components/Gamesstablog"), {
  ssr: false,
});

export const FooterSection = dynamic(() => import("@/app/dummy/footer"), {
  ssr: false,
});
