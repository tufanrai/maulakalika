import Project_news_card from "@/components/cards/project_news_card";
import DownloadSection from "@/components/Downloads";
import NewsAndEvents from "@/components/NewsAndEvents";
import { Metadata } from "next";
import React from "react";
import { IoMdSearch } from "react-icons/io";

export const metadata: Metadata = {
  title: "Maulakalika - Projects",
  description: `Maula Kalika Hydropower Company Limited is a Nepalese energy company focused on developing sustainable hydropower projects. Its flagship Kalika Kaligandaki Hydropower Project generates 38.16 MW of clean energy while maintaining ecological flows in the river. The company combines modern infrastructure with community development, promoting local economic growth. Committed to sustainability and reliable electricity generation, Maula Kalika plays a key role in Nepal’s renewable energy sector.`,
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1280px] w-full grid md:grid-cols-4 flex flex-col">
        <div className="md:col-span-3 bg-slate-200 h-[90vh] overflow-x-hidden overflow-y-auto md:p-12">
          {children}
        </div>
        {/* News and downloads */}
        <div className="w-full md:col-span-1 flex flex-col items-start justify-center gap-4 h-[90vh] bg-slate-100">
          {/* News and Events */}
          <div className="w-full px-5 flex flex-col items-start justify-start gap-4">
            <DownloadSection />
          </div>
          {/* Downloads */}
          <div className="w-full px-5 flex flex-col items-start justify-start gap-4">
            <NewsAndEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
