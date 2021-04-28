import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo, setCheck } from '../../features/todoSlice';
import Checkbox from '../Checkbox';

const TodoItem = ({ text, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleClick = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <li className="todoItem">
      {/* <input type="checkbox" checked={done} onChange={handleCheck} /> */}
      <Checkbox checked={done} id={id} />
      <span className={done ? 'todoItem--done' : null}>{text}</span>
      <button type="button" onClick={handleClick}>
        delete
      </button>
    </li>
  );
};
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default TodoItem;
