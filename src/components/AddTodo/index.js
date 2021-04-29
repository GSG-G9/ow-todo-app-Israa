/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/todoSlice';
import './style.css';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form className="addTodo__container" onSubmit={handleSubmit}>
      <span>
        <label className="check__container">
          <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
          <span className="check_shape" />
        </label>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="addTodo__input"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </span>
    </form>
  );
};

export default AddTodo;
