import React from "react";
import demo from "@/public/Hydro electric power plant stock image_ Image of powerplant - 19361119.jpg";

interface IContents {
  image?: string;
  tag?: string;
  title?: string;
  dascription?: string;
}

const content: IContents = {
  image: `${demo.src}`,
  tag: "demo",
  title: "Demo title",
  dascription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      explicabo rerum, dolores tempora molestias aperiam quisquam cum maxime
      nesciunt porro odio hic fugit quos, beatae omnis! Ex mollitia aspernatur
      facilis!`,
};
const EventCard = ({ image, tag, title, dascription }: IContents) => {
  return (
    <div className="w-[299px] h-[452px] rounded-md flex flex-col items-start justify-start gap-2 shadow-lg/30">
      <div
        style={{
          backgroundImage: `url("${image ?? content.image}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[299px] h-[192px] rounded-sm bg-gray-300"
      ></div>
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <div className="w-full px-5 py-1">
          <span className="px-3 py-1 rounded-lg bg-stone-300 text-white font-regural text-sm">
            {tag ?? content.tag}
          </span>
          <h3 className="font-semibold text-lg w-full py-1 text-black">
            {title ?? content.title}
          </h3>
          <p className="font-regural text-md text-stone-400/50">
            {dascription ?? content.dascription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
