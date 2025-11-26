import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const HorizontalTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const timelineData: TimelineItem[] = [
    {
      date: "2024 Jan",
      title: "Project Inception",
      description: "Initial planning and team formation phase",
    },
    {
      date: "2024 Mar",
      title: "Development Sprint",
      description: "Core features implementation and testing",
    },
    {
      date: "2024 May",
      title: "Beta Release",
      description: "Limited user testing and feedback collection",
    },
    {
      date: "2024 Jul",
      title: "Market Launch",
      description: "Official product release and marketing campaign",
    },
    {
      date: "2024 Sep",
      title: "Global Expansion",
      description: "International market penetration strategy",
    },
    {
      date: "2024 Nov",
      title: "Version 2.0",
      description: "Major feature updates and improvements",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = 300;
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      } else if (
        event.key === "ArrowRight" &&
        activeIndex < timelineData.length - 1
      ) {
        setActiveIndex((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, timelineData.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll left"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div
          ref={timelineRef}
          className="overflow-x-auto hide-scrollbar relative"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex items-center space-x-12 px-12 py-4 min-w-max">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative"
                style={{ minWidth: "200px" }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-blue-500 shadow-lg scale-110"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Timeline point ${index + 1}: ${item.title}`}
                  aria-selected={index === activeIndex}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                </div>

                {index < timelineData.length - 1 && (
                  <div
                    className={`absolute w-[calc(100%+3rem)] h-0.5 top-4 left-8 ${
                      index < activeIndex ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  />
                )}

                <div
                  className={`mt-6 text-center transition-all duration-300 ${
                    index === activeIndex ? "transform scale-105" : "opacity-70"
                  }`}
                >
                  <p
                    className={`font-semibold mb-1 ${
                      index === activeIndex ? "text-blue-500" : "text-gray-600"
                    }`}
                  >
                    {item.date}
                  </p>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll right"
        >
          <FiChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalTimeline;
