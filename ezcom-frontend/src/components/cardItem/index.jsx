import React from 'react'

export const CardItem = (props) => {
  return (
    <div className='m-5 w-48 h-48 bg-300 drop-shadow rounded-lg flex justify-center align-middle'>
        <div>
            <img src={props.img} />
            <h3 className='text-100'>{props.name}</h3>
            <div>$ {props.price}990.-</div>
            <div>({props.quantity}99) items</div>
        </div>
    </div>
  )
}
