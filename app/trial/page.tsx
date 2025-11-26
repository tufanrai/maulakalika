import React from "react";
import Project_news_card from "@/components/cards/project_news_card";
import { FaFilePdf } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import DownloadsAndNews from "@/components/cards/DownloadsAndNews";

const page = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1280px] w-full grid md:grid-cols-4 flex flex-col">
        <div className="md:col-span-3 bg-slate-200 h-[90vh] p-12">
          <div className="w-full flex flex-col items-start justify-start gap-4">
            {/* search section */}
            <section className="w-full flex items-start justify-center">
              <div className="max-w-[1100px] w-full rounded-md p-12">
                <form className="w-full flex items-center justify-center">
                  <input
                    type="search"
                    placeholder="Find document..."
                    //   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    //     setText(e.target.value);
                    //   }}
                    className="px-5 py-1 font-regural text-lg text-stone-600 outline-none border-[1px] border-primary w-full rounded-s-md"
                  />
                  <button
                    type="submit"
                    className="bg-primary px-5 py-[7px] font-medium text-xl border-2 border-primary/70 text-neutral-100 rounded-e-md cursor-pointer ease duration-300 hover:bg-primary flex items-center justify-center gap-2"
                  >
                    <IoMdSearch />
                  </button>
                </form>
              </div>
            </section>

            {/* projects section */}
            <section className="w-full h-screen flex flex-wrap  gap-1 items-start justify-start overflow-x-hidden overflow-y-auto px-5 md:px-0">
              <Project_news_card />
            </section>
          </div>
        </div>
        {/* News and downloads */}
        <div className="w-full md:col-span-1 flex flex-col items-start justify-center gap-4 h-[90vh] bg-slate-100">
          {/* News and Events */}
          <div className="w-full px-5 flex flex-col items-start justify-start gap-4">
            <h2 className="font-bold text-mg text-slate-800">
              News and Events
            </h2>
            <ul className="w-full flex flex-col items-start justify-start gap-2">
              <li className="w-full">
                <DownloadsAndNews />
              </li>
              <li className="w-full">
                <DownloadsAndNews />
              </li>
              <li className="w-full">
                <DownloadsAndNews />
              </li>
            </ul>
          </div>
          {/* Downloads */}
          <div className="w-full px-5 flex flex-col items-start justify-start gap-4">
            <h2 className="font-bold text-mg text-slate-800">Downloads</h2>
            <ul className="w-full flex flex-col items-start justify-start gap-2">
              <li className="w-full">
                <div className="max-w-50 w-full h-12 rounded-md px-2 py-3 flex items-center justify-start gap-1 bg-slate-200 cursor-pointer ease duration-300 hover:shadow hover:shadow-lg/30">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl text-red-500">
                    <FaFilePdf />
                  </div>
                  <div className="w-full p-1 flex flex-col items-start justify-center gap-2">
                    <p className="w-full h-1 bg-white"></p>
                    <p className="w-full h-1 bg-white"></p>
                    <p className="w-1/2 h-1 bg-slate-100"></p>
                  </div>
                </div>
              </li>
              <li className="w-full">
                <div className="max-w-50 w-full h-12 rounded-md px-2 py-3 flex items-center justify-start gap-1 bg-slate-200 cursor-pointer ease duration-300 hover:shadow hover:shadow-lg/30">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl text-red-500">
                    <FaFilePdf />
                  </div>
                  <div className="w-full p-1 flex flex-col items-start justify-center gap-2">
                    <p className="w-full h-1 bg-white"></p>
                    <p className="w-full h-1 bg-white"></p>
                    <p className="w-1/2 h-1 bg-slate-100"></p>
                  </div>
                </div>
              </li>
              <li className="w-full">
                <div className="max-w-50 w-full h-12 rounded-md px-2 py-3 flex items-center justify-start gap-1 bg-slate-200 cursor-pointer ease duration-300 hover:shadow hover:shadow-lg/30">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xl text-red-500">
                    <FaFilePdf />
                  </div>
                  <div className="w-full p-1 flex flex-col items-start justify-center gap-2">
                    <p className="w-full h-1 bg-white"></p>
                    <p className="w-full h-1 bg-white"></p>
                    <p className="w-1/2 h-1 bg-slate-100"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
