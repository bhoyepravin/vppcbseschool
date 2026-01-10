import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { studentJourney } from "../../constant/Home/studentJourney";

const StudentJourney = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 via-purple-500/5 to-transparent rounded-full translate-x-48 translate-y-48"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-[#800000] fill-[#800000]" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#800000] via-[#800000] to-[#800000] bg-clip-text text-transparent">
              Key Highlights of Our School
            </h2>
            <Star className="w-6 h-6 text-[#800000] fill-[#800000]" />
          </div>
          <motion.div
            className="h-1.5 w-24 bg-gradient-to-r from-[#800000] via-[#800000] to-[#800000] mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            Discover the exceptional features and facilities that make Vidya
            Prabodhini Prashala a premier educational institution.
          </p>
        </motion.div>

        {/* Desktop Slider */}
        <div className="hidden lg:flex items-center relative">
          {/* Left Chevron */}
          <motion.button
            onClick={() => scroll("left")}
            className="absolute -left-16 z-10 p-4 bg-gradient-to-r from-[#0A2342] to-[#0A2342] text-white rounded-2xl shadow-2xl hover:from-[#0A2342] hover:to-[#0A2342] transition-all duration-300 hover:scale-80 hover:shadow-3xl backdrop-blur-sm border border-white/20"
            aria-label="Previous highlights"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-7 h-7" />
          </motion.button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {studentJourney.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex-none w-96 bg-gradient-to-br from-white to-white/90 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 snap-start group hover:-translate-y-3 backdrop-blur-sm border border-white/50"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full">
                    Highlight {index + 1}
                  </div> */}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#800000] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    {/* <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-2 group">
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Chevron */}
          <motion.button
            onClick={() => scroll("right")}
            className="absolute -right-16 z-10 p-4 bg-gradient-to-r from-[#0A2343] to-[#0A2343] text-white rounded-2xl shadow-2xl hover:from-[#0A2343] hover:to-[#0A2343] transition-all duration-300 hover:scale-80 hover:shadow-3xl backdrop-blur-sm border border-white/20"
            aria-label="Next highlights"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-7 h-7" />
          </motion.button>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory px-2">
            {studentJourney.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex-none w-80 bg-gradient-to-br from-white to-white/90 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 snap-start border border-white/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {studentJourney.items.slice(0, 4).map((_, index) => (
              <div
                key={index}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-50"
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="group px-10 py-4 bg-gradient-to-r from-[#200c35] via-[#331461] to-[#32086d] text-white rounded-xl font-semibold hover:from-purple-700  hover:-translate-y-1 transform flex items-center gap-3 mx-auto">
            <span>View All Highlights</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default StudentJourney;
