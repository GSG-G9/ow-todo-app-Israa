/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { deleteTodo } from '../../features/todoSlice';
import Checkbox from '../Checkbox';
import './style.css';

const TodoItem = ({ text, done, id }) => {
  const dispatch = useDispatch();
  const className = done ? 'todoItem--done' : null;
  const handleClick = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <li className="todoItem">
      <Checkbox checked={done} id={id} />
      <p className={classnames(className, 'todoContent')}>{text}</p>
      <a className="todoItem__deleteButton" onClick={handleClick}>
        X
      </a>
    </li>
  );
};
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default TodoItem;
