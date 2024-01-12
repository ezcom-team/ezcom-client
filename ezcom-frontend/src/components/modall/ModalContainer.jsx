// ModalContainer.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import Payment from '../Payment/Payment'
const ModalContainer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (title, content) => {
    setActiveModal({ title, content });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div>
      <button onClick={() => openModal('Modal 1', <Payment />)}>Open Modal 1</button>
      <button onClick={() => openModal('Modal 2', 'This is the content for Modal 2')}>Open Modal 2</button>

      {activeModal && (
        <Modal
          title={activeModal.title}
          content={activeModal.content}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ModalContainer;
