// SellOrderModal.js
import React from 'react';

const SellOrderModal = ({ product, isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal bg-400">
            <div className='flex justify-center text-100 text-2xl'>Sell Order</div>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            {/* The rest of your modal content */}
            {/* ... */}
          </div>
        </div>
      )}
    </>
  );
}

export default SellOrderModal;
