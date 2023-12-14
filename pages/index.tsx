import dynamic from 'next/dynamic';
import Head from "next/head";
import { LazyMotion, m } from 'framer-motion';
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"));
const Skill = dynamic(() => import("@/components/Skill"), { ssr: false });
const Project = dynamic(() => import("@/components/Project"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

const loadFeatures = () =>
  import("./features").then(res => res.default)

const inView = {
  hidden: {
    y: 10,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Hanbyeol Kwon | Full-stack Developer</title>
      </Head>
      <LazyMotion features={loadFeatures}>
        <Navbar />
        <div className="w-full mx-auto flex flex-col px-4">
          <Hero />
          <m.section
            id='skill'
            className='max-x-containerxs mx-auto h-[80vh] py-10 lgl:py-24 px-4 flex flex-col justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inView}
          >
            <Skill />
          </m.section>
          <m.section
            id='project'
            className='max-w-contentContainer mx-auto px-4 py-24 mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inView}
          >
            <Project />
          </m.section>
          <m.section
            id='contact'
            className='max-x-contentContainer mx-auto py-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inView}
          >
            <Contact />
          </m.section>
        </div>
      </LazyMotion>
    </>
  )
}
