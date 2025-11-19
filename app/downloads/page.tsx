"use client";
import React from "react";
import { Download, FileIcon, Eye, UserRound } from "lucide-react";
import documents from "@/public/landscaper business card.jpg";
import SearchAndFilterCard from "@/components/cards/SearchAndFilterCard";
import { useQuery } from "@tanstack/react-query";
import fetchDownloadFiles from "../api/download.api";

interface IProps {
  title: string;
  description: string;
  type: string;
  size: string;
  icon: any;
  url: string;
}

export default function Downloads() {
  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["Fetch Downloads"],
    queryFn: fetchDownloadFiles,
  });

  const [view, setView] = React.useState<boolean>(false);

  console.log(data?.files.at(0).url);
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url("${documents.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full text-white"
      >
        <div className="w-full bg-black/40 py-30 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Access project documents, reports, and resources
            </p>
          </div>
        </div>
      </section>

      {/* Search section */}
      <section className="w-full flex items-center justify-center relative pt-12">
        <SearchAndFilterCard />
      </section>

      {/* Downloads List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4 overflow-y-auto overflow-x-hidden">
          {data && data?.files ? (
            <>
              {data?.files?.map((file: IProps, index: number) => (
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-start justify-between p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                  {/* File Icon Right */}
                  <div className="text-gray-700">
                    <FileIcon size={40} />
                  </div>
                  {/* Middle Title + Description */}
                  <div className="w-100 sm:w-full flex-1 p-2 pb-3 sm:px-6 text-start sm:text-left mt-3 sm:mt-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {file.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {file.description}
                    </p>
                  </div>

                  {/* Left Controls */}
                  <div className="max-w-160 flex flex-row sm:flex-col items-center justify-around gap-2">
                    <button className="max-w-80 w-full flex items-center justify-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      <Download size={16} /> Download
                    </button>

                    <button className="max-w-80 w-full flex items-center justify-center gap-1 px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                      <Eye size={16} /> View
                    </button>
                  </div>
                  {/* iframe */}
                  <div className="w-full h-screen bg-black/20 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex items-center jusitfy-center">
                    <iframe
                      src={`${file.url}`}
                      width={"900"}
                      height={"860"}
                      className="max-w-[900px] max-h-[860px] w-full h-screen rounded-lg"
                    ></iframe>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}
