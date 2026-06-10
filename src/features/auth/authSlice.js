import { createSlice } from '@reduxjs/toolkit';

// Persist auth in localStorage so refresh keeps the session.
const stored = JSON.parse(localStorage.getItem('bh_auth') || 'null');

const initialState = {
  user: stored?.user || null,
  token: stored?.token || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      localStorage.setItem('bh_auth', JSON.stringify(payload));
    },
    updateUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem('bh_auth', JSON.stringify({ user: payload, token: state.token }));
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('bh_auth');
    },
  },
});

export const { setCredentials, updateUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (s) => s.auth.user;
export const selectIsAdmin = (s) => s.auth.user?.role === 'admin';
