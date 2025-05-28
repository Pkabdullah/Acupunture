import Image from 'next/image'
import React from 'react'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Footer = () => {
  return (
    <footer className={`bg-black text-white ${robotoCondensed.className}`}>

      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-row justify-between items-center gap-4">
          <div className="flex justify-start">
             <Image src="/logo2.png" width={65} height={84} alt="Logo" className='max-sm:w-[38px]' />
          </div>
        <nav className="flex flex-wrap items-center justify-end gap-3 max-sm:text-[10px]">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/ecommerce" className="text-gray-300 hover:text-white transition-colors">E-Commerce</a>
            <a href="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
            <a href="/contactUs" className="text-gray-300 hover:text-white transition-colors">Contact us</a>
          </nav>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-lg font-medium mb-4">Location</h3>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              70 Washington Square South, New York,<br />
              NY 10012, United States
            </address>
          </div>


          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>+000 333 5555</p>
              <p>dummy@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe</h3>
            <div className="relative">
              <select className="w-full bg-transparent border-b border-gray-700 rounded px-4 py-3 text-gray-400 text-sm appearance-none cursor-pointer">
                <option>Fresh Update</option>
                <option>Weekly Newsletter</option>
                <option>Monthly Digest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-center text-gray-500 text-xs">
            2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
