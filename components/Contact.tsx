import { inView } from "./motion"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { IoLogoGithub } from "@react-icons/all-files/io5/IoLogoGithub";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { useTranslation } from "react-i18next";

const Contact = ({ m }: any) => {
  const { t } = useTranslation('common');
  return (
    <section id='contact' className='max-w-contentContainer h-[80vh] mx-auto flex items-center justify-center'>
      <m.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={inView}
      >
        <p className="mb-7 font-titleFont text-lg text-textGreen font-semibold text-center tracking-wide">
          {t('contact.title')}
        </p>
        <p className="max-w-containerxs mb-2 text-3xl font-bold text-center text-textLight">
          {t('contact.head')}
        </p>
        <p className="max-w-[250px] sml:max-w-[450px] text-sm sml:text-lg text-center text-textDark mb-7">
          {t('contact.body')}
        </p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/hanbyeol-kwon/" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiLinkedin />
            </span>
          </a>
          <a href="https://github.com/bieeeee/" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <IoLogoGithub />
            </span>
          </a>
          <a href="mailto:janviertrois@naver.com" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <HiOutlineMail />
            </span>
          </a>
        </div>
      </m.div>
    </section>
  )
}

export default Contact
