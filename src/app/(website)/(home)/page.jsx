"use client";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div>
      <Navbar active="home" />
      <Banner />
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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
        <div className="bg-[#F4F6F8] py-14 max-w-7xl mx-auto">
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
        </div>

        {/* About */}
        <section id="about" className="bg-[#F4F6F8] py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            {/* Heading */}
            <h2 className="text-xl md:text-3xl text-center font-bold text-[#2B2B2B] mb-4">
              About Us
            </h2>

            {/* Intro */}
            <p className="text-sm md:text-base text-justify text-[#374151] leading-relaxed mb-10">
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

            {/* Content Grid */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="grid gap-4">
                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Vision */}
                  <div className="group relative border-2 border-[#F47C20] p-2 rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:bg-white">
                    <h3 className="text-xl text-center font-semibold text-[#2B2B2B] mb-2">
                      Our Vision
                    </h3>

                    <button className="mx-auto flex items-center gap-1 text-sm font-semibold text-[#F47C20] transition-all duration-300 group-hover:gap-2 group-hover:underline">
                      Read
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <p className="mt-4 text-sm md:text-base text-[#374151] leading-relaxed bg-[#F4F6F8] p-4 rounded-xl opacity-0 translate-y-2 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[500px]">
                      Our vision is to build a financially stronger community by
                      bridging the gap between financial needs and the right
                      solutions. We strive to bring transparency, ethical
                      practices, and modern financial advisory to every client
                      we serve, enabling sustainable growth for individuals and
                      enterprises alike.
                      <br />
                      <br />
                      Through trust-driven relationships and value-based
                      services, we aim to contribute to long-term economic
                      well-being.
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="group relative border-2 border-[#F47C20] p-2 rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:bg-white">
                    <h3 className="text-lg md:text-xl text-center font-semibold text-[#2B2B2B] mb-3">
                      Our Mission
                    </h3>

                    <button className="mx-auto flex items-center gap-1 text-sm font-semibold text-[#F47C20] transition-all duration-300 group-hover:gap-2 group-hover:underline">
                      Read
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <p className="mt-4 text-sm md:text-base text-[#374151] leading-relaxed bg-[#F4F6F8] p-4 rounded-xl opacity-0 translate-y-2 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                      Our mission is to empower our clients with the right
                      financial tools, knowledge, and access to opportunities
                      that support growth and security. By combining
                      professional expertise with a human approach, we simplify
                      complex financial processes and create meaningful
                      financial progress.
                    </p>
                  </div>
                </div>

                {/* Key Person */}
                <div className="group">
                  <div className="max-w-7xl mx-auto border-4 border-[#1E6FB8] rounded-2xl px-1 lg:px-2 py-1 lg:py-2">
                    <div className="flex flex-col lg:flex-row justify-center gap-5 py-5">
                      <div className="bg-gradient-to-r from-[#7FA9E6] via-[#C59A85] to-[#F47C20] rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold text-black underline mt-2">
                          Key Person
                        </h2>
                      </div>

                      <div className="pt-5 text-center lg:text-left">
                        <h3 className="text-xl text-[#F47C20] font-semibold">
                          CHANDRA SENA REDDY
                        </h3>
                        <h4 className="text-lg text-[#2B2B2B] underline">
                          Managing Partner
                        </h4>
                        <h4 className="text-lg font-semibold text-[#2B2B2B]">
                          Chakra Financial Services
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-[#2B2B2B] leading-relaxed md:leading-loose text-justify p-5 md:px-6 rounded-xl bg-white/70 opacity-0 translate-y-3 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[1400px]">
                      I am honored to welcome you to our organization’s website.
                      As the
                      <strong className="font-semibold">
                        Managing Partner of Chakra Financial Services,
                      </strong>
                      it is both a privilege and a pleasure to convey my
                      thoughts and aspirations through this digital platform.
                      Since our inception, Chakra Financial Servcies has been
                      dedicated to a vision of excellence, innovation, and
                      service to our customers, employees, and communities. We
                      have come a long way, achieved significant milestones, and
                      weathered various challenges. Throughout this journey, one
                      constant has remained unchanged – our unwavering
                      commitment to delivering value and making a positive
                      impact.
                      <br />
                      <br />
                      Our success story is a testament to the dedication and
                      hard work of our talented team, the trust and support of
                      our customers, and the resilience of our organization. As
                      we embrace the digital age and navigate an ever-evolving
                      business landscape, we remain steadfast in our core values
                      and principles. In an era of rapid change, we understand
                      the importance of adaptability and staying ahead of the
                      curve. Therefore, we continue to invest in research and
                      development, embrace sustainable practices, and foster a
                      culture of continuous learning and growth.
                      <br />
                      <br />
                      At Chakra Financial Servcies, we are not just in the
                      business of Financial Services, but we are also committed
                      to being responsible corporate citizens. We strive to make
                      a positive social and environmental impact through our
                      initiatives and partnerships. This website serves as a
                      window into our world, where you can explore our
                      products/services, learn about our history and values, and
                      stay updated on our latest endeavors. We value your
                      feedback and look forward to engaging with you through
                      this platform. As we move forward, I invite you to join us
                      on this exciting journey. Together, we can shape a
                      brighter future and create lasting value for all
                      stakeholders.
                      <span className="block mt-6 text-center text-base font-medium text-[#2B2B2B]">
                        Thank you for your trust and support.
                        <br />
                        <span className="italic">Warm regards,</span>
                        <br />
                        <strong>Chakra Financial Services</strong>
                        <br />
                        <span className="text-sm opacity-80">[Data Form]</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center md:justify-end">
                <img
                  className="w-full  rounded-3xl object-contain transition transform hover:scale-[1.03]"
                  src="https://chakrafin.com/images/aboutusimg3.webp"
                  alt="About Chakra Financial Services"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
