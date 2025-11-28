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

const ProjectsContents = () => {
  const { data } = useQuery({
    queryKey: ["fetch files"],
    queryFn: fetchDownloadFiles,
  });

  const filteredData = data?.files?.filter(
    (file: any) => file.type == "Projects"
  );
  return (
    <section className="w-full h-1/2 flex flex-wrap  gap-1 items-start justify-start overflow-x-hidden overflow-y-auto px-5 md:px-0">
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

export default ProjectsContents;
