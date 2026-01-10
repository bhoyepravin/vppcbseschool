import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  middleSectionIntro,
  middleSectionSubjects,
} from "../../../../constant/Aboutus/Academics/Middle/middleSectionData";

const MiddleSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================= INTRO + CIRCULAR DESIGN ================= */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6">
            {middleSectionIntro.title}
          </h2>

          <div className="max-w-4xl mx-auto text-sm md:text-xl space-y-4 text-gray-700 mb-14">
            {middleSectionIntro.passage.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {middleSectionIntro.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-full w-80 h-80 mx-auto flex flex-col items-center justify-center p-8 shadow-lg hover:scale-105 transition"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DROPDOWN SUBJECT SECTION ================= */}
      <section className="w-full py-12 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8">
            Academic Curriculum
          </h2>

          <div className="space-y-4">
            {middleSectionSubjects.map((item, index) => (
              <div
                key={index}
                className="border border-orange-300 rounded-xl bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left"
                >
                  <span className="font-medium text-gray-700">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-400 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 text-sm text-gray-600">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSection;
