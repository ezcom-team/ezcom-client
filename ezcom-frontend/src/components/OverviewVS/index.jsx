import axios from 'axios';
import React from 'react'

export const OverviewVS = ({ item, spec }) => {

  console.log(item.Specs)
  console.log(typeof(item.Specs))

  console.log('spec = ', spec)

  return (
    <div className='m-10'>
        <div className=" w-72 h-auto p-5 bg-back">
          <img src={item.Image} className='bg-300 rounded-t-lg px-4 p-t'  alt="" />
          <div className='bg-300 rounded-b-lg pb-1'>
            <div>
              {item.Name}
            </div>
            <div className='text-primary'>
              $ {item.Price}
            </div>
          </div>
          {item.Type === 'Mouse' ? (
            <div className='mt-12 h-auto text-100 bg-300'>
              <div className='flex p-2 justify-center'>
                {item.Color.map((color) => (
                  <div>{color}/</div>
                ))}
                {/* <div>{item.Color}</div> */}
              </div>
              <div className='flex p-2 bg-400 justify-center'>
                <div>{spec.Sensor}</div>
              </div>
              <div className='flex p-2 bg-300 justify-center'>
                <div>{spec.ButtonSwitch}</div>
              </div>
              <div className='flex p-2 bg-400 justify-center'>
                <div>{spec.Connection}</div>
              </div>
              <div className='flex p-2 bg-300 justify-center'>
                <div>length</div>
              </div>
              <div className='flex p-2 bg-400 justify-center'>
                <div>weight</div>
              </div>
              <div className='flex p-2 bg-300 justify-center'>
                <div>polling</div>
              </div>
              <div className='flex p-2 bg-400 justify-center'>
                <div>button</div>
              </div>
              <div className='flex p-2 bg-300 justify-center'>
                <div>shape</div>
              </div>
              <div className='flex p-2 bg-400 justify-center'>
                <div>height</div>
              </div>
              <div className='flex p-2 bg-300 justify-center'>
                <div>width</div>
              </div>
            </div>
            ) : (<></>)
          }

        </div>
    </div>
  )
}
