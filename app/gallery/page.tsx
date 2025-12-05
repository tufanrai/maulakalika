"use client";
import { useQuery } from "@tanstack/react-query";
import fetchGalleryContents from "../api/gallery.api";

const page = () => {
  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["Fetch Gallery"],
    queryFn: fetchGalleryContents,
  });

  return (
    <div className="w-full flex justify-center py-12 bg-buttonColor/10">
      <div className="max-w-[1280px] w-full h-screen flex justify-center">
        <div className="gallery_List">
          {data && data?.files
            ? data?.files?.map((file: any, index: number) => (
                <div
                  key={index}
                  className="max-h-68 w-full overflow-hidden rounded-sm bg-buttonColor/40"
                >
                  <img
                    src={file?.url}
                    alt={`media-${index}`}
                    className=" w-full object-cover object-center ease duration-300 cursor-pointer ease duration-300 hover:scale-102 rounded-sm"
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
