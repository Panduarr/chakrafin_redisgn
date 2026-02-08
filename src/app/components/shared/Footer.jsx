import React from "react";

function Footer() {
  return (
    <footer className="bg-[#D1D5DB] mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <img
              src="https://chakrafin.com/images/logo.png"
              alt="Chakra Financial Services"
              className="w-40 mx-auto md:mx-0 mb-3"
            />
            <h3 className="text-lg font-bold text-black">
              CHAKRA FINANCIAL SERVICES
            </h3>
          </div>

          {/* Connect With Us */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-black mb-3">
              Connect With Us
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Chakra Finance helps you explore a wide range of financial
              solutions tailored to your needs.
            </p>

            <div className="flex justify-center gap-4 text-xl">
              <a href="#" className="text-blue-600 hover:scale-110 transition">
                f
              </a>
              <a href="#" className="text-sky-500 hover:scale-110 transition">
                𝕏
              </a>
              <a href="#" className="text-red-600 hover:scale-110 transition">
                ▶
              </a>
              <a href="#" className="text-pink-600 hover:scale-110 transition">
                ◎
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-black mb-3">Contact Us</h3>

            <ul className="text-sm text-gray-700 space-y-3">
              <li>
                📍 101, Sai Surya Residency, Madeenaguda, Hyderabad, Telangana –
                500049
              </li>
              <li>✉ chakrafinservice@gmail.com</li>
              <li>📞 +91 9030972851</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#EA580C] text-white text-center py-3 text-sm">
        CHAKRA FINANCIAL SERVICES © 2023 AVAS | All rights reserved
      </div>

      {/* Credit */}
      <div className="bg-[#EA580C] text-white text-center py-2 text-sm border-t border-white/30">
        Design & Developed by
        <a className="underline font-medium" href="https://www.ssdtechinfrasolutions.in">SSD TechInfra Solutions</a>
      </div>
    </footer>
  );
}

export default Footer;
