"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const SwiperCarousel = () => {
  return (
    <div className={`w-full h-[500px] sm:h-[600px] md:h-[690px] pt-12 sm:pt-16 ${robotoCondensed.className}`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {[1, 2].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image
                src="/craousal.jpg"
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
                <h1 className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[60px] mb-4 leading-tight ">
                  Experience the Healing <br />
                  Power of <span className="font-bold">Acupuncture</span>
                </h1>
                <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-light">
                  Thank you for your patience while we eagerly expanded our list of services to accommodate <br className="hidden sm:block" />
                  the kind of facility that supports our modern days needs: Detoxification & Nourishment
                </p>
                <button
                  aria-label="Make an Appointment"
                  className="mt-6 sm:mt-8 w-40 sm:w-48 lg:w-56 px-4 py-2 lg:px-6 lg:py-2 text-[12px] sm:text-[14px] lg:text-lg bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Make an Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;

