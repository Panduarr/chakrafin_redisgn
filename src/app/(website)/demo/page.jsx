// const steps = [
//   {
//     id: 1,
//     title: "Select Amount and Terms",
//     desc: "Choose the loan amount and repayment terms that suit your financial goals.",
//   },
//   {
//     id: 2,
//     title: " Enter Your Personal Information",
//     desc: " Provide your details securely to start the loan application process.",
//   },
//   {
//     id: 3,
//     title: "Get Loan Approved in 48 Hours",
//     desc: "Quick and efficient approval process to get your loan in just two days.",
//   },
// ];

// export const HowItWorks = () => {
//   const [active, setActive] = useState(null);
//   const [mobileIndex, setMobileIndex] = useState(0);

//   /* 🔁 AUTO SLIDE (MOBILE ONLY) */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMobileIndex((prev) => (prev + 1) % steps.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto">
//       <section className="bg-[#0a5aa5] opacity-70 px-5 lg:px-18 py-10 ">
//         <div className="max-w-7xl mx-auto px-6 text-center text-white">
//           {/* Small label */}
//           <p className="uppercase font-semibold tracking-widest  text-3xl opacity-80 mb-3">
//             How it works
//           </p>

//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl text-center font-bold mb-16">
//             Get Your Loan in 3 Easy Steps
//           </h2>

//           {/* Steps */}
//           <div className="hidden md:flex justify-between gap-14">
//             {steps.map((step, index) => (
//               <div
//                 key={step.id}
//                 className="relative flex-1"
//                 onMouseEnter={() => setActive(step.id)}
//                 onMouseLeave={() => setActive(null)}
//               >
//                 {/* Number */}
//                 <div
//                   className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center
//                 text-3xl font-bold transition-all duration-300
//                 ${
//                   active === step.id
//                     ? "bg-white text-purple-700 scale-110"
//                     : "bg-purple-300/20 text-white"
//                 }`}
//                 >
//                   {step.id}
//                 </div>

//                 {/* Arrow (desktop only) */}
//                 {index < steps.length - 1 && (
//                   <div className=" absolute top-0 right-[-50px] text-white/70 text-4xl">
//                     →
//                   </div>
//                 )}

//                 {/* Content */}
//                 <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
//                 <p className="mt-3 text-sm opacity-80 leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//           {/* ================= MOBILE VIEW (AUTO SLIDER) ================= */}
//           <div className="md:hidden overflow-hidden">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{
//                 transform: `translateX(-${mobileIndex * 100}%)`,
//               }}
//             >
//               {steps.map((step) => (
//                 <div key={step.id} className="min-w-full px-6">
//                   <div className="flex flex-col items-center">
//                     {/* Number */}
//                     <div className="w-16 h-16 rounded-full bg-white text-[#1E6FB8] flex items-center justify-center text-3xl font-bold">
//                       {step.id}
//                     </div>

//                     {/* Content */}
//                     <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
//                     <p className="mt-3 text-sm opacity-80 leading-relaxed">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Dots */}
//             <div className="flex justify-center gap-2 mt-6">
//               {steps.map((_, i) => (
//                 <span
//                   key={i}
//                   className={`w-2.5 h-2.5 rounded-full transition ${
//                     i === mobileIndex ? "bg-white" : "bg-white/40"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

//  {/* Banner */}
//       {/* <div className="relative w-full min-h-[60vh] lg:min-h-[70vh]  lg:top-17  overflow-hidden max-w-7xl mx-auto"> */}
//       {/* ================= IMAGES ================= */}
//       {/* {banners.map((banner, i) => (
//           <div
//             key={banner.id}
//             className={`absolute inset-0 transition-opacity duration-700 ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src="/home_Banner.png"
//               alt={banner.title}
//               className="w-full h-full object-fill"
//             />
//           </div>
//         ))} */}
//         {/* <div className="absolute inset-0 z-[3] pointer-events-none">
//           {/* Prev */}
//           {/* <button
//             onClick={() =>
//               setIndex((index - 1 + banners.length) % banners.length)
//             }
//             className="pointer-events-auto absolute left-6 top-1/2 -translate-y-1/2
//                  bg-black/40 hover:bg-black/60 text-white
//                  w-10 h-10 rounded-full flex items-center justify-center"
//           >
//             ❮
//           </button> */}

