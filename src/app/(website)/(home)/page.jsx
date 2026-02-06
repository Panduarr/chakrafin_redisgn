"use client";
import Navbar from "@/app/components/shared/Navbar";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div>
      <Navbar active="home" />
      <Banner />
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
      <div className="relative w-full h-[80vh] overflow-hidden max-w-7xl mx-auto">
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

        {/* Prev */}
        <button
          onClick={() =>
            setIndex((index - 1 + banners.length) % banners.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ❮
        </button>

        {/* Next */}
        <button
          onClick={() => setIndex((index + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-10 -translate-y-1/2 max-w-xl">
        <h2 className="text-5xl font-bold text-white leading-tight mb-4">
          Grow Your Capital <br />
          with Smarter Investment
        </h2>

        <p className="text-lg text-white/90 leading-relaxed mb-6">
          Grow your capital with smarter investments designed to maximize
          returns and minimize risk. Make informed financial decisions today to
          secure a stronger, wealthier future.
        </p>

        <div className="flex gap-4">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-white text-[#1E6FB8] font-semibold
                 hover:bg-[#F4F6F8] transition hover:scale-[1.03]"
          >
            Contact Us
          </a>

          <a
            href="/instantloan"
            className="px-6 py-3 rounded-full bg-[#F47C20] text-white font-semibold
                 hover:opacity-90 transition hover:scale-[1.03]"
          >
            Instant Loan
          </a>
        </div>
      </div>

      <div className="bg-[#F4F6F8] py-14">
        <h4 className="text-sm font-semibold text-center text-[#F47C20] uppercase tracking-wide">
          How It Works
        </h4>
        <h2 className="text-3xl font-bold text-center text-[#1E6FB8] mt-2 mb-10">
          Get Your Loan in 3 Easy Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 ">
          <div
            className="grid place-content-center place-items-center bg-white rounded-2xl p-6 text-center border border-dashed border-[#F47C20]/40 hover:scale-[1.03] transition shadow-sm">
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
          <div  className="grid place-content-center place-items-center bg-white rounded-2xl p-6 text-center border border-dashed border-[#F47C20]/40 hover:scale-[1.03] transition shadow-sm">
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
          <div  className="grid place-content-center place-items-center bg-white rounded-2xl p-6 text-center border border-dashed border-[#F47C20]/40 hover:scale-[1.03] transition shadow-sm">
            <img
              className="w-20 mx-auto mb-4 object-contain"
              src="https://chakrafin.com/images/loanapprovedicon.png"
              alt="image"
            />
            <h3 className="text-xl font-semibold text-[#F47C20] mb-2">
              Get Loan Approved in 48 Hours
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Quick and efficient approval process to get your loan in just two
              days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
