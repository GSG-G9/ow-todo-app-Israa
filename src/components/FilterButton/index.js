import React from 'react';

import { useDispatch } from 'react-redux';

import { setVisibilityFilter } from '../../features/filtersSlice';

export default function FilterButton({ visibilityFilter, text }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </button>
  );
}
