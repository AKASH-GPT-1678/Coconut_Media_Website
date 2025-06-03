import React from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Testimonial } from '../testimonial/testimonial';
import Image from 'next/image';
import { div } from 'framer-motion/client';
export const KnowAboutUs = () => {
    return (
        <div className='bg-green-100'>
            <div>
                <div className='flex flex-col gap-5'>
                    <span className='uppercase'>get to know us</span>
                    <div className='font-bold'>


                        <p className='text-4xl uppercase'>What People are</p>
                        <p className='text-4xl uppercase'>Saying about Our</p>
                        <p className='text-4xl uppercase'>Organisation</p>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <FaArrowCircleLeft size={40} className='cursor-pointer' />
                    <FaArrowCircleRight size={40} className='cursor-pointer' />

                </div>
            </div>

            <div>
             <div className='flex flex-row gap-5'>
  {Testimonial.map((item, index) => (
    <div key={index} className='border-2 bg-white w-[350px] h-[500px]'> {/* Set fixed height */}
      <div className='flex flex-col p-4 h-full'>
        
        {/* This will take 60% of the card height */}
        <div className='h-[60%]  w-full overflow-hidden'>
          <p className='text-lg opacity-50  h-full '>
            {item.testimonial}
          </p>
        </div>


        <div className='h-[40%] mt-4 flex flex-col justify-end'>
          <Image src={item.image} alt="" width={100} height={100} />
          <div className='flex flex-col gap-1 font-semibold'>
            <p className='text-xl'>{item.name}</p>
            <p className='text-sm'>{item.designation}</p>
          </div>
          <div>
            <p className='mt-2 text-lg'>{item.company}</p>
          </div>
        </div>
        
      </div>
    </div>
  ))}
</div>


            </div>
        </div>
    )
}
