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
        import React from 'react'
        
        function page() {
          return (
            <div>demo</div>
          )
        }
        
        export default page