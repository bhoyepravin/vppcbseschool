import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { heroData } from "../../constant/Home/heroData";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Convert images object to array
  const images = Object.values(heroData.images);
  const { welcomeText } = heroData;

  // Auto slide functionality (5 seconds)
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image with Overlay */}
      {images.length > 0 && (
        <div className="absolute inset-0">
          <img
            src={images[currentImageIndex]}
            alt="School Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"></div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full py-8 lg:py-0">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-1 w-full"
          >
            {/* School name with decorative element */}
            <div className="mb-8">
              {/* <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] mb-4"></div> */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Vidya Prabodhini Prashala - CBSE
              </h1>
              {/* <div className="w-16 h-1 bg-gradient-to-r from-[#6d28d9] to-[#7c3aed] mt-4 ml-auto lg:ml-0"></div> */}
            </div>

            <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {welcomeText}
            </p>

            <div className="pt-4">
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-2xl mx-auto lg:mx-0 italic border-l-4 border-[#0A2343] pl-4">
                Established in 1937, shaping future leaders through disciplined
                education and holistic development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 pt-6 w-full">
  <button
    className="
      w-1/2
      px-3 sm:px-6
      py-3
      bg-gradient-to-r from-[#0A2342] to-[#0A2342]
      text-white
      rounded-lg
      font-semibold
      text-sm sm:text-base
      transition-all duration-300
      shadow-lg hover:shadow-xl
    "
  >
    Explore Academics
  </button>

  <button
    className="
      w-1/2
      px-3 sm:px-6
      py-3
      bg-[#0A2342]
      text-white
      rounded-lg
      font-semibold
      text-sm sm:text-base
      border border-white/30
      transition-all duration-300
      hover:bg-[#122f57]
    "
  >
    Virtual Tour
  </button>
</div>

          </motion.div>

          {/* Right Column - Image */}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#0A2342] to-[#0A2342] flex items-center justify-center text-white border border-white/20 hover:from-[#0A2342] hover:to-[#0A2342] transition-all duration-300 cursor-pointer z-20 hidden md:flex shadow-lg hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#0A2342] to-[#0A2342] flex items-center justify-center text-white border border-white/20 hover:from-[#0A2342] hover:to-[#0A2342] transition-all duration-300 cursor-pointer z-20 hidden md:flex shadow-lg hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}
    </section>
  );
}

export default HeroSection;
