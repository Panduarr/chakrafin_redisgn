import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import React from "react";

function work_With_Us() {
  return (
    <div>
      <Navbar />
      <div className="h-18"></div>
      <Banner />
      <Forms />
      <Footer />
    </div>
  );
}

export default work_With_Us;

function Banner() {
  return (
    <div>
      <img
        className="w-full h-98 "
        src="/work-with-us-banner.png"
        alt="banner"
      />
    </div>
  );
}

function Forms() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-18 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

      {/* LEFT SIDE — IMAGES */}
      <div
        className="
          flex flex-col gap-10
          lg:gap-14
          lg:sticky lg:top-24 lg:h-fit
        "
      >
        {/* Image 1 */}
        <img
          src="/work-with-us.png"
          alt="Work with us 1"
          className="
            w-full max-w-xs sm:max-w-sm
            rounded-xl shadow-lg
            mx-auto lg:mx-0
            lg:self-start
          "
        />

        {/* Image 2 */}
        <img
          src="/work-with-us2.png"
          alt="Work with us 2"
          className="
            w-full max-w-xs sm:max-w-sm
            rounded-xl shadow-lg
            mx-auto lg:mx-0
            lg:self-end
          "
        />

        {/* Image 3 */}
        <img
          src="/work-with-us3.png"
          alt="Work with us 3"
          className="
            w-full max-w-xs sm:max-w-sm
            rounded-xl shadow-lg
            mx-auto lg:mx-0
            lg:self-start
          "
        />
      </div>

      {/* RIGHT SIDE — FORM */}
      <div className="w-full rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://forms.gle/cYUwdbJc8zmPpe8B9"
          className="w-full h-[1200px] sm:h-[1300px] lg:h-[1400px]"
          frameBorder="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>

    </div>
  );
}



