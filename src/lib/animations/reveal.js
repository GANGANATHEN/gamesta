// lib/animations/reveal.js

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initRevealAnimations = (scope) => {
  const ctx = gsap.context(() => {
    // console.log("Reveal Start");

    // ---------------- Heading ----------------
    gsap.utils.toArray(".animate-heading")?.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 45%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- Sub Heading ----------------
    gsap.utils.toArray(".animate-subheading")?.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 48%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- Paragraph ----------------
    gsap.utils.toArray(".animate-para")?.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 40,
          opacity: 0,
          filter: "blur(4px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 55%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- Images ----------------
    gsap.utils.toArray(".animate-image")?.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.9,
          y: 60,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- Grid ----------------
    gsap.utils.toArray(".animate-grid")?.forEach((grid) => {
      const cards = grid.querySelectorAll(".animate-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 70,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: grid,
            start: "top 82%",
            end: "top 38%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- Standalone Card ----------------
    gsap.utils.toArray(".animate-card-single")?.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- List ----------------
    gsap.utils.toArray(".animate-list")?.forEach((list) => {
      gsap.fromTo(
        list.children,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- Button ----------------
    gsap.utils.toArray(".animate-button")?.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // ---------------- Links ----------------
    gsap.utils.toArray(".animate-link")?.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 65%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // console.log("Reveal End", ScrollTrigger.getAll().length);

  }, scope);

  return () => ctx.revert();
};
