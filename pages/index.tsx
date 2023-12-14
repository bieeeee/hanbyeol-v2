import dynamic from 'next/dynamic';
import Head from "next/head";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"));
const Skill = dynamic(() => import("@/components/Skill"), { ssr: false });
const Project = dynamic(() => import("@/components/Project"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home({ m }: any) {
  return (
    <>
      <Head>
        <title>Hanbyeol Kwon | Full-stack Developer</title>
      </Head>
      <Navbar m={m} />
      <div className="w-full mx-auto flex flex-col p-4">
        <Hero m={m} />
        <Skill m={m} />
        <Project m={m} />
        <Contact m={m} />
      </div>
    </>
  )
}
