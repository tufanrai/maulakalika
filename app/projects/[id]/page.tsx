"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecificFile } from "@/app/api/download.api";
import Link from "next/link";

interface IData {
  title: string;
  description: string;
  url: string;
}
const page = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["fetch the url"],
    queryFn: fetchSpecificFile,
  });

  const [Detail, setDetail] = useState<IData | null>(null);

  useEffect(() => {
    setDetail({
      title: data?.file?.title,
      description: data?.file?.description,
      url: data?.file?.url,
    });
  }, [data]);
  return (
    <div className="w-full flex flex-col justify-center">
      {/* body */}
      <section className="w-full flex justify-center">
        <div className="max-w-[800px] w-full text-slate-800 flex flex-col justify-center py-12 px-8">
          {isLoading ? (
            <div className="w-full flex items-center justify-center">
              <p className="italic underline font-semibold text-lg text-slate-100">
                Loading...
              </p>
            </div>
          ) : (
            <>
              {data && data.file ? (
                <>
                  {isSuccess ? (
                    <>
                      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {Detail?.title}
                      </h1>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {Detail?.description}
                      </p>
                      <div className="w-full p-4 bg-slate-100">
                        <Link
                          className="font-regural text-md text-slate-50 ease duration-250 hover:bg-red-600 px-5 py-2 rounded-t-md bg-red-500"
                          href={Detail?.url ?? ""}
                        >
                          Download
                        </Link>
                        <iframe
                          src={`https://docs.google.com/viewer?url=${Detail?.url}&embedded=true`}
                          width="100%"
                          height="600px"
                          style={{ border: "none" }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        500
                      </h1>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">
                        Something went wrong...
                      </p>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default page;
