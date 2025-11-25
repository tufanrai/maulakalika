"use client";
import React, { useEffect, useState } from "react";
import { Download, FileIcon } from "lucide-react";
import documents from "@/public/landscaper business card.jpg";
import { useQuery } from "@tanstack/react-query";
import fetchDownloadFiles from "../api/download.api";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  description: string;
  type: string;
  size: string;
  icon: any;
  url: string;
}

export default function Downloads() {
  // user navigation
  const router = useRouter();

  // fetching data
  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["Fetch Downloads"],
    queryFn: fetchDownloadFiles,
  });

  // search event handling
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<null | []>(null);

  useEffect(() => {
    setTimeout(() => {
      const file = data?.files.filter(
        (file: IProps, index: number) => file.title == text
      );
      setFile(file);
    }, 500);
  }, [text]);

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
        <div className="max-w-[1100px] w-full rounded-md shadow-lg/30 shadow-stone-400 p-12">
          <form className="w-full flex items-center justify-center">
            <input
              type="search"
              placeholder="Find document..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
              }}
              className="px-5 py-1 font-regural text-lg text-stone-600 outline-none border-[1px] border-primary w-full rounded-s-md"
            />
            <input
              type="submit"
              value="Search"
              className="bg-primary px-5 py-1 font-medium text-lg border-[1px] border-primary/70 text-neutral-100 rounded-e-md cursor-pointer ease duration-300 hover:bg-primary"
            />
          </form>
        </div>
      </section>

      {/* Downloads List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-h-[50%] h-screen space-y-4 overflow-y-auto overflow-x-hidden">
          {file && file.at(0) ? (
            <>
              {file.map((prop: IProps, index: number) => (
                <div
                  key={index}
                  className="max-w-80 w-full flex flex-col items-start justify-cneter p-4 bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer ease duration-300 hover:shadow-slate-300"
                >
                  {/* File Icon Right */}
                  <div className="text-gray-700 p-4 rounded-md bg-green-500/50">
                    <FileIcon size={40} />
                  </div>
                  {/* Middle Title + Description */}
                  <div className="max-w-100 w-full flex flex-col items-start justify-center p-2 pb-3 mt-3 sm:mt-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {prop.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {prop.description}
                    </p>
                  </div>

                  {/* Left Controls */}
                  <div className="max-w-160 flex flex-row sm:flex-col items-center justify-around gap-2">
                    <button
                      onClick={() => {
                        router.replace(`${prop.url}`);
                      }}
                      className="max-w-80 w-full flex items-center justify-center gap-1 px-3 py-2 cursor-pointer bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                    >
                      <Download size={16} /> Download
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {data && data?.files ? (
                <>
                  {data?.files?.map((file: IProps, index: number) => (
                    <div
                      key={index}
                      className="max-w-80 w-full flex flex-col items-start justify-cneter p-4 bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer ease duration-300 hover:shadow-slate-300"
                    >
                      {/* File Icon Right */}
                      <div className="text-gray-700 p-4 rounded-md bg-green-500/50">
                        <FileIcon size={40} />
                      </div>
                      {/* Middle Title + Description */}
                      <div className="max-w-100 w-full flex flex-col items-start justify-center p-2 pb-3 mt-3 sm:mt-0">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {file.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {file.description}
                        </p>
                      </div>

                      {/* Left Controls */}
                      <div className="max-w-160 flex flex-row sm:flex-col items-center justify-around gap-2">
                        <button
                          onClick={() => {
                            router.replace(`${file.url}`);
                          }}
                          className="max-w-80 w-full flex items-center justify-center gap-1 px-3 py-2 cursor-pointer bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                        >
                          <Download size={16} /> Download
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
