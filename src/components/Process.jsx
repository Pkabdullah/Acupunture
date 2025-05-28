import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'optional',
})

const Process = () => {
  return (
    <section className={`max-sm:h-[900px] h-[600px] bg-[#F5EDDB] pt-10 pb-16 ${robotoCondensed.className} `}>
      <h1 className='lg:text-5xl text-4xl text-center mb-8 text-gray-800'>2 Step Process</h1>

      <div className="flex justify-center">
        <Tabs defaultValue="detox" className="w-full max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-transparent gap-4 max-sm:px-4">
            <TabsTrigger
              value="detox"
              className="rounded-none border cursor-pointer max-sm:w-38 border-gray-300 text-black bg-transparent data-[state=active]:bg-black data-[state=active]:text-white py-3 px-8 text-lg font-semibold transition-all duration-200"
            >
              Detox
            </TabsTrigger>
            <TabsTrigger
              value="nourish"
              className="rounded-none border cursor-pointer border-gray-300 text-black bg-transparent data-[state=active]:bg-black data-[state=active]:text-white py-3 px-8 text-lg font-semibold max-sm:w-38 transition-all duration-200"
            >
              Nourish
            </TabsTrigger>
          </TabsList>
          
          {/* Fixed container with consistent height */}
          <div className="relative">
            <TabsContent value="detox" className="mt-10 absolute inset-0 opacity-100 data-[state=inactive]:opacity-0 data-[state=inactive]:pointer-events-none transition-opacity duration-300">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 justify-items-center min-h-[500px] items-start">
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center transform transition-transform duration-200 hover:scale-105">
                    <Image src="/proimg1.png" width={79} height={79} alt="Hydrogen Water" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">HYDROGEN WATER</h3>
                  </div>
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center transform transition-transform duration-200 hover:scale-105">
                    <Image src="/proimg2.png" width={70} height={79} alt="Infrared Sauna" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">INFRARED SAUNA</h3>
                  </div>
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center transform transition-transform duration-200 hover:scale-105">
                    <Image src="/proimg3.png" width={79} height={79} alt="Ionic Footbaths" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">IONIC FOOTBATHS</h3>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nourish" className="mt-10 absolute inset-0 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 justify-items-center min-h-[500px] items-start">
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center transform transition-transform duration-200 hover:scale-105">
                    <Image src="/proimg1.png" width={79} height={79} alt="Hydrogen Water" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">HYDROGEN WATER</h3>
                  </div>
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center transform transition-transform duration-200 hover:scale-105">
                    <Image src="/proimg3.png" width={79} height={79} alt="Ionic Footbaths" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">IONIC FOOTBATHS</h3>
                  </div>
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center transform transition-transform duration-200 hover:scale-105">
                    <Image src="/proimg2.png" width={70} height={79} alt="Infrared Sauna" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">INFRARED SAUNA</h3>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Spacer to maintain consistent height */}
            <div className="mt-10 min-h-[500px]"></div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Process

