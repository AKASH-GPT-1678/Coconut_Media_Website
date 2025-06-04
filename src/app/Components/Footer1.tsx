import React from 'react'
import Image1 from "./mylogo.png"
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export const Footer1 = () => {
    return (
        <div>
            
    
        <div className='flex flex-row bg-black p-5 items-center justify-center mt-3'>
            <div className='flex flex-row justify-between gap-5'>
                <Image src={Image1} alt='mylogo' width={200} height={200} className='object-cover' />
                <h1 className='uppercase text-sm mt-3 text-white'>Choose tailored services crafted exclusively for your business <span className='uppercase'>Discover your profile solution</span></h1>
                <div className='flex flex-row gap-5'>
                    <FaFacebook size={30} className='text-white cursor-pointer' />
                    <FaInstagram size={30} className='text-white cursor-pointer' />
                    <FaLinkedin size={30} className='text-white cursor-pointer' />

                </div>
            </div>



        </div>
            </div>
    )
}
