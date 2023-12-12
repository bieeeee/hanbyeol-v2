import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    ['About', '#about'],
    ['Skill', '#skill'],
    ['Project', '#project'],
    ['Contact', '#contact'],
  ];

  return (
    <div className='w-full h-15 lg:h-[9vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center'>
        <div className='hidden mdl:inline-flex items-center gap-7 mx-auto'>
          <ul className='flex text-[13px] gap-7'>
            {navItems.map(([title, url], i) => (
              <Link
                key={title}
                href={url}
                className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.15 * (i) }}
                >
                  <span className="text-textGreen">0{i + 1}. </span>{title}
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group ml-auto'>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
