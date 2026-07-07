import { useState, useEffect, useRef } from "react";
import { animateCountdown } from "@/lib/animations/gsapanimation";

const Countdown = ({ targetDate }) => {
  const containerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // GSAP Animation call
  useEffect(() => {
    animateCountdown(containerRef);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = new Date(targetDate).getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "min", value: timeLeft.minutes },
    { label: "sec", value: timeLeft.seconds },
  ];

  return (
    <div ref={containerRef} className="flex gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="countdown-item flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 text-3xl font-bold text-white bg-[#00B3E8] min-w-17.5 text-center tabular-nums">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="py-1 text-black text-[10px] uppercase tracking-widest font-semibold">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
