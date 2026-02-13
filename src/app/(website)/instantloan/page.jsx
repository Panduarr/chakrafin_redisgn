"use client";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import React from "react";

function InstanLoan() {
  return (
    <div className="bg-gray-100">
      <Navbar active="instantloan" />
      Instant Loan
      <ConnectorRegistrationForm />
      <Footer active="instantloan"/>
    </div>
  );
}

export default InstanLoan;




function ConnectorRegistrationForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-28">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-2xl font-semibold text-blue-700 mb-8">
          Connector Registration & Loan Application
        </h2>

        <form className="space-y-8">
          {/* ---------------- BASIC DETAILS ---------------- */}
          <Section title="Basic Details">
            <Grid>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Company Name" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Phone Number" />
              <Input placeholder="PAN Number" />
              <Input placeholder="Aadhar Number" />
            </Grid>
          </Section>

          {/* ---------------- LOAN DETAILS ---------------- */}
          <Section title="Loan Details">
            <Grid>
              <Select
                placeholder="Choose Loan Type"
                options={[
                  "Personal Loan",
                  "Business Loan",
                  "Home Loan",
                  "Education Loan",
                ]}
              />
              <Input placeholder="Loan Amount" />
              <Input placeholder="Loan Tenure (Months)" />
              <Select
                placeholder="Loan Purpose"
                options={[
                  "Business Expansion",
                  "Home Purchase",
                  "Education",
                  "Medical",
                  "Other",
                ]}
              />
            </Grid>
          </Section>

          {/* ---------------- PERSONAL INFO ---------------- */}
          <Section title="Personal Information">
            <Grid>
              <Input type="date" />
              <Select
                placeholder="Gender"
                options={["Male", "Female", "Other"]}
              />
              <Select
                placeholder="Employment Type"
                options={["Salaried", "Self Employed", "Business Owner"]}
              />
              <Input placeholder="Monthly Income" />
              <Input placeholder="Existing EMI (if any)" />
            </Grid>
          </Section>

          {/* ---------------- BUSINESS INFO (OPTIONAL) ---------------- */}
          <Section title="Business Information (Optional)">
            <Grid>
              <Input placeholder="Business Type" />
              <Input placeholder="Annual Turnover" />
            </Grid>
          </Section>

          {/* ---------------- ADDRESS ---------------- */}
          <Section title="Address">
            <textarea
              rows="3"
              placeholder="Enter Your Address"
              className="input resize-none"
            />
          </Section>

          {/* ---------------- DOCUMENT UPLOADS ---------------- */}
          <Section title="Document Uploads">
            <div className="space-y-4">
              <FileUpload label="Upload PAN Card" />
              <FileUpload label="Upload Aadhar Card" />
              <FileUpload label="Upload Cancelled Cheque" />
            </div>
          </Section>

          {/* ---------------- SUBMIT ---------------- */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-2.5 rounded-lg shadow-md transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
      {title}
    </h3>
    {children}
  </div>
);

const Grid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {children}
  </div>
);

const Input = ({ type = "text", placeholder }) => (
  <input type={type} placeholder={placeholder} className="input" />
);

const Select = ({ placeholder, options }) => (
  <select className="input">
    <option>{placeholder}</option>
    {options.map((opt, i) => (
      <option key={i}>{opt}</option>
    ))}
  </select>
);

const FileUpload = ({ label }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="file"
      className="block w-full text-sm text-gray-600
      file:mr-4 file:py-1.5 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-medium
      file:bg-gray-200 file:text-gray-700
      hover:file:bg-gray-300"
    />
  </div>
);
