import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { changeTheme } from './features/themeSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(changeTheme(!currentTheme));
  };

  return (
    <div className="app__container">
      <div className="app__Header">
        <span>
          TODO
          <button onClick={handleToggle}>toggle</button>
        </span>
        <AddTodo />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
