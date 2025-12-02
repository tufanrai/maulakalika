"use client";
import React from "react";
import Project_news_card from "../cards/project_news_card";
import { useQuery } from "@tanstack/react-query";
import fetchDownloadFiles from "@/app/api/download.api";

interface IProps {
  title: string;
  description: string;
  url: string;
}

const NewsContents = () => {
  const { data } = useQuery({
    queryKey: ["fetch files"],
    queryFn: fetchDownloadFiles,
  });

  const filteredData = data?.files?.filter((file: any) => file.type == "News");
  return (
    <section className="w-full h-1/2 flex flex-col gap-1 items-start justify-start overflow-x-hidden overflow-y-auto px-5 md:px-0">
      <h3 className="w-full text-xl md:text-2xl font-bold text-buttonColor mb-4 px-5 py-2 flex items-center justify-start gap-2">
        Hot News{" "}
        <hr className="w-10 border-2 h-[1px] border-buttonColor bg-buttonColor rounded-lg" />{" "}
        <hr className="w-1 border-2 h-[1px] border-buttonColor bg-buttonColor rounded-full" />
      </h3>
      {filteredData && filteredData.at(0) ? (
        <>
          {filteredData.map((file: IProps, index: number) => (
            <Project_news_card
              key={index}
              title={file.title}
              description={file.description}
              image={file.url}
            />
          ))}
        </>
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-2 md:pt-4">
          <h6 className="font-black text-lg italic text-slate-400">404</h6>
          <p className="font-regural text-sm italic text-slate-400">
            Nothing to be displayed!
          </p>
        </div>
      )}
    </section>
  );
};

export default NewsContents;
