import React from "react";

function Footer() {
  return (
    <div>
      <FooterComponent />
    </div>
  );
}

export default Footer;

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export const FooterComponent = ({ active = "home" }) => {
  return (
    <footer className="bg-[#063f6d] text-white pt-6 mt-6">
      <div className="max-w-7xl mx-auto px-18">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* LOGO + NAME */}
          <div>
            <div className="bg-white rounded-xl p-4 inline-block">
              <img
                src="https://chakrafin.com/images/logo.png" // replace path if needed
                alt="Chakra Financial Services"
                className="h-16 object-contain"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold tracking-wide">
              CHAKRA FINANCIAL SERVICES
            </h3>
          </div>

          {/* QUICK LINKS */}
          <div className="px-5">
            <h4 className="text-xl font-semibold text-[#F47C20] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              {[
                { key: "home", label: "Home", link: "/" },
                { key: "about", label: "About Us", link: "#about" },
                { key: "services", label: "Services", link: "/services" },
                { key: "contact", label: "Contact Us", link: "/contact" },
                {
                  key: "instantloan",
                  label: "Get Instant Loan",
                  link: "/instantloan",
                },
              ].map((item) => (
                <li
                  key={item.key}
                  className={` transition ${
                    active === item.key
                      ? "text-[#1E6FB8] underline hover:text-[#F47C20]"
                      : "text-white"
                  }`}
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h4 className="text-xl font-semibold text-[#F47C20] mb-4">
              Connect With Us
            </h4>

            <p className="text-sm leading-relaxed text-white/90">
              Chakra Finance helps you explore a wide range of financial
              solutions tailored to your needs.
            </p>

            <div className="flex gap-4 mt-6">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaYoutube />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="text-xl font-semibold text-[#F47C20] mb-4">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#F47C20] text-3xl" />
                <span>
                  101, Sai Surya Residency, Madeenaguda, Hyderabad, Telangana,
                  India - 500049
                </span>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 text-[#F47C20]" />
                <span>chakrafinservice@gmail.com</span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-[#F47C20]" />
                <span>+91 9030972851</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6">
          {/* ORANGE BAR */}
          <div className="text-white text-center text-sm pt-2 pb-4">
            CHAKRA FINANCIAL SERVICES © 2023 AVAS | All rights reserved
          </div>

          {/* BOTTOM CREDIT */}
          <div className=" text-center pt-4 text-sm border-t border-white/30">
            <span className="flex justify-center gap-2">
              Design & Developed by 
              <a
                className="underline font-semibold cursor-pointer"
                href="https://www.ssdtechinfrasolutions.in/"
              >
                SSD TechInfra Solutions
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919030972851"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>
    </footer>
  );
};

/* SOCIAL ICON */
function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-[#F47C20] transition cursor-pointer">
      {icon}
    </div>
  );
}
