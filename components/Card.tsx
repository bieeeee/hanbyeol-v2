import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

export const Card = () => {
  return (
    <div className='w-80 h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
      <div>
        <FaRegFolder />
        <RxOpenInNewWindow />
      </div>
      <div className="">
        <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
          Booking.com
        </h2>
        <p className='text-small mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, accusantium libero nesciunt qu?
        </p>
      </div>
      <ul className='test-xs mdl:text-sm text-textDark flex items-center gap-4 flex-wrap'>
        <li>React</li>
        <li>React</li>
        <li>React</li>
      </ul>
    </div>
  )
}
