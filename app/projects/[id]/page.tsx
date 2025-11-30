"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecificFile } from "@/app/api/download.api";

const page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch the url"],
    queryFn: fetchSpecificFile,
  });

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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {data?.file?.title}
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {data?.file?.description}
              </p>
              <embed
                src={data?.file?.url}
                type="application/pdf"
                className="w-full h-200 bg-black"
              ></embed>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default page;
