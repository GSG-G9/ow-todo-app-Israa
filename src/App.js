import React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';
import darkImage from './assets/images/bg-desktop-dark.jpg';
import lightImage from './assets/images/bg-desktop-light.jpg';
import './App.css';

function App() {
  const darkTheme = useSelector((state) => state.theme.darkMode);
  const className = darkTheme ? 'darkMode' : 'lightMode';
  return (
    <div className={classnames(className, 'app__container')}>
      <div className="app__image__container__div">
        <div className="app__image__container">
          <img
            src={darkTheme ? darkImage : lightImage}
            alt="background"
            className="app__image"
          />
        </div>
      </div>
      <div className="app__todo__container__div">
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
