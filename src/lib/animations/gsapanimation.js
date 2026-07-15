// lib/gsapanimation.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

// navbar animations (not completed ----> works pending)
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

// homepage animations
export const initHomepageAnimation = (containerRef) => {
  // console.log("Home Start");

  const container = containerRef.current;
  const logo = container.querySelector(".hero-logo");
  const navSpot = container.querySelector(".nav-logo-spot");
  const navbar = container.querySelector(".nav-bar");
  const bg = container.querySelector(".bg-image");
  const laptop = container.querySelector(".laptop");
  const contents = container.querySelectorAll(".content");

  // Initial states
  gsap.set(container.querySelector(".laptop"), {
    x: 400,
    y: 400,
    opacity: 0,
  });

  gsap.set(container.querySelectorAll(".content"), {
    x: -400,
    y: 400,
    opacity: 0,
  });

  // Calculate and lock the initial positions BEFORE animation starts
  const getInitialOffsets = () => {
    const l = logo.getBoundingClientRect();
    const s = navSpot.getBoundingClientRect();
    return {
      x: s.left - l.left,
      y: s.top - l.top,
    };
  };

  let targetOffset = getInitialOffsets();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "bottom bottm",
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      pinType: "transform",
      onRefresh: () => {
        targetOffset = getInitialOffsets();
      },
    },
  });

  // Navbar
  tl.fromTo(
    navbar,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    },
    0,
  );

  // Logo
  tl.to(
    logo,
    {
      x: targetOffset.x,
      y: targetOffset.y,

      scale: () => {
        const l = logo.getBoundingClientRect();
        const s = navSpot.getBoundingClientRect();

        return Math.min(s.width / l.width, s.height / l.height);
      },

      transformOrigin: "top left",
      ease: "power1.inOut",
    },
    0,
  );

  // Background
  tl.to(
    bg,
    {
      scale: 1,
      ease: "none",
    },
    0,
  );

  // Laptop
  tl.to(
    laptop,
    {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
    },
    0,
  );

  // Content
  tl.to(
    contents,
    {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      stagger: 0.08,
    },
    0,
  );

  // Floating Images
  for (let i = 1; i <= 9; i++) {
    const img = container.querySelector(`.img-${i}`);
    const anchor = container.querySelector(`.anchor-${i}`);

    const getOffset = () => {
      const imgRect = img.getBoundingClientRect();
      const anchorRect = anchor.getBoundingClientRect();

      return {
        x: anchorRect.left - imgRect.left,
        y: anchorRect.top - imgRect.top,
      };
    };

    if (!img || !anchor) continue;

    tl.to(
      img,
      {
        x: () => getOffset().x,
        y: () => getOffset().y,
        rotate: 0,
        ease: "power1.inOut",
      },
      0,
    );
  }

  // console.log("Home End", ScrollTrigger.getAll().length);

  return () => {
    tl.kill();
    tl.scrollTrigger?.kill();
  };
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
