"use client"
import { addToCart, openCart, setSelectedProduct } from '@/app/RTK/slice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

const ECommerce = () => {
    const router = useRouter()


    const dispatch = useDispatch()
    const handleClick = (item) => {
        dispatch(setSelectedProduct(item));
        router.push(`/ProductDetail/${item.id}`)
    };
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(openCart());
    };
    const products = [
        {
            id: 1,
            name: "Abdullah Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 2,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 3,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 4,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 5,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 6,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 7,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 8,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        },
        {
            id: 9,
            name: "Product Name",
            price: "$200",
            description: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
            image: "/proimg4.png"
        }

    ]

    return (
        <section className="py-16 pt-20 bg-gray-50">

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
                    <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] mb-4 leading-tight font-semibold">
                        E Commerce
                    </h1>
                    <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className="hidden sm:block" /> It has been the industry's standard dummy text since the 1500s.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mx-auto mt-10 max-w-7xl px-4 sm:px-6">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="w-full sm:w-[48%] md:w-[31%] lg:w-[359px] bg-white rounded-md shadow-sm"
                    >
                        <div className="w-full h-[200px] sm:h-[224px]" onClick={() => handleClick(item)}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-full h-full transition-transform duration-300 cursor-pointer hover:scale-105 rounded-t-md"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between h-[220px]">
                            <div className="flex items-center justify-between font-medium text-gray-500 mb-2">
                                <h3 className="text-black text-base font-semibold md:text-lg lg:text-[20px]">{item.name}</h3>
                                <span className="text-md font-bold text-gray-900">{item.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm md:text-[14px] leading-snug mb-4">
                                {item.description}
                            </p>
                            <button
                                className="w-full px-4 py-2 text-sm md:text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-300"
                                onClick={() => handleAddToCart(item)}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default ECommerce