import { createSlice } from '@reduxjs/toolkit';

export const VisibilityFilter = {
  ShowAll: 'SHOW_ALL',
  ShowCompleted: 'SHOW_COMPLETED',
  ShowActive: 'SHOW_ACTIVE',
};

const initialState = VisibilityFilter.ShowAll;

const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;
export const selectVisibilityFilter = (state) =>
  state.visibilityFilter.VisibilityFilter;
export default visibilityFilterSlice.reducer;
