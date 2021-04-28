import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import { VisibilityFilter } from '../../features/filtersSlice';
import FilterButton from '../FilterButton';

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
  const todos = useSelector((state) =>
    getVisibleTodos(state.todos.todoList, state.visibilityFilter)
  );
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
        <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text="All" />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowActive}
          text="Active"
        />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowCompleted}
          text="Completed"
        />
      </div>
    </ul>
  );
};

export default TodoList;
