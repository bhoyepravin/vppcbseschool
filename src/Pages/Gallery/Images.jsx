// components/Gallery/Images.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Images as ImagesIcon, X, Calendar } from "lucide-react";
import kgGalleryData from "../../constant/GalleryData/kgGalleryData";
import primarySecondaryGalleryData from "../../constant/GalleryData/primarySecondaryGalleryData";

const Images = () => {
  const navigate = useNavigate();
  const [galleryData, setGalleryData] = useState({ categories: [] });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Combine gallery data from both files
  useEffect(() => {
    const loadGalleryData = () => {
      try {
        console.log("Loading gallery data...");
        
        // Create combined data
        const combinedData = {
          categories: []
        };

        // Add KG section if valid
        if (kgGalleryData && kgGalleryData.subcategories && kgGalleryData.subcategories.length > 0) {
          console.log("Adding KG Gallery Data:", kgGalleryData.title);
          combinedData.categories.push(kgGalleryData);
        }

        // Add Primary & Secondary section if valid
        if (primarySecondaryGalleryData && primarySecondaryGalleryData.subcategories && primarySecondaryGalleryData.subcategories.length > 0) {
          console.log("Adding Primary Secondary Data:", primarySecondaryGalleryData.title);
          combinedData.categories.push(primarySecondaryGalleryData);
        }

        console.log("Final Combined Data:", combinedData);
        setGalleryData(combinedData);

        // Set initial selections
        if (combinedData.categories.length > 0) {
          const firstCategory = combinedData.categories[0];
          console.log("Setting first category:", firstCategory.title);
          setSelectedCategory(firstCategory);

          if (firstCategory.subcategories && firstCategory.subcategories.length > 0) {
            const firstSubCategory = firstCategory.subcategories[0];
            console.log("Setting first subcategory:", firstSubCategory.title);
            setSelectedSubCategory(firstSubCategory);
          }
        }
      } catch (error) {
        console.error("Error in loadGalleryData:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryData();
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:underline font-medium"
          >
            ← Home
          </button>
          <span>/</span>
          <span className="font-medium text-gray-500">Gallery</span>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#800000]"></div>
          <p className="ml-4 text-gray-600">Loading gallery data...</p>
        </div>
      </div>
    );
  }

  // Check if we have data
  if (!galleryData.categories || galleryData.categories.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:underline font-medium"
          >
            ← Home
          </button>
          <span>/</span>
          <span className="font-medium text-gray-500">Gallery</span>
        </div>
        <div className="text-center py-16">
          <ImagesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Gallery Data Found
          </h3>
          <p className="text-gray-500">
            Please check the gallery data files.
          </p>
        </div>
      </div>
    );
  }

  // Handle category selection
  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category.title);
    setSelectedCategory(category);
    if (category.subcategories && category.subcategories.length > 0) {
      setSelectedSubCategory(category.subcategories[0]);
    } else {
      setSelectedSubCategory(null);
    }
  };

  // Handle subcategory selection
  const handleSubCategoryClick = (subcategory) => {
    console.log("Subcategory clicked:", subcategory.title);
    setSelectedSubCategory(subcategory);
  };

  // If no category is selected, select the first one
  if (!selectedCategory) {
    handleCategoryClick(galleryData.categories[0]);
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#800000]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
        <button
          onClick={() => navigate("/")}
          className="text-gray-600 hover:underline font-medium"
        >
          ← Home
        </button>
        <span>/</span>
        <span className="font-medium text-gray-500">Gallery</span>
      </div>

      {/* Page Header */}
      <h1 className="text-2xl text-[#800000] md:text-4xl font-serif font-semibold mb-4">Gallery</h1>
      <div className="w-20 h-1 bg-[#800000] mt-3 mb-6"></div>
      <p className="max-w-2xl text-gray-600 mb-8">
        Explore photos from our school events, activities, and celebrations.
      </p>

      {/* 🔹 Category Selection */}
      <div className="flex flex-wrap gap-3 mb-8">
        {galleryData.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className={`px-5 py-2 rounded-full font-medium transition cursor-pointer ${
              selectedCategory?.id === category.id
                ? "bg-[#0A2342] text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.icon} {category.title}
          </button>
        ))}
      </div>

      {/* 🔹 Sub-Category Selection */}
      {selectedCategory && selectedCategory.subcategories && selectedCategory.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-10">
          {selectedCategory.subcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              onClick={() => handleSubCategoryClick(subcategory)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer ${
                selectedSubCategory?.id === subcategory.id
                  ? "bg-[#0A2342] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {subcategory.icon} {subcategory.title}
            </button>
          ))}
        </div>
      )}

      {/* Selected Category Info */}
      {selectedSubCategory && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedSubCategory.title}
          </h2>
          <p className="text-gray-600 mt-1">
            {selectedSubCategory.items?.length || 0} photos
          </p>
        </div>
      )}

      {/* 🔹 Gallery Grid */}
      {selectedSubCategory && selectedSubCategory.items && selectedSubCategory.items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedSubCategory.items.map((item) => (
            <div
              key={`${selectedSubCategory.id}-${item.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error("Image failed to load:", item.image);
                    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 line-clamp-1">
                  {item.title}
                </h3>
                {item.date && (
                  <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <ImagesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Photos Available in this Category
          </h3>
          <p className="text-gray-500">
            Please select another category or subcategory.
          </p>
        </div>
      )}

      {/* 🔹 Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="max-h-[70vh] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt || selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-gray-600 mt-2">
                      {selectedImage.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedSubCategory?.icon || ""}</span>
                  <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">
                    {selectedCategory?.title || "Gallery"}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="flex items-center gap-4">
                  {selectedImage.date && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>
                        {new Date(selectedImage.date).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  )}
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {selectedSubCategory?.title || "Gallery"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 All Categories Overview */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          All Gallery Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
              onClick={() => {
                handleCategoryClick(category);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-3 text-sm">
                {category.subcategories?.length || 0} subcategories
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {(category.subcategories || []).reduce(
                    (total, sub) => total + (sub.items?.length || 0),
                    0
                  )}{" "}
                  photos
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
    </div>
  );
};

export default Images;