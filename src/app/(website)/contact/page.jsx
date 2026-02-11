"use client";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";

function Contact() {
  return (
    <div>
      <Navbar active="contact" />
      <Banner />
      <ConnectSection />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default Contact;


import React from 'react'

export const Banner = () => {
  return (
    <div className="pt-24">
      <img className="w-full h-full object-cover" src="	https://chakrafin.com/images/contactbanner.jpg" alt="banner" />
    </div>
  )
}


import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGlobeAfrica } from "react-icons/fa";


export const ConnectSection = () => {
  return (
    <section className="py-5 md:py-16 px-5 lg:px-18">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F47C20] mb-6">
            Connect With Us
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Partner with Chakra Finance to explore a wide range of financial
            solutions tailored to your needs. Our expert team is here to guide
            you through personalized plans, ensuring hassle-free financial
            services. Reach out today and take the first step toward achieving
            your financial goals with confidence.
          </p>

          {/* Contact Items */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-center gap-4 border-b-4 border-[#F47C20] pb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <FaPhoneAlt size={22} />
              </div>

              <div>
                <a
                  href="tel:+919030972851"
                  className="text-lg text-gray-700 font-medium hover:text-[#F47C20] transition"
                >
                  +91 9030972851
                </a>
                <span className="ml-4 text-pink-500 font-medium cursor-pointer">
                  &lt;---- Click Here
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border-b-4 border-[#F47C20] pb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <IoMdMail size={22} />
              </div>

              <div>
                <a
                  href="mailto:chakrafiservice@gmail.com"
                  className="text-lg text-gray-700 font-medium hover:text-[#F47C20] transition"
                >
                  chakrafiservice@gmail.com
                </a>
                <span className="ml-4 text-pink-500 font-medium cursor-pointer ">
                  &lt;---- Click Here
                </span>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center gap-4 border-b-4 border-[#F47C20] pb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <FaGlobeAfrica size={22} />
              </div>

              <div>
                <a
                  href="https://chakrafina.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-700 font-medium hover:text-[#F47C20] transition"
                >
                  chakrafina.com
                </a>
                <span className="ml-4 text-pink-500 font-medium cursor-pointer">
                  &lt;---- Click Here
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F47C20] mb-6 text-left lg:text-center">
            We Do Service All Over India
          </h2>

          {/* Map */}
          <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.45836785307!2d78.34329977958347!3d17.412153079020156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e0a1e2d7b5%3A0x2e6b9b4f3b1b4c1!2sHyderabad!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enquiry Form
export const EnquiryForm = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-18 pt-16">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-center text-[#F47C20] mb-12">
        Enquiry Form
      </h2>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-black">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="rounded-xl border-2 border-[#243C9A] px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#243C9A]"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-black">Company Name</label>
          <input
            type="text"
            placeholder="Enter your company name"
            className="rounded-xl border-2 border-[#243C9A] px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#243C9A]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-black">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-xl border-2 border-[#243C9A] px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#243C9A]"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-black">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="rounded-xl border-2 border-[#243C9A] px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#243C9A]"
          />
        </div>

        {/* Choose Loan */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-black">Choose a Loan</label>
          <select className="rounded-xl border-2 border-[#243C9A] px-5 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#243C9A]">
            <option value="">Choose a Loan</option>
            <option>Personal Loan</option>
            <option>Business Loan</option>
            <option>Home Loan</option>
            <option>Education Loan</option>
            <option>Instant Loan</option>
          </select>
        </div>

        {/* Amount */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-black">Amount</label>
          <input
            type="number"
            placeholder="Enter loan amount"
            className="rounded-xl border-2 border-[#243C9A] px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#243C9A]"
          />
        </div>

        {/* Submit Button (Centered) */}
        <div className="md:col-span-2 flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#243C9A] text-white px-14 py-3 rounded-lg text-lg font-medium hover:bg-[#1d3180] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
