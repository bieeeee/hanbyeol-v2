const Hero = ({m}:any) => {
  const words = ["Hi, my name is ", "Hanbyeol Kwon", ". I'm a ", "passionate developer", " who appreciates ", "clean code", " and ", "aesthetic UI design", ". Currently, I'm focused on learning ", "performance optimization techniques", " and exploring ", "new technologies."];
  return (
      <m.section
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        id='about'
        className='max-w-contentContainer h-[89vh] flex mx-auto mdl:px-10 xl:px-4'
      >
        <div className="flex items-center justify-start">
          <div className="max-w-[800px] mx-auto text-4xl font-bold text-center">
            <div>
              {words.map((word, i) => (
                (i % 2 === 0) ?
                  <h1 key={word} className='inline text-textDark text-xl'>{word}</h1>
                  :
                  <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 * (i) }}
                    key={word}
                    className='inline'
                  >
                    {word}
                  </m.h1>
              ))}
            </div>
          </div>
        </div>
      </m.section>
  )
}

export default Hero
