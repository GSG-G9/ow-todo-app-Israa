import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/todoSlice';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoText);
    dispatch(
      saveTodo({
        text: todoText,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setTodoText(e.target.value)} />
    </form>
  );
};

export default AddTodo;
