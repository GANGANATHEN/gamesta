import React from "react";
import Image from "next/image";
import { homecontent, navLinks } from "@/data/data";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="relative h-dvh text-white flex flex-col justify-center items-center overflow-hidden">
      <nav className="w-full fixed z-1 top-0 left-0 flex gap-5 p-3 justify-center items-center">
        <h1>logo</h1>
        {navLinks.map((nav) => (
          <Link key={nav.name} href={nav.link}>
            {nav.name}
          </Link>
        ))}
        <div className="p-3 rounded-lg bg-white/60 text-[#01A590]">Login to App</div>
      </nav>
      <Image
        src={homecontent.images[1].icon}
        alt={homecontent.images[1].name}
        fill
        className="object-cover scale-155"
      />
      <div className="hidden relative flex flex-col mt-30">
        <Image
          src={homecontent.images[0].icon}
          alt={homecontent.images[0].name}
          className="z-1 w-376 h-full"
        />
        <Image
          src={homecontent.images[2].icon}
          alt={homecontent.images[2].name}
          className="z-1 absolute top-32 left-[38%] w-36 h-full"
        />
        <Image
          src={homecontent.images[3].icon}
          alt={homecontent.images[3].name}
          className="absolute z-0 -top-60 left-[42%] w-76 h-105"
        />
        <Image
          src={homecontent.images[4].icon}
          alt={homecontent.images[4].name}
          className="z-1 absolute  rotate-20 top-[-105%] right-[-6%] w-28 h-full"
        />
        <Image
          src={homecontent.images[5].icon}
          alt={homecontent.images[5].name}
          className="z-1 absolute -top-37 right-[18%] w-36 h-full"
        />
        <Image
          src={homecontent.images[6].icon}
          alt={homecontent.images[6].name}
          className="z-1 absolute -rotate-12 -top-25 left-[27%] w-26 h-full"
        />
        <Image
          src={homecontent.images[7].icon}
          alt={homecontent.images[7].name}
          className="z-1 absolute top-33 right-[10%] w-38 h-full"
        />
        <Image
          src={homecontent.images[8].icon}
          alt={homecontent.images[8].name}
          className="z-0 absolute -top-45 -right-3 w-70 h-70"
        />
        <Image
          src={homecontent.images[9].icon}
          alt={homecontent.images[9].name}
          className="z-1 absolute top-10 -right-17 w-17 h-full"
        />
        <Image
          src={homecontent.images[10].icon}
          alt={homecontent.images[10].name}
          className="z-1 absolute top-10 -right-10 w-23 h-full"
        />
      </div>
      
      <div className="nav z-1">
        <div>
          <div className="text-4xl bold">{homecontent.heading}</div>
          <p>{homecontent.para}</p>
          <div className="space-y-4">
            <p>{homecontent.community}</p>
            <div className="flex gap-5">
              {homecontent.social.map((value) => (
                <div
                  key={value.name}
                  className="flex items-center justify-center gap-2 border-2 border-white rounded-lg px-4 py-2"
                >
                  <Image
                    src={value.icon}
                    alt={value.name}
                    className="w-8 h-8"
                  />
                  <p>{value.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-5">
          <div>{homecontent.countdown}</div>
          <div className="flex gap-1">
            <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
              <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                12
              </div>
              <div className="w-full p-2 text-black text-sm text-center">
                days
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
              <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                01
              </div>
              <div className="w-full p-2 text-black text-sm text-center">
                hours
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
              <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                12
              </div>
              <div className="w-full p-2 text-black text-sm text-center">
                min
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-fit bg-white rounded-lg">
              <div className="w-full p-4 text-[36px] bg-[#00B3E8] rounded-lg">
                07
              </div>
              <div className="w-full p-2 text-black text-sm text-center">
                sec
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-90">
          <Image
            src={homecontent.images[11].icon}
            alt={homecontent.images[11].name}
            className="w-150 h-150 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
