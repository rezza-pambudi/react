import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import images from '../../data/images.js';

export default function adsCarousel() {
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
          <img
            src={image.url}
            alt={image.alt}
            className="object-cover rounded-lg"
          />
        </div>
        </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
}