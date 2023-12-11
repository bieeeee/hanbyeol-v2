import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hanbyeol Kwon | Full-stack Developer</title>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll -y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full flex flex-col items-center mx-auto px-4">
          <Hero />
          <Skill />
          <Project />
        </div>
      </main>
    </>
  )
}
