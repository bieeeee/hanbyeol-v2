import { inView } from "./motion"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { IoLogoGithub } from "@react-icons/all-files/io5/IoLogoGithub";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";

const Contact = ({ m }: any) => {
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
          04. Let's Connect!
        </p>
        <p className="max-w-containerxs mb-2 text-3xl font-bold text-center text-textLight">
          I'm always up for fun and quirky projects!
        </p>
        <p className="max-w-containerxs text-xl font-semibold text-center text-textDark mb-7">
          Let's chat about potential collaborations or explore networking opportunities.
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
