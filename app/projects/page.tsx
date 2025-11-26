"use client";
import React, { useEffect, useState } from "react";
import Project_news_card from "@/components/cards/project_news_card";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import fetchDownloadFiles from "../api/projects.api";
import upload from "../../../maulakalika server/src/middleware/upload.middleware";

interface IProps {
  title: string;
  description: string;
  url: string;
}

const page = () => {
  // Data fetching
  const { data } = useQuery({
    queryKey: ["fetch project"],
    queryFn: fetchDownloadFiles,
  });

  // search event handling
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<null | []>(null);

  useEffect(() => {
    setTimeout(() => {
      const file = data?.files.filter((file: IProps, index: number) => {
        const words = file?.title?.split(" ");
        if (words?.includes(text)) {
          return file.title;
        }
        return null;
      });
      setFile(file);
    }, 1500);
  }, [text]);

  return (
    <div className="md:col-span-3 bg-slate-200 h-[90vh] p-12">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        {/* search section */}
        <section className="w-full flex items-start justify-center">
          <div className="max-w-[1100px] w-full rounded-md p-12">
            <form className="w-full flex items-center justify-center">
              <input
                type="search"
                placeholder="Find document..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setText(e.target.value);
                }}
                className="px-5 py-1 font-regural text-lg text-stone-600 outline-none border-[1px] border-primary w-full rounded-s-md"
              />
              <button
                type="submit"
                className="bg-primary px-5 py-[7px] font-medium text-xl border-2 border-primary/70 text-neutral-100 rounded-e-md cursor-pointer ease duration-300 hover:bg-primary flex items-center justify-center gap-2"
              >
                <IoMdSearch />
              </button>
            </form>
          </div>
        </section>

        {/* projects section */}
        <section className="w-full h-screen flex flex-wrap  gap-1 items-start justify-start overflow-x-hidden overflow-y-auto px-5 md:px-0">
          {data && data?.files?.at(0) ? (
            <>
              {file && file?.at(0) ? (
                <>
                  {file?.map((data: IProps, index: number) => (
                    <>
                      <Project_news_card
                        key={index}
                        title={data.title}
                        description={data.description}
                        image={data.url}
                      />
                    </>
                  ))}
                </>
              ) : (
                <>
                  {data?.files.map((value: IProps, index: number) => (
                    <Project_news_card
                      key={index}
                      title={value.title}
                      description={value.description}
                      image={value.url}
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <div className="w-full flex flex-col items-center justify-center gap-2 md:pt-4">
              <h6 className="font-black text-lg italic text-slate-400">404</h6>
              <p className="font-regural text-sm italic text-slate-400">
                Nothing to be displayed!
              </p>
            </div>
          )}
          {/* <Link href={"/projects/0"}>
            <Project_news_card />
          </Link> */}
        </section>
      </div>
    </div>
  );
};

export default page;
