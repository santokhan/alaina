import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper-slider.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';

import image1 from '../../assets/images/circle/service-circle-1.png';
import image2 from '../../assets/images/circle/service-circle-2.png';
import image3 from '../../assets/images/circle/service-circle-3.png';
import image4 from '../../assets/images/circle/service-circle-4.png';
import image5 from '../../assets/images/circle/service-circle-5.png';
import image6 from '../../assets/images/circle/service-circle-6.png';
import Container from '../layouts/Container';
import { STitle } from '../section-layout/SectionLayout';

export default function SwiperSlider({ startScroll }) {
  return (
    <div className="bubbles py-12 xl:py-20 bg-white">
      <STitle>Cleaning Services That Shine</STitle>
      {/* Mobile size slider */}
      <div className="block xl:hidden">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper text-center font-semibold uppercase"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src={image1}
                alt="circle"
                className="h-full object-contain"
              />
              <div className="ellipse w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
                Residential Cleaning
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={image2}
                alt="circle"
                className="h-full object-contain"
              />
              <div className="ellipse w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
                Residential Cleaning
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={image3}
                alt="circle"
                className="h-full object-contain"
              />
              <div className="ellipse w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
                Residential Cleaning
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={image4}
                alt="circle"
                className="h-full object-contain"
              />
              <div className="ellipse w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
                Residential Cleaning
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Desktop size slider */}
      <Container className="hidden xl:block h-[500px] max-w-6xl relative">
        <div className="mySwiper text-center font-semibold uppercase flex justify-between">
          <div className="relative services-circle-item pos-1">
            <img src={image1} alt="circle" className="h-full object-contain" />
            <div className="ellipse services-circle-item-title w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
              Residential Cleaning
            </div>
          </div>

          <div className="relative services-circle-item pos-2">
            <img src={image2} alt="circle" className="h-full object-contain" />
            <div className="ellipse services-circle-item-title w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
              Residential Cleaning
            </div>
          </div>

          <div className="relative services-circle-item pos-3">
            <img src={image3} alt="circle" className="h-full object-contain" />
            <div className="ellipse services-circle-item-title w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
              Residential Cleaning
            </div>
          </div>

          <div className="relative services-circle-item pos-4">
            <img src={image4} alt="circle" className="h-full object-contain" />
            <div className="ellipse services-circle-item-title w-36 h-36 absolute -right-4 -bottom-4 rounded-full flex justify-center items-center ">
              Residential Cleaning
            </div>
          </div>

          <div className="relative services-circle-item pos-5 hidden 2xl:block">
            <img src={image5} alt="circle" className="h-full object-contain" />
          </div>

          <div className="relative services-circle-item pos-6 hidden 2xl:block">
            <img src={image6} alt="circle" className="h-full object-contain" />
          </div>
        </div>
      </Container>
    </div>
  );
}
