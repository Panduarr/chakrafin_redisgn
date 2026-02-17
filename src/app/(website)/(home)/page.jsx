"use client";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Users, BadgeCheck } from "lucide-react";
import Image from "next/image";



function Home() {
  return (
    <div id="home" className="bg-blue-50 ">
      <Navbar active="home" />
      <div className="h-16"></div>
      <Banner />
      <AboutSection />
      <OurServices />
      <ClientsCarousel />
      <WhyChooseChakra />
      <TestimonialSlider />
      <Footer active="home" />
    </div>
  );
}

export default Home;



export const Banner = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/home_Banner.png"
        alt="Home Banner"
        className="absolute inset-0 w-full h-full object-fill"

        // className="absolute inset-0 w-full h-[130vh] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1f6fd8] leading-tight max-w-2xl">
            Empowering Your Financial Success
          </h2>

          <p className="mt-4 text-sm md:text-lg text-[#1f6fd8]/90 max-w-xl leading-relaxed">
            Trusted Solutions for Your Business and Personal Needs
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-xl bg-white text-[#F47C20] font-semibold hover:scale-105 transition"
            >
              Get a Free Consultation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};


// About Section

function AboutSection() {
  const [showKeyMore, setShowKeyMore] = useState(false);

  return (
    <section
      id="about"
      className=" py-5 pt-15 -mt-10  lg:pt-28 lg:-mt-20 "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-18 ">
        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6FB8]">
            About Us
          </h2>
        </div>

        {/* ---------- ABOUT CONTENT ---------- */}
        <div className="max-w-5xl mx-auto text-base mb-10 text-justify">
          <p className="text-gray-700  mb-4 ">
            <p>
              At Chakra Financial Services, we believe financial support should
              be simple, transparent, and accessible to everyone. As a trusted
              loan advisory and financial services company operating across
              India, we are committed to helping individuals, families,
              entrepreneurs, and businesses secure the right financial solutions
              to achieve their goals with confidence.
            </p>
            <br />
            <p>
              With a strong presence throughout the country, Chakra Financial
              Services provides comprehensive loan assistance tailored to
              diverse financial needs. We offer end-to-end support across all
              types of loan services, including personal loans, business loans,
              home loans, mortgage loans, loan against property, education
              loans, working capital finance, balance transfer services,
              refinancing, and Insurance more. No matter the requirement, our
              team ensures that every client receives the most suitable funding
              option with competitive terms and smooth processing.
            </p>
            <br />
            <p>
              Our approach is built on understanding first. We take the time to
              listen to our clients’ financial objectives and challenges before
              recommending solutions. From documentation and eligibility
              assessment to approval and disbursement coordination, we guide
              clients at every step of the journey. Our goal is not just to
              arrange loans, but to create financial clarity and long-term
              value.
            </p>
            <br />
            <p>
              Integrity, professionalism, and customer satisfaction are at the
              heart of everything we do. We maintain strong relationships with
              leading banks and financial institutions across India, enabling us
              to provide flexible options and faster turnaround times.
            </p>
            <br />
            <p>
              At Chakra Financial Services, we don’t just process applications —
              we build trusted financial partnerships that support growth,
              stability, and success.
            </p>
            <br />
            <p> Your financial progress is our commitment.</p>
          </p>
        </div>

        {/* ---------- MISSION & VISION (TOGGLE) ---------- */}
        <div className="grid md:grid-cols-2 gap-10 mb-10 ">
          <ToggleSection
            title="Our Mission"
            color="#F47C20"
            shortText="Our mission is to empower our clients with the right financial tools, knowledge, and access to
            opportunities that support growth and security."
            fullText="Our mission is to empower our clients with the right financial tools, knowledge, and access to
            opportunities that support growth and security. By combining professional expertise with a
            human approach, we aim to simplify complex financial processes and create meaningful
            financial progress for every client we serve."
          />

          <ToggleSection
            title="Our Vision"
            color="#1E6FB8"
            shortText="Our vision is to build a financially stronger community by bridging the gap between financial
            needs and the right solutions."
            fullText="Our vision is to build a financially stronger community by bridging the gap between financial
            needs and the right solutions. We strive to bring transparency, ethical practices, and modern
            financial advisory to every client we serve, enabling sustainable growth for individuals and
            enterprises alike.
            Through trust-driven relationships and value-based services, we aim to contribute to longterm economic well-being"
          />
        </div>

        {/* ---------- KEY PERSON ---------- */}
        <div className="border-t-4 border-[#1E6FB8] rounded-3xl p-10 shadow-lg ">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Image */}
            <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden ring-4 ring-[#F47C20]/30">
              <Image
                src="/keyperson.png"
                alt="Key Person"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#1E6FB8]">
                Our Founder & Key Person
              </h3>
              <p className="text-[#F47C20] font-medium mb-4">
                Chakra Financial Services
              </p>

              {/* Always visible short text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                C S Reddy, the founder of Chakra Financial Services, brings over
                10 years of expertise in the financial sector.
              </p>

              {/* Toggle text */}
              {showKeyMore && (
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With a strong focus on customer-centric solutions and
                  transparent loan services, Reddy established the company to
                  help individuals and businesses access the right financial
                  support at the right time. His deep industry knowledge and
                  commitment to excellence have been instrumental in building a
                  trusted name in the finance industry across India.
                </p>
              )}

              <button
                onClick={() => setShowKeyMore(!showKeyMore)}
                className="text-sm font-medium text-[#1E6FB8] hover:underline mb-6"
              >
                {showKeyMore ? "Show Less" : "Read More"}
              </button>

              {/* ---------- ALWAYS VISIBLE INFO CARDS ---------- */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoCard
                  title="10+ Years"
                  text="Years of experience"
                  color="#1E6FB8"
                />
                <InfoCard title="95K" text="Happy Customers" color="#F47C20" />
                <InfoCard title="100%" text="Satisfaction" color="#1E6FB8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TOGGLE SECTION (MISSION / VISION) ---------- */
const ToggleSection = ({ title, shortText, fullText, color }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-md border-l-4"
      style={{ borderColor: color }}
    >
      <h3 className="text-xl font-semibold mb-3" style={{ color }}>
        {title}
      </h3>

      <p className="text-gray-700 leading-relaxed">
        {open ? fullText : shortText}
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-sm font-medium"
        style={{ color }}
      >
        {open ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

/* ---------- INFO CARD (NO TOGGLE) ---------- */
const InfoCard = ({ title, text, color }) => (
  <div
    className="bg-[#F8FAFC] rounded-xl p-5 shadow-sm border-t-4 text-center"
    style={{ borderColor: color }}
  >
    <h4 className="text-lg font-bold" style={{ color }}>
      {title}
    </h4>
    <p className="text-sm text-gray-600 mt-1">{text}</p>
  </div>
);

// our services
function OurServices() {
  const servicesdata = [
  {
    id: 1,
    title: "Personal Loans",
    img: "https://www.cashe.co.in/wp-content/uploads/2024/04/Instant_Personal_Loan_Online.png",
    short:
      "Quick and flexible personal loan solutions for lifestyle, emergency, or personal needs.",
    long: "We assist individuals in accessing quick and flexible personal loan solutions to meet lifestyle, emergency, or personal financial needs. Our role is to simplify the process, guide you through eligibility and documentation, and connect you with suitable options that match your repayment capacity.",
  },
  {
    id: 2,
    title: "Business Loans",
    img: "/Businessloan.png",
    short:
      "Structured funding solutions to support business growth and operations.",
    long: "Chakra Financial Services supports entrepreneurs, MSMEs, and growing businesses with structured funding solutions for working capital, expansion, equipment purchase, and operational needs. We focus on understanding your business model and aligning you with financing options that support sustainable growth.",
  },
  {
    id: 3,
    title: "Home Loans",
    img: "/Homeloan.png",
    short:
      "Guided home loan advisory for purchase, construction, and balance transfer.",
    long: "Owning a home is a milestone, and we help make that journey smoother. Our home loan advisory covers purchase, construction, and balance transfer options. We guide you through interest rate choices, documentation, and lender selection to ensure a transparent and comfortable borrowing experience.",
  },
  {
    id: 4,
    title: "Mortgage Loans (Loan Against Property)",
    img: "/Mortgageloans.png",
     short:
      "Mortgage-based funding by leveraging residential or commercial property.",
    long: "We facilitate mortgage-based funding for individuals and businesses by leveraging residential or commercial property. Our advisory ensures that clients access competitive terms, appropriate loan structures, and clear repayment planning while unlocking the value of their assets responsibly.",
  },
  {
    id: 5,
    title: "Education Loans",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHB8AEamKRl0TalLTDtUUjSIeurXixfDMr4oZipI4kpX19KIZ7",
    short: "Education financing guidance for studies in India and abroad.",
    long: "We help students and families explore education financing options for studies in India and abroad. Our support includes guidance on loan eligibility, co-applicant requirements, documentation, and repayment planning—enabling families to invest in education with financial clarity and confidence.",
  },
  {
    id: 6,
    title: "Insurance Services",
    img: "/Insuranceloan.png",
    short:
      "Advisory services to protect life, health, assets, and business interests.",
    long: "Our insurance advisory focuses on protecting what matters most—life, health, assets, and business interests. We assist clients in choosing suitable coverage based on risk profile and long-term needs, ensuring informed decisions rather than product-driven selling.",
  },
  {
    id: 7,
    title: "Overdraft / Cash Credit Facility",
    img: "https://sgaa.in/resource/Image/bann1.jpg",
    short:
      "Flexible funds to manage short-term cash flow needs and unexpected expenses.",
    long: "At Chakra Financial Services, we understand that businesses and individuals occasionally need extra funds to manage day-to-day expenses or deal with unexpected shortfalls. Our overdraft and cash credit facilities provide access to additional funds beyond your account balance, offering a reliable financial safety net to cover short-term cash flow gaps with flexibility and convenience.",
  },
  {
    id: 8,
    title: "LC / BG / SBLC Facilities",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRv3LoizJjn7Lg2J8GDw95eSvPI6xs0tAe61_BIDC9Ww6JT4W_2",
    short:
      "Secure financial instruments to support domestic and international trade.",
    long: "At Chakra Financial Services, we understand the importance of trust and security in business transactions. Our Letter of Credit (LC), Bank Guarantee (BG), and Standby Letter of Credit (SBLC) facilities provide strong financial backing to ensure smooth and secure domestic and international trade. These instruments help buyers and sellers fulfill contractual obligations with confidence and peace of mind.",
  },
];
  const [openId, setOpenId] = useState(null);

  return (
    <section
      id="services"
      className=" py-6 lg:pt-30 lg:-mt-20 px-6 lg:px-18"
    >
      <div className="max-w-7xl mx-auto ">
        {/* ---------- TITLE ---------- */}
        <div className="text-center pb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6FB8]">
            Our Services
          </h2>
        </div>

        {/* ---------- GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {servicesdata.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden
                         border-t-4 border-[#1E6FB8] hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="relative h-40 w-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover h-40 w-full"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1E6FB8] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600">{service.short}</p>

                {openId === service.id && (
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {service.long}
                  </p>
                )}
                <a
                  className="mt-4 text-sm font-medium text-[#F47C20] hover:underline"
                  href="/services"
                >
                  View more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// our clients carousel
export const ClientsCarousel = () => {

  const services = [
  { id: 1, title: "Godrej Capital", image: "/partners/godrej-capital.png" },
  { id: 2, title: "Aditya Birla Housing Finance", image: "/partners/aditya-birla-housing.png" },
  { id: 3, title: "LIC Housing Finance", image: "/partners/lic-housing.png" },
  { id: 4, title: "Utkarsh Small Finance Bank", image: "/partners/utkarsh.png" },
  { id: 5, title: "Tata Capital", image: "/partners/tata-capital.png" },
  { id: 6, title: "Muthoot Finance", image: "/partners/muthoot.png" },
  { id: 7, title: "Bajaj Housing Finance Limited", image: "/partners/bajaj-housing.png" },
  { id: 8, title: "HDFC Bank", image: "/partners/hdfc.png" },
  { id: 9, title: "ICICI Bank", image: "/partners/icici.png" },
  { id: 10, title: "Axis Bank", image: "/partners/axis.png" },
  { id: 11, title: "YES Bank", image: "/partners/yes.png" },
  { id: 12, title: "Federal Bank", image: "/partners/federal.png" },
  { id: 13, title: "Kotak Mahindra Bank", image: "/partners/kotak.png" },
  { id: 14, title: "Piramal Finance", image: "/partners/piramal.png" },
  { id: 15, title: "Poonawalla Fincorp", image: "/partners/poonawalla.png" },
];


  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    let animationFrame;

    const move = () => {
      setOffset((prev) => {
        const trackWidth = trackRef.current.scrollWidth / 2;
        return prev >= trackWidth ? 0 : prev + 0.5; // speed here
      });
      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id="clients"
      className=" py-6 lg:pb-6 lg:pt-30 lg:-mt-24 lg:px-30  px-18"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#1E6FB8] mb-5">
          Our Beloved Clients
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              transform: `translateX(-${offset}px)`,
              willChange: "transform",
            }}
          >
            {duplicatedServices.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[160px] flex justify-center"
              >
                <div className="flex items-center justify-center h-20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// why choose
function WhyChooseChakra() {
  return (
    <section id="contact" className="relative w-full px-4 sm:px-6 lg:px-18 pt-12 pb-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-110 contrast-110"
        style={{ backgroundImage: "url('/whywechoose.png')" }}
      />

      {/* Directional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
            Why Choose Chakra?
          </h2>

          <div className="space-y-8 sm:space-y-10">

            {/* Item 1 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 sm:p-4 rounded-xl bg-orange-100 text-orange-500 shadow-md">
                <Users size={24} className="sm:size-[28px]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Experienced Professionals
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Years of Expertise in Finance
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 sm:p-4 rounded-xl bg-blue-100 text-blue-600 shadow-md">
                <ShieldCheck size={24} className="sm:size-[28px]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Reliable & Secure
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Safe & Trustworthy Transactions
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 sm:p-4 rounded-xl bg-yellow-100 text-yellow-600 shadow-md">
                <BadgeCheck size={24} className="sm:size-[28px]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Customer First Approach
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Your Goals, Our Priority
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:pl-30">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-6 w-full max-w-md mx-auto border border-gray-200">
          
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6 sm:mb-8">
            Get in Touch
          </h3>

          <form className="space-y-4 sm:space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
            >
              <a href="/contact">Request Consultation</a>
            </button>

          </form>
        </div>
        </div>

      </div>
    </section>
  );
}

// testimonials
function TestimonialSlider() {

  const testimonials = [
  {
    name: "David S,",
    role: "CEO.",
    image: "/person1.png",
    text: "Chakra helped us secure the funding we needed to grow our business. Highly recommended!",
  },
  {
    name: "Anita R,",
    role: "Founder.",
    image: "/person2.png",
    text: "Professional team and transparent process. Chakra made financing stress-free.",
  },
  {
    name: "Rahul K,",
    role: "Managing Director.",
    image: "/person3.png",
    text: "Fast approvals and great support throughout. Excellent experience with Chakra.",
  },
];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // auto scroll speed

    return () => clearInterval(timer);
  }, []);

  const { name, role, image, text } = testimonials[index];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-18 lg:py-5 py-5">
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-100 via-orange-50 to-white -shadow-xl  md:p-10 transition-all duration-700">
        
        {/* Quote */}
        <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
          <span className="text-3xl text-orange-400 font-bold mr-2">“</span>
          {text}
          <span className="text-3xl text-orange-400 font-bold ml-2">”</span>
        </p>

        {/* User */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 object-cover rounded shadow"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}<p className="text-sm text-gray-500">{role}</p> </h4>
            
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 right-6 flex gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
