import React from 'react';

function AddToCartModal({ product, isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button onClick={() => closeModal()}>Add to Cart</button>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </div>
  );
}

export default AddToCartModal;
