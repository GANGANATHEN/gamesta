import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initFutureApplicationAnimation = (containerRef) => {
  const container = containerRef.current;

  if (!container) return;

  const heading = container.querySelector(".future-heading");
  const button = container.querySelector(".future-button");
  const cards = gsap.utils.toArray(container.querySelectorAll(".future-card"));

  let floatingAnimations = [];
  let hoverAnimations = [];

  const mm = gsap.matchMedia();

  mm.add("(min-width: 0px)", (context) => {
    // Initial
    gsap.set(heading, { opacity: 0, y: 80, filter: "blur(20px)" });
    gsap.set(button, { opacity: 0, scale: 0.7, y: 30 });
    gsap.set(cards, {
      opacity: 0,
      scale: 0,
      rotation: gsap.utils.random(-30, 30),
      x: gsap.utils.random(-window.innerWidth * 0.4, window.innerWidth * 0.4),
      y: gsap.utils.random(
        -window.innerHeight * 0.35,
        window.innerHeight * 0.35,
      ),
      filter: "blur(12px)",
      transformPerspective: 1000,
    });

    // ScrollTrigger context
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.to(heading, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power4.out",
    })
      .to(
        button,
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(2)" },
        "-=0.5",
      )
      .to(
        cards,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: { amount: 0.7, from: "random" },
          ease: "expo.out",
          onComplete: () => startFloating(),
        },
        "-=0.2",
      );

    // Floating
    function startFloating() {
      cards.forEach((card) => {
        const tween = gsap.to(card, {
          y: gsap.utils.random(-12, 12),
          x: gsap.utils.random(-8, 8),
          rotate: gsap.utils.random(-2, 2),
          duration: gsap.utils.random(2.5, 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        floatingAnimations.push(tween);
      });
    }

    // Mouse Parallax
    const mouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      cards.forEach((card, index) => {
        gsap.to(card, {
          x: x * (15 + index * 2),
          y: y * (15 + index * 2),
          duration: 0.8,
          overwrite: "auto",
          ease: "power2.out",
        });
      });
    };

    if (window.matchMedia("(pointer:fine)").matches) {
      window.addEventListener("mousemove", mouseMove);
    }

    // Hover Tilt
    cards.forEach((card) => {
      const enter = () => {
        gsap.to(card, {
          scale: 1.05,
          rotateX: 8,
          rotateY: -8,
          z: 80,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(card, {
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          z: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      hoverAnimations.push({
        card,
        enter,
        leave,
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", mouseMove);

      floatingAnimations.forEach((tween) => tween.kill());

      hoverAnimations.forEach(({ card, enter, leave }) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });

      tl.kill();
      tl.scrollTrigger?.kill();
    };
  });

  return () => {
    mm.revert();
  };
};
