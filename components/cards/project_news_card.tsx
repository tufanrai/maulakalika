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
    <div className="md:max-w-[220px] md:max-h-[286px] w-full sm:h-screen bg-white rounded-md shadow-lg/30 shadow-stone-400 p-2 flex flex-row sm:flex-col items-center justify-start gap-1 cursor-pointer ease duration-300 hover:shadow-primary">
      <div
        style={{
          backgroundImage: `url("${upload}")`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="sm:max-w-[215px] md:max-h-[166px] sm:w-full w-1/2 md:h-screen h-3/4 rounded-sm bg-stone-300"
      ></div>
      <div className="w-2/3 sm:w-full">
        <h6 className="w-full overflow-hidden py-1 text-start mx-2 font-semibold text-md/6 text-black">
          {title ?? defaultValues.title}
        </h6>
        <p className="max-w-[250px] max-h-[85px] w-full h-screen overflow-hidden font-regural text-sm/5 px-2 text-slate-700/70">
          {description ?? defaultValues.description}
        </p>
      </div>
    </div>
  );
};

export default Project_news_card;
