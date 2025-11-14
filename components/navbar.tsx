import Link from "next/link";
import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import logo from "@/public/uploaded_logo.png";

const Navbar = () => {
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
        <div className="w-full flex items-center bg-primary">
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
                <Link href={"/downloads"}>Downloads</Link>
              </li>
              <li className="mr-auto">
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <button className="px-5 py-2 rounded-md font-regural text-md text-black bg-stone-100 shadow-stone-100 shadow-lg/20 cursor-pointer">
                    Contact us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
