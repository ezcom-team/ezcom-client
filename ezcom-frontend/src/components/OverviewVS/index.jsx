import React from 'react'

export const OverviewVS = ({ item }) => {

  console.log(item)
  return (
    <div className='m-10'>
        <div className=" w-72 h-72 border border-300 rounded-md">
        <img src={item.Image} className=" bg-400" alt="" />
          <div className='mt-12 w-72 h-80 bg-300 text-100'>
            <div>
              {item.Name}
            </div>
            <div>
              {item.Desc}
            </div>
            <div>
              $ {item.Price}
            </div>

          </div>
        </div>
    </div>
  )
}