//           {/* Next */}
//           {/* <button
//             onClick={() => setIndex((index + 1) % banners.length)}
//             className="pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2
//                  bg-black/40 hover:bg-black/60 text-white
//                  w-10 h-10 rounded-full flex items-center justify-center"
//           >
//             ❯
//           </button> */}

//           {/* Dots */}
//           {/* <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//             {banners.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`w-3 h-3 rounded-full transition ${
//                   i === index ? "bg-white" : "bg-white/50"
//                 }`}
//               />
//             ))}
//           </div> */}

// import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
// const reviews = [
//   {
//     name: "Kaiser Kaiz",
//     text: "The loan process was smooth and transparent. The team guided me at every step and helped me choose the best financial option. Highly recommended.",
//   },
//   {
//     name: "Rohit Sharma",
//     text: "Chakra Financial Services helped me secure a business loan quickly. Their guidance made the entire process stress-free.",
//   },
//   {
//     name: "Anusha Reddy",
//     text: "Very professional and reliable service. They explained every detail clearly and helped me choose the right home loan.",
//   },
// ];

// function ContactFinance() {
//   const [index, setIndex] = useState(0);
//   const total = reviews.length;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % total);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, [total]);

//   const prev = () => setIndex((index - 1 + total) % total);
//   const next = () => setIndex((index + 1) % total);
//   return (
//     <section
//       id="contact"
//       className=" py-6 lg:pb-10 lg:py-30 lg:-mt-20"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-18 grid lg:grid-cols-2 gap-12 items-start">
//         {/* ---------------- LEFT : FORM ---------------- */}
//         <div className="bg-[#EEF4FB] rounded-2xl shadow-xl p-6 md:p-8 border-t-4 border-[#1E6FB8]">
//           <h3 className="text-xl md:text-2xl font-semibold text-[#1E6FB8] mb-6">
//             Get in Touch
//           </h3>

//           <form className="space-y-5">
//             <input
//               className="input bg-white hover:scale-[1.03]"
//               placeholder="Your Name"
//             />
//             <input
//               className="input bg-white hover:scale-[1.03]"
//               placeholder="Phone Number"
//             />
//             <input
//               className="input bg-white hover:scale-[1.03]"
//               placeholder="Email Address"
//             />
//             <textarea
//               rows="4"
//               className="input bg-white resize-none hover:scale-[1.03]"
//               placeholder="Message"
//             />

//             <button className="w-full bg-[#F47C20] hover:bg-[#d96d1b] text-white py-3 rounded-lg font-medium transition hover:scale-[1.03]">
//               Submit Now
//             </button>
//           </form>
//         </div>

//         {/* ---------------- RIGHT : INFO + REVIEWS ---------------- */}
//         <div className="space-y-8">
//           {/* Contact Info */}
//           <div className="grid sm:grid-cols-2 gap-6">
//             <InfoCard1
//               icon={<Phone size={20} />}
//               title="Call Us"
//               text="+91 93920 37809"
//             />
//             <InfoCard1
//               icon={<Mail size={20} />}
//               title="Email Us"
//               text="info@chakrafin.com"
//             />
//           </div>

//           <InfoCard1
//             icon={<MapPin size={20} />}
//             title="Location"
//             text="101, Sai Surya Residency, Madeenaguda,Hyderabad, Telangana, India - 500049"
//             fullWidth
//           />

//           {/* Reviews */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative border-l-4 border-[#F47C20] overflow-hidden">
//             <h4 className="text-lg md:text-xl font-semibold text-[#1E6FB8] mb-4">
//               Client Reviews
//             </h4>

//             {/* SLIDER */}
//             <div className="relative h-[130px]">
//               {reviews.map((review, i) => (
//                 <div
//                   key={i}
//                   className={`absolute inset-0 transition-all duration-700 ease-in-out
//               ${i === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
//             `}
//                 >
//                   <p className="italic text-gray-600 leading-relaxed text-sm md:text-base">
//                     “{review.text}”
//                   </p>

