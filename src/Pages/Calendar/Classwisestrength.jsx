import React, { useState } from "react";
import { Download, Users, ChevronRight } from "lucide-react";
import { classStrengthData } from "../../constant/Calendar/classStrengthData";

const Classwisestrength = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");

  const handleDownload = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  const selectedStrength = classStrengthData.find(
    (item) => item.year === selectedYear
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r  rounded-full ">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-500">
              Class Wise Strength
            </h1>
          </div>
          <p className="text-gray-600">
            View and download student strength details by academic year
          </p>
        </div>

        {/* Year Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Select Academic Year
          </h2>
          <div className="flex flex-wrap gap-3">
            {classStrengthData.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedYear === item.year
                    ? "bg-gradient-to-r from-orange-500 to-orange-500 text-white shadow-md transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Current Selection Display */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedStrength?.title}
          </h3>
          <p className="text-gray-600 mb-4">{selectedStrength?.description}</p>

          {/* Statistics */}
          <div className="flex justify-center gap-6 my-6">
            <div className="text-center">
              {/* <div className="text-3xl font-bold text-orange-600">
                {selectedStrength?.totalStudents.toLocaleString()}+
              </div> */}
              <div className="text-sm text-gray-500">Total Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">
                {selectedStrength?.classes}
              </div>
              <div className="text-sm text-gray-500">Classes</div>
            </div>
          </div>

          <button
            onClick={() => handleDownload(selectedStrength?.pdf)}
            className="inline-flex items-center gap-3 px-8 py-4 inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="w-6 h-6" />
            Download {selectedYear} Strength Report (PDF)
          </button>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-700 mb-2">
              Report Information
            </h4>
            <p className="text-sm text-gray-500">
              Contains detailed class-wise student distribution, section
              details, and strength statistics
            </p>
          </div>
        </div>

        {/* All Available Downloads */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-700">
              All Available Strength Reports
            </h3>
          </div>

          <div className="space-y-4">
            {classStrengthData.map((item) => (
              <div
                key={item.year}
                className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group cursor-pointer"
                onClick={() => setSelectedYear(item.year)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-700">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Total Students: {item.totalStudents.toLocaleString()} |
                      Classes: {item.classes}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600">
                    Download
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(item.pdf);
                    }}
                    className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Vidya Prabodhini Prashala CBSE • Student Strength Records</p>
          <p className="mt-1 text-xs">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Classwisestrength;
