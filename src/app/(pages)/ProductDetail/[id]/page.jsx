'use client';

import { addToCart, openCart } from '@/app/RTK/slice';
import RelatedProducts from '@/components/RelatedProducts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetail() {
  const product = useSelector((state) => state.product.selectedProduct);

  const [mainImage, setMainImage] = useState(product?.image || '');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!product) {
    return <div className="p-4 sm:p-10 text-center text-gray-500">Product not found.</div>;
  }

  const thumbnails = [
    product.image,
    product.image,
    product.image,
    product.image,
    '/pgimg1.png',
  ];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    dispatch(openCart());
  };
  
  return (
    <div className="py-8 sm:py-12 lg:py-20 mx-auto bg-white max-w-7xl">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          
        
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            
           
            <div className="mb-4 mt-14 lg:mt-0">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>
            
            
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2">
              {thumbnails.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${product.name} view ${idx + 1}`}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md cursor-pointer transition-all duration-300 border-2 ${
                    mainImage === src 
                      ? 'border-black shadow-md' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
          </div>

         
          <div className="w-full lg:w-1/2 lg:pl-8 lg:mt-10">
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {product.name}
            </h1>
            
         
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6 sm:mb-8">
              {product.description}
            </p>
           
            <div className="mb-6 sm:mb-8">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {product.price}
              </span>
            </div>

            <div className="mb-6 sm:mb-8">
              <label className="block mb-3 text-base sm:text-lg font-semibold text-gray-900">
                Quantity:
              </label>
              <div className="flex items-center w-32 sm:w-36 border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 sm:px-4 py-2 sm:py-3 text-lg sm:text-xl font-semibold transition duration-200 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="flex-1 px-2 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-medium text-center bg-gray-50">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 sm:px-4 py-2 sm:py-3 text-lg sm:text-xl font-semibold transition duration-200 hover:bg-gray-100 active:bg-gray-200 flex-shrink-0"
                >
                  +
                </button>
              </div>
            </div>

           
            <button 
              className="w-full px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-black rounded-md transition duration-300 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      
      <div className="px-4 sm:px-6 lg:px-8">
        <RelatedProducts />
      </div>
    </div>
  );
}
