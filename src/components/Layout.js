import React from 'react';
import Header from './Header';
import Products from './Products';
import CartItems from './CartItems';
import './Layout.css';
import { useSelector } from 'react-redux';
const Layout = () => {
  let total = 0;

  const { showCart, itemsList } = useSelector((state) => state.cart);

  itemsList.forEach((element) => {
    total = total + element.totalPrice;
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{' '}
      </div>
    </React.Fragment>
  );
};

export default Layout;
