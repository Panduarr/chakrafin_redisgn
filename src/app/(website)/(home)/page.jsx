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
      <div className="relative w-full h-[80vh] overflow-hidden">
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
      <div className="absolute top-50 left-10">
        <h2 className="text-6xl text-white font-bold py-4">
          Grow Your Capital <br />
          with Smarter Investment
        </h2>
        <p className="text-xl text-white text-justify max-w-xl pb-4">
          Grow your capital with smarter investments designed to maximize
          returns and minimize risk, Make informed financial decisions today to
          secure a stronger, wealthier future.
        </p>
        <button className="bg-white hover:bg-green-300 px-4 py-2 rounded-4xl text-xl text-gray-600 font-bold "><a href="/contact">Contact Us</a></button>
        
        <button className="bg-white hover:bg-green-300 px-4 py-2 rounded-4xl text-xl text-gray-600 font-bold ml-4 "><a href="/instantloan">Instant Loan</a></button>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-center text-pink-500 py-4">How It Works</h4>
        <h2 className="text-4xl font-bold text-center py-2">Get Your Loan in 3 Easy Steps</h2>
        <div className="grid grid-cols-3 place-items-center place-content-around py-4 ">
          <div className="grid place-content-center place-items-center gap-3 border-2 border-dashed border-orange-950 p-4 rounded-4xl hover:scale-[1.03]">
            <img className="w-25 h-auto object-contain" src="https://chakrafin.com/images/calculatoricon.png" alt="image" />
            <h3 className="text-2xl font-semibold text-orange-400">Select Amount and Terms</h3>
            <p className="text-lg text-justify max-w-sm">Choose the loan amount and repayment terms that suit your financial goals.</p>
          </div>
           <div className="grid place-content-center place-items-center gap-3 border-2 border-dashed border-orange-950 p-4 rounded-4xl hover:scale-[1.03]">
            <img className="w-25 h-auto object-contain" src="https://chakrafin.com/images/enterpersonal.png" alt="image" />
            <h3 className="text-2xl font-semibold text-orange-400">Enter Your Personal Information</h3>
            <p className="text-lg text-justify max-w-sm">Provide your details securely to start the loan application process.</p>
          </div>
          <div className="grid place-content-center place-items-center gap-3 border-2 border-dashed border-orange-950 p-4 rounded-4xl hover:scale-[1.03]">
            <img className="w-25 h-auto object-contain" src="https://chakrafin.com/images/loanapprovedicon.png" alt="image" />
            <h3 className="text-2xl  font-semibold text-orange-400">Get Loan Approved in 48 Hours</h3>
            <p className="text-lg text-justify max-w-sm">Quick and efficient approval process to get your loan in just two days.</p>
          </div>
        </div>
      </div>

    </>
  );
};
