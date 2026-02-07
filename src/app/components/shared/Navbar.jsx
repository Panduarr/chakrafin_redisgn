
"use client";
import React, { useState } from "react";

function Navbar({ active = "home" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar (Desktop Only) */}
      <div className="hidden md:flex bg-white justify-between px-10 py-1 text-sm max-w-7xl mx-auto border-b-2 border-[#1E6FB8]">
        <div className="flex gap-4 text-black">
          <a className="px-2  border-x border-black/40 hover:opacity-80" href="https://www.facebook.com/">𝐟</a>
          <a className="px-2 border-x border-black/40 hover:opacity-80" href="https://x.com/">𝕏</a>
          <a className="px-2 border-x border-black/40 hover:opacity-80" href="https://www.linkedin.com/">🇮🇳</a>
        </div>
        <div className="flex gap-4">
          <a className="px-2 border-x border-black/40 hover:opacity-80" href="https://web.whatsapp.com/">📞 +91 90000 00000</a>
          <a className="px-2 border-x border-black/40 hover:opacity-80" href="https://mail.google.com/">✉ contact@chakrafin.com</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3">

          {/* Logo */}
          <img
            className="w-32 md:w-40"
            src="https://chakrafin.com/images/logo.png"
            alt="logo"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:grid grid-cols-4 gap-x-8 text-base font-medium">
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
                      ? "text-[#1E6FB8] underline"
                      : "text-gray-700"
                  }`}
              >
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/instantloan"
            className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold bg-[#F47C20] text-white hover:scale-[1.03] transition"
          >
            Get Instant Loan
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
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
