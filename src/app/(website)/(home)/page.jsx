"use client";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div>
      <Navbar active="home" />
      <Banner />
      <HowItWorks />
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
      <div className="relative w-full h-[65vh] overflow-hidden max-w-7xl mx-auto">
        {/* Images */}
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay (optional but recommended) */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center z-[2]">
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

        {/* Prev */}
        <button
          onClick={() =>
            setIndex((index - 1 + banners.length) % banners.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[3] bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ❮
        </button>

        {/* Next */}
        <button
          onClick={() => setIndex((index + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[3] bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3 z-[3]">
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

      <div className="max-w-7xl mx-auto ">
        {/* <div className="bg-[#F4F6F8] py-14 max-w-7xl mx-auto">
          <h4 className="text-sm font-semibold text-center text-[#F47C20] uppercase tracking-wide">
            How It Works
          </h4>
          <h2 className="text-3xl font-bold text-center text-[#1E6FB8] mt-2 mb-10">
            Get Your Loan in 3 Easy Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 ">
            <div className="grid place-content-center place-items-center bg-white rounded-2xl p-6 text-center border border-dashed border-[#F47C20]/40 hover:scale-[1.03] transition shadow-sm">
              <img
                className="w-20 mx-auto mb-4 object-contain"
                src="https://chakrafin.com/images/calculatoricon.png"
                alt="image"
              />
              <h3 className="text-xl font-semibold text-[#F47C20] mb-2">
                Select Amount and Terms
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Choose the loan amount and repayment terms that suit your
                financial goals.
              </p>
            </div>
            <div className="grid place-content-center place-items-center bg-white rounded-2xl p-6 text-center border border-dashed border-[#F47C20]/40 hover:scale-[1.03] transition shadow-sm">
              <img
                className="w-20 mx-auto mb-4 object-contain"
                src="https://chakrafin.com/images/enterpersonal.png"
                alt="image"
              />
              <h3 className="text-xl font-semibold text-[#F47C20] mb-2">
                Enter Your Personal Information
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Provide your details securely to start the loan application
                process.
              </p>
            </div>
            <div className="grid place-content-center place-items-center bg-white rounded-2xl p-6 text-center border border-dashed border-[#F47C20]/40 hover:scale-[1.03] transition shadow-sm">
              <img
                className="w-20 mx-auto mb-4 object-contain"
                src="https://chakrafin.com/images/loanapprovedicon.png"
                alt="image"
              />
              <h3 className="text-xl font-semibold text-[#F47C20] mb-2">
                Get Loan Approved in 48 Hours
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Quick and efficient approval process to get your loan in just
                two days.
              </p>
            </div>
          </div>
        </div> */}

        {/* About */}
        <section id="about" className="bg-[#F4F6F8] py-14">
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

            <section className="max-w-7xl mx-auto px-4 md:px-6 py-0">
              <div className="flex flex-col lg:flex lg:flex-row gap-8 items-stretch  transition-all duration-500 ease-in-out">
                {/* ================= LEFT SIDE (EXPANDS) ================= */}
                <div
                  className={`space-y-8 transition-all duration-500 ease-in-out ${active ? "lg:w-[75%]" : "lg:w-[50%]"}`}
                >
                  {/* Vision + Mission */}
                  <div className="flex flex-col lg:flex lg:flex-row gap-6">
                    {/* Vision */}
                    <div className="border-2 border-[#F47C20] rounded-3xl p-4 bg-white flex-1">
                      <h3 className="text-xl text-center font-semibold text-[#2B2B2B] mb-3">
                        Our Vision
                      </h3>

                      <div className="bg-[#F4F6F8] p-4 rounded-2xl text-sm md:text-base text-[#374151] leading-relaxed">
                        <p>
                          Our vision is to build a financially stronger
                          community by bridging the gap between financial needs
                          and the right solutions
                          {active !== 1 && (
                            <span
                              onClick={() => toggle(1)}
                              className="text-[#F47C20] font-semibold cursor-pointer "
                            >
                              Read...
                            </span>
                          )}
                        </p>

                        {active === 1 && (
                          <p className="mt-3">
                            We strive to bring transparency, ethical practices,
                            and modern financial advisory to every client we
                            serve, enabling sustainable growth for individuals
                            and enterprises alike. <br />
                            Through trust-driven relationships and value-based
                            services, we aim to contribute to longterm economic
                            well-being.
                            <span
                              onClick={() => toggle(1)}
                              className="text-[#F47C20] font-semibold cursor-pointer"
                            >
                              Hide
                            </span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Mission */}
                    <div className="border-2 border-[#F47C20] rounded-3xl p-4 bg-white flex-1">
                      <h3 className="text-xl text-center font-semibold text-[#2B2B2B] mb-3">
                        Our Mission
                      </h3>

                      <div className="bg-[#F4F6F8] p-4 rounded-2xl text-sm md:text-base text-[#374151] leading-relaxed">
                        <p>
                          Our mission is to empower our clients with the right
                          financial tools, knowledge, and access to
                          opportunities
                          {active !== 2 && (
                            <span
                              onClick={() => toggle(2)}
                              className="text-[#F47C20] font-semibold cursor-pointer"
                            >
                              Read...
                            </span>
                          )}
                        </p>

                        {active === 2 && (
                          <p className="mt-3">
                            By combining professional expertise with a human
                            approach, we simplify complex financial processes
                            and create meaningful financial progressand create
                            meaningful financial progress for every client we
                            serve.
                            <span
                              onClick={() => toggle(2)}
                              className="text-[#F47C20] font-semibold cursor-pointer"
                            >
                              Hide
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ================= KEY PERSON ================= */}
                  <div className="border-4 border-[#1E6FB8] rounded-2xl p-4 bg-white">
                    <div className="flex flex-col lg:flex lg:flex-row justify-around gap-5 items-center">
                      <div className="bg-gradient-to-r from-[#7FA9E6] via-[#C59A85] to-[#F47C20] rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold text-black underline">
                          Key Person
                        </h2>
                      </div>

                      <div>
                        <h3 className="text-xl text-[#F47C20] font-semibold">
                          CHANDRA SENA REDDY
                        </h3>
                        <h4 className="text-lg underline text-[#2B2B2B]">
                          Managing Partner
                        </h4>
                        <h4 className="text-lg font-semibold text-[#2B2B2B]">
                          Chakra Financial Services
                        </h4>
                      </div>
                    </div>

                    <div className=" text-sm md:text-base text-[#2B2B2B] leading-relaxed mt-3 transition-all duration-300 ease-in-out">
                      <p>
                        I am honored to welcome you to our organization’s
                        website. As the
                        <strong>
                          Managing Partner of Chakra Financial Services
                        </strong>
                        , it is both a privilege and a pleasure to convey my
                        thoughts and aspirations through this digital platform.
                      </p>

                      {active !== 3 && (
                        <button
                          onClick={() => toggle(3)}
                          className="mt-3 text-[#F47C20] font-semibold hover:underline"
                        >
                          Read more...
                        </button>
                      )}

                      {active === 3 && (
                        <div className="mt-4 space-y-3">
                          <p>
                            Since our inception, Chakra Financial Servcies has
                            been dedicated to a vision of excellence,
                            innovation, and service to our customers, employees,
                            and communities. We have come a long way, achieved
                            significant milestones, and weathered various
                            challenges. Throughout this journey, one constant
                            has remained unchanged – our unwavering commitment
                            to delivering value and making a positive impact.
                          </p>

                          <p>
                            Our success story is a testament to the dedication
                            and hard work of our talented team, the trust and
                            support of our customers, and the resilience of our
                            organization. As we embrace the digital age and
                            navigate an ever-evolving business landscape, we
                            remain steadfast in our core values and principles.
                            In an era of rapid change, we understand the
                            importance of adaptability and staying ahead of the
                            curve. Therefore, we continue to invest in research
                            and development, embrace sustainable practices, and
                            foster a culture of continuous learning and growth.
                          </p>

                          <p>
                            At Chakra Financial Servcies, we are not just in the
                            business of Financial Services, but we are also
                            committed to being responsible corporate citizens.
                            We strive to make a positive social and
                            environmental impact through our initiatives and
                            partnerships. This website serves as a window into
                            our world, where you can explore our
                            products/services, learn about our history and
                            values, and stay updated on our latest endeavors. We
                            value your feedback and look forward to engaging
                            with you through this platform. As we move forward,
                            I invite you to join us on this exciting journey.
                            Together, we can shape a brighter future and create
                            lasting value for all stakeholders.
                          </p>

                          <div className="mt-6 text-center">
                            <p className="font-medium">
                              Thank you for your trust and support.
                            </p>
                            <p className="italic mt-1">Warm regards,</p>
                            <p className="font-semibold">
                              Chakra Financial Services
                            </p>
                            <p className="text-sm opacity-70">[Data Form]</p>
                          </div>

                          <button
                            onClick={() => toggle(3)}
                            className="text-[#F47C20] font-semibold hover:underline"
                          >
                            Hide
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT IMAGE (SHRINKS) ================= */}
                <div
                  className={`transition-all duration-500 ease-in-out ${active ? "lg:w-[25%]" : "lg:w-[50%]"}`}
                >
                  <img
                    src="https://chakrafin.com/images/aboutusimg3.webp"
                    alt="About Chakra Financial Services"
                    className="w-full h-full max-h-[520px] object-cover rounded-3xl"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};


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

  return (
    <section className="bg-gradient-to-br from-[#4b0bbf] via-[#1E6FB8] to-[#3a0a9e] px-8 py-20 rounded-4xl mx-18">
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
        <div className="relative flex flex-col md:flex-row justify-between gap-14">
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
                <div className="hidden md:block absolute top-0 right-[-50px] text-white opacity-70 text-4xl">
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
      </div>
    </section>
  );
};