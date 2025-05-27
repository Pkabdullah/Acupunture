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
        <section className={`${robotoCondensed.className} pt-24 py-16`}>
           
            <Image
                src="/abtimg1.png"
                alt='about us banner'
                width={1440}
                height={690}
                className="w-full h-full "
            /> <div className='max-w-7xl mx-auto'>
            <div className="absolute inset-0 flex flex-col justify-center text-white pl-24 text-center">
                <h1 className="lg:text-[60px] mb-4  leading-tight">
                    Services
                </h1>
            </div></div>
            <div className="flex flex-wrap justify-center gap-4 mt-20 max-w-7xl mx-auto">
            

                {content.map((item) => (
                    <div
                        key={item.id}
                        className="w-[359px] bg-white  "
                    >
                        
                        <div className="w-full h-[224px]">
                            <img
                                src={item.image}
                                alt={item.primaryText}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-4 flex flex-col justify-between h-[200px]">
                            <div className="flex justify-between items-center text-gray-500 font-medium mb-2">
                                <h3 className="text-black text-base font-semibold lg:text-[30px]">{item.primaryText}</h3>

                            </div>
                            <p className="text-gray-600 lg:text-[14px] leading-snug mb-2">
                                {item.secondaryText}
                            </p>
                            <span className=" cursor-pointer hover:underline font-semibold"><Button className={"rounded-none text-[20px] font-normal cursor-pointer"}>{item.button}</Button></span>
                        </div>
                    </div>
                ))}
           </div>
        </section>
    )
}

export default Services
