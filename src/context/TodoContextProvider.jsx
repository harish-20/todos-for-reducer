import React, { useReducer, useState } from "react";

import { defaultTodos } from "../data/todos";

export const todoContext = React.createContext({
  todos: [],
  filters: {
    status: "",
    color: "",
  },
  dispatch: () => {},
});

export const TODO_ACTIONS = {
  addTodo: "ADD_TODO",
  removeTodo: "REMOVE_TODO",
  toggleComplete: "TOGGLE_COMPLETE",
  colorChange: "COLOR_CHANGE",
  filterColorChange: "FILTER_COLOR_CHANGE",
  filterStatusChange: "FILTER_STATUS_CHANGE",
};

const todoReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case TODO_ACTIONS.addTodo:
      const newTodo = {
        id: Date.now().toString(),
        title: payload.title,
        checked: false,
        color: "",
      };

      return { ...state, todos: [newTodo, ...state.todos] };

    case TODO_ACTIONS.removeTodo:
      const newTodos = state.todos.filter((todo) => todo.id !== payload.id);

      return { ...state, todos: newTodos };

    case TODO_ACTIONS.colorChange:
      const colorTarget = state.todos.findIndex(
        (todo) => todo.id === payload.id
      );
      state.todos[colorTarget].color = payload.color;

      return { ...state };

    case TODO_ACTIONS.toggleComplete:
      const target = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[target].isDone = !state.todos[target].isDone;

      return { ...state };

    case TODO_ACTIONS.filterColorChange:
      return { ...state, filters: { ...state.filters, color: payload.color } };

    case TODO_ACTIONS.filterStatusChange:
      console.log({
        ...state,
        filters: { ...state.filters, status: payload.status },
      });
      return {
        ...state,
        filters: { ...state.filters, status: payload.status },
      };
    default:
      return state;
  }
};

const defaultTodoState = {
  todos: defaultTodos,
  filters: {
    status: "",
    color: "",
  },
};

const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, defaultTodoState);

  return (
    <todoContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
