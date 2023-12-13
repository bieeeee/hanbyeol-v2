import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import dynamic from 'next/dynamic';
const Frontend = dynamic(() => import('./skills/Frontend'));
const Backend = dynamic(() => import('./skills/Backend'));
const Database = dynamic(() => import('./skills/Database'));
const Tools = dynamic(() => import('./skills/Tools'));

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState("Frontend");
  const handleSkilSelection = (category: any) => {
    setSelectedSkill(category);
  }
  const categories = [
    { title: "Frontend", component: <Frontend /> },
    { title: "Backend", component: <Backend /> },
    { title: "Database", component: <Database /> },
    { title: "Tools", component: <Tools /> },
  ]
  return (
    <motion.section
      id='skill'
      className='max-x-containerxs mx-auto h-[80vh] py-10 lgl:py-24 px-4 flex flex-col justify-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      variants={{
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <SectionTitle title="Technologies I've worked with" titleNo="02" className='' />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className="md:w-32 flex flex-col">
          {categories.map((category) => (
            <li
              key={category.title}
              onClick={() => handleSkilSelection(category.title)}
              className={`${selectedSkill === category.title
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              {category.title}
            </li>
          ))}
        </ul>
        {categories.find((category) => category.title === selectedSkill)?.component}
      </div>
    </motion.section>
  )
}

export default Skill
