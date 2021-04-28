import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCheck } from '../../features/todoSlice';

const TodoItem = ({ text, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleClick = () => {
    console.log(dispatch(deleteTodo(id)));
    dispatch(deleteTodo(id));
  };
  return (
    <li className="todoItem">
      <input type="checkbox" checked={done} onChange={handleCheck} />

      <span className={done ? 'todoItem--done' : null}>{text}</span>
      <button type="button" onClick={handleClick}>
        delete
      </button>
    </li>
  );
};

export default TodoItem;
