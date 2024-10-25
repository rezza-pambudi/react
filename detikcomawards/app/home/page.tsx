'use client';

import React from "react";
import sectionHero from "./hero/page";
import Navbar from "./navbar/page";
import sectionAbout from "./about/page";
import adsCarousel from "./ads-carousel/page";

const Home = () => {
  return (
    <div>
      {sectionHero()}
      {Navbar()}
      {sectionAbout()}
      {adsCarousel()}
    </div>
  );
}

export default Home;
