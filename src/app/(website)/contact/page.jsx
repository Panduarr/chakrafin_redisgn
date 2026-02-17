import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="h-22"></div>
      <section className="bg-white py-10 px-18">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* HEADER */}
          <p className="text-red-500 font-semibold tracking-wide mb-3">
            CONTACT US
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Get in Touch with Chakra Financial Services
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Have questions? We're here to help you with loan inquiries,
            application support, and more.
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Head Office */}
            <div className="relative">
              {/* ICON */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                  <MapPin size={32} className="text-white" />
                </div>
              </div>

              {/* CARD */}
              <div className="bg-gray-50 p-10 pt-14 rounded-xl text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                <h3 className="text-xl font-bold mb-4">Head Office</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flat No.13/A, 1st Floor, Block C, Sri Sai Krupa Appartment,
                  Ramakrishna Nagar, Madeenaguda, Hyderabad-500049
                </p>
              </div>
            </div>

            {/* Email Support */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                  <Mail size={32} className="text-white" />
                </div>
              </div>

              <div className="bg-gray-50 p-10 pt-14 rounded-xl text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                <h3 className="text-xl font-bold mb-4">Email Support</h3>
                <p className="text-gray-600">info@chakrafinances.com</p>
              </div>
            </div>

            {/* Customer Care */}
            <a href="/workwithus">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                    <Phone size={32} className="text-white" />
                  </div>
                </div>

                <div className="bg-gray-50 p-10 pt-14 rounded-xl text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                  <h3 className="text-xl font-bold mb-2">Customer Care</h3>
                  <p className="text-gray-600 mb-2">For Assistance</p>
                  <p className="font-semibold text-gray-900">+91 90309 72851</p>
                  <p className="text-sm text-gray-500">(Toll-Free, 24/7)</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="py-10">
          <iframe
            title="Chakra Financial Services Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2898.585419814703!2d78.33993147516733!3d17.492116883413104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzMxLjYiTiA3OMKwMjAnMzMuMCJF!5e1!3m2!1sen!2sin!4v1771342117220!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
