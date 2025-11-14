import Gallery_card from "@/components/cards/Gallery_card";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center py-12 bg-white">
      <div className="max-w-[1280px] w-full h-screen px-8 py-4 flex flex-wrap items-start justify-equaly ">
        <Gallery_card />
      </div>
    </div>
  );
};

export default page;
