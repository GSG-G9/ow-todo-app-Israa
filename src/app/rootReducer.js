import { combineReducers } from '@reduxjs/toolkit';
import todos from '../features/todoSlice';
import visibilityFilter from '../features/filtersSlice';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export default rootReducer;
