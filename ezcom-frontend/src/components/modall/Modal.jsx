// Modal.jsx
import React from 'react';

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
