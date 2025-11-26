import Link from "next/link";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
interface IProps {
  title: string;
  description: string;
  createdAt: string;
  url: string;
}

const DownloadsAndNews = (data: IProps) => {
  return (
    <Link href={data.url} className="w-full">
      <div className="max-w-50 w-full h-12 rounded-md px-2 py-3 flex items-center justify-start gap-1 bg-white cursor-pointer ease duration-300 hover:shadow hover:shadow-lg/30">
        <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl text-red-500">
          <FaFilePdf />
        </div>
        <div className="w-full p-1 flex flex-col items-start justify-center gap-2">
          {data && data ? (
            <>
              <h6 className="w-full overflow-hidden py-1 text-start mx-2 font-semibold text-md/6 text-black">
                {data.title}
              </h6>

              <p className="max-w-[250px] max-h-[85px] w-full h-screen overflow-hidden font-regural text-sm/5 px-2 text-slate-700/70">
                {data.description}
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};

export default DownloadsAndNews;
