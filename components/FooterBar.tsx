import React from "react";
import logo from "@/public/uploaded_logo.png";
import { CiMail, CiPhone } from "react-icons/ci";
import map from "@/public/view us on map.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const FooterBar = () => {
  return (
    <div className="w-full bg-primary px-5 md:px-8 py-4 flex flex-col items-center justify-center">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row items-start md:items-center justify-around gap-4 px-5">
        <div className="w-1/2 flex flex-col items-start justify-start gap-1 p-5">
          <Link href={"/"}>
            <div
              style={{
                backgroundImage: `url("${logo.src}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="w-[55px] h-[55px] rounded-full"
            ></div>
          </Link>
          <p className="w-[204px] font-medium text-md mt-4">
            123 Hydroelectric Road, Aqua City, Waterfalls 98765
          </p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="font-bold text-xl cursor-pointer">
              <FaFacebook />
            </span>
            <span className="font-bold text-xl cursor-pointer">
              <FaLinkedin />
            </span>
            <span className="font-bold text-xl cursor-pointer">
              <FaTwitter />
            </span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start justify-start gap-1">
          <h6 className="font-semibold text-lg">Contact us</h6>
          <span className="flex items-center text-sm justify-center gap-2 italic text-nav underline cursor-pointer text-white">
            <CiMail className="font-black text-xl" /> info@example.com
          </span>
          <span className="flex items-center text-sm justify-center gap-2 italic text-nav underline cursor-pointer text-white">
            <CiPhone className="font-black text-xl" /> +977 - (98)00000000
          </span>
        </div>

        <div className="w-1/2 flex flex-col items-start justify-start gap-1">
          <h6 className="font-semibold text-lg">Quick links</h6>
          <ul className="w-full flex flex-col items-start justify-start text-sm">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/2 flex flex-col items-start justify-start gap-1">
          <h6 className="font-semibold text-lg">View us</h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56506.53295636403!2d85.25438924863278!3d27.727834300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1915950f9d31%3A0xaf075cc9ad4db59c!2sKalika%20Construction!5e0!3m2!1sen!2snp!4v1763381512376!5m2!1sen!2snp"
            width="150"
            height="150"
            className="max-w-[150px] max-h-[150px] w-full h-screen rounded-sm shadow-md/30 shadow-stone-100"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <hr className="max-w-[1280px] w-full h-1 mt-5" />
      <span className="font-thin text-sm text-white mt-4">
        © 2025 Maulika Hydropower Company Ltd. All rights reserved
      </span>
    </div>
  );
};

export default FooterBar;
