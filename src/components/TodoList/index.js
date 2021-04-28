import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

import { VisibilityFilter } from '../../features/filtersSlice';
import FilterButton from '../FilterButton';
import { deleteTodo } from '../../features/todoSlice';

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
    <ul>
      {todos.map((item) => (
        <TodoItem
          text={item.text}
          done={item.done}
          id={item.id}
          key={item.id}
        />
      ))}
      <div>
        <span>Show: </span>
        <span>
          {' '}
          <strong>{itemsLeft}</strong> item left
        </span>
        <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text="All" />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowActive}
          text="Active"
        />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowCompleted}
          text="Completed"
        />
        <button onClick={onClear}>Clear Completed</button>
      </div>
    </ul>
  );
};

export default TodoList;
