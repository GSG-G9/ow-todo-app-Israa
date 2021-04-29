/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCheck } from '../../features/todoSlice';

const Checkbox = ({ checked, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <label className="check__container">
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <span className="check_shape" />
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default Checkbox;
