// lib/gsapanimation.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateRevolverMenu = (isOpen) => {
  const tl = gsap.timeline();

  if (isOpen) {
    // Menu Open Animation
    tl.fromTo(
      ".revolver-chamber",
      { rotation: -90, scale: 0 },
      { rotation: 0, scale: 1, duration: 1, ease: "back.out(1.7)" },
    );
    tl.fromTo(
      ".bullet-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, ease: "power2.out" },
      "-=0.5",
    );
  }
};

export const animateFire = (index, onComplete) => {
  const tl = gsap.timeline({ onComplete });

  // 1. Stop rotation and fire selected bullet
  tl.to(".revolver-chamber", { rotation: 0, duration: 0.3 });

  // 2. Fire the bullet
  tl.to(`.bullet-${index}`, {
    y: -600,
    scale: 1.5,
    opacity: 0,
    duration: 0.4,
    ease: "power2.in",
  });

  // 3. Screen Shake
  tl.to("body", { x: 10, y: 10, repeat: 5, yoyo: true, duration: 0.05 }, 0);
};

export const initHomepageAnimation = (containerRef) => {
  const logo = document.querySelector(".hero-logo");
  const navSpot = document.querySelector(".nav-logo-spot");

  // 1. Calculate and lock the initial positions BEFORE animation starts
  const getInitialOffsets = () => {
    const l = logo.getBoundingClientRect();
    const s = navSpot.getBoundingClientRect();
    return {
      x: s.left - l.left,
      y: s.top - l.top,
    };
  };

  const targetOffset = getInitialOffsets();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
    },
  });

  // Nav bar animation
  tl.fromTo(".nav-bar", { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, 0);

  // Logo animation (Fixed target)
  tl.to(
    ".hero-logo",
    {
      x: targetOffset.x,
      y: targetOffset.y,
      scale: () => {
        const l = logo.getBoundingClientRect();
        const s = navSpot.getBoundingClientRect();

        const scaleX = s.width / l.width;
        const scaleY = s.height / l.height;

        return Math.min(scaleX, scaleY);
      },
      duration: 1.6,
      transformOrigin: "top left",
      ease: "power1.inOut",
    },
    0,
  );

  tl.to(
    ".bg-image",
    {
      scale: 1,
      duration: 1.2,
    },
    0,
  );

  tl.from(
    ".laptop",
    {
      x: 400,
      y: 400,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1.4,
    },
    0,
  );

  tl.from(
    ".content",
    {
      x: -400,
      y: 400,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1.4,
    },
    0,
  );

  const targets = [
    { class: ".img-1", x: 220, y: 90 },
    { class: ".img-2", x: 150, y: 180 },
    { class: ".img-3", x: -500, y: 40 },
    { class: ".img-4", x: -50, y: 40 },
    { class: ".img-5", x: 700, y: -50 },
    { class: ".img-6", x: -30, y: -230 },
    { class: ".img-7", x: -10, y: -5 },
    { class: ".img-8", x: 50, y: 245 },
    { class: ".img-9", x: 45, y: 245 },
  ];

  targets.forEach((img) => {
    tl.to(
      img.class,
      {
        x: img.x,
        y: img.y,
        rotate: 0,
        duration: 1.4,
        ease: "power1.inOut",
      },
      0,
    );
  });

  return tl;
};
