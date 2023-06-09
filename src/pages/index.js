import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../../public/images/profile/developer-pic-1.png";
// import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
// import lightBulb from "../../public/images/svgs/lightBulb.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hany Magdy</title>
        <meta name="description" content="Hany Magdy - Frontend Developer" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex justify-center items-center w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profileImg}
                priority
                alt="HanyMagdy"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              {/* <h1>Turning Vision Into Reality With Code And Design. </h1> */}
              <AnimatedText
                text="Transforming ideas into stunning digital experiences."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center 
                lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium">
                Passionate frontend developer specializing in creating
                captivating digital experiences. Combining creativity and
                technical expertise, I bring designs to life with pixel-perfect
                precision. From responsive layouts to interactive elements, I
                strive to deliver seamless user interactions that leave a
                lasting impression.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Hany-Magdy-Frontend-ReactJs.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                  text-lg font-semibold hover:bg-light hover:text-dark border-2
                  border-solid border-transparent hover:border-dark transition
                  duration-300 dark:bg-light dark:text-dark hover:dark:bg-dark 
                hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:hany.magdy25@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium items-center
                   text-dark dark:text-light underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        {/* <div className="absolute right-5 bottom-3 inline-block w-40 md:hidden">
          <Image src={lightBulb} alt="HanyMagdy" className="w-full h-auto" />
        </div> */}
      </main>
    </>
  );
}
