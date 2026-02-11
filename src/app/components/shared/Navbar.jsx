"use client";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

function Navbar({ active = "home" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar (Desktop Only) */}
      <div className="max-w-7xl mx-auto">
      <div className="lg:fixed lg:w-full lg:z-5 hidden  md:flex bg-white justify-between px-10 py-1 text-sm max-w-7xl mx-auto border-b-2 border-[#1E6FB8]  ">
        <div className="flex gap-4 text-[#F47C20]">
          <a
            className="px-2  border-x border-black/40 hover:opacity-80"
            href="https://www.facebook.com/"
          >
            <FaFacebookF />
          </a>
          <a
            className="px-2 border-x border-black/40 hover:opacity-80"
            href="https://x.com/"
          >
            <FaInstagram />
          </a>
          <a
            className="px-2 border-x border-black/40 hover:opacity-80"
            href="https://www.linkedin.com/"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="flex gap-4 text-[#1E6FB8] ">
          <a
            className="px-2 border-x border-black/40 hover:opacity-80"
            href="https://web.whatsapp.com/"
          >
            <span className="flex items-center">
              <FaWhatsapp /> +91 93920 37809
            </span>
          </a>
          <a
            className="px-2 border-x border-black/40 hover:opacity-80"
            href="https://mail.google.com/"
          >
            <span className="flex items-center">
              <IoMailSharp /> info@chakrafin.com
            </span>
          </a>
        </div>
      </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm lg:fixed lg:w-full lg:z-2 mt-7">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-1">
          {/* Logo */}
          <img
            className="w-32 md:w-40"
            src="https://chakrafin.com/images/logo.png"
            alt="logo"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-cols gap-x-4 text-base font-medium">
            {[
              { key: "home", label: "Home", link: "/" },
              { key: "about", label: "About Us", link: "#about" },
              { key: "services", label: "Services", link: "/services" },
              { key: "contact", label: "Contact Us", link: "/contact" },
            ].map((item) => (
              <li
                key={item.key}
                className={`px-4 py-2 rounded-full text-center transition hover:scale-[1.03]
                  ${
                    active === item.key
                      ? "text-[#1E6FB8] underline hover:text-[#F47C20]"
                      : "text-gray-700"
                  }`}
              >
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
            <li>
              {/* Desktop CTA */}
              <a
                href="/instantloan"
                className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold bg-[#F47C20] text-white hover:scale-[1.03] transition"
              >
                Get Instant Loan
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col gap-2 p-4 text-base font-medium">
              {[
                { key: "home", label: "Home", link: "/" },
                { key: "about", label: "About Us", link: "#about" },
                { key: "services", label: "Services", link: "/services" },
                { key: "contact", label: "Contact Us", link: "/contact" },
              ].map((item) => (
                <li key={item.key}>
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 rounded-lg
                      ${
                        active === item.key
                          ? "bg-[#1E6FB8] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <a
                href="/instantloan"
                className="mt-2 text-center px-4 py-2 rounded-full bg-[#F47C20] text-white font-semibold"
              >
                Get Instant Loan
              </a>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
