import dynamic from 'next/dynamic';
import Head from "next/head";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Skill = dynamic(() => import("@/components/Skill"), { ssr: false });
const Project = dynamic(() => import("@/components/Project"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home({ m }: any) {
  return (
    <>
      <Head>
        <title>Hanbyeol Kwon | Full-stack Developer</title>
      </Head>
      <main className="w-full h-screen overflow-x-hidden overflow-y-scroll font-bodyFont bg-bodyColor  text-textLight">
        <Navbar m={m} />
        <div className="w-full mx-auto flex flex-col p-4">
          <Hero m={m} />
          <Skill m={m} />
          <Project m={m} />
          <Contact m={m} />
        </div>
      </main>
      <div id="global-modal"></div>
    </>
  )
}

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'project'])),
    },
  }
}
