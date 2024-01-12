import React, { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <div className='flex flex-col p-2 gap-4 mt-3'>
          <div className='p-2 bg-300'>
            <div className="border border-300 rounded-l-md">
              <img src={product.Image} className="" alt="Product Image" />
            </div>
            <div></div>
          </div>
          <div className='p-2 bg-400'>Condition</div>
          <div className='p-2 bg-300'>Price</div>
          <div className='p-2 bg-400'>Amout</div>
        </div>



      </div>
    </div>
  );
}

export default Modal;



