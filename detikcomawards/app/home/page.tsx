'use client';

import React from "react";
import sectionHero from "./hero/page";
import Navbar from "../../components/navbar/navbar";
import sectionAbout from "./about/page";
import adsCarousel from "./ads-carousel/page";
import sectionProgram from "./program/page";
import footer from "@/components/footer/footer";

const Home = () => {
  return (
    <div>
      {sectionHero()}
      {Navbar()}
      {sectionAbout()}
      {adsCarousel()}
      {sectionProgram()}
      {footer()}
    </div>
  );
}

export default Home;
