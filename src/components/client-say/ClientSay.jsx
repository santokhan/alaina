import SLayout, { SHeader, STitle } from "../section-layout/SectionLayout";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ClientSay({ children }) {
  return (
    <div
      id="clientSay"
      className="relative client-say text-white pb-16 lg:pb-20"
    >
      <SLayout>
        <div className="flex justify-center pt-10 lg:pb-6">
          <STitle className="py-6">Our Clients Say</STitle>
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-sky-600 sm:bg-transparent px-4">
            <div className="max-w-2xl mx-auto pt-5 lg:pb-16 mb-16">
              <div className="flex justify-center items-center">
                <i className="fa fa-quote-right text-3xl xl:text-5xl"></i>
              </div>
              <div className="py-2 text-center font-medium lg:text-2xl">
                Esabela Kaif
              </div>
              <div className="py-2 text-center text-sm lg:text-base">
                Mensen erkennen zelden hoe graag ze een massage krijgen. Maar ik
                wil zeggen dat mijn massagesessies op vrijdag na het werk weken
                vooruit gepland blijven.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-sky-600 sm:bg-transparent px-4">
            <div className="max-w-2xl mx-auto pt-5 lg:pb-16 mb-16">
              <div className="flex justify-center items-center">
                <i className="fa fa-quote-right text-3xl xl:text-5xl"></i>
              </div>
              <div className="py-2 text-center font-medium lg:text-2xl">
                Esabela Kaif
              </div>
              <div className="py-2 text-center text-sm lg:text-base">
                Mensen erkennen zelden hoe graag ze een massage krijgen. Maar ik
                wil zeggen dat mijn massagesessies op vrijdag na het werk weken
                vooruit gepland blijven.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-sky-600 sm:bg-transparent px-4">
            <div className="max-w-2xl mx-auto pt-5 lg:pb-16 mb-16">
              <div className="flex justify-center items-center">
                <i className="fa fa-quote-right text-3xl xl:text-5xl"></i>
              </div>
              <div className="py-2 text-center font-medium lg:text-2xl">
                Esabela Kaif
              </div>
              <div className="py-2 text-center text-sm lg:text-base">
                Mensen erkennen zelden hoe graag ze een massage krijgen. Maar ik
                wil zeggen dat mijn massagesessies op vrijdag na het werk weken
                vooruit gepland blijven.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </SLayout>
    </div>
  );
}
