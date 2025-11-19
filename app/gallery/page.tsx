"use client";
import Gallery_card from "@/components/cards/Gallery_card";
import { useQuery } from "@tanstack/react-query";
import fetchGalleryContents from "../api/gallery.api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["Fetch Gallery"],
    queryFn: fetchGalleryContents,
  });

  return (
    <div className="w-full flex justify-center py-12 bg-white">
      <div className="max-w-[1280px] w-full h-screen flex justify-center">
        <div className="max-w-[1000px] w-full h-screen flex flex-wrap  gap-1 overflow-x-hidden overflow-y-auto px-5 md:px-0">
          {data && data?.files
            ? data?.files?.map((file: any, index: number) => (
                <div
                  key={index}
                  className="overflow-hidden ease duration-300 hover:shadow hover:shadow-xl/30 hover:scale-104 cursor-pointer"
                >
                  <img
                    src={file?.url}
                    alt={`media-${index}`}
                    className="w-full object-cover"
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default page;
