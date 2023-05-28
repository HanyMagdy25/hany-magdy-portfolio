import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { myWorks } from "@/utils/data";
import { useState } from "react";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center justify-between 
    rounded-3xl rounded-br-2xl border border-solid border-dark
     bg-light p-12 shadow-2xl dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%]
        rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          {/* <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link> */}
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark dark:bg-light text-light
             dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link }) => {
  return (
    <article
      className="relative flex flex-col w-full items-center justify-between 
    rounded-2xl border border-solid border-dark bg-light p-6 dark:bg-dark 
    dark:border-light "
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%]
        rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image priority src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
         
          <Link
            href={link}
            target="_blank"
            
          >
            <button className="group flex w-full dark:text-dark dark:bg-light items-center justify-center rounded-md bg-dark px-5 py-3 text-white transition sm:mt-0 sm:w-auto ">
            <span className="text-sm font-medium"> Visit </span>
            <svg
              className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          </Link>
          
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  const [filterWork, setFilterWork] = useState(myWorks);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    // setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      // setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(myWorks);
      } else {
        setFilterWork(myWorks.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  console.log(filterWork);
  return (
    <>
      <Head>
        <title>Projects | Hany Magdy</title>
        <meta name="description" content="Projects | Hany Magdy" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="My Projects" className="mb-16" />

          <div className="flex mb-10 gap-5 flex-wrap">
            {[
              "All",
              "React js",
              "Next js",
              "Svelte",
              "SvelteKit",
              "Bootstrap",
              "Tailwind",
              "Vanilla JS",
              "TypeScript",
              "Redux",
              "Angular",
              "Vue js",
            ].map((item, index) => (
              <button
                onClick={() => handleWorkFilter(item)}
                className={` text-dark  border-solid border
                   border-dark dark:border-light flex items-center justify-center 
                  rounded-md px-5 py-2.5 text-center text-sm font-medium 
                hover:scale-105 transition duration-300
                 ${
                   activeFilter === item
                     ? "text-white dark:text-dark bg-dark dark:bg-light"
                     : "bg-light dark:bg-dark dark:text-light"
                 }`}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            {/* <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div> */}
            {filterWork?.length === 0 ? (
              <div className="col-span-12">
                <AnimatedText text="Imagination " className="mb-5 text-xl" />
              </div>
            ) : (
              <>
                {filterWork.map((item) => (
                  <div key={item.id} className="col-span-6">
                    <Project
                      title={item.title}
                      link={item.projectLink}
                      type="Featured Project"
                      img={item.imgUrl}
                    />
                  </div>
                ))}
              </>
            )}

            {/* <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/dd"
                type="Featured Project"
                img={project1}
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Projects;
