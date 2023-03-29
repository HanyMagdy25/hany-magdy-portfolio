import Image from "next/image";
import Link from "next/link";
import React from "react";
import hireSvg from "../../assets/Senior_Frontend_Developer.svg";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden
    "
    >
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src={hireSvg}
          alt="hireSvg"
          className="fill-dark animate-spin-slow "
        />
        {/* <CircularText className={"fill-dark animate-spin-slow"} /> */}
        <Link
          href="mailto:hanymagdy25@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md 
          border-solid border-dark w-24 h-24 rounded-full font-semibold
           border-2 hover:text-dark hover:bg-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
