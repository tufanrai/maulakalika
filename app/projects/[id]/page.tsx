"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecificFile } from "@/app/api/download.api";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["fetch the url"],
    queryFn: fetchSpecificFile,
  });

  useEffect(() => {
    router.refresh();
  }, [isSuccess]);

  console.log(data?.file?.url);
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
            <embed
              src={data?.file?.url}
              type="application/pdf"
              className="w-full h-200 bg-black"
            ></embed>
          )}
        </div>
      </section>
    </div>
  );
};

export default page;
