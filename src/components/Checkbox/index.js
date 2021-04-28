import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheck } from '../../features/todoSlice';

const Checkbox = ({ checked, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return <input type="checkbox" checked={checked} onChange={handleCheck} />;
};

export default Checkbox;
