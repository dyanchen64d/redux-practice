import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const CartItems = () => {
  const { itemsList } = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemsList.map((item) => (
          <li key={item.id}>
            <CartItem {...item} total={item.totalPrice} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
