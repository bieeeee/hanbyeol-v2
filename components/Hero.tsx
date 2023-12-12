import { motion } from 'framer-motion';

const Hero = () => {
  const words = ["Hi, my name is ", "Hanbyeol Kwon", ". I'm a ", "passionate developer", " who appreciates ", "clean code", " and ", "aesthetic UI design", ". Currently, I'm focused on learning ", "performance optimization techniques", " and exploring ", "new technologies."];
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      id='about'
      className='max-w-contentContainer flex mx-auto h-[85vh] lg:h-[91vh] py-10 mdl:py-24 mdl:px-10 xl:px-4'
    >
      <div className="flex items-center justify-start">
        <div className="max-w-[800px] mx-auto text-4xl font-bold text-center">
          <div>
            {words.map((word, i) => (
              (i % 2 === 0) ?
                <h1 key={word} className='inline text-textDark text-xl'>{word}</h1>
                :
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 * (i) }}
                  key={word}
                  className='inline'
                >
                  {word}
                </motion.h1>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
