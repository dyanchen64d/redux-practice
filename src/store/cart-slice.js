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

      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const existed = state.itemsList.find((item) => item.id === id);

      if (existed.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existed.quantity = existed.quantity - 1;
        existed.totalPrice = existed.totalPrice - existed.price;
      }

      state.totalQuantity--;
    },
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
