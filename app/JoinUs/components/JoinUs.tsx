"use client";

import { ArrowRight, Calendar, Mail, User, Phone, FileText } from "lucide-react";
import { useState } from "react";

export default function JoinUs() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    interest: "",
    startDate: "",
    fullName: "",
    email: "",
    mobile: "",
    note: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.interest && formData.startDate;
    }
    if (step === 2) {
      return formData.fullName && formData.email && formData.mobile;
    }
    return true;
  };

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Progress indicator */}
        <div className="mb-8 flex justify-between items-center">
          <div className="flex gap-2">
            <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-[#AFCFE4]' : 'bg-gray-200'}`} />
            <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-[#AFCFE4]' : 'bg-gray-200'}`} />
            <div className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-[#AFCFE4]' : 'bg-gray-200'}`} />
          </div>
          <span className="text-sm text-gray-500">Step {step} of 3</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 border-2 bg-white rounded-2xl shadow-xl p-8 md:p-10">
          
          {/* Step 1: Interest and Date */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Interest</h3>
              
              {/* Interest - Changed to Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  What are you interested in? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full h-14 bg-gray-50 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#AFCFE4] focus:ring-2 focus:ring-[#AFCFE4]/20 outline-none transition-all text-gray-900 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Want to be a Consultant">Want to be a Consultant</option>
                    <option value="Want to Consult a Professional">Want to Consult a Professional</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Intended Start Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full h-14 bg-gray-50 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#AFCFE4] focus:ring-2 focus:ring-[#AFCFE4]/20 outline-none transition-all text-gray-900"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full h-14 bg-gray-50 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#AFCFE4] focus:ring-2 focus:ring-[#AFCFE4]/20 outline-none transition-all text-gray-900"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full h-14 bg-gray-50 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#AFCFE4] focus:ring-2 focus:ring-[#AFCFE4]/20 outline-none transition-all text-gray-900"
                    required
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-14 bg-gray-50 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-[#AFCFE4] focus:ring-2 focus:ring-[#AFCFE4]/20 outline-none transition-all text-gray-900"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Additional Notes */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
              
              {/* Note */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Additional Notes <span className="text-gray-400 font-normal normal-case">(Optional)</span>
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us anything else you'd like us to know..."
                  className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#AFCFE4] focus:ring-2 focus:ring-[#AFCFE4]/20 outline-none resize-none transition-all text-gray-900"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="flex-1 group flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-6 py-5 rounded-xl font-semibold text-gray-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-lg">Previous</span>
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex-1 group flex items-center justify-between bg-[#AFCFE4] hover:bg-[#9fb8cc] px-6 py-5 rounded-xl font-semibold text-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${
                  !isStepValid() ? 'opacity-50 cursor-not-allowed hover:translate-y-0' : ''
                }`}
              >
                <span className="text-lg">Next</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 group flex flex-col items-center justify-center bg-[#AFCFE4] hover:bg-[#9fb8cc] px-6 py-4 rounded-xl font-semibold text-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 relative"
              >
                <span className="text-lg">Submit</span>
                <span className="text-xs font-thin text-gray-600">You will also receive free training material</span>
                <ArrowRight size={24} className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            )}
          </div>

          {/* Privacy note */}
          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our Terms of Service and Privacy Policy{" "}
            <a href="#" className="text-[#AFCFE4] hover:underline"></a>{" "}
            {" "}
            <a href="#" className="text-[#AFCFE4] hover:underline"></a>
          </p>

        </form>

      </div>
    </section>
  );
}