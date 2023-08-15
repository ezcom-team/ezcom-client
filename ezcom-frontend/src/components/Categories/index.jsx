import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Categories = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="w-auto lg:w-60 xl:w-72 p-3 bg-300 text-200 rounded-lg flex flex-col">
        <div className='flex justify-between align-middle text-xl'>
          Categories
          <ExpandMoreIcon onClick={handleOpen} className='cursor-pointer' />
        </div>
        <div className="bg-300 text-200">
            {open ? (
              <div className='mt-5 text-lg'>
                <ul>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-3' />
                    Accessories
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-3'/>
                    Headset
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-3' />
                    Keyboard
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-3' />
                    Mouse
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-3' />
                    Microphone
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-3' />
                    Speaker
                  </li>
                </ul>
                <div className='flex justify-center'>
                  <button className='text-primary mt-4'>Clear all</button>
                </div>
              </div>
            ) : <></>}
        </div>
      </div>
    </div>
  )
}
