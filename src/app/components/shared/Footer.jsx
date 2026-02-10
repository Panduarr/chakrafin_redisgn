import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#014270] mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo & Name */}
          <div className="text-center md:text-left text-[#FFFFFF]">
            <img
              src="/logo-removebg-preview.png"
              alt="Chakra Financial Services"
              className="w-40 mx-auto md:mx-0 mb-3"
            />
            <h3 className="text-lg font-bold text-[#FFFFFF]">
              CHAKRA FINANCIAL SERVICES
            </h3>
          </div>

          {/* Connect With Us */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">
              Connect With Us
            </h3>
            <p className="text-sm text-[#FFFFFF] leading-relaxed mb-4">
              Chakra Finance helps you explore a wide range of financial
              solutions tailored to your needs.
            </p>

            <div className="flex justify-center gap-4 text-xl">
              <a href="#" className="text-blue-600 hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-sky-500 hover:scale-110 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-red-600 hover:scale-110 transition">
                <FaYoutube />
              </a>
              <a href="#" className="text-pink-600 hover:scale-110 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">Contact Us</h3>

            <ul className="text-sm text-[#FFFFFF] space-y-3">
              <li className="flex">
                <IoLocationSharp className="text-4xl" /> 101, Sai Surya
                Residency, Madeenaguda, Hyderabad, Telangana – 500049
              </li>
              <li className="flex">
                <IoMailSharp className="text-xl" /> chakrafinservice@gmail.com
              </li>
              <li className="flex">
                <FaPhoneAlt className="text-lg" /> +91 9030972851
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#014270] text-white text-center py-3 text-sm">
        CHAKRA FINANCIAL SERVICES © 2023 AVAS | All rights reserved
      </div>

      {/* Credit */}
      <div className="bg-[#014270] text-white text-center py-2 text-sm border-t border-white/60">
        Design & Developed by
        <a
          className="underline font-medium"
          href="https://www.ssdtechinfrasolutions.in"
        >
          SSD TechInfra Solutions
        </a>
      </div>
    </footer>
  );
}

export default Footer;
