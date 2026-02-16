"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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

  const navLinks = [
    { label: "Home", href: "/", match: "home" },
    { label: "About Us", href: "/#about", match: "#about" },
    { label: "Services", href: "/#services", match: "#services" },
    { label: "Clients", href: "/#clients", match: "#clients" },
    { label: "Contact Us", href: "/#contact", match: "#contact" },
  ];
  const isActive = (item) => {
    if (item.match === "home") {
      return pathname === "/" && hash === "";
    }

    if (item.match.startsWith("#")) {
      return pathname === "/" && hash === item.match;
    }

    return pathname === item.match;
  };

  return (
    <>
      {/* Top Bar (Desktop Only) */}
      {/* <div className="max-w-7xl mx-auto">
        <div className="lg:fixed lg:w-full lg:z-5 hidden  md:flex bg-white justify-between px-10 py-1 text-sm max-w-7xl mx-auto border-b-2 border-[#1E6FB8]  ">
          <div className="flex gap-4 text-[#F47C20]">
            <a
              className="px-2  border-x border-black/40 hover:opacity-80"
              href="https://www.facebook.com/people/Chakra-Financial-Services/61587570840796/"
            >
              <FaFacebookF />
            </a>
            <a
              className="px-2 border-x border-black/40 hover:opacity-80"
              href="https://www.instagram.com/chakrafinancialservices?igsh=N2Y0ajIwYjRyY2h6"
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
      </div> */}

      {/* Main Navbar */}
      <div className="bg-white opacity-90 shadow-sm w-full fixed lg:w-full z-2 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-1">
          {/* Logo */}
          <img
            className="w-32 lg:w-44 h-auto"
            src="https://chakrafin.com/images/logo.png"
            alt="logo"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:items-center gap-x-4 text-base font-medium">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={`px-4 py-2 rounded-full transition hover:scale-[1.03] ${isActive(item) ? "text-[#1E6FB8] underline" : "text-gray-700 hover:text-[#F47C20]"}`}
              >
                <Link
                  href={item.href}
                  onClick={() =>
                    setHash(item.match.startsWith("#") ? item.match : "")
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/instantloan"
                className="px-5 py-3 rounded-full text-sm font-semibold bg-[#F47C20] text-white hover:scale-[1.03] transition"
              >
                Work With Us
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200 fixed">
            <ul className="flex flex-col gap-2 p-4 text-base font-medium">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setHash(item.match.startsWith("#") ? item.match : "");
                      setOpen(false);
                    }}
                    className={`block px-4 py-2 rounded-lg ${
                      isActive(item)
                        ? "bg-[#1E6FB8] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <Link
                href="/instantloan"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-4 py-2 rounded-full bg-[#F47C20] text-white font-semibold"
              >
               Work With Us
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
