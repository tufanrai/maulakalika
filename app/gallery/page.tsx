"use client";
import { useQuery } from "@tanstack/react-query";
import fetchGalleryContents from "../api/gallery.api";

const page = () => {
  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["Fetch Gallery"],
    queryFn: fetchGalleryContents,
  });

  return (
    <div className="w-full flex justify-center py-12 bg-slate-100">
      <div className="max-w-[1280px] w-full h-screen flex justify-center">
        <div className="max-w-[1200px] w-full h-screen flex flex-wrap  gap-1 items-start justify-start overflow-x-hidden overflow-y-auto px-5 md:px-0">
          {data && data?.files
            ? data?.files?.map((file: any, index: number) => (
                <div
                  key={index}
                  className="max-w-75 max-h-70 w-full overflow-hidden cursor-pointer rounded-md flex items-center justify-center p-4 bg-white ease duration-300 hover:shadow-lg/30 hover:shadow-slate-500"
                >
                  <img
                    src={file?.url}
                    alt={`media-${index}`}
                    className="max-h-68 h-screen w-full object-contain object-center ease duration-300 cursor-pointer rounded-sm overflow-hidden"
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
