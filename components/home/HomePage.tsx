import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import EventCard from "../cards/EventCard";
import LegacyTimeline from "./HistorySection";
import Services from "./Services";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col items-center justify-start bg-white">
      <HeroSection />
      <AboutSection />
      <LegacyTimeline />
      <Services />
    </main>
  );
};

export default HomePage;
