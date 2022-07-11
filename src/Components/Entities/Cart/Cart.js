import React, { useState } from 'react';
import CartImage from '../../../cart.svg';
import Modal from './Modal';
import Products from '../../Pages/Products/Products';
import './Cart.css';

function Cart({ cart, handleClick, onRemove }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className='cart-wrapper'
        onClick={() => {
          setModalOpen(true);
        }}>
        <h4>{cart.length}</h4>
        <img
          src={CartImage}
          className={'cart-wrapper__image'}
          alt={'Cart Image'}
        />
      </div>
      {modalOpen && (
        <Modal
          closeModal={setModalOpen}
          handleClick={handleClick}
          cart={cart}
          onRemove={onRemove}
        />
      )}
    </>
  );
}
export default Cart;
