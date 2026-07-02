import React from "react";

const page = () => {
  return (
    <div className="text-accent text-2xl">
      hiiiiii...
      <div className="relative w-8 h-20 ml-30 mt-6">
        {/* Bullet Body - Metallic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-600 to-yellow-800 rounded-t-sm rounded-b-md border-t border-yellow-200 shadow-xl overflow-hidden">
          {/* Metallic Shine - Light reflection effect */}
          <div className="absolute top-1 left-1 right-1 h-1/3 bg-white opacity-20 rounded-t-md"></div>

          {/* Primer/Base circle at bottom */}
          <div className="absolute bottom-0 w-full h-4 bg-yellow-900 rounded-b-sm border-t border-yellow-700"></div>
        </div>

        {/* Bullet Glow - Gaming style glow */}
        <div className="absolute -inset-1 bg-yellow-500 opacity-20 blur-sm rounded-md"></div>
      </div>
    </div>
  );
};

export default page;
