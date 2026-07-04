// lib/gsapanimation.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

export const animateMenuOpen = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".revolver-chamber",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
  );
  // tl.from(
  //   ".bullet-item",
  //   {
  //     opacity: 1,
  //     y: 20,
  //     duration: 0.5,
  //     ease: "power2.out",
  //   },
  //   "-=0.4", // Ithu chamber animation-oda sync aaga help pannum
  // );
};

export const initDraggableChamber = (target, totalLinks, onUpdate) => {
  const angle = 360 / totalLinks;

  return Draggable.create(target, {
    type: "rotation",
    inertia: true,
    onDrag: function () {
      // Drag pannum pothu real-time-a trigger aagum
      const rotation = this.rotation;
      const index = Math.abs(Math.round(rotation / angle)) % totalLinks;
      onUpdate(index);
    },
    snap: (value) => {
      return Math.round(value / angle) * angle;
    },
  });
};

export const getRevolverTimeline = (index, totalLinks, onComplete) => {
  const tl = gsap.timeline({ onComplete: () => setTimeout(onComplete, 300) });
  const isDesktop = window.innerWidth >= 640;

  const targetDegree = -((isDesktop ? -90 : 0) + (360 / totalLinks) * index);

  tl.to(".revolver-chamber", {
    rotation: `${targetDegree}_short`,
    duration: 0.8,
    ease: "power3.inOut",
  })

    .set(`.bullet-${index}`, { opacity: 0 })
    .set("#fire-bullet", { opacity: 1 })

    .to(
      "#fire-bullet",
      {
        duration: 0.5,
        x: isDesktop ? 300 : 0,
        y: isDesktop ? 0 : -300,
        ease: "power2.out",
      },
      "-=0.3",
    )
    .to("#fire-bullet", {
      duration: 0.4,
      x: isDesktop ? "+=600" : 0,
      y: isDesktop ? 0 : "-=600",
      opacity: 0,
      ease: "power4.in",
    });

  return tl;
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

  gsap.set(".laptop", { x: 400, y: 400, opacity: 0 });
  gsap.set(".content", { x: -400, y: 400, opacity: 0 });

  tl.to(
    ".laptop",
    {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 1.4,
    },
    0,
  );

  tl.to(
    ".content",
    {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 1.4,
    },
    0,
  );

  const images = Array.from({ length: 9 }, (_, i) => i + 1);

  images.forEach((id) => {
    const img = document.querySelector(`.img-${id}`);
    const anchor = document.querySelector(`.anchor-${id}`);

    if (!img || !anchor) return;

    const imgRect = img.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();

    tl.to(
      img,
      {
        x: anchorRect.left - imgRect.left,
        y: anchorRect.top - imgRect.top,
        rotate: 0,
        duration: 1.4,
        ease: "power1.inOut",
      },
      0,
    );
  });

  return tl;
};

export const animateCountdown = (containerRef) => {
  const elements = containerRef.current.querySelectorAll(".countdown-item");

  gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    },
  );
};
