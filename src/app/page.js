"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white h-dvh w-full flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-8">GAMESTA</h1>

      {/* Gaming Style Button */}
      <Link
        href="/home"
        className="px-10 py-4 border border-[#00B3E8] text-[#00B3E8] hover:bg-[#00B3E8] hover:text-black transition-all uppercase tracking-widest font-bold"
      >
        Enter Lobby
      </Link>
    </div>
  );
}
