// components/Infrastructure/InfrastructurePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import infrastructureData from "../../constant/Aboutus/infrastructureData";

const InfrastructurePage = () => {
  const navigate = useNavigate();
  const data = infrastructureData;

  // Set first section as default
  const [selectedSection, setSelectedSection] = useState(data.sections[0]);
  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal with image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

  // Function to navigate to next image
  const nextImage = () => {
    const currentIndex = selectedSection.images.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % selectedSection.images.length;
    setSelectedImage(selectedSection.images[nextIndex]);
  };

  // Function to navigate to previous image
  const prevImage = () => {
    const currentIndex = selectedSection.images.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + selectedSection.images.length) %
      selectedSection.images.length;
    setSelectedImage(selectedSection.images[prevIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedImage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Modal Overlay */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Blurred Background */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-all duration-300"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative h-[70vh] overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt || selectedImage.caption}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedImage.caption}
                    </h3>
                    {selectedImage.description && (
                      <p className="text-gray-300 text-lg">
                        {selectedImage.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedImage.icon}</span>
                    <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">
                      Image{" "}
                      {selectedSection.images.findIndex(
                        (img) => img.id === selectedImage.id
                      ) + 1}{" "}
                      of {selectedSection.images.length}
                    </span>
                  </div>
                </div>

                {/* Features */}
                {selectedImage.features &&
                  selectedImage.features.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <h4 className="text-lg font-semibold mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedImage.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Section Info */}
                <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">
                      {selectedSection.title}
                    </span>
                    {selectedSection.subtitle && (
                      <span>• {selectedSection.subtitle}</span>
                    )}
                  </div>
                  {selectedImage.duration && (
                    <div className="flex items-center gap-2">
                      <span className="text-lg">⏱️</span>
                      <span>{selectedImage.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
        <button
          onClick={() => navigate("/")}
          className="text-gray-600 hover:underline font-medium flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Home
        </button>
        <span>/</span>
        <span className="font-medium text-gray-500">Infrastructure</span>
      </div>

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Infrastructure
        </h1>
        <div className="w-20 h-1.5 bg-orange-500 mt-3 mb-4 rounded-full"></div>
        <p className="text-gray-600 text-lg max-w-3xl">
          Explore our state-of-the-art campus facilities designed for holistic
          learning and development.
        </p>
      </div>

      {/* 🔹 Section Selection Buttons */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Explore Sections
        </h2>
        <div className="flex flex-wrap gap-3">
          {data.sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setSelectedSection(section)}
              className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                selectedSection.id === section.id
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:bg-orange-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{section.icon || "🏢"}</span>
                <span>{section.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Selected Section Details */}
      {selectedSection && (
        <div className="mb-12">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              {selectedSection.title}
            </h2>
            {selectedSection.subtitle && (
              <h3 className="text-xl text-orange-600 font-semibold mb-3">
                {selectedSection.subtitle}
              </h3>
            )}
            {selectedSection.description && (
              <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
                {selectedSection.description}
              </p>
            )}
          </div>

          {/* Images Grid - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedSection.images.map((image) => (
              <div
                key={image.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(image)}
              >
                {/* Image Container */}
                <div className="relative h-50 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.alt || image.caption}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-full text-sm">
                          #{image.id}
                        </span>
                        <span className="text-white/80 text-sm">
                          {selectedSection.title}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* View Icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 text-white p-3 rounded-full">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                    {image.caption}
                  </h3>
                  {image.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {image.description}
                    </p>
                  )}

                  {/* Features/Tags */}
                  {image.features && image.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {image.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Icon */}
                  {image.icon && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-2xl">{image.icon}</span>
                      {image.duration && (
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          ⏱️ {image.duration}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Image Count Indicator */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              Showing{" "}
              <span className="font-semibold text-orange-600">
                {selectedSection.images.length}
              </span>{" "}
              images of {selectedSection.title}
            </p>
          </div>
        </div>
      )}

      {/* 🔹 All Sections Overview */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          All Infrastructure Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
              onClick={() => {
                setSelectedSection(section);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-center">
                  <span className="text-2xl">{section.icon || "🏢"}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-3 line-clamp-2">
                {section.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {section.images.length} images
                </span>
                <span className="text-orange-600 font-medium flex items-center gap-1">
                  View
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default InfrastructurePage;
