'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image.js';

import images from '../app/data/images.js';

export default function swiperAdsCarousel() {
  return (
    <>
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image) => (
        <SwiperSlide>
        <div key={image.id} className="w-1/3">
          <Image
            src={image.url}
            alt={image.alt}
            className="block h-full w-full object-cover"
            width={300}
            height={300}
          />
        </div>
        </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
}
