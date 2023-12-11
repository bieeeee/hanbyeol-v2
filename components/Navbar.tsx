import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    ['About', '#about'],
    ['Project', '#project'],
    ['Contact', '#contact'],
  ];

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-center'>
        <div>
          <ul className='flex text-[13px] gap-7'>
            <Link
              href='#home'
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            {navItems.map(([title, url], i) => (
              <Link
                key={title}
                href={url}
                className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.15 * (i + 1) }}
                >
                  <span className="text-textGreen">0{i + 1}.</span>{title}
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
