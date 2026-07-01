import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  getRevolverTimeline,
  animateMenuOpen,
  initDraggableChamber,
} from "@/lib/gsapanimation";
import { navLinks } from "@/data/data";
import gsap from "gsap";

const RevolverMenu = ({ menuOpen, setMenuOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const chamberRef = useRef(null);
  const dragInstance = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      animateMenuOpen();
      const draggables = initDraggableChamber(
        chamberRef.current,
        navLinks.length,
        setActiveIndex,
      );
      dragInstance.current = draggables[0];
    }
    return () => {
      if (dragInstance.current) dragInstance.current.kill();
    };
  }, [menuOpen]);

  const handleFire = (index) => {
    if (dragInstance.current) {
      dragInstance.current.disable();
      gsap.to(chamberRef.current, {
        rotation: -((360 / navLinks.length) * index),
      });
    }

    // Fire animation
    getRevolverTimeline(index, navLinks.length, () => {
      router.push(navLinks[index].link);
    });
  };

  if (!menuOpen) return null;

  return (
    <div className="revolver-wrapper fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-80 h-80 flex items-center justify-center">
        <div
          id="fire-bullet"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-20 bg-linear-to-b sm:rotate-90 from-yellow-600 to-yellow-800 opacity-0"
        />
        <div
          ref={chamberRef}
          className="revolver-chamber relative w-80 h-80 rounded-full border-4 border-dashed border-gray-700 flex items-center justify-center"
        >
          {navLinks?.map((nav, index) => (
            <button
              key={nav.name}
              onClick={() => handleFire(index)}
              className={`bullet-${index} absolute group bullet-item`}
              style={{
                transform: `rotate(${(360 / navLinks.length) * index}deg) translateY(-120px)`,
              }}
            >
              {/* Bullet */}
              <div
                className={`w-12 h-20 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-md border-2 border-yellow-900 flex items-center justify-center relative
            bullet-${index} ${index === activeIndex ? "scale-125 border-yellow-400 shadow-[0_0_20px_#fbbf24]" : ""}`}
              >
                <span className="text-white text-[10px] font-bold uppercase rotate-90">
                  {nav.name.substring(0, 4)}
                </span>

                {/* Hover Full Text Reveal */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-xs font-bold shadow-[0_0_10px_#eab308]">
                  {nav.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        className="mt-20 flex flex-col items-center gap-1 text-yellow-500 font-mono border border-yellow-500 px-6 py-3 hover:bg-yellow-500 hover:text-black transition-all"
        onClick={() => handleFire(activeIndex)}
      >
        <span className="text-[10px] uppercase">[ FIRE ]</span>
        <span className="text-xl font-bold uppercase">
          {navLinks[activeIndex].name}
        </span>
      </button>

      <button
        className="mt-5 text-red-500 font-mono text-sm"
        onClick={() => setMenuOpen(false)}
      >
        [ UNLOAD ]
      </button>
    </div>
  );
};
export default RevolverMenu;
