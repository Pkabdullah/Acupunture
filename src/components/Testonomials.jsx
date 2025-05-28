"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = ({ bgColor }) => {
  const sectionStyle = `${bgColor || "bg-white"} py-10`;
  const content = [
    {
      id: 1,
      icon: "/wwdimg2.png",
      primaryText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/tesimg1.png",
      name: "Ava",
    },
    {
      id: 2,
      icon: "/wwdimg2.png",
      primaryText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/tesimg1.png",
      name: "Ava",
    },
    {
      id: 3,
      icon: "/wwdimg2.png",
      primaryText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/tesimg1.png",
      name: "Ava",
    },
    {
      id: 4,
      icon: "/wwdimg2.png",
      primaryText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/tesimg1.png",
      name: "Ava",
    },
  ];

  return (
    <section
      className={`py-16 bg-gray-50 ${robotoCondensed.className} ${sectionStyle}`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center pt-14">
          <h2 className="lg:text-5xl text-3xl text-gray-800">Clients Are Saying</h2>
          <p className="font-thin text-gray-600 pt-4 lg:max-w-2xl max-w-78 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has <br />
            been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="container mx-auto lg:px-[74px] px-2 pt-12 pb-16">
          <Swiper
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
            }}
          >
            {content.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="flex justify-center px-2"
              >
              <div className="w-full max-w-[361px] p-4 shadow-sm border border-gray-300 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                  <div className="flex justify-center mb-2">
                    <Image
                      src={testimonial.icon}
                      alt="quote icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-gray-600 text-sm text-center leading-relaxed px-2">
                    {testimonial.primaryText}
                  </p>
                  <div className="flex flex-col items-center pt-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={52}
                      height={52}
                      className="rounded-full object-cover"
                    />
                    <h4 className="font-semibold text-gray-900 mt-1">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
