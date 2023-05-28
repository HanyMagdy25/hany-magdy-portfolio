import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 ${
                router.asPath === href ? "w-full" : "w-0"
              } dark:bg-light`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light"
    >
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com/hanymagdyjr"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/HanyMagdy25"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/hany-magdy-7a0ab4175/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>


        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
