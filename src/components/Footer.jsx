import React from "react";
import logo from "../assets/blood_logo.png"; // Make sure the logo path is correct

const Footer = () => {
  return (
   <footer className="bg-gradient-to-r from-red-500 via-pink-400 to-rose-500 text-white py-4 text-center mt-auto">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + Brand */}
        <div className="flex flex-col items-start space-y-3">
          <img src={logo} alt="Blood Bank Logo" className="h-12 w-12" />
          <h2 className="text-2xl font-bold">BloodBank Manager</h2>
          <p className="text-sm text-white/80">Saving lives, one drop at a time.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-200 cursor-pointer">Home</li>
            <li className="hover:text-yellow-200 cursor-pointer">Donate</li>
            <li className="hover:text-yellow-200 cursor-pointer">Request</li>
            <li className="hover:text-yellow-200 cursor-pointer">About</li>
            <li className="hover:text-yellow-200 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">📍 123 Lifesaver Lane, Delhi, India</p>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">✉️ support@bloodbank.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-200">🌐 Website</a>
            <a href="#" className="hover:text-yellow-200">📘 Facebook</a>
            <a href="#" className="hover:text-yellow-200">📷 Instagram</a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} BloodBank Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
