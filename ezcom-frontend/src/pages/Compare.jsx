import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { OverviewVS } from '../components/OverviewVS'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AddCompare } from '../components/AddCompare';

export const Compare = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([])

    const [openModal, setOpenModal] = useState(false);
  
    useEffect(() => {
      async function fetchData() {
        await fetchProduct();
        await fetchSpec();
      }
      
      fetchData();
    }, []);
//   console.log(data)

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://ezcom-backend-production-09b5.up.railway.app/products/${id}`);
            setData(response.data);
          } catch (error) {
            console.error('Fetch Error', error);
          }
    }

    const fetchSpec = async () => {
        try {
            const response = await axios.get(
              `https://ezcom-backend-production-09b5.up.railway.app/products/spec/${data.Specs}`
            );
            setSpec(response.data);
          } catch (error) {
            console.error("Fetch Error", error);
          }
    }

    const handleOpenModal = () => {
        // Check if data is available and has the 'Type' property
        if (data && data.Type) {
        setOpenModal(true);
        }
    };


  return (
    <div>
        <Nav />
        <div>
            <div className='bg-black h-screen'>
                <div name='overview' className='text-2xl'>
                    Overview
                    <AddCompare open={openModal} type={(data && data.Type) || ''} setOpen={setOpenModal} />
                    <div className='flex justify-center text-center text-100'>
                        <div>
                            <div className='my-40 p-6 flex justify-center'>
                                <button className='w-10 h-10 bg-300 text-100 text-4xl rounded-full' onClick={handleOpenModal}>+</button>
                            </div>
                            {data.Type === 'VGA' ?
                                <table className="table-auto">
                                    <thead className='text-primary'>
                                        <tr>
                                        <th>Specs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>VGA</td>
                                        </tr>
                                        <tr>
                                            <td>VGA</td>
                                        </tr>
                                        <tr>
                                            <td>VGA</td>
                                        </tr>
                                    </tbody>
                                </table> 
                                : data.Type === 'Headset' ?
                                <table className="table-auto">
                                    <thead className='text-primary'>
                                        <tr>
                                        <th>Specs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Headset</td>
                                        </tr>
                                        <tr>
                                            <td>Headset</td>
                                        </tr>
                                        <tr>
                                            <td>Headset</td>
                                        </tr>
                                    </tbody>
                                </table> 
                                : data.Type === 'Keyboard' ?
                                <table className="table-auto">
                                    <thead className='text-primary'>
                                        <tr>
                                        <th>Specs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Keyboard</td>
                                        </tr>
                                        <tr>
                                            <td>Keyboard</td>
                                        </tr>
                                        <tr>
                                            <td>Keyboard</td>
                                        </tr>
                                    </tbody>
                                </table> 
                                : data.Type === 'Mouse' ?
                                <table className="table-auto">
                                    <thead className='text-primary'>
                                        <tr className='bg-400'>
                                            <th className='p-2'>Specs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bg-300'>
                                            <td className='p-2'>Colors</td>
                                        </tr>
                                        <tr className='bg-400'>
                                            <td className='p-2'>Sensor</td>
                                        </tr>
                                        <tr className='bg-300'>
                                            <td className='p-2'>Button switch</td>
                                        </tr>
                                        <tr className='bg-400'>
                                            <td className='p-2'>Connection</td>
                                        </tr>
                                        <tr className='bg-300'>
                                            <td className='p-2'>Length</td>
                                        </tr>
                                        <tr className='bg-400'>
                                            <td className='p-2'>Weight</td>
                                        </tr>
                                        <tr className='bg-300'>
                                            <td className='p-2'>Polling rate</td>
                                        </tr>
                                        <tr className='bg-400'>
                                            <td className='p-2'>Button force</td>
                                        </tr>
                                        <tr className='bg-300'>
                                            <td className='p-2'>Shape</td>
                                        </tr>
                                        <tr className='bg-400'>
                                            <td className='p-2'>Height</td>
                                        </tr>
                                        <tr className='bg-300'>
                                            <td className='p-2'>Width</td>
                                        </tr>
                                    </tbody>
                                </table> 
                                : data.Type === 'Mousepad' ?
                                <table className="table-auto">
                                    <thead className='text-primary'>
                                        <tr>
                                        <th>Specs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mousepad</td>
                                        </tr>
                                        <tr>
                                            <td>Mousepad</td>
                                        </tr>
                                        <tr>
                                            <td>Mousepad</td>
                                        </tr>
                                    </tbody>
                                </table> 
                                : data.Type === 'CPU' ?
                                <table className="table-auto">
                                    <thead className='text-primary'>
                                        <tr>
                                        <th>Specs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CPU</td>
                                        </tr>
                                        <tr>
                                            <td>CPU</td>
                                        </tr>
                                        <tr>
                                            <td>CPU</td>
                                        </tr>
                                    </tbody>
                                </table> 
                                : <></>
                            }
                        </div>
                            <OverviewVS item={data} spec={spec}  />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
