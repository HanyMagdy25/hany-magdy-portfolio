import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../../public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hany Magdy</title>
        <meta name="description" content="Hany Magdy - Frontend Developer" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex justify-center items-center w-full">
            <div className="w-1/2">
              <Image
                src={profileImg}
                alt="HanyMagdy"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              {/* <h1>Turning Vision Into Reality With Code And Design. </h1> */}
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Hany-Magdy-Frontend-ReactJs.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                  text-lg font-semibold hover:bg-light hover:text-dark border-2
                  border-solid border-transparent hover:border-dark transition duration-300"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:hany.magdy25@gmail.com"
                  target={"_blank"}
                  className="flex items-center p-2.5 px-6 rounded-lg
                  text-lg font-semibold bg-light text-dark border-2
                  border-solid border-transparent border-dark ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  );
}
