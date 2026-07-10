import { gamestaTandA } from "@/data/data";
import React from "react";
import { Card } from "./helper/Card";

const Gamestateam = () => {
  const TEAM_COLUMNS = {
    left: [2, 4],
    center: [0, 3],
    right: [1],
  };

  const ADVISORS = {
    num: [0, 1, 2, 3],
  };

  return (
    <section className="relative">
      <div className="bg-[#F5F9FA] py-10 [clip-path:polygon(0%_0%,100%_2%,100%_100%,0%_100%)] md:[clip-path:polygon(0%_0%,100%_4%,100%_100%,0%_100%)] lg:[clip-path:polygon(0%_0%,100%_6%,100%_100%,0%_100%)] 2xl:[clip-path:polygon(0%_0%,100%_10%,100%_100%,0%_100%)]">
        <div className="padding py-20 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Left Column */}
            <div className="space-y-14">
              <h2 className="font-moda text-4xl xl:text-5xl font-extrabold text-[#273A41]">
                {gamestaTandA.head1}
              </h2>

              {TEAM_COLUMNS.left.map((index) => (
                <Card
                  key={gamestaTandA.team[index].id}
                  item={gamestaTandA.team[index]}
                />
              ))}
            </div>

            {/* Center Column */}
            <div className="space-y-14">
              {TEAM_COLUMNS.center.map((index) => (
                <Card
                  key={gamestaTandA.team[index].id}
                  item={gamestaTandA.team[index]}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-14 pt-20">
              {TEAM_COLUMNS.right.map((index) => (
                <Card
                  key={gamestaTandA.team[index].id}
                  item={gamestaTandA.team[index]}
                />
              ))}
            </div>
          </div>
          <div className="py-20 space-y-15">
            <h1 className="font-moda text-4xl xl:text-5xl font-extrabold text-[#273A41]">
              {gamestaTandA.head2}
            </h1>
            <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-10">
              {ADVISORS.num.map((index) => (
                <Card
                  key={gamestaTandA.team[index].id}
                  item={gamestaTandA.team[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute rotate-6 z-99 bottom-7 lg:-bottom-5 2xl:-bottom-10 -left-13 w-[150%] h-0.5 bg-[#00B3E820]"></div>
    </section>
  );
};

export default Gamestateam;
