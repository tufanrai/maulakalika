import React from "react";
import pjimg from "@/public/Hydro electric power plant stock image_ Image of powerplant - 19361119.jpg";

interface IProps {
  image?: string;
  title?: string;
  description?: string;
}

const defaultValues: IProps = {
  image: `${pjimg.src}`,
  title: "Title of the news",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis
        adipisci minima dolorum? Voluptas rerum natus omnis, facere, officiis
        quidem veniam numquam voluptatem velit aliquam, fugit nemo iure
        doloribus minus.`,
};

const Project_news_card = ({ image, title, description }: IProps) => {
  let upload = image ?? defaultValues.image;
  return (
    <div className="max-w-[276px] max-h-[386px] w-full h-screen rounded-md shadow-lg/30 shadow-stone-400 p-2 flex flex-col items-center justify-start gap-1 cursor-pointer ease duration-300 hover:scale-102">
      <div
        style={{
          backgroundImage: `url("${upload}")`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-[250px] max-h-[156px] w-full h-screen rounded-sm bg-stone-300"
      ></div>
      <h6 className="w-full px-2 py-1 text-start mx-2 font-semibold text-lg text-black">
        {title ?? defaultValues.title}
      </h6>
      <p className="max-w-[250px] max-h-[140px] w-full h-screen overflow-hidden font-regural text-sm/5 px-2 text-stone-400/70">
        {description ?? defaultValues.description}
      </p>
    </div>
  );
};

export default Project_news_card;
