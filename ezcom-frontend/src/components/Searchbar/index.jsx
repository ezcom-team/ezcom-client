import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = () => {
  return (
    <div className='w-40 md:w-auto lg:w-96 h-8 lg:h-12 p-3 m-4 bg-white rounded-full drop-shadow border-0 flex justify-center items-center'>
        <SearchIcon className=' text-4xl' />
        <input className='w-20 md:w-auto lg:w-80 border-0' placeholder=' Search...' />
    </div>
  )
}
