import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
      <div className="flex flex-col items-center justify-center mt-2">
        <MotionLink
          href="/"
          className="flex items-center justify-center rounded-full w-16 h-16  bg-dark text-light text-2xl font-bold"
          whileHover={{
            background: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          HM
        </MotionLink>
      </div>
    </div>
  );
};

export default Logo;
