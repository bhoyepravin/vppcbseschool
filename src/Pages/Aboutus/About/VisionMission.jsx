import React from "react";
import { VISION_MISSION_DATA } from "../../../constant/Aboutus/visionMissionData";

const VisionMission = () => {
  const { title, leftColumn, rightColumn } = VISION_MISSION_DATA;

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold text-gray-600 mb-10">
          {title}
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column – Vision & Mission */}
          <div className="space-y-8">
            {leftColumn.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column – Our Purpose */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {rightColumn.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {rightColumn.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
