import React from "react";
import sectionHero from "./hero/page";
import Navbar from "./navbar/page";
import sectionAbout from "./about/page";
import sectionAdsCarousel from "./adscarousel/page";
import adsCarousel from "./carousel/page";

export default function Home() {
  return (
    <div>
      {sectionHero()}
      {Navbar()}
      {sectionAbout()}
    </div>
  );
}
