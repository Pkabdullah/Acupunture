import Image from 'next/image'
import React from 'react'
import { Roboto_Condensed } from 'next/font/google'
import WWD from '@/components/WWD'
import Testimonials from '@/components/Testonomials'
import OurTeam from '@/components/OurTeam'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const AboutUs = () => {
  return (
    <section className={`${robotoCondensed.className} pt-24`}>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[690px]">
        <Image
          src="/abtimg1.png"
          alt="about us banner"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center text-center text-white px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
          <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[60px] mb-4 leading-tight font-semibold">
            About Us
          </h1>
          <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the<br /> industry's standard dummy text ever since the 1500s
          </p>

        </div>
      </div>
     
      <WWD bgColor="bg-[#BA9A692E]" />
      <div className="mt-10">
        <Testimonials bgColor="bg-[#E5F3F4]" />
      </div>
      <OurTeam />
    </section>
  )
}

export default AboutUs
