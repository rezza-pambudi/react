import React from "react";
import sectionHero from "./hero/page";
import Navbar from "./navbar/page";
import sectionAbout from "./about/page";

export default function Home() {
  return (
    <div>
      {sectionHero()}
      {Navbar()}
      {sectionAbout()}
    </div>
  );
}
