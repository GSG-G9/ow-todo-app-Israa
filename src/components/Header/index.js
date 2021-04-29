/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../features/themeSlice';
import './style.css';

const Header = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.darkMode);
  const handleToggle = () => {
    dispatch(changeTheme(!currentTheme));
  };
  return (
    <div className="header__container">
      <p className="todo-text">TODO</p>
      <input
        className="theme-toggle"
        type="checkbox"
        id="toggle-theme-id"
        checked={currentTheme}
        onChange={handleToggle}
      />
      <label htmlFor="toggle-theme-id" className="theme-label" />
    </div>
  );
};

export default Header;
