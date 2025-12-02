"use client";
import React from "react";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  designation: string;
}

const Member_card = ({ imageSrc, name, designation }: ProfileCardProps) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 my-5">
      {/* Image Section - 2/3 of card */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content Section - 1/3 of card */}
      <div className="p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {name}
        </h2>
        <p className="text-base sm:text-lg text-red-600">({designation})</p>
      </div>
    </div>
  );
};

export default Member_card;
