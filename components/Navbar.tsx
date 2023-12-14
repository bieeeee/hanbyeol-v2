import { useState } from 'react';
import { IoClose } from "@react-icons/all-files/io5/IoClose";

const Navbar = ({m}:any) => {
  const [show, setShow] = useState(false);
  const navItems = [
    ['About', '#about'],
    ['Skill', '#skill'],
    ['Project', '#project'],
    ['Contact', '#contact'],
  ];
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const el = document.getElementById(targetId);
    el?.scrollIntoView({
      behavior: "smooth"
    })
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("text-textGreen")
    });
    e.currentTarget.classList.add("text-textGreen");
    setShow(false)
  }

  return (
    <m.div
      className='w-full h-15 mdl:h-[9vh] sticky top-0 z-50 bg-bodyColor px-4'
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center'>
        <div className='hidden mdl:inline-flex items-center gap-7 mx-auto'>
          <ul className='flex text-[13px] gap-7'>
            {navItems.map(([title, url], i) => (
              <a
                key={title}
                href={url}
                onClick={handleScroll}
                className='nav-link flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              >
                <li>
                  <span className="text-textGreen">0{i + 1}. </span>{title}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div onClick={() => setShow(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group ml-auto my-5'>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        </div>
        {show && (
          <div className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
            <m.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15 }}
              className='relative w-[50%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
            >
              <IoClose
                onClick={() => setShow(false)}
                className='absolute top-4 right-4 text-3xl text-textGreen cursor-pointer'
              />
              {navItems.map(([title, url], i) => (
                <a
                  key={title}
                  href={url}
                  onClick={handleScroll}
                  className='nav-link flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                >
                  <div className='flex flex-col justify-center items-center'>
                    <span className="text-textGreen">0{i + 1}. </span>
                    <span>{title}</span>
                  </div>
                </a>
              ))}
            </m.div>
          </div>
        )}
      </div>
    </m.div>
  )
}

export default Navbar
