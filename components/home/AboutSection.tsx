import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1A1A1A]">
        About Maulika Hydropower
      </h2>

      <div className="max-w-7xl mx-auto mt-14 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Description */}
        <div className="text-center md:text-left px-4">
          <p className="text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
            Maulika Hydropower Company Ltd. has been at the forefront of
            renewable energy generation since its inception. Our commitment lies
            in developing environmentally sound hydropower projects that
            contribute significantly to national energy security and economic
            growth. We adhere to the highest standards of engineering excellence
            and environmental stewardship.
          </p>

          <button className="mt-8 bg-[#3B4046] text-white px-6 py-2 rounded-md hover:bg-[#2F3338] transition">
            Learn more
          </button>
        </div>
        {/* Right Side: Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#F5F6F7] p-8 rounded-md text-center">
            <p className="text-3xl font-bold text-[#1A1A1A]">25+</p>
            <p className="text-sm text-gray-600 mt-2">Years in Operation</p>
          </div>

          <div className="bg-[#F5F6F7] p-8 rounded-md text-center">
            <p className="text-3xl font-bold text-[#1A1A1A]">500+</p>
            <p className="text-sm text-gray-600 mt-2">
              MW Generated <br /> Annually
            </p>
          </div>

          <div className="bg-[#F5F6F7] p-8 rounded-md text-center">
            <p className="text-3xl font-bold text-[#1A1A1A]">100+</p>
            <p className="text-sm text-gray-600 mt-2">Communities Served</p>
          </div>

          <div className="bg-[#F5F6F7] p-8 rounded-md text-center">
            <p className="text-3xl font-bold text-[#1A1A1A]">1M+</p>
            <p className="text-sm text-gray-600 mt-2">Carbon Emissions Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
