import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Hero = () => {
  const line1 = "Hi, my name is Hanbyeol Kwon. I'm a passionate developer who appreciates clean code and aesthetic UI design. Currently, I'm focused on learning performance optimization techniques and exploring new technologies.";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.03,
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    }
  }
  return (
    <section
      id='about'
      className='max-w-contentContainer flex mx-auto h-[85vh] lg:h-[91vh] py-10 mdl:py-24 mdl:px-10 xl:px-4'
    >
      <div className="flex items-center justify-start">
        <SectionTitle titleNo='01' title='About Me' className='rotate-90 whitespace-nowrap text-base w-[100px]' />
        <div className="max-w-[800px] mx-auto text-4xl font-bold text-left">
          <motion.h1 variants={sentence} initial="hidden" animate="visible">
            {line1.split("").map((char, i) => (
              <motion.span key={char + "-" + i} custom={i} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
