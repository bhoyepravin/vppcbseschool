import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Target,
  Users,
  Award,
  Brain,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  Star,
  Sparkles,
} from "lucide-react";
import { curriculumData } from "../../../constant/Aboutus/Academics/curriculumData";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CurriculumCard = ({ item, index, isMobile = false }) => {
  const iconMap = {
    book: <BookOpen className="h-10 w-10" />,
    target: <Target className="h-10 w-10" />,
    users: <Users className="h-10 w-10" />,
    award: <Award className="h-10 w-10" />,
    brain: <Brain className="h-10 w-10" />,
    chart: <BarChart3 className="h-10 w-10" />,
  };

  // Animal sticker data
  const animalStickers = [
    {
      emoji: "🦁",
      position: "top-4 left-4",
      size: "text-2xl",
      rotate: "-12deg",
    },
    {
      emoji: "🐘",
      position: "top-4 right-4",
      size: "text-3xl",
      rotate: "15deg",
    },
    {
      emoji: "🐒",
      position: "bottom-4 left-4",
      size: "text-2xl",
      rotate: "-8deg",
    },
    {
      emoji: "🦒",
      position: "bottom-4 right-4",
      size: "text-3xl",
      rotate: "10deg",
    },
    {
      emoji: "🐼",
      position: "top-1/4 left-10",
      size: "text-2xl",
      rotate: "-5deg",
    },
    {
      emoji: "🦓",
      position: "bottom-1/4 right-10",
      size: "text-2xl",
      rotate: "8deg",
    },
  ];

  const sticker = animalStickers[index % animalStickers.length];
  const cardEmojis = ["🌟", "🚀", "🏆", "🎨", "🧠", "📊"];
  const titleEmojis = ["🎯", "✨", "⚡", "🎭", "💡", "📈"];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
      whileHover={{
        y: isMobile ? 0 : -8,
        rotate: isMobile ? 0 : [0, -2, 2, -2, 0],
        transition: { duration: 0.5 },
      }}
      className={`group relative bg-white rounded-3xl ${
        isMobile ? "p-4" : "p-6"
      } shadow-2xl border-4 border-transparent hover:border-pink-200 transition-all duration-300 overflow-hidden`}
      style={{
        background: `linear-gradient(135deg, white 85%, ${item.bgColor} 100%)`,
      }}
    >
      {/* Animal Sticker */}
      <motion.div
        animate={{
          y: [0, -4, 0],
          rotate: [
            sticker.rotate,
            `calc(${sticker.rotate} + 5deg)`,
            sticker.rotate,
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className={`absolute ${sticker.position} ${sticker.size}`}
      >
        {sticker.emoji}
      </motion.div>

      {/* Floating Stars */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute -top-2 -right-2 text-yellow-400"
      >
        <Star className="h-6 w-6" fill="currentColor" />
      </motion.div>

      {/* Card Header */}
      <div
        className={`flex items-start justify-between ${
          isMobile ? "mb-3" : "mb-4"
        } relative z-10`}
      >
        <div
          className={`p-3 rounded-2xl ${item.bgColor} text-white shadow-lg ${
            isMobile ? "" : "group-hover:scale-110 group-hover:rotate-12"
          } transition-transform duration-300`}
        >
          {iconMap[item.icon] || <BookOpen className="h-8 w-8" />}
        </div>
        <div className={isMobile ? "text-lg" : "text-xl"}>
          {cardEmojis[index]}
        </div>
      </div>

      {/* Card Content */}
      <div className={`space-y-3 relative z-10`}>
        <h3
          className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 ${
            isMobile ? "text-lg" : "text-xl"
          }`}
        >
          {item.title}
          <span className={`ml-2 ${isMobile ? "text-base" : "text-lg"}`}>
            {titleEmojis[index]}
          </span>
        </h3>

        {/* Fun divider */}
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-6 bg-pink-400 rounded-full"></div>
          <div className="h-1.5 w-6 bg-yellow-400 rounded-full"></div>
          <div className="h-1.5 w-6 bg-blue-400 rounded-full"></div>
          <div className="h-1.5 w-6 bg-green-400 rounded-full"></div>
        </div>

        <p
          className={`text-gray-700 leading-relaxed ${
            isMobile ? "text-sm line-clamp-2" : "text-base line-clamp-3"
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Features List with Emojis */}
      {item.features && (
        <div className={`mt-3 pt-3 border-t-2 border-dashed border-pink-200`}>
          <ul className={`space-y-2`}>
            {item.features.slice(0, 2).map((feature, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 3 }}
                className={`flex items-center gap-2 text-gray-700 ${
                  isMobile ? "text-xs" : "text-sm"
                }`}
              >
                <span className={isMobile ? "text-base" : "text-lg"}>
                  {idx === 0 && "✅"}
                  {idx === 1 && "🎯"}
                </span>
                <span className={`font-medium ${isMobile ? "truncate" : ""}`}>
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Learn More Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`mt-4 pt-3 border-t-2 border-dashed border-blue-200`}
      >
        <button
          className={`group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
            isMobile ? "py-1.5 px-3 text-xs" : "py-2 px-4 text-sm"
          }`}
        >
          <span>Let's Explore! 🚀</span>
          <ChevronRight
            className={`group-hover:translate-x-1 transition-transform duration-300 ${
              isMobile ? "h-3 w-3" : "h-4 w-4"
            }`}
          />
        </button>
      </motion.div>

      {/* Corner decoration */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-200/30 to-pink-200/30 rounded-full blur-xl"></div>
    </motion.div>
  );
};

const OurCurriculum = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % curriculumData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + curriculumData.length) % curriculumData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide for mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorative Elements - Fun shapes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>

      {/* Floating Emojis */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-10 left-1/4 text-4xl"
      >
        🌈
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
        className="absolute top-20 right-1/4 text-3xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-20 left-1/3 text-4xl"
      >
        🎈
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg mb-6"
          >
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Learning is Fun! 🎉
            </span>
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-blue-600 md:text-4xl text-3xl">
              Our Super
            </span>
            <span className="block text-pink-500 md:text-4xl text-3xl">
              Fun Curriculum <span className="text-4xl">📚</span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto md:text-xl mb-8"
          >
            Where learning meets adventure! 🚀 Join our animal friends on an
            exciting educational journey full of discoveries and fun! 🦁🐘🐒
          </motion.p>

          {/* Fun stats with emojis */}
          <div className="flex justify-center gap-6 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
            >
              <span className="md:text-2xl">🎨</span>
              <span className="font-bold text-blue-600">Creative</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
            >
              <span className="md:text-2xl">🏃‍♂️</span>
              <span className="font-bold text-green-600">Active</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
            >
              <span className="md:text-2xl">🤝</span>
              <span className="font-bold text-purple-600">Friendly</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
            >
              <span className="md:text-2xl">🎯</span>
              <span className="font-bold text-orange-600">Goal-Oriented</span>
            </motion.div>
          </div>
        </div>

        {/* Curriculum Cards - Desktop Grid & Mobile Slider */}
        <div className="relative">
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumData.map((item, index) => (
              <CurriculumCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Mobile Slider View */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              {/* Slider Container */}
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {curriculumData.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-2">
                    <CurriculumCard item={item} index={index} isMobile={true} />
                  </div>
                ))}
              </div>

              {/* Slider Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {curriculumData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 w-6"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide === curriculumData.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Auto-play indicator */}
              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  <span>Auto-slide enabled</span>
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCurriculum;
