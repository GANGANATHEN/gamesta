import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

export function initLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    syncTouch: true,
  });

  lenis.on("scroll", () => {
    ScrollTrigger.update();
  });

  return lenis;
}

export function destroyLenis() {
  if (!lenis) return;

  lenis.destroy();
  lenis = null;
}

export const getLenis = () => lenis;
