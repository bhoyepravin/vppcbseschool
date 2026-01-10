import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Star,
  Sparkles,
  CheckCircle,
  Pencil,
  School,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { elephantsticker } from "../../../assets";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    city: "",
    schoolName: "",
    studentClass: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        state: "",
        city: "",
        schoolName: "",
        studentClass: "",
        email: "",
        phone: "",
      });
    }, 3000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Stickers Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Sticker Container */}
            <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl p-8 shadow-2xl border-4 border-white relative overflow-hidden">
              {/* Single Central Sticker */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-0 opacity-20"
              >
                {/* You can replace this with your own sticker image */}
                <img
                  src={elephantsticker}
                  alt="Fun Sticker"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                <div className="mb-8">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                      Join the
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                      Fun! 🎉
                    </span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-700 text-lg"
                  >
                    Let's start your amazing learning adventure with us!
                  </motion.p>
                </div>

                {/* Single Large Sticker with Image */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="relative mx-auto w-64 h-64"
                >
                  {/* Decorative rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-4 border-dashed border-yellow-400 rounded-full opacity-50"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 25,
                      ease: "linear",
                    }}
                    className="absolute inset-4 border-4 border-dashed border-pink-400 rounded-full opacity-30"
                  ></motion.div>

                  {/* Main sticker image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={elephantsticker}
                      alt="Fun Learning Sticker"
                      className="w-48 h-48 object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Floating particles around the sticker */}
                  {["⭐", "✨", "🌟"].map((particle, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        y: [0, -15, 0],
                        x: [0, index === 1 ? 10 : -10, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: index * 0.5,
                      }}
                      className={`absolute text-2xl ${
                        index === 0
                          ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          : index === 1
                          ? "top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
                          : "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                      }`}
                    >
                      {particle}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Fun Facts */}

                {/* Bottom decorative elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center gap-4 pt-4"
                >
                  {["🎨", "📚", "🎵", "⚽"].map((emoji, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.2 }}
                      className="text-2xl"
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Background decorative floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-4 left-4 text-3xl opacity-30"
              >
                🌈
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }}
                className="absolute top-4 right-4 text-3xl opacity-30"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, delay: 0.6 }}
                className="absolute bottom-4 left-4 text-3xl opacity-30"
              >
                🎯
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, delay: 0.9 }}
                className="absolute bottom-4 right-4 text-3xl opacity-30"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-white"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: 3, duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Yay! 🎉
                </h3>
                <p className="text-gray-700 text-lg mb-8">
                  Your inquiry has been sent successfully!
                  <br />
                  We'll get back to you soon with exciting details! ✨
                </p>
                <div className="text-4xl">🦁 📚 🎨</div>
              </motion.div>
            ) : (
              <>
                {/* Form Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl">
                      <Pencil className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Let's Get Started!
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    Fill in your details and join our fun learning community! 🚀
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* First Name */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        <User className="h-4 w-4" />
                        Student First Name*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
                          placeholder="Enter first name"
                        />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl"
                        >
                          👧
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Last Name */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        <User className="h-4 w-4" />
                        Last Name*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
                          placeholder="Enter last name"
                        />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl"
                        >
                          👦
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* State */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        State*
                      </label>
                      <div className="relative">
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none appearance-none transition-all duration-300"
                        >
                          <option value="">Select State</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="delhi">Delhi</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="tamilnadu">Tamil Nadu</option>
                          <option value="gujarat">Gujarat</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
                          📍
                        </div>
                      </div>
                    </motion.div>

                    {/* City */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        City*
                      </label>
                      <div className="relative">
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none appearance-none transition-all duration-300"
                        >
                          <option value="">Select City</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="pune">Pune</option>
                          <option value="bangalore">Bangalore</option>
                          <option value="chennai">Chennai</option>
                          <option value="ahmedabad">Ahmedabad</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
                          🏙️
                        </div>
                      </div>
                    </motion.div>

                    {/* School Name */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        <School className="h-4 w-4" />
                        School Name*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
                          placeholder="Enter school name"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
                          🏫
                        </div>
                      </div>
                    </motion.div>

                    {/* Class */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        Class*
                      </label>
                      <div className="relative">
                        <select
                          name="studentClass"
                          value={formData.studentClass}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none appearance-none transition-all duration-300"
                        >
                          <option value="">Select Class</option>
                          <option value="playgroup">Playgroup</option>
                          <option value="nursery">Nursery</option>
                          <option value="jr_kg">Junior KG</option>
                          <option value="sr_kg">Senior KG</option>
                          <option value="grade1">Grade 1</option>
                          <option value="grade2">Grade 2</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
                          📖
                        </div>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        <Mail className="h-4 w-4" />
                        Email*
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
                          placeholder="Enter email address"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
                          📧
                        </div>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={inputVariants} className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-semibold">
                        <Phone className="h-4 w-4" />
                        Phone*
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
                          placeholder="Enter phone number"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl">
                          📱
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  >
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                    <span className="text-xl">🚀</span>
                  </motion.button>

                  {/* Form Footer */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      We'll contact you within 24 hours! ⏰
                      <br />
                      Get ready for fun! 🎉
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
