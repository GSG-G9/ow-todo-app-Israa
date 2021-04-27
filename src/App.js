import React from 'react';

import { useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import { selectTodoList } from './features/todoSlice';
import './App.css';

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app__container">
      <div className="app__todoContainer">
        {todoList.map((item) => (
          <TodoItem text={item.text} done={item.done} id={item.id} />
        ))}
      </div>
      <AddTodo />
    </div>
  );
}

export default App;
