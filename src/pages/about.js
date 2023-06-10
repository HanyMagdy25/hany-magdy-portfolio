import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profileImage from "../../assets/newprofile.jpeg";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
  const IsInView = useInView(ref, { once: true });
  useEffect(() => {
    if (IsInView) {
      motionValue.set(value);
    }
  }, [IsInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Hany Magdy | About</title>
        <meta name="description" content="Hany Magdy - Frontend Developer" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="My Journey in Code"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biograpghy
              </h2>
              <p className="my-4 font-medium">
                Hi, I am Hany, a front-end developer with a passion for creating
                beautiful, functional experiences. With 3 years of experience in
                the field, I have had the opportunity to work on diverse
                projects that have shaped my skills and fueled my enthusiasm for
                web development.
              </p>
              {/* <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty , its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p> */}
              <p className="my-4 font-medium">
                From the beginning of my journey, I was captivated by the power
                of design and its ability to shape user experiences. For me,
                design is not just about making things look pretty; it is about
                solving problems and creating intuitive, enjoyable experiences
                for users. I believe that a well-designed interface can make a
                significant difference in how people interact with and
                appreciate a digital product.
              </p>
            </div>

            <div
              className="relative col-span-3 h-max rounded-2xl border-2 
              border-solid border-dark bg-light p-8 dark:bg-dark
               dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] 
                 rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light"
              />
              <Image
                src={profileImage}
                alt="Hany-Magdy"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          {/* <Skills /> */}
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
