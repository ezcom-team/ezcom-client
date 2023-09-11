import React from 'react'

import { Link } from 'react-router-dom';

export const CardItem = (props) => {

  return (
    <Link to={`/detail/${props.id}`}>
      <div className='m-5 w-52 h-52 p-2 bg-300 drop-shadow rounded-lg flex justify-center cursor-pointer'>
          <div className='grid place-items-center'>
            <div className='m-0 w-28 h-28 flex justify-center'>
              <img src={props.img} />
            </div>
            <div className='text-100 text-lg text-center'>
              <div>{props.name}</div>
              <div>$<span className='text-primary'>{props.price}.-</span></div>
              <div>({props.quantity}) items</div>
            </div>
          </div>
      </div>
    </Link>
  )
}
