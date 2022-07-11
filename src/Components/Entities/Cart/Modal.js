import React, { useRef, useEffect, useCallback } from 'react';
import './Modal.css';

const Modal = ({ closeModal, cart, handleClick, onRemove }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <div className='main-modal'>
      <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='modal-header'>
            <div className='title'>
              <h1>My Cart</h1>
            </div>
            <div className='titleCloseBtn'>
              <button
                onClick={() => {
                  closeModal(false);
                }}>
                X
              </button>
            </div>
          </div>
          {cart.length === 0 && (
            <div className='cart-tablet'>
              <div className='cart-body'>
                <div className='empty-cart'>
                  <div className='empty-cart-wrapper'>
                    <h2>No items in your cart</h2>
                    <p>Your favourite items are just a click away</p>
                  </div>
                  <div className='empty-cart-footer'>
                    <button>Start Shopping</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {cart.map((item) => (
            <div key={item.id} className='row'>
              <figure className='col-2'>
                <img src={item.imageURL} className='image-wrapper' />
              </figure>
              <div className='col-2'>{item.name.substring(0, 15)}</div>
              <div className='col-2'>
                <button onClick={() => onRemove(item)} className='remove'>
                  -
                </button>{' '}
                <button onClick={() => handleClick(item)} className='add'>
                  +
                </button>
              </div>

              <div className='col-2 text-right'>
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          {cart.length !== 0 && (
            <>
              <hr></hr>
              <div className='row'>
                <div className='col-2'>Items Price</div>
                <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <strong>Total Price</strong>
                </div>
                <div className='col-1 text-right'>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className='row'>
                <button
                  onClick={() => console.log('Success')}
                  className='checkout-btn'>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
