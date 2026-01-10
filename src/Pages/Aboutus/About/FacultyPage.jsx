// components/Faculty/FacultyPage.jsx
import React from "react";
import { facultyData } from "../../../constant/Aboutus/FacultyData/facultyData";

const FacultyPage = () => {
  const { title, content, topImage, bottomImage } = facultyData;

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold text-gray-500 mb-4">
          {content.title}
        </h2>

        {/* Divider */}
        <div className="flex justify-center mb-8">
          <span className="w-24 h-[2px] bg-orange-400"></span>
        </div>

        {/* Top Image - Full Width */}
        <div className="mb-8">
          <img
            src={topImage.src}
            alt={topImage.alt}
            className="w-full h-64 md:h-80 lg:h-100 rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Content - Paragraphs */}
        <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6 text-justify mb-10">
          {content.paragraphs.map((text, index) => (
            <p key={index} className="text-gray-700">
              {text}
            </p>
          ))}
        </div>

        {/* Bottom Image - Full Width */}
        {/* <div className="mt-10">
          <img
            src={bottomImage.src}
            alt={bottomImage.alt}
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default FacultyPage;
