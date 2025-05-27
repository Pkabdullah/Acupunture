"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        cc: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            firstName: '',
            email: '',
            phone: '',
            cc: '',
            message: ''
        });
    };

    return (
        <div className="pt-16 sm:pt-20 bg-white">
           
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[690px]">
                <Image
                    src="/abtimg1.png"
                    alt="about us banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 mx-auto text-center text-white max-w-7xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-2 sm:mb-4 leading-tight font-bold">
                        Contact Us
                    </h1>
                    <p className="text-sm sm:text-base lg:text-[16px] font-light max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
            
            <div className="max-w-4xl px-4 sm:px-6 py-8 sm:py-12 mx-auto">
              
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-12 space-y-4 lg:space-y-0">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2 lg:mb-4">Get In Touch</h1>
                    </div>
                    <div className="max-w-md lg:text-right">
                        <p className="text-sm leading-relaxed text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard
                        </p>
                    </div>
                </div>

                
                <div className="mb-12 sm:mb-16">
                    {/* First Row - First Name and CC */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div>
                            <label className="block mb-2 text-sm text-gray-700">
                                First Name*
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base transition-colors border border-gray-300 focus:outline-none focus:border-gray-500"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-700">
                                CC
                            </label>
                            <input
                                type="text"
                                name="cc"
                                value={formData.cc}
                                onChange={handleInputChange}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base transition-colors border border-gray-300 focus:outline-none focus:border-gray-500"
                                placeholder=""
                            />
                        </div>
                    </div>

                  
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div>
                            <label className="block mb-2 text-sm text-gray-700">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base transition-colors border border-gray-300 focus:outline-none focus:border-gray-500"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-700">
                                Phone Number*
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base transition-colors border border-gray-300 focus:outline-none focus:border-gray-500"
                                placeholder=""
                            />
                        </div>
                    </div>

                   
                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-700">
                            Message*
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="5"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base transition-colors border border-gray-300 resize-none focus:outline-none focus:border-gray-500"
                            placeholder=""
                        ></textarea>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm font-medium text-white transition-colors bg-black hover:bg-gray-800"
                    >
                        Submit
                    </button>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                    {/* Phone Card */}
                    <div className="p-6 sm:p-8 text-center bg-red-50">
                        <div className="flex justify-center mb-3 sm:mb-4">
                            <Image src={"/telimg1.svg"} width={28} height={28} className="sm:w-[33px] sm:h-[33px]" />
                        </div>
                        <h3 className="mb-2 text-base sm:text-lg font-medium text-black">Phone</h3>
                        <p className="text-sm sm:text-base text-gray-700">+0000 3333 2222</p>
                    </div>

                   
                    <div className="p-6 sm:p-8 text-center bg-red-50">
                        <div className="flex justify-center mb-3 sm:mb-4">
                            <Image src={"/mailimg.svg"} width={28} height={28} className="sm:w-[33px] sm:h-[33px]" />
                        </div>
                        <h3 className="mb-2 text-base sm:text-lg font-medium text-black">Email</h3>
                        <p className="text-sm sm:text-base text-gray-700 break-all">dummy@gmail.com</p>
                    </div>

                  
                    <div className="p-6 sm:p-8 text-center bg-red-50 sm:col-span-2 lg:col-span-1">
                        <div className="flex justify-center mb-3 sm:mb-4">
                            <Image src={"/locimg.svg"} width={28} height={28} className="sm:w-[33px] sm:h-[33px]" />
                        </div>
                        <h3 className="mb-2 text-base sm:text-lg font-medium text-black">Location</h3>
                        <p className="text-sm sm:text-base text-gray-700">1830 E Park Hwy Alaska</p>
                    </div>
                </div>

                {/* Google Maps */}
                <div className="relative h-0 overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.096656292789!2d-122.08217698485344!3d37.42205787981786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc7b4be10725%3A0xf59d178a87b32f52!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1610035984427!5m2!1sen!2sus"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Location Map"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