//                   <p className="mt-4 font-medium text-gray-800">
//                     — {review.name}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* CONTROLS */}
//             <div className="absolute right-4 bottom-4 flex gap-2">
//               <button
//                 onClick={prev}
//                 className="p-2 rounded-full border border-[#1E6FB8] text-[#1E6FB8] hover:bg-[#1E6FB8] hover:text-white transition"
//               >
//                 <ChevronLeft size={18} />
//               </button>

//               <button
//                 onClick={next}
//                 className="p-2 rounded-full border border-[#1E6FB8] text-[#1E6FB8] hover:bg-[#1E6FB8] hover:text-white transition"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- REUSABLE COMPONENT ---------------- */

// const InfoCard1 = ({ icon, title, text, fullWidth }) => (
//   <div
//     className={`bg-white rounded-xl shadow-md p-5 flex gap-4 items-start border-t-4 border-[#1E6FB8] hover:scale-[1.03] ${
//       fullWidth ? "sm:col-span-2" : ""
//     }`}
//   >
//     <div className="text-[#F47C20]">{icon}</div>
//     <div>
//       <h5 className="font-semibold text-[#1E6FB8]">{title}</h5>
//       <p className="text-sm text-gray-600">{text}</p>
//     </div>
//   </div>
// );
// import Image from "next/image";

// const partners = [
//   { name: "HDFC Bank", logo: "/partners/hdfc.png" },
//   { name: "ICICI Bank", logo: "/partners/icici.png" },
//   { name: "Axis Bank", logo: "/partners/axis.png" },
//   { name: "RBL Bank", logo: "/partners/rbl.png" },
//   { name: "Bandhan Bank", logo: "/partners/bandhan.png" },
//   { name: "IndusInd Bank", logo: "/partners/indusind.png" },
//   { name: "YES Bank", logo: "/partners/yes.png" },
//   { name: "IDFC First Bank", logo: "/partners/idfc-first.png" },
//   { name: "Karur Vysya Bank", logo: "/partners/kvb.png" },
//   { name: "Aditya Birla Capital", logo: "/partners/aditya-birla.png" },
//   { name: "Bajaj Finserv", logo: "/partners/bajaj.png" },
//   { name: "Capital First", logo: "/partners/capital-first.png" },
//   { name: "LIC", logo: "/partners/lic.png" },
//   { name: "IDFC", logo: "/partners/idfc.png" },
//   { name: "ICICI Lombard", logo: "/partners/icici-lombard.png" },
//   { name: "IIFL", logo: "/partners/iifl.png" },
//   { name: "Fullerton India", logo: "/partners/fullerton.png" },
// ];

// export default function LendingPartners() {
//   return (
//     <section className="bg-[#f7f7f7] py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-16">
//           Our Lending Partners
//         </h2>

//         {/* Exact grid like image */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-10 justify-items-center">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className=" w-[180px] h-[90px] bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex items-center justify-center"
//             >
//               <Image
//                 src={partner.logo}
//                 alt={partner.name}
//                 width={120}
//                 height={50}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";

function page() {
  return (
    <div>
      <FloatingSocials />
      <ClientReviews />
    </div>
  );
}

