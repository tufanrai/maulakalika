import React from "react";

export default function LegacyTimeline() {
  const events = [
    {
      date: "05-12-2025",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      position: "down",
    },
    {
      date: "05-12-2025",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      position: "up",
    },
    {
      date: "05-12-2025",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      position: "down",
    },
    {
      date: "05-12-2025",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      position: "up",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-primary/12">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
        Our Legacy
      </h2>

      <div className="relative mt-20 max-w-6xl mx-auto">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-400" />

        {/* Timeline */}
        <div className="grid grid-cols-4">
          {events.map((event, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector Line */}
              <div
                className={`w-[2px] bg-gray-400 ${
                  event.position === "up" ? "h-20 mb-3" : "h-20 mt-3"
                }`}
              />

              {/* Dot */}
              <div className="w-4 h-4 bg-gray-500 rounded-full z-20" />

              {/* Floating Card */}
              <div
                className={`mt-3 ${
                  event.position === "up" ? "-mt-24" : "mt-6"
                } w-40`}
              >
                {event.position === "up" && (
                  <span className="inline-block text-xs bg-gray-300 px-2 py-1 rounded mb-2">
                    {event.date}
                  </span>
                )}

                <p className="text-sm text-gray-700 leading-snug">
                  {event.text}
                </p>

                {event.position === "down" && (
                  <span className="inline-block text-xs bg-gray-300 px-2 py-1 rounded mt-2">
                    {event.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
