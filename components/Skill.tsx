import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Frontend from './skills/Frontend';
import Backend from './skills/Backend';
import Database from './skills/Database';
import Tools from './skills/Tools';
import { inView } from './motion'
import { useTranslation } from 'react-i18next';

const Skill = ({ m }: any) => {
  const {t} = useTranslation('common');
  const [selectedSkill, setSelectedSkill] = useState("Frontend");
  const handleSkilSelection = (category: any) => {
    setSelectedSkill(category);
  }
  const categories = [
    { id: "Frontend", title: t('skill.frontend'), component: <Frontend /> },
    { id: "Backend", title: t('skill.backend'), component: <Backend /> },
    { id: "Database", title: t('skill.database'), component: <Database /> },
    { id: "Tools", title: t('skill.tools'), component: <Tools /> },
  ]
  return (
    <section
      id='skill'
      className='max-x-containerxs h-[75vh] mx-auto px-4 flex flex-col justify-center'
    >
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={inView}
      >
        <SectionTitle title={t('skill.title')} titleNo="02" className='' />
        <div className='w-full pt-10 flex flex-col md:flex-row gap-16'>
          <ul className="md:w-32 flex flex-col">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleSkilSelection(category.id)}
                className={`${selectedSkill === category.id
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
                  } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-6 font-medium`}
              >
                {category.title}
              </li>
            ))}
          </ul>
          {categories.find((category) => category.id === selectedSkill)?.component}
        </div>
      </m.div>
    </section>
  )
}

export default Skill
