import { footerData, homecontent } from "@/data/data";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
      <div className="py-10 bg-[#273A41] md:[clip-path:polygon(0%_25%,24%_10%,25%_24%,100%_0%,100%_100%,0%_100%)]">
        <section className="padding flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="space-y-3">
            <Image
              src={homecontent.images[0].icon}
              alt={homecontent.images[0].name}
              width={100}
              height={100}
              className={`w-45 h-auto object-contain`}
            />
            <p>© 2022 Gamesta. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-y-5 gap-x-10">
            {footerData.links.map((ink) => (
              <Link key={ink.id} href={ink.link} className={``}>
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
      </div>
  );
};

export default Footer;
