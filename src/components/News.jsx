import React from 'react';
import { Button } from './ui/button';
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const News = () => {
  const content = [
    {
      id: 1,
      image: "/newimg1.png",
      primaryText: "Health Benefits",
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
    }
  ];

  return (
    <section className={`py-16 bg-white ${robotoCondensed.className}`}>
    
      <div className="max-w-screen-xl mx-auto">
        <div className="container px-4 sm:px-12">
          <div className='text-center mb-12'>
            <h4 className='text-sm font-medium text-gray-600 uppercase tracking-wider mb-2'>
              HEALTHY BLOG
            </h4>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-800'>
              Our News
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">

            {content.map((item) => (
              <div
                key={item.id}
                className="w-[359px] bg-white "
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
                    <span className='lg:text-[14px]'>{item.date}</span>
                  </div>
                  <p className="text-gray-600 lg:text-[14px] leading-snug mb-2">
                    {item.secondaryText}
                  </p>
                  <span className=" cursor-pointer hover:underline font-semibold">{item.button}</span>
                </div>
              </div>
            ))}
          </div>

        
          <div className='flex justify-center mt-16 '>
            <Button className={"rounded-none"}>View All</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

