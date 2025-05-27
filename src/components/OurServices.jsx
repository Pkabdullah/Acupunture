'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OurServices = () => {
    const services = [
        { id: 1, title: "Infrared Sauna", image: "/osimg1.png" },
        { id: 2, title: "Ionic Footbath", image: "/osimg2.png" },
        { id: 3, title: "Herbal Therapy", image: "/osimg3.png" },
        { id: 4, title: "Acupuncture", image: "/osimg4.png" },
        { id: 5, title: "Hydrogenated", image: "/osimg5.png" },
        { id: 6, title: "Manual Therapy", image: "/osimg6.png" },
    ];

    return (
        <section className="bg-white pt-14 pb-12 px-4">
            <div className="text-center">
                <h1 className="lg:text-5xl text-[24px] font-semibold">Our Services</h1>
                <p className="lg:text-[16px] text-[14px] pt-4 font-thin lg:max-w-2xl max-w-[90%] mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 w-full max-w-[1110px] pt-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative w-full sm:w-[340px] md:w-[350px] lg:w-[370px] h-[250px] sm:h-[280px] md:h-[290px] lg:h-[301px] mx-auto"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                quality={100}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <h2 className="text-white text-[20px] sm:text-[28px] lg:text-[35px] font-semibold text-center">
                                    <Link href={"/services"} className='cursor-pointer'>
                                        {service.title}
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
