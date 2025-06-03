import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f05] text-white pt-12 pb-6 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-[#1a1f10] pt-10">

        {/* About */}
        <div className="text-sm leading-6">
          <h2 className="font-bold text-white text-md mb-4">ABOUT</h2>
          <p className="text-gray-300">
            We provide groundbreaking Creative Brand Solutions, state-of-the-art Digital Marketing Services, unforgettable Events, and a wide array of additional offerings.
            <br /><br />
            With a perfect blend of artistry and strategy, we craft experiences that captivate, communicate, and convert.
            <br /><br />
            Every detail is designed to elevate your brand’s journey.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-bold text-white text-md mb-4">LINKS</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Verticals</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h2 className="font-bold text-white text-md mb-4">EXPLORE</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Creative</li>
            <li>Digital</li>
            <li>Event</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-bold text-white text-md mb-4">CONTACT US</h2>

          <p className="text-xs text-gray-400 mb-2 font-bold">HEAD OFFICE</p>
          <p className="text-sm text-gray-300 mb-4 flex gap-2">
            <FaMapMarkerAlt className="mt-1" />
            1st Floor, Shakti 404, Opp Gurudwara, Sarkhej – Gandhinagar Hwy, Bodakdev, Ahmedabad, Gujarat 380054
          </p>

          <p className="text-xs text-gray-400 mb-2 font-bold">CORPORATE OFFICE</p>
          <p className="text-sm text-gray-300 mb-4 flex gap-2">
            <FaMapMarkerAlt className="mt-1" />
            5th floor, Kotia Nirman, Off New Link Rd, Industrial Area, Andheri West, Mumbai, Maharashtra 400053
          </p>

          <p className="text-sm text-gray-300 mb-2 flex gap-2"><FaPhone /> 022 6223 1333</p>
          <p className="text-sm text-gray-300 mb-2 flex gap-2"><FaWhatsapp /> 8080 188 188</p>
          <p className="text-sm text-gray-300 mb-2">info@coconutmediabox.in</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1f10] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>Design & Developed by <span className="text-green-500">Coconut Digital</span> | © All Rights Reserved 2025</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-400">Terms & Conditions</a>
          <a href="#" className="hover:text-green-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
