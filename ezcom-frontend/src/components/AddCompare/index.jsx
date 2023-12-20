import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from 'axios';
import { CompareCard } from '../CompareCard';

export const AddCompare = ({ open, type, setOpen }) => {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            'https://ezcom-backend-production-09b5.up.railway.app/products/'
          );
          setAllData(response.data);
          setData(response.data);
        } catch (error) {
          console.error('Fetch Error', error);
        }
      }
      fetchData();
    }, []);
  
    const filteredItems = data.filter(item => item.Type == type);

    const handleClose = () => {
        setOpen(false);
      };

    return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
        >
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 1300,
                height: 700,
                bgcolor: 'bg-400',
                border: '2px solid #000',
                boxShadow: 24,
                // p: 4,
            }}
        >
            {allData != null ?
                <div className="bg-400 h-full grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {filteredItems.map(item => (
                        <CompareCard id={item.ID} img={item.Image} name={item.Name} price={item.Price} quantity={item.Quantity} />
                    ))}
                </div> : 
                <div className="bg-400 h-full grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    No product
                </div>
            }
            <button className='text-100 absolute top-0 right-0 p-5' onClick={handleClose}>X</button>
            </Box>
        </Modal>
    </div>
  )
}
