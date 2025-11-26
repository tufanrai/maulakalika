import React from "react";
import Project_news_card from "@/components/cards/project_news_card";
import { FaFilePdf } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import DownloadSection from "@/components/Downloads";
import NewsAndEvents from "@/components/NewsAndEvents";
import Link from "next/link";

const page = () => {
  return (
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
          <Link href={"/projects/0"}>
            <Project_news_card />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default page;
