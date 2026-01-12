import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Download } from "lucide-react";
import { logo } from "../../assets";
import InquiryModal from "../InquiryForm/InquiryModal";
import { Link, useNavigate } from "react-router-dom";
import downloadbrochure from "../../assets/Brochure/prospectus_2024_final.pdf";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);
  const closeTimeout = useRef(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const navigate = useNavigate();

  /* 🔒 Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "About Us",
      path: "",
      dropdown: [
        { label: "About Us", path: "/about/about" },
        { label: "Infrastructure", path: "/about/infrastructure" },
        { label: "Faculty", path: "/about/faculty" },
        // {
        //   label: "Academics",
        //   path: "",
        //   dropdown: [
        //     { label: "Pre-Primary", path: "/academics/pre-primary" },
        //     { label: "Primary", path: "/academics/primary" },
        //     { label: "Secondary", path: "/academics/secondary" },
        //   ],
        // },
        { label: "Management Committee", path: "/about/management-committee" },
        { label: "Teachers", path: "/about/teachers" },
      ],
    },
    {
      label: "Admissions",
      path: "/admissions",
      dropdown: [
        { label: "Admission Guidelines", path: "/admissions/guidelines" },
        { label: "Admission Procedure", path: "/admissions/procedure" },
        
        { label: "Online Enquiry Form", path: "/admissions/enquiry" },
        { label: "Admission Form", path: "/admissions/admission" },
      ],
    },
    {
      label: "Academics",
      path: "/academics",
      dropdown: [
        { label: "Pre-Primary", path: "/academics/pre-primary" },
        { label: "Primary", path: "/academics/primary" },
        { label: "Middle", path: "/academics/middle" },
        { label: "Secondary", path: "/academics/secondary" },
        { label: "Result", path: "/academics/result" },
      ],
    },
    {
      label: "Info Corner",
      path: "/info-corner",
      dropdown: [
        // { label: "Reports", path: "/info-corner/reports" },
        // { label: "Book List", path: "/info-corner/book-list" },
        { label: "CBSE Affiliation", path: "/info-corner/cbse-affiliation" },
        {
          label: "Extension of Affiliation Certificate",
          path: "/info-corner/affiliation-certificate",
        },
        { label: "Circulars", path: "/info-corner/circulars" },
        { label: "Curriculum", path: "/info-corner/curriculum" },
        { label: "Students Council", path: "/info-corner/students-council" },
      ],
    },
    {
      label: "Calendar",
      path: "",
      dropdown: [
        { label: "Academic Calendar", path: "calendar/academic-calendar" },
        { label: "Class Wise Strength", path: "calendar/class-wise-strength" },
        // { label: "Time-Table", path: "calendar/table-table" },
      ],
    },
    {
      label: "Gallery",
      path: "/gallery",
      dropdown: [
        { label: "Image Gallery", path: "/gallery/images" },
        { label: "Video Gallery", path: "/gallery/videos" },
      ],
    },
    {
      label: "Sports & Games",
      path: "/sports",
      dropdown: [
        { label: "Photographs", path: "/sports/photos" },
        { label: "Videos", path: "/sports/videos" },
        {
          label: "National & International Participants",
          path: "/sports/national-international-participants",
        },
      ],
    },
    { label: "Co-Curricular", path: "/co-curricular" },
    // { label: "Blogs", path: "/blog" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Social Connect", path: "/social-connect" },
  ];

  const handleDownloadBrochure = () => {
    // Google Tag Manager tracking can be added here
    console.log("Download brochure clicked");

    // For now, we'll use a sample PDF link
    const link = document.createElement("a");
    link.href = downloadbrochure;
    link.download = "Vidya_Prabodhini_Prashala_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optionally, track the download
    if (window.DownloadBrochureGoogleTag) {
      window.DownloadBrochureGoogleTag();
    }
  };

  /* Desktop hover */
  const handleMouseEnter = (index) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 250);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
    setMobileDropdown(null);
    setMobileSubDropdown(null);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] sticky top-0 z-50 shadow-xl border-b border-[#3a2a5a]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 no-underline group">
            <img src={logo} alt="Logo" className="h-18 md:h-25 w-auto" />
            {/* <div>
              <div className="text-xs md:text-sm font-semibold text-[#a78bfa] group-hover:text-[#c4b5fd] transition-colors duration-300">
                THE CENTRAL HINDU MILITARY EDUCATION SOCIETY'S
              </div>
              <div className="text-xs md:text-xl text-white font-extrabold tracking-wide">
                VIDYA PRABODHINI PRASHALA C.B.S.E
              </div>
              <div className="text-xs md:text-sm text-[#c4b5fd]">
                Affiliated with C.B.S.E (New Delhi)
              </div>
              <div className="text-xs md:text-sm text-[#c4b5fd]">
                Affiliation No. 1130258
              </div>
            </div> */}
          </Link>

          <div className="hidden md:flex flex-row gap-3">
            <div className="flex">
              <button
                className="flex items-center gap-2 text-white px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 "
                onClick={handleDownloadBrochure}
                aria-label="Download Brochure"
              >
                <Download size={18} className="text-[#800000]" />
                <span className="font-semibold text-[#800000] text-sm tracking-wide">
                  Download Brochure
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => navigate("/admissions/enquiry")}
                className=" w-full bg-gradient-to-r from-[#0A2342] to-[#0A2342] hover:from-[#0A2342] hover:to-[#0A2342] text-white text-xs px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
              >
                Enquiry Form
              </button>

              <Link to="/disclosure" className="no-underline">
                <button className="bg-gradient-to-r from-[#0A2342] to-[#0A2342] hover:from-[#0A2342] hover:to-[#0A2342] text-white text-xs px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full font-semibold tracking-wide">
                  MANDATORY PUBLIC DISCLOSURE
                </button>
              </Link>
               <Link to="/vacancy" className="no-underline">
                <button className="bg-gradient-to-r from-[#0A2342] to-[#0A2342] hover:from-[#0A2342] hover:to-[#0A2342] text-white text-xs px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full font-semibold tracking-wide">
                  CAREER
                </button>
              </Link>
            </div>
          </div>

          <button
            className="md:hidden bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] hover:from-[#6d28d9] hover:to-[#5b21b6] text-white p-2.5 rounded-lg shadow-md transition-all duration-300"
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <div className="bg-gradient-to-r from-[#0a2342] via-[#0a2342] to-[#0a2342] hidden md:block sticky top-38 z-40 shadow-xl border-b border-[#3a2a5a]">
        <div className="container mx-auto px-4">
          <ul className="flex gap-6 py-3.5 text-white text-sm font-semibold">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#a78bfa] transition-all duration-300 group/nav">
                    {item.label}
                    <ChevronDown
                      size={12}
                      className="group-hover/nav:rotate-180 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5  hover:text-[#a78bfa] no-underline text-white transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                )}

                {activeMenu === index && item.dropdown && (
                  <div className="absolute top-full left-0 mt-3 bg-gradient-to-b from-[#1e1530] to-[#2a1d3f] shadow-2xl rounded-xl min-w-64 border border-[#3a2a5a] overflow-hidden">
                    {item.dropdown.map((sub, i) => (
                      <div key={i} className="relative group/sub">
                        {sub.dropdown ? (
                          <>
                            <div className="flex justify-between items-center text-[#c4b5fd] px-5 py-3.5 text-sm hover:bg-[#3a2a5a]/50 cursor-pointer transition-all duration-300 border-b border-[#3a2a5a]/50">
                              <span>{sub.label}</span>
                              <ChevronDown
                                size={14}
                                className="-rotate-90 text-[#a78bfa] group-hover/sub:text-[#c4b5fd] transition-colors duration-300"
                              />
                            </div>

                            <div className="absolute left-full top-0 ml-1 bg-gradient-to-b from-[#1e1530] to-[#2a1d3f] shadow-2xl rounded-xl min-w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 border border-[#3a2a5a]">
                              {sub.dropdown.map((child, ci) => (
                                <Link
                                  key={ci}
                                  to={child.path}
                                  className="block px-5 py-3.5 text-sm hover:bg-[#3a2a5a]/50 text-[#c4b5fd] no-underline transition-all duration-300 border-b border-[#3a2a5a]/50 last:border-b-0"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={sub.path}
                            className="block px-5 py-3.5 text-sm hover:bg-[#3a2a5a]/50 text-[#c4b5fd] no-underline transition-all duration-300 border-b border-[#3a2a5a]/50 last:border-b-0"
                          >
                            {sub.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-0 bg-gradient-to-b from-[#241835] via-[#2d1f42] to-[#1e1530] text-white z-50 overflow-y-auto">
            <button
              className="absolute top-4 right-4 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] p-2.5 rounded-full hover:from-[#6d28d9] hover:to-[#5b21b6] shadow-lg transition-all duration-300"
              onClick={() => setMobileOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>

            {/* Mobile Download Brochure Button */}
            <div className="px-4 pt-8">
              <button
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] hover:from-[#6d28d9] hover:to-[#5b21b6] text-white px-6 py-4 rounded-xl shadow-lg w-full mb-6 cursor-pointer transition-all duration-300"
                onClick={() => {
                  handleDownloadBrochure();
                  setMobileOpen(false);
                }}
              >
                <Download size={22} className="text-[#c4b5fd]" />
                <span className="font-semibold text-lg tracking-wide">
                  Download Brochure
                </span>
              </button>
            </div>

            <ul className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <>
                      <div
                        className="flex justify-between items-center py-3.5 px-4 font-semibold border-b border-[#a78bfa]/30 cursor-pointer hover:bg-[#3a2a5a]/50 rounded-lg transition-all duration-300"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === index ? null : index
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            mobileDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {mobileDropdown === index && (
                        <div className="bg-gradient-to-b from-[#1e1530] to-[#2a1d3f] text-[#c4b5fd] rounded-xl m-2 mt-3 border border-[#3a2a5a] shadow-inner">
                          {item.dropdown.map((sub, i) => (
                            <div key={i}>
                              {sub.dropdown ? (
                                <>
                                  <div
                                    className="flex justify-between items-center px-5 py-3.5 font-semibold cursor-pointer border-b border-[#3a2a5a] hover:bg-[#3a2a5a]/50 transition-all duration-300"
                                    onClick={() =>
                                      setMobileSubDropdown(
                                        mobileSubDropdown === i ? null : i
                                      )
                                    }
                                  >
                                    <span>{sub.label}</span>
                                    <ChevronDown
                                      size={16}
                                      className={`transition-transform duration-300 ${
                                        mobileSubDropdown === i
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </div>

                                  {mobileSubDropdown === i && (
                                    <div className="bg-gradient-to-b from-[#2a1d3f] to-[#1e1530]">
                                      {sub.dropdown.map((child, ci) => (
                                        <div
                                          key={ci}
                                          className="px-8 py-3.5 cursor-pointer hover:bg-[#3a2a5a]/50 border-b border-[#3a2a5a]/50 last:border-b-0 transition-all duration-300"
                                          onClick={() =>
                                            handleNavigation(child.path)
                                          }
                                        >
                                          {child.label}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <div
                                  className="px-5 py-3.5 cursor-pointer hover:bg-[#3a2a5a]/50 border-b border-[#3a2a5a] last:border-b-0 transition-all duration-300"
                                  onClick={() => handleNavigation(sub.path)}
                                >
                                  {sub.label}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div
                      className="py-3.5 px-4 font-semibold border-b border-[#a78bfa]/30 cursor-pointer hover:bg-[#3a2a5a]/50 rounded-lg transition-all duration-300"
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.label}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Buttons */}
            <div className="px-4 py-8">
              <button
                onClick={() => {
                  navigate("/admissions/enquiry");
                  setMobileOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#800000] to-[#800000] hover:from-[#800000] hover:to-[#800000] text-white py-3.5 rounded-xl mb-4 font-semibold text-sm tracking-wide shadow-lg transition-all duration-300"
              >
                INQUIRY FORM
              </button>

              <button
                onClick={() => {
                  navigate("/disclosure");
                  setMobileOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#800000] to-[#800000] hover:from-[#800000] hover:to-[#800000] text-white py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-lg transition-all duration-300"
              >
                MANDATORY PUBLIC DISCLOSURE
              </button>
            </div>
          </div>
        </>
      )}

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </>
  );
};

export default Navbar;
