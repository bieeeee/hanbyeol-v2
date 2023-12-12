import Contact from "@/components/Contact";
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
      <main className="w-full font-bodyFont bg-bodyColor text-textLight">
        <Navbar />
        <div className="w-full mx-auto flex flex-col px-4">
          <Hero />
          <Skill />
          <Project />
          <Contact />
        </div>
      </main>
    </>
  )
}
