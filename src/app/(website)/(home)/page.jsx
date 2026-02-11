"use client";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div>
      <Navbar active="home" />
      <Banner />
      <MissionVisionKeyPerson />
      <HowItWorks />
      <ServicesCarousel />
      <Footer />
    </div>
  );
}

export default Home;

export const Banner = () => {
  const banners = [
    {
      id: 1,
      image: "https://chakrafin.com/images/bannerimg5.jpg",
      title: "Banner image",
    },
    {
      id: 2,
      image: "https://chakrafin.com/images/bannerimg4.avif",
      title: "Banner image",
    },
    {
      id: 3,
      image: "https://chakrafin.com/images/bannerimg2.avif",
      title: "Banner image",
    },
    {
      id: 4,
      image: "https://chakrafin.com/images/bannerimg3.jpg",
      title: "Banner image",
    },
  ];
  const [visionOpen, setVisionOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <>
      {/* Banner */}
      <div className="relative w-full min-h-[60vh] lg:min-h-[65vh]  top-24  overflow-hidden max-w-7xl mx-auto">
        {/* ================= IMAGES ================= */}
        {banners.map((banner, i) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-fill"
            />
          </div>
        ))}

        {/* ================= DARK OVERLAY ================= */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* ================= TEXT CONTENT ================= */}
        <div className="absolute inset-0 z-[2] flex items-center">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                Grow Your Capital <br />
                with Smarter Investment
              </h2>

              <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                Grow your capital with smarter investments designed to maximize
                returns and minimize risk.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-white text-[#1E6FB8] font-semibold hover:scale-[1.03] transition"
                >
                  Contact Us
                </a>

                <a
                  href="/instantloan"
                  className="px-6 py-3 rounded-full bg-[#F47C20] text-white font-semibold hover:scale-[1.03] transition"
                >
                  Instant Loan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTROLS LAYER ================= */}
        <div className="absolute inset-0 z-[3] pointer-events-none">
          {/* Prev */}
          <button
            onClick={() =>
              setIndex((index - 1 + banners.length) % banners.length)
            }
            className="pointer-events-auto absolute left-6 top-1/2 -translate-y-1/2 
                 bg-black/40 hover:bg-black/60 text-white 
                 w-10 h-10 rounded-full flex items-center justify-center"
          >
            ❮
          </button>

          {/* Next */}
          <button
            onClick={() => setIndex((index + 1) % banners.length)}
            className="pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 
                 bg-black/40 hover:bg-black/60 text-white 
                 w-10 h-10 rounded-full flex items-center justify-center"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="max-w-7xl mx-auto pt-24 ">
        <section id="about" className="bg-[#F4F6F8] py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <h2 className="text-xl md:text-3xl text-center font-bold text-[#2B2B2B] mb-4">
              About Us
            </h2>
            <p className="text-sm md:text-base text-justify text-[#374151] leading-relaxed mb-10 px-8 lg:px-12">
              <strong>Chakra Financial Services</strong> is a client-focused
              financial consultancy dedicated to supporting individuals and
              businesses with practical, transparent, and result-oriented
              financial solutions. Our approach is built on understanding real
              financial needs and delivering services that are aligned with
              long-term goals rather than short-term gains.
              <br />
              We work closely with trusted financial institutions and service
              partners to offer support across loans, insurance, and structured
              financial solutions. By combining industry knowledge with
              personalized attention, we help our clients navigate financial
              decisions with clarity and confidence.
              <br />
              At Chakra Financial Services, we believe in responsible advisory,
              ethical practices, and building enduring relationships that create
              measurable value over time.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

// Mission VisionKeyPerson
export const MissionVisionKeyPerson = () => {
  const [active, setActive] = useState(null);
  const toggle = (id) => setActive(active === id ? null : id);

  return (
    <section className="bg-[#F3F4F6] py-16 md:py-24 overflow-hidden px-5 lg:px-18">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ================= LEFT ================= */}
          <div className="space-y-20">
            {/* ================= VISION ================= */}
            <div className="relative pl-20">
              {/* BLOCK RAIL (reserved space) */}
              <div
                className={`hidden lg:block absolute left-0 top-2 z-20
                transition-transform duration-500 ease-in-out
                ${active === 1 ? "translate-y-40" : "translate-y-0"}`}
              >
                <div className="w-20 h-20 bg-[#FF9A3C]" />
                <div className="w-28 h-28 bg-[#F47C20] mt-6" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 bg-[#F47C20] text-white p-8 md:p-12 max-w-lg">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  VISION
                </h2>

                <p className="text-sm md:text-base leading-relaxed">
                  Our vision is to build a financially stronger community by
                  bridging the gap between financial needs and the right
                  solutions
                  {active !== 1 && (
                    <span
                      onClick={() => toggle(1)}
                      className="underline font-semibold cursor-pointer"
                    >
                      Read more...
                    </span>
                  )}
                </p>

                {active === 1 && (
                  <p className="mt-4">
                    We strive to bring transparency, ethical practices, and
                    modern financial advisory to every client we serve, enabling
                    sustainable growth for individuals and enterprises alike.{" "}
                    <br />
                    Through trust-driven relationships and value-based services,
                    we aim to contribute to longterm economic well-being.
                    <span
                      onClick={() => toggle(1)}
                      className="ml-1 underline font-semibold cursor-pointer"
                    >
                      Hide
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* ================= MISSION ================= */}
            <div className="relative pr-20">
              {/* BLOCK RAIL */}
              <div
                className={`hidden lg:block absolute right-0 top-5 z-20
                transition-transform duration-500 ease-in-out
                ${active === 2 ? "translate-y-30" : "translate-y-0"}`}
              >
                <div className="w-20 h-20 bg-[#0F4C81]" />
                <div className="w-28 h-28 bg-[#1E6FB8] mt-6" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 bg-[#1E6FB8] text-white p-8 md:p-12 max-w-lg">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  MISSION
                </h2>

                <p className="text-sm md:text-base leading-relaxed">
                  Our mission is to empower our clients with the right financial
                  tools, knowledge, and access to opportunities
                  {active !== 2 && (
                    <span
                      onClick={() => toggle(2)}
                      className="underline font-semibold cursor-pointer"
                    >
                      Read more...
                    </span>
                  )}
                </p>

                {active === 2 && (
                  <p className="mt-4">
                    By combining professional expertise with a human approach,
                    we simplify complex financial processes and create
                    meaningful financial progressand create meaningful financial
                    progress for every client we serve.
                    <span
                      onClick={() => toggle(2)}
                      className="ml-1 underline font-semibold cursor-pointer"
                    >
                      Hide
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative pl-20">
            {/* BLOCK RAIL */}
            <div
              className={`hidden lg:block absolute left-0 top-10 z-20
              transition-transform duration-500 ease-in-out
              ${active === 3 ? "translate-y-100" : "translate-y-0"}`}
            >
              <div className="w-20 h-20  bg-[#1E6FB8]" />
              <div className="w-28 h-28 bg-[#F47C20] mt-6" />
            </div>

            {/* KEY PERSON */}
            <div
              className="relative z-10 p-8 md:p-12 max-w-md
              bg-gradient-to-br from-[#F47C20] via-white to-[#1E6FB8]"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Key Person
              </h3>

              <p className="text-[#1E6FB8] font-semibold text-lg">
                CHANDRA SENA REDDY
              </p>
              <p className="underline text-black">Managing Partner</p>
              <p className="mb-4 font-medium text-black">
                Chakra Financial Services
              </p>

              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                I am honored to welcome you to our organization’s website. As
                the
                <strong>Managing Partner of Chakra Financial Services</strong>,
                it is both a privilege and a pleasure to convey my thoughts and
                aspirations through this digital platform.
              </p>

              {active !== 3 && (
                <button
                  onClick={() => toggle(3)}
                  className="mt-4 underline font-semibold text-[#F47C20]"
                >
                  Read more...
                </button>
              )}

              {active === 3 && (
                <div className="mt-4 space-y-3 text-gray-900">
                  <p>
                    Since our inception, Chakra Financial Servcies has been
                    dedicated to a vision of excellence, innovation, and service
                    to our customers, employees, and communities. We have come a
                    long way, achieved significant milestones, and weathered
                    various challenges. Throughout this journey, one constant
                    has remained unchanged – our unwavering commitment to
                    delivering value and making a positive impact.
                  </p>

                  <div className="mt-6 text-center">
                    <p className="font-medium">
                      Thank you for your trust and support.
                    </p>
                    <p className="italic mt-1">Warm regards,</p>
                    <p className="font-semibold">Chakra Financial Services</p>
                    <p className="text-sm opacity-70">[Data Form]</p>
                  </div>

                  <button
                    onClick={() => toggle(3)}
                    className="underline font-semibold text-[#1E6FB8]"
                  >
                    Hide
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How it works
const steps = [
  {
    id: 1,
    title: "Select Amount and Terms",
    desc: "Choose the loan amount and repayment terms that suit your financial goals.",
  },
  {
    id: 2,
    title: " Enter Your Personal Information",
    desc: " Provide your details securely to start the loan application process.",
  },
  {
    id: 3,
    title: "Get Loan Approved in 48 Hours",
    desc: "Quick and efficient approval process to get your loan in just two days.",
  },
];

export const HowItWorks = () => {
  const [active, setActive] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  /* 🔁 AUTO SLIDE (MOBILE ONLY) */
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <section className="bg-gradient-to-br from-[#4b0bbf] via-[#1E6FB8] to-[#3a0a9e] px-6 py-20 rounded-4xl   mx-8 md:mx-18">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          {/* Small label */}
          <p className="uppercase font-semibold tracking-widest text-[#F47C20] text-xl opacity-80 mb-3">
            How it works
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-16">
            Get Your Loan in 3 Easy Steps
          </h2>

          {/* Steps */}
          <div className="hidden md:flex justify-between gap-14">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex-1"
                onMouseEnter={() => setActive(step.id)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Number */}
                <div
                  className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center
                text-3xl font-bold transition-all duration-300
                ${
                  active === step.id
                    ? "bg-white text-purple-700 scale-110"
                    : "bg-purple-300/20 text-white"
                }`}
                >
                  {step.id}
                </div>

                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className=" absolute top-0 right-[-50px] text-white/70 text-4xl">
                    →
                  </div>
                )}

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm opacity-80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          {/* ================= MOBILE VIEW (AUTO SLIDER) ================= */}
          <div className="md:hidden overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${mobileIndex * 100}%)`,
              }}
            >
              {steps.map((step) => (
                <div key={step.id} className="min-w-full px-6">
                  <div className="flex flex-col items-center">
                    {/* Number */}
                    <div className="w-16 h-16 rounded-full bg-white text-[#1E6FB8] flex items-center justify-center text-3xl font-bold">
                      {step.id}
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm opacity-80 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === mobileIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// our services carousel
import Image from "next/image";
const services = [
  { id: 1, title: "Bank 1", image: "/bank1.png" },
  { id: 2, title: "Bank 2", image: "/bank2.png" },
  { id: 3, title: "Bank 3", image: "/bank3.png" },
  { id: 4, title: "Bank 4", image: "/bank4.png" },
  { id: 5, title: "Bank 5", image: "/bank5.png" },
  { id: 6, title: "Bank 6", image: "/bank6.png" },
  { id: 7, title: "Bank 7", image: "/bank7.png" },
  { id: 8, title: "Bank 8", image: "/bank8.png" },
  { id: 9, title: "Bank 9", image: "/bank1.png" },
  { id: 10, title: "Bank 10", image: "/bank2.png" },
  { id: 11, title: "Bank 11", image: "/bank3.png" },
  { id: 12, title: "Bank 12", image: "/bank4.png" },
  { id: 13, title: "Bank 13", image: "/bank5.png" },
  { id: 14, title: "Bank 14", image: "/bank6.png" },
  { id: 15, title: "Bank 15", image: "/bank7.png" },
  { id: 16, title: "Bank 16", image: "/bank8.png" },
];
/* ================= COMPONENT ================= */
export const ServicesCarousel = () => {
  const visibleCards = 4;
  const [index, setIndex] = useState(0);

  /* 🔁 AUTO SCROLL */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const maxIndex = services.length - visibleCards;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000); // speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white px-18">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#1E6FB8] mb-12">
          Our Beloved Clients
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-2 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] px-2"
              >
                <div className="flex flex-col items-center ">
                  {/* LOGO (30–40px only) */}
                  <div className="flex items-center justify-center h-20 ">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={100}
                      height={120}
                      className=" w-full h-auto object-contain "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
