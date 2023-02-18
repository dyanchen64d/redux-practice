import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = payload;

      // check if existed
      const existed = state.itemsList.find((item) => item.id === newItem.id);

      if (existed) {
        existed.quantity++;
        existed.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
    },
    removeFromCart: () => {
      //
    },
    setShowCart: (state) => {
      state.showCart = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
