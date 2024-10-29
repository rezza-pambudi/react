import React from 'react'

export default function mainBlock() {
  return (
    <>
    <div className="relative">
        <div className="bg-bg-discover-main-title-mobile md:bg-[url('/images/discover/main/bg-main-title.png')] bg-cover bg-center">
          <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto pt-[80px] pb-[100px]">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 grid items-center select-none">
                <div className="w-[320px] md:w-[474px] text-center mx-auto">
                  <h2 className="text-[60px] md:text-[96px] text-white font-semibold font-['broadsheet-ldo']">Discover</h2>
                  <p className="text-[14px] md:text-[14px] text-white leading-[21px] md:leading-[30px] font-thin font-['outfit-light']">Jelajahi Berita Terkini dan Temukan Cerita Pemenang yang Menginspirasi dalam detikcom Awards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-10 sm:bottom-0 h-[60px] w-full bg-gradient-to-t from-[#050012]" aria-hidden="true">
          <div className="relative" />
        </div>
      </div>
    </>
  )
}
