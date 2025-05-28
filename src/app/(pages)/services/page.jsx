import Image from 'next/image'
import React from 'react'
import { Roboto_Condensed } from 'next/font/google'
import { Button } from '@/components/ui/button'

const robotoCondensed = Roboto_Condensed({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})
const Services = () => {
    const content = [
        {
            id: 1,
            image: "/serimg1.png",
            primaryText: "Infrared Sauna",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Book Now"
        },
        {
            id: 2,
            image: "/serimg1.png",
            primaryText: "Infrared Sauna",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Book Now"
        },
        {
            id: 3,
            image: "/serimg1.png",
            primaryText: "Infrared Sauna",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Book Now"
        },
        {
            id: 4,
            image: "/serimg1.png",
            primaryText: "Infrared Sauna",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Book Now"
        },
        {
            id: 5,
            image: "/serimg1.png",
            primaryText: "Infrared Sauna",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Book Now"
        },
        {
            id: 6,
            image: "/serimg1.png",
            primaryText: "Infrared Sauna",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Book Now"
        }
    ];
    return (
        <section className={`${robotoCondensed.className} pt-16 pb-8`}>
            {/* Banner */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[690px]">
                <Image
                    src="/abtimg1.png"
                    alt="about us banner"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center text-center text-white px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold">Services</h1>
                    <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the<br /> industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>

            {/* Service Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 max-w-7xl mx-auto px-4 max-sm:space-y-8">
                {content.map((item) => (
                    <div
                        key={item.id}
                        className="w-full sm:w-[300px] md:w-[340px] lg:w-[359px] bg-white shadow-md"
                    >
                        <div className="w-full h-[200px] sm:h-[224px]">
                            <img
                                src={item.image}
                                alt={item.primaryText}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="pt-4 flex flex-col justify-between h-[220px]">
                            <div className="flex justify-between items-center text-gray-500 font-medium max-sm:-mb-10">
                                <h3 className="text-black text-lg sm:text-xl lg:text-[30px] font-semibold">{item.primaryText}</h3>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base leading-snug mb-2">
                                {item.secondaryText}
                            </p>

                            <Button className="rounded-none text-base sm:text-lg font-normal ">{item.button}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Services

