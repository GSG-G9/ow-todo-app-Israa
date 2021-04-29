import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => ({
      ...state,
      darkMode: action.payload,
    }),
  },
});

export const { changeTheme } = themeSlice.actions;
export const selectTheme = (state) => state.darkMode;
export default themeSlice.reducer;
