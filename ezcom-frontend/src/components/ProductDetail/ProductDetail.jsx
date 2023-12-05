// Productdetail.js
import React, { useState } from 'react';
import SellOrderModal from '../Modal/'; 
import { data } from '../../content/detail.js';
import { Link } from 'react-router-dom';

function Productdetail({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto md:max-w-[95vw] lg:max-w-[85vw] xl:max-w-[75vw]">
      {/* ... Existing code ... */}

      {/* Modal */}
      <SellOrderModal product={product} isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default Productdetail;
