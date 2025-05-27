import React from 'react'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
  })
  
const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "JOHN SMITH",
      image: "/otimg1.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "JOHN SMITH",
      image: "/otimg1.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "JOHN SMITH",
      image: "/otimg1.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ]

  return (
    <section className={`py-20 bg-white ${robotoCondensed}`}>
      <div className="container mx-auto px-4 max-w-6xl">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. 
            Lorem Ipsum Has Been The Industry's
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
             
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
             
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  
                </div>
              </div>

            
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                  {member.name}
                </h3>
                
              
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.social.facebook} 
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook size={16}  className='text-white'/>
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter size={16} className='text-white' />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={16}  className='text-white'/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam