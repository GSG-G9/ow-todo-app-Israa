/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { setVisibilityFilter } from '../../features/filtersSlice';
import './style.css';

const FilterButton = ({ visibilityFilter, text }) => {
  const currentFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();
  const className = currentFilter === visibilityFilter ? 'selected' : null;
  return (
    <a
      className={classnames(className, 'filter-item')}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </a>
  );
};

FilterButton.propTypes = {
  visibilityFilter: PropTypes.number.isRequired,
  text: PropTypes.number.isRequired,
};
export default FilterButton;
