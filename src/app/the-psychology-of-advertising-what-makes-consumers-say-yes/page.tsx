'use client';
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdAddCall } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { Footer1 } from '../Components/Footer1';
import Logo from "../Components/mylogo.png";
import PshshyChologyBlog from '../Components/PshyChologyBlog';
const page = () => {
    const router = useRouter();
    return (
        <div>
            <div className='w-full h-[400px]' style={{ backgroundImage: "url('https://meat-bucket-2025.s3.ap-south-1.amazonaws.com/cocoasset/phsychology.jpg')", backgroundSize: "cover" }} >
                <div className='flex flex-row gap-5  h-fit 0 p-8 items-center justify-between'>




                    <div className='flex flex-row  '>
                        <Image src={Logo} alt="logo" width={120} height={120} onClick={() => router.push('/')} />
                        <ul className='flex-row hidden md:flex gap-6 text-white ml-12'>
                            <li className="uppercase cursor-pointer text-sm font-bold" onClick={() => router.push('/')}>
                                Home
                            </li>
                            <li className="uppercase cursor-pointer text-sm font-bold flex-row" onClick={() => router.push('/about')}>
                                About Us
                            </li>
                            <li className="uppercase cursor-pointer text-sm font-bold" onClick={() => router.push('/verticles')}>
                                Verticles
                            </li>
                            <li className="uppercase cursor-pointer text-sm font-bold" onClick={() => router.push('/blogs')}>
                                Blog
                            </li>
                            <li className="uppercase cursor-pointer text-sm font-bold" onClick={() => router.push('/careers')}>
                                Careers
                            </li>
                            <li className="uppercase cursor-pointer text-sm font-bold" onClick={() => router.push('/contactus')}>
                                Contact
                            </li>
                        </ul>

                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <MdAddCall className='text-white text-3xl' />
                        <div className='flex flex-col'>
                            <p className='text-white text-md'>LET&apos;S CONNECT</p>
                            <p className='text-white'>+91 1234567890</p>
                        </div>

                    </div>
                </div>


            </div>

            <div className='flex flex-row  justify-center'>
                <div className='flex items-center justify-center'>

                    <PshshyChologyBlog />
                </div>
                <div className='mt-10 hidden md:block'>
                    <div className='p-8 bg-green-100 flex flex-row items-center justify-center'>
                        <input type="text" placeholder='Looking for ?' className='px-4 py-2 border bg-white' />
                        <FaSearch size={30} className='text-white text-2xl bg-black p-1 cursor-pointer h-[40px] w-[36px]' />


                    </div>
                    <div className="bg-green-100 p-4 rounded-md mt-20 w-fit px-8 ">
                        <h2 className="text-sm font-semibold mb-3 text-gray-800 uppercase">Tags</h2>
                        <div className="flex flex-col gap-2">

                            <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-md w-max hover:bg-green-400 hover:text-amber-50">Digital Marketing Agency</span>
                            <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-md w-max hover:bg-green-400 hover:text-amber-50">Digital Marketing Agency in Mumbai</span>
                            <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-md w-max hover:bg-green-400 hover:text-amber-50">Digital Marketing Company in Mumbai</span>
                            <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-md w-max hover:bg-green-400 hover:text-amber-50">Digital Marketing Services in Mumbai</span>
                            <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-md w-max hover:bg-green-400 hover:text-amber-50">Digital Marketing Company</span>
                            <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-md w-max hover:bg-green-400 hover:text-amber-50">Digital Marketing Services</span>

                        </div>
                    </div>



                </div>
            </div>
            <Footer1 />
            <Footer />
        </div>
    )
}

export default page;
