"use client"
import React from 'react'
import { Roboto_Condensed } from 'next/font/google'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setSelectedProduct } from '@/app/RTK/slice'

const robotoCondensed = Roboto_Condensed({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const Blogs = () => {
    const dispatch = useDispatch()
    const handleClick = (item) => {
        dispatch(setSelectedProduct(item));
    };
    
    const content = [
        {
            id: 1,
            image: "/newimg1.png",
            primaryText: "Abdullah",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 2,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 3,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 4,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 51,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 6,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 7,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 8,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
        {
            id: 9,
            image: "/newimg1.png",
            primaryText: "Health Benefits",
            date: "Aug - 22 - 2024",
            secondaryText: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
            button: "Read More...."
        },
    ];

    return (
        <section className={`${robotoCondensed.className} pt-24 py-10`}>
          
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
                        Blogs
                    </h1>
                    <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the<br className="hidden sm:block" /> industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>

           
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center space-y-8 gap-4 pt-8 sm:pt-12 lg:pt-16 max-w-7xl mx-auto">
                    {content.map((item) => (
                        <div
                            key={item.id}
                            className="w-full sm:w-full lg:w-[359px] bg-white rounded-lg lg:rounded-none shadow-sm lg:shadow-none hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-full h-48 sm:h-56 lg:h-[224px] overflow-hidden rounded-t-lg lg:rounded-none">
                                <Link href={`/innerBlog/${item.id}`} onClick={() => handleClick(item)}>
                                    <img
                                        src={item.image}
                                        alt={item.primaryText}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                            </div>

                            <div className="pt-4 flex flex-col justify-between h-auto sm:h-auto lg:h-[200px]">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start lg:flex-row lg:justify-between lg:items-center text-gray-500 font-medium mb-2 gap-1 sm:gap-2 lg:gap-0">
                                    <h3 className="text-black text-lg sm:text-xl lg:text-base lg:font-semibold lg:lg:text-[30px] font-semibold leading-tight">
                                        {item.primaryText}
                                    </h3>
                                    <span className="text-sm sm:text-base lg:text-[14px] flex-shrink-0 ">
                                        {item.date}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base lg:lg:text-[14px] leading-snug mb-4 lg:mb-2">
                                    {item.secondaryText}
                                </p>
                                <Link href={`/innerBlog/${item.id}`} onClick={() => handleClick(item)}>
                                <span className="cursor-pointer hover:underline font-semibold text-sm sm:text-base self-start">
                                    {item.button}
                                </span></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

         
            <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
                <Button className="rounded-full w-32 sm:w-36 lg:w-32">
                    Load More
                </Button>
            </div>
        </section>
    )
}

export default Blogs
