import React from "react";
import sectionHero from "./hero/page";
import Navbar from "./hero/navbar/page";

export default function Home() {
  return (
    <div>
      {sectionHero()}
      {Navbar()}
    </div>
  );
}
