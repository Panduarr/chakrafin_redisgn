"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer({ active = "home" }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const update = () => setHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [mounted]);

  if (!mounted) return null;

  const links = [
    { label: "Home", href: "/", match: "home" },
    { label: "About Us", href: "/#about", match: "#about" },
    { label: "Services", href: "/#services", match: "#services" },
    { label: "Clients", href: "/#clients", match: "#clients" },
    { label: "Contact Us", href: "/#contact", match: "#contact" },
  ];

  const isActive = (item) => {
    // Home active only when no hash
    if (item.match === "home") {
      return pathname === "/" && hash === "";
    }

    // Section links
    if (item.match.startsWith("#")) {
      return pathname === "/" && hash === item.match;
    }

    // Normal routes
    return pathname === item.match;
  };

  return (
    <footer className="bg-[#063f6d] text-white pt-6 mt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-18">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
          {/* LOGO + NAME */}
          <div>
            <div className="bg-white rounded-xl p-4 inline-block">
              <img
                src="https://chakrafin.com/images/logo.png"
                alt="Chakra Financial Services"
                className="h-16 object-contain"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold tracking-wide">
              CHAKRA FINANCIAL SERVICES
            </h3>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h4 className="text-xl font-semibold text-[#F47C20] mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() =>
                      setHash(item.match.startsWith("#") ? item.match : "")
                    }
                    className={`transition-all duration-300 ${
                      isActive(item)
                        ? "text-[#F47C20] underline"
                        : "text-white hover:text-[#F47C20] hover:underline"
                    }`}
                  >
                    {item.label}
                  </Link>
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
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-[#F47C20] transition cursor-pointer"
                href="https://www.facebook.com/people/Chakra-Financial-Services/61587570840796/"
              >
                <FaFacebookF />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-[#F47C20] transition cursor-pointer"
                href="https://x.com/"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-[#F47C20] transition cursor-pointer"
                href="https://www.instagram.com/chakrafinancialservices?igsh=N2Y0ajIwYjRyY2h6"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="text-xl font-semibold text-[#F47C20] mb-4">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#F47C20] text-5xl " />
                <span className="text-balance">
                  Flat No.13/A, 1st Floor, Block C, Sri Sai Krupa Appartment,
                  Ramakrishna Nagar, Madeenaguda,Hyderabad-500049
                </span>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 text-[#F47C20]" />
                <span>info@chakrafinances.com</span>
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
      <div className="fixed bottom-8 right-8 group z-50">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer shadow-lg">
          <a
            href="https://wa.me/919030972851"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Chakra-Financial-Services/61587570840796/"
          target="_blank"
          rel="noreferrer"
          className="absolute w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-[90px] group-hover:-translate-y-[10px] transition-all duration-300"
        >
          <FaFacebookF />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/chakrafinancialservices?igsh=N2Y0ajIwYjRyY2h6"
          target="_blank"
          rel="noreferrer"
          className="absolute w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-[65px] group-hover:-translate-y-[65px] transition-all duration-300 delay-75"
        >
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="absolute w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-[5px] group-hover:-translate-y-[90px] transition-all duration-300 delay-150"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
