import { footerData, homecontent } from "@/data/data";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      className="mt-10 py-10 text-white bg-[#273A41] 
    [clip-path:polygon(0%_15%,24%_10%,25%_16%,100%_0%,100%_100%,0%_100%)] 
    md:[clip-path:polygon(0%_25%,24%_10%,25%_24%,100%_0%,100%_100%,0%_100%)]"
    >
      <section className="padding pt-15 flex flex-col sm:flex-row justify-between sm:items-center gap-5">
        <div className="flex flex-col gap-3 sm:items-center text-sm md:text-base xl:text-lg">
          <Image
            src={homecontent.images[0].icon}
            alt={homecontent.images[0].name}
            width={100}
            height={100}
            className={`w-45 h-auto object-contain`}
          />
          <p>{footerData.rights}</p>
        </div>
        <div
          className="grid max-[375px]:grid-cols-2! max-[375px]:justify-items-center grid-cols-3 justify-between gap-y-5 
        max-[375px]:gap-x-5! gap-x-1 sm:gap-x-10"
        >
          {footerData.links.map((ink) => (
            <Link
              key={ink.id}
              href={ink.link}
              className={`text-sm lg:text-base xl:text-lg 2xl:text-xl hover:text-white/50`}
            >
              {ink.name}
            </Link>
          ))}
        </div>
        <div className="h-full flex gap-x-5 md:flex-col gap-y-10">
          <Link
            href={footerData.links}
            className={`text-[#01A590] bg-white font-medium text-center px-2 py-1.5 md:py-3 rounded-lg text-sm md:text-base`}
          >
            {footerData.stake.name}
          </Link>
          <div className="flex items-center gap-3">
            <p>{footerData.joinus}</p>
            <div className="flex gap-2">
              {footerData.social.map((soc) => (
                <Link key={soc.id} href={soc.link} className={``}>
                  <Image
                    src={soc.icon}
                    alt={soc.id}
                    width={100}
                    height={100}
                    className={`size-4`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
