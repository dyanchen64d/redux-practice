import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

import './Cart.css';
const Cart = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
