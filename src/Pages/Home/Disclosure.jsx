import React from "react";
import certificatesData from "../../constant/Disclosure/CertificatesData";
import { FileText, Download } from "lucide-react";

const Disclosure = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-2">
          <FileText className="w-8 h-8 text-orange-500" />
          <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
            Certificates & Documents
          </h1>
        </div>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      {/* ================= CERTIFICATES LIST ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-orange-500" />
              <span className="text-gray-700 font-medium">{item.name}</span>
            </div>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 flex items-center gap-1 font-semibold"
            >
              <Download className="w-5 h-5" /> Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disclosure;
