import React from "react";
import events from "@/public/Networking Event Interaction.jpg";
import Project_news_card from "@/components/cards/project_news_card";
import SearchAndFilterCard from "@/components/cards/SearchAndFilterCard";

export default function News() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url("${events.src}")`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" text-white w-full"
      >
        <div className="w-full bg-black/40 flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Projects
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Stay updated with our latest projects, achievements, and
              announcements
            </p>
          </div>
        </div>
      </section>

      {/* Search section */}
      <section className="w-full flex items-center justify-center relative pt-12">
        <SearchAndFilterCard />
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Project_news_card
            title="Maulakalika Hydropower Company — A Singular Project Focused on Kalika Kaligandaki"
            description={`Maulakalika Hydropower Company Ltd has developed one major hydropower project so far: the 38.17 MW (later reported as ~47.7 MW) Kalika‑Kaligandaki Hydroelectric Project on the Kali Gandaki River. 
urjasanchar.com
+2
urjakhabar.com
+2
 The company has completed its feasibility study, applied for environmental clearance, and secured investment from multiple banks.`}
          />
          <Project_news_card
            title="Maulakalika Hydropower Company — A Singular Project Focused on Kalika Kaligandaki"
            description={`Maulakalika Hydropower Company Ltd has developed one major hydropower project so far: the 38.17 MW (later reported as ~47.7 MW) Kalika‑Kaligandaki Hydroelectric Project on the Kali Gandaki River. 
urjasanchar.com
+2
urjakhabar.com
+2
 The company has completed its feasibility study, applied for environmental clearance, and secured investment from multiple banks.`}
          />
          <Project_news_card
            title="Maulakalika Hydropower Company — A Singular Project Focused on Kalika Kaligandaki"
            description={`Maulakalika Hydropower Company Ltd has developed one major hydropower project so far: the 38.17 MW (later reported as ~47.7 MW) Kalika‑Kaligandaki Hydroelectric Project on the Kali Gandaki River. 
urjasanchar.com
+2
urjakhabar.com
+2
 The company has completed its feasibility study, applied for environmental clearance, and secured investment from multiple banks.`}
          />
          <Project_news_card
            title="Maulakalika Hydropower Company — A Singular Project Focused on Kalika Kaligandaki"
            description={`Maulakalika Hydropower Company Ltd has developed one major hydropower project so far: the 38.17 MW (later reported as ~47.7 MW) Kalika‑Kaligandaki Hydroelectric Project on the Kali Gandaki River. 
urjasanchar.com
+2
urjakhabar.com
+2
 The company has completed its feasibility study, applied for environmental clearance, and secured investment from multiple banks.`}
          />
          <Project_news_card
            title="Maulakalika Hydropower Company — A Singular Project Focused on Kalika Kaligandaki"
            description={`Maulakalika Hydropower Company Ltd has developed one major hydropower project so far: the 38.17 MW (later reported as ~47.7 MW) Kalika‑Kaligandaki Hydroelectric Project on the Kali Gandaki River. 
urjasanchar.com
+2
urjakhabar.com
+2
 The company has completed its feasibility study, applied for environmental clearance, and secured investment from multiple banks.`}
          />
        </div>
      </section>
    </div>
  );
}
