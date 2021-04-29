/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoItem from '../TodoItem';

import { VisibilityFilter } from '../../features/filtersSlice';
import FilterButton from '../FilterButton';
import { deleteTodo } from '../../features/todoSlice';
import './style.css';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowCompleted:
      return todos.filter((t) => t.done === true);
    case VisibilityFilter.ShowActive:
      return todos.filter((t) => t.done === false);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    getVisibleTodos(state.todos.todoList, state.visibilityFilter)
  );
  const itemsLeft = todos.reduce((p, c) => (c.done ? p : p + 1), 0);
  const onClear = () => {
    todos.map((todo) => {
      if (todo.done === true) {
        dispatch(deleteTodo(todo.id));
      }
    });
  };
  return (
    <div>
      <ul className="todoList__container">
        {todos.map((item) => (
          <TodoItem
            text={item.text}
            done={item.done}
            id={item.id}
            key={item.id}
          />
        ))}

        <div className="footer">
          <span className="filter-item">{itemsLeft} items left</span>
          <span className="filters">
            <FilterButton
              visibilityFilter={VisibilityFilter.ShowAll}
              text="All"
            />
            <FilterButton
              visibilityFilter={VisibilityFilter.ShowActive}
              text="Active"
            />
            <FilterButton
              visibilityFilter={VisibilityFilter.ShowCompleted}
              text="Completed"
            />
          </span>
          <a onClick={onClear} className="filter-item">
            Clear Completed
          </a>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
