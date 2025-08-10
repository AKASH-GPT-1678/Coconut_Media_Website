import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { Footer1 } from '../Components/Footer1';
import Footer from '../Components/Footer';
import Map from './Map';
const page = () => {
  return (
  <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Office Cards Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center mb-12">
        {/* Corporate Office */}
        <div className="flex flex-col w-full max-w-sm lg:w-[350px] h-auto lg:h-[350px] gap-5 items-center bg-green-50 p-6 lg:p-10 justify-center rounded-lg hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 bg-green-500 hover:bg-black rounded-full transition-colors duration-300 cursor-pointer">
            <FaBuilding size={60} className="sm:w-[70px] sm:h-[70px]" fill="white" />
          </div>
          <p className="font-bold uppercase text-center text-sm sm:text-base">Corporate Office</p>
          <p className="text-sm sm:text-lg text-center opacity-80 leading-relaxed">
            5th floor, Kotia Nirman, Off New Link Rd, Industrial Area, Andheri West, Mumbai, Maharashtra 400053
          </p>
        </div>

        {/* Head Office */}
        <div className="flex flex-col w-full max-w-sm lg:w-[350px] h-auto lg:h-[350px] gap-5 items-center bg-green-50 p-6 lg:p-10 justify-center rounded-lg hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 bg-green-500 hover:bg-black rounded-full transition-colors duration-300 cursor-pointer">
            <BsFillBuildingsFill size={60} className="sm:w-[70px] sm:h-[70px]" fill="white" />
          </div>
          <p className="font-bold uppercase text-center text-sm sm:text-base">Head Office</p>
          <p className="text-sm sm:text-lg text-center opacity-80 leading-relaxed">
            1st Floor, Shakti 404, Opp Gurudwara, Sarkhej – Gandhinagar Hwy, Bodakdev, Ahmedabad, Gujarat 380054
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col w-full max-w-sm lg:w-[350px] h-auto lg:h-[350px] gap-5 items-center bg-green-50 p-6 lg:p-10 justify-center rounded-lg hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 bg-green-500 hover:bg-black rounded-full transition-colors duration-300 cursor-pointer">
            <MdOutlineContactPhone size={60} className="sm:w-[70px] sm:h-[70px]" fill="white" />
          </div>
          <p className="font-bold uppercase text-center text-sm sm:text-base">Contact</p>
          <div className="text-sm sm:text-lg text-center opacity-80 space-y-1">
            <p className="break-all sm:break-normal">info@coconutmediabox.in</p>
            <p>022 6223 1333</p>
            <p>8080 188 188</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex items-center justify-center gap-8 flex-col w-full mt-8">
        {/* Header */}
        <div className="p-3 flex flex-col items-center justify-center text-center">
          <h5 className="uppercase text-sm sm:text-base text-gray-600 mb-2">contact with us</h5>
          <h1 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            have any questions?
          </h1>
        </div>

        {/* Contact Form */}
        <form className="w-full flex items-center justify-center px-4 sm:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-[1000px] w-full">
            {/* Name Field */}
            <div className="w-full">
              <label className="block mb-2 font-bold text-sm sm:text-base text-gray-700">
                Who's reaching out?
              </label>
              <input
                type="text"
                placeholder="Tell us your name"
                className="w-full border border-gray-300 px-3 py-3 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Phone Field */}
            <div className="w-full">
              <label className="block mb-2 font-bold text-sm sm:text-base text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Drop your phone number (just in case)"
                className="w-full border border-gray-300 px-3 py-3 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Email Field */}
            <div className="w-full">
              <label className="block mb-2 font-bold text-sm sm:text-base text-gray-700">
                Your Best Email
              </label>
              <input
                type="email"
                placeholder="Where can we send a reply?"
                className="w-full border border-gray-300 px-3 py-3 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Subject Field */}
            <div className="w-full">
              <label className="block mb-2 font-bold text-sm sm:text-base text-gray-700">
                What's this about?
              </label>
              <input
                type="text"
                placeholder="Give us a quick headline"
                className="w-full border border-gray-300 px-3 py-3 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Message Field */}
            <div className="lg:col-span-2 w-full">
              <label className="block mb-2 font-bold text-sm sm:text-base text-gray-700">
                Let's Talk
              </label>
              <textarea
                 rows={5}
                placeholder="Write your message like you mean it…"
                className="w-full border border-gray-300 px-4 py-4 bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-y min-h-[120px] text-sm sm:text-base"
              />
            </div>
          </div>
        </form>

        {/* Submit Button */}
        <div className="w-full flex justify-center px-4">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-4 sm:px-8 sm:py-5 text-white font-bold rounded-xl cursor-pointer uppercase transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform text-sm sm:text-base">
            send us a message
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        {/* <Map /> */}
        <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Map Component</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12">
        <Footer1 /> 
         <Footer /> 
      </div>
    </div>
  )
}

export default page
