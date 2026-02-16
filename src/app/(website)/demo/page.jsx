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

        import React from 'react'
        
        function page() {
          return (
            <div>demo</div>
          )
        }
        
        export default page