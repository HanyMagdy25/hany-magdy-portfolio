import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 ${
                router.asPath === href ? "w-full" : "w-0"
              }`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.google.com/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.google.com/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.google.com/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.google.com/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://www.google.com/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;