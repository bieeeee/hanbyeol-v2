import dynamic from 'next/dynamic';
import Head from "next/head";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"));
const Skill = dynamic(() => import("@/components/Skill"), { ssr: false });
const Project = dynamic(() => import("@/components/Project"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

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
