import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const Process = () => {
  return (
    <section className={`bg-[#F5EDDB] pt-10 pb-16 ${robotoCondensed.className}`}>
      <h1 className='lg:text-5xl text-4xl text-center mb-8  text-gray-800'>2 Step Process</h1>

      <div className="flex justify-center">
        <Tabs defaultValue="detox" className="w-full max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-transparent gap-4">
            <TabsTrigger
              value="detox"
              className="rounded-none border cursor-pointer border-gray-300 text-black bg-transparent data-[state=active]:bg-black data-[state=active]:text-white py-3 px-8 text-lg font-semibold"
            >
              Detox
            </TabsTrigger>
            <TabsTrigger
              value="nourish"
              className="rounded-none border cursor-pointer border-gray-300 text-black bg-transparent data-[state=active]:bg-black data-[state=active]:text-white  py-3 px-8 text-lg font-semibold"
            >
              Nourish
            </TabsTrigger>

          </TabsList>
          <div className=''>
            <TabsContent value="detox" className="mt-10">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 justify-items-center">
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center">
                    <Image src="/proimg1.png" width={79} height={79} alt="Hydrogen Water" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">HYDROGEN WATER</h3>
                  </div>
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center">
                    <Image src="/proimg2.png" width={79} height={79} alt="Infrared Sauna" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">INFRARED SAUNA</h3>
                  </div>
                  <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center">
                    <Image src="/proimg3.png" width={79} height={79} alt="Ionic Footbaths" />
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">IONIC FOOTBATHS</h3>
                  </div>
                </div>
              </div>
            </TabsContent>


          </div>
          <TabsContent value="nourish" className="mt-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 justify-items-center">
                <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center">
                  <Image src="/proimg1.png" width={79} height={79} alt="Hydrogen Water" />
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">HYDROGEN WATER</h3>
                </div>
                <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center">
                  <Image src="/proimg3.png" width={79} height={79} alt="Ionic Footbaths" />
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">IONIC FOOTBATHS</h3>
                </div>
                <div className="w-full max-w-[361px] bg-transparent rounded-lg border-2 border-gray-400 p-6 text-center flex flex-col items-center justify-center">
                  <Image src="/proimg2.png" width={79} height={79} alt="Infrared Sauna" />
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">INFRARED SAUNA</h3>
                </div>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  )
}

export default Process
