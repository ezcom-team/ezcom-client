import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Slider from '@mui/material/Slider';

export const PriceRange = ({ onPriceChange }) => {

    const [effect, setEffect] = useState(false);
    const [open, setOpen] = useState(true);

    const [price, setPrice] = useState([0, 100000]);

    const handleOpen = () => {
        setOpen(!open);
        setEffect(!effect);
    };
      
    const handleChange = (e) => {
        setPrice(e.target.value);
        onPriceChange(e.target.value)
    };
    // console.log('price', price);

  return (
    <div>
        <div className='w-40 lg:w-60 xl:w-72 px-2.5 py-3 lg:p-3 bg-300 text-200 rounded-lg flex flex-col'>
            <div onClick={handleOpen} className='flex justify-between align-middle text-md md:text-lg lg:text-xl'>
                Price Range
                {effect ? (<><ExpandLessIcon  onClick={handleOpen} onAnimationEnd={() => setEffect(false)} className='cursor-pointer' /></>) 
                : <><ExpandMoreIcon  onClick={handleOpen} onAnimationEnd={() => setEffect(false)} className='cursor-pointer' /></>}
            </div>
            <div className={`${open ? 'block' : 'hidden'} mt-5 px-5 text-md lg:text-lg transition-opacity duration-300 ease-in-out`}>
                <Slider
                    min={0}
                    max={100000}
                    getAriaLabel={() => 'range'}
                    value={price}
                    onChange={(e) => handleChange(e)}
                    valueLabelDisplay='off'
                />
                <div>
                    <p>Min: ฿{price[0]}</p>
                    <p>Max: ฿{price[1]}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
