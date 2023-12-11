import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hanbyeol Kwon | Full-stack Developer</title>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
      </main>
    </>
  )
}
