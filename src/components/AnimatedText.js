import { motion } from "framer-motion";
import React from "react";

const qoute = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center 
    text-center overflow-hidden sm:py-0  "
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl
        dark:text-light ${className}`}
        variants={qoute}
        initial="initial"
        animate="animate"
        // whileInView={{ opacity: [0, 1], y: [40, 0] }}
        // exit={{ y: 0 }}
        // transition={{ duration: 1.2 }}
      >
        {text?.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
            initial="initial"
            animate="animate"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
