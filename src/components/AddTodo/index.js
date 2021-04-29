import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/todoSlice';
import Checkbox from '../Checkbox';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoText);
    dispatch(
      saveTodo({
        text: todoText,
        done: check,
        id: Date.now(),
      })
    );
    setTodoText('');
  };
  return (
    <form className="input" onSubmit={handleSubmit}>
      <span>
        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />

        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </span>
    </form>
  );
};

export default AddTodo;
