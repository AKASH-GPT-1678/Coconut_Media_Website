"use client"
import React from 'react'
import Image from 'next/image'
import Logo from "./mylogo.png"
import { MdAddCall } from "react-icons/md";
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation';
import { MyImages } from '../myasset/myprofile';
import { Companies } from '../myasset/companies/comapnies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPencilRuler } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { TbBuildingCircus } from "react-icons/tb";
import Script from 'next/script';
export const Header = () => {
  const router = useRouter();

  const Myurls = [

    'https://storage.googleapis.com/mangementbkt/teamimage.jpg',
    'https://storage.googleapis.com/mangementbkt/teamimage2.webp',
    'https://storage.googleapis.com/mangementbkt/teamimage3.webp'

  ]

  const [source, setSource] = React.useState(Myurls[0])


  React.useEffect(() => {
    let current = 0


    const interval = setInterval(() => {
      if (current = 2) {
        current = 0

      }
      else {
        current++
        setSource(Myurls[current])


      }


    }, 3000
    )


    return () => clearInterval(interval);










  })

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
      icon: <FaPencilRuler size={50} />,
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
      icon: <FaComputer size={50} />,
    },
    {
      title: 'Comprehensive Solutions',
      items: [
        'Corporate Events & Trainings',
        'Trade and Marketing Events',
        'Awards, Recognition & Celebrations',
        'ATL & BTL Activations',
        'Corporate Social Responsibilities Activities',
      ],
      icon: <TbBuildingCircus size={50} className='hover:skew-x-12' />,
    },
  ];






  return (

    <div>

      <motion.div style={{ backgroundImage: `url(${source})`, backdropFilter: 'blur(5px)', backgroundSize: 'cover', backfaceVisibility: 'hidden', backgroundBlendMode: "multiply" }} className='bg-gray-400  '>

        <div className='flex flex-row gap-5  h-fit 0 p-8 items-center justify-between'>




          <div className='flex flex-row  '>
            <Image src={Logo} alt="logo" width={120} height={120} />

            <ul className='flex flex-row gap-14 text-white ml-12'>
              <li className="uppercase cursor-pointer" onClick={() => router.push('/')}>Home</li>
              <li className="uppercase cursor-pointer">About us</li>
              <li className="uppercase cursor-pointer">Verticles</li>
              <li className="uppercase cursor-pointer" onClick={() => router.push('/blogs')}>Blog</li>
              <li className="uppercase cursor-pointer" onClick={() => router.push('/careers')}>Careers</li>

              <li className="uppercase cursor-pointer" onClick={() => router.push('/contactus')}>Contact</li>

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
        <hr />
        <div className='h-screen w-full flex flex-row  justify-center' >


          <div className='w-fit h-fit mt-40 p-10 max-w-[1200px] flex flex-col gap-10 items-center'>


            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75 }}

            >
              <h1 className='text-xl font-semibold text-white'>Welcome to Coconut Media Group</h1>




            </motion.div>
            <motion.div className='flex flex-col items-center max-w-[1200px]  '

              initial={{ y: 200 }} // start 50px above
              animate={{ y: 0 }}
              transition={{ duration: 0.75 }}





            >
              <h1 className='text-8xl text-white'>CRAFTING CAMPAIGNS</h1>
              <h1 className='text-8xl text-white'>CREATING EVENTS</h1>
              <h1 className='text-8xl text-white'>CREATING MAGIC</h1>


            </motion.div>
          </div>



        </div>

        <div>

        </div>

      </motion.div>
      <div>
        {/* <div className='h-full w-screen flex flex-col space-y-5 md:flex-row mb-20  '>
          <div className=' flex flex-col h-[600px] md:flex-row relative min-w-[50%]  max-w-[800px] '>
            <div className='absolute bg-green-100 w-screen  md:w-[70%] h-[400px] md:h-full '>

            </div>

            <div className='mt-20  p-5 md:ml-16'>
              <Image src={Groupd} alt="logo" width={800} height={800} className='absolute  h-[500px] w-[500px]  md:w-[800px]  rounded-2xl ' />

            </div>
          </div>



          <div className=' w-[100%] md:w-[50%] bg-white h-[100%] md:ml-20 mt-10 '>
            <section className="px-6 py-12 md:py-16 bg-white w-full md:w-fit min-w-[400px]">
              <div className="max-w-3xl mx-auto">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-6">
                  DREAMERS, MAKERS,
                  STORYTELLERS AND<br />
                  CREATORS
                </h2>
                <p className="text-green-500 text-base font-medium leading-relaxed mb-4">
                  We specialise in creating campaigns<br />
                  that elevate your brand and deliver<br />
                  quantifiable results.
                </p>
                <p className="text-gray-700 text-sm max-w-xl leading-relaxed">
                  We serve diverse media and entertainment needs, expanding across Creative Brand Solutions,
                  Digital Marketing, Motion Pictures, Events, and more, with an exponentially growing client base.
                </p>

              </div>

            </section>




          </div>
          <div>
            <h1 className=' rotate-90 origin-top-left text-5xl md:text-8xl xl:text-9xl text-green-200 xl:ml-40 mt-10 font-cursive'>COCONUT</h1>
          </div>





        </div> */}


      </div>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto py-12 px-4'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col text-white'>
              <p className='font-stretch-75% underline decoration-green-400 p-1 mb-2'>OUR SERVICES</p>
              <p className='text-4xl'>WHAT WE OFFER</p>

            </div>
            <div className='max-w-[600px]'>
              <span className='text-white mt-6 md:text-lg'>
                From ad films and dynamic campaigns to unforgettable event management, based in Mumbai and Ahmedabad, we bring your vision to life with creativity and precision.
              </span>
            </div>

          </div>
          <div>
            <div className="bg-black text-white py-12 px-2">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
                {services.map((section, index) => (
                  <div key={index} className="w-full lg:w-1/3">
                    <div className="text-3xl mb-4">
                      {section.icon}

                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{`0${index + 1} ${section.title}`}</h3>
                    <ul>
                      {section.items.map((item, index) => (
                        <div key={index} className='flex flex-row gap-2 items-center '>
                          <div className='rounded-full h-4 w-4 bg-green-600'>

                          </div>
                          <li className="mb-2">
                            {item}
                          </li>

                        </div>

                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12 text-sm">
                <p className="text-gray-400 uppercase tracking-widest">
                  Choose tailored services crafted exclusively for your business.{' '}
                  <span className="text-white underline cursor-pointer hover:text-green">
                    Discover Your Perfect Solution
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="w-full flex flex-col items-center justify-center bg-white">

        {/* Esteemed Clients Section */}
        <div className="w-full flex flex-col items-center justify-center py-10 border-b-2 border-gray-300">
          <p>They trusted us. You can as well.</p>
          <p className="text-5xl font-semibold">Our Esteemed Clients</p>


          <div className='flex flex-row flex-wrap gap-5 max-w-[1200px] justify-center mt-10'>
            {Companies.map((company, index) => (
              <Image
                key={index}
                src={company}
                alt={"tasiwr"}
                className="object-contain h-[100px] w-[200px] p-4"
              />
            ))}
          </div>
        </div>

        {/* Work Showcase Section */}
        <div className="w-full flex flex-col items-center justify-center py-10">
          <p>Explore our craft shaped with passion</p>
          <h1 className="text-4xl font-bold">Work Showcase</h1>

          <div className="flex flex-row gap-10 font-semibold cursor-pointer mt-4 mb-10">
            <p className="hover:underline">Creative Solutions</p>
            <p className="hover:underline">Digital Solutions</p>
            <p className="hover:underline">Events & Activations</p>
          </div>

          <div className="flex flex-row flex-wrap gap-5 max-w-[1200px] justify-center">
            <Image src={MyImages[0]} alt="image1" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[1]} alt="image2" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[2]} alt="image3" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[3]} alt="image4" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[4]} alt="image5" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[5]} alt="image6" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[6]} alt="image7" className="object-fill h-[300px] w-[520px]" />
            <Image src={MyImages[7]} alt="image8" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[8]} alt="image9" className="object-fill h-[300px] w-[250px]" />
            <Image src={MyImages[9]} alt="image10" className="object-fill h-[300px] w-[250px]" />

          </div>
        </div>

      </div>


    </div>
  )
}
