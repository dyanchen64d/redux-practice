import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const sendCartData = (itemsList) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: 'Sending Request',
        type: 'warning',
      })
    );

    try {
      const res = await fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/itemsList.json`,
        {
          method: 'PUT', // modify
          body: JSON.stringify(itemsList),
        }
      );

      await res.json();

      // success
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Success',
          type: 'success',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        })
      );
    }
  };
};

export const fetchCartData = () => async (dispatch) => {
  dispatch(
    uiActions.showNotification({
      open: true,
      message: 'Sending Request',
      type: 'warning',
    })
  );

  try {
    const res = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/itemsList.json`,
      {
        method: 'GET',
      }
    );

    const data = await res.json();

    dispatch(cartActions.replaceCartData(data));

    // success
    dispatch(
      uiActions.showNotification({
        open: true,
        message: 'Sending Request Success',
        type: 'success',
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: 'Sending Request Failed',
        type: 'error',
      })
    );
  }
};
