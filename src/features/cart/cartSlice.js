import { createSlice } from '@reduxjs/toolkit';

const stored = JSON.parse(localStorage.getItem('bh_cart') || '[]');

const persist = (items) => localStorage.setItem('bh_cart', JSON.stringify(items));

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: stored, coupon: null },
  reducers: {
    addToCart: (state, { payload }) => {
      const existing = state.items.find((i) => i._id === payload._id);
      if (existing) existing.quantity = Math.min(existing.quantity + (payload.quantity || 1), payload.stock || 99);
      else state.items.push({ ...payload, quantity: payload.quantity || 1 });
      persist(state.items);
    },
    updateQty: (state, { payload }) => {
      const item = state.items.find((i) => i._id === payload.id);
      if (item) item.quantity = Math.max(1, payload.quantity);
      persist(state.items);
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((i) => i._id !== payload);
      persist(state.items);
    },
    applyCouponState: (state, { payload }) => { state.coupon = payload; },
    clearCart: (state) => {
      state.items = [];
      state.coupon = null;
      persist([]);
    },
  },
});

export const { addToCart, updateQty, removeFromCart, applyCouponState, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (s) => s.cart.items;
export const selectCartCount = (s) => s.cart.items.reduce((n, i) => n + i.quantity, 0);
export const selectCartSubtotal = (s) =>
  s.cart.items.reduce((sum, i) => sum + (i.discountPrice > 0 ? i.discountPrice : i.price) * i.quantity, 0);
