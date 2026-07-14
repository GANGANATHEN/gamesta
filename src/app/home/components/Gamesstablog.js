import React from "react";
import Image from "next/image";
import { blogCommunity, homecontent } from "@/data/data";

const Gamesstablog = () => {
  return (
    <div className="bg-linear-to-r from-[#F5F9FA] from-15% to-white to-85% py-20 text-[#273A41] min-h-screen">
      <section className="padding flex flex-col gap-y-18">
        <div className="w-fit -rotate-6 space-y-4">
          <Image
            src={homecontent.images[0].icon}
            alt={homecontent.images[0].name}
            className="object-contain w-75 h-auto"
          />
          <p className="font-moda font-semibold text-7xl text-right">
            {blogCommunity.blog}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blogCommunity.blogdata.map((item) => (
            <div key={item.id} className="space-y-4">
              <Image
                src={item.icon}
                alt={item.id}
                className="object-contain w-full h-auto"
              />
              <p className="font-sans font-medium">{item.title}</p>
              <p className="font-medium text-[#9BA1A4]">{item.time}</p>
              <p className="font-medium">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="padding relative h-80 md:h-110 lg:130 xl:h-150 2xl:h-205 mt-20 w-full flex flex-col justify-center items-center">
        <Image
          src={blogCommunity.commnuitybg}
          alt="bg"
          className="px-15 absolute top-0 left-0 w-full h-full object-contain"
        />
        <div className="relative w-full h-full flex items-center justify-center">
          <h1 className="-rotate-6 z-1 w-[80%] font-moda font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[200px] uppercase text-center tracking-widest leading-none">
            {blogCommunity.community}
          </h1>
          <Image
            src={blogCommunity.telegram}
            alt={"telegram"}
            className={`absolute object-contain size-23 lg:size-34 
            bottom-0 left-0 sm:bottom-[10%] sm:left-[20%] lg:bottom-[-5%]
            xl:bottom-[5%] 2xl:top-140 2xl:left-[22%]`}
          />
          <Image
            src={blogCommunity.twiter}
            alt={"twitter"}
            className={`z-1 absolute object-contain size-23 lg:size-34 
            top-0 md:top-[15%] lg:top-[5%] xl:top-[10%] xl:left-[43%] 2xl:top-40 2xl:left-[45%]`}
          />
          <Image
            src={blogCommunity.youtube}
            alt={"youtube"}
            className={`z-1 absolute object-contain size-23 lg:size-44 
            bottom-0 right-0 sm:bottom-[30%] sm:right-[10%] md:bottom-[-5%]
            xl:bottom-[10%] 2xl:bottom-85 2xl:right-[10%]`}
          />
        </div>
      </section>
    </div>
  );
};

export default Gamesstablog;
