import Image from 'next/image'
import React from 'react'

export default function sectionProgram() {
  return (
    <>
    <div className="bg-[#050012]">
  <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto pt-[80px] pb-[100px]">
    <a href="award-list.php">
      <div className="grid grid-cols-12 gap-1 bg-[#161222] hover:shadow-[0px_0px_4px_4px_rgba(3,0,0,0)] hover:shadow-[#8b896c] rounded-[12px] my-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
        <div className="col-span-12 md:col-span-7 lg:col-span-7 grid items-center">
          <div className="px-8 pt-8 pb-8 md:pb-28">
            <h2 className="text-[30px] text-white font-semibold break-words">
              Nominasi Award
            </h2>
            <p className="text-[14px] text-white leading-[21px] pt-2">
              Lebih dari 15 nominasi penghargaan dari berbagai bidang, merayakan
              prestasi dalam fokus sektor berbeda di detikcom Awards. Menghargai
              kontribusi luar biasa individu, merek, dan lembaga yang membuat
              perbedaan positif dalam membangun masa depan Indonesia.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-5">
          <div className="px-8 py-8 h-full">
            <div className="h-full">
              <Image
                src="/images/program/trophy.png"
                className="w-[400px] md:w-[400px] mx-auto"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </a>
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-5 lg:col-span-4 select-none">
        <div className="bg-[#161222] rounded-[12px] h-[340px] md:h-full">
          <div className="relative px-8 pt-8 pb-0 h-[340px] md:h-full">
            <h4 className="text-[18px] text-[#8B8B8B] font-regular">
              21 September 2023
            </h4>
            <h2 className="text-[30px] text-white font-semibold break-words">
              Awarding Night
            </h2>
            <p className="text-[14px] text-white leading-[21px] pt-2">
              Malam pemberian penghargaan yang disiarkan LIVE
            </p>
            <div className="absolute bottom-0 right-0">
              <Image
                src="/images/program/maps.png"
                className="w-[340px] md:w-[290px] mx-auto pt-8"
                alt=""
                width={340}
                height={340}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-8 grid items-center">
        <a href="road-to-detikcom-awards.php">
          <div className="grid grid-cols-12 gap-0 md:gap-2 bg-[#161222] hover:shadow-[0px_0px_4px_4px_rgba(3,0,0,0)] hover:shadow-[#8b896c] rounded-[12px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
            <div className="col-span-10 md:col-span-9 lg:col-span-10 grid items-center">
              <div className="px-8 pt-8 pb-20">
                <h4 className="text-[18px] text-[#8B8B8B] font-regular">
                  Oktober - November 2023
                </h4>
                <h2 className="text-[30px] text-white font-semibold break-words">
                  Demi Indonesia Bangga: Part of detikcom Awards
                </h2>
                {/* <h2 class="text-[32px] text-white font-semibold break-words">Demi Indonesia Bangga</h2> */}
                <p className="text-[14px] text-white leading-[21px] pt-2">
                  Talkshow yang dibalut semi FGD bersama tokoh, brand,
                  pemerintah daerah, serta kementerian &amp; lembaga yang akan
                  memberi tanggapan dari cerita inovasi dan keberhasilan di
                  sekelilingnya.
                </p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <img
                src="../assets/images/program/icon-arrow-right.png"
                className="w-[36px] md:w-[36px] mx-auto pt-8"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
