import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = () => {
  return (
    <div className='w-96 h-16 m-4 bg-white rounded-full drop-shadow border-0 flex justify-center items-center'>
        <SearchIcon className='w-64 h-64 text-sm' />
        <input className='w-80 border-0' placeholder=' Search...' />
    </div>
  )
}
