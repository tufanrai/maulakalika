import React from "react";

interface IProps {
  thumbail?: string;
  title?: string;
  description?: string;
}

const DownloadsAndNews = ({ thumbail, ...data }: IProps) => {
  return (
    <div className="max-w-50 w-full h-12 rounded-md px-2 py-3 flex items-center justify-start gap-1 bg-white cursor-pointer ease duration-300 hover:shadow hover:shadow-lg/30">
      <div
        style={{
          backgroundImage: `url("${thumbail}")`,
        }}
        className="w-10 h-10 rounded-sm bg-slate-100"
      ></div>
      <div className="w-full p-1 flex flex-col items-start justify-center gap-2">
        {data && data ? (
          <>
            <>
              {data.title ? (
                <h6 className="w-full overflow-hidden py-1 text-start mx-2 font-semibold text-md/6 text-black">
                  {data.title}
                </h6>
              ) : (
                ""
              )}
            </>
            <>
              {data.description ? (
                <p className="max-w-[250px] max-h-[85px] w-full h-screen overflow-hidden font-regural text-sm/5 px-2 text-slate-700/70">
                  {data.description}
                </p>
              ) : (
                <>
                  <p className="w-full h-1 bg-slate-100"></p>
                  <p className="w-full h-1 bg-slate-100"></p>
                  <p className="w-full h-1 bg-slate-100"></p>
                  <p className="w-1/2 h-1 bg-slate-100"></p>
                </>
              )}
            </>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DownloadsAndNews;
