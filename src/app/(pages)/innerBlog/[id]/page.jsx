"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";

const InnerBlog = () => {
    const product = useSelector((state) => state.product.selectedProduct);
    console.log(product)
    const pathname = usePathname();
    const parts = pathname.split('/');
    const id = parts[parts.length - 1];
    
    return (
        <section className='py-8 sm:py-12 lg:py-16 lg:pt-42 max-w-7xl mx-auto'>
           
            <div className='px-4 sm:px-6 lg:px-[5%]'>
                <Link href="/blogs">
                    <Button className="bg-white text-black hover:bg-white cursor-pointer text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2">
                        <BiArrowBack className="mr-2 text-lg sm:text-xl" /> 
                        Back
                    </Button>
                </Link>
            </div>
          
          
            <div className='flex justify-center mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-0'>
                <div className="relative w-full max-w-[1140px]">
                    <Image 
                        src={product?.image || '/placeholder.jpg'} 
                        width={1140} 
                        height={469}
                        alt={product?.primaryText || 'Blog image'}
                        className="w-full h-auto object-cover rounded-lg lg:rounded-none"
                        priority
                    />
                </div>
            </div>

            
            <div className='px-4 sm:px-6 lg:px-[6%] pt-4 sm:pt-6 lg:pt-[2%]'>
               
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-6 sm:mb-8 leading-tight'>
                    {product?.primaryText || 'Blog Title'}
                </h1>
                
              
                <div className="space-y-4 sm:space-y-5 lg:space-y-4 text-sm sm:text-base lg:text-[16px] leading-relaxed text-gray-700">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </section>
    )
}

export default InnerBlog
