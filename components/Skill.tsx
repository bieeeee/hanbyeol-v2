import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Frontend from './skills/Frontend';
import Backend from './skills/Backend';
import Database from './skills/Database';
import Tools from './skills/Tools';

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState("Frontend");
  const handleSkilSelection = (category) => {
    setSelectedSkill(category);
  }
  const categories = [
    { title: "Frontend", component: <Frontend /> },
    { title: "Backend", component: <Backend /> },
    { title: "Database", component: <Database /> },
    { title: "Tools", component: <Tools /> },
  ]
  return (
    <section className='max-x-containerxs mx-auto py-10 lgl:py-24 px-4' id='skill'>
      <SectionTitle title="Technologies I've worked with" titleNo="02" />
      <div className='h-[88vh] w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className="md:w-32 flex flex-col">
          {categories.map((category) => (
            <li
              key={category.title}
              onClick={() => handleSkilSelection(category.title)}
              className={`${
                selectedSkill === category.title
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
    </section>
  )
}

export default Skill
