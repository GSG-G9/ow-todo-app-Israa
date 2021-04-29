import { combineReducers } from '@reduxjs/toolkit';
import todos from '../features/todoSlice';
import visibilityFilter from '../features/filtersSlice';
import theme from '../features/themeSlice'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  theme,
});

export default rootReducer;
