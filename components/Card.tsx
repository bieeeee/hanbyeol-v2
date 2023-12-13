import React, { useState } from 'react';
import { FaRegFolder } from "react-icons/fa";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import Modal from './Modal';

export const Card = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string>('');
  const handleClick = (proejct: any) => {
    setIsModalOpen(true);
    setSelectedProject(project.id);
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedProject('');
  }

  return (
    <>
      <div key={project.id} className='w-72 h-72 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer' onClick={() => handleClick(project)}>
        <FaRegFolder className="text-4xl text-textGreen" />
        <div className="">
          <h2 className='flex gap-2 items-center text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
            {project.title}
            <HiMiniMagnifyingGlassPlus className='hidden group-hover:block' />
          </h2>
          <p className='text-small mt-3'>
            {project.desc}
          </p>
        </div>
        <ul className='test-xs mdl:text-sm text-textDark flex items-center gap-4 flex-wrap'>
          {project.stack.map((stack: string, i: number) => (
            <li key={i}>{stack}</li>
          ))}
        </ul>
      </div>
      {isModalOpen && <Modal open={isModalOpen} onClose={handleClose} project={selectedProject} />}
    </>
  )
}
