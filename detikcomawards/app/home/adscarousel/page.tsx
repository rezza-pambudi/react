"use client";

import React from "react";
import adsCarousel from "../carousel/page";

export default function sectionAdsCarousel() {
  return (
    <>
      <div className="bg-[#050012]">
        <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto pt-0 md:pt-[40px] pb-[100px]">
          {adsCarousel()}
        </div>
      </div>
    </>
  );
}
