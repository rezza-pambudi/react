'use client'

import React from 'react'
import swiperAdsCarousel from '@/components/swiper-ads-carousel'
import Player from '@/components/player/page'

export default function adsCarousel() {
  return (
    <div className="bg-[#050012]">
        <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto pt-0 md:pt-[40px] pb-[100px]">
          {/* {Player()} */}
          {swiperAdsCarousel()}
        </div>
      </div>
  )
}
