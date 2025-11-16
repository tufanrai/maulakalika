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
        <div className="max-w-[1280px] w-full px-5 md:px-8 flex items-center justify-end gap-4 bg-white py-2">
          <span className="flex items-center justify-center gap-2 italic text-nav underline cursor-pointer ease duration-300 text-black hover:text-primary">
            <CiMail className="font-black text-2xl" /> info@example.com
          </span>
          <span className="flex items-center justify-center gap-2 italic text-nav underline cursor-pointer ease duration-300 text-black hover:text-primary">
            <CiPhone className="font-black text-2xl" /> +977 - (98)00000000
          </span>
        </div>
        {/* main nav */}

        {/* Desktop view */}
        <div className="w-full flex items-center bg-primary hidden md:block">
          <div className="w-full flex justify-center px-5 md:px-8">
            <ul className="max-w-[1280px] w-full flex items-center justify-end gap-2 py-4 px-5 text-stone-100">
              <li className="mr-auto">
                <Link href={"/"}>
                  <div
                    style={{
                      backgroundImage: `url("${logo.src}")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="w-[45px] h-[45px] rounded-full"
                  ></div>
                </Link>
              </li>
              <li className="mx-2">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="mx-2">
                <Link href={"/about"}>About us</Link>
              </li>
              <li className="mx-2">
                <Link href={"/news"}>News&Events</Link>
              </li>
              <li className="mx-2">
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li className="mx-2">
                <Link href={"/downloads"}>Downloads</Link>
              </li>
              <li className="mr-auto">
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <button className="px-5 py-2 rounded-md font-regural text-md text-black bg-stone-100 ease duration-300 hover:scale-105 shadow-stone-100 shadow-lg/20 cursor-pointer">
                    Contact us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile view */}
        <div className="w-full flex items-center bg-primary block md:hidden">
          <div className="w-full flex items-center justify-center px-8">
            <ul className="max-w-[1280px] w-full flex items-start justify-between">
              <li className="p-4">
                <Link href={"/"}>
                  <div
                    style={{
                      backgroundImage: `url("${logo.src}")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="w-[45px] h-[45px] rounded-full"
                  ></div>
                </Link>
              </li>
              <li>
                {Menu ? (
                  <>
                    <span
                      onClick={() => setMenu(!Menu)}
                      className="font-black text-3xl cursor-pointer p-4"
                    >
                      <RxDropdownMenu className="-rotate-180" />
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      onClick={() => setMenu(!Menu)}
                      className="font-black text-3xl cursor-pointer p-4"
                    >
                      <RxDropdownMenu />
                    </span>
                  </>
                )}
                {Menu ? (
                  <nav className="max-w-[280px] w-full">
                    <ul className="w-full flex flex-col items-start justify-start py-4">
                      <Link
                        className="w-full ease duration-300 hover:bg-third"
                        href={"/"}
                      >
                        <li className="mx-2 w-full px-5 py-2">Home</li>
                      </Link>
                      <Link
                        className="w-full ease duration-300 hover:bg-third"
                        href={"/about"}
                      >
                        <li className="mx-2 w-full px-5 py-2">About us</li>
                      </Link>
                      <Link
                        className="w-full ease duration-300 hover:bg-third"
                        href={"/news"}
                      >
                        <li className="mx-2 w-full px-5 py-2">News&Events</li>
                      </Link>
                      <Link
                        className="w-full ease duration-300 hover:bg-third"
                        href={"/projects"}
                      >
                        <li className="mx-2 w-full px-5 py-2">Projects</li>
                      </Link>
                      <Link
                        className="w-full ease duration-300 hover:bg-third"
                        href={"/downloads"}
                      >
                        <li className="mx-2 w-full px-5 py-2">Downloads</li>
                      </Link>
                      <Link
                        className="w-full ease duration-300 hover:bg-third"
                        href={"/gallery"}
                      >
                        <li className="mr-auto w-full px-5 py-2">Gallery</li>
                      </Link>
                      <Link className="w-full" href={"/contact"}>
                        <li>
                          <button className="w-full px-5 py-2 rounded-md font-regural text-md text-black bg-stone-100 ease duration-300 hover:bg-stone-300 shadow-stone-100 shadow-lg/20 cursor-pointer">
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
