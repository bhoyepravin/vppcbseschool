import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain,
  Heart,
  Users,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Palette,
  Music,
  Gamepad2,
} from "lucide-react";

const OurPrograms = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 1,
      title: "Playgroup",
      age: "Age 2 - 3 years",
      color: "from-pink-400 to-purple-500",
      icon: <Sparkles className="h-8 w-8" />,
      description:
        "First steps into the world of learning with sensory play and basic social interaction",
      activities: [
        "Sensory Play",
        "Basic Shapes",
        "Music Time",
        "Story Circle",
      ],
    },
    {
      id: 2,
      title: "Nursery",
      age: "Age 3 - 4 years",
      color: "from-blue-400 to-teal-500",
      icon: <BookOpen className="h-8 w-8" />,
      description:
        "Building foundational skills through play-based learning and creative activities",
      activities: [
        "Alphabet Fun",
        "Number Games",
        "Creative Art",
        "Rhyme Time",
      ],
    },
    {
      id: 3,
      title: "Junior Kindergarten",
      age: "Age 4 - 5 years",
      color: "from-green-400 to-emerald-500",
      icon: <Palette className="h-8 w-8" />,
      description:
        "Developing cognitive abilities and social skills through structured learning",
      activities: [
        "Reading Basics",
        "Math Concepts",
        "Science Fun",
        "Team Projects",
      ],
    },
    {
      id: 4,
      title: "Senior Kindergarten",
      age: "Age 5 - 6 years",
      color: "from-orange-400 to-red-500",
      icon: <Star className="h-8 w-8" />,
      description:
        "Preparing for formal schooling with advanced concepts and independent learning",
      activities: [
        "Reading Fluency",
        "Basic Math Operations",
        "Science Experiments",
        "Problem Solving",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-20 left-10 text-4xl"
      >
        🧠
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        className="absolute top-40 right-20 text-3xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-20 right-1/4 text-4xl"
      >
        🌟
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg mb-6">
            <Brain className="h-5 w-5 text-pink-500" />
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Early Brain Development
            </span>
            <Heart className="h-5 w-5 text-pink-500" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-600 text-3xl md:text-4xl">OUR</span>
            <span className="block text-pink-500 text-3xl md:text-4xl">
              PROGRAMS
            </span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mb-8 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl text-white">
                  <Brain className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Critical Brain Development Phase
                </h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At <span className="font-bold text-pink-500">PODAR PREP</span>,
                we provide optimal stimulation for energizing the brain cells,
                which shape the behaviour, emotions and development of each
                child—because over
                <span className="font-bold text-blue-600 mx-2">58%</span>
                of a child's cumulative brain development occurs prior to the
                age of 6.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This indicates the critical importance of appropriate care and
                stimulation of the brain in the early years in order to ensure
                healthy brain development and growth.
              </p>

              {/* Brain Development Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      value: "85%",
                      label: "Brain Growth",
                      emoji: "🧠",
                      color: "from-pink-400 to-purple-400",
                    },
                    {
                      value: "90%",
                      label: "Personality",
                      emoji: "😊",
                      color: "from-blue-400 to-teal-400",
                    },
                    {
                      value: "75%",
                      label: "Learning Ability",
                      emoji: "🎯",
                      color: "from-green-400 to-emerald-400",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-lg">{stat.emoji}</div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: "🎨",
                  title: "Creative Expression",
                  color: "bg-pink-100",
                },
                { icon: "🎵", title: "Music & Rhythm", color: "bg-blue-100" },
                { icon: "🧩", title: "Problem Solving", color: "bg-green-100" },
                { icon: "🤝", title: "Social Skills", color: "bg-yellow-100" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`${feature.color} p-4 rounded-2xl text-center`}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-gray-800">
                    {feature.title}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Programs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Program Cards */}
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => setActiveProgram(index)}
                className={`group relative bg-white rounded-3xl p-6 shadow-lg border-4 cursor-pointer transition-all duration-300 ${
                  activeProgram === index
                    ? `border-gradient-to-r ${program.color} border-transparent bg-gradient-to-r from-white to-transparent`
                    : "border-white hover:border-pink-200"
                }`}
              >
                {/* Active indicator */}
                {activeProgram === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  >
                    ✓
                  </motion.div>
                )}

                {/* Program Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${program.color} text-white shadow-lg`}
                    >
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {program.age}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      activeProgram === index
                        ? "rotate-90"
                        : "group-hover:translate-x-2"
                    }`}
                  />
                </div>

                {/* Program Description */}
                <p className="text-gray-700 mb-4">{program.description}</p>

                {/* Activities */}
                <div className="flex flex-wrap gap-2">
                  {program.activities.map((activity, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {activity}
                    </motion.span>
                  ))}
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-3xl"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
