"use client";
import { useState } from "react";
import projectImage from "@/public/Hydro electric power plant stock image_ Image of powerplant - 19361119.jpg";

const Gallery_card = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div
      style={{
        backgroundImage: `url("${projectImage.src}")`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="max-w-[300px] max-h-[280px] w-full h-screen rounded-md shadow-xl/30 shadow-stone-800 cursor-pointer ease duration-300 hover:scale-103 hover:shadow-primary"
      onClick={() => setClicked(true)}
    >
      {clicked ? (
        <div
          onClick={() => {
            alert(
              "you are directed to the collections of images inside this folder"
            );
            setTimeout(() => {
              setClicked(false);
            }, 100);
          }}
          className="max-w-[300px] max-h-[280px] w-full h-screen bg-linear-to-t from-primary to-transparent ease duration-300 curser-pointer flex flex-col items-center justify-end rounded-md p-5"
        >
          <h6 className="text-stone-100 font-semibold">Title</h6>
          <p className="text-stone-300 font-semibold">Description</p>
        </div>
      ) : (
        <div className="max-w-[200px] max-h-[200px] w-full h-screen bg-linear-to-t from-primary to-transparent ease duration-300 curser-pointer flex flex-col items-center justify-end hidden">
          <h6 className="text-black font-semibold">Title</h6>
          <p className="text-black font-semibold">Description</p>
        </div>
      )}
    </div>
  );
};

export default Gallery_card;
