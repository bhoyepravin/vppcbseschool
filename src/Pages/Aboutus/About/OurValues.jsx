import React from "react";

const values = [
  {
    title: "INTEGRITY",
    description:
      "Upholding honesty and strong moral principles in every action.",
  },
  {
    title: "RESPECT",
    description: "Valuing diversity, empathy, and mutual understanding.",
  },
  {
    title: "EXCELLENCE",
    description: "Striving for continuous improvement and high standards.",
  },
  {
    title: "RESPONSIBILITY",
    description:
      "Taking ownership of actions and contributing positively to the community.",
  },
  {
    title: "DISCIPLINE",
    description: "Maintaining consistency, focus, and self-control.",
  },
  {
    title: "INNOVATION",
    description: "Encouraging creativity, problem-solving, and adaptability.",
  },
  {
    title: "COMPASSION",
    description: "Caring for others and promoting kindness and service.",
  },
  {
    title: "TEAMWORK",
    description:
      "Building cooperation and collaboration among all stakeholders.",
  },
  {
    title: "ENVIRONMENTAL\nAWARENESS",
    description: "Promoting sustainable practices and respect for nature.",
  },
  {
    title: "PATRIOTISM",
    description:
      "Instilling pride in the nation’s heritage and commitment to its progress.",
  },
];

const OurValues = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold text-gray-600 mb-10">
          Our Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
          {values.map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-light tracking-wide leading-tight bg-gradient-to-r from-orange-300 via-orange-600 to-orange-800 bg-clip-text text-transparent whitespace-pre-line">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
