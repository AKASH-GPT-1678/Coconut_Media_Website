"use client"
import React from 'react'
import Image from 'next/image'
import Logo from "./mylogo.png"
import { MdAddCall } from "react-icons/md";
import { motion } from "framer-motion"
import Groupd from "../../../public/groupd.png"
import { div } from 'framer-motion/client';
export const Header = () => {
  const services = [
    {
      title: 'Integrated Creative Solutions',
      items: [
        'Campaign Strategy, Planning & Execution',
        'Original Content & Copywriting',
        'Brand Identity & Design',
        'Corporate AV Production',
        'Market Research & Consumer Insights',
      ],
      icon: '✏️',
    },
    {
      title: 'Digital Solutions & Marketing',
      items: [
        'Website Development Services',
        'Search Engine Optimization (SEO)',
        'Social Media Marketing (SMM)',
        'Performance Marketing',
        'Influencer Marketing',
      ],
      icon: '💻',
    },
    {
      title: 'Comprehensive Event Solutions',
      items: [
        'Corporate Events & Trainings',
        'Trade and Marketing Events',
        'Awards, Recognition & Celebrations',
        'ATL & BTL Activations',
        'Corporate Social Responsibilities Activities',
      ],
      icon: '🎪',
    },
  ];

  return (

    <div>
      <div style={{ backgroundImage: "" }}>

        <div className='flex flex-row gap-5 border-2 border-black h-fit 0 p-8 items-center justify-between'>




          <div className='flex flex-row  '>
            <Image src={Logo} alt="logo" width={120} height={120} />

            <ul className='flex flex-row gap-14 text-white ml-12'>
              <li>Home</li>
              <li>About</li>
              <li>Verticles</li>
              <li>Blog</li>
              <li>Contact</li>

            </ul>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <MdAddCall className='text-white text-3xl' />
            <div className='flex flex-col'>
              <p className='text-white text-md'>LET'S CONNECT</p>
              <p className='text-white'>+91 1234567890</p>
            </div>

          </div>
        </div>
        <hr />
        <div className='h-screen w-full flex flex-row  justify-center border-2 border-black'>


          <div className='w-fit h-fit border-2 border-black mt-40 p-10 max-w-[1200px] flex flex-col gap-10 items-center'>


            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75 }}

            >
              <h1 className='text-xl font-semibold'>Welcome to Coconut Media Group</h1>




            </motion.div>
            <motion.div className='flex flex-col items-center max-w-[1200px]  '

              initial={{ y: 200 }} // start 50px above
              animate={{ y: 0 }}
              transition={{ duration: 0.75 }}





            >
              <h1 className='text-8xl'>CRAFTING CAMPAIGNS</h1>
              <h1 className='text-8xl'>CREATING EVENTS</h1>
              <h1 className='text-8xl'>CREATING MAGIC</h1>


            </motion.div>
          </div>


        </div>

        <div>

        </div>

      </div>
      <div>
        <div className='h-[700px] w-full flex flex-row mb-20'>




          <div className='w-[40%] bg-green-100 -mr-60'></div>
          <Image src={Groupd} alt="logo" width={500} height={400} className='mt-20' />

          <div className='w-[60%] bg-white  '>
            <section className="px-6 py-12 md:py-16 bg-white">
              <div className="max-w-3xl mx-auto">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-6">
                  DREAMERS, MAKERS,<br />
                  STORYTELLERS AND<br />
                  CREATORS
                </h2>
                <p className="text-green-500 text-base font-medium leading-relaxed mb-4">
                  We specialise in creating campaigns<br />
                  that elevate your brand and deliver<br />
                  quantifiable results.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We serve diverse media and entertainment needs, expanding across Creative Brand Solutions,
                  Digital Marketing, Motion Pictures, Events, and more, with an exponentially growing client base.
                </p>
              </div>
            </section>



          </div>



        </div>

      </div>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto py-12 px-4'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col text-white'>
              <p>OUR SERVICES</p>
              <p className='text-4xl'>WHAT WE OFFER</p>

            </div>
            <div className='max-w-[600px]'>
              <span className='text-white'>
                From ad films and dynamic campaigns to unforgettable event management, based in Mumbai and Ahmedabad, we bring your vision to life with creativity and precision.
              </span>
            </div>

          </div>
          <div>
            <div className="bg-black text-white py-12 px-4">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
                {services.map((section, index) => (
                  <div key={index} className="w-full lg:w-1/3">
                    <div className="text-3xl mb-4">{section.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{`0${index + 1} ${section.title}`}</h3>
                    <ul className="list-disc list-inside text-green-400 space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12 text-sm">
                <p className="text-gray-400 uppercase tracking-widest">
                  Choose tailored services crafted exclusively for your business.{' '}
                  <span className="text-white underline cursor-pointer">
                    Discover Your Perfect Solution
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='w-full flex-col justify-center mx-auto bg-red-100'>
        <div className='border-2 border-black flex flex-col justify-center items-center'>
          <p>They trusted us. You can as well.</p>
          <p className='text-5xl font-semibold'>Our Esteemed Clients</p>



        </div>

        <div className='flex flex-col gap-4 justify-center items-center underline'>
          <p>Explore our craft shaped with passion</p>
          <h1 className='text-4xl font-bold'>Work Showcase</h1>
          <div className='flex flex-row gap-10'>
            <p>Creative Solutions</p>
            <p>Digital Solutions</p>
            <p>Events & Activations</p>



          </div>

        </div>

      </div>


    </div>
  )
}
