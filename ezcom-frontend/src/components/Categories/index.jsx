import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Categories = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="w-auto lg:w-60 xl:w-72 px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col">
        <div className='flex justify-between align-middle text-md md:text-lg lg:text-xl'>
          Categories
          <ExpandMoreIcon onClick={handleOpen} className='cursor-pointer' />
        </div>
        <div className="bg-300 text-200">
            {open ? (
              <div className='mt-5 text-md lg:text-lg'>
                <ul>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-2 xl:mr-5' />
                    Accessories
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-2 xl:mr-5'/>
                    Headset
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-2 xl:mr-5' />
                    Keyboard
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-2 xl:mr-5' />
                    Mouse
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-2 xl:mr-5' />
                    Microphone
                  </li>
                  <li className="menu-item">
                    <input type='checkbox' className='mr-2 xl:mr-5' />
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
