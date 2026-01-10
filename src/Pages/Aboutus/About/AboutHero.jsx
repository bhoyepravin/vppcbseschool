import React from "react";
import { ABOUT_VPP_DATA } from "../../../constant/Aboutus/aboutVppData";

const AboutHero = () => {
  const { title, dividerColor, topImage, paragraphs, bottomImage } =
    ABOUT_VPP_DATA;

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold text-gray-600 mb-4">
          {title}
        </h2>

        {/* Divider */}
        <div className="flex justify-center mb-8">
          <span className={`w-24 h-[2px] ${dividerColor}`}></span>
        </div>

        {/* Top Image */}
        <div className="mb-8">
          <img
            src={topImage.src}
            alt={topImage.alt}
            className="w-full h-100 rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4 text-justify">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="mt-10">
          <img
            src={bottomImage.src}
            alt={bottomImage.alt}
            className="w-full h-100 rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
