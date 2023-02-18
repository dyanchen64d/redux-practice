import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import Notification from './components/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isFirstRender = true;

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);

  const { notification } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
    } else {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
