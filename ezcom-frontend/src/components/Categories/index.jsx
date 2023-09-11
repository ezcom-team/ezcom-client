import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const Categories = ({onFilterChange}) => {

  const [open, setOpen] = useState(false);
  const [effect, setEffect] = useState(false);

  const [filter, setFilter] = useState([]);

  const handleOpen = () => {
    setOpen(!open);
    setEffect(!effect);
  };

  const handleFilter = (e) => {
    if (filter.includes(e.target.value)) {
      const newFilter = filter.filter(items => items !== e.target.value)
      setFilter(newFilter)
      onFilterChange(newFilter)
    }
    else {
      setFilter([...filter, e.target.value])
      onFilterChange([...filter, e.target.value])
    }
  }

  const handleClearFilter = () => {
    const items=document.getElementsByName('checkbox');
				for (var i = 0; i < items.length; i++) {
					if (items[i].type == 'checkbox')
						items[i].checked = false;
        }
    setFilter([])
    onFilterChange([])
  }
  console.log('filter', filter);

  return (
    <div>
      <div className="w-40 lg:w-60 xl:w-72 px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col">
        <div onClick={handleOpen} className='flex justify-between align-middle text-md md:text-lg lg:text-xl'>
          Categories
          {effect ? (<><ExpandLessIcon  onClick={handleOpen} onAnimationEnd={() => setEffect(false)} className='cursor-pointer' /></>) 
          : <><ExpandMoreIcon  onClick={handleOpen} onAnimationEnd={() => setEffect(false)} className='cursor-pointer' /></>}
        </div>
        <div className="bg-300 text-200">
          <div className={`${open ? 'block' : 'hidden'} mt-5 text-md lg:text-lg transition-opacity duration-300 ease-in-out`}>
            <ul>
              <li className="flex items-center">
                <input name='checkbox' type='checkbox' value='VGA' onChange={(e) => handleFilter(e)} className='mr-2 xl:mr-5 w-4 h-4 accent-primary'/>
                VGA
              </li>
              <li className="flex items-center">
                <input name='checkbox' type='checkbox' value='HEADSET' onChange={(e) => handleFilter(e)} className='mr-2 xl:mr-5 w-4 h-4 accent-primary'/>
                Headset
              </li>
              <li className="flex items-center">
                <input name='checkbox' type='checkbox' value='KEYBOARD' onChange={(e) => handleFilter(e)} className='mr-2 xl:mr-5 w-4 h-4 accent-primary' />
                Keyboard
              </li>
              <li className="flex items-center">
                <input name='checkbox' type='checkbox' value='MOUSE' onChange={(e) => handleFilter(e)} className='mr-2 xl:mr-5 w-4 h-4 accent-primary' />
                Mouse
              </li>
              <li className="flex items-center">
                <input name='checkbox' type='checkbox' value='MICROPHONE' onChange={(e) => handleFilter(e)} className='mr-2 xl:mr-5 w-4 h-4 accent-primary' />
                Microphone
              </li>
              <li className="flex items-center">
                <input name='checkbox' type='checkbox' value='SPEAKER' onChange={(e) => handleFilter(e)} className='mr-2 xl:mr-5 w-4 h-4 accent-primary' />
                Speaker
              </li>
            </ul>
            <div className='flex justify-center'>
              <button className='text-primary mt-4' onClick={handleClearFilter}>Clear all</button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}
