import { useTranslation } from "react-i18next";

const Hero = ({ m }: any) => {
  const { t } = useTranslation('common')
  const words = [t('hero.0'), t('hero.1'), t('hero.2'), t('hero.3'), t('hero.4'), t('hero.5'), t('hero.6'), t('hero.7'), t('hero.8'), t('hero.9'), t('hero.10'), t('hero.11'), t('hero.12')];
  return (
    <m.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      id='about'
      className='max-w-contentContainer h-[89vh] flex mx-auto mdl:px-10 xl:px-4'
    >
      <div className="flex items-center justify-start">
        <div className="max-w-[800px] mx-auto text-3xl sml:text-5xl font-bold text-center">
          {words.map((word, i) => (
            (i % 2 === 0) ?
              <m.h1
                key={word}
                className='inline'
                initial={{ fontSize: "100%", color: "#e8eeff" }}
                animate={{ fontSize: "50%", color: "#8892b0" }}
                transition={{ duration: 0.3, delay: 4.76 }}
              >
                {word}
              </m.h1>
              :
              <m.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 * (i) }}
                key={word}
                className='inline text-[#e8eeff]'
              >
                {word}
              </m.h1>
          ))}
        </div>
      </div>
    </m.section>
  )
}

export default Hero
