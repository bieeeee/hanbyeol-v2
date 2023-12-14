import { m } from 'framer-motion';
import { useRef, useState } from 'react';

const Navbar = () => {
  const ref = useRef<string | any>("");
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
          <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group ml-auto my-5'>
            <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
            <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
            <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
          </div>
          {/* {show && (
            <div
              ref={(node) => (ref.current = node)}
            >

            </div>
          )} */}
        </div>
      </m.div>
  )
}

export default Navbar