export default page;
import { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function FloatingSocials() {
  const [open, setOpen] = useState(false);
  const radius = 120;

  return (
    <div
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* WhatsApp Main */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
      >
        <FaWhatsapp />
      </button>

      {/* Facebook (BOTTOM) */}
      <a
        href="https://www.facebook.com/people/Chakra-Financial-Services/61587570840796/"
        target="_blank"
        rel="noreferrer"
        className={`absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          transform: open
            ? `rotate(190deg) translate(${radius}px) rotate(-190deg)`
            : "translate(-50%, -50%)",
        }}
      >
        <FaFacebookF />
      </a>

      {/* Instagram (MIDDLE) */}
      <a
        href="https://www.instagram.com/chakrafinancialservices?igsh=N2Y0ajIwYjRyY2h6"
        target="_blank"
        rel="noreferrer"
        className={`absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center transition-all duration-300 delay-75 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          transform: open
            ? `rotate(220deg) translate(${radius}px) rotate(-220deg)`
            : "translate(-50%, -50%)",
        }}
      >
        <FaInstagram />
      </a>

      {/* LinkedIn (TOP) */}
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className={`absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center transition-all duration-300 delay-150 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          transform: open
            ? `rotate(250deg) translate(${radius}px) rotate(-250deg)`
            : "translate(-50%, -50%)",
        }}
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}

// import { useEffect } from "react";
// import Image from "next/image";
// import { Star } from "lucide-react";

// const reviews = [
//   {
//     name: "Shivani Sharma",
//     role: "CEO",
//     image: "/reviewer.jpg",
//     text:
//       "Working with Aadi Trademark Private Limited was an absolute game-changer for our business. Their professionalism, creativity, and attention to detail exceeded expectations.",
//   },
//   {
//     name: "Rahul Mehta",
//     role: "Founder",
//     image: "/reviewer2.jpg",
//     text:
//       "The team delivered outstanding quality with excellent communication. Everything was smooth, professional, and on time.",
//   },
//   {
//     name: "Anita Verma",
//     role: "Director",
//     image: "/reviewer3.jpg",
//     text:
//       "Highly reliable and skilled team. They understood our vision perfectly and delivered beyond expectations.",
//   },
// ];
// function ClientReviews() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % reviews.length);
//     }, 4500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-[#F8FAFC] py-24">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <span className="w-2 h-2 bg-orange-500 rounded-full" />
//             <p className="text-sm font-medium text-gray-600">
//               Client Review
//             </p>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
//             What our{" "}
//             <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
//               clients
//             </span>{" "}
//             have to say about <br />
//             working with us
//           </h2>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="relative bg-white rounded-3xl p-10 shadow-xl">

//           {/* TOP BAR (EXACT LAYOUT) */}
//           <div className="flex items-center justify-between mb-8">

//             {/* Google Logo */}
//             <Image src="/google.png" alt="Google" width={90} height={30} />

//             {/* Avatars + Rating (SIDE BY SIDE) */}
//             <div className="flex items-center gap-4">

//               {/* Avatars */}
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4].map((i) => (
//                   <Image
//                     key={i}
//                     src={`/user${i}.jpg`}
//                     alt="User"
//                     width={36}
//                     height={36}
//                     className="rounded-full border-2 border-white"
//                   />
//                 ))}
//               </div>

//               {/* Rating */}
//               <div>
//                 <div className="flex items-center gap-2">
//                   <span className="font-bold text-lg">4.5</span>

//                   {/* Stars */}
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={18}
//                         className="fill-current"
//                         style={{
//                           color: i < 4 ? "#F97316" : "#2563EB",
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-xs text-gray-500">
//                   (1000+ reviews)
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* REVIEW SLIDER */}
//           <div className="relative min-h-[120px]">
//             {reviews.map((review, i) => (
//               <div
//                 key={i}
//                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                   i === index
//                     ? "opacity-100 translate-x-0"
//                     : "opacity-0 translate-x-8"
//                 }`}
//               >
//                 <p className="text-gray-700 leading-relaxed">
//                   “{review.text}”
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* REVIEWER */}
//           <div className="flex items-center gap-4 mt-10">
//             <Image
//               src={reviews[index].image}
//               alt={reviews[index].name}
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//             <div>
//               <p className="font-semibold text-gray-900">
//                 {reviews[index].name}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {reviews[index].role}
//               </p>
//             </div>
//           </div>

//           {/* COUNTER */}
//           <div className="absolute bottom-6 right-8 text-sm text-gray-400">
//             {index + 1} / {reviews.length}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

function ClientReviews() {
  const reviews = [
    {
      name: "Sudheer Kumar  Reddy (CA)",
      role: "CEO",
      image: "/person1.png",
      text: "Excellent support from Chakra Financial Services for our commercial property purchase loan. From initial consultation to final disbursement, their team guided us at every step. They compared multiple banks, negotiated better terms, and ensured fast processing with minimal hassle. Very professional, responsive, and reliable service. Strongly recommended for anyone looking for commercial loans, mortgage loans, or business finance.",
    },
    {
      name: "Rajesh",
      role: "Founder",
      image: "/person1.png",
      text: "We availed a mortgage loan through Chakra Financial Services and had a very smooth experience. The team explained all options clearly, supported us with documentation, and ensured quick approval with a competitive interest rate. Reliable and professional service.",
    },
    {
      name: "Radhika",
      role: "Director",
      image: "/person1.png",
      text: "We approached Chakra Financial Services for a mortgage loan against property. Their professional approach, multiple bank options, and strong follow-up helped us secure the loan on time. Trustworthy financial consultants for business and property loans.",
    },
    {
      name: "Parvez Khan",
      role: "Director",
      image: "/person1.png",
      text: "Very happy with the home loan service from Chakra Financial Services. Good guidance, clear communication, and quick processing. Thank you for helping us get our dream home.",
    },
    {
      name: "Srihari Reddy",
      role: "Director",
      image: "/person1.png",
      text: "The mortgage loan process was handled professionally with clear communication and timely updates. Good support from application to disbursement. Overall, a reliable and smooth experience.",
    },
  ];
  const Avatars = [
    "/person1.png",
    "/person2.png",
    "/person3.png",
    "/person1.png",
  ];
  const [index, setIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    // SLIDER
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    // RATING COUNT 0 → 4.5
    let ratingStart = 0;
    const ratingInterval = setInterval(() => {
      ratingStart += 0.1;
      if (ratingStart >= 4.5) {
        ratingStart = 4.5;
        clearInterval(ratingInterval);
      }
      setRating(Number(ratingStart.toFixed(1)));
    }, 40);

    // REVIEW COUNT 0 → 1000
    let reviewStart = 0;
    const reviewInterval = setInterval(() => {
      reviewStart += 1;
      if (reviewStart >= 100) {
        reviewStart = 100;
        clearInterval(reviewInterval);
      }
      setReviewCount(reviewStart);
    }, 20);

    return () => {
      clearInterval(slider);
      clearInterval(ratingInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  return (
    <section className=" bg-gradient-to-r from-orange-100 via-blue-100 to-white py-2 lg:px-18">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            <p className="text-sm font-medium text-gray-600">Client Review</p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              What our clients
            </span>
            <br /> have to say about working with us
          </h2>
        </div>

        {/* RIGHT CARD */}
        <div className="relative p-10">
          {/* 🔥 ABOVE COUNT */}
          <p className="text-sm font-medium text-gray-500 mb-2">
            Trusted by
            <span className="font-semibold text-gray-900"> {reviewCount} + </span>
            customers worldwide
          </p>

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-4">
            {/* Google Logo */}
            <Image src="/google.png" alt="Google" width={130} height={30} />

            {/* Avatars + Rating */}
            <div className="flex items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {Avatars.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="User"
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>

              {/* Rating */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{rating}</span>

                  {/* Stars */}
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-current"
                        style={{
                          color: i < 4 ? "#F97316" : "#2563EB",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  ({reviewCount}+ reviews)
                </p>
              </div>
            </div>
          </div>

          {/* REVIEW SLIDER */}
          <div className="relative min-h-[120px]">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <p className="text-gray-700 text-justify">
                  <span className="text-3xl text-orange-400 font-bold">
                    “
                  </span>
                  {review.text}
                  <span className="text-3xl text-orange-400 font-bold">
                    ”
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* REVIEWER */}
          <div className="flex items-center gap-4 mt-25">
            <img
              src={reviews[index].image}
              alt={reviews[index].name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">
                {reviews[index].name}
              </p>
              {/* <p className="text-sm text-gray-500">{reviews[index].role}</p> */}
            </div>
          </div>

          {/* COUNTER */}
          <div className="absolute bottom-6 right-8 text-sm text-gray-400">
            {index + 1} / {reviews.length}
          </div>
        </div>
      </div>
    </section>
  );
}
