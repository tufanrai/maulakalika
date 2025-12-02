"use client";
import { useQuery } from "@tanstack/react-query";
import fetchGalleryContents from "../api/gallery.api";

const page = () => {
  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["Fetch Gallery"],
    queryFn: fetchGalleryContents,
  });

  return (
    <div className="w-full flex justify-center py-12 bg-neutral-200">
      <div className="max-w-[1280px] w-full h-screen flex justify-center">
        <div className="gallery_List">
          {data && data?.files
            ? data?.files?.map((file: any, index: number) => (
                <img
                  key={index}
                  src={file?.url}
                  alt={`media-${index}`}
                  className="max-h-68 h-screen w-full object-contain object-center ease duration-300 cursor-pointer rounded-sm overflow-hidden"
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default page;
