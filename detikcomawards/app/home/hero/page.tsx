import React from "react";
import Image from "next/image";

export default function sectionHero() {
  return (
    <div className="relative px-6 pt-[0px] lg:px-8 bg-[url('/images/hero/bg-hero-mobile.png')] md:bg-[url('/images/hero/bg-hero.png')] bg-cover h-screen">
      <div className="mx-auto max-w-2xl pt-[40vh] sm:pt-48 lg:pt-50">
        <div className="text-center">
        <div className="w-[244px] md:w-[716px] mx-auto">
        <Image
            src="/images/hero/logo-detikcom-awards.png"
            alt=""
            width={244}
            height={244}
            layout="responsive"
            objectFit="contain"
          />
        </div>  
          <span className="text-[14px] md:text-[30px] bg-gradient-to-b from-[#CBAD6C] to-[#FAFAB0] bg-clip-text text-transparent font-regular">
            Shaping a New Era: Innovation, Adaptation, and Transformation For
            Better Indonesia.
          </span>
        </div>
      </div>
    </div>
  );
}
