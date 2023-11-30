import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { OverviewVS } from '../components/OverviewVS'
import axios from 'axios';
import { Link } from 'react-scroll';
import { useParams } from 'react-router-dom';

export const Compare = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    
  useEffect(() => {
    async function fetchData() {
    try {
      const response = await axios.get(`https://ezcom-backend-production-09b5.up.railway.app/products/${id}`)
      setData(response.data)
    } catch (error) {
      console.error('Fetch Error', error)
    }}

    fetchData()

  }, [])
  console.log(data)


  return (
    <div>
        <Nav />
        <div className='w-auto h-16 bg-300 text-100 flex'>
            <Link to='overview' smooth={true} duration={500} className='px-10 pt-5 cursor-pointer'>
                OVERVIEW
                <div className='w-20 h-2 bg-100'></div>
            </Link>
            <Link to='spec' smooth={true} duration={500} className='px-10 pt-5 cursor-pointer'>
                SPECS
            </Link>
            <Link to='review' smooth={true} duration={500} className='px-10 pt-5 cursor-pointer'>
                REVIEW
            </Link>
        </div>
        <div>
            <div className='bg-200 h-screen'>
                <div name='overview' className='text-2xl'>
                    Overview
                    <div className='flex justify-center text-center'>
                        <OverviewVS item={data} />
                        <OverviewVS item={data} />
                    </div>
                </div>
            </div>
            <div className='bg-100 h-screen'>
                <div name='spec' className='text-2xl'>
                    Specs
                </div>
            </div>
            <div className='bg-200 h-screen'>
                <div name='review' className='text-2xl'>
                    Review
                </div>
            </div>
        </div>
    </div>
  )
}
