import React from "react";
import Player from "../player/page";

export default function About() {
  return (
    <>
      <div className="bg-[#050012]" id="about">
        <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto py-[80px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 lg:col-span-8 grid items-center">
              <Player />
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <div className="text-left text-white bg-[#37353D] h-full w-full px-8 py-10 rounded-[12px] select-none">
                <h4 className="text-[20px] pb-2 font-semibold leading-[24.38px]">
                  detikcom Awards 2024: Shaping a New Era: Innovation,
                  Adaptation, and Transformation For Better Indonesia.
                </h4>
                <p className="text-[14px] md:text-[12px] leading-[21px]">
                  Penghargaan bergengsi yang diberikan kepada individu, merek,
                  dan lembaga di Indonesia yang telah memberikan kontribusi luar
                  biasa dalam berbagai bidang. Melalui detikcom Awards, kami
                  menghargai pencapaian yang menginspirasi, inovasi yang
                  mencuat, dan perubahan positif yang telah dilakukan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
