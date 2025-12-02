"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import logo from "@/public/uploaded_logo.png";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  const [Menu, setMenu] = useState<boolean>(false);
  return (
    <div className="w-full">
      <header className="w-full flex flex-col items-center justify-center">
        {/* sub nav */}
        <div className=" w-full px-5 md:px-8 flex items-center justify-center gap-4 py-2">
          <div className="max-w-[1280px] w-full px-5 md:px-8 flex items-center justify-end gap-4 py-2">
            <div className="max-w-100 w-full flex items-center justify-center gap-1 mr-auto">
              <div
                style={{
                  backgroundImage: `url("${logo.src}")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full"
              ></div>
              <div>
                <h1 className="font-bold text-xl md:text-3xl text-primary">
                  Maulakalika
                </h1>
                <p className="w-full font-regural text-xs md:text-sm text-primary">
                  Hydropower Company Limited
                </p>
              </div>
            </div>
            <div className="max-w-80 md:max-w-100 w-full flex flex-col md:flex-row items-end justify-between gap-2">
              <span className="flex items-end justify-center gap-2 italic text-nav text-sm font-regural underline cursor-pointer ease duration-300 text-orange-500 hover:text-primary">
                <CiMail className="font-black text-xl p-1 rounded-full w-8 h-8 bg-orange-500 text-white" />{" "}
                <span className="hidden md:block text-md">
                  info@example.com
                </span>
              </span>
              <span className="flex items-end justify-center gap-2 italic text-nav text-sm font-regural underline cursor-pointer ease duration-300 text-orange-500 hover:text-primary">
                <CiPhone className="font-black text-xl p-1 rounded-full w-8 h-8 bg-orange-500 text-white" />{" "}
                <span className="hidden md:block text-md">
                  +977 - (98)00000000
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* main nav */}

        {/* Desktop view */}
        <div className="w-full flex items-center bg-primary hidden md:block py-2 border-t-2 border-orange-500">
          <div className="w-full flex justify-center px-5 md:px-8">
            <ul className="max-w-[1280px] w-full flex items-center justify-end gap-3 py-2 px-5 text-stone-100">
              <li className="mx-2 ml-auto">
                <Link
                  className="py-5 ease duration-300 hover:text-orange-500 px-2 font-medium text-md"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="py-5 ease duration-300 hover:text-orange-500 px-2 font-medium text-md"
                  href={"/about"}
                >
                  About us
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="py-5 ease duration-300 hover:text-orange-500 px-2 font-medium text-md"
                  href={"/projects"}
                >
                  Projects&Reports
                </Link>
              </li>
              <li className="">
                <Link
                  className="py-5 ease duration-300 hover:text-orange-500 px-2 font-medium text-md"
                  href={"/gallery"}
                >
                  Gallery
                </Link>
              </li>
              <li className="ml-auto">
                <Link href={"/contact"}>
                  <button className="px-5 py-2 rounded-full font-regural text-md text-white ease duration-300 cursor-pointer bg-orange-500 hover:bg-orange-600">
                    Contact us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile view */}
        <div className="w-full flex items-center bg-primary block md:hidden py-2 border-t-2 border-orange-500">
          <div className="w-full flex items-center justify-center px-8">
            <ul className="max-w-[1280px] w-full flex items-start justify-end">
              <li className="py-3">
                {Menu ? (
                  <>
                    <span
                      onClick={() => setMenu(!Menu)}
                      className="font-black text-3xl text-slate-100 cursor-pointer py-2"
                    >
                      <RxDropdownMenu className="-rotate-180" />
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      onClick={() => setMenu(!Menu)}
                      className="font-black text-3xl text-slate-100 cursor-pointer py-2"
                    >
                      <RxDropdownMenu />
                    </span>
                  </>
                )}
                {Menu ? (
                  <nav className="max-w-[280px] w-full">
                    <ul className="w-full flex flex-col items-start justify-start py-2 text-white">
                      <Link
                        onClick={() => setMenu(!Menu)}
                        className="w-full ease duration-300 text-slate-300 hover:text-slate-50"
                        href={"/"}
                      >
                        <li className="mx-2 w-full px-5 py-2">Home</li>
                      </Link>
                      <Link
                        onClick={() => setMenu(!Menu)}
                        className="w-full ease duration-300 text-slate-300 hover:text-slate-50"
                        href={"/about"}
                      >
                        <li className="mx-2 w-full px-5 py-2">About us</li>
                      </Link>
                      <Link
                        onClick={() => setMenu(!Menu)}
                        className="w-full ease duration-300 text-slate-300 hover:text-slate-50"
                        href={"/projects"}
                      >
                        <li className="mx-2 w-full px-5 py-2">Projects</li>
                      </Link>
                      <Link
                        onClick={() => setMenu(!Menu)}
                        className="w-full ease duration-300 text-slate-300 hover:text-slate-50"
                        href={"/gallery"}
                      >
                        <li className="mr-auto w-full px-5 py-2 mx-auto">
                          Gallery
                        </li>
                      </Link>
                      <Link className="w-full" href={"/contact"}>
                        <li>
                          <button
                            onClick={() => setMenu(!Menu)}
                            className="w-full px-5 py-2 font-regural text-md text-start text-slate-50 ease duration-300 cursor-pointer"
                          >
                            Contact us
                          </button>
                        </li>
                      </Link>
                    </ul>
                  </nav>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
