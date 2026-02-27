import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="lg:h-22"></div>
      <section className="bg-white py-10 px-6 lg:px-18">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADER */}
          <p className="text-3xl font-bold tracking-wide mb-3">CONTACT US</p>

          <h2 className="text-2xl md:text-2xl  text-blue-400 mb-20">
            We're her to Support you with all your financial needs. <br />
            Reach out to us through the options below
          </h2>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Customer Care */}
            <a
              href="/workwithus"
              className="relative bg-gray-50 rounded-xl p-5 pt-16  text-center shadow-sm hover:shadow-xl  hover:scale-[1.03] transition duration-300  min-h-[150px] flex flex-col justify-center"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-orange-400  flex items-center justify-center shadow-lg">
                  <Phone size={32} className="text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">For Assistance</p>
              <p className="font-semibold text-gray-900">+91 90309 72851</p>
              <p className="text-sm text-gray-500">(Toll-Free, 24/7)</p>
              <a href="/">
                <button className="bg-blue-400 px-4 py-2 rounded-2xl mt-3">
                  Call Now
                </button>
              </a>
            </a>

            {/* Email Support */}
            <div className="relative bg-gray-50 rounded-xl p-5 pt-16  text-center shadow-sm hover:shadow-xl  hover:scale-[1.03] transition duration-300  min-h-[150px] flex flex-col justify-center">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-orange-400  flex items-center justify-center shadow-lg">
                  <Mail size={32} className="text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-gray-600">info@chakrafinances.com</p>
              <p className="text-gray-600">chakrafinservice@gmail.com</p>
              <a href="/">
                <button className="bg-blue-400 px-4 py-2 rounded-2xl mt-3">
                  Send E-mail
                </button>
              </a>
            </div>

            {/* Head Office */}
            <div className="relative bg-gray-50 rounded-xl p-5 pt-16  text-center shadow-sm hover:shadow-xl  hover:scale-[1.03] transition duration-300  min-h-[150px] flex flex-col justify-center">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-orange-400  flex items-center justify-center shadow-lg">
                  <MapPin size={32} className="text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Flat No.13/A, 1st Floor, Block C, Sri Sai Krupa Appartment,
                Ramakrishna Nagar, Madeenaguda, Hyderabad-500049
              </p>
              <a href="/">
                <button className="bg-blue-400 px-4 py-2 rounded-2xl mt-3">
                  Get Directions
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="py-10">
          {/* <iframe
            title="Chakra Financial Services Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2898.585419814703!2d78.33993147516733!3d17.492116883413104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzMxLjYiTiA3OMKwMjAnMzMuMCJF!5e1!3m2!1sen!2sin!4v1771342117220!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="rounded-sm"
            loading="lazy"
          /> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
