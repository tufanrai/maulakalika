"use client";
import { useState } from "react";
import projectImage from "@/public/Hydro electric power plant stock image_ Image of powerplant - 19361119.jpg";

interface IProps {
  image?: string;
}

const Gallery_card = ({ image }: IProps) => {
  return (
    <div
      style={{
        backgroundImage: `url("${image ?? projectImage.src}")`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="max-w-[300px] max-h-[280px] w-full h-screen rounded-md shadow-xl/30 shadow-stone-800 cursor-pointer ease duration-300 hover:scale-103 hover:shadow-primary"
    ></div>
  );
};

export default Gallery_card;
