import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  return (
    <div className="app__container">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
