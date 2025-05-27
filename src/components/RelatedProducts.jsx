"use client";
import { setSelectedProduct, addToCart, openCart } from '@/app/RTK/slice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import React from 'react'

const RelatedProducts = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (item) => {
    dispatch(setSelectedProduct(item));
    router.push(`/ProductDetail/${item.id}`);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
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
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16">
    
      <div className="px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Recent Products
        </h1>
      </div>

     
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
             
              <div 
                className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-lg cursor-pointer"
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

           
              <div className="p-4 sm:p-5 lg:p-6">
               
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-tight flex-1 mr-2">
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-gray-900 flex-shrink-0">
                    {item.price}
                  </span>
                </div>

              
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                  {item.description}
                </p>

                
                <button 
                  className="w-full bg-black text-white py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium rounded-md hover:bg-gray-800 active:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
