import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCheck } from '../../features/todoSlice';

const TodoItem = ({ text, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleClick = () => {
    console.log(  dispatch(deleteTodo(id)));
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todoItem">
      <input type="checkbox" checked={done} onChange={handleCheck} />
      <span>
        <p className={done && 'todoItem--done'}>{text}</p>
        <button type="button" onClick={handleClick}>
          delete
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
