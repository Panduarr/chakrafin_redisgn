// import React from "react";

// function Navbar({ active = "home" }) {
//   return (
//     <>
//       <div className="bg-[#1E6FB8] flex flex-row justify-between px-10 py-1">
//         <div className="text-md text-[#1a1a1a] flex flex-row gap-4">
//           <a className="border-r-2 border-l-2 border-black px-2 hover:opacity-80" href="https://www.facebook.com/">𝐟</a>
//           <a className="border-r-2 border-l-2 border-black px-2" href="https://x.com/">𝕏</a>
//           <a className="border-r-2 border-l-2 border-black px-2" href="https://www.linkedin.com/">🇮🇳</a>
//         </div>
//         <div className="text-md text-[#1a1a1a] flex flex-row gap-4">
//           <a className="border-r-2 border-l-2 border-black px-2" href="https://web.whatsapp.com/">📞 +91 90000 00000</a>
//           <a className="border-r-2 border-l-2 border-black px-2" href="https://mail.google.com/">✉︎ contact@chakrafin.com</a>
//         </div>
//       </div>
//       <div className="flex flex-3 gap-25 justify-between px-10 text-center text-xl font-semibold cursor-pointer  border-0   z-50  bg-white  ">
//         <div>
//           <img
//             className="w-40 h-auto object-cover"
//             src="https://chakrafin.com/images/logo.png"
//             alt="logo"
//           />
//         </div>
//         <div>
//           <ul className="grid grid-cols-4 gap-x-10 my-4.5">
//             <li
//               className={`${active === "home" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
//             >
//               <a href="/">Home</a>
//             </li>
//             <li
//               className={`${active === "about" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
//             >
//               <a href="/about">About Us</a>
//             </li>
//             <li
//               className={`${active === "services" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
//             >
//               <a href="/services">Services</a>
//             </li>
//             <li
//               className={`${active === "contact" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
//             >
//               <a href="/contact">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//         <div className=" my-4.5">
//           <div
//             className={`${active === "instantloan" ? "hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl px-4 py-2 text-white shadow-md" : "text-gray-700"}`}
//           >
//             <a href="/instantloan">Get Instan Loan</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;



import React from "react";

function Navbar({ active = "home" }) {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1E6FB8] flex justify-between px-10 py-1 text-sm text-white max-w-7xl mx-auto">
        <div className="flex gap-4">
          <a className="px-2 border-x border-white/40 hover:opacity-80" href="https://www.facebook.com/">𝐟</a>
          <a className="px-2 border-x border-white/40 hover:opacity-80" href="https://x.com/">𝕏</a>
          <a className="px-2 border-x border-white/40 hover:opacity-80" href="https://www.linkedin.com/">🇮🇳</a>
        </div>

        <div className="flex gap-4">
          <a className="px-2 border-x border-white/40 hover:opacity-80" href="https://web.whatsapp.com/">
            📞 +91 90000 00000
          </a>
          <a className="px-2 border-x border-white/40 hover:opacity-80" href="https://mail.google.com/">
            ✉ contact@chakrafin.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-10 bg-white shadow-sm max-w-7xl mx-auto
">
        {/* Logo */}
        <img
          className="w-40"
          src="https://chakrafin.com/images/logo.png"
          alt="logo"
        />

        {/* Menu */}
        <ul className="grid grid-cols-4 gap-x-8 my-4 text-base font-medium">
          {[
            { key: "home", label: "Home", link: "/" },
            { key: "about", label: "About Us", link: "/about" },
            { key: "services", label: "Services", link: "/services" },
            { key: "contact", label: "Contact Us", link: "/contact" },
          ].map((item) => (
            <li
              key={item.key}
              className={`px-4 py-2 rounded-full text-center transition transform hover:scale-[1.03]
                ${
                  active === item.key
                    ? "bg-[#1E6FB8] text-white"
                    : "text-gray-700 hover:text-[#1E6FB8]"
                }`}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/instantloan"
          className={`px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-[1.03]
            ${
              active === "instantloan"
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                : "bg-[#F47C20] text-white hover:shadow-md"
            }`}
        >
          Get Instant Loan
        </a>
      </div>
    </>
  );
}

export default Navbar;
