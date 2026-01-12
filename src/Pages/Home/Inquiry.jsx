import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, MapPin, Phone, Mail } from "lucide-react";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    grade: "",
    email: "",
    mobileNumber: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.grade) newErrors.grade = "Please select a grade";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      grade: "",
      email: "",
      mobileNumber: "",
      location: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const popularLocations = [
  // Metro Cities
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",

  // Maharashtra
  "Nagpur",
  "Nashik",
  "Aurangabad",
  "Solapur",
  "Kolhapur",
  "Amravati",

  // Gujarat
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Jamnagar",

  // Karnataka
  "Mysore",
  "Mangalore",
  "Hubli",
  "Belgaum",
  "Davangere",

  // Telangana
  "Warangal",
  "Karimnagar",
  "Nizamabad",

  // Tamil Nadu
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
  "Erode",
  "Tirunelveli",

  // West Bengal
  "Howrah",
  "Durgapur",
  "Siliguri",
  "Asansol",

  // Rajasthan
  "Jaipur",
  "Jodhpur",
  "Udaipur",
  "Kota",
  "Ajmer",
  "Bikaner",

  // Uttar Pradesh
  "Lucknow",
  "Kanpur",
  "Agra",
  "Varanasi",
  "Prayagraj",
  "Meerut",
  "Noida",
  "Greater Noida",
  "Ghaziabad",

  // Haryana
  "Gurgaon",
  "Faridabad",
  "Panipat",
  "Sonipat",
  "Karnal",

  // Punjab
  "Chandigarh",
  "Ludhiana",
  "Amritsar",
  "Jalandhar",
  "Patiala",

  // Uttarakhand
  "Dehradun",
  "Haridwar",
  "Roorkee",
  "Haldwani",

  // Madhya Pradesh
  "Bhopal",
  "Indore",
  "Gwalior",
  "Jabalpur",
  "Ujjain",

  // Bihar
  "Patna",
  "Gaya",
  "Bhagalpur",
  "Muzaffarpur",

  // Jharkhand
  "Ranchi",
  "Jamshedpur",
  "Dhanbad",

  // Odisha
  "Bhubaneswar",
  "Cuttack",
  "Rourkela",
  "Sambalpur",

  // Chhattisgarh
  "Raipur",
  "Bilaspur",
  "Durg",
  "Bhilai",

  // Assam
  "Guwahati",
  "Dibrugarh",
  "Silchar",

  // Kerala
  "Kochi",
  "Trivandrum",
  "Kozhikode",
  "Thrissur",

  // Andhra Pradesh
  "Visakhapatnam",
  "Vijayawada",
  "Guntur",
  "Nellore",
  "Tirupati",

  // Goa
  "Panaji",
  "Margao",

  // Himachal Pradesh
  "Shimla",
  "Solan",
  "Dharamshala",

  // Jammu & Kashmir
  "Srinagar",
  "Jammu",

  // North East
  "Imphal",
  "Shillong",
  "Aizawl",
  "Agartala",
  "Kohima",
  "Itanagar",

  // UTs
  "Puducherry",
  "Port Blair",
  "Daman",
  "Diu",
  "Silvassa",
];


  return (
    <section className="py-24 relative overflow-hidden" id="inquiry-form">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full translate-x-48 translate-y-48"></div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full"
            style={{
              left: `${10 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#800000] via-[#800000] to-[#800000] bg-clip-text text-transparent">
              Enquiry Form
            </h2>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          </div>

          <motion.div
            className="h-1.5 w-24 bg-gradient-to-r from-[#800000] via-[#800000] to-[#800000] mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            Fill out the form below and our admission team will contact you
            within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-white to-white/90 rounded-2xl shadow-2xl p-8 h-full border border-white/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
                Quick Contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Call Us</p>
                    <p className="text-lg font-semibold text-gray-800">
                      7507546666
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email Us</p>
                    <p className="text-lg font-semibold text-gray-800">
                      info@vppcbse.bhonsala.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Visit Us</p>
                    <p className="text-base font-semibold text-gray-800">
                      Dr. B.S. Moonje Marg, Rambhoomi
                      <br />
                      Nashik, Maharashtra 422005
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Response Time:</span> Within
                  24 hours
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Office Hours:</span> 8:30 AM -
                  12:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-white to-white/90 rounded-2xl shadow-2xl p-12 text-center border border-white/50 backdrop-blur-sm"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 mb-8">
                  <CheckCircle className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Thank You for Your Enquiry!
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  We have received your details. Our admission team will contact
                  you shortly at
                  <span className="font-semibold text-purple-600">
                    {" "}
                    {formData.email}
                  </span>{" "}
                  or
                  <span className="font-semibold text-purple-600">
                    {" "}
                    +91 {formData.mobileNumber}
                  </span>
                  .
                </p>
                <button
                  onClick={resetForm}
                  className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transform flex items-center gap-3 mx-auto"
                >
                  <span>Submit Another Enquiry</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <div className="bg-gradient-to-br from-white to-white/90 rounded-2xl shadow-2xl overflow-hidden border border-white/50 backdrop-blur-sm">
                <div className="px-8 py-12 sm:p-12">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Row 1: Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {["firstName", "lastName"].map((field) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: field === "firstName" ? 0.1 : 0.2,
                          }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            {field === "firstName"
                              ? "Student First Name *"
                              : "Last Name *"}
                          </label>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className={`block w-full rounded-xl border ${
                              errors[field]
                                ? "border-red-500"
                                : "border-gray-300"
                            } px-6 py-4 text-base placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-3 focus:ring-purple-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm`}
                            placeholder={`Enter student's ${
                              field === "firstName" ? "first" : "last"
                            } name`}
                          />
                          {errors[field] && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors[field]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Row 2: Grade & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {["grade", "location"].map((field) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: field === "grade" ? 0.3 : 0.4 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            {field === "grade"
                              ? "Grade Seeking Admission For *"
                              : "Your Location/City *"}
                          </label>
                          {field === "grade" ? (
                            <select
                              name="grade"
                              value={formData.grade}
                              onChange={handleChange}
                              className={`block w-full rounded-xl border ${
                                errors.grade
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } px-6 py-4 text-base focus:border-purple-500 focus:outline-none focus:ring-3 focus:ring-purple-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm`}
                            >
                              <option value="">Select Grade</option>
                              {[
                                "playgroup",
                                "nursery",
                                "lkg",
                                "ukg",
                                ...Array.from({ length: 10 }, (_, i) => i + 1),
                              ].map((grade) => (
                                <option key={grade} value={grade}>
                                  {typeof grade === "number"
                                    ? `Grade ${grade}`
                                    : grade.charAt(0).toUpperCase() +
                                      grade.slice(1)}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <div className="relative">
                              <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                list="location-suggestions"
                                className={`block w-full rounded-xl border ${
                                  errors.location
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } px-6 py-4 text-base placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-3 focus:ring-purple-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm`}
                                placeholder="Enter your city"
                              />
                              <datalist id="location-suggestions">
                                {popularLocations.map((city) => (
                                  <option key={city} value={city} />
                                ))}
                              </datalist>
                            </div>
                          )}
                          {errors[field] && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors[field]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Row 3: Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {["email", "mobileNumber"].map((field) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: field === "email" ? 0.5 : 0.6 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            {field === "email"
                              ? "Email Address *"
                              : "Mobile Number *"}
                          </label>
                          {field === "mobileNumber" ? (
                            <div className="flex rounded-xl shadow-sm bg-white/50 backdrop-blur-sm">
                              <span className="inline-flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50/50 px-6 text-base text-gray-500">
                                +91
                              </span>
                              <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                maxLength="10"
                                className={`block w-full rounded-none rounded-r-xl border ${
                                  errors.mobileNumber
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } px-6 py-4 text-base placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-3 focus:ring-purple-500/20 transition-all duration-300`}
                                placeholder="Enter parent's mobile number"
                              />
                            </div>
                          ) : (
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`block w-full rounded-xl border ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } px-6 py-4 text-base placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-3 focus:ring-purple-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm`}
                              placeholder="Enter parent's email address"
                            />
                          )}
                          {errors[field] && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors[field]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Terms & Submit */}
                    <div className="pt-10 border-t border-gray-200">
                      <div className="flex items-start mb-8">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          required
                          className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
                        />
                        <label
                          htmlFor="terms"
                          className="ml-3 block text-sm text-gray-700"
                        >
                          I agree to receive communication from the school
                          regarding admission procedures, events, and updates. I
                          confirm that all information provided is accurate to
                          the best of my knowledge.
                        </label>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 group px-10 py-5 bg-gradient-to-r from-[#0A2343] to-[#0A2342] text-white rounded-xl font-semibold focus:outline-none focus:ring-3 focus:ring-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transform flex items-center justify-center gap-3"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <span>Submit Enquiry</span>
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>

                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-10 py-5 border-2 border-gray-300 rounded-xl text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-3 focus:ring-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                        >
                          Reset Form
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
