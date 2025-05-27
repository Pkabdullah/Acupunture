"use client"
import { closeCart, openCart, removeFromCart } from '@/app/RTK/slice';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCartOpen = useSelector((state) => state.product.isCartOpen);
  const cart = useSelector((state) => state.product.cartItems);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const cartTotal = cart.reduce((total, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return total + numericPrice * item.quantity;
  }, 0);


  return (
    <header className='p-2 bg-[#FCF6EF] w-full fixed z-20'>
      <div className='flex items-center justify-between px-4 mx-auto max-w-7xl lg:px-6'>
       
        <div className='flex-shrink-0 lg:pl-16'>
          <Image
            src="/logo1.png"
            width={65}
            height={84}
            alt="Logo"
            className="w-12 h-16 sm:w-16 sm:h-20 lg:w-[65px] lg:h-[84px]"
          />
        </div>

       
        <nav className='hidden lg:flex'>
          <ul className='flex gap-6 xl:gap-10 text-[16px] xl:text-[18px]'>
            <li>
              <Link href="/" className="transition-colors hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/ecommerce" className="transition-colors hover:text-gray-600">
                E-Commerce
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="transition-colors hover:text-gray-600">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className="transition-colors hover:text-gray-600">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

       
        <div className='flex items-center gap-4'>
        
          <div className='hidden gap-4 sm:flex lg:gap-6'>
            <Image
              src="/search-icon.png"
              width={20}
              height={20}
              alt="Search"
              className="w-5 h-5 transition-opacity cursor-pointer lg:w-6 lg:h-6 hover:opacity-70"
            />
            <div className="relative">
              <Image
                src="/shopping-icon.png"
                width={20}
                height={20}
                alt="Shopping"
                className="w-5 h-5 transition-opacity cursor-pointer lg:w-6 lg:h-6 hover:opacity-70"
                onClick={() => dispatch(openCart())}
              />

             
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
          </div>

         
          <div className='flex gap-3 sm:hidden'>
            <Image
              src="/search-icon.png"
              width={18}
              height={18}
              alt="Search"
              className="w-4 h-4 transition-opacity cursor-pointer hover:opacity-70"
            />
            <div className="relative">
              <Image
                src="/shopping-icon.png"
                width={18}
                height={18}
                alt="Shopping"
                className="w-4 h-4 transition-opacity cursor-pointer hover:opacity-70"
                onClick={() => dispatch(openCart())}

              />
             
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center text-[8px]">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
          </div>

          
          <button
            onClick={toggleMenu}
            className='flex flex-col gap-1 p-2 lg:hidden'
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black opacity-30 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black opacity-30 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black opacity-30 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden opacity-40" onClick={closeMenu}></div>
      )}

     
      {isCartOpen && (
        <div className="fixed inset-0 z-40 pointer-events-none bg-opacity-40"></div>
      )}


    
      <nav className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-[#FCF6EF] transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-6">
        
          <button
            onClick={closeMenu}
            className="absolute p-2 top-4 right-4"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-black rotate-45 translate-y-0.5"></span>
            <span className="block w-6 h-0.5 bg-black -rotate-45 -translate-y-0.5"></span>
          </button>

        
          <ul className='flex flex-col gap-6 mt-12 text-[18px]'>
            <li>
              <Link
                href="/"
                className="block py-2 transition-colors hover:text-gray-600"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 transition-colors hover:text-gray-600"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/ecommerce"
                className="block py-2 transition-colors hover:text-gray-600"
                onClick={closeMenu}
              >
                E-Commerce
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="block py-2 transition-colors hover:text-gray-600"
                onClick={closeMenu}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className="block py-2 transition-colors hover:text-gray-600"
                onClick={closeMenu}
              >
                Contact us
              </Link>
            </li>
          </ul>

     
          <div className='flex gap-6 pt-6 mt-8 border-t border-gray-300 '>
            <Image
              src="/search-icon.png"
              width={24}
              height={24}
              alt="Search"
              className="transition-opacity cursor-pointer hover:opacity-70"
            />
            <div className="relative">
              <Image
                src="/shopping-icon.png"
                width={24}
                height={24}
                alt="Shopping"
                className="transition-opacity cursor-pointer hover:opacity-70"
                onClick={() => {
                 dispatch(openCart())
                  closeMenu();
                }}
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
          </div>
        </div>
      </nav>

     
      <div className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full">

          
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Shopping Cart  {cart.reduce((total, item) => total + item.quantity, 0)}</h2>
            <button
              onClick={() => dispatch(closeCart())}
              className="p-2 transition-colors rounded-full cursor-pointer hover:bg-gray-100"
              aria-label="Close cart"
            >
              <span className="block w-5 h-0.5 bg-black rotate-45 translate-y-0.5"></span>
              <span className="block w-5 h-0.5 bg-black -rotate-45 -translate-y-0.5"></span>
            </button>
          </div>

         
          <div className="flex-1 p-4 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">


                {cart.map((item) => (
                  <>
                    <div key={item.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <Image
                        src={item.image}
                        width={50}
                        height={50}
                        alt={item.name}
                        className="object-cover w-12 h-12 rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      
                      </div>
                      <button className="p-1 text-red-500 cursor-pointer hovecursor-pointer" onClick={() => handleRemove(item.id)}>
                        <span className="text-lg">×</span>
                      </button>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>

        
          {cart.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Total: ${cartTotal.toFixed(2)}</span>
                </div>

              </div>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 text-white transition-colors bg-black rounded hover:bg-gray-800">
                  Checkout
                </button>
                <button className="w-full px-4 py-2 transition-colors border border-gray-300 rounded hover:bg-gray-50">
                  View Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default NavBar
