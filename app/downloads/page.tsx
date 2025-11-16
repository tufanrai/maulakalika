import React from "react";
import { FileText, Download, FileImage, FileSpreadsheet } from "lucide-react";
import documents from "@/public/landscaper business card.jpg";
import SearchAndFilterCard from "@/components/cards/SearchAndFilterCard";

export default function Downloads() {
  const downloads = [
    {
      title: "Project Overview Brochure",
      description: "Comprehensive overview of the Kalika Kaligandaki project",
      type: "PDF",
      size: "2.4 MB",
      icon: FileText,
    },
    {
      title: "Technical Specifications",
      description: "Detailed technical documentation and specifications",
      type: "PDF",
      size: "5.1 MB",
      icon: FileText,
    },
    {
      title: "Environmental Impact Assessment",
      description: "Complete environmental impact study report",
      type: "PDF",
      size: "8.7 MB",
      icon: FileText,
    },
    {
      title: "Project Images Gallery",
      description: "High-resolution images of the facility and surroundings",
      type: "ZIP",
      size: "42 MB",
      icon: FileImage,
    },
    {
      title: "Annual Report 2024",
      description: "Financial and operational highlights of the year",
      type: "PDF",
      size: "3.2 MB",
      icon: FileSpreadsheet,
    },
    {
      title: "Safety Guidelines",
      description: "Safety protocols and visitor guidelines",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url("${documents.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full text-white"
      >
        <div className="w-full bg-black/40 py-30 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Access project documents, reports, and resources
            </p>
          </div>
        </div>
      </section>

      {/* Search section */}
      <section className="w-full flex items-center justify-center relative pt-12">
        <SearchAndFilterCard />
      </section>

      {/* Downloads List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="font-medium">{item.type}</span>
                    <span>•</span>
                    <span>{item.size}</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 flex-shrink-0 flex items-center justify-center px-5 py-1 rounded-md">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
