"use client";
import fetchDownloadFiles from "@/app/api/download.api";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import fetchNewsContent from "@/app/api/news.api";

interface IProps {
  title: string;
  description: string;
  createdAt: string;
  url: string;
  type: string;
  _id: string;
}

const NewsAndEvents = () => {
  // fetching data
  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["Fetch News and events"],
    queryFn: fetchNewsContent,
  });

  const filteredData = data?.files?.filter(
    (file: IProps, index: number) =>
      file.type == "news" || file.type == "events"
  );

  // search event handling
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<null | []>(null);

  // Searches for the file with a word of a title
  useEffect(() => {
    setTimeout(() => {
      const file = filteredData?.filter((file: IProps, index: number) => {
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
    <div className="max-w-100 w-full flex flex-col items-start justify-start gap-1">
      {/* Header */}
      <h2 className="font-bold text-mg text-slate-800">News and Events</h2>
      {/* Search */}
      <form className="w-full flex items-center justify-center">
        <input
          type="search"
          placeholder="Find document..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
          className="px-5 py-1 font-regural text-md text-stone-600 outline-none border border-primary w-full rounded-s-sm"
        />
        <button
          type="submit"
          className="bg-primary p-2 font-medium text-lg text-neutral-100 rounded-e-sm cursor-pointer ease duration-300 hover:bg-primary flex items-center justify-center gap-2"
        >
          <IoMdSearch />
        </button>
      </form>
      {/* Downloads */}
      <ul className="w-full flex flex-col items-start justify-start gap-1 py-2">
        {filteredData && filteredData?.at(0) ? (
          <>
            {file && file.at(0) ? (
              <>
                {file.map((value: IProps, index: number) => (
                  <li key={index} className="w-full">
                    <Link
                      className="w-full"
                      onClick={() => {
                        sessionStorage.setItem("file_url", value._id);
                      }}
                      href={`projects/${value._id}`}
                    >
                      <div className="max-w-80 w-full rounded-md px-2 py-2 flex items-start justify-start gap-1 bg-slate-200 cursor-pointer ease duration-300 hover:shadow hover:shadow-lg/30 overflow-hidden">
                        <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl text-red-500">
                          <FaFilePdf />
                        </div>
                        <div className="w-full p-1 flex flex-col items-start justify-center gap-2">
                          <h6 className="font-medium text-sm text-slate-800">
                            {value.title}
                          </h6>
                          <p className="w-full h-6 overflow-hidden font-regural text-xs/3 text-slate-400">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                {filteredData.map((file: IProps, index: number) => (
                  <li key={index} className="w-full">
                    <Link
                      className="w-full"
                      onClick={() => {
                        sessionStorage.setItem("file_url", file._id);
                      }}
                      href={`projects/${file._id}`}
                    >
                      <div className="max-w-80 w-full rounded-md px-2 py-2 flex items-start justify-start gap-1 bg-slate-200 cursor-pointer ease duration-300 hover:shadow hover:shadow-lg/30 overflow-hidden">
                        <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl text-red-500">
                          <FaFilePdf />
                        </div>
                        <div className="w-full p-1 flex flex-col items-start justify-center gap-2">
                          <h6 className="font-medium text-sm text-slate-800">
                            {file.title}
                          </h6>
                          <p className="w-full h-6 overflow-hidden font-regural text-xs/3 text-slate-400">
                            {file.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
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
      </ul>
    </div>
  );
};

export default NewsAndEvents;
