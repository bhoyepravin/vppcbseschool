// components/Admission/AdmissionEnquiryForm.jsx
import React, { useState } from "react";
import {
  User,
  Calendar,
  School,
  BookOpen,
  Mail,
  Phone,
  Send,
  UserCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

const AdmissionEnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    admissionClass: "",
    lastExam: "",
    fatherName: "",
    email: "",
    mobileNo: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const classOptions = [
    "SELECT CLASS",
    "Nursery",
    "Junior KG",
    "Senior KG",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];

  // TRAI-approved Indian mobile number prefixes
  const traiValidPrefixes = [
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79", // New numbering series
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89", // Existing series
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99", // Existing series
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69", // Existing series
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59", // M2M/IoT (but can be used)
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for mobile number
    if (name === "mobileNo") {
      // Only allow numbers
      const numericValue = value.replace(/\D/g, "");
      // Limit to 10 digits
      const limitedValue = numericValue.slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        [name]: limitedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateMobileNumber = (mobileNo) => {
    // Check if it's exactly 10 digits
    if (!/^\d{10}$/.test(mobileNo)) {
      return "Mobile number must be 10 digits";
    }

    // Check if it starts with a valid TRAI prefix
    const prefix = mobileNo.substring(0, 2);
    if (!traiValidPrefixes.includes(prefix)) {
      return "Please enter a valid Indian mobile number";
    }

    // Additional checks for invalid number patterns
    const invalidPatterns = [
      /^(\d)\1{9}$/, // All same digits (e.g., 0000000000)
      /^1234567890$/, // Sequential ascending
      /^0987654321$/, // Sequential descending
      /^(\d{5})\1$/, // Repeated pattern
    ];

    for (const pattern of invalidPatterns) {
      if (pattern.test(mobileNo)) {
        return "Please enter a valid mobile number";
      }
    }

    return null;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.admissionClass || formData.admissionClass === "SELECT CLASS")
      newErrors.admissionClass = "Please select a class";
    if (!formData.lastExam.trim())
      newErrors.lastExam = "Last Examination passed/appeared is required";
    if (!formData.fatherName.trim())
      newErrors.fatherName = "Father's Name is required";

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Mobile number validation
    if (!formData.mobileNo.trim()) {
      newErrors.mobileNo = "Mobile No. is required";
    } else {
      const mobileError = validateMobileNumber(formData.mobileNo);
      if (mobileError) {
        newErrors.mobileNo = mobileError;
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstError = Object.keys(validationErrors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      console.log("Form Data:", formData);
      // Here you would typically make an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          dateOfBirth: "",
          admissionClass: "",
          lastExam: "",
          fatherName: "",
          email: "",
          mobileNo: "",
          additionalInfo: "",
        });
        setErrors({});
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  // Individual form fields for better state management
  const renderFormField = (fieldConfig) => {
    const {
      label,
      name,
      type = "text",
      placeholder,
      icon: Icon,
      required = true,
      rows,
    } = fieldConfig;

    const error = errors[name];
    const value = formData[name];

    return (
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Icon className="h-5 w-5" />
            </div>
          )}
          {type === "select" ? (
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F07B3D] focus:border-transparent transition-all ${
                Icon ? "pl-12" : "pl-4"
              } ${error ? "border-red-500" : "border-gray-300"}`}
            >
              {classOptions.map((option, index) => (
                <option key={index} value={option} disabled={index === 0}>
                  {option}
                </option>
              ))}
            </select>
          ) : type === "textarea" ? (
            <textarea
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              rows={rows}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F07B3D] focus:border-transparent transition-all ${
                Icon ? "pl-12" : "pl-4"
              } ${error ? "border-red-500" : "border-gray-300"}`}
            />
          ) : name === "mobileNo" ? (
            // Special input for mobile number
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <span className="text-gray-500 text-sm">+91</span>
                <div className="w-px h-4 bg-gray-300 mx-1"></div>
              </div>
              <input
                type="tel"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder="98765 43210"
                maxLength="10"
                pattern="[0-9]*"
                inputMode="numeric"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F07B3D] focus:border-transparent transition-all pl-20 ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F07B3D] focus:border-transparent transition-all ${
                Icon ? "pl-12" : "pl-4"
              } ${error ? "border-red-500" : "border-gray-300"}`}
            />
          )}
        </div>
        {name === "mobileNo" && !error && value.length === 10 && (
          <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Valid Indian mobile number
          </p>
        )}
        {error && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Admission Enquiry Form
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F07B3D] to-[#FF9933] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Begin your child's educational journey with us. Fill out the form
            below and our admission team will get in touch with you shortly.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <p>✓ Only Indian mobile numbers allowed</p>
            <p>✓ All fields are mandatory</p>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6 animate-fadeIn">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Send className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-1">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for your interest. Our admission team will contact
                  you within 24 hours on {formData.mobileNo}.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Form Content */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  {renderFormField({
                    label: "Full Name",
                    name: "fullName",
                    placeholder: "Enter Full name",
                    icon: User,
                  })}

                  {renderFormField({
                    label: "Date of Birth",
                    name: "dateOfBirth",
                    type: "date",
                    icon: Calendar,
                  })}

                  {renderFormField({
                    label: "Admission in Class",
                    name: "admissionClass",
                    type: "select",
                    icon: School,
                  })}

                  {renderFormField({
                    label: "Last Examination passed/appeared",
                    name: "lastExam",
                    placeholder: "Enter Last Examination passed/appeared",
                    icon: BookOpen,
                  })}
                </div>

                {/* Right Column */}
                <div>
                  {renderFormField({
                    label: "Full name of the Father",
                    name: "fatherName",
                    placeholder: "Enter Father Name",
                    icon: UserCircle,
                  })}

                  {renderFormField({
                    label: "Your Email",
                    name: "email",
                    type: "email",
                    placeholder: "Email",
                    icon: Mail,
                  })}

                  {renderFormField({
                    label: "Your Mobile No.",
                    name: "mobileNo",
                    type: "tel",
                    placeholder: "Enter Mobile No.",
                    icon: Phone,
                  })}

                  {renderFormField({
                    label: "Additional Information (Optional)",
                    name: "additionalInfo",
                    type: "textarea",
                    placeholder:
                      "Any specific queries or information you'd like to share...",
                    icon: FileText,
                    required: false,
                    rows: 3,
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#F07B3D] to-[#FF9933] hover:from-[#FF9933] hover:to-[#F07B3D] hover:shadow-lg transform hover:-translate-y-0.5"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#F07B3D] hover:underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Add CSS for animation */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }

          select option:disabled {
            color: #9ca3af;
          }

          select option:not(:disabled) {
            color: #1f2937;
          }

          /* Hide number input arrows */
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AdmissionEnquiryForm;
