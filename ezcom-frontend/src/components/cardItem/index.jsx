import React from 'react'

export const CardItem = (props) => {
  return (
    <div className='m-5 w-52 h-52 p-2 bg-300 drop-shadow rounded-lg flex justify-center'>
        <div className='grid place-items-center'>
          <div className='m-0 w-20 h-20 flex justify-center'>
            <img src={props.img} />
          </div>
          <div className='text-100 text-xl text-center'>
            <div>{props.name}</div>
            <div>$<span className='text-primary'>{props.price}.-</span></div>
            <div>({props.quantity}) items</div>
          </div>
        </div>
    </div>
  )
}
