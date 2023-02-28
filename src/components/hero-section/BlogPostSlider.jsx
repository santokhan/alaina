import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper-blogpost.css';

// import required modules
import { Navigation } from 'swiper';

export default function BlogPostSlider() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/blog-post-img-2-1.jpg"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/blog-post-img-2-2.jpg"
            alt="slider-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/blog-post-img-2-1-1.jpg"
            alt="slider-3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
