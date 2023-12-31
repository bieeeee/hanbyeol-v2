import React, { useState } from 'react';
import { FaRegFolder } from "@react-icons/all-files/fa/FaRegFolder";
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

export const Card = ({ project }:any) => {
  const {t} = useTranslation('project');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string>('');
  const handleClick = (project:any) => {
    setIsModalOpen(true);
    setSelectedProject(project.id);
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedProject('');
  }

  return (
    <>
      <div className='min-h-72 rounded-lg bg-[#112240] p-7 flex flex-col items-start justify-between gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer' onClick={() => handleClick(project)}>
        <div>
          <FaRegFolder className="text-4xl text-textGreen mb-2" />
          <h2 className='flex gap-2 items-center text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
            {project.title}
          </h2>
          <p className='text-sm mt-3 break-normal'>
            {t(`${project.desc}`)}
          </p>
        </div>
        <div>
          <ul className='text-xs lgl:text-sm text-textDark flex items-center gap-x-2 flex-wrap leading-none'>
            {project.stack.map((stack: string, i: number) => (
              <li key={i}>{stack}</li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && <Modal open={isModalOpen} onClose={handleClose} project={selectedProject} />}
    </>
  )
}
