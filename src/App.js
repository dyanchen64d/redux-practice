import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import Notification from './components/Notification';
import { sendCartData } from './store/cart-actions';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { itemsList } = useSelector((state) => state.cart);

  const { notification } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendCartData(itemsList));
  }, [itemsList, dispatch]);

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
