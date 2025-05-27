'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ScrollCounter = ({ end, label }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    if (inView) setShouldCount(true);
    else setShouldCount(false);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[200px] bg-transparent flex items-center justify-center"
    >
      <div className="absolute text-[100px] md:text-[180px] text-black/15 font-extrabold">
        {shouldCount ? <CountUp key={Math.random()} end={end} duration={2.5} /> : '0'}
      </div>
      <div className="relative z-10 text-black text-xl md:text-2xl font-semibold">
        {label}
      </div>
    </div>
  );
};

const WWD = ({ bgColor }) => {
  const sectionStyle = `${bgColor || 'bg-[#E2ECED]'} py-10`;

  return (
    <section className={`${sectionStyle} ${robotoCondensed.className}`}>
      <div className="max-w-screen-xl mx-auto px-4">
       
        <div className="flex flex-col text-center pt-10 pb-14">
          <h5 className="text-[14px] md:text-[16px] font-semibold">What We Do</h5>
          <h1 className="text-[22px] md:text-[36px] lg:text-[50px] leading-tight">
            Restore Your Health, Vitality, and Enduring
            <br className="hidden md:block" />
            Equilibrium With Comprehensive, Holistic
            <br className="hidden md:block" />
            Methodologies.
          </h1>
        </div>

       
        <div className="flex justify-center">
          <div className="flex items-start gap-8 flex-col-reverse md:flex-row md:items-center text-center md:text-left">
            <div className="w-full md:w-2/4 flex justify-center">
              <Image
                src="/wwdimg1.png"
                alt="what we do"
                width={565}
                height={384}
                className="w-full h-auto max-w-[565px]"
              />
            </div>

            <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
              <div className="flex items-center mb-2 justify-center md:justify-start">
                <h3 className="text-[16px] font-medium text-black">DISCOVER NUYU</h3>
              </div>

              <h1 className="text-[24px] md:text-[36px] lg:text-[50px] leading-tight text-black text-center md:text-left">
                We Prioritize Natural
                <br /> Holistic Care
              </h1>

              <p className="text-[13px] md:text-[15px] text-gray-400 mt-4 max-w-[700px] leading-tight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className="hidden md:block" />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <p className="text-[13px] md:text-[15px] text-gray-400 mt-4 leading-tight max-w-[700px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className="hidden md:block" />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>

              <Button className="rounded-none bg-black text-white w-28 mt-6">About us</Button>
            </div>
          </div>
        </div>

       
        <div className="flex justify-center mt-10 flex-col md:flex-row gap-4 md:gap-0">
          <ScrollCounter end={55} label="PEOPLES" />
          <ScrollCounter end={13} label="YEARS" />
          <ScrollCounter end={10} label="CENTERS" />
        </div>
      </div>
    </section>
  );
};

export default WWD;
