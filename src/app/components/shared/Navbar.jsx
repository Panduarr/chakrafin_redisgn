import React from "react";

function Navbar({ active = "home" }) {
  return (
    <>
      <div className="bg-green-800 flex flex-row justify-between px-10 py-2">
        <div className="text-2xl text-white flex flex-row gap-4">
          <a className="border-r-2 border-l-2 border-black px-2" href="https://www.facebook.com/">𝐟</a>
          <a className="border-r-2 border-l-2 border-black px-2" href="https://x.com/">𝕏</a>
          <a className="border-r-2 border-l-2 border-black px-2" href="https://www.linkedin.com/">🇮🇳</a>
        </div>
        <div className="text-lg text-white flex flex-row gap-4">
          <a className="border-r-2 border-l-2 border-black px-2" href="https://web.whatsapp.com/">🗪 Live Chat</a>
          <a className="border-r-2 border-l-2 border-black px-2" href="https://mail.google.com/">✉︎ Email Us</a>
        </div>
      </div>
      <div className="flex flex-3 gap-25 justify-around text-center text-xl font-semibold cursor-pointer py-1 px-6 border-0  rounded-full z-50 absolute top-12 left-30 bg-white  ">
        <div>
          <img
            className="w-40 h-auto object-cover"
            src="https://chakrafin.com/images/logo.png"
            alt="logo"
          />
        </div>
        <div>
          <ul className="grid grid-cols-4 gap-x-10 my-4.5">
            <li
              className={`${active === "home" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`${active === "about" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
            >
              <a href="/about">About Us</a>
            </li>
            <li
              className={`${active === "services" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
            >
              <a href="/services">Services</a>
            </li>
            <li
              className={`${active === "contact" ? "text-red-500 hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-blue-400 rounded-3xl px-4 py-2" : "text-gray-700"}`}
            >
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className=" my-4.5">
          <div
            className={`${active === "instantloan" ? "hover:underline transform ease-in-out duration-500 hover:scale-[1.3] transition bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl px-4 py-2 text-white shadow-md" : "text-gray-700"}`}
          >
            <a href="/instantloan">Get Instan Loan</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

// function navbar({ active = "home" }) {
//   const links = [
//     { name: "home", label: "Home", path: "/" },
//     { name: "about", label: "About", path: "/about" },
//     { name: "services", label: "Services", path: "/services" },
//     { name: "contact", label: "Contact", path: "/contact" },
//   ];

//   return (
//     <div className="fixed top-5 left-1/2  -translate-x-1/2 z-50">
//       <nav
//         className="
//           flex items-center gap-8 px-8 py-4
//           rounded-full
//           bg-white/70 backdrop-blur-xl
//           border border-white/40
//           shadow-lg shadow-black/5
//         "
//       >
//         {/* Logo */}
//         <img
//           src="https://chakrafin.com/images/logo.png"
//           alt="Chakrafin"
//           className="w-28 mr-2"
//         />

//         {/* Links */}
//         <div className="hidden md:flex items-center gap-2">
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.path}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all
//                 ${
//                   active === link.name
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-gray-700 hover:bg-black/5"
//                 }
//               `}
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         {/* CTA */}
//         <a
//           href="/contact"
//           className="
//             ml-2 px-5 py-2 rounded-full text-sm font-semibold
//             bg-gradient-to-r from-green-500 to-emerald-500
//             text-white shadow-md
//             hover:scale-[1.03] transition
//           "
//         >
//           Get Instant Contact
//         </a>
//       </nav>
//     </div>
//   );
// }

// export default navbar;
