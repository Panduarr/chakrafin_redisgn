import Navbar from '@/app/components/shared/Navbar'
import React from 'react'

function About() {
  return (
    <div>
        <Navbar active='about'/>
        <Hero />
    </div>
  )
}

export default About



export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Smart Financial Solutions for Every Need
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Personal, Business & Home Loans with fast approvals.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold">
              Apply Now
            </button>
            <button className="border border-white px-6 py-3 rounded-lg">
              Talk to Expert
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img src="/hero-finance.svg" alt="Finance" />
        </div>
      </div>
    </section>
  )
}
