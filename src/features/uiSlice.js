import { createSlice } from '@reduxjs/toolkit';

const initialTheme = localStorage.getItem('bh_theme') || 'light';
if (initialTheme === 'dark') document.documentElement.classList.add('dark');

const uiSlice = createSlice({
  name: 'ui',
  initialState: { theme: initialTheme, recentlyViewed: JSON.parse(localStorage.getItem('bh_recent') || '[]') },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', state.theme === 'dark');
      localStorage.setItem('bh_theme', state.theme);
    },
    addRecentlyViewed: (state, { payload }) => {
      state.recentlyViewed = [payload, ...state.recentlyViewed.filter((b) => b._id !== payload._id)].slice(0, 6);
      localStorage.setItem('bh_recent', JSON.stringify(state.recentlyViewed));
    },
  },
});

export const { toggleTheme, addRecentlyViewed } = uiSlice.actions;
export default uiSlice.reducer;
