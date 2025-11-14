import React from "react";
import heroImg from "@/public/Hydro electric power plant stock image_ Image of powerplant - 19361119.jpg";

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url("${heroImg.src}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full"
    >
      <div className="bg-linear-120 from-black/80 to-white/0 w-full py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-stone-100">
              Harnessing Nature's Power <br />
              for a Sustainable Future
            </h1>

            <p className="mt-6 text-gray-200 max-w-md">
              Maulika Hydropower Company Ltd. is dedicated to generating clean,
              renewable energy through advanced hydropower solutions, ensuring a
              brighter and more sustainable tomorrow for all.
            </p>

            <button className="mt-8 bg-primary/80 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-primary transition">
              Explore Our Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
