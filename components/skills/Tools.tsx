import React from 'react'
import { RiArrowRightSFill } from 'react-icons/ri';

const Tools = () => {
  const items = ["Git/Github", "Figma", "Insomnia", "Trello", "Slack"];

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 mt-2">
        {items.map((item) =>
          <div key={item} className='flex justify-start items-center gap-2'>
            <span className="text-textGreen">
              <RiArrowRightSFill />
            </span>
            <span>{item}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tools
